
// ============ 努努图鉴配置 ============
const CREATURES = {
  xia: {
    id:'xia', name:'虾努', img:'nu/xia.png', code:'ARCHIVE ISA-XN-11',
    tag:'危险·高', danger:'危险等级：高（群体行动时提升至极高）', accent:'#E63946', accent2:'#4ecdc4',
    desc:'通体鲜红、覆满浓密绒毛的11cm微型群居生物，听觉敏锐、攻击性强。',
    leitmotiv:'听觉敏感·群居·抱脸窒息',
    ency:{
      form:'体型：微型生物，体长约11cm<br>体色：通体高度饱和的鲜红色，视觉警示性显著<br>体表：全身覆盖异常浓密、柔软的细短绒毛，质感类似高级绒布',
      behav:'听觉敏感，特定词汇（如"煮熟的小龙虾""海底的小蟑螂"）会触发猛烈头锤<br>攻击性高，用短肢抱住敌人头部使其窒息<br>高度群居，手牵手编织巨网以抱头窒息或防范天敌（如猫头鹰）<br>极危急时召唤50万虾籽自保',
      survive:'严禁提及联想到其外观、烹饪或贬低性词汇（如"煮熟""红色""龙虾""小蟑螂""美味"）<br>遭单个虾努"抱脸"时立即装晕，常能使其误判而松脱<br>见群体"手牵手"勾连织网，即刻反向逃离'
    },
    safe:['小镇','绒毛','可爱','触须','群居','潮池','珊瑚','柔软','微型','图鉴','探索','调查','海洋','神秘','努努','拥抱','绒布','鲜红'],
    danger:['煮熟','龙虾','美味','红色','小蟑螂','麻辣','清蒸','爆炒','油炸','十三香'],
    qte:{ A:'装睡', B:'捂脸', C:'屏息' },
    qteTip:'虾努凑近了！按它要求的按键（键盘 A/B/C 或下方按钮）装晕蒙混过关。'
  },
  shutiao: {
    id:'shutiao', name:'薯条努', img:'nu/shutiao.png', code:'ARCHIVE ISA-ST-11',
    tag:'危险·低', danger:'危险等级：低（需警惕共生风险）', accent:'#E8A33D', accent2:'#F4C95D',
    desc:'穿「一难高中」仿制校服、斜挎纯白亚麻小包的11cm温和胆小生物，随身带一袋开封薯条。',
    leitmotiv:'温和胆小·薯条疗伤·警惕鸥',
    ency:{
      form:'体型：微型生物，体长约11cm<br>体表：穿着「一难高中」微型仿制校服，肩部斜挎纯白色亚麻材质小包<br>标识性携带物：随身携带着一袋开封薯条，散发强烈油炸碳水化合物香气',
      behav:'性格温和胆小，对人类的初始友善态度，无主动攻击，遇威胁优先蜷缩躲藏<br>薯条含特殊代谢产物，可愈合创口镇痛；判断求助者无恶意会赠1-3根薯条并缔结共生契约<br>接受治疗后需承担防御天敌「鸥」的义务——鸥会抢薯条甚至叼走薯条努本体<br>主动干预鸥袭击可获感激，高概率获赠整袋薯条（5-7根）或校服纽扣纪念物',
      survive:'受伤接近需极缓极轻，禁举手与突发声响，惊扰致其逃离<br>治疗后进入强制警戒，需监控环境≥15分钟；见鸥即刻驱赶并护送至安全处<br>防护优先级：薯条努本体 ＞＞ 薯条袋 ＞ 散落薯条<br>严禁触摸校服或挎包、强夺薯条，违者永久丧失信任并视为敌对'
    },
    safe:['酥脆','金黄','热气','盐粒','香喷','刚炸','土豆','图鉴','探索','努努','温暖','早餐','快乐','分享','调查','校服','亚麻','友好'],
    danger:['回锅','变软','凉了','受潮','嚼蜡','油腻','久放','冷掉','微波','回潮'],
    qte:{ A:'装脆', B:'挺直', C:'屏息' },
    qteTip:'薯条努凑近了！按它要求的按键（键盘 A/B/C 或下方按钮）装脆蒙混过关。'
  },
  apple: {
    id:'apple', name:'苹果妹努', img:'nu/apple.png', code:'ARCHIVE ISA-AM-11',
    tag:'危险·高', danger:'危险等级：高（精神奴役风险）', accent:'#D7405A', accent2:'#7FD17A',
    desc:'头戴红苹果发夹、斜挎红白格子包的11cm微型生物，携诱人苹果，擅蛊惑与精神控制。',
    leitmotiv:'蛊惑精神控制·Kitty护体·禁触尾',
    ency:{
      form:'体型：微型生物，体长约11cm<br>外观：头戴红色双苹果发夹，红白上衣与蓝短裤，斜挎红白格子挎包，身后白色圆滚毛茸茸小尾巴<br>标识性携带物：随身1-数个色泽红润饱满的苹果，视觉诱惑极强<br>跟宠：绘有Kitty猫图案的纸片',
      behav:'以可爱外观与诱人苹果降低警惕并主动搭话<br>能蛊惑目标自愿食用毒苹果，食用者立即陷入精神控制成为奴隶（洗衣做饭等）<br>玩心重，奴役数日后多解除控制，奴隶或被丢弃或转赠他努<br>受攻击或遇天敌（鸥、鹰）时，纸片化为巨型Kitty猫实体护体<br>白色尾部极具迷惑性，严禁触摸，触碰即遭苹果投掷攻击',
      survive:'绝对视觉规避，严禁接受或食用其苹果，遵循"不看不听不吃"<br>遭遇不可搭话，闭眼掩耳、安静迅速远离<br>若已受控制保持镇静等待，奴役期通常不物理伤害，切勿激烈反抗<br>严禁触摸尾部及身体，受控期摸尾将被舍弃并转赠他努'
    },
    safe:['红润','香甜','新鲜','饱满','清脆','漂亮','枝头','图鉴','探索','努努','清晨','露水','健康','可爱','调查','微风','格子','发夹'],
    danger:['皱皮','虫眼','烂心','酸涩','蔫了','磕伤','落地','斑驳','氧化','发霉'],
    qte:{ A:'装淡', B:'捂脸', C:'屏息' },
    qteTip:'苹果妹努凑近了！按它要求的按键（键盘 A/B/C 或下方按钮）装淡定蒙混过关。'
  },
  younian: {
    id:'younian', name:'幼年努', img:'nu/younian.png', code:'ARCHIVE ISA-YN-11',
    tag:'危险·中', danger:'危险等级：中（价值与风险并存）', accent:'#5BC8E8', accent2:'#FFD166',
    desc:'超微型6cm、蓝衣黑裤、大蓝眼带笑嘴的高度可爱化生物，极度胆小。',
    leitmotiv:'胆小爱哭·泪珠为宝·警惕树懒',
    ency:{
      form:'体型：超微型生物，体长约6cm<br>外观：蓝色上衣与黑色短裤，圆润脸庞、比例过大的蓝色眼睛与始终带笑的嘴巴，高度"可爱化"外形',
      behav:'性格极胆小，对人类普遍戒备（源于历史上被拐带事件）<br>受惊哭泣掉泪珠：恐惧泪珠含诅咒，喜悦泪珠为小镇最珍贵货币与宝物<br>通常不单独行动，极少数情况下意外落单<br>受攻击或遇天敌（如树懒）发大哭声（警报响彻小镇），其他努努赶往',
      survive:'发现独立幼年努优先确保安全并联系其他努努；特别警惕天敌树懒<br>出示信物建信任：薯条努薯条(+2)/纽扣(+20)、苹果妹努苹果(+2)、猫猫努毛球(+5)<br>意外引发哭泣应后退并用发光小物件转移注意力<br>得认可或被赠小珍珠（喜悦泪珠），可用于贿赂其他努努<br>严禁拐带/隔离/诱骗，违者触发全镇努努通缉'
    },
    safe:['可爱','圆脸','蓝眼','笑嘴','珍珠','发光','玩具','图鉴','探索','努努','幼仔','胆小','温柔','信任','调查','小镇','友善','陪伴'],
    danger:['拐带','隔离','诱骗','捕捉','惊吓','树懒','黑影','抓走','囚禁','伤害'],
    qte:{ A:'退后', B:'示好', C:'安静' },
    qteTip:'幼年努受惊了！按它要求的按键（键盘 A/B/C 或下方按钮）安抚它。'
  },
  cunguan: {
    id:'cunguan', name:'村官努', img:'nu/cunguan.png', code:'ARCHIVE ISA-CG-11',
    tag:'危险·中', danger:'危险等级：中（绝对中立·违规严惩）', accent:'#8D6748', accent2:'#E63946',
    desc:'穿棕色小西装、红领结、身后白大尾巴的11cm微型执政官，理性中立。',
    leitmotiv:'秩序化身·Kitty执法·在意尾巴',
    ency:{
      form:'体型：微型生物，体长约11cm<br>外观：棕色小西装与红色领结，身后圆滚滚毛茸茸的白色大尾巴<br>跟宠：绘有Kitty猫图案的纸片',
      behav:'小镇执政官，全面管理日常事务、维持秩序与规则执行<br>与苹果妹努被动激发不同，可自由操控Kitty实体出现与消失，用作护卫/威慑/执行<br>对外来物种原则性中立，不主动攻击亦不示好，违规将严厉处置<br>工作负荷过重时，尾巴会掉毛',
      survive:'保持礼貌与距离，交流简洁正式，避免冗长情绪化、不打断其工作<br>绝对禁止违规：破坏秩序/攻击努努/拐带幼年努 → Kitty实体压制及全镇通缉<br>在意自己尾巴，提供专业护理或解决毛发问题可极大提升好感，或获特殊奖励'
    },
    safe:['秩序','规则','礼貌','正式','简洁','西装','领结','尾巴','护理','图鉴','探索','努努','中立','公务','敬业','调查','小镇','公正'],
    danger:['违规','破坏','攻击','拐带','打断','冗长','情绪','喧哗','冒犯','混乱'],
    qte:{ A:'鞠躬', B:'简明', C:'退下' },
    qteTip:'村官努审视你！按它要求的按键（键盘 A/B/C 或下方按钮）合规应对。'
  }
};
const CREATURE_ORDER = ['xia','shutiao','apple','younian','cunguan'];

// 图片预加载（第三关用图）
const creatureImgs = {};
CREATURE_ORDER.forEach(k=>{ const im=new Image(); im.src=CREATURES[k].img; creatureImgs[k]=im; });

// 额外素材预加载（海鸥 ou、树懒 nagi）
const extraImgs = {};
['ou','nagi'].forEach(n=>{ const im=new Image(); im.src='nu/'+n+'.png'; extraImgs[n]=im; });

// 进度（每种努 0-3 已通关关卡数，caught=是否已收服）
let progress = {};
let caught = {};
CREATURE_ORDER.forEach(k=>{
  progress[k] = parseInt(localStorage.getItem('nunu_'+k+'_progress')||'0',10);
  caught[k] = localStorage.getItem('nunu_'+k+'_caught')==='true';
});

function saveState(){
  CREATURE_ORDER.forEach(k=>{
    localStorage.setItem('nunu_'+k+'_progress', String(progress[k]));
    localStorage.setItem('nunu_'+k+'_caught', caught[k] ? 'true':'false');
  });
}

let currentCreature = 'xia';

// 各努拥有各自独立的 3 个游戏（key 对应 GAMES 注册表中的小游戏）
function levelsFor(c){
  if(c.id==='xia'){
    return [
      { no:1, game:'taboo',     name:'言语禁忌',   desc:'点击绿色安全词得分，避开红色禁忌词。存活到时间结束！' },
      { no:2, game:'net',       name:'逃脱考验',   desc:'指针扫到绿色缺口时点击屏幕逃脱 5 次！时机要准，别撞上陷阱。' },
      { no:3, game:'faint',     name:'装晕求生',   desc:'虾努凑近时，按它要求的 A / B / C 键装晕蒙混——冷静度达标即可过关。' }
    ];
  }
  if(c.id==='shutiao'){
    return [
      { no:1, game:'pinIn',        name:'见缝插针·救薯条', desc:'薯条努被海鸥捉走、困在一枚旋转的蛋壳里！看准缝隙点击插入薯条，插满 12 根且互不撞上，蛋壳裂开、薯条努获救。' },
      { no:2, game:'seagullDodge', name:'海鸥围攻·躲蛋袭', desc:'海鸥又来抓薯条努！点击屏幕带它左右躲开不断落下的蛋，撑过 20 秒即成功。' },
      { no:3, game:'fryStack',     name:'叠罗汉·平衡塔', desc:'点击在晃动处放下同伴薯条，落点要贴近塔心，叠满 10 根即过关；歪太多塔会倒！' }
    ];
  }
  if(c.id==='younian'){
    return [
      { no:1, game:'youSoothe',  name:'安抚逗笑·发光玩具', desc:'幼年努受惊哭泣，恐惧泪珠含诅咒。点击发光玩具逗它笑、收集喜悦泪珠（小珍珠），别让恐惧填满！' },
      { no:2, game:'youProtect', name:'树懒来袭·护幼努',   desc:'天敌树懒来袭！点击屏幕带幼年努左右躲开，点树懒把它吓走，撑过 20 秒。' },
      { no:3, game:'youTrust',   name:'信物认亲·建信任',   desc:'出示信物建立信任（纽扣+20/毛球+5/薯条+2/苹果+2），突发惊吓时点发光玩具安抚，信任满 100 即获赠小珍珠。' }
    ];
  }
  if(c.id==='cunguan'){
    return [
      { no:1, game:'cgQuery', name:'答询合规·守秩序', desc:'村官努问政，从三个做法中选出合规的那一个。选错会被 Kitty 压制、扣信任！' },
      { no:2, game:'cgKitty', name:'Kitty实体·执法',   desc:'违规者在逃！点击它派出 Kitty 实体镇压，压制满 14 名即恢复秩序。' },
      { no:3, game:'cgTail',  name:'顺尾护理·顺毛',   desc:'村官努工作过载尾巴掉毛，点击毛结为它顺毛；它办公时（请勿打扰）别乱点，好感满 100 即可。' }
    ];
  }
  // apple
  return [
    { no:1, game:'laneChoice', name:'kitty猫横冲直撞', desc:'三道通道中 2 条冲来横冲直撞的 kitty。点选一条通道放苹果妹努通过，选对安全通道才能过关！' },
    { no:2, game:'appleGuard', name:'护花·挡皱词', desc:'点击「皱皮/虫眼」等禁忌词把它打掉，别让它们飘到苹果妹努身上戳她脸红。撑过 22 秒！' },
    { no:3, game:'kittyGuard', name:'Kitty护体·挡攻击', desc:'天敌（鸥/鹰）袭来！移动苹果妹努的 Kitty 实体挡在她身前，护下所有攻击、撑过 20 秒。' }
  ];
}


// ============ 页面切换 ============
const pages = {
  home: document.getElementById('homePage'),
  level: document.getElementById('levelPage'),
  game: document.getElementById('gamePage'),
  ency: document.getElementById('encyPage'),
};
const backBtn = document.getElementById('backBtn');
const bookBtn = document.getElementById('bookBtn');
const ttl = document.getElementById('ttl');
let backTarget = 'home';

function showPage(name, title){
  Object.values(pages).forEach(p=>p.classList.add('hidden'));
  pages[name].classList.remove('hidden');
  if(name==='home'){ backBtn.classList.add('hidden'); bookBtn.classList.remove('hidden'); }
  else { backBtn.classList.remove('hidden'); }
  if(title) ttl.textContent = title;
}

function goHome(){ stopGame(); renderHome(); showPage('home','努努小镇'); }
backBtn.addEventListener('click', ()=>{
  if(!pages.game.classList.contains('hidden')){ stopGame(); showLevelPage(); }
  else if(!pages.level.classList.contains('hidden')) goHome();
  else if(!pages.ency.classList.contains('hidden')) goHome();
  else goHome();
});

// ============ 首页 ============
let creatureTrack = null, creatureDots = null;
function renderHome(){
  const track = document.getElementById('creatureTrack');
  const dots = document.getElementById('creatureDots');
  track.innerHTML = ''; dots.innerHTML = '';
  CREATURE_ORDER.forEach((k,idx)=>{
    const c = CREATURES[k];
    const p = progress[k], caughtp = caught[k];
    const card = document.createElement('div');
    card.className = 'creature-card';
    card.innerHTML =
      '<div class="cc-top">'+
        '<div class="cc-avatar"><img src="'+c.img+'" alt="'+c.name+'"></div>'+
        '<div class="cc-info">'+
          '<div class="cc-name">'+c.name+' <span class="cc-tag">'+c.tag+'</span></div>'+
          '<div class="cc-code">'+c.code+'</div>'+
          '<div class="cc-desc">'+c.desc+'</div>'+
        '</div>'+
      '</div>'+
      '<div class="cc-status">'+
        '<span style="color:#a08a9a;">挑战进度</span>'+
        '<div class="dots">'+
          '<div class="dot'+(0<p?' on':'')+'"></div>'+
          '<div class="dot'+(1<p?' on':'')+'"></div>'+
          '<div class="dot'+(2<p?' on':'')+'"></div>'+
        '</div>'+
        (caughtp?'<span class="caught-badge">✓ 已收服</span>':'')+
      '</div>'+
      '<button class="start-btn'+(caughtp?' done':'')+'">'+
        (caughtp?'已收服 · 重玩挑战':(p>0?'继续调查'+c.name:'开始调查'+c.name))+'</button>';
    card.querySelector('.start-btn').addEventListener('click', ()=>{ currentCreature=k; showLevelPage(); });
    track.appendChild(card);
    const d = document.createElement('div');
    d.className = 'sdot' + (idx===0?' on':'');
    d.addEventListener('click', ()=> scrollToCard(idx));
    dots.appendChild(d);
  });
  creatureTrack = track; creatureDots = dots;
  track.onscroll = updateDots;
  const grid = document.getElementById('caughtGrid');
  grid.innerHTML = '';
  CREATURE_ORDER.forEach(k=>{
    const el = document.createElement('div');
    el.className = 'locked-item';
    if(caught[k]){
      el.innerHTML = '<img src="'+CREATURES[k].img+'" alt="'+CREATURES[k].name+'">';
    } else {
      el.textContent = '🔒';
    }
    grid.appendChild(el);
  });
}
function scrollToCard(idx){
  const cards = creatureTrack.children;
  if(cards[idx]) creatureTrack.scrollTo({ left: cards[idx].offsetLeft - 2, behavior:'smooth' });
}
function updateDots(){
  if(!creatureTrack || !creatureDots) return;
  const center = creatureTrack.scrollLeft + creatureTrack.clientWidth/2;
  let active = 0, best = 1e9;
  Array.from(creatureTrack.children).forEach((c,i)=>{
    const cc = c.offsetLeft + c.offsetWidth/2;
    const d = Math.abs(cc - center);
    if(d<best){ best=d; active=i; }
  });
  Array.from(creatureDots.children).forEach((d,i)=> d.classList.toggle('on', i===active));
}
bookBtn.addEventListener('click', ()=>{
  const firstCaught = CREATURE_ORDER.find(k=>caught[k]);
  if(!firstCaught){
    openResult('❓','图鉴空空如也','完成任意一只努的全部 3 项挑战\n才能将它收录进图鉴。',[{t:'知道了',cls:'',fn:closeResult}]);
    return;
  }
  currentCreature = firstCaught;
  renderEncy();
  document.getElementById('encyStamp').style.display = 'block';
  showPage('ency', currentCreatureName()+' · 图鉴');
});
function currentCreatureName(){ return CREATURES[currentCreature].name; }

// ============ 图鉴渲染 ============
function renderEncy(){
  const c = CREATURES[currentCreature];
  document.getElementById('encyCode').textContent = c.code;
  document.getElementById('encyImg').src = c.img;
  document.getElementById('encyName').textContent = c.name.split('').join(' ');
  document.getElementById('encyDanger').textContent = c.danger;
  document.getElementById('encyForm').innerHTML = c.ency.form;
  document.getElementById('encyBehav').innerHTML = c.ency.behav;
  document.getElementById('encySurvive').innerHTML = c.ency.survive;
  document.getElementById('encyStamp').style.display = caught[currentCreature] ? 'block' : 'none';
  const nav = document.getElementById('encyNav');
  nav.innerHTML = '';
  CREATURE_ORDER.forEach(k=>{
    const b=document.createElement('button');
    b.textContent = CREATURES[k].name;
    b.className = (k===currentCreature?'active':'') + (caught[k]?' done':'');
    b.disabled = !caught[k];
    if(caught[k]) b.addEventListener('click', ()=>{ currentCreature=k; renderEncy(); });
    nav.appendChild(b);
  });
}

// ============ 关卡选择 ============
function showLevelPage(){
  ctrlRow.classList.add('hidden');
  const c = CREATURES[currentCreature];
  const top = document.getElementById('levelCardTop');
  top.innerHTML =
    '<div class="cc-top">'+
      '<div class="cc-avatar"><img src="'+c.img+'" alt="'+c.name+'"></div>'+
      '<div class="cc-info">'+
        '<div class="cc-name">'+c.name+'</div>'+
        '<div class="cc-code">完成全部 3 项挑战即可收服</div>'+
      '</div>'+
    '</div>';
  renderLevelList();
  showPage('level', c.name+' · 挑战');
}
function renderLevelList(){
  const c = CREATURES[currentCreature];
  const lvs = levelsFor(c);
  const p = progress[currentCreature];
  const list = document.getElementById('levelList');
  list.innerHTML = '';
  lvs.forEach((lv, idx)=>{
    const cleared = idx < p;
    const unlocked = idx <= p;
    const card = document.createElement('div');
    card.className = 'level-card' + (cleared?' cleared':'') + (unlocked?'':' locked');
    card.innerHTML =
      '<div class="lc-head">'+
        '<div class="lc-no">'+ (cleared?'✓':lv.no) +'</div>'+
        '<div class="lc-name">第'+['一','二','三'][idx]+'关 · '+lv.name+'</div>'+
        (cleared?'<div class="lc-check">已通关</div>':(unlocked?'':'<div class="lc-check">🔒</div>'))+
      '</div>'+
      '<div class="lc-desc">'+lv.desc+'</div>';
    if(unlocked){ card.addEventListener('click', ()=> startLevel(idx)); }
    list.appendChild(card);
  });
}

// ========================================================
//  游戏引擎（注册表模式：每只努拥有独立小游戏）
// ========================================================
const cvs = document.getElementById('stage');
const ctx = cvs.getContext('2d');
const VW = 320, VH = 300;     // 逻辑坐标系（加高画布，游戏屏更大更好操作）
let SC = 1;                    // 逻辑->设备像素缩放
function resizeCanvas(){
  const dpr = window.devicePixelRatio || 1;
  const cssW = cvs.clientWidth || cvs.parentElement.clientWidth || 320;
  const cssH = Math.round(cssW * VH / VW);
  cvs.width = Math.round(cssW * dpr);
  cvs.height = Math.round(cssH * dpr);
  cvs.style.height = cssH + 'px';
  SC = cvs.width / VW;
}
window.addEventListener('resize', resizeCanvas);

let currentLevel = 0;
let activeGame = null;        // 当前小游戏对象
let rafId = null;
let lastT = 0;
let animFrame = 0;
let G = {};                   // 当前小游戏状态
let shakeT = 0, shakeI = 0, flashColor = null, flashT = 0;

const hudTime = document.getElementById('hudTime');
const hudHp = document.getElementById('hudHp');
const hudExtra = document.getElementById('hudExtra');
const hudExtraLabel = document.getElementById('hudExtraLabel');
const hudTimeLabel = document.getElementById('hudTimeLabel');
const hudHpLabel = document.getElementById('hudHpLabel');
const qteRow = document.getElementById('qteRow');
const ctrlRow = document.getElementById('ctrlRow');
const stageTip = document.getElementById('stageTip');

function startLevel(idx){
  currentLevel = idx;
  const lv = levelsFor(curC())[idx];
  activeGame = GAMES[lv.game];
  resizeCanvas();
  qteRow.classList.toggle('hidden', !activeGame.usesQte);
  ctrlRow.classList.toggle('hidden', !activeGame.usesArrows);
  showPage('game', curC().name+' · '+lv.name);
  if(activeGame.usesQte){
    const qa = curC().qte;
    qteRow.querySelectorAll('.qte-key').forEach(b=>{ b.querySelector('small').textContent = qa[b.dataset.k]; });
    qteRow.querySelectorAll('.qte-key').forEach(b=>b.classList.remove('lit'));
  }
  activeGame.init();
  lastT = performance.now();
  if(rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(loop);
}
function stopGame(){ if(rafId){ cancelAnimationFrame(rafId); rafId=null; } activeGame=null; qteRow.classList.add('hidden'); ctrlRow.classList.add('hidden'); }

function setHudLabels(tL,hpL,eL){ hudTimeLabel.textContent=tL; hudHpLabel.textContent=hpL; hudExtraLabel.textContent=eL; }
function setHud(t,hp,label,extra){
  hudTime.textContent = t; hudTime.classList.toggle('danger', t<=5);
  hudHp.textContent = Math.max(0,Math.round(hp));
  hudHp.classList.toggle('danger', hp<=30);
  hudExtraLabel.textContent = label; hudExtra.textContent = extra;
}
function shake(i,t){ shakeI=i; shakeT=t; }
function flash(c,t){ flashColor=c; flashT=t; }

function loop(now){
  const dt = Math.min(0.05,(now-lastT)/1000); lastT=now; animFrame++;
  if(flashT>0) flashT-=dt*1000;
  if(activeGame) activeGame.update(dt);
  let sx=0,sy=0;
  if(shakeT>0){ shakeT--; sx=(Math.random()-0.5)*shakeI*2; sy=(Math.random()-0.5)*shakeI*2; }
  ctx.setTransform(SC,0,0,SC,(sx*SC)|0,(sy*SC)|0);
  ctx.imageSmoothingEnabled = true;
  if(activeGame) activeGame.draw();
  if(flashT>0 && flashColor){ ctx.globalAlpha=Math.min(0.5,flashT/400*0.5); ctx.fillStyle=flashColor; ctx.fillRect(0,0,VW,VH); ctx.globalAlpha=1; }
  if(activeGame) rafId = requestAnimationFrame(loop);
}

function canvasPos(e){
  const rc = cvs.getBoundingClientRect();
  const cx = (e.touches? e.touches[0].clientX : e.clientX);
  const cy = (e.touches? e.touches[0].clientY : e.clientY);
  return { x:(cx-rc.left)/rc.width*VW, y:(cy-rc.top)/rc.height*VH };
}
cvs.addEventListener('click', e=>{
  if(!activeGame || !activeGame.click) return;
  const p = canvasPos(e);
  activeGame.click(p);
});
window.addEventListener('keydown', e=>{
  if(!activeGame) return;
  const k = e.key.toUpperCase();
  if(activeGame.usesArrows && activeGame.arrow && (e.key==='ArrowLeft'||e.key==='ArrowRight'||k==='A'||k==='D')){
    activeGame.arrow(e.key==='ArrowLeft'||k==='A' ? -1 : 1); return;
  }
  if(k==='A'||k==='B'||k==='C'){ if(activeGame.key) activeGame.key(k); }
});
qteRow.querySelectorAll('.qte-key').forEach(b=>{
  b.addEventListener('click', ()=>{ if(activeGame && activeGame.key) activeGame.key(b.dataset.k); });
});
// 触屏方向控制：按住连续移动
function bindHold(btn, dir){
  if(!btn) return;
  let timer=null;
  const move=()=>{ if(activeGame && activeGame.usesArrows && activeGame.arrow){ activeGame.arrow(dir); if(timer) clearInterval(timer); timer=setInterval(()=>activeGame.arrow(dir),70); } };
  const stop=()=>{ if(timer){ clearInterval(timer); timer=null; } };
  btn.addEventListener('pointerdown', e=>{ e.preventDefault(); move(); });
  btn.addEventListener('pointerup', stop);
  btn.addEventListener('pointerleave', stop);
  btn.addEventListener('pointercancel', stop);
}
bindHold(document.getElementById('ctrlLeft'), -1);
bindHold(document.getElementById('ctrlRight'), 1);

// ============ 工具函数 ============
function curC(){ return CREATURES[currentCreature]; }
function clamp(v,a,b){ return v<a?a:(v>b?b:v); }
function dist(x1,y1,x2,y2){ return Math.hypot(x1-x2, y1-y2); }
function normAng(a){ a%=Math.PI*2; if(a<0)a+=Math.PI*2; return a; }
function angDiff(a,b){ let d=Math.abs(normAng(a)-normAng(b)); return Math.min(d, Math.PI*2-d); }
function hexA(hex,a){ const n=parseInt(hex.slice(1),16); return 'rgba('+((n>>16)&255)+','+((n>>8)&255)+','+(n&255)+','+a+')'; }
function wrapText(text,cx,y,maxW,lh){
  const chars=String(text).split('');
  let line='', yy=y;
  for(const ch of chars){
    if(ch==='\n'){ ctx.fillText(line,cx,yy); line=''; yy+=lh; continue; }
    const test=line+ch;
    if(ctx.measureText(test).width>maxW && line){ ctx.fillText(line,cx,yy); line=ch; yy+=lh; }
    else line=test;
  }
  if(line) ctx.fillText(line,cx,yy);
}

// 关卡结果
function levelCleared(){
  flash('#4ecdc4',500);
  const ck = currentCreature;
  const gname = activeGame ? activeGame.name : '';
  if(currentLevel+1 > progress[ck]){ progress[ck] = currentLevel+1; saveState(); }
  if(progress[ck]>=3 && !caught[ck]){
    caught[ck] = true; saveState();
    openResult('📖','收服成功！','你完成了'+curC().name+'的全部互动挑战！\n'+curC().name+'的资料已被收录进图鉴。',[
      {t:'查看图鉴',cls:'ghost',fn:()=>{ closeResult(); renderEncy(); document.getElementById('encyStamp').style.display='block'; showPage('ency',curC().name+' · 图鉴'); }},
      {t:'返回小镇',cls:'',fn:()=>{ closeResult(); goHome(); }}
    ]);
    stopGame();
    return;
  }
  const nextIdx = currentLevel+1;
  const lvs = levelsFor(curC());
  const btns = [];
  if(nextIdx<3){ btns.push({t:'下一关 · '+lvs[nextIdx].name,cls:'',fn:()=>{ closeResult(); startLevel(nextIdx); }}); }
  btns.push({t:'返回关卡',cls:'ghost',fn:()=>{ closeResult(); showLevelPage(); }});

  let resTitle='挑战成功！', resText='你完成了'+curC().name+'的「'+gname+'」挑战！\n继续加油，集齐 3 关即可收服它。', resImg=null;
  if(curC().id==='shutiao' && activeGame===GAMES.pinIn){
    resTitle='薯条努获救！'; resImg=curC().img;
    resText='蛋壳轰然碎裂，薯条努终于逃出海鸥的囚禁！\n它向你眨了眨眼，一溜烟钻回了努努小镇。';
  }
  openResult('🎉',resTitle,resText,btns,resImg);
  stopGame();
}
function levelFailed(reason){
  flash('#e63946',500); shake(6,18);
  openResult('💥','挑战失败',reason+'\n\n再来一次吧！',[
    {t:'重试本关',cls:'',fn:()=>{ closeResult(); startLevel(currentLevel); }},
    {t:'返回关卡',cls:'ghost',fn:()=>{ closeResult(); showLevelPage(); }}
  ]);
  stopGame();
}

// 结果弹窗
const resultOverlay = document.getElementById('resultOverlay');
function openResult(emo,title,text,btns,imgSrc){
  document.getElementById('resEmo').textContent = emo;
  document.getElementById('resTitle').textContent = title;
  document.getElementById('resText').textContent = text;
  const imgEl = document.getElementById('resImg');
  if(imgSrc){ imgEl.src = imgSrc; imgEl.classList.remove('hidden'); }
  else { imgEl.classList.add('hidden'); imgEl.src = ''; }
  const box = document.getElementById('resBtns'); box.innerHTML='';
  btns.forEach(b=>{
    const el=document.createElement('button');
    el.className='d-btn'+(b.cls?' '+b.cls:''); el.textContent=b.t;
    el.addEventListener('click', b.fn); box.appendChild(el);
  });
  resultOverlay.classList.add('show');
}
function closeResult(){ resultOverlay.classList.remove('show'); }

// 矢量绘制（高清回退）
function drawShrimp(x,y,s){
  ctx.save();
  ctx.fillStyle='#c92e3c';
  ctx.beginPath();
  ctx.moveTo(x+s*0.80,y+s*0.50);
  ctx.lineTo(x+s*0.99,y+s*0.36);
  ctx.lineTo(x+s*0.95,y+s*0.64);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle='#E63946';
  ctx.beginPath();
  ctx.ellipse(x+s*0.50,y+s*0.54,s*0.34,s*0.23,-0.25,0,Math.PI*2);
  ctx.fill();
  ctx.beginPath(); ctx.arc(x+s*0.23,y+s*0.52,s*0.17,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#1a1a2e';
  ctx.beginPath(); ctx.arc(x+s*0.18,y+s*0.45,s*0.045,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(x+s*0.30,y+s*0.45,s*0.045,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#E63946'; ctx.lineWidth=Math.max(1,s*0.035); ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(x+s*0.16,y+s*0.40); ctx.quadraticCurveTo(x+s*0.04,y+s*0.26,x+s*0.02,y+s*0.34); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x+s*0.26,y+s*0.40); ctx.quadraticCurveTo(x+s*0.16,y+s*0.24,x+s*0.10,y+s*0.30); ctx.stroke();
  ctx.fillStyle='rgba(255,200,200,0.5)';
  for(let i=0;i<4;i++){ const t=i/3; ctx.beginPath(); ctx.arc(x+s*(0.35+t*0.32),y+s*0.36,s*0.02,0,Math.PI*2); ctx.fill(); }
  ctx.restore();
}
function drawShutiao(x,y,s){
  ctx.save();
  const bars=[['#E8A33D','#F4C95D'],['#E0992F','#F0C04F'],['#ECA64A','#F8D266']];
  for(let i=0;i<3;i++){
    const bx=x+s*(0.30+i*0.16), bw=s*0.13, bh=s*0.74, by=y+s*0.16;
    ctx.fillStyle=bars[i][0]; ctx.fillRect(bx,by,bw,bh);
    ctx.fillStyle=bars[i][1]; ctx.fillRect(bx,by,bw,bh*0.5);
  }
  ctx.fillStyle='rgba(255,255,255,0.85)';
  for(let i=0;i<10;i++){
    const bx=x+s*(0.30+((i%3)*0.16)), byy=y+s*(0.20+((i*0.21)%0.66));
    ctx.fillRect(bx+s*0.03, byy, 1.6, 1.6);
  }
  ctx.fillStyle='#1a1a2e';
  ctx.beginPath(); ctx.arc(x+s*0.42,y+s*0.30,s*0.035,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(x+s*0.56,y+s*0.30,s*0.035,0,Math.PI*2); ctx.fill();
  ctx.restore();
}
function drawApple(x,y,s){
  ctx.save();
  const g=ctx.createRadialGradient(x+s*0.4,y+s*0.4,s*0.1,x+s*0.5,y+s*0.55,s*0.5);
  g.addColorStop(0,'#F26B7E'); g.addColorStop(1,'#D7405A');
  ctx.fillStyle=g;
  ctx.beginPath(); ctx.arc(x+s*0.5,y+s*0.56,s*0.38,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#1a1025';
  ctx.beginPath(); ctx.moveTo(x+s*0.5,y+s*0.18); ctx.lineTo(x+s*0.56,y+s*0.30); ctx.lineTo(x+s*0.44,y+s*0.30); ctx.closePath(); ctx.fill();
  ctx.fillStyle='#7FD17A';
  ctx.beginPath(); ctx.ellipse(x+s*0.62,y+s*0.22,s*0.10,s*0.045,-0.7,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='rgba(255,140,160,0.55)';
  ctx.beginPath(); ctx.arc(x+s*0.36,y+s*0.58,s*0.05,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(x+s*0.64,y+s*0.58,s*0.05,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='#1a1a2e';
  ctx.beginPath(); ctx.arc(x+s*0.44,y+s*0.50,s*0.04,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(x+s*0.56,y+s*0.50,s*0.04,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#1a1a2e'; ctx.lineWidth=Math.max(1,s*0.03); ctx.lineCap='round';
  ctx.beginPath(); ctx.arc(x+s*0.5,y+s*0.56,s*0.08,0.15*Math.PI,0.85*Math.PI); ctx.stroke();
  ctx.restore();
}
function drawCreature(x,y,s){
  // 操控努时优先使用对应图片（虾努/薯条努/苹果妹努/幼年努/村官努均用原图）
  const im = creatureImgs[currentCreature];
  if(im && im.complete && im.naturalWidth>0){ ctx.drawImage(im, x, y, s, s); return; }
  if(currentCreature==='shutiao') drawShutiao(x,y,s);
  else if(currentCreature==='apple') drawApple(x,y,s);
  else if(currentCreature==='younian' || currentCreature==='cunguan'){
    ctx.font=(s*0.6)+'px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(currentCreature==='younian'?'🐤':'🐱', x+s/2, y+s/2);
  }
  else drawShrimp(x,y,s);
}

// ========================================================
//  小游戏注册表
// ========================================================
const GAMES = {};

// ---------- 虾努 第一关：言语禁忌 ----------
GAMES.taboo = {
  name:'言语禁忌', usesQte:false,
  init(){
    setHudLabels('时间','生命','安全词');
    G = { time:30, tAcc:0, hp:100, score:0, words:[], spawnAcc:0, spawnRate:0.7, done:false };
    for(let i=0;i<4;i++) tabooSpawn();
    stageTip.textContent = '点击绿色安全词 +1 · 点到红色禁忌词 -30 生命';
  },
  update(dt){
    if(G.done) return;
    G.tAcc+=dt; if(G.tAcc>=1){ G.tAcc-=1; G.time--; if(G.time<=0){ G.done=true; setTimeout(levelCleared,260); } }
    G.spawnAcc+=dt; if(G.spawnAcc>=G.spawnRate){ G.spawnAcc=0; tabooSpawn(); }
    for(const w of G.words){ w.age+=dt; if(w.clicked) w.ca-=dt; }
    G.words = G.words.filter(w=> w.age<w.life && (!w.clicked||w.ca>0));
    setHud(G.time,G.hp,'安全词',G.score);
  },
  click(p){
    if(G.done) return;
    const mx=p.x, my=p.y;
    for(let i=G.words.length-1;i>=0;i--){
      const w=G.words[i]; if(w.clicked) continue;
      const tw=w.text.length*14+14, bh=22;
      if(mx>=w.x-10&&mx<=w.x+tw+10&&my>=w.y-10&&my<=w.y+bh+10){
        w.clicked=true; w.ca=0.3;
        if(w.danger){ G.hp-=30; shake(5,14); flash(curC().accent,220); if(G.hp<=0){ G.done=true; setTimeout(()=>levelFailed('你说出了禁忌词，'+curC().name+'暴怒了！'),260); } }
        else { G.score++; flash(curC().accent2,110); }
        return;
      }
    }
  },
  draw(){
    const cur = curC();
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,VW,VH);
    ctx.strokeStyle='rgba(255,255,255,0.04)'; ctx.lineWidth=1;
    for(let x=0;x<VW;x+=32){ ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,VH); ctx.stroke(); }
    drawCreature(VW-46,VH-46,42);
    ctx.textBaseline='top'; ctx.textAlign='left';
    for(const w of G.words){
      const alpha = w.clicked? Math.max(0,w.ca/0.3) : Math.min(1,w.age/0.3)*(w.age>w.life-0.5?(w.life-w.age)/0.5:1);
      ctx.globalAlpha=alpha;
      const tw=w.text.length*14+14;
      ctx.fillStyle = w.danger?'rgba(230,57,70,0.18)':'rgba(78,205,196,0.14)';
      ctx.fillRect(w.x-10,w.y-10,tw+20,26);
      ctx.strokeStyle = w.danger?cur.accent:cur.accent2; ctx.strokeRect(w.x-10,w.y-10,tw+20,26);
      ctx.fillStyle = w.danger?'#ff8080':cur.accent2; ctx.font='bold 15px sans-serif';
      ctx.fillText(w.text, w.x, w.y);
      ctx.globalAlpha=1;
    }
  }
};
function tabooSpawn(){
  const cur = curC();
  const danger = Math.random()<0.32;
  const pool = danger?cur.danger:cur.safe;
  const text = pool[(Math.random()*pool.length)|0];
  G.words.push({ text, danger, x:20+Math.random()*(VW-90), y:34+Math.random()*(VH-70), life:2.6+Math.random()*1.8, age:0, clicked:false, ca:0 });
}

// ---------- 虾努 第二关：逃脱考验 ----------
GAMES.net = {
  name:'逃脱考验', usesQte:false,
  init(){
    setHudLabels('时间','生命','逃脱');
    G = { time:25, tAcc:0, hp:100, escaped:0, total:5, angle:0, angVel:2.0, gapCenter:Math.random()*Math.PI*2, gapW:0.55, gapSpin:0.7, done:false };
    stageTip.textContent = '指针扫到绿色缺口时点击屏幕逃脱 · 越往后缺口越窄、指针越快！';
  },
  click(){
    if(G.done) return;
    let diff = ((G.angle - G.gapCenter + Math.PI*3) % (Math.PI*2)) - Math.PI;
    if(Math.abs(diff) < G.gapW/2){
      G.escaped++; flash(curC().accent2,120);
      G.gapCenter = Math.random()*Math.PI*2;
      G.angVel += 0.28;
      G.gapW = Math.max(0.32, G.gapW - 0.03);
      if(G.escaped>=G.total){ G.done=true; setTimeout(levelCleared,360); }
    } else {
      G.hp -= 18; shake(5,12); flash(curC().accent,200);
      if(G.hp<=0){ G.done=true; setTimeout(()=>levelFailed('你撞上了陷阱，被困住了！'),260); }
    }
  },
  update(dt){
    if(G.done) return;
    G.tAcc+=dt; if(G.tAcc>=1){ G.tAcc-=1; G.time--; if(G.time<=0){ G.done=true; setTimeout(()=>levelFailed('时间耗尽，没能逃出陷阱！'),260); } }
    G.angle = (G.angle + G.angVel*dt) % (Math.PI*2);
    G.gapCenter = (G.gapCenter + G.gapSpin*dt) % (Math.PI*2);
    setHud(G.time,G.hp,'逃脱',G.escaped+'/'+G.total);
  },
  draw(){
    const cur = curC();
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,VW,VH);
    const cx=VW/2, cy=VH/2, r=80;
    ctx.strokeStyle=hexA(cur.accent,0.4); ctx.lineWidth=3;
    ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.stroke();
    ctx.lineWidth=9; ctx.strokeStyle=hexA(cur.accent2,0.35);
    ctx.beginPath(); ctx.arc(cx,cy,r, G.gapCenter-G.gapW/2, G.gapCenter+G.gapW/2); ctx.stroke();
    ctx.lineWidth=3; ctx.strokeStyle=cur.accent2;
    ctx.beginPath(); ctx.arc(cx,cy,r, G.gapCenter-G.gapW/2, G.gapCenter+G.gapW/2); ctx.stroke();
    const px=cx+Math.cos(G.angle)*r, py=cy+Math.sin(G.angle)*r;
    ctx.strokeStyle='#ffd166'; ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(px,py); ctx.stroke();
    ctx.fillStyle='#ffd166'; ctx.beginPath(); ctx.arc(px,py,6,0,Math.PI*2); ctx.fill();
    ctx.font='16px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText('🧍', cx, cy);
    const inGap = Math.abs(((G.angle-G.gapCenter+Math.PI*3)%(Math.PI*2))-Math.PI) < G.gapW/2;
    for(let i=0;i<10;i++){
      const a=i/10*Math.PI*2;
      const gx=cx+Math.cos(a)*(r+13), gy=cy+Math.sin(a)*(r+13);
      drawCreature(gx-8, gy-8, 16);
    }
    if(inGap){ ctx.fillStyle=cur.accent2; ctx.font='bold 12px sans-serif'; ctx.fillText('现在！', cx, cy-r-14); }
    ctx.textAlign='left'; ctx.textBaseline='top';
  }
};

// ---------- 虾努 第三关：装晕求生 ----------
GAMES.faint = {
  name:'装晕求生', usesQte:true,
  init(){
    setHudLabels('回合','冷静','冷静度');
    G = { calm:50, round:0, total:12, prompt:null, pt:0, ptime:1.3, wait:0, done:false };
    stageTip.textContent = curC().qteTip;
    faintNext();
  },
  update(dt){
    if(G.done) return;
    if(G.prompt){
      G.pt-=dt;
      if(G.pt<=0){
        G.calm=Math.max(0,G.calm-12); shake(5,12); flash(curC().accent,200);
        qteRow.querySelectorAll('.qte-key').forEach(b=>b.classList.remove('lit'));
        G.prompt=null; G.wait=0.32;
      }
    } else {
      if(G.wait>0){ G.wait-=dt; if(G.wait<=0) faintNext(); }
    }
    setHud(Math.max(0,G.total-G.round), Math.round(G.calm), '冷静度', Math.floor(G.calm)+'%');
  },
  draw(){
    const cur = curC();
    ctx.fillStyle='#1a0808'; ctx.fillRect(0,0,VW,VH);
    const g=ctx.createRadialGradient(VW/2,VH/2,30,VW/2,VH/2,VW/2);
    g.addColorStop(0,hexA(cur.accent,0.06)); g.addColorStop(1,hexA(cur.accent,0.35));
    ctx.fillStyle=g; ctx.fillRect(0,0,VW,VH);
    const IS=104;
    const im = creatureImgs[currentCreature];
    if(im && im.complete && im.naturalWidth>0){ ctx.drawImage(im, VW/2-IS/2, 12, IS, IS); }
    else { drawCreature(VW/2-IS/2, 12, IS); }
    ctx.textAlign='center'; ctx.textBaseline='middle';
    if(G.prompt){
      const frac = Math.max(0,G.pt/G.ptime);
      ctx.strokeStyle='rgba(255,209,102,0.25)'; ctx.lineWidth=6;
      ctx.beginPath(); ctx.arc(VW/2,VH/2+8,46,0,Math.PI*2); ctx.stroke();
      ctx.strokeStyle='#ffd166'; ctx.lineWidth=6;
      ctx.beginPath(); ctx.arc(VW/2,VH/2+8,46,-Math.PI/2,-Math.PI/2+frac*Math.PI*2); ctx.stroke();
      ctx.fillStyle='#f0d78c'; ctx.font='bold 64px sans-serif';
      ctx.fillText(G.prompt, VW/2, VH/2+8);
      ctx.fillStyle='#c4a8b2'; ctx.font='13px sans-serif';
      ctx.fillText('快按 '+G.prompt+' · '+curC().qte[G.prompt], VW/2, VH/2+56);
    } else {
      ctx.fillStyle='#8a7560'; ctx.font='14px sans-serif';
      ctx.fillText('…', VW/2, VH/2+8);
    }
    ctx.textAlign='left'; ctx.textBaseline='top';
  },
  key(k){ faintAnswer(k); }
};
function faintNext(){
  if(G.round>=G.total){ G.done=true; setTimeout(()=> (G.calm>=60?levelCleared():levelFailed('你装晕失败了，'+curC().name+'识破了！')),260); return; }
  const keys=['A','B','C'];
  G.prompt = keys[(Math.random()*3)|0];
  G.pt = G.ptime;
  G.round++;
  qteRow.querySelectorAll('.qte-key').forEach(b=> b.classList.toggle('lit', b.dataset.k===G.prompt));
}
function faintAnswer(k){
  if(G.done || !G.prompt) return;
  const correct = (k===G.prompt);
  G.prompt=null;
  qteRow.querySelectorAll('.qte-key').forEach(b=>b.classList.remove('lit'));
  if(correct){ G.calm=Math.min(100,G.calm+6); flash(curC().accent2,120); }
  else { G.calm=Math.max(0,G.calm-12); shake(5,12); flash(curC().accent,200); }
  G.wait = 0.32;
}

// ========================================================
//  薯条努 第一关：见缝插针·救薯条（薯条努被海鸥困在蛋壳中）
// ========================================================
GAMES.pinIn = {
  name:'见缝插针·救薯条', usesQte:false,
  init(){
    setHudLabels('已插','剩余','目标');
    G = { rot:0, rotSpd:1.5, pins:[], target:12, done:false };
    stageTip.textContent = '薯条努被海鸥困在蛋壳里！点击在顶部插入薯条撬开蛋壳 · 别和已有薯条撞上！';
  },
  update(dt){
    if(G.done) return;
    G.rot = normAng(G.rot + G.rotSpd*dt);
    setHud(G.pins.length, Math.max(0,G.target-G.pins.length), '目标', G.target);
  },
  click(){
    if(G.done) return;
    const TOP = -Math.PI/2;
    // 新薯条插在顶部（屏幕固定位置），其本地角度 = TOP - 当前旋转
    const newLocal = normAng(TOP - G.rot);
    for(const p of G.pins){
      const absP = normAng(p + G.rot);
      if(angDiff(TOP, absP) < 0.20){ // 与已有薯条相撞
        G.done=true; flash('#e63946',400); shake(7,20);
        setTimeout(()=>levelFailed('薯条撞上了已有的薯条，蛋壳没撬开，薯条努还困在里面！'),260);
        return;
      }
    }
    G.pins.push(newLocal);
    flash(curC().accent2,120);
    if(G.pins.length >= G.target){ G.done=true; setTimeout(()=>levelCleared(),360); }
  },
  draw(){
    const cur = curC();
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,VW,VH);
    const cx=VW/2, cy=VH/2;
    const rx=60, ry=78;          // 蛋壳横/纵半径（纵长呈蛋形）
    const r=ry;                  // 供进度文字定位
    const prog = G.pins.length/G.target; // 裂开程度

    // —— 蛋壳形状路径（顶部略尖、底部圆润）——
    const eggPath = ()=>{
      ctx.beginPath();
      ctx.moveTo(cx, cy-ry);
      ctx.bezierCurveTo(cx+rx*1.32, cy-ry*0.5, cx+rx, cy+ry, cx, cy+ry);
      ctx.bezierCurveTo(cx-rx, cy+ry, cx-rx*1.32, cy-ry*0.5, cx, cy-ry);
      ctx.closePath();
    };

    // 蛋壳阴影
    ctx.save();
    ctx.shadowColor='rgba(0,0,0,0.45)'; ctx.shadowBlur=18; ctx.shadowOffsetY=6;
    eggPath();
    const g=ctx.createLinearGradient(cx-rx,cy-ry,cx+rx,cy+ry);
    g.addColorStop(0,'#fbf3e0'); g.addColorStop(0.5,'#efe0c4'); g.addColorStop(1,'#d8c39c');
    ctx.fillStyle=g; ctx.fill();
    ctx.restore();

    // 蛋壳斑点
    ctx.fillStyle='rgba(150,120,80,0.25)';
    const spots=[[-22,-30,3],[16,-18,2.4],[-8,10,3.2],[24,26,2.2],[-26,34,2.6],[6,44,2]];
    for(const s of spots){ ctx.beginPath(); ctx.arc(cx+s[0],cy+s[1],s[2],0,Math.PI*2); ctx.fill(); }

    // 蛋壳描边
    eggPath();
    ctx.strokeStyle=hexA(cur.accent,0.65); ctx.lineWidth=3; ctx.stroke();

    // 裂纹（随插入数量增多）
    const cracks=[[0,-ry, 10,-ry*0.55, -6,-ry*0.2],[0,-ry*0.2, 14,ry*0.1, 4,ry*0.5],[0,-ry, -12,-ry*0.5, 2,-ry*0.1]];
    ctx.strokeStyle='rgba(80,55,25,0.7)'; ctx.lineWidth=1.5;
    const crackN=Math.min(cracks.length, Math.floor(prog*cracks.length+0.001));
    for(let i=0;i<crackN;i++){
      const c=cracks[i];
      ctx.beginPath(); ctx.moveTo(cx+c[0],cy+c[1]);
      ctx.lineTo(cx+c[2],cy+c[3]); ctx.lineTo(cx+c[4],cy+c[5]); ctx.stroke();
    }

    // 中心被困的薯条努（透过蛋壳裂缝可见）
    ctx.save();
    eggPath(); ctx.clip();
    drawCreature(cx-24, cy-20, 48);
    ctx.restore();

    // 已插入的薯条（穿透蛋壳、从蛋形边缘伸出）
    for(const p of G.pins){
      const a = normAng(p + G.rot);
      const ca=Math.cos(a), sa=Math.sin(a);
      const bx=cx+ca*rx, by=cy+sa*ry;                 // 蛋壳边缘
      const x1=cx+ca*rx*0.45, y1=cy+sa*ry*0.45;       // 蛋内起点
      const x2=bx+ca*22,      y2=by+sa*22;            // 蛋外尖端
      ctx.strokeStyle='#F4C95D'; ctx.lineWidth=5; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
      ctx.strokeStyle='#E8A33D'; ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
    }

    // 顶部即将插入的针
    ctx.strokeStyle='#f0d78c'; ctx.lineWidth=4; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(cx, cy-ry-34); ctx.lineTo(cx, cy-ry-6); ctx.stroke();

    // 进度提示
    ctx.fillStyle='#8a7560'; ctx.font='11px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='top';
    ctx.fillText('撬开蛋壳救薯条努 · 已插 '+G.pins.length+' / '+G.target, cx, cy+ry+12);
    ctx.textAlign='left'; ctx.textBaseline='top';
  }
};

// ========================================================
//  薯条努 第二关：黄金酥脆·控温
// ========================================================
// ========================================================
//  薯条努 第二关：海鸥围攻·躲蛋袭
// ========================================================
GAMES.seagullDodge = {
  name:'海鸥围攻·躲蛋袭', usesQte:false, usesArrows:true,
  init(){
    setHudLabels('时间','生命','躲过');
    G = { t:20, tAcc:0, hp:100, x:VW/2, target:VW/2, eggs:[], spawnAcc:0, spawnRate:0.9, dodged:0, done:false };
    stageTip.textContent = '海鸥又来抓薯条努！点击屏幕带它左右躲开落下的蛋 · 被砸到会受伤';
  },
  update(dt){
    if(G.done) return;
    G.tAcc+=dt; if(G.tAcc>=1){ G.tAcc-=1; G.t--; if(G.t<=0){ G.done=true; setTimeout(levelCleared,260); } }
    G.x += (G.target-G.x)*Math.min(1,dt*10);
    G.spawnAcc+=dt; if(G.spawnAcc>=G.spawnRate){ G.spawnAcc=0; spawnEgg(); }
    const remain=[];
    for(const e of G.eggs){
      e.y += e.vy*dt;
      if(!e.hit && e.y > VH-46 && Math.abs(e.x-G.x)<16){
        e.hit=true; G.hp-=16; shake(5,12); flash(curC().accent,200);
        if(G.hp<=0){ G.done=true; setTimeout(()=>levelFailed('薯条努被蛋砸晕，又被海鸥抓走了！'),260); return; }
      }
      if(e.y>=VH+20 && !e.hit) G.dodged++;
      if(e.y<VH+20 && !e.hit) remain.push(e);
    }
    G.eggs=remain;
    setHud(G.t, Math.max(0,Math.round(G.hp)), '躲过', G.dodged);
  },
  click(p){ if(G.done) return; G.target=clamp(p.x,18,VW-18); },
  arrow(dir){ if(G.done) return; G.target=clamp(G.target+dir*38,18,VW-18); },
  draw(){
    const cur = curC();
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,VW,VH);
    // 顶部盘旋的海鸥（使用 ou.png）
    const ou = extraImgs.ou;
    if(ou && ou.complete && ou.naturalWidth>0){
      for(const gx of [64, VW/2, VW-64]) ctx.drawImage(ou, gx-22, 0, 44, 44);
    } else {
      ctx.font='24px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText('🕊️', 64, 22); ctx.fillText('🕊️', VW/2, 22); ctx.fillText('🕊️', VW-64, 22);
    }
    for(const e of G.eggs){ ctx.font='18px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('🥚', e.x, e.y); }
    drawCreature(G.x-22, VH-64, 44);
    ctx.fillStyle='#8a7560'; ctx.font='11px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='top';
    ctx.fillText('点击/按钮左右移动 · 躲开落蛋', VW/2, 8);
    ctx.textAlign='left'; ctx.textBaseline='top';
  }
};
function spawnEgg(){
  G.eggs.push({ x:20+Math.random()*(VW-40), y:40, vy:120+Math.random()*70, hit:false });
}

// ========================================================
//  薯条努 第三关：叠罗汉·平衡塔
// ========================================================
GAMES.fryStack = {
  name:'叠罗汉·平衡塔', usesQte:false,
  init(){
    setHudLabels('层数','稳定','目标');
    G = { tower:[VW/2], target:10, curX:VW/2, curDir:1, curSpd:95, tol:24, done:false };
    stageTip.textContent = '点击在晃动处放下薯条 · 落点贴近上一根才稳';
  },
  update(dt){
    if(G.done) return;
    G.curX += G.curDir*G.curSpd*dt;
    if(G.curX>VW-30){ G.curX=VW-30; G.curDir=-1; }
    if(G.curX<30){ G.curX=30; G.curDir=1; }
    const top=G.tower[G.tower.length-1];
    const lean=Math.abs(top-VW/2);
    setHud(G.tower.length-1, Math.max(0, 100-Math.round(lean*2)), '目标', G.target);
  },
  click(){
    if(G.done) return;
    const top=G.tower[G.tower.length-1];
    const dx=Math.abs(G.curX-top);
    if(dx>G.tol){ G.done=true; flash('#e63946',400); shake(7,18); setTimeout(()=>levelFailed('薯条歪了，塔轰然倒下！'),260); return; }
    G.tower.push(G.curX);
    flash(curC().accent2,110);
    if(G.tower.length-1>=G.target){ G.done=true; setTimeout(()=>levelCleared(),360); }
    else { G.curX=VW/2 - (G.curX-VW/2)*0.3; G.curDir=Math.random()<0.5?1:-1; G.curSpd=Math.min(150, G.curSpd+8); }
  },
  draw(){
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,VW,VH);
    const baseY=VH-24, step=16;
    ctx.fillStyle='#3a2a18'; ctx.fillRect(VW/2-30, baseY, 60, 8);
    for(let i=0;i<G.tower.length;i++){
      const x=G.tower[i], y=baseY-(i+1)*step;
      ctx.fillStyle = i%2? '#F4C95D':'#E8A33D';
      ctx.fillRect(x-16, y, 32, 8);
    }
    if(!G.done){
      const y=baseY-(G.tower.length+1)*step;
      ctx.fillStyle='#fff'; ctx.globalAlpha=0.6; ctx.fillRect(G.curX-16, y, 32, 8); ctx.globalAlpha=1;
      ctx.strokeStyle='rgba(255,255,255,0.3)'; ctx.beginPath(); ctx.moveTo(G.curX, y); ctx.lineTo(G.curX, y+40); ctx.stroke();
    }
    if(G.tower.length>0){
      const topx=G.tower[G.tower.length-1];
      const ty=baseY-(G.tower.length+1)*step-30;
      drawCreature(topx-22, ty, 44);
    }
  }
};

// ========================================================
//  苹果妹努 第一关：kitty猫横冲直撞·选通道
// ========================================================
GAMES.laneChoice = {
  name:'kitty猫横冲直撞', usesQte:false,
  init(){
    setHudLabels('回合','生命','安全');
    G = { round:1, maxRound:4, hp:100, t:1.5, state:'play', chosen:-1, targets:[], charge:null, result:null, anim:0, done:false };
    pickTargets();
    stageTip.textContent = '看 kitty 盯住哪条通道（红标▼）· 点一条安全通道放苹果妹努 · 倒计时后 kitty 冲撞，选错就被撞飞（共 4 轮）';
  },
  update(dt){
    if(G.done) return;
    if(G.state==='play'){
      G.t-=dt;
      if(G.t<=0){ G.t=0; if(G.chosen<0) G.chosen=1; startCharge(); }
    } else if(G.state==='charge'){
      G.charge.t+=dt;
      if(G.charge.t>=0.7){
        G.result = G.targets.includes(G.chosen) ? 'fail' : 'win';
        G.state='result'; G.anim=0;
      }
    } else if(G.state==='result'){
      G.anim+=dt;
      const limit = G.result==='fail'?1.1:0.8;
      if(G.anim>=limit){
        if(G.result==='fail'){ G.done=true; setTimeout(()=>levelFailed('kitty 撞飞了苹果妹努！'),260); }
        else {
          if(G.round>=G.maxRound){ G.done=true; setTimeout(levelCleared,260); }
          else { G.round++; G.chosen=-1; G.t=1.5; pickTargets(); G.state='play'; }
        }
      }
    }
    setHud(G.round+'/'+G.maxRound, Math.max(0,Math.round(G.hp)), '安全', (G.round-1));
  },
  click(p){
    if(G.done || G.state!=='play') return;
    G.chosen = clamp(Math.floor(p.x/(VW/3)),0,2);
  },
  draw(){
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,VW,VH);
    const lw=VW/3;
    for(let i=0;i<3;i++){
      const x=i*lw, cx=x+lw/2;
      const isTarget=G.targets.includes(i), isChosen=(i===G.chosen);
      ctx.fillStyle = isChosen ? (isTarget?'rgba(215,64,90,0.16)':'rgba(127,209,122,0.14)') : 'rgba(255,255,255,0.04)';
      ctx.fillRect(x+4,24,lw-8,VH-48);
      ctx.strokeStyle = isChosen ? (isTarget?'#D7405A':'#7FD17A') : 'rgba(255,255,255,0.16)';
      ctx.lineWidth = isChosen?3:2; ctx.strokeRect(x+4,24,lw-8,VH-48);
      // kitty 的“有的”：红标提示它要撞的通道
      if(isTarget && (G.state==='play'||G.state==='charge')){
        ctx.fillStyle='rgba(215,64,90,0.9)'; ctx.font='bold 20px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='top';
        ctx.fillText('▼', cx, 28);
        ctx.strokeStyle='rgba(215,64,90,0.45)'; ctx.lineWidth=2;
        ctx.beginPath(); ctx.moveTo(cx,50); ctx.lineTo(cx,VH-58); ctx.stroke();
      }
      if(G.state==='play'||G.state==='charge'){
        ctx.font='bold 12px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='top';
        if(isTarget){ ctx.fillStyle='#ff9b9b'; ctx.fillText('kitty 要撞', cx, VH-42); }
        else if(isChosen){ ctx.fillStyle='#bff0bb'; ctx.fillText('✓ 我躲这', cx, VH-42); }
      }
      // result 反馈
      if(G.state==='result'){
        ctx.font='bold 14px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
        if(isChosen){ ctx.fillStyle = G.result==='win'?'#bff0bb':'#ff9b9b'; ctx.fillText(G.result==='win'?'✓ 安全通过':'✗ 被撞飞', cx, VH/2); }
      }
    }
    // 顶部蓄势的 kitty
    if(G.state==='play'){ ctx.font='30px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('🐱', VW/2, 12); }
    // 冲撞动画：kitty 冲过它选中的通道
    if(G.state==='charge' || (G.state==='result'&&G.result==='fail')){
      const prog = (G.state==='charge') ? clamp(G.charge.t/0.7,0,1) : 1;
      for(const tg of G.targets){
        const cx=tg*lw+lw/2, ky=-20+prog*(VH+40);
        ctx.font='30px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('🐱', cx, ky);
        ctx.strokeStyle='rgba(255,255,255,0.22)'; ctx.lineWidth=2;
        for(let s=1;s<=3;s++){ ctx.beginPath(); ctx.moveTo(cx-13,ky-8-s*9); ctx.lineTo(cx-13,ky-22-s*9); ctx.stroke(); }
      }
    }
    // 动效：被撞飞时用 💥 表现，全程不显示苹果妹努图片
    if(G.state==='result' && G.result==='fail'){
      const cx=G.chosen*lw+lw/2;
      const ay=VH-58-130*clamp(G.anim/1.1,0,1);
      ctx.font='22px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('💥', cx, ay);
    }
    ctx.textAlign='left'; ctx.textBaseline='top';
  }
};
function pickTargets(){
  const n = Math.random()<0.5?1:2;
  const arr=[0,1,2];
  for(let i=arr.length-1;i>0;i--){ const j=(Math.random()*(i+1))|0; const t=arr[i]; arr[i]=arr[j]; arr[j]=t; }
  G.targets=arr.slice(0,n).sort((a,b)=>a-b);
}
function startCharge(){ G.state='charge'; G.charge={ t:0 }; }

// ========================================================
//  苹果妹努 第二关：护花·挡皱词
// ========================================================
GAMES.appleGuard = {
  name:'护花·挡皱词', usesQte:false,
  init(){
    setHudLabels('时间','美丽','挡下');
    G = { t:22, tAcc:0, beauty:100, words:[], spawnAcc:0, spawnRate:0.85, blocked:0, done:false };
    for(let i=0;i<3;i++) spawnWord();
    stageTip.textContent = '点击「皱/烂/虫眼」等禁忌词把它打掉 · 别让词碰到苹果妹努';
  },
  update(dt){
    if(G.done) return;
    G.tAcc+=dt; if(G.tAcc>=1){ G.tAcc-=1; G.t--; if(G.t<=0){ G.done=true; setTimeout(levelCleared,260); } }
    G.spawnAcc+=dt; if(G.spawnAcc>=G.spawnRate){ G.spawnAcc=0; spawnWord(); }
    const cx=VW/2, cy=VH/2-6;
    for(const w of G.words){
      w.age+=dt;
      w.x += (cx-w.x)*Math.min(1,dt*1.4);
      w.y += (cy-w.y)*Math.min(1,dt*1.4);
      if(!w.done && Math.hypot(w.x-cx,w.y-cy)<26){
        w.done=true;
        if(w.danger){ G.beauty-=25; shake(5,12); flash(curC().accent,200);
          if(G.beauty<=0){ G.done=true; setTimeout(()=>levelFailed('禁忌词戳中了苹果妹努，她羞红了脸！'),260); return; } }
      }
    }
    G.words=G.words.filter(w=> !w.done && w.age<8);
    setHud(G.t, Math.max(0,Math.round(G.beauty)), '挡下', G.blocked);
  },
  click(p){
    if(G.done) return;
    for(let i=G.words.length-1;i>=0;i--){
      const w=G.words[i]; if(w.done) continue;
      const r = w.danger? 18 : 12;   // 错误词大、正确词小
      if(dist(w.x,w.y,p.x,p.y) < r+10){
        w.done=true;
        if(w.danger){ G.blocked++; flash(curC().accent2,110); }
        else { G.beauty=Math.min(100,G.beauty+3); } // 误点赞美词：无害
        return;
      }
    }
  },
  draw(){
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,VW,VH);
    const cx=VW/2, cy=VH/2-6;
    for(const w of G.words){
      const r = w.danger? 18 : 12;   // 错误词大、正确词小
      ctx.fillStyle = w.danger? 'rgba(215,64,90,0.22)':'rgba(127,209,122,0.16)';
      ctx.beginPath(); ctx.arc(w.x, w.y, r, 0, Math.PI*2); ctx.fill();
      ctx.strokeStyle = w.danger? '#D7405A':'#7FD17A'; ctx.lineWidth=1.5; ctx.stroke();
      ctx.font='bold '+(w.danger?14:12)+'px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillStyle = w.danger? '#ff9b9b':'#bff0bb';
      ctx.fillText(w.text, w.x, w.y);
    }
    drawCreature(cx-22, cy-22, 44);
    ctx.textAlign='left'; ctx.textBaseline='top';
  }
};
const GUARD_BAD  = ['皱皮','虫眼','烂心','酸涩','蔫了','磕伤','落地','斑驳','氧化','发霉'];
const GUARD_GOOD = ['红润','香甜','漂亮','饱满','新鲜','清脆','可爱','水灵'];
function spawnWord(){
  const danger = Math.random()<0.6;
  const pool = danger? GUARD_BAD : GUARD_GOOD;
  const text = pool[(Math.random()*pool.length)|0];
  const edge=(Math.random()*4)|0; let x,y;
  if(edge===0){ x=Math.random()*VW; y=14; }
  else if(edge===1){ x=VW-14; y=Math.random()*VH; }
  else if(edge===2){ x=Math.random()*VW; y=VH-14; }
  else { x=14; y=Math.random()*VH; }
  G.words.push({ text, danger, x, y, age:0, done:false });
}

// ========================================================
//  苹果妹努 第三关：蜜蜂召唤·躲蜂群
// ========================================================
// ========================================================
//  苹果妹努 第三关：Kitty护体·挡攻击（原案：受袭时纸片化巨型Kitty实体护体）
// ========================================================
GAMES.kittyGuard = {
  name:'Kitty护体·挡攻击', usesQte:false,
  init(){
    setHudLabels('时间','生命','护下');
    G = { t:20, tAcc:0, hp:100, kx:VW/2, ky:VH/2+60, attacks:[], spawnAcc:0, spawnRate:0.85, blocked:0, done:false };
    stageTip.textContent = '天敌袭来！移动 Kitty 实体挡在苹果妹努身前，护下所有攻击';
  },
  update(dt){
    if(G.done) return;
    G.tAcc+=dt; if(G.tAcc>=1){ G.tAcc-=1; G.t--; if(G.t<=0){ G.done=true; setTimeout(levelCleared,260); } }
    G.spawnAcc+=dt; if(G.spawnAcc>=G.spawnRate){ G.spawnAcc=0; spawnAttack(); }
    const cx=VW/2, cy=VH/2-20;
    for(const a of G.attacks){
      const dx=cx-a.x, dy=cy-a.y, d=Math.hypot(dx,dy)||1;
      a.x+=dx/d*a.sp*dt; a.y+=dy/d*a.sp*dt;
      if(!a.dead && Math.hypot(a.x-G.kx,a.y-G.ky)<34){ a.dead=true; G.blocked++; G.hp=Math.min(100,G.hp+2); flash(curC().accent2,120); }
      if(!a.dead && d<20){ a.dead=true; G.hp-=16; shake(5,12); flash(curC().accent,200);
        if(G.hp<=0){ G.done=true; setTimeout(()=>levelFailed('苹果妹努被天敌击中，Kitty 护体失败！'),260); return; } }
    }
    G.attacks=G.attacks.filter(a=>!a.dead);
    setHud(G.t, Math.max(0,Math.round(G.hp)), '护下', G.blocked);
  },
  click(p){ if(G.done) return; G.kx=clamp(p.x,16,VW-16); G.ky=clamp(p.y,16,VH-16); },
  draw(){
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,VW,VH);
    const cx=VW/2, cy=VH/2-20;
    drawCreature(cx-22, cy-22, 44);
    for(const a of G.attacks){
      ctx.font='22px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(a.kind==='eagle'?'🦅':'🐦', a.x, a.y);
    }
    ctx.font='42px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText('🐱', G.kx, G.ky);
    ctx.fillStyle='#8a7560'; ctx.font='11px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='top';
    ctx.fillText('点击移动 Kitty 护体', VW/2, 8);
    ctx.textAlign='left'; ctx.textBaseline='top';
  }
};
function spawnAttack(){
  const edge=(Math.random()*4)|0; let x,y;
  if(edge===0){ x=Math.random()*VW; y=-12; }
  else if(edge===1){ x=VW+12; y=Math.random()*VH; }
  else if(edge===2){ x=Math.random()*VW; y=VH+12; }
  else { x=-12; y=Math.random()*VH; }
  G.attacks.push({ x, y, sp:70+Math.random()*40, kind:Math.random()<0.35?'eagle':'bird', dead:false });
}

// ========================================================
//  幼年努 第一关：安抚逗笑·发光玩具
// ========================================================
GAMES.youSoothe = {
  name:'安抚逗笑·发光玩具', usesQte:false,
  init(){
    setHudLabels('时间','恐惧','珍珠');
    G = { t:24, tAcc:0, fear:0, pearls:0, toys:[], spawnAcc:0, spawnRate:1.0, done:false };
    for(let i=0;i<2;i++) spawnToy();
    stageTip.textContent = '幼年努受惊了！点击发光玩具逗它笑，收集喜悦泪珠(小珍珠) · 别让恐惧填满';
  },
  update(dt){
    if(G.done) return;
    G.tAcc+=dt; if(G.tAcc>=1){ G.tAcc-=1; G.t--; if(G.t<=0){ G.done=true; setTimeout(G.pearls>=12?levelCleared:()=>levelFailed('时间到，没能逗笑幼年努！'),260); } }
    G.fear = Math.min(100, G.fear + 7*dt);
    G.spawnAcc+=dt; if(G.spawnAcc>=G.spawnRate){ G.spawnAcc=0; spawnToy(); }
    for(const t of G.toys) t.age+=dt;
    G.toys=G.toys.filter(t=> t.age<3.5);
    if(G.fear>=100){ G.done=true; setTimeout(()=>levelFailed('幼年努哭出恐惧泪珠，诅咒降临！'),260); return; }
    setHud(G.t, Math.round(G.fear), '珍珠', G.pearls+'/12');
  },
  click(p){
    if(G.done) return;
    for(let i=G.toys.length-1;i>=0;i--){
      const t=G.toys[i], dx=p.x-t.x, dy=p.y-t.y;
      if(dx*dx+dy*dy < 30*30){
        G.toys.splice(i,1);
        G.fear=Math.max(0,G.fear-22); G.pearls++; flash(curC().accent2,120); spawnToy();
        return;
      }
    }
  },
  draw(){
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,VW,VH);
    drawCreature(VW/2-30, VH/2-30, 60);
    ctx.fillStyle='rgba(90,200,232,0.7)'; ctx.font='12px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText('恐惧 '+Math.round(G.fear)+'%', VW/2, VH/2-44);
    for(const t of G.toys){
      const a=0.5+0.5*Math.sin(t.age*6);
      ctx.fillStyle='rgba(255,209,102,'+(0.4+0.4*a)+')';
      ctx.beginPath(); ctx.arc(t.x,t.y,12,0,Math.PI*2); ctx.fill();
      ctx.fillStyle='#FFD166'; ctx.font='16px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText('✦', t.x, t.y);
    }
    ctx.textAlign='left'; ctx.textBaseline='top';
  }
};
function spawnToy(){ G.toys.push({ x:30+Math.random()*(VW-60), y:40+Math.random()*(VH-80), age:0 }); }

// ========================================================
//  幼年努 第二关：树懒来袭·护幼努
// ========================================================
GAMES.youProtect = {
  name:'树懒来袭·护幼努', usesQte:false,
  init(){
    setHudLabels('时间','生命','驱赶');
    G = { t:20, tAcc:0, hp:100, ox:VW-44, sloths:[], spawnAcc:0, shoed:0, done:false };
    stageTip.textContent = '树懒来袭！幼年努固定在右侧，点树懒把它赶走 · 别让树懒碰到幼年努';
  },
  update(dt){
    if(G.done) return;
    G.tAcc+=dt; if(G.tAcc>=1){ G.tAcc-=1; G.t--; if(G.t<=0){ G.done=true; setTimeout(levelCleared,260); } }
    // 随时间减少，刷新越来越快（树懒越来越多）
    const rate = 0.4 + 0.85*(G.t/20);
    G.spawnAcc+=dt; if(G.spawnAcc>=rate){ G.spawnAcc=0; spawnSloth(); }
    const ty=VH/2;
    for(const s of G.sloths){
      if(s.dead) continue;
      const dx=G.ox-s.x, dy=ty-s.y, d=Math.hypot(dx,dy)||1;
      s.x+=dx/d*40*dt; s.y+=dy/d*40*dt;
      if(d<26){
        s.dead=true; G.hp-=18; shake(5,12); flash(curC().accent,200);
        if(G.hp<=0){ G.done=true; setTimeout(()=>levelFailed('幼年努被树懒抓走了！'),260); return; }
      }
    }
    G.sloths=G.sloths.filter(s=> !s.dead);
    setHud(G.t, Math.max(0,Math.round(G.hp)), '驱赶', G.shoed);
  },
  click(p){
    if(G.done) return;
    for(const s of G.sloths){
      if(!s.dead && dist(s.x,s.y,p.x,p.y)<30){ s.dead=true; G.shoed++; flash(curC().accent2,120); return; }
    }
  },
  draw(){
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,VW,VH);
    // 幼年努（固定右侧，无需操控）
    drawCreature(G.ox-26, VH/2-26, 52);
    const na = extraImgs.nagi;
    for(const s of G.sloths){
      if(s.dead) continue;
      if(na && na.complete && na.naturalWidth>0) ctx.drawImage(na, s.x-19, s.y-19, 38, 38);
      else { ctx.font='26px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('🦥', s.x, s.y); }
    }
    ctx.fillStyle='#8a7560'; ctx.font='11px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='top';
    ctx.fillText('点树懒把它赶走 · 护住右侧幼年努', VW/2, 8);
    ctx.textAlign='left'; ctx.textBaseline='top';
  }
};
function spawnSloth(){ const y=40+Math.random()*(VH-80); G.sloths.push({ x:-12, y, dead:false }); }

// ========================================================
//  幼年努 第三关：信物认亲·建信任
// ========================================================
const TOKENS=[{icon:'🥔',val:2,color:'#E8A33D'},{icon:'🔘',val:20,color:'#cfd8dc'},{icon:'🍎',val:2,color:'#D7405A'},{icon:'🧶',val:5,color:'#5BC8E8'}];
GAMES.youTrust = {
  name:'信物认亲·建信任', usesQte:false,
  init(){
    setHudLabels('时间','信任','信物');
    G = { t:24, tAcc:0, trust:0, tokens:[], spawnAcc:0, spawnRate:1.1, offered:0, panic:0, done:false };
    for(let i=0;i<3;i++) spawnToken();
    stageTip.textContent = '出示信物建立信任（纽扣+20/毛球+5/薯条+2/苹果+2）· 突发惊吓时点发光玩具安抚';
  },
  update(dt){
    if(G.done) return;
    G.tAcc+=dt; if(G.tAcc>=1){ G.tAcc-=1; G.t--; if(G.t<=0){ G.done=true; setTimeout(G.trust>=100?levelCleared:()=>levelFailed('信任不足，幼年努跑掉了！'),260); } }
    G.spawnAcc+=dt; if(G.spawnAcc>=G.spawnRate){ G.spawnAcc=0; spawnToken(); }
    G.panic -= dt;
    if(G.panic<=0 && Math.random()<0.012){ G.panic=1.4; G.trust=Math.max(0,G.trust-12); shake(3,8); flash(curC().accent,160); }
    for(const t of G.tokens) t.age+=dt;
    G.tokens=G.tokens.filter(t=> t.age<4 && !t.done);
    if(G.trust>=100){ G.done=true; setTimeout(levelCleared,300); return; }
    setHud(G.t, Math.round(G.trust), '信物', G.offered);
  },
  click(p){
    if(G.done) return;
    for(let i=G.tokens.length-1;i>=0;i--){
      const t=G.tokens[i], dx=p.x-t.x, dy=p.y-t.y;
      if(dx*dx+dy*dy<30*30){
        if(t.kind==='toy'){ G.tokens.splice(i,1); G.panic=0; G.trust=Math.min(100,G.trust+4); flash(curC().accent2,120); }
        else { t.done=true; G.offered++; G.trust=Math.min(100,G.trust+t.val); flash(curC().accent2,120); }
        spawnToken(); return;
      }
    }
  },
  draw(){
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,VW,VH);
    drawCreature(VW/2-30, VH/2-30, 60);
    ctx.fillStyle = G.panic>0? 'rgba(230,57,70,0.7)':'#8a7560';
    ctx.font='12px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(G.panic>0?'受惊！快用发光玩具安抚':'信任 '+Math.round(G.trust)+'%', VW/2, VH/2-44);
    for(const t of G.tokens){
      ctx.font='20px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
      if(t.kind==='toy'){ ctx.fillStyle='#FFD166'; ctx.fillText('✦', t.x, t.y); }
      else { ctx.fillStyle=t.color; ctx.fillText(t.icon, t.x, t.y); }
    }
    ctx.textAlign='left'; ctx.textBaseline='top';
  }
};
function spawnToken(){
  if(Math.random()<0.22){ G.tokens.push({kind:'toy', x:30+Math.random()*(VW-60), y:40+Math.random()*(VH-80), age:0}); return; }
  const t=TOKENS[(Math.random()*TOKENS.length)|0];
  G.tokens.push({kind:'tok', icon:t.icon, val:t.val, color:t.color, x:30+Math.random()*(VW-60), y:40+Math.random()*(VH-80), age:0, done:false});
}

// ========================================================
//  村官努 第一关：答询合规·守秩序
// ========================================================
const QUERY_POOL=[
  {scenario:'村官努正处理公务，你应？', options:['上前打断询问','安静排队等候','大声打招呼'], correct:1},
  {scenario:'发现有人拐带幼年努，你应？', options:['假装没看见','立即出手并报告村官','拍照围观'], correct:1},
  {scenario:'你想向村官求助，应？', options:['长篇大论倾诉','简洁正式说明','打断它的工作'], correct:1},
  {scenario:'村官努尾巴掉毛，你应？', options:['当众嘲笑','提供尾巴护理','伸手拽尾巴'], correct:1},
  {scenario:'见努努遭天敌攻击，你应？', options:['看热闹','协助驱赶天敌','趁机拐走'], correct:1},
  {scenario:'面对小镇规则，应？', options:['随意破坏','严格遵守秩序','挑衅村官'], correct:1},
  {scenario:'与村官交流时，应？', options:['情绪化抱怨','礼貌且简明','反复打断'], correct:1}
];
GAMES.cgQuery = {
  name:'答询合规·守秩序', usesQte:false,
  init(){
    setHudLabels('回合','信任','合规');
    G = { round:0, total:6, hp:100, right:0, q:null, waitT:0, done:false };
    nextQ();
    stageTip.textContent = '村官努问政，选择合规做法 · 选错会被 Kitty 压制';
  },
  update(dt){
    if(G.done) return;
    if(G.waitT>0){
      G.waitT-=dt;
      if(G.waitT<=0){
        if(G.hp<=0){ G.done=true; setTimeout(()=>levelFailed('你屡次违规，被村官努通缉了！'),260); }
        else if(G.round>=G.total){ G.done=true; setTimeout(levelCleared,300); }
        else nextQ();
      }
    }
    setHud(G.round, Math.max(0,Math.round(G.hp)), '合规', G.right+'/'+G.total);
  },
  click(p){
    if(G.done||G.waitT>0||!G.q) return;
    const bw=VW/3, idx=clamp(Math.floor(p.x/bw),0,2);
    if(idx===G.q.correct){ G.right++; flash(curC().accent2,140); }
    else { G.hp-=22; shake(6,14); flash(curC().accent,220); }
    G.waitT=0.4;
  },
  draw(){
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,VW,VH);
    drawCreature(VW/2-28, 30, 56);
    ctx.fillStyle='#e7d7c8'; ctx.font='13px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='top';
    wrapText(G.q?G.q.scenario:'', VW/2, 96, VW-50, 17);
    if(G.q){
      const bw=VW/3, bh=70, y=VH-150;
      for(let i=0;i<3;i++){
        const x=i*bw;
        ctx.fillStyle='rgba(255,255,255,0.06)'; ctx.fillRect(x+4,y,bw-8,bh);
        ctx.strokeStyle = (G.waitT>0 && i===G.q.correct)? '#7FD17A' : 'rgba(255,255,255,0.2)';
        ctx.lineWidth = (G.waitT>0 && i===G.q.correct)?3:1.5; ctx.strokeRect(x+4,y,bw-8,bh);
        ctx.fillStyle='#e7d7c8'; ctx.font='12px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
        wrapText(G.q.options[i], x+bw/2, y+bh/2, bw-14, 15);
      }
    }
    ctx.textAlign='left'; ctx.textBaseline='top';
  }
};
function nextQ(){ G.round++; G.q = QUERY_POOL[(Math.random()*QUERY_POOL.length)|0]; G.waitT=0; }

// ========================================================
//  村官努 第二关：Kitty实体·执法
// ========================================================
GAMES.cgKitty = {
  name:'Kitty实体·执法', usesQte:false,
  init(){
    setHudLabels('时间','秩序','压制');
    G = { t:22, tAcc:0, order:100, violators:[], spawnAcc:0, spawnRate:0.95, caught:0, done:false };
    stageTip.textContent = '违规者在逃！点击它派出 Kitty 实体镇压 · 别让秩序崩坏';
  },
  update(dt){
    if(G.done) return;
    G.tAcc+=dt; if(G.tAcc>=1){ G.tAcc-=1; G.t--; if(G.t<=0){ G.done=true; setTimeout(levelCleared,260); } }
    G.spawnAcc+=dt; if(G.spawnAcc>=G.spawnRate){ G.spawnAcc=0; spawnViolator(); }
    for(const v of G.violators){
      v.x+=v.vx*dt; v.y+=v.vy*dt;
      if(v.x<10||v.x>VW-10) v.vx*=-1;
      if(v.y<10||v.y>VH-10) v.vy*=-1;
    }
    G.violators=G.violators.filter(v=> !v.done);
    setHud(G.t, Math.max(0,Math.round(G.order)), '压制', G.caught+'/14');
    if(G.caught>=14){ G.done=true; setTimeout(levelCleared,260); }
  },
  click(p){
    if(G.done) return;
    for(const v of G.violators){
      if(!v.done && dist(v.x,v.y,p.x,p.y)<30){ v.done=true; G.caught++; G.order=Math.min(100,G.order+6); flash(curC().accent2,120); G.kitty={x:v.x,y:v.y,t:0.3}; return; }
    }
  },
  draw(){
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,VW,VH);
    drawCreature(VW/2-26, 24, 52);
    for(const v of G.violators){ ctx.font='22px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('😈', v.x, v.y); }
    if(G.kitty && G.kitty.t>0){ ctx.font='40px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('🐱', G.kitty.x, G.kitty.y); G.kitty.t-=0.016; }
    ctx.textAlign='left'; ctx.textBaseline='top';
  }
};
function spawnViolator(){ const ang=Math.random()*Math.PI*2; G.violators.push({ x:30+Math.random()*(VW-60), y:60+Math.random()*(VH-90), vx:Math.cos(ang)*40, vy:Math.sin(ang)*40, done:false }); }

// ========================================================
//  村官努 第三关：顺尾护理·顺毛
// ========================================================
GAMES.cgTail = {
  name:'顺尾护理·顺毛', usesQte:false,
  init(){
    setHudLabels('时间','好感','顺毛');
    G = { t:22, tAcc:0, favor:0, knots:[], spawnAcc:0, spawnRate:1.0, groomed:0, busy:0, done:false };
    stageTip.textContent = '村官努尾巴掉毛，点击毛结为它顺毛 · 它办公时(请勿打扰)别乱点';
  },
  update(dt){
    if(G.done) return;
    G.tAcc+=dt; if(G.tAcc>=1){ G.tAcc-=1; G.t--; if(G.t<=0){ G.done=true; setTimeout(G.favor>=100?levelCleared:()=>levelFailed('护理不够，村官努对你印象平平。'),260); } }
    G.spawnAcc+=dt; if(G.spawnAcc>=G.spawnRate){ G.spawnAcc=0; spawnKnot(); }
    if(G.busy>0) G.busy-=dt;
    else if(Math.random()<0.004){ G.busy=1.6; }
    for(const k of G.knots) k.age+=dt;
    G.knots=G.knots.filter(k=> k.age<3.5 && !k.done);
    if(G.favor>=100){ G.done=true; setTimeout(levelCleared,260); return; }
    setHud(G.t, Math.round(G.favor), '顺毛', G.groomed);
  },
  click(p){
    if(G.done) return;
    if(G.busy>0){ G.favor=Math.max(0,G.favor-8); flash(curC().accent,180); return; }
    for(let i=G.knots.length-1;i>=0;i--){
      const k=G.knots[i], dx=p.x-k.x, dy=p.y-k.y;
      if(dx*dx+dy*dy<26*26){ k.done=true; G.groomed++; G.favor=Math.min(100,G.favor+12); flash(curC().accent2,120); spawnKnot(); return; }
    }
  },
  draw(){
    ctx.fillStyle='#0a0608'; ctx.fillRect(0,0,VW,VH);
    drawCreature(VW/2-30, VH/2-60, 60);
    ctx.fillStyle = G.busy>0? '#E63946':'#8a7560'; ctx.font='12px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText(G.busy>0?'办公中 · 请勿打扰':'好感 '+Math.round(G.favor)+'%', VW/2, VH/2-78);
    for(const k of G.knots){ ctx.font='18px sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText('🌀', k.x, k.y); }
    ctx.textAlign='left'; ctx.textBaseline='top';
  }
};
function spawnKnot(){ G.knots.push({ x:30+Math.random()*(VW-60), y:40+Math.random()*(VH-80), age:0, done:false }); }

// ============ 启动 ============
renderHome();
showPage('home','努努小镇');

// 防止手机端双击缩放（不拦截交互元素）
let lastTouchEnd=0;
document.addEventListener('touchend', e=>{
  const t=e.target;
  if(t&&t.closest&&t.closest('button,canvas,.level-card')) return;
  const now=Date.now(); if(now-lastTouchEnd<=300) e.preventDefault(); lastTouchEnd=now;
}, {passive:false});
