const allMatches = [
  {
    id: "m001",
    home: "Mexico",
    away: "Zuid-Afrika",
    date: "2026-06-11",
    day: "Donderdag 11 juni 2026",
    group: "Groep A",
    stadium: "Mexico City Stadium",
    status: "upcoming",
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    events: []
  },
  {
    id: "m002",
    home: "Zuid-Korea",
    away: "Tsjechie",
    date: "2026-06-11",
    day: "Donderdag 11 juni 2026",
    group: "Groep A",
    stadium: "Estadio Guadalajara",
    status: "upcoming",
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    events: []
  },
  {
    id: "m003",
    home: "Canada",
    away: "Bosnie en Herzegovina",
    date: "2026-06-12",
    day: "Vrijdag 12 juni 2026",
    group: "Groep B",
    stadium: "Toronto Stadium",
    status: "upcoming",
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    events: []
  },
  {
    id: "m004",
    home: "Verenigde Staten",
    away: "Paraguay",
    date: "2026-06-12",
    day: "Vrijdag 12 juni 2026",
    group: "Groep D",
    stadium: "Los Angeles Stadium",
    status: "upcoming",
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    events: []
  },
  {
    id: "m005",
    home: "Haiti",
    away: "Schotland",
    date: "2026-06-13",
    day: "Zaterdag 13 juni 2026",
    group: "Groep C",
    stadium: "Boston Stadium",
    status: "upcoming",
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    events: []
  },
  {
    id: "m006",
    home: "Australie",
    away: "Turkije",
    date: "2026-06-13",
    day: "Zaterdag 13 juni 2026",
    group: "Groep D",
    stadium: "BC Place Vancouver",
    status: "upcoming",
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    events: []
  },
  {
    id: "m007",
    home: "Brazilie",
    away: "Marokko",
    date: "2026-06-13",
    day: "Zaterdag 13 juni 2026",
    group: "Groep C",
    stadium: "New York New Jersey Stadium",
    status: "upcoming",
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    events: []
  },
  {
    id: "m008",
    home: "Qatar",
    away: "Zwitserland",
    date: "2026-06-13",
    day: "Zaterdag 13 juni 2026",
    group: "Groep B",
    stadium: "San Francisco Bay Area Stadium",
    status: "upcoming",
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    events: []
  },
  {
    id: "m009",
    home: "Ivoorkust",
    away: "Ecuador",
    date: "2026-06-14",
    day: "Zondag 14 juni 2026",
    group: "Groep E",
    stadium: "Philadelphia Stadium",
    status: "upcoming",
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    events: []
  },
  {
    id: "m010",
    home: "Duitsland",
    away: "Curacao",
    date: "2026-06-14",
    day: "Zondag 14 juni 2026",
    group: "Groep E",
    stadium: "Houston Stadium",
    status: "upcoming",
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    events: []
  },
  {
    id: "m011",
    home: "Nederland",
    away: "Japan",
    date: "2026-06-14",
    day: "Zondag 14 juni 2026",
    group: "Groep F",
    stadium: "Dallas Stadium",
    status: "upcoming",
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    events: []
  },
  {
    id: "m012",
    home: "Zweden",
    away: "Tunesie",
    date: "2026-06-14",
    day: "Zondag 14 juni 2026",
    group: "Groep F",
    stadium: "Estadio Monterrey",
    status: "upcoming",
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    events: []
  },
  {
    id: "m013",
    home: "Belgie",
    away: "Egypte",
    date: "2026-06-15",
    day: "Maandag 15 juni 2026",
    group: "Groep G",
    stadium: "Seattle Stadium",
    status: "upcoming",
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    events: []
  },
  {
    id: "m014",
    home: "Finalist 1",
    away: "Finalist 2",
    date: "2026-07-19",
    day: "Zondag 19 juli 2026",
    group: "Finale",
    stadium: "New York/New Jersey",
    status: "upcoming",
    homeScore: 0,
    awayScore: 0,
    minute: 0,
    events: []
  }
];

const sourceNote =
  "Schema gebaseerd op geverifieerde WK 2026-info: het toernooi start op 11 juni 2026; Mexico vs Zuid-Afrika is de openingsmatch.";

const possibleEvents = [
  { type: "Kans", text: "Een schot gaat net naast." },
  { type: "Save", text: "De keeper redt knap." },
  { type: "Kaart", text: "Gele kaart na een late tackle." },
  { type: "VAR", text: "VAR checkt de fase." },
  { type: "Goal", text: "Goal na druk in de zestien." }
];

let autoRecord = true;
let activeFilter = "all";

const nowTitle = document.querySelector("#nowTitle");
const nowText = document.querySelector("#nowText");
const nextTitle = document.querySelector("#nextTitle");
const nextText = document.querySelector("#nextText");
const recordTitle = document.querySelector("#recordTitle");
const liveTitle = document.querySelector("#live-title");
const homeName = document.querySelector("#homeName");
const awayName = document.querySelector("#awayName");
const homeScore = document.querySelector("#homeScore");
const awayScore = document.querySelector("#awayScore");
const minute = document.querySelector("#minute");
const timeline = document.querySelector("#timeline");
const matchList = document.querySelector("#matchList");
const recordBtn = document.querySelector("#recordBtn");
const replayList = document.querySelector("#replayList");
const notifyBtn = document.querySelector("#notifyBtn");
const notifyStatus = document.querySelector("#notifyStatus");
const replayModal = document.querySelector("#replayModal");
const replayTimeline = document.querySelector("#replayTimeline");
const closeReplay = document.querySelector("#closeReplay");
const liveStatus = document.querySelector("#liveStatus");
const liveMessage = document.querySelector("#liveMessage");
const resultList = document.querySelector("#resultList");
const liveList = document.querySelector("#liveList");
const upcomingList = document.querySelector("#upcomingList");
const filterButtons = document.querySelectorAll("[data-filter]");
const viewerTitle = document.querySelector("#viewerTitle");
const viewerText = document.querySelector("#viewerText");
const viewerTimeline = document.querySelector("#viewerTimeline");

function todayIso() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Brussels",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function updateStatuses() {
  const today = todayIso();
  allMatches.forEach((match) => {
    if (match.status === "finished" || match.status === "live") {
      return;
    }
    match.status = match.date < today ? "finished" : "upcoming";
  });
}

function liveMatches() {
  return allMatches.filter((match) => match.status === "live");
}

function nextMatch() {
  return allMatches.find((match) => match.status === "upcoming");
}

function getWinner(match) {
  if (match.homeScore > match.awayScore) {
    return match.home;
  }
  if (match.awayScore > match.homeScore) {
    return match.away;
  }
  return "Gelijkspel";
}

function scoreLine(match) {
  return `${match.homeScore}-${match.awayScore}`;
}

function renderScore() {
  const live = liveMatches()[0];
  const next = nextMatch();
  recordTitle.textContent = autoRecord ? "Automatisch aan" : "Automatisch uit";

  if (!live) {
    nowTitle.textContent = "Geen match live";
    nowText.textContent = "Vandaag is er nog geen WK-match bezig.";
    nextTitle.textContent = next ? `${next.home} vs ${next.away}` : "Nog niet bekend";
    nextText.textContent = next ? `${next.day} - ${next.stadium}` : "Het schema wordt later aangevuld.";
    liveTitle.textContent = "Geen match live";
    liveStatus.textContent = "Niet live";
    homeName.textContent = "Thuis";
    awayName.textContent = "Uit";
    homeScore.textContent = "-";
    awayScore.textContent = "-";
    minute.textContent = "0'";
    liveMessage.textContent =
      "Vandaag is er nog geen live match. De openingsmatch is morgen: Mexico vs Zuid-Afrika.";
    renderTimeline(timeline, []);
    return;
  }

  nowTitle.textContent = `${live.home} vs ${live.away}`;
  nowText.textContent = `${live.home} ${scoreLine(live)} ${live.away} - minuut ${live.minute}.`;
  nextTitle.textContent = next ? `${next.home} vs ${next.away}` : "Geen volgende match";
  nextText.textContent = next ? `${next.day} - ${next.stadium}` : "Alle bekende matches zijn voorbij.";
  liveTitle.textContent = `${live.home} vs ${live.away}`;
  liveStatus.textContent = "Nu live";
  homeName.textContent = live.home;
  awayName.textContent = live.away;
  homeScore.textContent = live.homeScore;
  awayScore.textContent = live.awayScore;
  minute.textContent = `${live.minute}'`;
  liveMessage.textContent = `Live: ${live.home} ${scoreLine(live)} ${live.away}. Minuut ${live.minute}.`;
  renderTimeline(timeline, live.events);
}

function renderTimeline(target, events) {
  target.innerHTML = "";

  if (!events.length) {
    target.innerHTML = '<li><time>Info</time><span>Nog geen live gebeurtenissen.</span></li>';
    return;
  }

  events
    .slice()
    .sort((a, b) => b.minute - a.minute)
    .forEach((event) => {
      const item = document.createElement("li");
      item.innerHTML = `<time>${event.minute}' - ${event.type}</time><span>${event.text}</span>`;
      target.appendChild(item);
    });
}

function renderSchedule() {
  matchList.innerHTML = "";

  const matches = filteredMatches();
  if (!matches.length) {
    matchList.innerHTML = '<p class="panel-copy">Geen wedstrijden gevonden met deze knop.</p>';
    return;
  }

  matches.forEach((match) => {
    const row = document.createElement("article");
    row.className = `match-row ${match.status === "live" ? "live-row" : ""} ${match.status === "finished" ? "finished-row" : ""}`;
    row.innerHTML = `
      <div class="date-pill">${match.day}</div>
      <div>
        <div class="teams-line">${match.home} vs ${match.away}</div>
        <div class="match-meta">${match.group} - ${match.stadium}</div>
      </div>
      <div class="row-actions">
        <div class="state-pill">${statusText(match)}</div>
        <button class="watch-button" type="button" data-watch="${match.id}">Bekijk</button>
      </div>
    `;
    matchList.appendChild(row);
  });
}

function filteredMatches() {
  const today = todayIso();
  if (activeFilter === "today") {
    return allMatches.filter((match) => match.date === today);
  }
  if (activeFilter === "netherlands") {
    return allMatches.filter((match) => match.home === "Nederland" || match.away === "Nederland");
  }
  if (activeFilter === "belgium") {
    return allMatches.filter((match) => match.home === "Belgie" || match.away === "Belgie");
  }
  if (activeFilter === "weekend") {
    return allMatches.filter((match) => match.day.startsWith("Zaterdag") || match.day.startsWith("Zondag"));
  }
  return allMatches;
}

function statusText(match) {
  if (match.status === "live") {
    return `Live ${match.minute}'`;
  }
  if (match.status === "finished") {
    return `Eindstand ${scoreLine(match)}`;
  }
  return "Nog te spelen";
}

function renderToday() {
  const today = todayIso();
  const matchesForToday = allMatches.filter((match) => match.date === today);
  const finished = matchesForToday.filter((match) => match.status === "finished");
  const live = matchesForToday.filter((match) => match.status === "live");
  const upcoming = allMatches.filter((match) => match.status === "upcoming");

  renderRows(resultList, finished, "finished");
  renderRows(liveList, live, "live");
  renderRows(upcomingList, upcoming, "upcoming");
}

function renderRows(target, matches, mode) {
  target.innerHTML = "";

  if (!matches.length) {
    target.innerHTML = '<p class="panel-copy">Niets om te tonen.</p>';
    return;
  }

  matches.forEach((match) => {
    const row = document.createElement("div");
    row.className = "result-row";

    const leftText = mode === "upcoming" ? match.day : scoreLine(match);
    const detail =
      mode === "finished"
        ? `Winnaar: ${getWinner(match)}`
        : mode === "live"
          ? `Aan het winnen: ${getWinner(match)} - minuut ${match.minute}`
          : `${match.group} - ${match.stadium}`;

    row.innerHTML = `
      <strong>${match.home} vs ${match.away}</strong>
      <div class="mini-score">
        <span>${leftText}</span>
        <span>${mode === "live" ? "LIVE" : match.group}</span>
      </div>
      <span class="${mode === "upcoming" ? "" : "winner"}">${detail}</span>
    `;
    target.appendChild(row);
  });
}

function getRecordings() {
  try {
    return JSON.parse(localStorage.getItem("worldCupRecordings")) || [];
  } catch {
    return [];
  }
}

function saveRecordings(recordings) {
  localStorage.setItem("worldCupRecordings", JSON.stringify(recordings.slice(0, 30)));
}

function upsertRecording(match) {
  const recordings = getRecordings();
  const existing = recordings.find((recording) => recording.matchId === match.id);
  const recording = {
    id: existing?.id || Date.now(),
    matchId: match.id,
    title: `${match.home} ${scoreLine(match)} ${match.away}`,
    savedAt: new Date().toLocaleString("nl-BE"),
    events: match.events.length ? match.events : [{ minute: 0, type: "Start", text: "Automatische opname gestart." }]
  };

  if (existing) {
    Object.assign(existing, recording);
  } else {
    recordings.unshift(recording);
  }

  saveRecordings(recordings);
  renderReplays();
}

function recordingForMatch(matchId) {
  return getRecordings().find((recording) => recording.matchId === matchId);
}

function showMatchFilm(matchId) {
  const match = allMatches.find((item) => item.id === matchId);
  if (!match) {
    return;
  }

  const recording = recordingForMatch(match.id);
  viewerTitle.textContent = `${match.home} vs ${match.away}`;

  if (recording) {
    viewerText.textContent = `Wedstrijdfilm: ${recording.title}. Opgeslagen op ${recording.savedAt}.`;
    renderTimeline(viewerTimeline, recording.events);
    return;
  }

  if (match.status === "live") {
    upsertRecording(match);
    viewerText.textContent = "Deze match is live. De opname is automatisch gestart.";
    renderTimeline(viewerTimeline, match.events);
    return;
  }

  viewerText.textContent = `${match.day} - ${match.group} - ${match.stadium}. Nog geen opname, want de match is nog niet live geweest.`;
  renderTimeline(viewerTimeline, []);
}

function autoRecordLiveMatches() {
  if (!autoRecord) {
    return;
  }
  liveMatches().forEach(upsertRecording);
}

function renderReplays() {
  const recordings = getRecordings();
  replayList.innerHTML = "";

  if (!recordings.length) {
    replayList.innerHTML =
      '<p class="panel-copy">Nog geen replay. Zodra een match live is, wordt automatisch een replay-log gemaakt.</p>';
    return;
  }

  recordings.forEach((recording) => {
    const item = document.createElement("div");
    item.className = "replay-item";
    item.innerHTML = `
      <div>
        <strong>${recording.title}</strong>
        <div class="match-meta">Automatisch opgeslagen: ${recording.savedAt}</div>
      </div>
      <button class="button ghost" type="button" data-replay="${recording.id}">Bekijk</button>
    `;
    replayList.appendChild(item);
  });
}

function sendNotification(title, body) {
  if (!("Notification" in window) || Notification.permission !== "granted") {
    return;
  }
  new Notification(title, { body });
}

function addLiveEvent() {
  liveMatches().forEach((match) => {
    if (match.minute >= 90) {
      match.status = "finished";
      upsertRecording(match);
      sendNotification("Eindstand", `${match.home} ${scoreLine(match)} ${match.away}`);
      return;
    }

    match.minute += 1;
    const event = { ...possibleEvents[Math.floor(Math.random() * possibleEvents.length)] };
    event.minute = match.minute;

    if (event.type === "Goal") {
      if (Math.random() > 0.5) {
        match.homeScore += 1;
        event.text = `${match.home} scoort.`;
      } else {
        match.awayScore += 1;
        event.text = `${match.away} scoort.`;
      }
      sendNotification("Goal!", event.text);
    }

    match.events.push(event);
    upsertRecording(match);
  });
}

recordBtn.addEventListener("click", () => {
  autoRecord = !autoRecord;
  recordBtn.classList.toggle("recording", autoRecord);
  recordBtn.textContent = autoRecord ? "Automatische opname aan" : "Automatische opname uit";
  recordTitle.textContent = autoRecord ? "Automatisch aan" : "Automatisch uit";
  autoRecordLiveMatches();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    renderSchedule();
  });
});

notifyBtn.addEventListener("click", async () => {
  if (!("Notification" in window)) {
    notifyStatus.textContent = "Deze browser ondersteunt geen meldingen.";
    return;
  }

  const result = await Notification.requestPermission();
  notifyStatus.textContent =
    result === "granted" ? "Meldingen staan aan." : "Meldingen zijn niet toegestaan.";
});

replayList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-replay]");
  if (!button) {
    return;
  }
  const recording = getRecordings().find((item) => String(item.id) === button.dataset.replay);
  if (!recording) {
    return;
  }
  renderTimeline(replayTimeline, recording.events);
  replayModal.showModal();
});

matchList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-watch]");
  if (!button) {
    return;
  }
  showMatchFilm(button.dataset.watch);
  document.querySelector(".watch-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

closeReplay.addEventListener("click", () => replayModal.close());

function renderAll() {
  updateStatuses();
  renderScore();
  renderSchedule();
  renderToday();
  renderReplays();
  autoRecordLiveMatches();
}

recordBtn.classList.add("recording");
recordBtn.textContent = "Automatische opname aan";
renderAll();

setInterval(() => {
  addLiveEvent();
  updateStatuses();
  renderScore();
  renderToday();
  renderReplays();
  autoRecordLiveMatches();
}, 1000);

console.info(sourceNote);
