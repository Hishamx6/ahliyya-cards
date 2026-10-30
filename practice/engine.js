// Adaptive engine: daily mix = 60% weakest topics, 30% Leitner review, 10% new. Deterministic per (Jerusalem date + code).
const ENG=(()=>{
const N=12, BOX=[1,2,4,8,16]; // Leitner intervals (days)
const today=(d=new Date())=>new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Jerusalem"}).format(d);
const dayNum=s=>Math.round(Date.parse(s+"T00:00:00Z")/864e5);
function rng(seed){let h=1779033703^seed.length;for(const ch of seed){h=Math.imul(h^ch.charCodeAt(0),3432918353);h=h<<13|h>>>19}
 return()=>{h=Math.imul(h^h>>>16,2246822507);h=Math.imul(h^h>>>13,3266489909);h^=h>>>16;return (h>>>0)/4294967296}}
const shuf=(a,r)=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const key=it=>it.subject+"|"+it.topic;
function mastery(M,k){const t=M.topics[k];return t&&t.n?t.m:null} // EMA accuracy 0..1
function record(M,it,ok,date){const k=key(it);const t=M.topics[k]||(M.topics[k]={m:0,n:0});
 t.m=t.n?0.7*t.m+0.3*(ok?1:0):(ok?1:0);t.n++;
 const c=M.cards[it.id]||{b:0};c.b=ok?Math.min(c.b+1,BOX.length):1;c.due=dayNum(date)+BOX[c.b-1];c.seen=(c.seen||0)+1;M.cards[it.id]=c}
function playable(it){
 if(!it||!it.q)return false;
 if(it.kind==="mc")return Array.isArray(it.o)&&it.o.length>1&&Number.isInteger(it.a)&&it.a>=0&&it.a<it.o.length;
 return it.a!=null&&String(it.a)!=="";
}
function canon(s){
 return String(s)
  .replace(/[\u0660-\u0669]/g,ch=>String(ch.charCodeAt(0)-0x0660))
  .replace(/[\u06F0-\u06F9]/g,ch=>String(ch.charCodeAt(0)-0x06F0))
  .replace(/[−–—‒]/g,"-")
  .replace(/[⁄∕]/g,"/")
  .replace(/،/g,",")
  .replace(/\s+/g,"");
}
function parseNum(s){
 if(/^[+-]?\d+\/[+-]?\d+$/.test(s)){const [n,d]=s.split("/").map(Number);if(!d)return null;return n/d}
 if(/^[+-]?\d+(?:\.\d+)?$/.test(s))return Number(s);
 return null;
}
function numClose(a,b){
 if(a===b)return true;
 const x=parseNum(a),y=parseNum(b);
 return x!=null&&y!=null&&Math.abs(x-y)<=1e-6;
}
// Accept Arabic digits, unicode minus, and the same value written as a fraction or a decimal. Comma splits a pair unless the key is a single number.
function sameAnswer(input,key){
 const keyC=canon(key);
 let inC=canon(input);
 if(!keyC.includes(",")&&/^[+-]?\d+,\d+$/.test(inC))inC=inC.replace(",",".");
 if(inC===keyC)return true;
 const kp=keyC.split(","),ip=inC.split(",");
 if(kp.length!==ip.length)return false;
 return kp.every((part,i)=>numClose(ip[i],part));
}
function esc(s){return String(s).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch]))}
// One LTR isolate per math/Latin run so Arabic RTL cannot reorder 8 < x < 12 or split y = … + 6x.
function text(s){
 const src=String(s??"");
 const token="[A-Za-z0-9\\u00b0\\u00b2\\u00d7\\u00f7\\u2212\\u2190\\u2192\\u2220%+\\-=<>≤≥.,/()]";
 const re=new RegExp(token+"+(?:\\s+"+token+"+)*","g");
 let out="",i=0,m;
 while((m=re.exec(src))){
  const chunk=m[0].replace(/\s+$/,"");
  if(!/[A-Za-z0-9\u00b2\u00b0\u00d7\u00f7\u2212\u2220]/.test(chunk))continue;
  const end=m.index+chunk.length;
  const cls=/[=<>≤≥]/.test(chunk)?' class="math"':"";
  out+=esc(src.slice(i,m.index))+'<bdi dir="ltr"'+cls+">"+esc(chunk)+"</bdi>";
  i=end;re.lastIndex=end;
 }
 return out+esc(src.slice(i));
}
function build(bank,M,date,code){
 bank=bank.filter(playable);
 const r=rng(date+"#"+(code||"anon")),d=dayNum(date),used=new Set(),mix=[];
 const add=(it,why)=>{if(it&&!used.has(it.id)){used.add(it.id);mix.push({...it,why})}};
 const topics={};bank.forEach(it=>(topics[key(it)]=topics[key(it)]||[]).push(it));
 const score=k=>{const m=mastery(M,k);return m==null?0.5:m}; // unseen topic = 50%
 // 60% weakest: weakest topic of each subject first, then next weakest overall
 const order=shuf(Object.keys(topics),r).sort((a,b)=>score(a)-score(b));
 const subj=["ar","en","ma"],weak=[];subj.forEach(s=>{const k=order.find(k=>k.startsWith(s+"|"));if(k)weak.push(k)});
 order.filter(k=>!weak.includes(k)).slice(0,1).forEach(k=>weak.push(k));
 const nWeak=Math.round(N*.6),nRev=Math.round(N*.3),nNew=N-nWeak-nRev;
 const pools=weak.map(k=>shuf(topics[k],r).sort((a,b)=>((M.cards[a.id]||{}).b||0)-((M.cards[b.id]||{}).b||0)));
 for(let i=0;mix.length<nWeak&&i<200;i++){const p=pools[i%pools.length];if(p)add(p.find(x=>!used.has(x.id)),"weak")}
 // 30% spaced review: due cards, most overdue first; fallback lowest box
 const seen=bank.filter(it=>M.cards[it.id]&&!used.has(it.id));
 const due=shuf(seen,r).sort((a,b)=>M.cards[a.id].due-M.cards[b.id].due);
 due.filter(it=>M.cards[it.id].due<=d).slice(0,nRev).forEach(it=>add(it,"review"));
 // 10% new (plus any unfilled review slots): unseen cards from least-practised topics
 const cnt=k=>(M.topics[k]||{n:0}).n;
 const fresh=shuf(bank.filter(it=>!M.cards[it.id]&&!used.has(it.id)),r).sort((a,b)=>cnt(key(a))-cnt(key(b)));
 for(const it of fresh){if(mix.length>=N)break;if(!mix.some(x=>key(x)===key(it)&&x.why==="new"))add(it,"new")}
 return shuf(mix,r)}
return{today,build,record,mastery,key,N,playable,sameAnswer,text}})();
if(typeof module!=="undefined")module.exports=ENG;
