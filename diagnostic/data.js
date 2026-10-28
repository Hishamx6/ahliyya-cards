const E25="english/لغة إنجليزية 25-26.pdf";const A25="arabic/لغة عربية 25-26.pdf";const M25="math/رياضيات 25-26.pdf";
const SESSIONS={
ar:{name:"عربي",icon:"ض",items:[
{t:"معاني كلمات",ctx:"«تعدّدت في عالمنا الرّاهن وسائل التّرفيه والنّشاطات الشّبابيّة…» (الفقرة 1)",q:"معنى كلمة «الرّاهن» في الفقرة الأولى:",o:["الافتراضي","الحالي","المتطوّر","الواسع"],a:1,src:A25+" – سؤال 2",ex:"الراهن = الحالي، الوقت الحاضر."},
{t:"فهم مقروء",ctx:"«تصل سرعة الهوفربورد 20-30 كيلومترًا في الساعة، ممّا يجعله وسيلة غير آمنة، فضلًا عن كونه لا يحتوي على مكابح أو أيّ وسيلة سيطرة يدويّة.» (فقرة 6)",q:"حسب الفقرة، ليش الهوفربورد غير آمن؟",o:["لأنه غالي","لسرعته وعدم وجود مكابح","لأنه ثقيل","لأنه ممنوع بكل الدول"],a:1,src:A25+" – نص الفقرة 6 (سؤال مُعدّ)",ex:"النص صريح: السرعة + ما في مكابح ولا سيطرة يدويّة."},
{t:"قواعد: علامات الإعراب",q:"كلمة «المستوردونَ» (الفقرة 13):",o:["مرفوعة وعلامة رفعها ثبوت النون","مرفوعة وعلامة رفعها الواو","مرفوعة وعلامة رفعها الضمّة","مبنيّة على الفتح"],a:1,src:A25+" – سؤال 18",ex:"جمع مذكّر سالم يُرفع بالواو. ثبوت النون للأفعال الخمسة."},
{t:"قواعد: اسم الفاعل والمفعول",q:"اسم المفعول من الفعل (يحتوي) هو:",o:["مُحتوى","مُحتَوًا","مُحتَوٍ","مُحتويّ"],a:0,src:A25+" – سؤال 19",ex:"اسم المفعول من غير الثلاثي: مُفتَعَل ← مُحتوى (ومُحتوٍ اسم فاعل)."},
{t:"قواعد: أقسام الكلام",q:"نوع الكلمات (مَن، بعض، باتَ، كي، إيّاكَ) على التوالي:",o:["اسم، اسم، حرف، حرف، اسم","حرف، اسم، حرف، اسم، اسم","حرف، حرف، فعل، حرف، حرف","اسم، اسم، فعل، حرف، اسم"],a:3,src:A25+" – سؤال 20",ex:"مَن اسم موصول/استفهام، بعض اسم، بات فعل ناقص، كي حرف، إيّاك ضمير (اسم)."},
{t:"قواعد: كان وإنّ",q:"اختر الضبط الصحيح: «كان الطقسُ ___»",o:["باردٌ","باردًا","باردٍ","باردُ"],a:1,src:"arabic/مضامين امتحان اللغة العربية 27-26 – بند 17 و19 (سؤال مُعدّ)",ex:"خبر كان منصوب ← باردًا."},
{t:"قواعد: لازم ومتعدٍّ",q:"أيّ فعل لازم (ما بياخد مفعولًا به)؟",o:["كتبَ الدرسَ","جلسَ الطالبُ","قرأَ الكتابَ","فتحَ البابَ"],a:1,src:"arabic/مضامين امتحان اللغة العربية 27-26 – بند 15 (سؤال مُعدّ)",ex:"جلس لازم؛ الباقي متعدية."},
{t:"إكمال جمل",q:"«الناس ليسوا على ___ واحد ولا على عقيدة واحدة… لكلٍّ طريقته في النظر إلى الأمور و___ الأشياء، بل إنّ ما ___ الواحد قد يسوء الآخر، وما يُستقبح اليوم قد ___ غدًا»",o:["قول / معرفة / يُغضب / يُحبّ","رأي / تصوّر / يُرضي / يُستملح","أمر / تفحّص / يستملحه / نرضاه","مبدإ / اعتقاد / يُرضي / نعتنقه"],a:1,src:A25+" – سؤال 21",ex:"يُرضي ضد يسوء، ويُستملح ضد يُستقبح."}]},
en:{name:"English",icon:"E",ltr:true,items:[
{t:"Vocabulary",q:"Absolutely",o:["somewhat","certainly","maybe","rarely"],a:1,src:E25+" – Part III A1",ex:"Absolutely = certainly (بالتأكيد)."},
{t:"Vocabulary",q:"Appreciate",o:["to dislike","to value","to forget","to ignore"],a:1,src:E25+" – Part III A2",ex:"Appreciate = to value (يقدّر)."},
{t:"Vocabulary",q:"Capable of",o:["unable to","afraid of","able to","interested in"],a:2,src:E25+" – Part III A6",ex:"Capable of = able to."},
{t:"Vocabulary",q:"Crucial",o:["unimportant","easy","necessary","optional"],a:2,src:E25+" – Part III A11",ex:"Crucial = very important / necessary."},
{t:"Vocabulary",q:"Contribute",o:["to take","to give","to destroy","to forget"],a:1,src:E25+" – Part III A9",ex:"Contribute = to give (يساهم)."},
{t:"Vocabulary",q:"Demonstrate",o:["to hide","to forget","to show","to imagine"],a:2,src:E25+" – Part III A12",ex:"Demonstrate = to show."},
{t:"Fill in",q:"The building project was ______ because of bad weather conditions.",o:["approved","postponed","proper","progress"],a:1,src:E25+" – Part III B1",ex:"Bad weather → the project was postponed (تأجّل)."},
{t:"Reading",ctx:"\"If students spend too much time playing games, they may not have enough time for schoolwork. This can lead them to feeling stressed and exhausted…\" (para II)",q:"One negative effect of video games in para II:",o:["They improve problem-solving","Students may not have enough time for schoolwork","Games are cheap","Games are calm"],a:1,src:E25+" – Part I Q2 (adapted to MC)",ex:"Para II: too much time → not enough time for schoolwork."},
{t:"Reference",ctx:"\"…games that require players to think strategically or solve puzzles can help them develop their problem-solving skills.\" (para IV)",q:"The word \"them\" refers to:",o:["games","puzzles","players","skills"],a:2,src:E25+" – Part I para IV (reference question, adapted)",ex:"help them = help the players."}]},
ma:{name:"رياضيات",icon:"∑",items:[
{t:"إحصاء",q:"معدّل علامات خالد في 5 امتحانات 72. شو لازم تكون علامته بالسادس ليصير المعدّل 75؟",o:["78","85","90","75"],a:2,src:M25+" – السؤال 3",ex:"6×75 − 5×72 = 450 − 360 = 90."},
{t:"إحصاء",q:"المجموعة 10، 13، 18، 19 ونضيف x بحيث 13 < x < 18. المعدّل يساوي الوسيط. x = ؟",o:["14","15","16","17"],a:1,src:M25+" – السؤال 4",ex:"الوسيط x، والمعدّل (60+x)/5 = x ← 60 = 4x ← x = 15."},
{t:"دالة خطية",q:"المستقيم y = −x + 10 بيقطع المحور x بالنقطة:",o:["(0, 10)","(10, 0)","(−10, 0)","(2, 0)"],a:1,src:M25+" – السؤال 2ب",ex:"y = 0 ← x = 10."},
{t:"دالة خطية",q:"معادلة المستقيم اللي بيمرّ بـ (0,0) وموازي لـ y = −x + 10:",o:["y = x","y = −x","y = 10x","y = −x + 10"],a:1,src:M25+" – السؤال 2ث",ex:"متوازيين = نفس الميل (−1)، ويمرّ بالأصل ← y = −x."},
{t:"معادلة تربيعية",q:"حلول المعادلة 3x(3 − 4x) = 2x(4 − 3x):",o:["x = 0 أو x = 1/6","x = 1/6 فقط","x = 0 أو x = 6","x = 1 أو x = 6"],a:0,src:M25+" – السؤال 7أ",ex:"9x − 12x² = 8x − 6x² ← x − 6x² = 0 ← x(1 − 6x) = 0."},
{t:"قطع مكافئ",q:"نقاط تقاطع y = −x² + 4x + 5 مع المحور x:",o:["(1,0) و (−5,0)","(−1,0) و (5,0)","(0,5) و (0,−1)","(2,0) و (9,0)"],a:1,src:M25+" – السؤال 9أ",ex:"x² − 4x − 5 = 0 ← (x − 5)(x + 1) = 0."},
{t:"قطع مكافئ",q:"رأس القطع المكافئ y = −x² + 4x + 5:",o:["(2, 9)","(−2, 9)","(2, 5)","(4, 5)"],a:0,src:M25+" – السؤال 9ب",ex:"x = −b/2a = 2، y = −4 + 8 + 5 = 9."},
{t:"هندسة",q:"بالمثلث ABC: ∠A = 80°، BD و CE منصّفا الزاويتين B و C ويلتقيان بـ O. ∠BOC = ؟",o:["100°","120°","130°","140°"],a:2,src:M25+" – السؤال 10",ex:"B + C = 100°، نصّهم 50° ← ∠BOC = 180° − 50° = 130°."},
{t:"متباينات",q:"حلّ المتباينة 2(x − 3) < x + 1:",o:["x < 7","x > 7","x < 5","x > −7"],a:0,src:"math/مضامين امتحان رياضيات 27-26 – بند 8 (سؤال مُعدّ)",ex:"2x − 6 < x + 1 ← x < 7."}]}};
