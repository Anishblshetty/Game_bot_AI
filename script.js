// ─── WORD LISTS ───────────────────────────────────────────────────────────────
const WORDS4 = ["able","acid","aged","also","area","army","away","baby","back","ball","band","bank","base","bath","bear","beat","been","bell","best","bike","bill","bird","blow","blue","boat","body","bomb","bond","bone","book","boom","born","both","bulk","burn","busy","call","calm","came","camp","card","care","cart","case","cash","cast","cave","cell","chat","chip","city","clap","clay","clip","club","clue","coal","coat","code","coin","cold","cook","cope","copy","core","corn","cost","coup","crew","crop","cure","dare","dark","data","date","dawn","days","dead","deal","dean","dear","debt","deed","deep","deny","desk","diet","dirt","dish","disk","dock","does","done","door","dose","down","draw","drew","drop","drug","drum","dual","dump","dusk","dust","duty","each","earn","ease","east","edge","else","epic","even","ever","evil","exam","eyes","face","fact","fail","fair","fall","fame","farm","fast","fate","fear","feat","feed","feel","feet","fell","felt","file","fill","film","find","fine","fire","firm","fish","fist","flag","flat","flew","flip","flow","foam","fold","folk","fond","font","food","fool","foot","fore","form","fort","four","free","from","fuel","full","fund","fuse","gain","game","gang","gave","gaze","gear","glow","glue","goes","gold","golf","gone","good","grab","gray","grew","grid","grip","grow","gulf","gust","hack","hair","half","hall","hand","hang","hard","harm","hate","have","head","heal","heap","hear","heat","heel","held","help","here","hero","hide","high","hill","hint","hire","hold","hole","home","hook","hope","horn","host","hour","huge","hung","hunt","hurt","icon","idea","idle","inch","into","iron","jail","join","joke","jump","just","keen","keep","kept","kick","kind","king","knee","knew","lack","lake","lamp","land","lane","last","late","lead","leaf","lean","left","lens","lend","less","lick","life","lift","like","line","link","list","live","load","lock","long","look","loop","lord","lose","loss","lost","loud","love","luck","lung","made","mail","main","make","mall","many","mark","mask","mass","mate","meal","meet","melt","memo","menu","mere","mesh","mild","milk","mill","mine","miss","mode","mood","moon","more","most","move","much","must","nail","name","navy","near","neck","need","news","next","nice","nine","node","none","norm","nose","note","oath","obey","odds","once","only","open","oral","over","pace","pack","page","paid","pain","pair","palm","park","pass","past","path","peak","peel","peer","pick","pile","pill","pine","pink","pipe","plan","play","plot","plow","ploy","plug","plus","poem","poet","poll","pond","pool","poor","pope","pork","port","pose","post","pour","pray","prep","prey","pull","pump","pure","push","quit","race","rack","rage","rain","rank","rare","rate","read","real","reap","rear","rely","rent","rest","rice","rich","ride","ring","riot","rise","risk","road","roam","roar","rock","role","roll","roof","room","root","rope","rose","ruin","rule","rush","rust","safe","sail","sake","sale","salt","same","sand","save","scan","seal","seat","seed","seek","seem","seen","self","sell","shed","ship","shoe","shop","shot","show","shut","sick","side","silk","sing","sink","site","size","skip","slam","slap","slim","slip","slot","slow","snap","snow","soap","sock","soft","soil","sold","sole","some","song","soon","sort","soul","soup","sour","span","spin","spit","spot","spur","star","stay","stem","step","stir","stop","stub","such","suit","sure","swap","swim","tail","take","tale","talk","tall","tank","tape","task","taxi","tear","tell","tend","tent","term","test","than","that","thee","them","then","they","thin","this","thus","tide","tied","till","time","tiny","tire","told","toll","tone","tool","torn","tour","town","trap","tree","trim","trip","true","tube","tuck","tune","turn","twin","type","upon","used","user","vain","vast","very","view","vine","void","vote","wade","wage","wait","wake","walk","wall","want","ward","warm","warn","warp","wary","wave","weak","wear","weed","week","well","went","were","west","what","when","whom","wide","wife","wild","will","wind","wine","wing","wire","wise","wish","with","wood","wore","work","worn","wrap","wren","yell","your","zero","zone","zoom"].filter(w=>w.length===4);
const WORDS5 = ["about","above","abuse","actor","acute","admit","adopt","adult","after","again","agent","agree","ahead","alarm","album","alert","alike","align","alive","alley","allow","alone","along","alter","angel","anger","angle","angry","anime","ankle","annex","apart","apple","apply","apron","arena","argue","arise","armor","aroma","array","arrow","asset","atlas","attic","audio","audit","avoid","awake","award","aware","awful","basic","basis","batch","beach","beard","beast","began","begin","being","below","bench","bible","birth","black","blade","blame","bland","blast","blaze","bleed","blend","bless","blind","bliss","block","blood","bloom","blown","blues","blunt","board","bonus","boost","booth","bored","bound","boxer","brain","brand","brave","bread","break","breed","brick","bride","brief","bring","broad","broke","brown","brush","buddy","built","bunch","burst","buyer","cabin","cable","camel","candy","cargo","carry","catch","cause","chain","chair","chaos","charm","chart","chase","cheap","check","cheek","chess","chest","chick","chief","child","china","choir","chunk","civic","civil","claim","clash","class","clean","clear","climb","clock","clone","close","cloud","coach","coast","color","comic","comma","coral","could","count","court","cover","crack","craft","crane","crash","crazy","cream","creek","crime","crisp","cross","crowd","crown","cruel","crush","curve","cycle","daily","dance","dealt","death","debut","delay","delta","dense","depot","depth","devil","digit","dirty","disco","dizzy","doubt","dough","drama","drank","dream","dress","drift","drink","drive","drone","drove","drunk","dryer","dying","eagle","early","earth","eight","elite","email","empty","enemy","enjoy","enter","entry","equal","error","essay","event","every","exact","excel","exist","extra","fable","faint","fairy","faith","false","fancy","fatal","fault","feast","fence","fever","fiber","field","fifth","fifty","fight","final","first","fixed","flame","flash","fleet","flesh","float","flood","floor","flour","fluid","flute","focus","force","forge","forth","forum","found","frame","frank","fraud","fresh","front","frost","fruit","fully","funny","ghost","giant","given","gland","glass","globe","gloom","glory","glove","going","grade","grain","grand","grant","grasp","grass","grave","great","green","greet","grief","grill","grind","group","grove","guard","guess","guide","guild","guilt","guise","gusto","habit","happy","harsh","heart","heavy","hence","herbs","hinge","hippo","hobby","honor","horse","hotel","house","human","humor","hurry","hyper","ideal","image","imply","inbox","index","indie","inner","input","ionic","issue","ivory","japan","jelly","jewel","joint","judge","juice","juicy","jumpy","karma","kayak","knife","knock","known","label","lance","large","laser","later","laugh","layer","learn","lease","least","legal","lemon","level","light","limit","linen","liner","links","liver","logic","loose","lover","lower","loyal","lucky","lunar","lyric","magic","major","maker","manor","maple","match","maybe","mayor","media","mercy","merge","merit","metal","might","minor","minus","model","money","month","moral","motif","motor","mount","mouse","moved","movie","muddy","music","naive","never","night","ninja","noble","noise","north","noted","novel","nurse","ocean","offer","often","olive","orbit","order","other","outer","owner","oxide","ozone","paint","panel","panic","paper","party","patch","pause","peach","pearl","penny","phase","phone","photo","piano","piece","pilot","pitch","pixel","pizza","place","plain","plane","plant","plaza","plead","pluck","plumb","plume","point","polar","poppy","power","press","price","pride","prime","print","prior","probe","proof","proud","prove","proxy","pulse","pupil","purse","queen","query","quest","queue","quick","quiet","quota","quote","radar","radio","raise","rally","range","rapid","ratio","reach","react","ready","realm","rebel","recap","refer","reign","relax","reply","reuse","rider","ridge","right","rigid","rinse","risky","rival","river","robot","rocky","rouge","rough","round","route","royal","ruler","rusty","sadly","saint","salad","sandy","sauce","scale","scare","scary","scene","scope","score","scout","seize","serve","seven","shaft","shall","shame","shape","share","shark","sharp","sheep","sheer","shelf","shell","shift","shine","shirt","shock","shoot","shore","short","shout","sight","sigma","silly","since","sixth","sixty","sized","skill","skull","slack","slave","sleep","slice","slide","slope","smart","smile","smash","solar","solid","solve","sorry","south","space","spare","spark","speak","speed","spend","spice","spill","spine","spite","split","spoke","sport","squad","stack","staff","stage","stain","stand","stark","start","state","steam","steel","steep","steer","stern","stick","still","stone","store","storm","story","stove","strap","straw","strip","stuck","study","style","sugar","suite","sunny","super","surge","swamp","swear","sweep","sweet","swift","swing","swipe","sword","sworn","table","taboo","taste","teach","tears","tense","terms","their","theme","there","these","thick","thing","think","third","those","three","threw","throw","tiger","tight","timer","tired","title","today","token","topic","total","touch","tough","towel","tower","toxic","trace","track","trade","trail","train","trait","trash","treat","trend","trial","tribe","tried","troll","troop","truck","truly","trunk","truth","tuner","twice","twist","ultra","under","union","unity","until","upper","urban","usage","usher","usual","valid","value","valve","video","vigor","viral","virus","visit","vista","vital","vivid","vocal","voice","voter","vague","waste","watch","water","wedge","weigh","weird","whale","wheat","wheel","where","which","while","white","whole","whose","wider","witch","woman","women","world","worse","worst","worth","would","wound","wrist","wrong","yacht","yield","young","youth","zebra","zesty"].filter(w=>w.length===5);
const WORDS6 = ["abroad","absent","absorb","accent","accept","access","accord","across","acting","action","active","actual","advice","afford","afraid","agency","agenda","almost","always","amount","animal","answer","anyone","anyway","appeal","appear","around","arrive","aspect","assert","assist","attach","attack","attend","author","battle","beauty","before","behalf","behind","belong","beyond","bitter","blazed","border","bought","boxing","bridge","bright","broken","bronze","budget","burden","butter","button","buying","camera","campus","cancel","cannot","carbon","carpet","carrot","castle","cattle","caught","center","change","charge","cheese","choice","choose","chosen","circle","citrus","client","clinic","closed","closer","cobalt","coffee","combat","coming","commit","common","comply","copper","corner","costly","cotton","couple","course","create","credit","crisis","critic","custom","damage","danger","debate","decade","decide","defend","demand","design","detail","detect","differ","dinner","direct","divide","dollar","domain","double","driver","during","easily","eating","editor","effect","effort","either","empire","enable","ending","energy","engage","engine","enough","ensure","entire","escape","estate","evolve","except","expand","expect","expert","export","extend","facing","factor","failed","fallen","family","famous","father","figure","filing","finger","finish","fiscal","flight","flying","follow","forest","forget","formal","formed","foster","fourth","frozen","future","garden","gather","gender","gentle","global","golden","gotten","govern","ground","growth","happen","harbor","health","hidden","higher","highly","hiring","honest","horror","hungry","hunter","impact","import","income","inform","injury","inside","insist","invest","island","itself","jersey","joined","junior","killer","knight","launch","lawyer","leader","league","lesson","letter","lights","linear","listed","listen","little","living","losing","loving","making","manage","manner","market","master","matter","medium","member","mental","method","middle","mirror","mobile","module","moment","mother","motion","moving","murder","museum","mutual","narrow","nation","nature","nearly","needed","nephew","nights","normal","notice","number","object","obtain","office","online","opened","option","orange","others","output","oxygen","parent","passed","pastor","patent","paying","people","period","permit","phrase","planet","player","plenty","police","policy","portal","poster","prefer","pretty","prince","prison","profit","proper","public","purple","pursue","random","reason","recent","record","reduce","region","remain","report","rescue","resist","result","retail","return","reveal","review","reward","rising","rocket","rubber","ruling","safety","salary","sample","saving","saying","script","search","season","second","secret","sector","select","senior","series","settle","should","signal","silver","simple","simply","single","sister","sketch","slight","smooth","social","source","spirit","spread","spring","square","stable","status","stream","street","stress","strict","strike","string","strong","struck","studio","submit","sudden","suffer","summer","supply","surely","survey","switch","symbol","system","talent","target","though","thread","throat","thrown","ticket","timber","tissue","tongue","topics","toward","travel","trying","tunnel","twelve","unable","unique","update","upward","useful","verify","versus","victim","vision","volume","wallet","wealth","weapon","weight","winner","winter","within","wonder","worked","worker","yellow"].filter(w=>w.length===6);
const WORDS7 = ["absence","account","achieve","acquire","address","advance","against","already","another","anxiety","anybody","applied","arrange","article","assault","attempt","attract","balance","barrier","because","believe","beneath","between","capable","captain","capture","cardiac","careful","carried","caution","ceiling","century","certain","chapter","charges","cheaper","climate","collect","college","combine","command","comment","compare","compete","complex","concept","concern","conduct","confirm","connect","consist","contact","contain","content","contest","context","control","convert","counter","country","courage","covered","crucial","culture","current","dealing","decided","declare","default","defense","defined","deliver","despite","develop","devoted","digital","discuss","disease","dismiss","display","dispute","distant","drawing","dreamed","dynamic","economy","elderly","element","embrace","emotion","enabled","enhance","example","exclude","execute","exhibit","explore","extract","failure","fashion","fertile","fiction","finally","finance","finding","foreign","formula","forward","freedom","further","general","genetic","genuine","getting","glimpse","greater","growing","habitat","healthy","hearing","heavily","helping","history","horizon","housing","imagine","improve","include","journey","justice","keeping","knowing","landing","largely","leading","learned","lending","limited","loading","located","machine","manager","maximum","meaning","measure","medical","mention","message","million","minimum","minutes","mission","mixture","monitor","natural","network","nothing","nuclear","observe","offense","officer","opinion","outside","overall","package","parking","partial","partner","passive","pattern","payment","pension","perfect","perform","perhaps","picture","placing","plastic","playing","pleased","pointer","popular","portion","possess","poverty","present","prevent","primary","private","problem","process","product","program","project","promise","protect","provide","purpose","quality","quarter","quickly","rapidly","realize","receive","recover","replace","require","reserve","resolve","respect","restore","revenue","reverse","section","serious","service","several","sharing","shelter","similar","society","someone","special","station","storage","strange","stretch","success","support","suppose","surface","survive","teacher","tension","through","totally","tourism","traffic","turning","typical","upgrade","usually","village","violent","virtual","visible","website","welcome","western","without","working","written"].filter(w=>w.length===7);

const DICT4 = new Set([...WORDS4,"ache","acre","acts","adds","aeon","afar","agar","ajar","akin","aloe","anal","anew","apex","aqua","arch","arcs","arid","arse","arts","awed","axes","axle","bade","bald","bale","bane","bare","bark","barn","bars","bask","bats","bead","beak","beam","bees","beet","berg","bias","bide","bier","bile","bind","blab","blot","blur","boar","bode","bogs","bold","bole","bolt","boon","boos","boot","bore","boss","bout","brag","bran","brat","bray","brew","brim","brow","buff","bugs","buns","burp","cabs","cage","cake","calf","cane","cant","cape","caps","carp","cats","clad","clam","clan","claw","clew","clod","clog","colt","cone","cons","coop","cops","cord","cork","cozy","crud","cues","cups","curl","cuts","dais","dale","dame","damp","dank","darn","dart","dash","daze","deck","deft","deli","dell","dice","dime","dips","dire","dole","dolt","doom","dote","dove","doze","drab","drag","dram","drat","drip","drub","dune","dupe","dyes","earl","eels","emit","envy","etch","even","ewes","expo","fads","fake","fang","fare","fawn","faze","fend","figs","fizz","flak","flaw","flea","flew","flex","flit","flog","flop","foes","fogs","foxy","fray","fret","frog","gait","gale","gall","garb","gash","gasp","gawk","gels","gems","gibe","gist","glad","glen","glib","glob","glop","glum","goad","gobs","gory","gown","gram","grin","grit","grub","gull","hare","hazy","helm","hemp","hews","hick","hilt","hoax","hone","hoof","hoot","howl","hulk","hump","hymn","ibis","imam","inks","isle","itch","jade","jamb","jibe","jinx","jive","jolt","jots","jowl","jugs","kale","keel","kelp","kern","kink","knob","knot","labs","lair","lame","lank","laps","lard","lark","lash","lass","laze","lewd","lids","lieu","lime","limp","limb","lisp","lobe","loft","lops","lore","lout","lure","lurk","mace","mare","mars","mart","mast","maul","maze","mead","mesa","mire","mite","mitt","moat","mobs","mold","mole","mops","moss","moth","molt","muck","mutt","narc","nerd","nits","nobs","noel","nook","nosh","odds","okra","omen","ones","orbs","orca","orts","oven","ovum","oxen","pall","pane","pang","pant","pare","pave","pawl","pawn","pays","peat","pecs","peel","pegs","pelt","peon","perp","pert","pews","pics","pike","pits","pixy","plop","ploy","plum","pods","polo","pomp","pore","pose","pots","pout","prig","prow","puck","puny","pupa","rage","ramp","rang","rant","rasp","rats","raze","rays","reef","reek","reel","refs","rein","rely","rend","repo","rigs","rime","rind","rink","robe","rode","rook","ruby","rump","rune","ruse","saga","sage","salp","sash","sawn","scab","scam","scow","sear","sect","seep","seer","shin","shiv","shod","shun","sill","silo","silt","slab","slag","sloe","slop","slug","slum","slur","smug","smut","snag","snip","snob","snot","snub","soak","soar","soda","sore","sown","spat","spew","spud","spun","stab","stag","stub","stun","suds","talc","tamp","tarn","taro","tarp","taut","teak","teem","temp","thud","thug","tick","tier","tilt","toad","toil","tome","tong","torc","tore","toss","tote","trod","troy","tuft","twig","tyke","vamp","veer","veil","veld","vent","vied","vile","viol","visa","volt","waif","wail","wale","wane","warp","wart","weal","weld","welt","wick","wile","wilt","wisp","woke","womb","woof","writ","yore","zeal","zest","zits"]);
const DICT5 = new Set([...WORDS5,"abled","abode","aback","abash","abbey","abhor","abide","abort","abuzz","abyss","ached","aches","acids","acorn","acrid","acted","adage","added","adept","adorn","agave","agile","aglow","agony","agora","afoot","aging","aided","aloft","aloof","aloud","alpha","allay","allot","alloy","altar","amber","amble","amend","amino","amiss","amity","ample","amuse","anvil","aphid","aptly","arbor","ardor","areal","askew","assay","atone","atoll","augur","avail","axial","baler","banal","bayou","beady","begat","belay","belle","beset","bevel","bigot","bleat","blimp","bloke","blunt","bolts","boozy","bough","brash","brawl","brine","brink","briny","brisk","broil","brook","brood","broth","burly","cacao","cadet","calve","canal","canny","canoe","carat","carol","caste","catty","chant","chaps","chard","chasm","chaff","chafe","chimp","chive","chord","chore","clasp","cleat","cliff","cling","cloak","clown","colon","comer","comet","comfy","conga","corny","covet","cozy","crass","creak","creed","creep","crest","crick","cried","crimp","croup","crumb","crypt","cubit","cubic","dally","daunt","delve","depot","derby","deter","detox","divot","dizzy","dolor","dross","dowry","drool","droop","dumpy","dunce","dusty","dwarf","dwell","easel","edict","eerie","elbow","elfin","ember","emcee","ensue","epoch","erode","evoke","exalt","exert","facet","faded","faint","farce","fatty","fetal","fiery","finch","fjord","flair","flank","flare","flask","flint","flirt","flock","floss","flout","frail","frond","froth","froze","fudge","fuzzy","gamut","gaudy","gauze","gawky","giddy","girth","glean","gloat","gloss","gnash","gnome","golly","gorge","gouge","gourd","graft","grimy","groin","grope","grout","gruel","gruff","guava","guile","gusto","gypsy","hardy","haven","hazel","hefty","helix","hippy","hitch","hoary","hokey","holly","homer","horde","husky","idiom","inane","inert","infer","inlay","inlet","inter","intro","irate","irony","jaded","joist","joust","juror","kapok","kebab","keyed","kitty","knave","knell","koala","kudos","lapse","latch","lathe","leafy","ledge","leech","lithe","litre","livid","llama","loopy","lusty","lying","maize","manly","maxim","mealy","melee","melon","milky","mimic","minty","mocha","moldy","moose","mound","muddy","muggy","nippy","nitty","nifty","notch","nutty","nymph","oddly","offal","opine","optic","orbit","otter","outdo","paddy","pansy","papal","parch","parka","parry","patsy","patty","peaky","penal","perch","pesky","petty","piney","pithy","plaid","plank","plaza","pleat","plink","plonk","pluck","plunk","polka","porky","pouty","prawn","primp","prior","privy","prude","proxy","psalm","pudgy","puffy","pulpy","rainy","ratty","rebus","repay","repel","retro","rhyme","rifle","ripen","rivet","robin","rodeo","roman","rouge","rowdy","ruddy","rupee","saggy","salve","salvo","sappy","scald","scalp","scant","scamp","scoff","scone","scoop","scorn","scuff","seamy","serum","shady","shaky","shale","shank","sheaf","sheen","shoal","showy","shrub","shrug","skiff","skimp","skirt","skulk","slab","slain","slant","slash","slosh","sloth","slunk","slung","slurp","smear","smirk","smite","smoky","snaky","snare","sneak","sneer","snide","snowy","soapy","soggy","sooty","spank","spear","speck","spire","spoof","spook","spore","spout","spawn","spray","spree","sprig","spunk","stamp","stave","stead","steed","steep","stiff","stomp","stout","strut","stump","stunk","stunt","suave","sulky","surly","swath","swoon","tabby","tacky","taffy","taint","tardy","taupe","tawny","tepid","thong","thorn","tinny","tipsy","topaz","towel","torso","torte","toxin","tramp","tread","triad","trice","trove","truce","trump","tuber","tummy","tunic","twang","twill","twirl","udder","ulcer","umber","uncut","upend","upset","usurp","valor","vapid","vault","vaunt","venal","vigil","vicar","viper","visor","vocab","vomit","waltz","warty","weary","weedy","whack","whiff","whine","whirl","whisk","wimpy","windy","witty","wonky","wormy","woozy","wreak","wrest","wring","yucky","yokel","zippy"]);
const DICT6 = new Set([...WORDS6,"abound","abrupt","absurd","adhere","adjust","admire","adrift","aerial","affect","affirm","aflame","afield","aghast","ailing","albeit","albums","alerts","allege","allied","allows","allude","allure","amidst","amused","anchor","anoint","anther","antler","anyhow","apathy","aplomb","append","arched","ardent","armory","ascend","ascent","asleep","assert","astray","astute","attain","auburn","babble","badger","banter","barren","beckon","bedlam","benign","bereft","bicker","blight","blouse","bolder","bonded","boogie","bounce","brawny","bruise","buckle","burrow","cackle","canopy","canyon","careen","casket","cellar","chosen","clench","cobble","cobweb","cookie","courts","cringe","crispy","crunch","cuddle","cursed","dawdle","dazzle","delude","denial","devise","devote","devout","dismal","disown","dither","docile","donkey","doodle","dreary","drudge","dangle","earnest","emboss","empire","endear","engulf","errant","ethnic","excite","exempt","exhort","expire","expose","extort","famine","fathom","feline","fester","fickle","fiddle","fierce","flinch","floppy","flower","foment","forbid","funnel","gabble","garble","garish","garlic","gentle","giggle","goblet","golden","gravel","greedy","grieve","grovel","grudge","grumpy","gurgle","guzzle","haggle","hamlet","handle","hangar","hearty","herald","herein","heroic","hoarse","hobble","hornet","huddle","hurtle","hustle","ignite","impair","impede","impend","indeed","infect","infest","influx","ingest","inhale","intact","intend","invade","ironic","jiggle","jingle","jitter","jostle","jumble","jungle","kitten","lament","lavish","lethal","leeway","linger","limber","liquor","livery","loosen","luster","madden","mangle","marble","meager","mellow","menace","mingle","muster","mutter","nausea","nectar","nettle","nibble","nimble","nodded","nuzzle","obtain","offend","ordeal","paddle","palate","pallid","pamper","pander","pardon","parley","payoff","pebble","pellet","pepper","pester","pickle","pigeon","pilfer","pillar","pimple","pinned","piracy","pirate","placid","plunge","ponder","puddle","pummel","puzzle","quaint","queasy","quirky","rabble","radish","ramble","ravage","renege","repent","ribald","riddle","ripple","robust","roster","rubble","rugged","rumble","sadden","savage","scorch","scrawl","scream","scrimp","scroll","shrine","sickle","simmer","sinful","skewer","sleepy","sloppy","sludge","smudge","snappy","snivel","soothe","sorrel","sponge","spunky","squall","squash","squeak","squeal","squirm","stinky","strife","subdue","subtle","sullen","sultry","sunder","sunken","swampy","swerve","tangle","taunt","tender","tendon","thatch","thrash","thrust","tingle","topple","totter","touchy","trudge","tumble","twitch","tycoon","undone","unfair","unkind","unruly","urgent","vibrant","wrangle","zealous","zigzag"]);
const DICT7 = new Set([...WORDS7,"abandon","abdomen","ability","abridge","absolve","abstain","acclaim","accused","adamant","adverse","affable","afflict","affront","ageless","agonize","ailment","allegory","alliance","altered","amazing","amplify","ancient","amiable","anguish","animate","appease","appoint","apropos","archaic","archive","arduous","arrayed","ascribe","asunder","awesome","balanced","bedrock","beseech","bestowed","bewitch","blossom","bolster","boyhood","brittle","broadly","browser","budding","calcify","catlike","charade","circled","coastal","comfort","conceal","conquer","console","consume","counsel","crucial","devious","dignify","dilemma","discern","discord","disdain","disrupt","distant","diverse","dormant","dubious","durable","earnest","eclipse","elastic","elevate","endemic","enforce","engross","enlarge","enthral","equator","eternal","evident","examine","exclaim","expanse","explode","exploit","fairest","fatigue","fervent","finesse","foolish","forsake","fragile","frantic","fulfill","garland","garnish","glitter","glorify","gradual","graphic","gratify","gravely","greatly","harmful","harmony","hastily","haunted","headway","holding","hopeful","hostile","honored","ignited","illicit","immense","impasse","implied","imposed","impulse","inflame","inhabit","inherit","insight","intense","interim","invalid","involve","justify","laconic","lasting","lateral","lengthy","literal","logical","loyalty","lucidly","magical","mastery","maximum","mindful","mislead","modular","notable","nourish","novelty","obscure","observe","obvious","offbeat","offhand","ongoing","optimal","overdue","overrun","painful","parable","passive","patient","patriot","persist","playful","potency","precise","premier","presume","prevail","prudent","radical","rampant","readily","reality","refined","release","reliant","removed","renewed","resolve","resound","revered","rewards","rooftop","roaming","ruinous","salient","serene","settled","shadowy","shallow","silence","sincere","skilled","soaring","solvent","sparkle","stellar","strident","subdued","sublime","subtler","succumb","surreal","sustain","swiftly","tempted","tenuous","tightly","timidly","unified","unleash","unravel","venture","vibrate","vitally","warring","willing","wistful","worried","zealous"]);
const DICTS = { 4: DICT4, 5: DICT5, 6: DICT6, 7: DICT7 };

const DIFFICULTY_CONFIG = {
  4: { label: "4-Letter Words", badge: "STARTER", badgeClass: "badge-starter", words: WORDS4, maxGuesses: 5, tileSize: "70px", tileFont: "2.2rem" },
  5: { label: "5-Letter Words", badge: "EASY",    badgeClass: "badge-easy",    words: WORDS5, maxGuesses: 6, tileSize: "62px", tileFont: "2rem"   },
  6: { label: "6-Letter Words", badge: "MEDIUM",  badgeClass: "badge-medium",  words: WORDS6, maxGuesses: 6, tileSize: "54px", tileFont: "1.7rem" },
  7: { label: "7-Letter Words", badge: "HARD",    badgeClass: "badge-hard",    words: WORDS7, maxGuesses: 6, tileSize: "46px", tileFont: "1.4rem" }
};

// ─── STATE ───────────────────────────────────────────────────────────────────
let wordLength   = 5;
let answer       = "";
let currentRow   = 0;
let currentCol   = 0;
let currentGuess = [];
let gameOver     = false;
let tiles        = [];
let keyMap       = {};
let allStats     = loadAllStats();

// selection screen state
let selectWordLength = 5;

function cfg()        { return DIFFICULTY_CONFIG[wordLength]; }
function maxGuesses() { return cfg().maxGuesses; }
function wordPool()   { return cfg().words; }
function dict()       { return DICTS[wordLength]; }

// ─── SELECTION SCREEN ────────────────────────────────────────────────────────

function setSelectDiff(len) {
  selectWordLength = len;
  document.querySelectorAll(".select-diff-tab").forEach(b => b.classList.toggle("active", parseInt(b.dataset.len) === len));
}

document.querySelectorAll(".select-diff-tab").forEach(btn => {
  btn.addEventListener("click", () => setSelectDiff(parseInt(btn.dataset.len)));
});

document.getElementById("start-btn").addEventListener("click", () => {
  // Sync main game difficulty bar
  wordLength = selectWordLength;
  document.querySelectorAll(".diff-btn").forEach(b => b.classList.toggle("active", parseInt(b.dataset.len) === wordLength));

  const screen = document.getElementById("select-screen");
  screen.classList.add("hidden");
  setTimeout(() => { screen.style.display = "none"; }, 350);

  init();
});

// ─── GAME INIT ───────────────────────────────────────────────────────────────

function init() {
  const pool = wordPool();
  answer = pool[Math.floor(Math.random() * pool.length)].toUpperCase();
  startGame();
}

function startGame() {
  currentRow   = 0;
  currentCol   = 0;
  currentGuess = [];
  gameOver     = false;
  keyMap       = {};

  applyTileSize();
  buildBoard();
  resetKeyboard();

  const badge = document.getElementById("mode-badge");
  badge.textContent = cfg().badge;
  badge.className   = cfg().badgeClass;

  const modeLabel = document.getElementById("mode-label");
  modeLabel.childNodes[modeLabel.childNodes.length - 1].textContent = " " + cfg().label;

  document.getElementById("game-over-section").style.display = "none";
}

function applyTileSize() {
  const root = document.documentElement;
  root.style.setProperty("--tile-size", cfg().tileSize);
  root.style.setProperty("--tile-font", cfg().tileFont);
}

function buildBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";
  board.style.gridTemplateRows    = `repeat(${maxGuesses()}, var(--tile-size))`;
  board.style.gridTemplateColumns = `repeat(${wordLength}, var(--tile-size))`;
  tiles = [];
  for (let r = 0; r < maxGuesses(); r++) {
    tiles[r] = [];
    for (let c = 0; c < wordLength; c++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      board.appendChild(tile);
      tiles[r][c] = tile;
    }
  }
}

function resetKeyboard() {
  document.querySelectorAll(".key").forEach(k => k.removeAttribute("data-state"));
}

// ─── DIFFICULTY BUTTONS (header, in-game) ────────────────────────────────────

document.querySelectorAll(".diff-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    // Open select screen for new game with chosen difficulty
    selectWordLength = parseInt(btn.dataset.len);

    document.querySelectorAll(".select-diff-tab").forEach(b => b.classList.toggle("active", parseInt(b.dataset.len) === selectWordLength));

    const screen = document.getElementById("select-screen");
    screen.style.display = "";
    screen.classList.remove("hidden");
  });
});

// ─── INPUT ───────────────────────────────────────────────────────────────────

document.addEventListener("keydown", e => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (document.getElementById("select-screen").style.display !== "none") return;
  handleInput(e.key);
});

document.querySelectorAll(".key").forEach(btn => {
  btn.addEventListener("click", () => handleInput(btn.dataset.key));
});

function handleInput(key) {
  if (gameOver) return;
  if (key === "Enter")          submitGuess();
  else if (key === "Backspace") deleteLetter();
  else if (/^[a-zA-Z]$/.test(key)) addLetter(key.toUpperCase());
}

function addLetter(letter) {
  if (currentCol >= wordLength) return;
  const tile = tiles[currentRow][currentCol];
  tile.textContent    = letter;
  tile.dataset.letter = letter;
  tile.classList.remove("pop");
  void tile.offsetWidth;
  tile.classList.add("pop");
  currentGuess.push(letter);
  currentCol++;
}

function deleteLetter() {
  if (currentCol <= 0) return;
  currentCol--;
  currentGuess.pop();
  const tile = tiles[currentRow][currentCol];
  tile.textContent = "";
  delete tile.dataset.letter;
}

// ─── SUBMIT ──────────────────────────────────────────────────────────────────

function submitGuess() {
  if (currentCol < wordLength) { shakeTiles(); showToast("Not enough letters", "error"); return; }
  const guess = currentGuess.join("").toLowerCase();
  if (!dict().has(guess)) { shakeTiles(); showToast("Not a valid word!", "error"); return; }
  const result = evaluateGuess(guess.toUpperCase());
  revealTiles(result, guess.toUpperCase(), () => {
    const won = result.every(r => r === "correct");
    if (won) {
      setTimeout(() => {
        bounceTiles();
        showToast(getWinMessage(currentRow + 1), "win");
        recordResult(true, currentRow + 1);
        gameOver = true;
        setTimeout(() => openStatsModal(true), 2200);
      }, 200);
    } else if (currentRow >= maxGuesses() - 1) {
      setTimeout(() => {
        showToast(answer, "error", 3500);
        recordResult(false, null);
        gameOver = true;
        setTimeout(() => openStatsModal(false), 2200);
      }, 200);
    }
    currentRow++;
    currentCol   = 0;
    currentGuess = [];
  });
}

function evaluateGuess(guess) {
  const result = Array(wordLength).fill("absent");
  const answerArr = answer.split("");
  const guessArr  = guess.split("");
  for (let i = 0; i < wordLength; i++) {
    if (guessArr[i] === answerArr[i]) { result[i] = "correct"; answerArr[i] = null; guessArr[i] = null; }
  }
  for (let i = 0; i < wordLength; i++) {
    if (guessArr[i] === null) continue;
    const idx = answerArr.indexOf(guessArr[i]);
    if (idx !== -1) { result[i] = "present"; answerArr[idx] = null; }
  }
  return result;
}

function revealTiles(result, guess, onComplete) {
  const DELAY = 280;
  for (let c = 0; c < wordLength; c++) {
    const tile = tiles[currentRow][c];
    const state = result[c];
    setTimeout(() => {
      tile.classList.add("flip");
      setTimeout(() => { tile.dataset.state = state; updateKey(guess[c], state); }, DELAY / 2);
    }, c * DELAY);
  }
  setTimeout(onComplete, wordLength * DELAY + 100);
}

function updateKey(letter, state) {
  const key = document.querySelector(`.key[data-key="${letter.toLowerCase()}"]`);
  if (!key) return;
  const priority = { correct: 3, present: 2, absent: 1 };
  const current  = keyMap[letter] || "";
  if ((priority[state] || 0) > (priority[current] || 0)) { keyMap[letter] = state; key.dataset.state = state; }
}

function shakeTiles() {
  for (let c = 0; c < currentCol; c++) {
    const tile = tiles[currentRow][c];
    tile.classList.remove("shake"); void tile.offsetWidth; tile.classList.add("shake");
  }
}

function bounceTiles() {
  for (let c = 0; c < wordLength; c++) {
    setTimeout(() => {
      const tile = tiles[currentRow][c];
      tile.classList.remove("bounce"); void tile.offsetWidth; tile.classList.add("bounce");
    }, c * 80);
  }
}

// ─── TOAST ───────────────────────────────────────────────────────────────────

function showToast(message, type = "", duration = 1600) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.classList.add("toast");
  if (type) toast.classList.add(type);
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add("fade-out"); setTimeout(() => toast.remove(), 400); }, duration);
}

function getWinMessage(attempts) {
  return ["🔥 Genius!", "✨ Magnificent!", "💎 Impressive!", "🌟 Splendid!", "👍 Great!", "😅 Phew!"][attempts - 1] || "Nice!";
}

// ─── STATS ───────────────────────────────────────────────────────────────────

function loadAllStats() {
  try { return JSON.parse(localStorage.getItem("wordleplus_stats")) || makeAllStats(); }
  catch { return makeAllStats(); }
}
function makeAllStats() { return { 4: defaultStats(5), 5: defaultStats(6), 6: defaultStats(6), 7: defaultStats(6) }; }
function defaultStats(guesses) { return { played: 0, wins: 0, streak: 0, maxStreak: 0, distribution: Array(guesses).fill(0) }; }
function saveAllStats() { localStorage.setItem("wordleplus_stats", JSON.stringify(allStats)); }
function currentStats() { if (!allStats[wordLength]) allStats[wordLength] = defaultStats(maxGuesses()); return allStats[wordLength]; }

function recordResult(won, guessCount) {
  const s = currentStats(); s.played++;
  if (won) { s.wins++; s.streak++; if (s.streak > s.maxStreak) s.maxStreak = s.streak; s.distribution[guessCount - 1]++; }
  else { s.streak = 0; }
  saveAllStats();
}

function openStatsModal(won) {
  const s   = currentStats();
  const pct = s.played === 0 ? 0 : Math.round((s.wins / s.played) * 100);
  document.getElementById("modal-mode-tag").textContent   = cfg().badge + " — " + cfg().label;
  document.getElementById("stat-played").textContent      = s.played;
  document.getElementById("stat-winpct").textContent      = pct + "%";
  document.getElementById("stat-streak").textContent      = s.streak;
  document.getElementById("stat-maxstreak").textContent   = s.maxStreak;
  const barsEl = document.getElementById("dist-bars");
  barsEl.innerHTML = "";
  const maxVal = Math.max(...s.distribution, 1);
  s.distribution.forEach((count, i) => {
    const pctWidth  = Math.max(10, Math.round((count / maxVal) * 100));
    const isCurrent = won && (currentRow - 1) === i;
    const row = document.createElement("div");
    row.className = "dist-bar-row";
    row.innerHTML = `<span class="guess-num">${i + 1}</span><div class="dist-bar-outer"><div class="dist-bar-inner ${isCurrent ? "current" : ""}" style="width:${pctWidth}%">${count}</div></div>`;
    barsEl.appendChild(row);
  });
  if (gameOver) {
    document.getElementById("game-over-section").style.display = "block";
    document.getElementById("answer-display").textContent = answer;
  }
  document.getElementById("stats-modal").classList.add("open");
}

// ─── MODAL CONTROLS ──────────────────────────────────────────────────────────

document.getElementById("stats-btn").addEventListener("click", () => openStatsModal(false));
document.getElementById("modal-close-btn").addEventListener("click", () => document.getElementById("stats-modal").classList.remove("open"));
document.getElementById("stats-modal").addEventListener("click", e => {
  if (e.target === document.getElementById("stats-modal")) document.getElementById("stats-modal").classList.remove("open");
});

// After completing a word, "Exit to Home" redirects back to the select screen (home page)
document.getElementById("new-game-btn").addEventListener("click", () => {
  document.getElementById("stats-modal").classList.remove("open");
  // Redirect to home page (the select screen / index.html)
  window.location.href = "index.html";
});

// ─── BOOT ────────────────────────────────────────────────────────────────────
// Show select screen on load — don't auto-start the game
// (select screen is already visible by default in HTML)
