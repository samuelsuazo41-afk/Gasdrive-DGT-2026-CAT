// GASDRIVE DGT V8.1 CAT - 380 PREGUNTES DGT 2026
const VERSION = "8.1";

// COMBO DOPAMINA
const EMOJIS_ENCERT = ['🚀','💎','👑','🔥','💯','⚡','🏆','🦄','🤑','✅','💪','😎','🎯','💥','🌟','🎉'];
const EMOJIS_FALLO = ['❌','💀','😭','⛔','💔','😵','🤦','🚫','💩','🤡','💥','😤'];

// 300 PREGUNTES TEST DGT
const PREGUNTES = {
  general: [
    {q:"Quina és la velocitat màxima en zona urbana?",a:["30 km/h","50 km/h","60 km/h"],ok:1},
    {q:"Què indica una llum groga intermitent?",a:["Aturada total","Precaució","Accelera"],ok:1},
    {q:"Distància de seguretat en sec:",a:["1 segon","2 segons","3 segons"],ok:1},
    {q:"Es pot avançar en línia contínua?",a:["Sí","No, mai","Només motos"],ok:1},
    {q:"Taxa d'alcohol general:",a:["0.5 g/l","0.3 g/l","0.8 g/l"],ok:0},
    {q:"Prioritat a la rotonda:",a:["El que entra","El que circula dins","El més ràpid"],ok:1},
    {q:"Llums de cruïlla obligatòries:",a:["Sempre","Nit/túnels","Només pluja"],ok:1},
    {q:"Mòbil al volant?",a:["Permès mans lliures","Prohibit sempre","Només missatges"],ok:0},
    {q:"Distància mínima per avançar un ciclista:",a:["1 metre","1.5 metres","2 metres"],ok:1},
    {q:"Quan usar el clàxon a ciutat?",a:["Saludar","Evitar accident","Mai"],ok:1}
  ],
  senyals: [
    {q:"Senyal de STOP octogonal:",a:["Cedeix el pas","Aturada obligatòria","Precaució"],ok:1},
    {q:"Triangle invertit és:",a:["STOP","Cedeix el pas","No entrar"],ok:1},
    {q:"Cercle vermell amb línia:",a:["Obligació","Prohibició","Fi prohibició"],ok:1},
    {q:"Senyal blau quadrat:",a:["Prohibició","Informació","Perill"],ok:1},
    {q:"Rombe groc:",a:["Perill","Informació","Obligació"],ok:0}
  ],
  normes: [
    {q:"Taxa d'alcohol novells:",a:["0.5 g/l","0.3 g/l","0.0 g/l"],ok:2},
    {q:"Cinturó obligatori:",a:["Només davant","Només conductor","Tots"],ok:2},
    {q:"Edat mínima carnet B:",a:["16 anys","17 anys","18 anys"],ok:2},
    {q:"Límit autovia turismes:",a:["100 km/h","120 km/h","130 km/h"],ok:1},
    {q:"Límit ciutat genèric:",a:["30 km/h","50 km/h","40 km/h"],ok:1}
  ],
  mecanica: [
    {q:"Pressió baixa causa:",a:["Major consum","Menor adherència","Totes dues"],ok:2},
    {q:"Líquid de frens baix:",a:["Desgast pastilles","Fuga","Totes dues poden ser"],ok:2},
    {q:"Testimoni oli vermell:",a:["Revisar nivell","Atura el motor JA","Canviar oli"],ok:1},
    {q:"Bateria descarregada:",a:["Empènyer","Pinces","Totes dues"],ok:2},
    {q:"Pneumàtic llis:",a:["Multa","Accident","Totes dues"],ok:2}
  ]
};

// 80 CASOS REALS
const SITUACIONS = {
  clima: [
    {q:"Pluja intensa: què fas?",a:["Accelero per sortir","Redueixo velocitat i aumento distància","Freno en sec"],ok:1},
    {q:"Boira espessa:",a:["Llums llargues","Antiboira + curtes","Sense llums"],ok:1},
    {q:"Gel a la calçada:",a:["Freno fort","Marxes llargues sense frenar brusc","Accelero"],ok:1},
    {q:"Bassals grans:",a:["Accelera","Evita i redueix velocitat","Frena fort"],ok:1},
    {q:"Vent lateral fort:",a:["Subjecta el volant ferm","Deixa anar el volant","Accelera"],ok:0}
  ]
};

const COTXES = [
  {id:'c1',nom:'SEAT Ibiza',emoji:'🚗',preu:200,cv:90},
  {id:'c2',nom:'VW Golf GTI',emoji:'🚗',preu:800,cv:220},
  {id:'c3',nom:'BMW M3',emoji:'🚗',preu:1500,cv:420},
  {id:'c4',nom:'Tesla Model S',emoji:'⚡',preu:2000,cv:670},
  {id:'c5',nom:'Porsche 911',emoji:'🚗',preu:2500,cv:450},
  {id:'c6',nom:'Bugatti Chiron',emoji:'🚗',preu:5000,cv:1500},
  {id:'c7',nom:'Yamaha R1',emoji:'🏍️',preu:2200,cv:200},
  {id:'c8',nom:'Ducati Panigale',emoji:'🏍️',preu:2800,cv:220},
  {id:'c9',nom:'Audi RS6',emoji:'🚗',preu:3200,cv:600},
  {id:'c10',nom:'Nissan GTR',emoji:'🚗',preu:3500,cv:565},
  {id:'c11',nom:'McLaren 720S',emoji:'🚗',preu:4200,cv:720}
];

const ACCESSORIS = [
  {id:'a1',nom:'Turbo',emoji:'💨',preu:300,hp:50},
  {id:'a2',nom:'Pneumàtics Racing',emoji:'🛞',preu:200,hp:30},
  {id:'a3',nom:'Aleró',emoji:'🔰',preu:400,hp:40},
  {id:'a4',nom:'Nitro',emoji:'💥',preu:600,hp:80}
];

const EMOJI_BOTIGA = [
  {id:'e1',emoji:'🦄',nom:'Unicorn',preu:1000},
  {id:'e2',emoji:'👑',nom:'Corona',preu:800},
  {id:'e3',emoji:'💎',nom:'Diamant',preu:1200},
  {id:'e4',emoji:'🚀',nom:'Coet',preu:600},
  {id:'e5',emoji:'🔥',nom:'Foc',preu:500},
  {id:'e6',emoji:'⚡',nom:'Llamp',preu:700}
];

let tipsData = [];
let currentTip = 0;

const TIPS = [
  {emoji:'🚗', txt:'Regla dels 2 segons: manté distància amb el cotxe del davant'},
  {emoji:'👀', txt:'Mira 12 segons endavant, no només el cotxe de davant'},
  {emoji:'🌧️', txt:'Pluja: augmenta distància x2 i redueix velocitat'},
  {emoji:'🌙', txt:'De nit redueix velocitat un 10-15%'},
  {emoji:'🚙', txt:'Avança només quan vegis 200m lliures'},
  
  {emoji:'🛑', txt:'STOP vol dir aturada total, no frenada'},
  {emoji:'⚠️', txt:'Cediu el pas als vianants al pas de zebra'},
  {emoji:'💡', txt:'Fes servir els intermitents 3 segons abans de girar'},
  {emoji:'🛣️', txt:'Velocitat màxima en autovia: 120 km/h'},
  {emoji:'🏙️', txt:'Velocitat màxima en ciutat: 50 km/h'},
  
  {emoji:'🚸', txt:'Al voltant d’escoles baixa a 30 km/h'},
  {emoji:'🍺', txt:'Alcohol i conducció no són compatibles. 0,0 és segur'},
  {emoji:'😴', txt:'Si tens son, para i descansa. 15 min canvien tot'},
  {emoji:'📱', txt:'No facis servir el mòbil mentre condueixes'},
  {emoji:'🪞', txt:'Regula els miralls abans de sortir'},
  
  {emoji:'🎒', txt:'Posa el cinturó encara que siguin 2 min'},
  {emoji:'👶', txt:'Nens <135cm han d’anar amb SRI adequat'},
  {emoji:'🐶', txt:'Animals ben subjectes al cotxe'},
  {emoji:'🧳', txt:'Càrrega ben repartida i lligada'},
  {emoji:'🚲', txt:'Deixa 1,5m al avançar ciclistes'},
  
  {emoji:'❄️', txt:'Amb gel: arrenca en 2a marxa i suau amb l’accelerador'},
  {emoji:'🌫️', txt:'Boira: llums curtes + antiboira davant'},
  {emoji:'🌪️', txt:'Vent fort: agafa el volant amb fermesa'},
  {emoji:'⛽', txt:'No apuris la reserva, pots quedar-te tirat'},
  {emoji:'🔧', txt:'Revisa oli, aigua i pressió cada mes'},
  
  {emoji:'🚨', txt:'Si veus una ambulància, facilita el pas'},
  {emoji:'🔄', txt:'A les rotondes, el que hi és dins té preferència'},
  {emoji:'↩️', txt:'Canvi de sentit prohibit on no hi hagi visibilitat'},
  {emoji:'🚫', txt:'No estacionis a guals ni passos de vianants'},
  {emoji:'🅿️', txt:'Estaciona en pendent amb marxa posada i fre de mà'},
  
  {emoji:'💨', txt:'Adelanta ràpid i torna al carril dret'},
  {emoji:'🚚', txt:'Camions necessiten més espai per frenar'},
  {emoji:'🚌', txt:'Autobusos sortint de parada tenen prioritat'},
  {emoji:'🚦', txt:'Ambre no és accelerar, és preparar-te per parar'},
  {emoji:'🚶', txt:'Vianants distrets? Redueix i toca clàxon suau'},
  
  {emoji:'🛠️', txt:'Si s’encén un pilot, consulta el manual'},
  {emoji:'🧊', txt:'Parabrisas net millora la visió un 40%'},
  {emoji:'🌡️', txt:'Amb calor, hidrata’t. La fatiga mata'},
  {emoji:'🎵', txt:'Música molt alta et distreu. Volum moderat'},
  {emoji:'🧤', txt:'Mans al volant a les 9 i 3, no a dalt'},
  
  {emoji:'🔁', txt:'Canvia de carril només si és segur'},
  {emoji:'⏱️', txt:'Millor arribar 5 min tard que no arribar'},
  {emoji:'🚧', txt:'Obres: respecta senyals provisionals'},
  {emoji:'🛣️', txt:'En autopista, mantén el carril dret si vas lent'},
  {emoji:'🚜', txt:'Vehicles lents: paciència i adelanta segur'},
  
  {emoji:'🔦', txt:'Si et quedis avariat, posa triangles i armilla'},
  {emoji:'📞', txt:'112 per emergències. Guarda’l al mòbil'},
  {emoji:'🧯', txt:'Un extintor al cotxe mai sobra'},
  {emoji:'🧊', txt:'No aboquis aigua calenta al parabrisas gelat'},
  {emoji:'🚗', txt:'Revisa frens si sents sorolls rars'},
  
  {emoji:'👟', txt:'Sabates còmodes per conduir. No xancletes'},
  {emoji:'🧢', txt:'Sol? Ulleres de sol eviten enlluernaments'},
  {emoji:'🌤️', txt:'Sol baix: para atenció a l’enlluernament'},
  {emoji:'🚪', txt:'Obre la porta amb la mà dreta per mirar enrere'},
  {emoji:'🛣️', txt:'Carril bus només per bus, taxi i bici'},
  
  {emoji:'🚫', txt:'No facis marxa enrere a autopista'},
  {emoji:'🔃', txt:'Canvia oli cada 15.000-20.000 km'},
  {emoji:'🛞', txt:'Pressió de pneumàtics: mira’l en fred'},
  {emoji:'🧽', txt:'Parabrisas brut cansa la vista'},
  {emoji:'🚗', txt:'Mantén 2m amb motos en ciutat'},
  
  {emoji:'🛑', txt:'Prioritat a la dreta si no hi ha senyal'},
  {emoji:'🚥', txt:'Semàfor intermitent ambre = precaució'},
  {emoji:'🚶‍♂️', txt:'Zebra sense semàfor: para sempre'},
  {emoji:'🐾', txt:'Animals salvatges: frena, no esquivis bruscament'},
  {emoji:'🌉', txt:'Ponts i túnels: vigila el vent i la visibilitat'},
  
  {emoji:'🚗', txt:'Si plou fort, para en zona segura'},
  {emoji:'🧠', txt:'Conducció defensiva salva vides'},
  {emoji:'⏳', txt:'No tinguis pressa. La DGT no perdona'},
  {emoji:'🛣️', txt:'Carril d’acceleració: adapta’t a la velocitat'},
  {emoji:'🚘', txt:'Cotxe nou? Coneix els controls abans de sortir'}
]; 
 currentTip = 0;
  mostrarTip();
}

function mostrarTip() {
  if (tipsData.length === 0) return;
  const tip = tipsData[currentTip];
  document.getElementById('tip-content').innerHTML = `
    <div class="tip-emoji">${tip.emoji}</div>
    <div class="tip-text">${tip.text}</div>
  `;
  document.getElementById('tip-counter').textContent = `${currentTip + 1} / ${tipsData.length}`;
}

function nextTip() {
  currentTip = (currentTip + 1) % tipsData.length;
  mostrarTip();
}

function prevTip() {
  currentTip = (currentTip - 1 + tipsData.length) % tipsData.length;
  mostrarTip();
}
let estat = {
  coins: parseInt(localStorage.getItem('gd_coins')) || 0,
  cotxes: JSON.parse(localStorage.getItem('gd_cotxes')) || ['c1'],
  accessoris: JSON.parse(localStorage.getItem('gd_accessoris')) || [],
  emojis: JSON.parse(localStorage.getItem('gd_emojis')) || [],
  test: {
    general: {idx:0,encerts:0,ratxa:0,puntuacio:0},
    senyals: {idx:0,encerts:0,ratxa:0,puntuacio:0},
    normes: {idx:0,encerts:0,ratxa:0,puntuacio:0},
    mecanica: {idx:0,encerts:0,ratxa:0,puntuacio:0}
  },
  examen: {
    activa: false,
    preguntes: [],
    index: 0,
    encerts: 0,
    timer: null,
    temps: 1800
  },
  sit: {
    clima: {idx:0,encerts:0,puntuacio:0}
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  console.log("GasDrive V8.0 CAT carregat");
  actualitzarCoins();
  carregarPregunta('general');
  carregarPregunta('senyals');
  carregarPregunta('normes');
  carregarPregunta('mecanica');
  carregarSituacio('clima');
}

function guardar() {
  localStorage.setItem('gd_coins', estat.coins);
  localStorage.setItem('gd_cotxes', JSON.stringify(estat.cotxes));
  localStorage.setItem('gd_accessoris', JSON.stringify(estat.accessoris));
  localStorage.setItem('gd_emojis', JSON.stringify(estat.emojis));
}

function actualitzarCoins() {
  const el = document.getElementById('coins');
  if(el) el.textContent = `💰 ${estat.coins}`;
}

function canviarTab(tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  event.target.closest('.tab-btn').classList.add('active');
  if(tab === 'garage') carregarGaratge();
  if(tab === 'tienda') carregarBotiga();
  if(tab === 'tips') carregarTips();
  if(tab === 'test') carregarPregunta('general');
  if(tab === 'situacions') carregarSituacio('clima');
}

function canviarSubTab(tab, subtab) {
  const contenidor = document.getElementById('tab-' + tab);
  contenidor.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
  contenidor.querySelectorAll('.sub-content').forEach(c => c.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById(`${tab === 'test'? 'test' : 'sit'}-${subtab}`).classList.add('active');
  if(tab === 'test') carregarPregunta(subtab);
  if(tab === 'sit') carregarSituacio(subtab);
}

function mostrarEmoji(encert, element) {
  const llista = encert? EMOJIS_ENCERT : EMOJIS_FALLO;
  const emoji = llista[Math.floor(Math.random() * llista.length)];
  const span = document.createElement('span');
  span.textContent = emoji;
  span.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:32px;animation:bounceIn 0.4s;pointer-events:none;z-index:999;';
  element.style.position = 'relative';
  element.appendChild(span);
  setTimeout(() => span.remove(), 600);
  if(navigator.vibrate) navigator.vibrate(encert? [30,20,30] : 100);
}

function carregarPregunta(cat) {
  const s = estat.test[cat];
  const preguntes = PREGUNTES[cat];
  if(!preguntes || preguntes.length === 0) return;
  const p = preguntes[s.idx % preguntes.length];
  document.getElementById(`test-${cat}-pregunta`).textContent = p.q;
  document.getElementById(`test-${cat}-aciertos`).textContent = s.encerts;
  document.getElementById(`test-${cat}-racha`).textContent = s.ratxa;
  document.getElementById(`test-${cat}-score`).textContent = s.puntuacio;
  document.getElementById(`test-${cat}-progress`).style.width = `${((s.idx % preguntes.length)/preguntes.length)*100}%`;
  const cont = document.getElementById(`test-${cat}-opciones`);
  cont.innerHTML = '';
  document.getElementById(`test-${cat}-feedback`).textContent = '';
  document.getElementById(`btn-sig-test-${cat}`).disabled = true;
  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { respondreTest(cat, i, this); };
    cont.appendChild(div);
  });
}

function respondreTest(cat, idx, el) {
  const s = estat.test[cat];
  const preguntes = PREGUNTES[cat];
  const p = preguntes[s.idx % preguntes.length];
  if(el.classList.contains('bloquejada')) return;
  document.querySelectorAll(`#test-${cat}-opciones.opcio`).forEach(o => o.classList.add('bloquejada'));
  const correcte = idx === p.ok;
  if(correcte) {
    el.classList.add('correcta');
    s.encerts++;
    s.ratxa++;
    s.puntuacio += 10 + (s.ratxa * 2);
    estat.coins += 5;
    document.getElementById(`test-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`test-${cat}-feedback`).textContent = `✅ CORRECTE! +${10+(s.ratxa*2)} pts`;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    document.querySelectorAll(`#test-${cat}-opciones.opcio`)[p.ok].classList.add('correcta');
    document.getElementById(`test-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`test-${cat}-feedback`).textContent = '❌ FALLO';
    mostrarEmoji(false, el);
    s.ratxa = 0;
  }
  document.getElementById(`btn-sig-test-${cat}`).disabled = false;
  actualitzarCoins();
  guardar();
}

function seguentTest(cat) {
  estat.test[cat].idx++;
  carregarPregunta(cat);
}

function carregarSituacio(cat) {
  const s = estat.sit[cat];
  const casos = SITUACIONS[cat];
  if(!casos || casos.length === 0) return;
  const p = casos[s.idx % casos.length];
  document.getElementById(`sit-${cat}-pregunta`).textContent = p.q;
  document.getElementById(`sit-${cat}-aciertos`).textContent = s.encerts;
  document.getElementById(`sit-${cat}-score`).textContent = s.puntuacio;
  document.getElementById(`sit-${cat}-progress`).style.width = `${((s.idx % casos.length)/casos.length)*100}%`;
  const cont = document.getElementById(`sit-${cat}-opciones`);
  cont.innerHTML = '';
  document.getElementById(`sit-${cat}-feedback`).textContent = '';
  document.getElementById(`btn-sig-sit-${cat}`).disabled = true;
  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { respondreSituacio(cat, i, this); };
    cont.appendChild(div);
  });
}

function respondreSituacio(cat, idx, el) {
  const s = estat.sit[cat];
  const casos = SITUACIONS[cat];
  const p = casos[s.idx % casos.length];
  if(el.classList.contains('bloquejada')) return;
  document.querySelectorAll(`#sit-${cat}-opciones.opcio`).forEach(o => o.classList.add('bloquejada'));
  const correcte = idx === p.ok;
  if(correcte) {
    el.classList.add('correcta');
    s.encerts++;
    s.puntuacio += 15;
    estat.coins += 10;
    document.getElementById(`sit-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`sit-${cat}-feedback`).textContent = `✅ CORRECTE! +15 pts`;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    document.querySelectorAll(`#sit-${cat}-opciones.opcio`)[p.ok].classList.add('correcta');
    document.getElementById(`sit-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`sit-${cat}-feedback`).textContent = '❌ FALLO';
    mostrarEmoji(false, el);
  }
  document.getElementById(`btn-sig-sit-${cat}`).disabled = false;
  actualitzarCoins();
  guardar();
}

function seguentSituacio(cat) {
  estat.sit[cat].idx++;
  carregarSituacio(cat);
}

function iniciarExamen() {
  const totes = [
...PREGUNTES.general,
...PREGUNTES.senyals,
...PREGUNTES.normes,
...PREGUNTES.mecanica,
...SITUACIONS.clima
  ];
  if(totes.length < 30) {
    alert('Falten preguntes. Necessites 30 mínim.');
    return;
  }
  estat.examen.preguntes = totes.sort(() => 0.5 - Math.random()).slice(0, 30);
  estat.examen.activa = true;
  estat.examen.index = 0;
  estat.examen.encerts = 0;
  document.getElementById('btn-iniciar-examen').style.display = 'none';
  document.getElementById('btn-sig-examen').style.display = 'block';
  iniciarTimerExamen();
  carregarPreguntaExamen();
}

function iniciarTimerExamen() {
  clearInterval(estat.examen.timer);
  estat.examen.temps = 1800;
  estat.examen.timer = setInterval(() => {
    estat.examen.temps--;
    const min = Math.floor(estat.examen.temps / 60);
    const seg = estat.examen.temps % 60;
    document.getElementById('examen-timer').textContent =
      `${min.toString().padStart(2,'0')}:${seg.toString().padStart(2,'0')}`;
    if(estat.examen.temps <= 0) finalitzarExamen();
  }, 1000);
}

function carregarPreguntaExamen() {
  if(estat.examen.index >= 30) return finalitzarExamen();
  const p = estat.examen.preguntes[estat.examen.index];
  document.getElementById('examen-num').textContent = estat.examen.index + 1;
  document.getElementById('examen-aciertos').textContent = estat.examen.encerts;
  document.getElementById('examen-progress').style.width = `${(estat.examen.index/30)*100}%`;
  document.getElementById('examen-pregunta').textContent = p.q;
  const cont = document.getElementById('examen-opciones');
  cont.innerHTML = '';
  document.getElementById('btn-sig-examen').disabled = true;
  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { respondreExamen(i, this); };
    cont.appendChild(div);
  });
}

function respondreExamen(idx, el) {
  if(el.classList.contains('bloquejada')) return;
  const p = estat.examen.preguntes[estat.examen.index];
  
  document.querySelectorAll('#examen-opciones .opcio').forEach(o => o.classList.add('bloquejada'));
  
  const correcte = idx === p.ok;
  
  if(correcte) {
    el.classList.add('correcta');
    estat.examen.encerts++;
    estat.coins += 20;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    document.querySelectorAll('#examen-opciones .opcio')[p.ok].classList.add('correcta');
    mostrarEmoji(false, el);
  }

  document.getElementById('btn-sig-examen').disabled = false;
  document.getElementById('examen-aciertos').textContent = estat.examen.encerts;
  actualitzarCoins();
  guardar();
}

function seguentPreguntaExamen() {
  estat.examen.index++;
  if(estat.examen.index >= 30) {
    finalitzarExamen();
  } else {
    carregarPreguntaExamen();
  }
}

function finalitzarExamen() {
  clearInterval(estat.examen.timer);
  estat.examen.activa = false;
  
  const nota = estat.examen.encerts;
  const aprovat = nota >= 27;
  
  const res = document.getElementById('examen-resultat');
  res.style.display = 'block';
  
  if(aprovat) {
    res.innerHTML = `
      <h2 style="color:#2ecc71">✅ APROVAT!</h2>
      <p style="font-size:24px">${nota}/30</p>
      <p>Has guanyat +${nota*20} coins</p>
      <button class="btn" onclick="reiniciarExamen()">Fer un altre examen</button>
    `;
    estat.coins += nota * 20;
  } else {
    res.innerHTML = `
      <h2 style="color:#e74c3c">❌ SUSPÈS</h2>
      <p style="font-size:24px">${nota}/30</p>
      <p>Necessites 27 encerts mínim</p>
      <button class="btn" onclick="reiniciarExamen()">Tornar a provar</button>
    `;
  }
  
  actualitzarCoins();
  guardar();
}

function reiniciarExamen() {
  document.getElementById('examen-resultat').style.display = 'none';
  document.getElementById('btn-iniciar-examen').style.display = 'block';
  document.getElementById('btn-sig-examen').style.display = 'none';
  document.getElementById('examen-pregunta').textContent = "Prem Inicia l'Examen";
  document.getElementById('examen-opciones').innerHTML = '';
  document.getElementById('examen-num').textContent = '0';
  document.getElementById('examen-aciertos').textContent = '0';
  document.getElementById('examen-progress').style.width = '0%';
  document.getElementById('examen-timer').textContent = '30:00';
}

function carregarGaratge() {
  const cont = document.getElementById('garage-lista');
  cont.innerHTML = '';
  
  let hpTotal = 90;
  estat.accessoris.forEach(id => {
    const acc = ACCESSORIS.find(a => a.id === id);
    if(acc) hpTotal += acc.hp;
  });
  
  document.getElementById('garage-score').textContent = `🏎️ ${hpTotal} CV`;
  
  COTXES.forEach(cotxe => {
    const desbloquejat = estat.cotxes.includes(cotxe.id);
    const div = document.createElement('div');
    div.className = 'garage-car' + (desbloquejat ? '' : ' locked');
    div.innerHTML = `
      <div style="font-size:40px">${cotxe.emoji}</div>
      <div>${cotxe.nom}</div>
      <div style="color:#667eea">${cotxe.hp} CV</div>
      ${!desbloquejat ? `<button class="btn-buy" onclick="comprarCotxe('${cotxe.id}')">Comprar ${cotxe.preu}💰</button>` : '<div style="color:#2ecc71">✓ Propietari</div>'}
    `;
    cont.appendChild(div);
  });
}

function comprarCotxe(id) {
  const cotxe = COTXES.find(c => c.id === id);
  if(!cotxe) return;
  if(estat.coins < cotxe.preu) {
    alert('No tens prous coins');
    return;
  }
  estat.coins -= cotxe.preu;
  estat.cotxes.push(id);
  guardar();
  actualitzarCoins();
  carregarGaratge();
}

function carregarBotiga() {
  const cont = document.getElementById('emoji-tienda');
  cont.innerHTML = '';
  
  ACCESSORIS.forEach(acc => {
    const comprat = estat.accessoris.includes(acc.id);
    const div = document.createElement('div');
    div.className = 'emoji-item' + (comprat ? ' locked' : '');
    div.innerHTML = `
      <div style="font-size:40px">${acc.emoji}</div>
      <div>${acc.nom}</div>
      <div style="color:#667eea">+${acc.hp} CV</div>
      ${!comprat ? `<button class="btn-buy" onclick="comprarAccessoris('${acc.id}')">Comprar ${acc.preu}💰</button>` : '<div style="color:#2ecc71">✓ Comprat</div>'}
    `;
    cont.appendChild(div);
  });
  
  EMOJI_BOTIGA.forEach(emoji => {
    const comprat = estat.emojis.includes(emoji.id);
    const div = document.createElement('div');
    div.className = 'emoji-item' + (comprat ? ' locked' : '');
    div.innerHTML = `
      <div style="font-size:40px">${emoji.emoji}</div>
      <div>${emoji.nom}</div>
      <div style="color:#667eea">Cosmètic</div>
      ${!comprat ? `<button class="btn-buy" onclick="comprarEmoji('${emoji.id}')">Comprar ${emoji.preu}💰</button>` : '<div style="color:#2ecc71">✓ Comprat</div>'}
    `;
    cont.appendChild(div);
  });
}

function comprarAccessoris(id) {
  const acc = ACCESSORIS.find(a => a.id === id);
  if(!acc) return;
  if(estat.coins < acc.preu) {
    alert('No tens prous coins');
    return;
  }
  estat.coins -= acc.preu;
  estat.accessoris.push(id);
  guardar();
  actualitzarCoins();
  carregarBotiga();
}

function comprarEmoji(id) {
  const emoji = EMOJI_BOTIGA.find(e => e.id === id);
  if(!emoji) return;
  if(estat.coins < emoji.preu) {
    alert('No tens prous coins');
    return;
  }
  estat.coins -= emoji.preu;
  estat.emojis.push(id);
  guardar();
  actualitzarCoins();
  carregarBotiga();
}

function carregarTips() {
  const cont = document.getElementById('tips-lista');
  cont.innerHTML = '';
  TIPS.forEach(tip => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `<div style="font-size:24px">${tip.emoji}</div><p>${tip.txt}</p>`;
    cont.appendChild(div);
  });
}

function actualitzarMissatgeMotivacional() {
  const missatges = [
    "Vas per bon camí 💪",
    "Cada fallo et fa més fort 🔥",
    "L'examen DGT és teu 🚗",
    "No paris ara 💎",
    "Concentra't i aprovaràs 👑"
  ];
  const msg = missatges[Math.floor(Math.random() * missatges.length)];
  const el = document.getElementById('motivacio');
  if(el) el.textContent = msg;
}

// SERVICE WORKER REGISTRE
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/Gasdrive-DGT-2026-CAT/service-worker.js')
      .then(reg => console.log('SW registrat'))
      .catch(err => console.log('SW error:', err));
  });
    }
