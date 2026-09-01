/* ---------- DATA ---------- */
const QUOTES = [
  "ابدأ الآن، الكمال يجيك وانت ماشي مش وانت واقف.",
  "الفرق بين اللي حققوا حلمهم واللي لسه، إنهم ما وقفوش يوم الصعوبة.",
  "خطوة صغيرة كل يوم، أحسن من قفزة مرة واحدة في السنة.",
  "الوقت هيعدي على أي حال، خليه يعدي وانت بتبني حاجة.",
  "التعب المؤقت أهون بكتير من الندم اللي يفضل معاك طول العمر.",
  "مفيش يوم ضايع لو اتعلمت فيه حاجة جديدة.",
  "ركز على اللي تقدر تتحكم فيه، وسيب الباقي.",
  "الانضباط هو اللي بيوصلك لما الحماس يخلص.",
  "إنت أقوى من الأعذار اللي بتقنع نفسك بيها.",
  "كل مهمة تخلصها النهاردة، بتقربك خطوة من اللي نفسك فيه.",
  "الراحة الحقيقية بعد الشغل، مش بدل منه.",
  "لو حسيت إنك تعبان، فاكر ليه بدأت من الأول.",
  "نظّم يومك قبل ما يوضّعك هو.",
  "النجاح مجموع أيام عادية اشتغلت فيها كويس.",
  "ما تقارنش نفسك بحد، قارن نفسك النهاردة بنفسك امبارح.",
  "يلا نبني مستقبلنا اليوم، مش بكرة.",
  "شغلك النهاردة هو الأساس اللي هتبني عليه بكرة.",
  "مفيش طريق سهل لحاجة تستاهل، بس كل خطوة فيه بتفرق.",
  "اشتغل وانت مش حاسس بالحماس، عشان الانضباط أقوى من المزاج.",
  "الفرصة مش بتيجي، إنت اللي بتصنعها بشغلك بدري.",
  "لو مستني الوقت المثالي، هتستنى طول عمرك. ابدأ بأي وقت متاح.",
  "شغل اليوم بضمير، أحسن من شغل بكرة بندم.",
  "العمل الجاد بيهزم الموهبة لما الموهبة ما بتشتغلش.",
  "قيمتك بتتحدد بالمشاكل اللي بتحلها، مش باللي بتشتكي منها."
];

/* Real, sourced quotes from writers, thinkers, and public figures
   about work, perseverance, and hope — shown as inspiration when a
   task is added (matched loosely to the task's wording). */
const WISDOM_QUOTES = [
  { text: "سقوط الإنسان ليس فشلاً، بل الفشل أن يبقى حيث سقط.", author: "توماس أديسون", tags:["فشل","خايف","خوف","صعب","مستحيل"] },
  { text: "أنا لم أفشل، أنا فقط اكتشفت عشرة آلاف طريقة لا تنجح.", author: "توماس أديسون", tags:["فشل","محاولة","تجربة"] },
  { text: "لو فعلنا كل ما نقدر عليه فعلاً، لأذهلنا ذلك أنفسنا.", author: "توماس أديسون", tags:["طاقة","قدرة","إمكانية"] },
  { text: "النجاح هو أن تنتقل من فشل إلى فشل دون أن تفقد حماسك.", author: "ونستون تشرشل", tags:["نجاح","استمرار","حماس"] },
  { text: "كل عمل خواء إلا إذا امتزج بالحب، فإذا امتزج عملك بالحب فقد وصلت نفسك بنفسك وبالناس.", author: "جبران خليل جبران", tags:["شغل","عمل","مشروع","وظيفة"] },
  { text: "على قدر أهل العزم تأتي العزائم، وتأتي على قدر الكرام المكارم.", author: "أبو الطيّب المتنبي", tags:["عزيمة","هدف","طموح","إصرار"] },
  { text: "يبدو الأمر مستحيلاً دائماً، حتى يتم إنجازه.", author: "نيلسون مانديلا", tags:["مستحيل","صعب","هدف","حلم"] },
  { text: "الحياة أشبه بركوب الدراجة، لتحافظ على توازنك يجب أن تستمر في التحرك.", author: "ألبرت أينشتاين", tags:["تعب","مرهق","استمرار","توازن"] },
  { text: "لست بحاجة لأن ترى السلّم كله، فقط اصعد أول درجة.", author: "مارتن لوثر كينغ", tags:["بداية","خطوة","مشروع","بدري"] },
  { text: "من جدّ وجد، ومن زرع حصد.", author: "مثل عربي", tags:["مذاكرة","دراسة","تعلم","اجتهاد"] }
];

function pickWisdomForTask(text){
  const lower = (text||'').trim();
  let matches = WISDOM_QUOTES.filter(q => q.tags.some(t => lower.includes(t)));
  const pool = matches.length ? matches : WISDOM_QUOTES;
  return pool[Math.floor(Math.random() * pool.length)];
}

const REMINDER_PHRASES = [
  "يلا نبني مستقبلنا اليوم!",
  "الوقت دلوقتي، يلا نخلصها!",
  "خطوة كمان وهتبقى أقرب لهدفك.",
  "فاكر ليه بدأت، يلا كمّل.",
  "دلوقتي وقتها، متأجلش!"
];

const STORE_KEYS = {tasks:'himma_tasks', routine:'himma_routine', streak:'himma_streak', lastDate:'himma_lastActive', quoteIdx:'himma_quoteIdx'};

function loadJSON(key, fallback){
  try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }catch(e){ return fallback; }
}
function saveJSON(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} }

let tasks = loadJSON(STORE_KEYS.tasks, []);
let routine = loadJSON(STORE_KEYS.routine, {
  morning: [{time:"07:00", text:"صحيان + ميّة وستريتش خفيف"}, {time:"08:00", text:"فطار"}],
  afternoon: [{time:"13:00", text:"غدا + بريك 20 دقيقة"}, {time:"16:00", text:"مراجعة مهام الشغل"}],
  evening: [{time:"20:00", text:"عشا خفيف"}, {time:"22:30", text:"قراءة 15 دقيقة + نوم بدري"}]
});
let currentPriority = 'high';

/* ---------- DATE / STREAK ---------- */
function todayStr(){ return new Date().toISOString().slice(0,10); }

function checkStreak(){
  const last = localStorage.getItem(STORE_KEYS.lastDate);
  let streak = parseInt(localStorage.getItem(STORE_KEYS.streak) || '0', 10);
  const today = todayStr();
  if(last === today){ /* already counted today */ }
  else if(last){
    const diff = (new Date(today) - new Date(last)) / 86400000;
    if(diff === 1){ /* continued yesterday, wait for a completed task today to bump */ }
    else if(diff > 1){ streak = 0; localStorage.setItem(STORE_KEYS.streak, streak); }
  }
  return streak;
}
function bumpStreakIfNeeded(){
  const today = todayStr();
  const last = localStorage.getItem(STORE_KEYS.lastDate);
  if(last !== today){
    let streak = parseInt(localStorage.getItem(STORE_KEYS.streak) || '0', 10);
    streak += 1;
    localStorage.setItem(STORE_KEYS.streak, streak);
    localStorage.setItem(STORE_KEYS.lastDate, today);
    document.getElementById('streakNum').textContent = streak;
  }
}

/* ---------- QUOTE ---------- */
function newQuote(){
  let idx = Math.floor(Math.random() * QUOTES.length);
  document.getElementById('quoteText').textContent = QUOTES[idx];
  saveJSON(STORE_KEYS.quoteIdx, idx);
}

/* ---------- TASKS ---------- */
function addTask(){
  const input = document.getElementById('taskInput');
  const reminderInput = document.getElementById('taskReminder');
  const text = input.value.trim();
  if(!text) return;
  const reminder = reminderInput.value || null;
  tasks.push({id: Date.now(), text, done:false, priority: currentPriority, date: todayStr(), reminder, notified:false});
  input.value = '';
  reminderInput.value = '';
  saveJSON(STORE_KEYS.tasks, tasks);
  renderAll();
  showWisdom(text);
}

/* ---------- WISDOM TOAST ---------- */
function showWisdom(taskText){
  const q = pickWisdomForTask(taskText);
  document.getElementById('wisdomQuote').textContent = `"${q.text}"`;
  document.getElementById('wisdomAuthor').textContent = `— ${q.author}`;
  document.getElementById('wisdomOverlay').classList.add('show');
}
function closeWisdom(){
  document.getElementById('wisdomOverlay').classList.remove('show');
}

/* ---------- NOTIFICATIONS / REMINDERS ---------- */
function updateNotifBanner(){
  const banner = document.getElementById('notifBanner');
  if(!banner) return;
  if('Notification' in window && Notification.permission === 'default'){
    banner.style.display = 'flex';
  } else {
    banner.style.display = 'none';
  }
}
function requestNotifPermission(){
  if(!('Notification' in window)) return;
  Notification.requestPermission().then(()=> updateNotifBanner());
}
function showPushToast(title, body){
  const el = document.getElementById('pushToast');
  document.getElementById('pushToastTitle').textContent = title;
  document.getElementById('pushToastBody').textContent = body;
  el.classList.add('show');
  setTimeout(()=> el.classList.remove('show'), 5000);
}
function fireReminder(task){
  const phrase = REMINDER_PHRASES[Math.floor(Math.random()*REMINDER_PHRASES.length)];
  const body = `${phrase} — ${task.text}`;
  if('Notification' in window && Notification.permission === 'granted'){
    try{ new Notification('⏰ وقت الإنجاز', { body, tag: 'himma-'+task.id }); }catch(e){}
  }
  showPushToast('⏰ وقت الإنجاز', body);
}
function checkReminders(){
  const now = new Date();
  const hh = String(now.getHours()).padStart(2,'0');
  const mm = String(now.getMinutes()).padStart(2,'0');
  const current = `${hh}:${mm}`;
  const today = todayStr();
  let changed = false;
  tasks.forEach(t=>{
    if(t.reminder && !t.notified && !t.done && t.date===today && t.reminder <= current){
      fireReminder(t);
      t.notified = true;
      changed = true;
    }
  });
  if(changed) saveJSON(STORE_KEYS.tasks, tasks);
}
function selectPriority(p){
  currentPriority = p;
  document.querySelectorAll('.priority-chip').forEach(el=>{
    el.classList.toggle('active', el.dataset.p === p);
  });
}
function toggleTask(id){
  const t = tasks.find(x=>x.id===id);
  if(!t) return;
  t.done = !t.done;
  if(t.done) bumpStreakIfNeeded();
  saveJSON(STORE_KEYS.tasks, tasks);
  renderAll();
}
function deleteTask(id){
  tasks = tasks.filter(x=>x.id!==id);
  saveJSON(STORE_KEYS.tasks, tasks);
  renderAll();
}
function taskItemHTML(t){
  const strike = t.done ? 'strike' : '';
  const checked = t.done ? 'checked' : '';
  return `<div class="task-item ${t.done?'done':''}">
    <div class="check ${t.priority} ${checked}" onclick="toggleTask(${t.id})">${t.done?'✓':''}</div>
    <div class="task-text ${strike}">${escapeHTML(t.text)}</div>
    <button class="task-del" onclick="deleteTask(${t.id})">✕</button>
  </div>`;
}
function escapeHTML(s){
  const d = document.createElement('div'); d.textContent = s; return d.innerHTML;
}

function renderTasks(){
  const list = document.getElementById('allTaskList');
  if(tasks.length===0){
    list.innerHTML = `<div class="empty-state"><div class="empty-emoji">📝</div><p>لسه مفيش مهام، ضيف أول مهمة تيجي فوق!</p></div>`;
    return;
  }
  const sorted = [...tasks].sort((a,b)=> a.done - b.done);
  list.innerHTML = sorted.map(taskItemHTML).join('');
}

function renderTodayTasks(){
  const today = todayStr();
  const todays = tasks.filter(t=>t.date===today);
  const list = document.getElementById('todayTaskList');
  document.getElementById('todayTaskCount').textContent = todays.length ? `${todays.filter(t=>t.done).length}/${todays.length}` : '';
  if(todays.length===0){
    list.innerHTML = `<div class="empty-state"><div class="empty-emoji">🌤️</div><p>ولّع يومك بمهمة واحدة على الأقل. روح تاب "المهام" وضيفها.</p></div>`;
  } else {
    const sorted = [...todays].sort((a,b)=> a.done - b.done);
    list.innerHTML = sorted.map(taskItemHTML).join('');
  }

  const total = todays.length;
  const done = todays.filter(t=>t.done).length;
  const pct = total ? Math.round((done/total)*100) : 0;
  const circumference = 163;
  const offset = circumference - (pct/100)*circumference;
  document.getElementById('ringFg').style.strokeDashoffset = offset;
  document.getElementById('ringPct').textContent = pct + '%';
  const sub = document.getElementById('progressSub');
  if(total===0) sub.textContent = 'لسه ما بدأتش، يلا نبدأ!';
  else if(pct===100) sub.textContent = 'تمام كامل! خلصت كل مهام اليوم 🎉';
  else sub.textContent = `خلصت ${done} من ${total} مهمة`;
}

/* ---------- ROUTINE ---------- */
function routineItemHTML(item, period, idx){
  return `<div class="routine-item">
    <div class="routine-time">${item.time}</div>
    <div class="routine-text">${escapeHTML(item.text)}</div>
    <button class="routine-del" onclick="deleteRoutine('${period}', ${idx})">✕</button>
  </div>`;
}
function renderRoutine(){
  ['morning','afternoon','evening'].forEach(period=>{
    const items = [...routine[period]].sort((a,b)=> a.time.localeCompare(b.time));
    const el = document.getElementById('routine-'+period);
    if(items.length===0){
      el.innerHTML = `<div class="empty-state" style="padding:16px;"><p>مفيش عناصر لسه</p></div>`;
    } else {
      el.innerHTML = items.map((it)=> routineItemHTML(it, period, routine[period].indexOf(it))).join('');
    }
  });
}
function addRoutine(){
  const time = document.getElementById('routineTime').value || '08:00';
  const text = document.getElementById('routineInput').value.trim();
  const period = document.getElementById('routinePeriod').value;
  if(!text) return;
  routine[period].push({time, text});
  document.getElementById('routineInput').value = '';
  saveJSON(STORE_KEYS.routine, routine);
  renderRoutine();
}
function deleteRoutine(period, idx){
  routine[period].splice(idx,1);
  saveJSON(STORE_KEYS.routine, routine);
  renderRoutine();
}

/* ---------- NAV ---------- */
function switchTab(name){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+name).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active', b.dataset.tab===name));
}

/* ---------- INIT ---------- */
function renderAll(){
  renderTasks();
  renderTodayTasks();
  renderRoutine();
}

function init(){
  const dateOpts = { weekday:'long', day:'numeric', month:'long' };
  document.getElementById('todayDate').textContent = new Date().toLocaleDateString('ar-EG', dateOpts);

  document.getElementById('streakNum').textContent = checkStreak();

  const savedIdx = loadJSON(STORE_KEYS.quoteIdx, null);
  document.getElementById('quoteText').textContent = (savedIdx!==null && QUOTES[savedIdx]) ? QUOTES[savedIdx] : QUOTES[0];

  document.getElementById('taskInput').addEventListener('keydown', e=>{ if(e.key==='Enter') addTask(); });
  document.getElementById('routineInput').addEventListener('keydown', e=>{ if(e.key==='Enter') addRoutine(); });

  updateNotifBanner();
  checkReminders();
  setInterval(checkReminders, 30000);

  renderAll();
}
init();

/* ---------- SERVICE WORKER (offline support) ---------- */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch(() => {});
  });
}
