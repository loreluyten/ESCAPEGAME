const DEV_MODE = false; // true = mode test, false = jeu normal
// const app = document.getElementById("app");
const TEST_MODE = false;
const state = {
    mode: null,
    mazePosition: { x: 0, y: 0 },
mazeCompleted: false,
    duration: 10,
    level: 1,
    unlockedRooms: [],
    scenario: null,
    currentRoom: null,
    currentObject: null,
    currentQuestion: null,
    questionMistakes: {},
    totalMistakes: 0,
    correctionCount: 0,
    currentObjectName: null,
    objectCorrectQuestions: {},
currentObjectRoom: null,
completedObjectives: [],
    remaining: 0,
    timer: null,
    inventory: [],
    discoveredCodes: [],
    usedLocks: [],
usedItems: [],
usedCodes: [],
    visitedObjects: [],
    visitedRooms: [],
    unlockedPuzzles: [],
    usedQuestions: [],
    answers: [],
    hints: 0,
    finished: false
};
const EDIT_MODE = new URLSearchParams(location.search).has("edit");
let editPoints = [];

function sceneClick(event) {
    if (!EDIT_MODE) return;

    const rect = event.currentTarget.getBoundingClientRect();
    editPoints.push({
        x: (event.clientX - rect.left) / rect.width * 100,
        y: (event.clientY - rect.top) / rect.height * 100
    });
    if (editPoints.length < 2) return;

    const [a, b] = editPoints;
    editPoints = [];
    const r = n => Math.round(n * 10) / 10;
    const text = `hotspot: { x: ${r(Math.min(a.x, b.x))}, y: ${r(Math.min(a.y, b.y))}, w: ${r(Math.abs(a.x - b.x))}, h: ${r(Math.abs(a.y - b.y))} }`;

    console.log(text);
    const out = document.getElementById("edit-output");
    if (out) out.textContent = text;
}

function renderRoomObjects(room) {
    const entries = Object.entries(room.objects);
    const placed = room.background ? entries.filter(([, o]) => o.hotspot) : [];
    const loose = room.background ? entries.filter(([, o]) => !o.hotspot) : entries;
    let html = "";

    if (room.background) {
        html += `
            <div class="room-scene ${EDIT_MODE ? "edit-mode" : ""}"
                 style="aspect-ratio:${room.aspectRatio || "16 / 9"}"
                 onclick="sceneClick(event)">
                <img src="${room.background}" alt="" draggable="false" onerror="this.remove()">
                ${placed.map(([id, object]) => {
                    const h = object.hotspot;
                    const visited = state.visitedObjects.includes(`${state.currentRoom}:${id}`);
                    return `
                        <button class="hotspot ${visited ? "visited" : ""}"
    style="left:${h.x}%;top:${h.y}%;width:${h.w}%;height:${h.h}%"
    onclick="openObject('${id}')"
    aria-label="${object.title}"
    title="${object.title}">
    <span class="hotspot-icon">
        ${visited ? "✓" : (object.icon || getObjectIcon(object.type))}
    </span>
</button>`;
                }).join("")}
            </div>
            ${EDIT_MODE ? '<div id="edit-output" class="edit-output">Mode édition : clique sur le coin haut-gauche puis bas-droite d\'un objet.</div>' : ""}
        `;
    }

    if (loose.length) {
        html += `
            <div class="room-layout">
                ${loose.map(([id, object]) => {
                    const visited = state.visitedObjects.includes(`${state.currentRoom}:${id}`);
                    return `
                        <button class="room-object" onclick="openObject('${id}')">
                            <span class="room-object-icon">${getObjectIcon(object.type)}</span>
                            <span class="room-object-name">${object.title}</span>
                            ${visited ? '<span class="object-status">✓ Inspecté</span>' : ""}
                        </button>`;
                }).join("")}
            </div>
        `;
    }

    return html;
}
function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
}

function hasItem(item) {
    return state.inventory.includes(item);
}

function addItem(item) {
    if (item && !hasItem(item)) state.inventory.push(item);
}

function hasCode(code) {
    return state.discoveredCodes.includes(code);
}


function addCode(code) {
    if (code && !hasCode(code)) {
        state.discoveredCodes.push(code);
        cleanupInventory();
    }
}




function markLockUsed() {
    const lockId = `${state.currentObjectRoom}:${state.currentObjectName}`;

    if (!state.usedLocks.includes(lockId)) {
        state.usedLocks.push(lockId);
    }

    cleanupInventory();
}


function cleanupInventory() {
    const rooms = getRooms();
    const remainingLocks = [];

    for (const [roomName, room] of Object.entries(rooms)) {
        for (const [objectName, object] of Object.entries(room.objects || {})) {
            const id = `${roomName}:${objectName}`;

            if (
    state.usedLocks.includes(id) ||
    (
        object.type === "roomDoor" &&
        state.unlockedRooms.includes(object.targetRoom)
    )
) {
    continue;
}

            // Une serrure peut aussi être un mini-jeu
            
if (
    object.requiredItem ||
    object.requiredCode !== undefined ||
    object.requiredCodes !== undefined ||
    object.codes !== undefined ||
    object.code !== undefined ||
    object.password !== undefined ||
    ["code", "password", "roomDoor", "final"].includes(object.type)
) {
    remainingLocks.push(object);
}

        }
    }

    // Identifier les objets qui ne servent plus
    state.usedItems = state.inventory.filter(item =>
        !remainingLocks.some(lock =>
            lock.requiredItem === item
        )
    );

    
    // Conserver définitivement les codes déjà utilisés.
    // Ne pas les réactiver lors du nettoyage de l'inventaire.
    state.usedCodes = state.discoveredCodes.filter(code =>
        (state.usedCodes || []).some(used =>
            String(used).trim().toUpperCase() ===
            String(code).trim().toUpperCase()
        )
    );
}



function page(content) {
    app.innerHTML = `
        <div class="container">
            <header>
                <div class="logo">🧬 MED-ESCAPE</div>
                <div class="version">ESCAPE GAME</div>
            </header>
            ${content}
            <footer>MED-ESCAPE — Prototype éducatif</footer>
        </div>
    `;
}

function home() {
    clearInterval(state.timer);
    closeModal();

    page(`
        <section class="hero">
            <div class="eyebrow">RÉVISE • EXPLORE • ÉCHAPPE-TOI</div>
            <h1>Ton cours<br><br>Ton escape game</h1>
            <p>Découvre les salles, résous des énigmes et utilise tes découvertes pour t'échapper.</p>
        </section>

        <section class="cards">
            <article class="card">
                <div class="big-icon">🧮</div>
                <h2>Mathématiques</h2>
                <p>Équations, calculs et raisonnement.</p>
                <button class="button" onclick="chooseDuration('maths')">Commencer</button>
            </article>

            <article class="card">
                <div class="big-icon">🧪</div>
                <h2>Chimie</h2>
                <p>Solutions, réactions et notions chimiques.</p>
                <button class="button" onclick="chooseDuration('chimie')">Commencer</button>
            </article>

            <article class="card">
                <div class="big-icon">👑</div>
                <h2>Boss final</h2>
                <p>La meilleure mission complète de 45 minutes qui mélange les deux matières.</p>
                <button class="button" onclick="startBoss()">Affronter le boss</button>
            </article>
        </section>
    `);
}

function chooseDuration(mode) {
    state.mode = mode;
    const name = mode === "maths" ? "Mathématiques" : "Chimie";

    page(`
        <section class="screen">
            <button class="back" onclick="home()">← Accueil</button>
            <div class="eyebrow">${name}</div>
            <h1>Choisis ta durée</h1>
            <div class="choices">
                ${[10, 20, 30].map(minutes => `
                    <button class="choice" onclick="chooseLevel(${minutes})">
                        <strong>${minutes} minutes</strong>
                        <span>${minutes === 10 ? "Mini-mission" : minutes === 20 ? "Mission complète" : "Grande exploration"}</span>
                    </button>
                `).join("")}
            </div>
        </section>
    `);
}

const MATHS_CHAPTER_NAMES = {
    1: "Equations et suites",
    2: "Fonctions usuelles, limites et dérivation",
    3: "Intégrales",
    4: "Equations différentielles",
    5: "Géométrie et trigonométrie"
};

const CHAPTER_NAMES = {
    1: "Atomistique et calculs de concentration",
    2: "Classification périodique",
    3: "Configuration électronique",
    4: "Hybridation et liaisons chimiques",
    5: "Thermochimie et équilibres thermodynamiques",
    6: "Cinétique chimique et catalyse"
};

function chooseLevel(duration) {
    state.duration = duration;

    const chapters = state.mode === "maths"
        ? [1, 2, 3, 4, 5]
        : [1, 2, 3, 4, 5, 6];

    const names = state.mode === "maths"
        ? MATHS_CHAPTER_NAMES
        : CHAPTER_NAMES;

    const subjectName = state.mode === "maths"
        ? "Mathématiques"
        : "Chimie";

    page(`
        <section class="screen">
            <button class="back" onclick="chooseDuration('${state.mode}')">
                ← Retour
            </button>

            <div class="eyebrow">${duration} MINUTES</div>
            <h1>Choisis ton chapitre</h1>
            <p>${subjectName} : sélectionne le chapitre que tu veux réviser.</p>

            <div class="choices levels">
                ${chapters.map(level => `
                    <button class="choice" onclick="startGame(${level})">
                        <strong>${names[level]}</strong>
                        <span>Chapitre ${level}</span>
                    </button>
                `).join("")}
            </div>
        </section>
    `);
}

function startBoss() {
    state.mode = "boss";
    state.duration = 45;
    startGame(0);
}

function startGame(level) {
    clearInterval(state.timer);
    closeModal();
state.finalDoorUnlocked = false;
delete state._expectedFinalCodes;
state.miniGames = {};
state.puzzleGames = {};
state.mazeGames = {};
state.connectDotsGames = {};
    state.level = level;
    state.activeRooms = buildLevelRooms(state.mode, level);
    state.scenario = SCENARIOS[state.mode];
    state.currentObject = null;
    state.currentObjectName = null;
    state.questionMistakes = {};
    state.objectCorrectQuestions = {};
    state.totalMistakes = 0;
    state.currentRoom = state.scenario.startRoom;
    state.unlockedRooms = [state.currentRoom];
    state.unlockedPuzzles = [];
state.totalMistakes = 0;
state.correctionCount = 0;
state.currentObjectRoom = null;
state.mazePosition = { x: 0, y: 0 };
state.mazeCompleted = false;
state.completedObjectives = [];
    state.currentQuestion = null;
    state.remaining = state.duration * 60;
    state.inventory = [];
    state.discoveredCodes = [];
    state.usedLocks = [];
state.usedItems = [];
state.usedCodes = [];
    state.visitedObjects = [];
    state.visitedRooms = [];
    state.usedQuestions = [];
    state.answers = [];
    state.hints = 0;
    state.finished = false;

    visitRoom(state.currentRoom);

    state.timer = setInterval(updateTimer, 1000);
}


function updateTimer() {
    if (state.finished) return;

    state.remaining--;

    if (state.remaining <= 0) {
        state.remaining = 0;
        finish("time");
        return;
    }

    const timer = document.getElementById("timer");

    if (timer) {
        timer.textContent = formatTime(state.remaining);
        if (state.remaining <= 60) timer.classList.add("warning");
    }
}

function getRooms() {
    return state.activeRooms || ROOMS[state.mode];
}

function getCurrentRoom() {
    return getRooms()[state.currentRoom];
}

function visitRoom(roomName) {
    if (!getRooms()[roomName]) return;

    // Impossible d'entrer dans une pièce qui n'a pas été débloquée.
    if (!state.unlockedRooms.includes(roomName)) return;

    closeModal();
    state.currentRoom = roomName;

    if (!state.visitedRooms.includes(roomName)) {
        state.visitedRooms.push(roomName);
    }

    renderLaboratory();
}



// Gestion propre du mécanisme des tubes de couleur (indice visuel pour les panneaux)
function openColorHint(object) {
    addCode(object.rewardCode); // Enregistre le code dans les codes découverts si défini
    completeCurrentObjective();
    showModal(object.title, `
        <div class="question-modal" style="text-align:center;">
            <p>${object.description}</p>
            <div style="display:flex; justify-content:center; gap:12px; margin:25px 0;">
                <div style="width:45px; height:110px; background:#126bff; border-radius:8px; display:flex; align-items:flex-end; justify-content:center; color:white; font-weight:bold; padding-bottom:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3);">1</div>
                <div style="width:45px; height:110px; background:#ff2020; border-radius:8px; display:flex; align-items:flex-end; justify-content:center; color:white; font-weight:bold; padding-bottom:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3);">2</div>
                <div style="width:45px; height:110px; background:#ffeb00; border-radius:8px; display:flex; align-items:flex-end; justify-content:center; color:#202020; font-weight:bold; padding-bottom:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3);">3</div>
                <div style="width:45px; height:110px; background:#00c853; border-radius:8px; display:flex; align-items:flex-end; justify-content:center; color:white; font-weight:bold; padding-bottom:8px; box-shadow:0 4px 10px rgba(0,0,0,0.3);">4</div>
            </div>
            <p style="color:var(--gold); font-weight:bold;">Indice mémorisé : Ordre séquentiel (Bleu → Rouge → Jaune → Vert)</p>
            <button class="button" onclick="closeModal(); renderLaboratory();" style="margin-top:15px;">Fermer et retenir</button>
        </div>
    `);
}
function renderLaboratory() {
    const room = getCurrentRoom();
    if (!room) return;

 const roomContent = renderRoomObjects(room);

   const roomNavigation = Object.entries(getRooms())
    .filter(([roomKey]) => state.unlockedRooms.includes(roomKey))
    .map(([roomKey, roomData]) => `
        <button
            class="room-nav-button ${roomKey === state.currentRoom ? "current" : ""}"
            onclick="visitRoom('${roomKey}')"
            ${roomKey === state.currentRoom ? "disabled" : ""}
        >
            ${roomData.title}
        </button>
    `).join("");

    page(`
        <section class="laboratory">
            <div class="game-header">
                <div>
                    <strong>${room.title}</strong>
                    <small>${state.mode === "chimie" ? "Chimie" : state.mode === "maths" ? "Mathématiques" : "Boss"} — Niveau ${state.level}</small>
                </div>
                <div class="timer" id="timer">${formatTime(state.remaining)}</div>
            </div>

            <div class="lab-introduction">
                <h1>${room.title}</h1>
                <p>${room.description || ""}</p>
            </div>

            ${roomContent}

            <section class="navigation-panel">
                <h3>Se déplacer entre les pièces</h3>
                <div class="room-list">
                    ${roomNavigation}
                </div>
            </section>

            <div class="lab-bottom">
                <section class="inventory-panel">
                    <h3>Inventaire</h3>
                    ${renderInventory()}
                </section>

                <section class="codes-panel">
                    <h3>Codes découverts</h3>
                    ${renderCodes()}
                </section>

                <section class="actions-panel">
                    <button class="button secondary" onclick="showGlobalHint()">Indice</button>
                    <button class="button danger" onclick="finish('abandoned')">Abandonner</button>
                </section>
            </div>
        </section>
    `);
}

function getObjectIcon(type) {
    const icons = {
        question: "🧠", code: "🔐", password: "💻",
        sequence: "⚗️", item: "📦", clue: "🔎",
        roomDoor: "🚪", final: "🚪", test_tube : "🧪",
        matching: "🧩", calculation: "🧮",
        electron: "⚛️", pattern: "🔵", colors: "🎨",
        maze: "🧭", directional: "🔒", symbols: "🔣", mazeController: "🎮"
    };
    return icons[type] || "❓";
}


function renderInventory() {
    const visibleItems = state.inventory.filter(
        item => item !== "computerUnlocked"
    );

    if (!visibleItems.length) {
        return '<span class="empty">Aucun objet</span>';
    }

    const labels = {
        key: "🗝️ Clé",
        badge: "🪪 Badge"
    };

    return visibleItems.map(item => {
        const used = state.usedItems.includes(item);

        return `
            <span class="inventory-item ${used ? "inventory-used" : ""}">
                ${labels[item] || item}
                ${used ? '<strong> — Utilisé</strong>' : ""}
            </span>
        `;
    }).join("");
}



function normalizeCodeValue(code) {
    return String(code ?? "").trim().toUpperCase();
}

function markCodesUsed(codes) {
    if (!Array.isArray(state.usedCodes)) {
        state.usedCodes = [];
    }

    const list = Array.isArray(codes) ? codes : [codes];

    for (const enteredCode of list) {
        const normalized = normalizeCodeValue(enteredCode);
        if (!normalized) continue;

        if (!state.usedCodes.some(used => normalizeCodeValue(used) === normalized)) {
            state.usedCodes.push(normalized);
        }
    }
}

function isCodeUsed(code) {
    const normalized = normalizeCodeValue(code);
    return (state.usedCodes || []).some(used => normalizeCodeValue(used) === normalized);
}

function renderCodes() {
    if (!state.discoveredCodes.length) {
        return '<span class="empty">Aucun code</span>';
    }

    return state.discoveredCodes.map(code => {
        const used = isCodeUsed(code);

        return `
            <span class="code-item ${used ? "inventory-used" : ""}">
                🔢 ${code}
                ${used ? '<strong> — Utilisé</strong>' : ""}
            </span>
        `;
    }).join("");
}

function completeCurrentObjective() {
    if (!state.currentObjectName || !state.currentObjectRoom) return;

    const objectiveId =
        `${state.currentObjectRoom}:${state.currentObjectName}`;

    if (!state.completedObjectives.includes(objectiveId)) {
        state.completedObjectives.push(objectiveId);
    }
}
function devCompleteObject() {
    if (!DEV_MODE || !state.currentObject) return;

    const object = state.currentObject;

    if (object.reward) {
        addItem(object.reward);
    }

    if (object.rewardCode) {
        addCode(object.rewardCode);
    }

    completeCurrentObjective();
    closeModal();

    alert("✅ Énigme validée ! Récompenses récupérées.");
}
function getGateCodes(object) {
    if (!object) return [];

    // Priorité aux propriétés dédiées au verrouillage d'entrée d'un objet
    const raw =
        object.gateCodes ??
        object.unlockCodes ??
        object.unlockCode;

    if (Array.isArray(raw)) {
        return raw.map(c => String(c).trim().toUpperCase()).filter(Boolean);
    }
    if (typeof raw === "string" && raw.trim() !== "") {
        return [raw.trim().toUpperCase()];
    }
    return [];
}

function openMultiCodeGate(object, objectName) {
    const expectedCodes = getGateCodes(object);
    const gateKey = `${state.currentRoom}:${objectName}`;
    const count = expectedCodes.length;

    state.pendingGate = { object, objectName, gateKey, expectedCodes };

    const inputsHtml = expectedCodes.map((_, idx) => `
        <div style="margin-bottom: 10px; text-align: left;">
            <label for="gate-code-${idx}">
                ${count > 1 ? `Code ${idx + 1} / ${count} :` : "Code d'accès :"}
            </label>
            <input
                id="gate-code-${idx}"
                class="code-input"
                type="text"
                autocomplete="off"
                placeholder="${count > 1 ? `Saisir le code ${idx + 1}` : "Saisir le code"}"
                style="text-transform: uppercase;"
            >
        </div>
    `).join("");

    showModal(object.title || "🔒 Accès verrouillé", `
        <div class="question-modal">
            <p>${object.description || "Cet élément nécessite un ou plusieurs codes pour être activé."}</p>
            <p class="muted">
                ${count > 1
                    ? `🔒 Entre les <strong>${count} codes</strong> requis (l'ordre n'a pas besoin d'être respecté).`
                    : "🔒 Entre le code requis pour accéder à cet objet."}
            </p>
            <div class="lock-box">
                ${inputsHtml}
                <button type="button" class="button" id="gate-validate-btn">
                    🔓 Valider
                </button>
                <div id="gate-feedback"></div>
            </div>
        </div>
    `);

    setTimeout(() => {
        const inputs = Array.from(document.querySelectorAll('[id^="gate-code-"]'));
        const btn = document.getElementById("gate-validate-btn");
        const feedback = document.getElementById("gate-feedback");

        const submitGate = () => {
            if (!state.pendingGate || !feedback) return;

            const entered = inputs.map(el => el.value.trim().toUpperCase());

            if (entered.some(val => !val)) {
                feedback.innerHTML = `<div class="feedback error">⚠️ Remplis tous les champs demandés.</div>`;
                return;
            }

            // Vérifie que chaque code attendu est présent (sans saisir deux fois le même code)
            const pool = [...state.pendingGate.expectedCodes];
            let allMatch = true;

            for (const code of entered) {
                const foundIndex = pool.indexOf(code);
                if (foundIndex === -1) {
                    allMatch = false;
                    break;
                }
                pool.splice(foundIndex, 1);
            }

            if (allMatch) {
                if (!state.unlockedGates) state.unlockedGates = [];
                if (!state.unlockedGates.includes(state.pendingGate.gateKey)) {
                    state.unlockedGates.push(state.pendingGate.gateKey);
                }
                if (!state.unlockedPuzzles.includes(state.pendingGate.gateKey)) {
                    state.unlockedPuzzles.push(state.pendingGate.gateKey);
                }

                const nextName = state.pendingGate.objectName;
                state.pendingGate = null;
                closeModal();
                openObject(nextName);
            } else {
                feedback.innerHTML = `<div class="feedback error">❌ Un ou plusieurs codes sont incorrects.</div>`;
            }
        };

        btn?.addEventListener("click", submitGate);
        inputs.forEach(inp => {
            inp.addEventListener("keydown", e => {
                if (e.key === "Enter") submitGate();
            });
        });
        inputs[0]?.focus();
    }, 50);
}

function needsEntryCode(object, objectName) {
    if (!object) return false;

    // Ces objets possèdent déjà leur propre système de validation.
    // Ne pas déclencher un deuxième verrou générique.
    const typesWithOwnCode = [
        "roomDoor",
        "final",
        "pattern",
        "question",
        "mazeGame",
        "code",
        "password"
    ];

    if (typesWithOwnCode.includes(object.type)) {
        return false;
    }

    // Récupérer tous les codes, qu'ils soient définis
    // dans requiredCode, requiredCodes ou codes.
    const expected = getExpectedCodes(object);

    const discoveredMode =
        object.requiredCode === "discovered" ||
        object.code === "discovered";

    if (!expected.length && !discoveredMode) {
        return false;
    }

    const lockId = `${state.currentRoom}:${objectName}`;

    // Ne jamais demander deux fois le même verrou.
    if (state.usedLocks.includes(lockId)) return false;

    if (
        Array.isArray(state.unlockedGates) &&
        state.unlockedGates.includes(lockId)
    ) {
        return false;
    }

    return true;
}

function openRequiredCodeGate(object, objectName) {
    const expectedCodes = getExpectedCodes(object).map(c => c.toUpperCase());
    const lockId = `${state.currentRoom}:${objectName}`;
    const count = expectedCodes.length;

    state.pendingRequiredCodeGate = {
        object,
        objectName,
        lockId,
        expectedCodes
    };

    const inputsHtml = expectedCodes.map((_, idx) => `
        <div style="margin-bottom: 10px; text-align: left;">
            <label for="req-code-input-${idx}">
                ${count > 1 ? `Code ${idx + 1} / ${count} :` : "Code requis :"}
            </label>
            <input
                id="req-code-input-${idx}"
                class="code-input"
                type="text"
                autocomplete="off"
                placeholder="${count > 1 ? `Code ${idx + 1}` : "Saisir le code"}"
                style="text-transform: uppercase;"
            >
        </div>
    `).join("");

    showModal(object.title || "🔒 Accès verrouillé", `
        <div class="question-modal">
            <p>${object.description || ""}</p>
            <p class="muted">
                ${count > 1
                    ? `🔒 Cet objet nécessite <strong>${count} codes</strong> avant de s'ouvrir.`
                    : "🔒 Entre le code requis pour accéder à cet objet."}
            </p>
            <div class="lock-box">
                ${inputsHtml}
                <button type="button" class="button" id="req-code-validate-btn">
                    🔓 Valider
                </button>
                <div id="req-code-feedback"></div>
            </div>
        </div>
    `);

    setTimeout(() => {
        const inputs = Array.from(document.querySelectorAll('[id^="req-code-input-"]'));
        const btn = document.getElementById("req-code-validate-btn");
        const feedback = document.getElementById("req-code-feedback");

        const validateGate = () => {
            if (!state.pendingRequiredCodeGate || !feedback) return;

            const entered = inputs.map(el => el.value.trim().toUpperCase());
            if (entered.some(val => !val)) {
                feedback.innerHTML = `<div class="feedback error">⚠️ Remplis tous les champs de code.</div>`;
                return;
            }

            // Vérifie que chaque code attendu est présent (sans saisir deux fois le même)
            const pool = [...state.pendingRequiredCodeGate.expectedCodes];
            let allMatch = true;

            for (const val of entered) {
                const index = pool.indexOf(val);
                if (index === -1) {
                    allMatch = false;
                    break;
                }
                pool.splice(index, 1);
            }

            if (allMatch) {
    // Les codes saisis viennent d'être consommés.
    markCodesUsed(entered);

    if (!state.unlockedGates) state.unlockedGates = [];
                if (!state.unlockedGates.includes(state.pendingRequiredCodeGate.lockId)) {
                    state.unlockedGates.push(state.pendingRequiredCodeGate.lockId);
                }

                const nextObjectName = state.pendingRequiredCodeGate.objectName;
                state.pendingRequiredCodeGate = null;
                closeModal();
                openObject(nextObjectName);
            } else {
                feedback.innerHTML = `<div class="feedback error">❌ Code(s) incorrect(s). Réessaie.</div>`;
            }
        };

        btn?.addEventListener("click", validateGate);
        inputs.forEach(input => {
            input.addEventListener("keydown", e => {
                if (e.key === "Enter") validateGate();
            });
        });
        inputs[0]?.focus();
    }, 50);
}
/**
 * Affiche un bloc de saisie adapté au nombre de requiredCode (1 ou plusieurs)
 * et appelle `onSuccess(enteredCodes)` lorsque tous les codes sont valides.
 */
function renderRequiredCodeGate(object, {
    submitLabel = "🔓 Valider",
    feedbackId = "multi-req-code-feedback",
    requireDiscovered = false,
    onSuccess
} = {}) {
    const expectedCodes = getExpectedCodes(object).map(c => String(c).toUpperCase());
    const isDiscoveredMode = object?.requiredCode === "discovered";
    const count = Math.max(1, expectedCodes.length);

    const inputsHtml = Array.from({ length: count }, (_, i) => `
        <div style="margin-bottom: 10px; text-align: left;">
            <label for="multi-req-code-${i}">
                ${count > 1 ? `🔐 Code ${i + 1} / ${count} :` : "🔐 Code requis :"}
            </label>
            <input
                id="multi-req-code-${i}"
                class="code-input multi-req-code-input"
                type="text"
                autocomplete="off"
                placeholder="${count > 1 ? `Code ${i + 1}` : "Saisir le code"}"
                style="text-transform: uppercase;"
            >
        </div>
    `).join("");

    const html = `
        <div class="lock-box">
            ${count > 1 ? `<p class="muted">Entre les <strong>${count} codes</strong> requis.</p>` : ""}
            ${inputsHtml}
            <button type="button" class="button" id="multi-req-code-btn">${submitLabel}</button>
            <div id="${feedbackId}"></div>
        </div>
    `;

    setTimeout(() => {
        const inputs = Array.from(document.querySelectorAll(".multi-req-code-input"));
        const btn = document.getElementById("multi-req-code-btn");
        const feedback = document.getElementById(feedbackId);
        if (!inputs.length || !btn || !feedback) return;

        const submit = () => {
            const entered = inputs.map(el => el.value.trim().toUpperCase());

            if (entered.some(v => !v)) {
                feedback.innerHTML = `<div class="feedback error">⚠️ Remplis tous les champs de code.</div>`;
                return;
            }

            let valid = false;

            if (isDiscoveredMode) {
                const unique = new Set(entered);
                valid = unique.size === entered.length &&
                    entered.every(code => state.discoveredCodes.some(d => String(d).toUpperCase() === code));
            } else if (expectedCodes.length === 1) {
                const match = entered[0] === expectedCodes[0];
                const discoveredOk = !requireDiscovered ||
                    state.discoveredCodes.some(d => String(d).toUpperCase() === entered[0]);
                valid = match && discoveredOk;
            } else if (expectedCodes.length > 1) {
                const pool = [...expectedCodes];
                const allMatch = entered.every(code => {
                    const idx = pool.indexOf(code);
                    if (idx === -1) return false;
                    pool.splice(idx, 1);
                    return true;
                });
                const discoveredOk = !requireDiscovered ||
                    entered.every(code => state.discoveredCodes.some(d => String(d).toUpperCase() === code));
                valid = allMatch && discoveredOk;
            } else {
                valid = entered.every(code => state.discoveredCodes.some(d => String(d).toUpperCase() === code));
            }

            if (!valid) {
                feedback.innerHTML = `<div class="feedback error">❌ Code(s) incorrect(s). Réessaie.</div>`;
                return;
            }
markCodesUsed(entered);
            if (typeof onSuccess === "function") {
                onSuccess(entered);
            }
        };

        btn.addEventListener("click", submit);
        inputs.forEach((input, idx) => {
            input.addEventListener("keydown", e => {
                if (e.key === "Enter") {
                    if (idx < inputs.length - 1) inputs[idx + 1].focus();
                    else submit();
                }
            });
        });
        inputs[0]?.focus();
    }, 50);

    return html;
}
function openObject(objectName) {
    const room = getCurrentRoom();
    const object = room.objects[objectName];

    if (!object) return;

    state.currentObject = object;
    state.currentObjectName = objectName;
    state.currentObject = object;

if (object.useBadgeReader) {
    showBadgeReader(object);
    return;
}
if (needsEntryCode(object, objectName)) {
    openRequiredCodeGate(object, objectName);
    return;
}
state.currentObjectRoom = state.currentRoom;
const puzzleKey = `${state.currentRoom}:${objectName}`;

if (
    object.unlockCode &&
    !state.unlockedPuzzles.includes(puzzleKey)
) {
    openPuzzleCodeLock(object);
    return;
}
    const key = `${state.currentRoom}:${objectName}`;
    if (!state.visitedObjects.includes(key)) state.visitedObjects.push(key);
switch (object.type) {
        case "question": openQuestion(object); break;
        case "code": openCodeLock(object); break;
        case "mazeController": openMazeController(object); break;
        case "maze": openMaze(object); break;
        case "directional": openDirectionalLock(object); break;
        case "symbols": openSymbolLock(object); break;
        case "matching": openMatching(object); break;
        case "blouse":
            openBlouse(object);
            break;
           case "connectDots":
    openConnectDotsGame(object);
    break;
case "scratch":
    openScratchGame(object);
    break;
            case "mazeGame" : openMazeGame(object); break;
        case "electron": openElectronConfig(object); break;
        case "pattern": openPatternLock(object); break;
        case "colors": openColorSequence(object); break;
        case "sequence": openSequence(object); break;
        case "test_tube":
            openColorHint(object);
            break;
        case "calculation": openCalculation(object); break;
        case "spectre": openSpectrePuzzle(object); break;
        case "password": openPassword(object); break;
        case "item":
    openItemObject(object);
    break;
        case "clue":
            let clueContent = `<p>${object.description}</p>`;
            if (object.image) {
                clueContent += `
                    <div style="margin-top: 15px; text-align: center;">
                        <img src="${object.image}" alt="${object.title}" style="max-width: 100%; height: auto; border-radius: 12px; border: 1px solid var(--border);">
                    </div>
                `;
            }
            showModal(object.title, clueContent);
            break;
        case "roomDoor": openRoomDoor(object); break;
        case "final": openFinalDoor(object); break;
        // --- NOUVEAUX MÉCANISMES CHIMIE ---
        case "balance": openBalancePuzzle(object); break;
        case "mendeleiev": openMendeleievPuzzle(object); break;
        case "molecule": openMoleculePuzzle(object); break;
        case "thermo": openThermoPuzzle(object); break;
        case "cinetique": openCinetiquePuzzle(object); break;
        case "game" : openGame(object); break;
        case "puzzle":
            openPuzzleGame(object);
            break;
        
        default: showModal(object.title, `<p>${object.description}</p>`);
    }
}

/* ===== LABYRINTHE : PLAN ET PUPITRE ===== */

const MAZE_SIZE = 10;

const MAZE_WALLS = [
    "1,0", "9,0",
    "1,1", "2,1", "3,1", "5,1", "6,1", "7,1",
    "3,2", "5,2", "7,2", "8,2",
    "0,3", "1,3", "3,3", "5,3", "7,3", "8,3",
    "1,4", "3,4", "5,4",
    "1,5", "3,5", "5,5", "7,5", "8,5", "9,5",
    "1,6", "3,6", "5,6",
    "1,7", "3,7", "5,7", "7,7", "8,7",
    "1,8", "3,8", "5,8", "6,8", "7,8", "8,8",
    "5,9"
];

// Objet 1 : consulter le plan sans déplacer le pion
function openMaze(object) {
    const walls = MAZE_WALLS;

    let html = `
        <div class="question-modal">
            <p>${object.description}</p>
            <p><strong>Départ :</strong> 🟢 en haut à gauche</p>
            <p><strong>Sortie :</strong> 🚪 en bas à droite</p>
            <div style="display:grid;grid-template-columns:repeat(10,1fr);gap:4px;margin:15px 0">
    `;

    for (let y = 0; y < MAZE_SIZE; y++) {
    for (let x = 0; x < MAZE_SIZE; x++) {
            const wall = walls.includes(`${x},${y}`);
            const start = x === 0 && y === 0;
            const exit = x === MAZE_SIZE - 1 && y === MAZE_SIZE - 1;

            html += `
                <div style="
                    aspect-ratio:1;
                    display:grid;
                    place-items:center;
                    border-radius:5px;
                    background:${wall ? '#263449' : '#dce8ef'};
                    color:${wall ? 'white' : '#172b3d'};
                    font-size:20px;
                ">
                    ${wall ? "■" : start ? "🟢" : exit ? "🚪" : ""}
                </div>
            `;
        }
    }

    html += `
            </div>
            <p>Observe les passages et mémorise ton parcours. Le pupitre de commande permet de déplacer le pion.</p>
        </div>
    `;

    showModal(object.title, html);
}

function openScratchGame(object) {
    if (!state.scratchGames) state.scratchGames = {};

    const gameId = `${state.currentRoom}:${state.currentObjectName}`;

    if (!state.scratchGames[gameId]) {
        state.scratchGames[gameId] = {
            solved: false
        };
    }

    const data = state.scratchGames[gameId];

    showModal(object.title || "🔎 Indice à gratter", `
        <div class="scratch-game" style="text-align:center;">
            <p>${object.description || "Frotte la surface grise avec ta souris pour découvrir l'indice caché."}</p>

            <div id="scratch-container" style="
                position:relative;
                width:100%;
                max-width:420px;
                height:260px;
                margin:15px auto;
                overflow:hidden;
                border-radius:10px;
                background:#fff;
                touch-action:none;
            ">
                <div style="
                    position:absolute;
                    inset:0;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-direction:column;
                    background:#fff;
                    color:#222;
                ">
                    <div style="font-size:100px;font-weight:900;">
                        ${object.rewardCode || "2"}
                    </div>
                    <div style="font-size:16px;">
                        INDICE DÉCOUVERT
                    </div>
                </div>

                <canvas
                    id="scratch-canvas"
                    width="420"
                    height="260"
                    style="
                        position:absolute;
                        inset:0;
                        width:100%;
                        height:100%;
                        cursor:crosshair;
                        touch-action:none;
                    ">
                </canvas>
            </div>

            <p id="scratch-feedback">
                Frotte plusieurs fois sur la surface pour révéler le chiffre.
            </p>

            <p id="scratch-progress" style="font-size:13px;color:#888;">
                Surface grattée : 0 %
            </p>
        </div>
    `);

    if (data.solved) {
        const canvas = document.getElementById("scratch-canvas");
        const feedback = document.getElementById("scratch-feedback");
        const progress = document.getElementById("scratch-progress");

        if (canvas) {
            canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        }
        if (feedback) feedback.textContent = "Indice déjà découvert : " + (object.rewardCode || "2");
        if (progress) progress.textContent = "Surface grattée : 100 %";
        return;
    }

    initScratchCanvas(object, gameId);
}


function initScratchCanvas(object, gameId) {
    const canvas = document.getElementById("scratch-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const feedback = document.getElementById("scratch-feedback");
    const progress = document.getElementById("scratch-progress");

    let isScratching = false;
    let completed = false;

    // Création de la couche grise sale
    ctx.fillStyle = "#858585";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Texture irrégulière pour donner un aspect sale
    for (let i = 0; i < 1800; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 3 + 1;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = Math.random() > 0.5
            ? "rgba(35,35,35,0.15)"
            : "rgba(230,230,230,0.18)";
        ctx.fill();
    }

    // Aspect légèrement poussiéreux
    ctx.fillStyle = "rgba(50,50,50,0.12)";
    for (let i = 0; i < 25; i++) {
        ctx.fillRect(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 35 + 5,
            Math.random() * 4 + 1
        );
    }

    // Efface la couche grise au passage de la souris
    function scratch(e) {
        if (!isScratching || completed) return;

        const rect = canvas.getBoundingClientRect();

        const x = (e.clientX - rect.left) * canvas.width / rect.width;
        const y = (e.clientY - rect.top) * canvas.height / rect.height;

        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 19, 0, Math.PI * 2);
        ctx.fill();

        // Trait continu entre deux positions
        if (scratch.lastX !== undefined && scratch.lastY !== undefined) {
            ctx.beginPath();
            ctx.moveTo(scratch.lastX, scratch.lastY);
            ctx.lineTo(x, y);
            ctx.lineWidth = 38;
            ctx.lineCap = "round";
            ctx.stroke();
        }

        scratch.lastX = x;
        scratch.lastY = y;

        ctx.globalCompositeOperation = "source-over";

        // Vérifie régulièrement la quantité de surface effacée
        checkScratchProgress();
    }

    function checkScratchProgress() {
        const image = ctx.getImageData(
            0, 0,
            canvas.width,
            canvas.height
        );

        let transparentPixels = 0;
        let totalPixels = 0;

        // On analyse un pixel sur huit pour limiter les calculs
        for (let y = 0; y < canvas.height; y += 8) {
            for (let x = 0; x < canvas.width; x += 8) {
                const index = (y * canvas.width + x) * 4 + 3;

                totalPixels++;

                if (image.data[index] < 128) {
                    transparentPixels++;
                }
            }
        }

        const percentage = Math.round(
            transparentPixels / totalPixels * 100
        );

        if (progress) {
            progress.textContent = `Surface grattée : ${percentage} %`;
        }

        // Le chiffre est entièrement révélé à partir de 55 %
        if (percentage >= 55 && !completed) {
            completed = true;

            state.scratchGames[gameId].solved = true;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (feedback) {
                feedback.innerHTML = `
                    <span style="color:var(--accent);font-weight:bold;">
                        Indice découvert : ${object.rewardCode || "2"}
                    </span>
                `;
            }

            if (progress) {
                progress.textContent = "Surface grattée : 100 %";
            }
        }
    }

    canvas.addEventListener("pointerdown", e => {
        if (completed) return;

        isScratching = true;
        scratch.lastX = undefined;
        scratch.lastY = undefined;

        canvas.setPointerCapture(e.pointerId);
        scratch(e);
    });

    canvas.addEventListener("pointermove", scratch);

    function stopScratching() {
        isScratching = false;
        scratch.lastX = undefined;
        scratch.lastY = undefined;
    }

    canvas.addEventListener("pointerup", stopScratching);
    canvas.addEventListener("pointercancel", stopScratching);
    canvas.addEventListener("lostpointercapture", stopScratching);
}
// Objet 2 : déplacer le pion sans voir le plan
function openMazeController(object) {
    if (state.mazeCompleted) {
        showModal(object.title, `
            <div class="feedback success">
                <strong>Labyrinthe déjà terminé !</strong>
                <p>Code obtenu : ${object.rewardCode}</p>
            </div>
        `);
        return;
    }

    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description}</p>
            <p>Déplace le pion à l'aide des flèches.</p>

            <div id="maze-position" style="text-align:center;margin:15px">
                Position : ${state.mazePosition.x + 1} / ${state.mazePosition.y + 1}
            </div>

            <div style="display:grid;grid-template-columns:repeat(3,60px);gap:8px;justify-content:center">
                <span></span>
                <button class="button" onclick="moveMaze(0,-1)">↑</button>
                <span></span>

                <button class="button" onclick="moveMaze(-1,0)">←</button>
                <button class="button" onclick="moveMaze(0,1)">↓</button>
                <button class="button" onclick="moveMaze(1,0)">→</button>
            </div>

            <div id="maze-feedback" style="margin-top:15px;text-align:center">
                À toi de trouver le chemin.
            </div>
        </div>
    `);
}

function openBlouse(object) {
    addCode(object.rewardCode);
    if (object.reward) addItem(object.reward);
    completeCurrentObjective();
    showModal(object.title, `
        <div class="unlock-animation">🪪</div>
        <h3>Badge de sécurité récupéré !</h3>
        <p>${object.description}</p>
        <p>Code secret découvert sur le badge : <strong>${object.rewardCode}</strong></p>
        <button class="button" onclick="closeModal(); renderLaboratory();">Continuer</button>
    `);
}
// Déplacement et conservation de la position
function moveMaze(dx, dy) {
    if (state.mazeCompleted) return;

    const x = state.mazePosition.x + dx;
    const y = state.mazePosition.y + dy;

    if (
    x < 0 || x >= MAZE_SIZE ||
    y < 0 || y >= MAZE_SIZE
) {
        showMazeFeedback("Impossible : tu es au bord du parcours.");
        return;
    }

    if (MAZE_WALLS.includes(`${x},${y}`)) {
        showMazeFeedback("Passage bloqué ! Essaie une autre direction.");
        return;
    }

    state.mazePosition = { x, y };

    const position = document.getElementById("maze-position");
    if (position) {
        position.textContent =
            `Position : ${x + 1} / ${y + 1}`;
    }

    showMazeFeedback("Déplacement effectué.");

   if (x === MAZE_SIZE - 1 && y === MAZE_SIZE - 1) {
        state.mazeCompleted = true;

        const object = state.currentObject;
        addCode(object.rewardCode);
        completeCurrentObjective();

        showMazeFeedback(`
            <div class="feedback success">
                <strong>Labyrinthe terminé !</strong>
                <p>Code obtenu : ${object.rewardCode}</p>
                <button class="button"
                    onclick="closeModal();renderLaboratory()">
                    Continuer
                </button>
            </div>
        `);
    }
}


function showMazeFeedback(message) {
    const feedback = document.getElementById("maze-feedback");
    if (feedback) feedback.innerHTML = message;
}

/* ===== CADENAS DIRECTIONNEL ===== */

function openDirectionalLock(object) {
    state.pendingDirectionalLock = object;
    state.directionInput = [];

    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description || ""}</p>
            <p>Entre la combinaison de directions :</p>

            <div id="direction-progress"></div>

            <div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap">
                <button class="button" onclick="pressDirection('up')">↑</button>
                <button class="button" onclick="pressDirection('right')">→</button>
                <button class="button" onclick="pressDirection('down')">↓</button>
                <button class="button" onclick="pressDirection('left')">←</button>
            </div>

            <button class="button secondary" onclick="resetDirections()">Effacer</button>
            <button class="button" onclick="checkDirections()">Valider</button>

            <div id="direction-feedback"></div>
        </div>
    `);

    renderDirections();
}

function renderDirections() {
    const box = document.getElementById("direction-progress");
    if (!box) return;

    const icons = {
        up: "↑",
        right: "→",
        down: "↓",
        left: "←"
    };

    box.innerHTML = state.directionInput.map(d => icons[d]).join(" ");
}

function pressDirection(direction) {
    const object = state.pendingDirectionalLock;
    if (!object || !Array.isArray(object.sequence)) return;

    if (state.directionInput.length >= object.sequence.length) return;

    state.directionInput.push(direction);
    renderDirections();
}

function resetDirections() {
    state.directionInput = [];
    renderDirections();

    const feedback = document.getElementById("direction-feedback");
    if (feedback) feedback.innerHTML = "";
}

function checkDirections() {
    const object = state.pendingDirectionalLock;
    if (!object || !Array.isArray(object.sequence)) return;

    const expected = object.sequence;
    const feedback = document.getElementById("direction-feedback");

    if (!feedback) return;

    if (state.directionInput.join(",") === expected.join(",")) {
        if (object.rewardCode) {
            addCode(object.rewardCode);
        }

        if (object.reward) {
            addItem(object.reward);
        }

        completeCurrentObjective();

        feedback.innerHTML = `
            <div class="feedback success">
                <strong>Cadenas déverrouillé !</strong>
                ${object.rewardCode
                    ? `<p>Code obtenu : ${object.rewardCode}</p>`
                    : ""}
                <button class="button"
                    onclick="closeModal(); renderLaboratory()">
                    Continuer
                </button>
            </div>
        `;
    } else {
        feedback.innerHTML = `
            <div class="feedback error">
                Combinaison incorrecte. Réessaie.
            </div>
        `;

        state.directionInput = [];
        renderDirections();
    }
}
/* ===== COFFRE À SYMBOLES ===== */

function openSymbolLock(object) {
    state.symbolInput = [];

    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description}</p>
            <p>Sélectionne les symboles dans le bon ordre :</p>
            <div id="symbol-progress"></div>
            <div style="display:flex;justify-content:center;gap:10px;flex-wrap:wrap">
                ${object.symbols.map((symbol, i) => `
                    <button class="button" onclick="pressSymbol(${i})">
                        ${symbol}
                    </button>
                `).join("")}
            </div>
            <button class="button secondary" onclick="resetSymbols()">Effacer</button>
            <button class="button" onclick="checkSymbols()">Valider</button>
            <div id="symbol-feedback"></div>
        </div>
    `);

    renderSymbols();
}

function pressSymbol(index) {
    if (state.symbolInput.length >= state.currentObject.sequence.length) return;
    state.symbolInput.push(index);
    renderSymbols();
}

function renderSymbols() {
    const box = document.getElementById("symbol-progress");
    if (!box) return;

    box.textContent = state.symbolInput
        .map(i => state.currentObject.symbols[i])
        .join(" → ");
}

function resetSymbols() {
    state.symbolInput = [];
    renderSymbols();
    const feedback = document.getElementById("symbol-feedback");
    if (feedback) feedback.innerHTML = "";
}

function checkSymbols() {
    const expected = state.currentObject.sequence;
    const feedback = document.getElementById("symbol-feedback");

    if (state.symbolInput.join(",") === expected.join(",")) {
        addCode(state.currentObject.rewardCode);
        completeCurrentObjective();

        feedback.innerHTML = `
            <div class="feedback success">
                <strong>Coffre ouvert !</strong>
                <p>Code obtenu : ${state.currentObject.rewardCode}</p>
                <button class="button"
                    onclick="closeModal();renderLaboratory()">Continuer</button>
            </div>
        `;
    } else {
        feedback.innerHTML = `
            <div class="feedback error">Mauvais ordre. Réessaie.</div>
        `;
        state.symbolInput = [];
        renderSymbols();
    }
}
function openSequence(object) {
    let order = shuffle(object.steps.map((_, i) => i));

    // Évite que l'ordre mélangé soit déjà le bon
    if (order.length > 1 && order.every((v, i) => v === i)) {
        order.push(order.shift());
    }
    state.sequenceOrder = order;

    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description}</p>
            <p class="muted">Glisse les étapes ou utilise les flèches ↑ ↓.</p>
            <div id="sequence-list" class="sequence-list"></div>
            <div id="sequence-feedback"></div>
            <button class="button" onclick="checkSequence()">Vérifier l'ordre</button>
        </div>
    `);

    renderSequenceList();
}

function renderSequenceList() {
    const object = state.currentObject;
    const list = document.getElementById("sequence-list");
    if (!object || !list) return;

    const last = state.sequenceOrder.length - 1;

    list.innerHTML = state.sequenceOrder.map((stepIndex, position) => `
        <div class="sequence-item" draggable="true" data-position="${position}">
            <span class="sequence-number">${position + 1}</span>
            <span class="sequence-text">${object.steps[stepIndex]}</span>
            <span class="sequence-buttons">
                <button class="seq-btn" onclick="moveSequenceStep(${position}, -1)"
                    ${position === 0 ? "disabled" : ""}>↑</button>
                <button class="seq-btn" onclick="moveSequenceStep(${position}, 1)"
                    ${position === last ? "disabled" : ""}>↓</button>
            </span>
        </div>
    `).join("");

    let dragFrom = null;

    list.querySelectorAll(".sequence-item").forEach(item => {
        item.addEventListener("dragstart", () => {
            dragFrom = Number(item.dataset.position);
            item.classList.add("dragging");
        });
        item.addEventListener("dragend", () => item.classList.remove("dragging"));
        item.addEventListener("dragover", e => e.preventDefault());
        item.addEventListener("drop", e => {
            e.preventDefault();
            const to = Number(item.dataset.position);
            if (dragFrom === null || dragFrom === to) return;
            const [moved] = state.sequenceOrder.splice(dragFrom, 1);
            state.sequenceOrder.splice(to, 0, moved);
            renderSequenceList();
        });
    });
}

function moveSequenceStep(position, direction) {
    const target = position + direction;
    const order = state.sequenceOrder;
    if (target < 0 || target >= order.length) return;
    [order[position], order[target]] = [order[target], order[position]];
    renderSequenceList();
}

function checkSequence() {
    const object = state.currentObject;
    const feedback = document.getElementById("sequence-feedback");
    if (!object || !feedback) return;

    const wellPlaced = state.sequenceOrder.filter((stepIndex, position) => stepIndex === position).length;
    const total = state.sequenceOrder.length;

    if (wellPlaced === total) {
        addCode(object.rewardCode);
        completeCurrentObjective();

        feedback.innerHTML = `
            <div class="feedback success">
                <strong>✅ Protocole validé !</strong>
                <p>Code obtenu : <strong>${object.rewardCode}</strong></p>
                <button class="button" onclick="closeModal(); renderLaboratory();">Continuer</button>
            </div>
        `;
    } else {
        feedback.innerHTML = `
            <div class="feedback error">
                <strong>❌ Pas encore !</strong>
                <p>${wellPlaced}/${total} étapes bien placées.</p>
            </div>
        `;
    }
}

function openCalculation(object) {
    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description}</p>
            <label for="calculation-answer">Ta réponse :</label>
            <input
                id="calculation-answer"
                class="code-input"
                type="number"
                step="any"
                placeholder="Saisir une valeur"
            >
            <button class="button" onclick="checkCalculation()">
                Vérifier
            </button>
            <div id="calculation-feedback"></div>
        </div>
    `);
}

// Énigme UV-Visible : loi de Beer-Lambert A = (epsilon.l) x C.
function openSpectrePuzzle(object) {
    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description}</p>
            <p>Utilise la loi de Beer-Lambert : A = (ε × l) × C.</p>
            <label for="spectre-answer">Concentration C (en mmol/L)</label>
            <input id="spectre-answer" class="code-input" type="number" step="any" min="0" placeholder="Ex. : 0,50">
            <button class="button" onclick="checkSpectrePuzzle()">Valider</button>
            <div id="spectre-feedback"></div>
        </div>
    `);
}

function checkSpectrePuzzle() {
    const object = state.currentObject;
    const input = document.getElementById("spectre-answer");
    const feedback = document.getElementById("spectre-feedback");
    if (!object || !input || !feedback || input.value.trim() === "") return;
    const answer = Number(input.value);
    const expected = Number(object.targetC);
    if (Number.isFinite(answer) && Number.isFinite(expected) && Math.abs(answer - expected) <= 0.005) {
        addCode(object.rewardCode);
        completeCurrentObjective();
        feedback.innerHTML = `<div class="feedback success"><strong>Bonne concentration !</strong>
            <p>Code obtenu : <strong>${object.rewardCode || "aucun"}</strong></p>
            <button class="button" onclick="closeModal(); renderLaboratory();">Continuer</button></div>`;
    } else {
        feedback.innerHTML = `<div class="feedback error">Vérifie le calcul C = A / (ε × l) et les unités.</div>`;
    }
}

function checkCalculation() {
    const object = state.currentObject;
    const input = document.getElementById("calculation-answer");
    const feedback = document.getElementById("calculation-feedback");

    if (!object || !input || !feedback || input.value.trim() === "") return;

    const answer = Number(input.value);
    const expected = Number(object.answer);
    const correct = Math.abs(answer - expected) < 0.000001;

    if (correct) {
        addCode(object.rewardCode);
        completeCurrentObjective();

        feedback.innerHTML = `
            <div class="feedback success">
                <strong>Calcul validé !</strong>
                <p>Code obtenu : <strong>${object.rewardCode}</strong></p>
                <button class="button"
                    onclick="closeModal(); renderLaboratory();">
                    Continuer
                </button>
            </div>
        `;
    } else {
        feedback.innerHTML = `
            <div class="feedback error">
                <strong>Ce n'est pas encore correct.</strong>
                <p>${object.hint || "Vérifie ta formule et tes unités."}</p>
                </div>
        `;
    }
}
/* =========================================================
   MINI-JEU : LE TIREUR DE TUBE À ESSAI (BASKET CHIMIQUE)
   ========================================================= */

/* =========================================================
   MINI-JEU : LE TIREUR DE TUBE À ESSAI (BASKET CHIMIQUE) - VERSION INFINIE
   ========================================================= */
function openGame(object) {
    const gameId = `${state.currentRoom}:${state.currentObjectName}`;
    if (!state.miniGames) state.miniGames = {};

    if (!state.miniGames[gameId]) {
        state.miniGames[gameId] = { attempts: 5, scored: 0, finished: false };
    }
    const data = state.miniGames[gameId];

    showModal(object.title, `
        <div class="question-modal" style="text-align:center;">
            <p>${object.description}</p>
            <p>🎯 Objectif : Mettre <strong>1 bille</strong> dans le tube à essai (Essais : <strong><span id="mg-attempts">${data.attempts}</span></strong>/5)</p>
            
            <div style="position:relative; width:100%; max-width:450px; margin:15px auto; background:#0a1626; border:2px solid var(--border); border-radius:15px; overflow:hidden;">
                <canvas id="chem-game-canvas" width="450" height="300" style="display:block; width:100%; height:auto; cursor:crosshair;"></canvas>
            </div>

            <p style="font-size:0.85rem; color:var(--muted);">Maintiens le clic gauche pour charger la puissance, puis relâche pour tirer.</p>
            <div id="mg-feedback" style="margin-top:10px; font-weight:bold;"></div>
            
            <div id="mg-actions" style="margin-top:10px; display:flex; justify-content:center; gap:10px;">
                <button class="button secondary" onclick="closeModal(); renderLaboratory();">Quitter</button>
            </div>
        </div>
    `);

    setTimeout(() => initChemBasketGame(object, data), 50);
}

function initChemBasketGame(object, data) {
    const canvas = document.getElementById("chem-game-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let ball = { x: 50, y: 250, radius: 8, vx: 0, vy: 0, active: false };
    let isCharging = false;
    let power = 0;
    let maxPower = 22;
    let mouseX = 100;
    let mouseY = 150;

    const tube = { x: 360, y: 110, width: 35, height: 75 };
    let obstacle = { x: 220, y: 80, w: 14, h: 110, vy: 1.5 };

    // Une seule réussite suffit (ou 5 essais épuisés)
    let isWon = data.finished || data.scored >= 1;
    let lockedBallInTube = isWon ? { x: tube.x + 18, y: tube.y + 55 } : null;

    function resetBall() {
        if (isWon) return;
        ball.x = 50;
        ball.y = 250;
        ball.vx = 0;
        ball.vy = 0;
        ball.active = false;
        power = 0;
    }

    // Validation du jeu (réussie ou automatique)
    function winGame(automatic) {
        if (isWon && data.finished) return;
        isWon = true;
        data.finished = true;
        ball.active = false;
        isCharging = false;
        lockedBallInTube = { x: tube.x + 18, y: tube.y + 55 };

        addCode(object.rewardCode);
        completeCurrentObjective();

        const message = automatic
            ? `Les 5 essais sont écoulés : le tube est validé automatiquement.`
            : `🎉 Objectif atteint !`;

        document.getElementById("mg-feedback").innerHTML = `
            <div class="feedback success" style="margin:5px 0; padding:8px;">
                ${message} Code obtenu : <strong>${object.rewardCode}</strong>
            </div>
        `;
        document.getElementById("mg-actions").innerHTML = `
            <button class="button" onclick="closeModal(); renderLaboratory();">Continuer l'aventure</button>
        `;
    }

    // Si le jeu était déjà épuisé avant d'ouvrir la fenêtre
    if (!isWon && data.attempts <= 0) {
        winGame(true);
    }

    canvas.addEventListener("mousemove", (e) => {
        if (isWon || data.attempts <= 0) return;
        const rect = canvas.getBoundingClientRect();
        mouseX = (e.clientX - rect.left) * (canvas.width / rect.width);
        mouseY = (e.clientY - rect.top) * (canvas.height / rect.height);
    });

    canvas.addEventListener("mousedown", () => {
        if (!ball.active && !isWon && data.attempts > 0) {
            isCharging = true;
            power = 2;
        }
    });

    canvas.addEventListener("mouseup", () => {
        if (isCharging && !ball.active && !isWon) {
            isCharging = false;
            data.attempts--;
            document.getElementById("mg-attempts").textContent = data.attempts;

            const dx = mouseX - ball.x;
            const dy = mouseY - ball.y;
            const angle = Math.atan2(dy, dx);

            ball.vx = Math.cos(angle) * power;
            ball.vy = Math.sin(angle) * power;
            ball.active = true;
        }
    });

    function checkMiss(msg) {
        ball.active = false;

        if (data.attempts <= 0) {
            // Plus d'essais : validation automatique
            winGame(true);
        } else {
            document.getElementById("mg-feedback").innerHTML =
                `<span style="color:var(--danger);">${msg} Essais restants : ${data.attempts}</span>`;
            setTimeout(resetBall, 1000);
        }
    }

    function updateGame() {
        // Arrête la boucle si la fenêtre a été fermée
        if (!document.body.contains(canvas)) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 1. Obstacle mobile
        obstacle.y += obstacle.vy;
        if (obstacle.y < 30 || obstacle.y > 160) obstacle.vy *= -1;

        // 2. Jauge de puissance
        if (isCharging) {
            power += 0.4;
            if (power > maxPower) power = maxPower;
        }

        // 3. Physique de la balle
        if (ball.active) {
            ball.vy += 0.45;
            ball.x += ball.vx;
            ball.y += ball.vy;

            if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) ball.vx *= -0.5;

            if (ball.x > obstacle.x && ball.x < obstacle.x + obstacle.w &&
                ball.y > obstacle.y && ball.y < obstacle.y + obstacle.h) {
                ball.vx *= -0.8;
                ball.x += ball.vx * 2;
            }

            // Entrée dans le tube à essai : une seule réussite suffit
            if (ball.x >= tube.x + 5 && ball.x <= tube.x + tube.width - 5 &&
                ball.y >= tube.y && ball.y <= tube.y + 20 && ball.vy > 0) {
                data.scored++;
                winGame(false);
            } else if (ball.y + ball.radius > canvas.height) {
                checkMiss("La bille a touché le sol.");
            } else if (ball.y < -50 || ball.x > canvas.width + 50) {
                checkMiss("C'est hors-zone !");
            }
        }

        // --- DESSIN ---

        // Ligne de visée
        if (!ball.active && !isWon && data.attempts > 0) {
            ctx.beginPath();
            ctx.setLineDash([4, 4]);
            ctx.strokeStyle = "rgba(85, 214, 190, 0.5)";
            ctx.lineWidth = 1;
            ctx.moveTo(ball.x, ball.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        // Tube à essai
        ctx.strokeStyle = "#edf6ff";
        ctx.lineWidth = 3;
        ctx.fillStyle = "rgba(110, 168, 254, 0.2)";
        ctx.beginPath();
        ctx.roundRect(tube.x, tube.y, tube.width, tube.height, [0, 0, 12, 12]);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.fillRect(tube.x + 5, tube.y + 10, 4, tube.height - 20);

        // Bille dans le tube (validée)
        if (lockedBallInTube) {
            ctx.fillStyle = "#ff6678";
            ctx.beginPath();
            ctx.arc(lockedBallInTube.x, lockedBallInTube.y, ball.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#ffffff";
            ctx.stroke();
        }

        // Obstacle mobile
        ctx.fillStyle = "#29415e";
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#55d6be";
        ctx.strokeRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);

        // Bille de tir
        if (!isWon) {
            ctx.fillStyle = "#ff6678";
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "#ffffff";
            ctx.stroke();
        }

        // Jauge de puissance
        if (isCharging) {
            ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
            ctx.fillRect(50, 280, 100, 8);
            ctx.fillStyle = power > 15 ? "#ff6678" : "#55d6be";
            ctx.fillRect(50, 280, (power / maxPower) * 100, 8);
        }

        requestAnimationFrame(updateGame);
    }

    updateGame();
}

function openMatching(config) {
    if (!config || !Array.isArray(config.items) || !Array.isArray(config.options)) {
        console.error("Configuration du matching invalide :", config);
        return;
    }

    currentMatchingConfig = config;

    const optionsHtml = config.options
        .map(opt => `
            <option value="${opt.value}">${opt.label}</option>
        `)
        .join("");

    const fieldsHtml = config.items
        .map(item => `
            <div style="margin: 15px 0;">
                <label for="match-${item.id}" style="display:block; margin-bottom:5px;">
                    <strong>${item.label} :</strong>
                </label>

                <select
                    id="match-${item.id}"
                    class="answer"
                    style="width:100%; padding:10px; background:var(--panel-light); color:var(--text); border:1px solid var(--border); border-radius:8px;"
                >
                    <option value="">-- Choisir une définition --</option>
                    ${optionsHtml}
                </select>
            </div>
        `)
        .join("");

    showModal(
        config.title || "🧩 Exercice d'association",
        `
            <div class="question-modal">
                <p>${config.prompt || config.description || "Associe chaque élément à sa définition :"}</p>

                ${fieldsHtml}

                <div id="matching-feedback"></div>

                <button
                    class="button"
                    onclick="checkMatching()"
                    style="margin-top:15px; width:100%;"
                >
                    ${config.buttonLabel || "Vérifier les associations"}
                </button>
            </div>
        `
    );
}


function checkMatching() {
    const cfg = currentMatchingConfig;
    if (!cfg) return;

    const feedback = document.getElementById("matching-feedback");
    if (!feedback) return;

    const selections = cfg.items.map(item => {
        const el = document.getElementById(`match-${item.id}`);

        return {
            item,
            value: el ? el.value : ""
        };
    });

    // Vérification des réponses manquantes
    if (selections.some(s => !s.value)) {
        feedback.innerHTML = `
            <div class="feedback error" style="margin-top:10px;">
                ⚠️ Veuillez sélectionner une définition pour chaque élément.
            </div>
        `;
        return;
    }

    // Vérification des associations
    const allCorrect = selections.every(
        s => s.value === s.item.expected
    );

    if (allCorrect) {

        // Attribution du code
        if (typeof addCode === "function" && cfg.rewardCode) {
            addCode(cfg.rewardCode);
        }

        // Validation de l'objectif
        if (typeof completeCurrentObjective === "function") {
            completeCurrentObjective();
        }

        const rewardLine = cfg.rewardCode
            ? `<p>Tu as découvert le code : <strong>${cfg.rewardCode}</strong></p>`
            : "";

        feedback.innerHTML = `
            <div class="feedback success" style="margin-top:10px;">
                <strong>${cfg.successTitle || "✅ Toutes les associations sont correctes !"}</strong>

                ${rewardLine}

                <button
                    class="button"
                    onclick="closeModal(); if (typeof renderLaboratory === 'function') renderLaboratory();"
                    style="margin-top:10px;"
                >
                    Continuer
                </button>
            </div>
        `;

    } else {

        feedback.innerHTML = `
            <div class="feedback error" style="margin-top:10px;">
                <strong>${cfg.errorTitle || "❌ Certaines associations sont incorrectes."}</strong>
                <p>${cfg.reminder || "Certaines réponses sont incorrectes. Réessaie !"}</p>
            </div>
        `;
    }
}

function normalizeSubject(subject) {
    return subject
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\bderivations\b/g, "derivation")
        .replace(/\bsuites\b/g, "suite")
        .replace(/\bequations\b/g, "equation")
        .replace(/\s+/g, " ")
        .trim();
}
function getMathsLevel(subject) {
    const s = normalizeSubject(subject);
    const chapters = {
        1: [
            "equation",
            "suite",
            "suite recurrente"
        ],
        2: [
            "fonctions et limites, derivation et fonctions usuelles"
        ],
        3: [
            "integrales"
        ],
        4: [
            "equations differentielles lineaires d ordre 1"
        ],
        5: [
            "trigonometrie",
            "geometrie et trigonometrie"
        ]
    };
    for (const [level, subjects] of Object.entries(chapters)) {
        if (subjects.some(topic => s === normalizeSubject(topic))) {
            return Number(level);
        }
    }
    // Reconnaissance par mots-clés pour les variantes de noms.
    if (s.includes("equation differentielle")) return 4;
    if (s.includes("integrale")) return 3;
    if (s.includes("trigonometrie")) return 5;
    if (s.includes("fonction") || s.includes("derivee") ||
        s.includes("limite")) return 2;
    if (s.includes("equation") || s.includes("suite")) return 1;
    return null;
}
function getQuestionKey(q) {
    const clean = s => normalizeSubject(String(s)).replace(/[^a-z0-9]/g, "");
    // Trier les choix évite de reposer le même QCM avec les réponses réordonnées.
    return clean(q.text) + "|" + q.choices.map(clean).sort().join("|");
}
function getQuestionChoicesKey(q) {
    const clean = s => normalizeSubject(String(s)).replace(/[^a-z0-9]/g, "");
    // Identifie aussi les variantes dont l'introduction a été reformulée.
    return q.choices.map(clean).sort().join("|");
}
function rememberQuestion(q) {
    const key = getQuestionKey(q);
    state.usedQuestions.push(key);
    state.usedQuestions.push("choices:" + getQuestionChoicesKey(q));
    // Historique court conservé entre deux parties sur le même navigateur.
    try {
        const old = JSON.parse(localStorage.getItem("medEscapeRecentQcm") || "[]");
        localStorage.setItem("medEscapeRecentQcm", JSON.stringify([...old.filter(k => k !== key), key].slice(-60)));
    } catch (e) { /* navigation privée : fonctionnement sans historique */ }
}
function launchQuestion(object, retry = false) {
        if (TEST_MODE) {
        const objectiveId = `${state.currentObjectRoom}:${state.currentObjectName}`;
        const required = object.requiredCorrectAnswers || 1;

        state.objectCorrectQuestions[objectiveId] =
            Array.from({ length: required }, (_, i) => `TEST-${i}`);

        if (object.rewardCode) {
            addCode(object.rewardCode);
        }

        if (object.reward) {
            addItem(object.reward);
        }

        completeCurrentObjective();

        showModal(object.title, `
            <h3>🧪 Mode test</h3>
            <p>${required} QCM validé(s) automatiquement.</p>
            ${object.rewardCode ? `<p>Code obtenu : <strong>${object.rewardCode}</strong></p>` : ""}
            <button class="button" onclick="closeModal(); renderLaboratory();">
                Continuer
            </button>
        `);
        return;
    }
    const objectiveId = `${state.currentObjectRoom}:${state.currentObjectName}`;
    if (!retry && state.completedObjectives.includes(objectiveId)) {
        showModal(object.title || "Énigme", "<p>Cette énigme est déjà terminée.</p>");
        return;
    }
    if (retry && state.currentQuestion) {
        const question = state.currentQuestion;
        showQuestionModal(question);
        return;
    }
       const isUsed = q => state.usedQuestions.includes(getQuestionKey(q)) ||
        state.usedQuestions.includes("choices:" + getQuestionChoicesKey(q));

    const matchesChapter = q => {
        if (isUsed(q)) return false;
        if (state.mode === "boss") return true;

        const isMaths = getMathsLevel(q.subject) !== null;
        const matchesMode = state.mode === "maths" ? isMaths : !isMaths;

        return matchesMode && Number(q.level) === Number(state.level);
    };

    let available = [];

    if (object.questionId) {
        available = QUESTION_BANK.filter(q =>
            String(q.id ?? q.code) === String(object.questionId) && !isUsed(q) &&
            (state.mode === "boss" || (state.mode === "maths" ? getMathsLevel(q.subject) !== null : getMathsLevel(q.subject) === null)) &&
            Number(q.level) === Number(state.level)
        );
    }

    if (!available.length) {
        available = QUESTION_BANK.filter(matchesChapter);
    }
    if (!available.length) {
        showModal(
            "📭 Plus de QCM disponibles",
            `<p>Aucune question disponible pour cette matière et ce niveau. Vérifie QUESTION_BANK et CHEMISTRY_TOPICS_BY_LEVEL.</p>
             <button class="button" onclick="closeModal()">Retour</button>`
        );
        return;
    }

    // Priorité aux QCM non rencontrés récemment, sans bloquer une partie
    // lorsque tous les QCM du chapitre ont déjà été vus.
    let recent = [];
    try { recent = JSON.parse(localStorage.getItem("medEscapeRecentQcm") || "[]"); }
    catch (e) { recent = []; }
    const fresh = available.filter(q => !recent.includes(getQuestionKey(q)));
    const question = shuffle(fresh.length ? fresh : available)[0];

    state.currentQuestion = question;
    rememberQuestion(question);

    showModal("🧠 Énigme scientifique", `
                ${object.requiredCorrectAnswers ? `
            <div class="question-progress">
                <strong>Progression :</strong>
                ${
                    state.objectCorrectQuestions[
                        `${state.currentObjectRoom}:${state.currentObjectName}`
                    ]?.length || 0
                } / ${object.requiredCorrectAnswers} QCM réussis
            </div>
        ` : ""}
        <div class="question-modal">
        ${state.mode === "boss" &&
  state.currentObjectName === "microscope" ? `
    <div class="question-progress">
        <strong>🔬 Progression du microscope</strong>
        <p>
            ${
                state.objectCorrectQuestions[
                    `${state.currentObjectRoom}:${state.currentObjectName}`
                ]?.length || 0
            } / 6 QCM réussis
        </p>
        <progress
            value="${
                state.objectCorrectQuestions[
                    `${state.currentObjectRoom}:${state.currentObjectName}`
                ]?.length || 0
            }"
            max="6"
            style="width:100%; height:18px;"
        ></progress>
    </div>
` : ""}
            <div class="eyebrow">QCM — Niveau ${state.level}</div>
            <h2>${question.text}</h2>

            
<div class="answers">
    ${question.choices.map((choice, index) => `
        <label class="answer multi-answer">
            <input
                type="checkbox"
                name="question-answer"
                value="${index}"
            >
            <span>
                ${String.fromCharCode(65 + index)}. ${choice}
            </span>
        </label>
    `).join("")}
</div>

<button class="button" onclick="checkQuestionAnswers()">
    Valider mes réponses
</button>

            <div id="question-feedback"></div>

            <button
                class="button secondary"
                onclick="showQuestionHint()"
            >
                💡 Indice
            </button>
        </div>
    `);
}
function openQuestion(object, retry = false) {
    if (object.requiredCode && !retry) {
        state.pendingQuestion = object;

        showModal(object.title || "Énigme", `
            <div class="question-modal">
                <p>${object.description || ""}</p>
                <strong>🔒 Accès verrouillé</strong>
                <p>Entre le code pour accéder aux QCM.</p>

                <label for="question-code-input">Code d'accès :</label>
                <input
                    id="question-code-input"
                    class="code-input"
                    type="text"
                    placeholder="Saisir le code"
                >

                <div id="question-code-feedback"></div>

                <button class="button" onclick="unlockQuestion()">
                    Valider
                </button>
            </div>
        `);
        return;
    }

    launchQuestion(object, retry);
}
function unlockQuestion() {
    const object = state.pendingQuestion;
    const input = document.getElementById("question-code-input");
    const feedback = document.getElementById("question-code-feedback");

    if (!object || !input || !feedback) return;

    const entered = input.value.trim().toUpperCase();
    const required = String(object.requiredCode || "").trim().toUpperCase();

    if (entered === required) {
        markCodesUsed(entered);
state.pendingQuestion = null;
renderLaboratory();
        launchQuestion(object);
    } else {
        feedback.innerHTML = `
            <div class="feedback error">
                ❌ Code incorrect. Réessaie.
            </div>
        `;
    }
}
function showQuestionModal(question) {

    showModal("🧠 Énigme scientifique", `

        <div class="question-modal">

            <div class="eyebrow">QCM — Niveau ${state.level}</div>

            <h2>${question.text}</h2>

            <div class="answers">

                ${question.choices.map((choice, index) => `

                    <label class="answer multi-answer">

                        <input

                            type="checkbox"

                            name="question-answer"

                            value="${index}"

                        >

                        <span>

                            ${String.fromCharCode(65 + index)}. ${choice}

                        </span>

                    </label>

                `).join("")}

            </div>

            <button class="button" onclick="checkQuestionAnswers()">

                Valider mes réponses

            </button>

            <div id="question-feedback"></div>

            <button class="button secondary" onclick="showQuestionHint()">

                💡 Indice

            </button>
            <div id="mistake-counter" class="mistake-counter">
    Mauvaises réponses : <strong>${state.totalMistakes}</strong>
</div>

        </div>

    `);

}

function checkQuestionAnswers() {
    const checked = [
        ...document.querySelectorAll(
            'input[name="question-answer"]:checked'
        )
    ];

    if (checked.length === 0) {
        const feedback = document.getElementById("question-feedback");

        if (feedback) {
            feedback.innerHTML =
                "<p>Sélectionne au moins une réponse.</p>";
        }

        return;
    }

    const selectedAnswers = checked.map(input => Number(input.value));

    answerQuestion(selectedAnswers);
}
function getCorrectAnswerIndexes(question) {
    const raw = question.answers ?? question.answer;

    if (raw === undefined || raw === null) {
        return [];
    }

    const answers = Array.isArray(raw) ? raw : [raw];

    return answers.map(answer => {
        if (typeof answer === "number") {
            return answer;
        }

        if (typeof answer === "string") {
            const value = answer.trim().toUpperCase();

            // Réponses sous forme de lettres : A, B, C, D...
            if (/^[A-Z]$/.test(value)) {
                return value.charCodeAt(0) - 65;
            }

            // Réponses sous forme de nombres écrits en texte.
            if (/^\d+$/.test(value)) {
                return Number(value);
            }
        }

        return NaN;
    });
}

function answerQuestion(selectedAnswers) {
    const question = state.currentQuestion;
    if (!question) return;

    const correctAnswers = getCorrectAnswerIndexes(question);
    const selected = [...selectedAnswers].sort((a, b) => a - b);
    const expected = [...correctAnswers].sort((a, b) => a - b);
    const correct =
        selected.length === expected.length &&
        selected.every((value, index) => value === expected[index]);

    if (!correct) {
        const id = question.id ?? question.text;
        state.questionMistakes[id] =
            (state.questionMistakes[id] || 0) + 1;

        state.totalMistakes++;
        const counter = document.getElementById("mistake-counter");
        if (counter) {
            counter.innerHTML = `
                Mauvaises réponses : <strong>${state.totalMistakes}</strong>
            `;
        }
    }

    const mistakes =
        state.questionMistakes[question.id ?? question.text] || 0;

    const showCorrection = correct || mistakes >= 3;

    document.querySelectorAll(
        'input[name="question-answer"]'
    ).forEach(input => {
        input.disabled = true;
    });

    const submitButton = document.querySelector(
        ".question-modal button.button:not(.secondary)"
    );
    if (submitButton) submitButton.disabled = true;

    state.answers.push({ question, selected, correct });

    if (!correct && state.totalMistakes >= getMaxMistakes()) {
        finish("errors");
        return;
    }

    const object = state.currentObject;
    let progressMessage = "";
    let needsNextQuestion = false;
    const isBossMicroscope =
        state.mode === "boss" &&
        state.currentObjectName === "microscope";

    if (correct) {
        if (object && (object.requiredCorrectAnswers || isBossMicroscope)) {
            const objectiveId =
                `${state.currentObjectRoom}:${state.currentObjectName}`;
            if (!state.objectCorrectQuestions[objectiveId]) {
                state.objectCorrectQuestions[objectiveId] = [];
            }
            const successfulQuestions =
                state.objectCorrectQuestions[objectiveId];
            if (!successfulQuestions.includes(question)) {
                successfulQuestions.push(question);
            }
            const total = successfulQuestions.length;
            const required = isBossMicroscope
                ? 5
                : object.requiredCorrectAnswers;

            if (total >= required) {
                completeCurrentObjective();

                if (object.reward === "badge") {
                    if (typeof addItem === "function") {
                        addItem("badge");
                    } else if (Array.isArray(state.items) && !state.items.includes("badge")) {
                        state.items.push("badge");
                    }

                    progressMessage = `
                        <p>🎉 Les ${required} QCM sont réussis !</p>
                        <p><strong>Super, tu as récupéré un badge ! </strong></p>
                    `;
                } else {
                    if (object.rewardCode) {
                        addCode(object.rewardCode);
                    }

                    progressMessage = `
                        <p>🎉 Les ${required} QCM sont réussis !</p>
                        <p>Code obtenu : <strong>${object.rewardCode}</strong></p>
                    `;
                }
            } else {
                needsNextQuestion = true;
                progressMessage = `
                    <p>📊 Progression :
                    <strong>${total}/${required} QCM réussis</strong></p>
                    <p>Il t'en reste ${required - total} à réussir.</p>
                `;
            }
        } else {
            completeCurrentObjective();
        }
    }

    const feedback = document.getElementById("question-feedback");
    if (!feedback) return;
const selectedSet = new Set(selectedAnswers);
document.querySelectorAll('input[name="question-answer"]').forEach(input => {
    const idx = Number(input.value);
    input.checked = selectedSet.has(idx);
    input.disabled = true;
    input.closest(".answer")?.classList.toggle("selected", selectedSet.has(idx));
});
    const correctLabels = expected.map(index =>
        `${String.fromCharCode(65 + index)}. ${question.choices[index]}`
    );

    feedback.innerHTML = `
        <div class="feedback ${correct ? "success" : "error"}">
            <strong>
                ${correct
                    ? "✅ Toutes les réponses sont correctes !"
                    : "❌ Ce n'est pas tout à fait ça."}
            </strong>
            ${showCorrection ? `
                <p>${question.explanation}</p>
                <p><strong>Bonnes réponses :</strong>
                ${correctLabels.join(" ; ")}</p>
            ` : `
                <p>Essaie encore ! La correction sera affichée après 3 erreurs sur ce QCM.</p>
            `}

            ${correct ? progressMessage : `
                <p>Réessaie ce QCM : une réponse incorrecte ne compte pas.</p>
            `}

            ${correct && (needsNextQuestion || (
                state.mode === "boss" &&
                state.currentObjectName === "microscope" &&
                (state.objectCorrectQuestions[
                    `${state.currentObjectRoom}:${state.currentObjectName}`
                ]?.length || 0) < 5
            )) ? `
                <button class="button" onclick="nextQuestionForObject()">
                    ➡️ Question suivante
                </button>
            ` : !correct ? `
                <button class="button" onclick="nextQuestionForObject(true)">
                    Réessayer le QCM
                </button>
            ` : `
                <button class="button"
                    onclick="closeModal(); renderLaboratory();">
                    Retour dans la pièce
                </button>
            `}
        </div>
    `;
}

function getMaxMistakes() {
    if (state.mode === "boss") return 30;

    const limitsByDuration = {
        10: 8,
        20: 10,
        30: 20
    };

    return limitsByDuration[Number(state.duration)] ?? 10;
}
function nextQuestionForObject(retry = false) {
    const object = state.currentObject;
    const question = state.currentQuestion;

    closeModal();

    if (retry && question) {
        showQuestionModal(question);
    } else if (object) {
        openQuestion(object);
    }
}

function showQuestionHint() {
    if (!state.currentQuestion) return;

    state.hints++;

    const feedback = document.getElementById("question-feedback");
    feedback.innerHTML = `
        <div class="feedback hint">
            <strong>💡 Indice</strong>
            <p>${state.currentQuestion.hint || "Relis attentivement l'énoncé."}</p>
        </div>
    `;
}

function getExpectedCodes(object) {
    // Supporte requiredCode en tableau (ex: ["M85", "OUV5", "PURE"]) ou en texte
    if (Array.isArray(object.requiredCode) && object.requiredCode.length > 0) {
        return object.requiredCode.map(c => String(c).trim());
    }
    if (Array.isArray(object.requiredCodes) && object.requiredCodes.length > 0) {
        return object.requiredCodes.map(c => String(c).trim());
    }
    if (Array.isArray(object.codes) && object.codes.length > 0) {
        return object.codes.map(c => String(c).trim());
    }
    if (typeof object.requiredCode === "string" && object.requiredCode.trim() !== "") {
        return [object.requiredCode.trim()];
    }
    if (object.code !== undefined && object.code !== null && object.code !== "") {
        return [String(object.code).trim()];
    }
    return [];
}

function openCodeLock(object) {
    const expectedCodes = getExpectedCodes(object);
    const count = Math.max(1, expectedCodes.length);

    const multiHint = count > 1
        ? `<p class="hint">💡 Ce verrou nécessite <strong>${count} codes différents</strong>. Saisis un code par case.</p>`
        : "";

    const inputsHtml = Array.from({ length: count }, (_, index) => `
        <div style="margin-bottom: 8px;">
            <label for="code-input-${index}">
                ${count > 1 ? `Code ${index + 1}/${count} :` : "Entre le code :"}
            </label>
            <input
                id="code-input-${index}"
                class="code-input"
                type="text"
                placeholder="${count > 1 ? `Code ${index + 1}` : "Code"}"
                autocomplete="off"
            >
        </div>
    `).join("");

    showModal(object.title, `
        <p>${object.description}</p>
        ${multiHint}
        <div class="lock-box">
            ${inputsHtml}
            <button class="button" onclick="checkCode()">🔓 Déverrouiller</button>
            <div id="lock-feedback"></div>
        </div>
    `);

    setTimeout(() => {
        document.getElementById("code-input-0")?.focus();
    }, 50);
}

function checkCode() {
    const object = state.currentObject;
    const feedback = document.getElementById("lock-feedback");
    if (!object || !feedback) return;

    const inputEls = Array.from(document.querySelectorAll('[id^="code-input-"]'));
    const enteredList = inputEls.map(el => el.value.trim().toUpperCase());

    if (enteredList.some(val => !val)) {
        feedback.innerHTML = `<div class="feedback error">❌ Remplis tous les champs de code demandés.</div>`;
        return;
    }

    let allCorrect = false;

    if (object.code === "discovered") {
        allCorrect = enteredList.every(val => typeof hasCode === "function" && hasCode(val));
    } else {
        const expectedCodes = getExpectedCodes(object).map(c => c.toUpperCase());

        if (expectedCodes.length === 1) {
            allCorrect = enteredList[0] === expectedCodes[0];
        } else if (expectedCodes.length > 1) {
            const enteredSorted = [...enteredList].sort();
            const expectedSorted = [...expectedCodes].sort();
            allCorrect =
                enteredSorted.length === expectedSorted.length &&
                enteredSorted.every((code, idx) => code === expectedSorted[idx]);
        }
    }

    if (allCorrect) {
    markCodesUsed(enteredList);

    if (object.reward) {
            addItem(object.reward);
        }
        if (object.rewardCode && typeof addCode === "function") {
            addCode(object.rewardCode);
        }
        completeCurrentObjective();
        markLockUsed();

        const rewardText = object.reward === "key"
            ? "une clé"
            : object.reward === "badge"
                ? "un badge"
                : object.reward;

        feedback.innerHTML = `
            <div class="feedback success">
                <strong>🔓 Coffre ouvert !</strong>
                ${object.reward ? `<p>Tu récupères : ${rewardText}.</p>` : ""}
                ${object.rewardCode ? `<p>Code obtenu : <strong>${object.rewardCode}</strong></p>` : ""}
                <button class="button" onclick="closeModal(); renderLaboratory();">Continuer</button>
            </div>
        `;
    } else {
        feedback.innerHTML = `<div class="feedback error">❌ Code(s) incorrect(s). Vérifie chacun des codes demandés.</div>`;
    }
}
function openPassword(object) {
    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description || ""}</p>

            <label for="password-input">Mot de passe :</label>
            <input
                id="password-input"
                class="code-input"
                type="text"
                placeholder="Saisir le mot de passe"
            >

            <button class="button" onclick="checkPassword()">
                Valider
            </button>

            <div id="password-feedback"></div>
        </div>
    `);
}


function checkPassword() {
    const object = state.currentObject;
    const input = document.getElementById("password-input");
    const feedback = document.getElementById("password-feedback");

    if (!object || !input || !feedback) return;

    const entered = input.value.trim().toUpperCase();
    const correct = entered === object.password.toUpperCase();

    if (correct) {

        // Ajouter l'objet gagné
        if (object.reward) {
            addItem(object.reward);
        }

        // Ajouter le code gagné
        if (object.rewardCode) {
            addCode(object.rewardCode);
        }

        completeCurrentObjective();
        markLockUsed();

        feedback.innerHTML = `
            <div class="feedback success">
                <strong>Accès autorisé !</strong>

                <p>Le mot de passe est correct. Le terminal est déverrouillé.</p>

                <div class="password-rewards">

                    <p>
                        <strong>Mot de passe validé :</strong>
                        ${object.password}
                    </p>

                    ${object.reward ? `
                        <p>
                            <strong>Objet obtenu :</strong>
                            ${object.reward}
                        </p>
                    ` : ""}

                    ${object.rewardCode ? `
                        <p>
                            <strong>Code obtenu :</strong>
                            ${object.rewardCode}
                        </p>
                    ` : ""}

                </div>

                <button class="button"
                    onclick="closeModal(); renderLaboratory();">
                    Continuer
                </button>
            </div>
        `;

    } else {
        feedback.innerHTML = `
            <div class="feedback error">
                Mot de passe incorrect.
            </div>
        `;
    }
}


function openItemObject(object) {
    if (object.requiredItem && !hasItem(object.requiredItem)) {
        showModal(object.title, `
            <p>${object.description || ""}</p>
            <div class="locked-message">
                🔒 Verrouillé. Il te manque l'objet nécessaire.
            </div>
        `);
        return;
    }

    // Récompenses possibles
    const hasRewardItem = Boolean(object.reward);
    const hasRewardCode = object.rewardCode !== undefined &&
                          object.rewardCode !== null &&
                          object.rewardCode !== "";

    if (hasRewardItem) {
        addItem(object.reward);
    }

    if (hasRewardCode) {
        addCode(object.rewardCode);
    }

    completeCurrentObjective();
    if (object.requiredItem) {
    markLockUsed();
}

    let rewardMessage = "";

    if (hasRewardItem) {
        rewardMessage += `
            <p>🎒 Objet récupéré :
                <strong>${object.reward === "badge" ? "Badge de sécurité" : object.reward}</strong>
            </p>
        `;
    }

    if (hasRewardCode) {
        rewardMessage += `
            <p>🔐 Code découvert :
                <strong>${object.rewardCode}</strong>
            </p>
        `;
    }

    showModal(object.title, `
        <div class="unlock-animation">🎉</div>
        <h3>Découverte !</h3>
        ${rewardMessage || "<p>Objet inspecté.</p>"}
        <button class="button"
            onclick="closeModal(); renderLaboratory();">
            Continuer
        </button>
    `);
}


function showBadgeReader(object) {
    if (!hasItem("badge")) {
        showModal(object.title, `
            <p>🔒 Accès refusé : tu dois d'abord récupérer le badge.</p>
        `);
        return;
    }

    showModal(object.title, `
        <style>
            @keyframes badgeSwipe {
                from { transform: translateX(-35px); }
                to { transform: translateX(35px); }
            }

            .badge-reader-scene {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 12px;
                margin: 25px 0;
                min-height: 130px;
            }

            .access-badge {
                background: linear-gradient(135deg, #24364b, #4974a0);
                border: 2px solid #a5c8e5;
                border-radius: 12px;
                padding: 16px;
                width: 130px;
                color: white;
                text-align: center;
                position: relative;
                z-index: 2;
            }

            .access-badge.swiping {
                animation: badgeSwipe 0.9s ease-in-out forwards;
            }

            .badge-reader {
                background: #202b38;
                border: 2px solid #65788d;
                border-radius: 12px;
                padding: 20px;
                text-align: center;
                color: white;
            }

            .reader-light {
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: #e53935;
                margin: 12px auto;
                box-shadow: 0 0 12px #e53935;
                transition: background 0.3s, box-shadow 0.3s;
            }

            .reader-light.green {
                background: #22c55e;
                box-shadow: 0 0 18px #22c55e;
            }
        </style>

        <p>Présente ton badge de sécurité au lecteur.</p>

        <div class="badge-reader-scene">
            <div class="access-badge" id="access-badge">
                <div style="font-size:38px">🪪</div>
                <strong>MED-ESCAPE</strong>
                <div style="font-size:11px">BADGE D'ACCÈS</div>
            </div>

            <div class="badge-reader">
                <div style="font-size:28px">▣</div>
                <div class="reader-light" id="reader-light"></div>
                <small id="reader-status">VERROUILLÉ</small>
            </div>
        </div>

        <button class="button" id="scan-badge-button"
                onclick="scanBadge()">
            🪪 Passer le badge
        </button>
    `);
}

function scanBadge() {
    const object = state.currentObject;
    const badge = document.getElementById("access-badge");
    const light = document.getElementById("reader-light");
    const status = document.getElementById("reader-status");
    const button = document.getElementById("scan-badge-button");

    if (!object || !badge || !light || !status || !button) return;
    if (!hasItem("badge")) return;

    button.disabled = true;
    button.textContent = "Lecture du badge...";
    badge.classList.add("swiping");

    setTimeout(() => {
        if (!document.body.contains(light)) return;

        light.classList.add("green");
        status.textContent = "ACCÈS AUTORISÉ";
        button.textContent = "✓ Badge reconnu";

        setTimeout(() => {
            if (!document.body.contains(light)) return;

            if (object.type === "final") {
                finish("success");
            } else if (object.type === "roomDoor") {
                if (!state.unlockedRooms.includes(object.targetRoom)) {
                    state.unlockedRooms.push(object.targetRoom);
                }

                completeCurrentObjective();
markLockUsed();
cleanupInventory();
visitRoom(object.targetRoom);
            }
        }, 700);
    }, 950);
}

function openRoomDoor(object) {
    if (object.requiredItem === "badge") {
        showBadgeReader(object);
        return;
    }

    if (object.requiredItem && !hasItem(object.requiredItem)) {
        showModal(object.title, `
            <p>${object.description || ""}</p>
            <div class="locked-message">
                🔒 Tu dois d'abord récupérer l'objet nécessaire.
            </div>
        `);
        return;
    }

    const expected = getExpectedCodes(object);
    const onlyDiscovered = expected.length === 0 || object.requiredCode === "discovered";

    showModal(object.title, `
        <p>${object.description || ""}</p>
        ${renderRequiredCodeGate(object, {
            submitLabel: "🔓 Ouvrir la porte",
            requireDiscovered: onlyDiscovered,
            onSuccess: () => {
                if (!getRooms()[object.targetRoom]) {
                    console.warn("Salle introuvable pour targetRoom :", object.targetRoom);
                    return;
                }
                if (!state.unlockedRooms.includes(object.targetRoom)) {
                    state.unlockedRooms.push(object.targetRoom);
                }
                completeCurrentObjective();
                markLockUsed();
                visitRoom(object.targetRoom);
            }
        })}
    `);
}
// Vérifier le code saisi
function checkDoorCode() {
    const object = state.currentObject;
    const input = document.getElementById("door-code-input");
    const feedback = document.getElementById("door-code-feedback");

    if (!object || object.type !== "roomDoor" || !input || !feedback) {
        return;
    }

    const entered = input.value.trim().toUpperCase();
    const required = object.requiredCode;

    if (!entered) {
        feedback.innerHTML = `
            <div class="feedback error">
                ⚠️ Entre un code pour continuer.
            </div>
        `;
        return;
    }

    // Cas particulier : un code découvert dans une énigme
    const correct = required === "discovered"
        ? state.discoveredCodes.some(
            code => String(code).toUpperCase() === entered
          )
        : required
            ? entered === String(required).toUpperCase()
            : state.discoveredCodes.some(
                code => String(code).toUpperCase() === entered
              );

    // Le joueur doit avoir découvert le code auparavant
    const discovered = state.discoveredCodes.some(
        code => String(code).toUpperCase() === entered
    );

    if (!correct || !discovered) {
        feedback.innerHTML = `
            <div class="feedback error">
                ❌ Code incorrect ou pas encore découvert.
            </div>
        `;
        return;
    }

    // Ouvrir la salle uniquement après validation
    if (!state.unlockedRooms.includes(object.targetRoom)) {
        state.unlockedRooms.push(object.targetRoom);
    }

    completeCurrentObjective();
markLockUsed();
visitRoom(object.targetRoom);
}

function openFinalDoor(object) {
    if (state.mode === "boss") {
        const objectiveId = "analysis:finalQuestion";

        const completed =
            state.objectCorrectQuestions[objectiveId]?.length || 0;

        if (completed < 7) {
            showModal("🔒 Porte ultime verrouillée", `
                <p>Tu dois réussir 7 QCM dans l'Épreuve ultime.</p>

                <p>📊 Progression :
                    <strong>${completed}/7 QCM réussis</strong>
                </p>

                <progress
                    value="${completed}"
                    max="7"
                    style="width:100%; height:18px;"
                ></progress>

                <p>Encore ${7 - completed} QCM à réussir.</p>

                <button class="button" onclick="closeModal()">
                    Continuer
                </button>
            `);
            return;
        }
    }

    // 1. Vérifier tous les objectifs du niveau, en mathématiques comme en chimie.
    if (state.mode === "maths" || state.mode === "chimie") {
        const incomplete = getIncompleteObjectives();

        if (incomplete.length > 0) {
            const list = incomplete.map(item => `
                <li>${item.title} — ${item.room}</li>
            `).join("");

            showModal("🔒 Sortie verrouillée", `
                <p>Il reste ${incomplete.length} objectif(s) à terminer :</p>
                <ul>${list}</ul>
                <p>Termine toutes les énigmes avant de quitter le laboratoire.</p>
                <button class="button" onclick="closeModal()">
                    Continuer
                </button>
            `);

            return;
        }
    }

    // 2. Vérifier l'objet requis (ex. badge)
    if (object.requiredItem && !hasItem(object.requiredItem)) {
        showModal(object.title, `
            <div class="locked-message">
                🔒 La sortie est verrouillée.
                <p>Il te faut encore le badge de sécurité.</p>
            </div>
        `);
        return;
    }

    // 3. Vérifier le code final si object.requiredCode est défini
    if (object.requiredCode && !state.finalDoorUnlocked) {
        const expectedCodes = getExpectedCodes(object).map(c => c.toUpperCase());

        showModal(object.title, `
            <p>${object.description || "✅ Tous les objectifs sont validés et tu as le badge !"}</p>
            <div class="lock-box">
                <label for="final-door-code-input">Entre le code final d'évacuation :</label>
               ${expectedCodes.map((code, i) => `
    <label for="final-door-code-${i}">Code ${i + 1}/${expectedCodes.length} :</label>
    <input
        id="final-door-code-${i}"
        class="code-input final-door-code-input"
        type="text"
        autocomplete="off"
        style="text-transform:uppercase;"
    >
`).join("")}
                <button class="button" type="button" onclick="checkFinalDoorCode()">🚪 Valider et sortir</button>
                <div id="final-door-feedback"></div>
            </div>
        `);

        setTimeout(() => {
    const inputs = [
        ...document.querySelectorAll(".final-door-code-input")
    ];

    inputs[0]?.focus();

    inputs.forEach((input, index) => {
        input.addEventListener("keydown", e => {
            if (e.key === "Enter") {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    checkFinalDoorCode();
                }
            }
        });
    });
}, 50);
        // Stocke le code attendu pour checkFinalDoorCode()
        state._expectedFinalCodes = expectedCodes;
        return;
    }

    finish("success");
}

function checkFinalDoorCode() {
    const feedback = document.getElementById("final-door-feedback");
    const inputs = [...document.querySelectorAll(".final-door-code-input")];
    const expected = state._expectedFinalCodes || [];

    if (!feedback || !inputs.length) return;

    const entered = inputs.map(input => input.value.trim().toUpperCase());

    if (entered.some(code => !code)) {
        feedback.innerHTML = `<div class="feedback error">❌ Entre tous les codes avant de valider.</div>`;
        return;
    }

    const correct = entered.length === expected.length &&
        entered.every((code, i) => code === expected[i]);

   if (correct) {
    markCodesUsed(entered);

    state.finalDoorUnlocked = true;
        delete state._expectedFinalCodes;
        closeModal();
        finish("success");
    } else {
        feedback.innerHTML = `<div class="feedback error">❌ Un ou plusieurs codes sont incorrects. Vérifie les énigmes et l'ordre des codes.</div>`;
    }
}
    
function getIncompleteObjectives() {
    const requiredTypes = [
        "question", "matching", "calculation", "sequence",
        "code", "password", "item", "electron", "pattern", 
        "colors", "mazeController", "directional", "symbols",
        "balance", "mendeleiev", "molecule", "thermo", "cinetique", "spectre", 
    ];
    const incomplete = [];

    const rooms = getRooms();

    for (const [roomName, room] of Object.entries(rooms)) {
        for (const [objectName, object] of Object.entries(room.objects)) {
            if (!requiredTypes.includes(object.type)) continue;

            const objectiveId = `${roomName}:${objectName}`;

            if (!state.completedObjectives.includes(objectiveId)) {
                incomplete.push({
                    id: objectiveId,
                    title: object.title,
                    room: room.title
                });
            }
        }
    }

    return incomplete;
}
const CHIMIE_LEVEL_HINTS = {
    1: "Atomistique et concentrations : vérifie protons/électrons/neutrons et convertis bien les volumes (mL → L) avant de calculer m = C × V × M.",
    2: "Classification périodique : repère la ligne (période) et la colonne (électrons de valence) pour trouver Z ou le symbole.",
    3: "Configuration électronique : suis l'ordre de remplissage (1s, 2s, 2p, 3s, 3p...) et respecte la capacité maximale de chaque sous-couche.",
    4: "Hybridation et liaisons : compte les domaines électroniques autour de l'atome central (liaisons + doublets non-liants) pour identifier sp, sp² ou sp³.",
    5: "Thermochimie et équilibres : applique la loi de Hess avec les bons signes et vérifie le sens/la spontanéité à la température donnée.",
    6: "Cinétique et catalyse : analyse l'évolution des concentrations ou vitesses au cours du temps et utilise les propriétés de t₁/₂."
};

const MATHS_LEVEL_HINTS = {
    1: "Équations et suites : isole l'inconnue pas à pas pour les équations, et repère la relation entre deux termes consécutifs pour les suites.",
    2: "Fonctions, limites et dérivation : vérifie l'ensemble de définition, lève les formes indéterminées et applique les bonnes formules de dérivation.",
    3: "Intégrales : détermine d'abord une primitive exacte avant de calculer F(b) − F(a) en faisant attention aux signes.",
    4: "Équations différentielles : identifie le type d'équation linéaire du 1er ordre et applique la forme générale correspondante.",
    5: "Géométrie et trigonométrie : appuie-toi sur les valeurs remarquables, le cercle trigonométrique et les relations géométriques de l'énoncé."
};

function getRoomRemainingObjects(roomKey, room) {
    if (!room || !room.objects) return [];

    const ignoredTypes = ["clue"];

    return Object.entries(room.objects)
        .filter(([objName, obj]) => {
            if (!obj || ignoredTypes.includes(obj.type)) return false;

            const id = `${roomKey}:${objName}`;
            if (state.completedObjectives?.includes(id) || state.usedLocks?.includes(id)) {
                return false;
            }

            if (obj.type === "roomDoor" && obj.targetRoom && state.unlockedRooms?.includes(obj.targetRoom)) {
                return false;
            }

            if (obj.type === "final" && state.finished) {
                return false;
            }

            return true;
        })
        .map(([, obj]) => obj);
}

function getProgressHintForCurrentRoom() {
    const roomKey = state.currentRoom;
    const room = getCurrentRoom();
    if (!room) return "Explore les éléments interactifs de la pièce.";

    // Cas particulier détaillé pour le mode Boss
    if (state.mode === "boss") {
        if (roomKey === "entrance") {
            if (!state.unlockedRooms.includes("lab")) {
                return "Commence par le thermomètre (100 °C → kelvins avec 273) et le verrou à droite, fais le carnet, les points et les suites, additionne les trois nombres en lettres majuscules sur le terminal, puis ouvre la porte du laboratoire.";
            }
            return "La porte du laboratoire est ouverte : tu peux passer à la salle suivante via la navigation.";
        }

        if (roomKey === "lab") {
            if (!hasItem("key")) {
                return "Réunis les 3 codes du coffre central (couleurs des tubes de la salle 1, balance de précision après César + calcul de masse, et microscope après l'injecteur) pour obtenir la clé.";
            }
            if (!hasItem("badge")) {
                return "Tu as la clé : ouvre la mallette pour récupérer le badge, et pense à relever les infos utiles pour la salle 3 (or et radar de classification).";
            }
            if (!state.unlockedRooms.includes("analysis")) {
                return "Passe ton badge sur la porte de droite pour accéder à la chambre expérimentale finale.";
            }
            return "L'accès à la chambre expérimentale finale est déjà débloqué.";
        }

        if (roomKey === "analysis") {
            const finalQcmCount = state.objectCorrectQuestions?.["analysis:finalQuestion"]?.length || 0;
            if (finalQcmCount < 7) {
                return `Résous les modules de la salle (direction avec la légende de la salle 2, molécule, thermochimie, tubes 235 + labyrinthe) et valide les 7 QCM du lecteur final (${finalQcmCount}/7 réussis).`;
            }
            return "Les 7 QCM sont validés : utilise le badge et le code final sur le sas de sortie.";
        }
    }

    // Avancement dynamique pour tous les niveaux de Maths, Chimie et autres salles
    const remaining = getRoomRemainingObjects(roomKey, room);

    if (!remaining.length) {
        const hasLockedDoor = Object.values(room.objects || {}).some(
            obj => obj.type === "roomDoor" && obj.targetRoom && !state.unlockedRooms.includes(obj.targetRoom)
        );
        if (hasLockedDoor) {
            return "Les énigmes de cette pièce sont avancées : vérifie les codes ou objets obtenus pour ouvrir la porte vers la pièce suivante.";
        }
        return "Tu as terminé l'essentiel dans cette pièce : vérifie les portes ou les autres pièces débloquées pour poursuivre.";
    }

    const nextObj = remaining[0];

    if (nextObj.requiredItem && !hasItem(nextObj.requiredItem)) {
        const neededLabel = nextObj.requiredItem === "key"
            ? "la clé"
            : nextObj.requiredItem === "badge"
                ? "le badge"
                : `l'objet requis (${nextObj.requiredItem})`;
        return `Il te faut d'abord ${neededLabel} pour débloquer « ${nextObj.title} » (reste ${remaining.length} élément(s) actif(s) dans cette pièce).`;
    }

    if (nextObj.type === "roomDoor") {
        return `Prochaine étape : déverrouille « ${nextObj.title} » à l'aide du code ou de l'objet obtenu dans la pièce.`;
    }

    if (nextObj.type === "final") {
        return `Étape finale : complète les prérequis puis valide « ${nextObj.title} » pour t'échapper.`;
    }

    return `Observe les indices autour de toi et concentre-toi sur « ${nextObj.title} » (${remaining.length} élément(s) restant(s) dans cette pièce).`;
}

function showGlobalHint() {
    state.hints++;

    const room = getCurrentRoom();
    const roomTitle = room?.title || state.currentRoom || "Pièce actuelle";
    const lvl = Number(state.level);

    let modeLabel = "";
    let topicHint = "";

    if (state.mode === "boss") {
        modeLabel = "Épreuve Boss";
        topicHint = "Combine les indices et codes récupérés d'une salle à l'autre.";
    } else if (state.mode === "chimie") {
        const chapName = CHAPTER_NAMES?.[lvl] ? ` — ${CHAPTER_NAMES[lvl]}` : "";
        modeLabel = `Chimie • Chapitre ${lvl}${chapName}`;
        topicHint = CHIMIE_LEVEL_HINTS[lvl] || "Applique les notions de chimie de ce chapitre.";
    } else if (state.mode === "maths") {
        const chapName = MATHS_CHAPTER_NAMES?.[lvl] ? ` — ${MATHS_CHAPTER_NAMES[lvl]}` : "";
        modeLabel = `Mathématiques • Chapitre ${lvl}${chapName}`;
        topicHint = MATHS_LEVEL_HINTS[lvl] || "Applique les méthodes de mathématiques de ce chapitre.";
    } else {
        modeLabel = "Mission en cours";
        topicHint = "Lis attentivement chaque énoncé et chaque indice.";
    }

    const progressHint = getProgressHintForCurrentRoom();

    const codesSummary = state.discoveredCodes?.length
        ? `<p class="muted">Codes découverts : <strong>${state.discoveredCodes.join(", ")}</strong></p>`
        : `<p class="muted">Aucun code découvert pour l'instant.</p>`;

    showModal("💡 Indice", `
        <p><strong>Partie :</strong> ${modeLabel}</p>
        <p><strong>Pièce :</strong> ${roomTitle}</p>
        <p><strong>Méthode :</strong> ${topicHint}</p>
        <p><strong>Avancement :</strong> ${progressHint}</p>
        ${codesSummary}
    `);
}
function closeModal() {
    document.querySelectorAll(".modal-overlay").forEach(modal => modal.remove());
    if (state.currentRoom && !state.finished && document.getElementById("timer")) {
        renderLaboratory();
    }
}

function openPuzzleCodeLock(object) {
    const puzzleKey = `${state.currentRoom}:${state.currentObjectName}`;
    const expected = String(object.unlockCode || "").trim().toUpperCase();

    showModal(object.title || "🔒 Verrou", `
        <div class="question-modal">
            <p>${object.description || "Cet élément est protégé par un code d'accès."}</p>
            <div class="lock-box">
                <label for="puzzle-unlock-input">Entre le code requis :</label>
                <input
                    id="puzzle-unlock-input"
                    class="code-input"
                    type="text"
                    autocomplete="off"
                    placeholder="Code"
                >
                <button class="button" type="button" id="puzzle-unlock-btn">🔓 Valider</button>
                <div id="puzzle-unlock-feedback"></div>
            </div>
        </div>
    `);

    setTimeout(() => {
        const input = document.getElementById("puzzle-unlock-input");
        const btn = document.getElementById("puzzle-unlock-btn");
        const feedback = document.getElementById("puzzle-unlock-feedback");

        const validate = () => {
            const entered = (input?.value || "").trim().toUpperCase();
            if (!entered) {
                if (feedback) feedback.innerHTML = `<div class="feedback error">⚠️ Saisis un code.</div>`;
                return;
            }
            if (entered === expected) {
                if (!state.unlockedPuzzles.includes(puzzleKey)) {
                    state.unlockedPuzzles.push(puzzleKey);
                }
                closeModal();
                openObject(state.currentObjectName);
            } else if (feedback) {
                feedback.innerHTML = `<div class="feedback error">❌ Code incorrect.</div>`;
            }
        };

        btn?.addEventListener("click", validate);
        input?.addEventListener("keydown", e => {
            if (e.key === "Enter") validate();
        });
        input?.focus();
    }, 50);
}

function showModal(title, content) {
    closeModal();

    const modal = document.createElement("div");
    modal.className = "modal-overlay";

    const devButton = (
        typeof DEV_MODE !== "undefined" &&
        DEV_MODE &&
        state.currentObject &&
        !["roomDoor", "final", "clue", "code", "password", "item"].includes(state.currentObject.type)
    )
        ? `<button class="button" onclick="devCompleteObject()">
               🛠️ Valider l'énigme (TEST)
           </button>`
        : "";

    modal.innerHTML = `
        <div class="modal">
            <button class="modal-close" onclick="closeModal()" aria-label="Fermer">×</button>
            <h2>${title}</h2>
            ${content}
            ${devButton}
        </div>
    `;

    document.body.appendChild(modal);
}
function closeModal() {
    document.querySelectorAll(".modal-overlay").forEach(modal => modal.remove());
}

function confirmAbandon() {
    showModal("Abandonner la mission ?", `
        <p>Ta progression actuelle ne sera pas conservée.</p>
        <div class="modal-actions">
            <button class="button secondary" onclick="closeModal()">Continuer à jouer</button>
            <button class="button danger" onclick="finish('abandon')">Abandonner</button>
        </div>
    `);
}

function finish(reason) {
    if (state.finished) return;

    state.finished = true;
    clearInterval(state.timer);
    closeModal();
    renderResult(reason);
}

function renderResult(reason) {
    const correct = state.answers.filter(answer => answer.correct).length;
    const answered = state.answers.length;
    const accuracy = answered ? Math.round(correct / answered * 100) : 0;
    const totalTime = state.duration * 60;
    const timeBonus = totalTime ? Math.round(state.remaining / totalTime * 30) : 0;

    const score = reason === "success"
        ? Math.min(100, Math.round(accuracy * 0.7 + timeBonus + 10))
        : Math.min(100, Math.round(accuracy * 0.7 + timeBonus));

    const title = reason === "success"
    ? "Tu t'es échappé !"
    : reason === "time"
        ? "Temps écoulé !"
        : reason === "errors"
            ? "Trop de mauvaises réponses !"
            : "Mission abandonnée";

    page(`
        <section class="result">
            <div class="eyebrow">FIN DE MISSION</div>
            <h1>${title}</h1>
            <div class="score">${score}/100</div>

            <div class="result-stats">
                <div><strong>${correct}</strong><span>bonnes réponses</span></div>
                <div><strong>${answered}</strong><span>QCM réalisés</span></div>
                <div><strong>${state.visitedRooms.length}</strong><span>pièces explorées</span></div>
                <div><strong>${formatTime(state.remaining)}</strong><span>temps restant</span></div>
            </div>

            <button class="button" onclick="home()">Nouvelle mission</button>

            <div class="review">
                <h2>📋 Corrections</h2>
                ${state.answers.length ? state.answers.map((entry, index) => `
                    <article class="review-item">
                        <strong>${index + 1}. ${entry.question.text}</strong>
                        <p>${entry.correct ? "✅ Bonne réponse" : "❌ Mauvaise réponse"}</p>
                        <p><strong>Tes réponses :</strong>
${entry.selected.map(index =>
    entry.question.choices[index]
).join(" ; ")}</p>
                                               <p><strong>Bonnes réponses :</strong>
                        ${getCorrectAnswerIndexes(entry.question)
                            .map(index => entry.question.choices[index])
                            .join(" ; ")}</p>
                        <p class="explanation">${entry.question.explanation}</p>
                    </article>
                `).join("") : "<p>Aucun QCM réalisé.</p>"}
            </div>
        </section>
    `);
}
/* ===== Structure électronique ===== */
function subshellCapacity(name) {
    return { s: 2, p: 6, d: 10, f: 14 }[name.slice(-1)] || 2;
}

function openElectronConfig(object) {
    state.electronCounts = object.subshells.map(() => 0);

    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description}</p>
            <div id="electron-board"></div>
            <div id="electron-feedback"></div>
            <div class="modal-actions">
                <button class="button" onclick="checkElectronConfig()">Valider la structure</button>
                <button class="button secondary" onclick="resetElectronConfig()">Tout remettre à 0</button>
            </div>
        </div>
    `);

    renderElectronBoard();
}

function atomSvg(object) {
    const perShell = {};
    object.subshells.forEach((s, i) => {
        const n = Number(s.name[0]);
        perShell[n] = (perShell[n] || 0) + state.electronCounts[i];
    });

    const maxN = Math.max(...object.subshells.map(s => Number(s.name[0])));
    let svg = '<svg viewBox="0 0 200 200" class="atom-svg">';

    for (let n = 1; n <= maxN; n++) {
        const r = 20 + n * (72 / maxN);
        const count = perShell[n] || 0;
        svg += `<circle class="atom-ring" cx="100" cy="100" r="${r}"/>`;

        for (let k = 0; k < count; k++) {
            const angle = (2 * Math.PI * k) / count - Math.PI / 2 + n * 0.6;
            svg += `<circle class="atom-electron" cx="${100 + r * Math.cos(angle)}" cy="${100 + r * Math.sin(angle)}" r="5"/>`;
        }
    }

    svg += `<circle class="atom-nucleus" cx="100" cy="100" r="16"/>`;
    svg += `<text class="atom-symbol" x="100" y="105" text-anchor="middle">${object.element.symbol}</text>`;
    return svg + "</svg>";
}

function renderElectronBoard() {
    const object = state.currentObject;
    const board = document.getElementById("electron-board");
    if (!object || !board) return;

    const el = object.element;

    board.innerHTML = `
        <div class="element-card">
            <strong>${el.symbol}</strong>
            <span>${el.name} — Z = ${el.Z}</span>
        </div>
        <div class="electron-config">
            ${object.subshells.map((s, i) => `
                <div class="subshell">
                    <span class="subshell-name">${s.name}</span>
                    <button class="subshell-btn" onclick="clickSubshell(${i})">
                        ${state.electronCounts[i]}
                    </button>
                </div>
            `).join("")}
        </div>
        <p class="muted">Chaque clic ajoute un électron. Au-delà du maximum, le compteur revient à 0.</p>
    `;
}

function clickSubshell(index) {
    const object = state.currentObject;
    const cap = subshellCapacity(object.subshells[index].name);
    state.electronCounts[index] = (state.electronCounts[index] + 1) % (cap + 1);

    const feedback = document.getElementById("electron-feedback");
    if (feedback) feedback.innerHTML = "";
    renderElectronBoard();
}

function resetElectronConfig() {
    state.electronCounts = state.currentObject.subshells.map(() => 0);
    const feedback = document.getElementById("electron-feedback");
    if (feedback) feedback.innerHTML = "";
    renderElectronBoard();
}

function checkElectronConfig() {
    const object = state.currentObject;
    const feedback = document.getElementById("electron-feedback");
    if (!object || !feedback) return;

    const correct = object.subshells.every((s, i) => s.electrons === state.electronCounts[i]);
    const total = state.electronCounts.reduce((a, b) => a + b, 0);

    if (correct) {
        addCode(object.rewardCode);
        completeCurrentObjective();
        feedback.innerHTML = `
            <div class="feedback success">
                <strong>✅ Structure correcte !</strong>
                <p>Code obtenu : <strong>${object.rewardCode}</strong></p>
                <button class="button" onclick="closeModal(); renderLaboratory();">Continuer</button>
            </div>
        `;
    } else {
        const msg = total !== object.element.Z
            ? `Tu as placé ${total} électron(s). Rappel : un atome neutre possède autant d'électrons que de protons (Z).`
            : "Le nombre total est bon, mais la répartition ne respecte pas l'ordre de remplissage (1s, puis 2s, puis 2p…).";
        feedback.innerHTML = `<div class="feedback error"><strong>❌ Pas encore !</strong><p>${msg}</p></div>`;
    }
}

/* ===== Digicode 9 points ===== */
function patternPoint(i) {
    return { x: 50 + (i % 3) * 100, y: 50 + Math.floor(i / 3) * 100 };
}





function openPatternLock(object) {

    // Si un code est requis, demander au joueur de le saisir
    if (object.requiredCode) {

        showModal(object.title, `
            <div class="question-modal">

                <p>${object.description || ""}</p>

                <strong>🔒 Digicode verrouillé</strong>

                <p>Entre le code trouvé précédemment pour accéder à la grille.</p>

                <label for="pattern-code-input">Code d'accès :</label>

                <input
                    id="pattern-code-input"
                    class="code-input"
                    type="text"
                    placeholder="Saisir le code"
                >

                <div id="pattern-code-feedback"></div>

                <button class="button" onclick="unlockPattern()">
                    Valider
                </button>

            </div>
        `);

        state.pendingPattern = object;
        return;
    }

    // Aucun code requis : afficher directement la grille
    displayPatternLock(object);
}


function unlockPattern() {

    const object = state.pendingPattern;
    const input = document.getElementById("pattern-code-input");
    const feedback = document.getElementById("pattern-code-feedback");

    if (!object || !input || !feedback) return;

    const entered = input.value.trim().toUpperCase();
    const required = object.requiredCode.trim().toUpperCase();

    if (entered === required) {

      markCodesUsed(entered);
state.pendingPattern = null;
renderLaboratory();

        displayPatternLock(object);

    } else {

        feedback.innerHTML = `
            <div class="feedback error">
                ❌ Code incorrect. Réessaie.
            </div>
        `;
    }
}

/* =========================================================
   MINI-JEU : PUZZLE D'IMAGE DÉCOUPÉE (INTÉGRAL ET CORRIGÉ)
   ========================================================= */

function openPuzzleGame(object) {
    const gameId = `${state.currentRoom}:${state.currentObjectName}`;
    if (!state.puzzleGames) state.puzzleGames = {};

    // Initialisation ou récupération de l'état du puzzle
    if (!state.puzzleGames[gameId]) {
        state.puzzleGames[gameId] = {
            board: [3, 1, 4, 8, 0, 2, 6, 5, 7], // Mélange de départ
            solved: false,
            startTime: Date.now(),
            elapsedSeconds: 0,
            timerInterval: null
        };
    }

    const data = state.puzzleGames[gameId];

    // Utilise l'image spécifique de l'objet dans rooms.js, ou l'image de fond de la pièce par défaut
    const puzzleImg = object.image || getCurrentRoom().background || "image/chimie-30-labo.png";
    data.bgImageSrc = puzzleImg;

    // Si le puzzle est déjà résolu, on force l'état final [1..8, 0] pour qu'il s'affiche entièrement
    if (data.solved) {
        data.board = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    }

    // Affichage de la modale
    showModal(object.title, `
        <div class="question-modal" style="text-align:center;">
            <p>${object.description}</p>
            ${data.solved ? '<p style="color:var(--accent); font-weight:bold;">✅ Puzzle déjà résolu et validé !</p>' : '<p>⏱️ Temps : <strong id="puzzle-timer">00:00</strong></p>'}
            
            <div id="puzzle-grid" style="display:grid; grid-template-columns:repeat(3, 90px); grid-template-rows:repeat(3, 90px); gap:2px; justify-content:center; margin:15px auto; background:var(--border); padding:2px; border-radius:10px; width:fit-content;">
                <!-- Les tuiles s'affichent ici -->
            </div>

            <div id="puzzle-feedback" style="margin-top:10px;">
                ${data.solved ? `<div class="feedback success">Code déjà obtenu : <strong>${object.rewardCode}</strong></div>` : ''}
            </div>
            <button class="button secondary" onclick="closeModal(); renderLaboratory();" style="margin-top:10px;">Fermer</button>
        </div>
    `);

    if (!data.solved) {
        startPuzzleTimer(gameId);
    }
    renderPuzzleBoard(object, data);
}

function startPuzzleTimer(gameId) {
    const data = state.puzzleGames[gameId];
    if (data.timerInterval) clearInterval(data.timerInterval);

    data.timerInterval = setInterval(() => {
        data.elapsedSeconds = Math.floor((Date.now() - data.startTime) / 1000);
        const m = Math.floor(data.elapsedSeconds / 60).toString().padStart(2, "0");
        const s = (data.elapsedSeconds % 60).toString().padStart(2, "0");
        const timerEl = document.getElementById("puzzle-timer");
        if (timerEl) timerEl.textContent = `${m}:${s}`;
    }, 1000);
}

function renderPuzzleBoard(object, data) {
    const grid = document.getElementById("puzzle-grid");
    if (!grid) return;

    grid.innerHTML = "";
    
    data.board.forEach((tileVal, currentIdx) => {
        const tile = document.createElement("div");
        
        // Si le puzzle est résolu, la dernière case (qui valait 0) affiche le dernier morceau de l'image au lieu du fond sombre
        const isTrueEmpty = (tileVal === 0 && !data.solved);

        tile.style.cssText = `
            width: 90px; height: 90px;
            background-color: ${isTrueEmpty ? "rgba(10, 22, 38, 0.9)" : "transparent"};
            background-image: ${isTrueEmpty ? "none" : `url("${data.bgImageSrc}")`};
            cursor: ${isTrueEmpty ? "default" : (data.solved ? "default" : "pointer")};
            border-radius: 4px;
            box-sizing: border-box;
            border: 1px solid rgba(255,255,255,0.15);
        `;

        // Si ce n'est pas une case vide (ou si le puzzle est résolu et qu'on affiche la 9ème portion)
        if (tileVal !== 0 || data.solved) {
            // Si le puzzle est résolu, chaque case s'affiche dans son ordre d'origine (de 0 à 8)
            const origIndex = data.solved ? currentIdx : (tileVal - 1);
            const origRow = Math.floor(origIndex / 3);
            const origCol = origIndex % 3;

            tile.style.backgroundSize = "270px 270px";
            tile.style.backgroundPosition = `-${origCol * 90}px -${origRow * 90}px`;

            if (!data.solved) {
                tile.onclick = () => movePuzzleTile(object, data, currentIdx);
            }
        }

        grid.appendChild(tile);
    });
}

function movePuzzleTile(object, data, idx) {
    if (data.solved) return;
    const emptyIdx = data.board.indexOf(0);

    const row = Math.floor(idx / 3);
    const emptyRow = Math.floor(emptyIdx / 3);
    const col = idx % 3;
    const emptyCol = emptyIdx % 3;

    const isAdjacent = (Math.abs(row - emptyRow) + Math.abs(col - emptyCol)) === 1;

    if (isAdjacent) {
        data.board[emptyIdx] = data.board[idx];
        data.board[idx] = 0;

        renderPuzzleBoard(object, data);
        checkPuzzleWin(object, data);
    }
}

function checkPuzzleWin(object, data) {
    const winningState = [1, 2, 3, 4, 5, 6, 7, 8, 0];
    const isWon = data.board.every((val, i) => val === winningState[i]);

    if (isWon) {
        data.solved = true;
        clearInterval(data.timerInterval);

        // Validation directe et attribution du code de récompense
        addCode(object.rewardCode);
        completeCurrentObjective();

        const feedback = document.getElementById("puzzle-feedback");
        if (feedback) {
            feedback.innerHTML = `
                <div class="feedback success">
                    <strong>🎉 Image reconstituée en ${formatTime(data.elapsedSeconds)} !</strong>
                    <p>Code obtenu : <strong>${object.rewardCode}</strong></p>
                </div>
            `;
        }
        
        // Redessine instantanément la grille pour figer l'image complète
        renderPuzzleBoard(object, data);
    }
}
/* =========================================================
   MINI-JEU : LE LABYRINTHE À LA SOURIS
   ========================================================= */

/* =========================================================
   MINI-JEU : LE LABYRINTHE À LA SOURIS (VERSION COMPLÈTE CORRIGÉE)
   ========================================================= */

function openMazeGame(object) {
    const gameId = `${state.currentRoom}:${state.currentObjectName}`;
    if (!state.mazeGames) state.mazeGames = {};

    if (!state.mazeGames[gameId]) {
        state.mazeGames[gameId] = { solved: false, attempts: 0, codeUnlocked: false };
    }
    const data = state.mazeGames[gameId];

    // 1. Vérification du code requis avant de lancer le labyrinthe
    if (object.requiredCode && !data.codeUnlocked && !data.solved) {
        const expectedCode = String(object.requiredCode).trim().toUpperCase();
        const inputId = `maze-req-code-${gameId.replace(/[^a-zA-Z0-9_-]/g, "_")}`;
        const feedbackId = `maze-req-feedback-${gameId.replace(/[^a-zA-Z0-9_-]/g, "_")}`;

        showModal(object.title, `
            <div class="question-modal" style="text-align:center;">
                <p>${object.description || ""}</p>
                <p>🔒 Entre le code d'accès pour activer le circuit :</p>
                <div style="display:flex; gap:8px; justify-content:center; margin-top:12px; flex-wrap:wrap;">
                    <input
                        type="text"
                        id="${inputId}"
                        placeholder="Code requis..."
                        autocomplete="off"
                        style="text-transform:uppercase; padding:8px 12px; border-radius:8px; border:1px solid var(--border); background:var(--surface, #0f2238); color:#fff;"
                    />
                    <button type="button" class="button" id="${inputId}-btn">Valider</button>
                </div>
                <div id="${feedbackId}" style="margin-top:10px; font-weight:bold;"></div>
                <button class="button secondary" onclick="closeModal(); renderLaboratory();" style="margin-top:12px;">Quitter</button>
            </div>
        `);

        setTimeout(() => {
            const inputEl = document.getElementById(inputId);
            const btnEl = document.getElementById(`${inputId}-btn`);
            const feedbackEl = document.getElementById(feedbackId);

            const verifyCode = () => {
                const entered = (inputEl?.value || "").trim().toUpperCase();
                if (entered === expectedCode) {
                    markCodesUsed(entered);
data.codeUnlocked = true;
renderLaboratory();
markLockUsed();
openMazeGame(object);
                } else if (feedbackEl) {
                    feedbackEl.innerHTML = `<span style="color:var(--danger);">❌ Code incorrect. Cherche l'indice ailleurs.</span>`;
                }
            };

            btnEl?.addEventListener("click", verifyCode);
            inputEl?.addEventListener("keydown", (e) => {
                if (e.key === "Enter") verifyCode();
            });
            inputEl?.focus();
        }, 50);

        return;
    }

    // 2. Si déjà résolu
    if (data.solved) {
        showModal(object.title, `
            <div class="feedback success" style="text-align:center;">
                <strong>Labyrinthe déjà résolu !</strong>
                <p>Code obtenu : <strong>${object.rewardCode}</strong></p>
                <button class="button" onclick="closeModal(); renderLaboratory();" style="margin-top:10px;">Continuer</button>
            </div>
        `);
        return;
    }

    // 3. Affichage de la modale contenant le canvas
    showModal(object.title, `
        <div class="question-modal" style="text-align:center;">
            <p>${object.description}</p>
            <p>🎯 Guide la bille 🟢 vers la sortie 🚪 en évitant les murs bleus. (Tentatives : <strong id="maze-attempts">${data.attempts}</strong>)</p>
            
            <div style="position:relative; width:100%; max-width:420px; margin:15px auto; background:#0a1626; border:2px solid var(--border); border-radius:15px; overflow:hidden;">
                <canvas id="mouse-maze-canvas" width="400" height="300" style="display:block; width:100%; height:auto; cursor:none;"></canvas>
            </div>

            <div id="maze-feedback" style="margin-top:10px; font-weight:bold;">Survole la bille verte pour commencer.</div>
            <button class="button secondary" onclick="closeModal(); renderLaboratory();" style="margin-top:10px;">Quitter</button>
        </div>
    `);

    // Lancement sécurisé avec une boucle d'attente active du DOM
    waitForMazeCanvas(object, data);
}
function waitForMazeCanvas(object, data, retries = 0) {
    const canvas = document.getElementById("mouse-maze-canvas");
    if (!canvas) {
        if (retries < 20) { // Essaye pendant 1 seconde max
            setTimeout(() => waitForMazeCanvas(object, data, retries + 1), 50);
        }
        return;
    }
    initMouseMazeGame(object, data, canvas);
}

function initMouseMazeGame(object, data, canvas) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Position de départ et d'arrivée (Sortie en bas à droite)
    const start = { x: 25, y: 25, radius: 7 };
    const goal = { x: 150, y: 250, w: 35, h: 35 };

    let ball = { x: start.x, y: start.y, radius: start.radius };
    let isPlaying = false;
    let isGameOver = false;

    // Murs du labyrinthe (chemin sinueux et faisable)
    const walls = [
        { x: 50, y: 0, w: 16, h: 220 },
        { x: 110, y: 70, w: 16, h: 230 },
        { x: 110, y: 70, w: 170, h: 16 },
        { x: 220, y: 140, w: 16, h: 160 },
        { x: 160, y: 220, w: 76, h: 16 },
        { x: 280, y: 70, w: 16, h: 160 },
        { x: 280, y: 70, w: 90, h: 16 }
    ];

    canvas.addEventListener("mousemove", (e) => {
        if (isGameOver || data.solved) return;

        const rect = canvas.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) * (canvas.width / rect.width);
        const mouseY = (e.clientY - rect.top) * (canvas.height / rect.height);

        // Activation au survol de la zone de départ
        if (!isPlaying) {
            const dist = Math.hypot(mouseX - start.x, mouseY - start.y);
            if (dist < 20) {
                isPlaying = true;
                data.attempts++;
                const attemptsEl = document.getElementById("maze-attempts");
                if (attemptsEl) attemptsEl.textContent = data.attempts;
                const feedbackEl = document.getElementById("maze-feedback");
                if (feedbackEl) feedbackEl.textContent = "C'est parti ! Reste bien dans le couloir.";
            }
            return;
        }

        ball.x = mouseX;
        ball.y = mouseY;

        // Sortie des limites du cadre
        if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width ||
            ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
            triggerGameOver("Sortie de zone !");
            return;
        }

        // Collision avec les murs
        for (let wall of walls) {
            if (ball.x + ball.radius > wall.x && ball.x - ball.radius < wall.x + wall.w &&
                ball.y + ball.radius > wall.y && ball.y - ball.radius < wall.y + wall.h) {
                triggerGameOver("Mur touché ! Recommence au début.");
                return;
            }
        }

        // Victoire si on atteint la zone d'arrivée
        if (ball.x >= goal.x && ball.x <= goal.x + goal.w &&
            ball.y >= goal.y && ball.y <= goal.y + goal.h) {
            
           data.solved = true;
isGameOver = true;

let rewardSummary = [];

if (object.rewardCode) {
    addCode(object.rewardCode);
    rewardSummary.push(`Code : <strong>${object.rewardCode}</strong>`);
}

if (object.reward) {
    addItem(object.reward);
    const label = object.reward === "badge" ? "Badge d'évacuation" : object.reward;
    rewardSummary.push(`Objet gagné : <strong>${label}</strong>`);
}

if (typeof renderInventory === "function") {
    renderInventory();
}

completeCurrentObjective();

const feedbackEl = document.getElementById("maze-feedback");
if (feedbackEl) {
    feedbackEl.innerHTML = `
        <div class="feedback success" style="margin:5px 0; padding:8px;">
            🎉 Sortie atteinte en ${data.attempts} tentative(s) !
            ${rewardSummary.length ? `<br>${rewardSummary.join(" — ")}` : ""}
        </div>
        <button class="button" onclick="closeModal(); renderLaboratory();" style="margin-top:5px;">Continuer</button>
    `;
}
        }
    });

    function triggerGameOver(msg) {
        isGameOver = true;
        isPlaying = false;
        ball.x = start.x;
        ball.y = start.y;

        const feedbackEl = document.getElementById("maze-feedback");
        if (feedbackEl) {
            feedbackEl.innerHTML = `<span style="color:var(--danger);">${msg} Repasse sur la zone verte pour retenter.</span>`;
        }

        setTimeout(() => {
            isGameOver = false;
        }, 250);
    }

    function draw() {
        if (!document.getElementById("mouse-maze-canvas")) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Zone de départ
        ctx.fillStyle = "rgba(0, 200, 83, 0.3)";
        ctx.beginPath();
        ctx.arc(start.x, start.y, 14, 0, Math.PI * 2);
        ctx.fill();

        // Zone d'arrivée (Sortie)
        ctx.fillStyle = "rgba(255, 209, 102, 0.4)";
        ctx.fillRect(goal.x, goal.y, goal.w, goal.h);
        ctx.strokeStyle = "#ffd166";
        ctx.lineWidth = 2;
        ctx.strokeRect(goal.x, goal.y, goal.w, goal.h);
        ctx.fillStyle = "#edf6ff";
        ctx.font = "14px sans-serif";
        ctx.fillText("🚪", goal.x + 8, goal.y + 23);

        // Murs du labyrinthe
        ctx.fillStyle = "#126bff";
        for (let wall of walls) {
            ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
            ctx.strokeStyle = "#6ea8fe";
            ctx.strokeRect(wall.x, wall.y, wall.w, wall.h);
        }

        // Bille du joueur
        ctx.fillStyle = isPlaying ? "#00c853" : "#9eafc4";
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();

        requestAnimationFrame(draw);
    }

    draw();
}
function drawPattern(pointer) {
    const pts = state.patternPath.map(i => {
        const p = patternPoint(i);
        return `${p.x},${p.y}`;
    });
    if (pointer) pts.push(`${pointer.x},${pointer.y}`);

    const line = document.getElementById("pattern-line");
    if (line) line.setAttribute("points", pts.join(" "));

    document.querySelectorAll(".pattern-dot").forEach(g => {
        g.classList.toggle("active", state.patternPath.includes(Number(g.dataset.index)));
    });
}
/* =========================================================
   MINI-JEU : LES POINTS À RELIER (CONNECT THE DOTS)
   ========================================================= */
let dotsLoopToken = 0;       // permet d'arrêter l'ancienne boucle d'animation
let dotsCurrentObject = null; // objet courant, utilisé par le bouton Recommencer

function getConnectDotsData(object) {
    const puzzle = object.puzzle || object;
    const pointsList = puzzle.dots || [];
    const gameId = object.id || puzzle.title || "default_dots";

    if (!window.state) window.state = {};
    if (!state.connectDotsGames) state.connectDotsGames = {};

    if (!state.connectDotsGames[gameId]) {
        state.connectDotsGames[gameId] = {
            currentNext: 2, // le point 1 est le point de départ
            solved: false
        };
    }

    return {
        puzzle,
        pointsList,
        gameId,
        data: state.connectDotsGames[gameId]
    };
}

function initConnectDotsCanvas(object, dataArg, pointsListArg) {
    if (!object) return;

    const resolved = getConnectDotsData(object);
    const puzzle = resolved.puzzle;
    const data = dataArg || resolved.data;
    const pointsList = Array.isArray(pointsListArg) && pointsListArg.length > 0
        ? pointsListArg
        : resolved.pointsList;

    if (!pointsList.length) {
        console.warn("Aucun point (dots) trouvé pour connectDots :", object);
        return;
    }

    const canvas = document.getElementById("dots-canvas");
    if (!canvas) {
        setTimeout(() => initConnectDotsCanvas(object, data, pointsList), 50);
        return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    dotsCurrentObject = object;
    const myToken = ++dotsLoopToken;
    const maxDot = pointsList.length;
    const HIT_RADIUS = 18;

    // Initialise le pointeur sur le point 1 pour éviter un trait vers (0, 0) au départ
    const firstPoint = pointsList.find(p => p.id === 1) || pointsList[0];
    let mouseX = firstPoint.x;
    let mouseY = firstPoint.y;
    let hasMovedPointer = false;

    canvas.style.touchAction = "none";

    canvas.onpointermove = (e) => {
        const rect = canvas.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        mouseX = (e.clientX - rect.left) * (canvas.width / rect.width);
        mouseY = (e.clientY - rect.top) * (canvas.height / rect.height);
        hasMovedPointer = true;

        if (data.solved) return;

        const target = pointsList.find(p => p.id === data.currentNext);
        if (!target) return;

        if (Math.hypot(mouseX - target.x, mouseY - target.y) > HIT_RADIUS) return;

        data.currentNext++;

        const nextEl = document.getElementById("next-dot-num");
        const feedbackEl = document.getElementById("dots-feedback");
        const rewardCode = puzzle.rewardCode ?? object.rewardCode ?? "";

        if (data.currentNext > maxDot) {
            data.solved = true;
            if (nextEl) nextEl.textContent = "Terminé !";
            try {
                if (typeof addCode === "function") addCode(rewardCode);
                if (typeof completeCurrentObjective === "function") completeCurrentObjective();
            } catch (err) {
                console.error("Erreur à la validation :", err);
            }
            if (feedbackEl) {
                feedbackEl.innerHTML = `
                    <div class="feedback success">
                        Forme tracée avec succès !
                        Code obtenu : <strong>${rewardCode}</strong>
                    </div>`;
            }
        } else {
            if (nextEl) nextEl.textContent = data.currentNext;
            if (feedbackEl) {
                feedbackEl.textContent = `Bien joué ! Vise maintenant le point ${data.currentNext}.`;
            }
        }
    };

    function renderLoop() {
        if (myToken !== dotsLoopToken) return;

        const currentCanvas = document.getElementById("dots-canvas");
        if (!currentCanvas) {
            requestAnimationFrame(renderLoop);
            return;
        }

        ctx.clearRect(0, 0, currentCanvas.width, currentCanvas.height);

        ctx.strokeStyle = "#55d6be";
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.beginPath();

        // Traits validés : du point 1 jusqu'au dernier point atteint
        for (let i = 1; i < data.currentNext - 1; i++) {
            const p1 = pointsList.find(p => p.id === i);
            const p2 = pointsList.find(p => p.id === i + 1);
            if (p1 && p2) {
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
            }
        }

        // Trait élastique vers le pointeur une fois le déplacement commencé
        if (!data.solved && data.currentNext <= maxDot && hasMovedPointer) {
            const origin = pointsList.find(p => p.id === data.currentNext - 1);
            if (origin) {
                ctx.moveTo(origin.x, origin.y);
                ctx.lineTo(mouseX, mouseY);
            }
        }
        ctx.stroke();

        // Points
        pointsList.forEach(p => {
            const isReached = p.id < data.currentNext;
            const isNext = p.id === data.currentNext && !data.solved;

            ctx.fillStyle = isReached ? "#55d6be" : (isNext ? "#ff6678" : "#ffffff");
            ctx.beginPath();
            ctx.arc(p.x, p.y, isNext ? 9 : 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#0a1626";
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.fillStyle = "#edf6ff";
            ctx.font = "bold 12px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
            ctx.fillText(p.id, p.x, p.y - 12);
        });

        requestAnimationFrame(renderLoop);
    }

    renderLoop();
}

function resetConnectDots(gameId) {
    const obj = dotsCurrentObject || (window.state && state.currentObject);
    if (obj) {
        const resolved = getConnectDotsData(obj);
        const targetId = gameId || resolved.gameId;
        if (state.connectDotsGames[targetId]) {
            state.connectDotsGames[targetId].currentNext = 2;
            state.connectDotsGames[targetId].solved = false;
        }
    }
    if (typeof closeModal === "function") closeModal();
    if (obj && typeof openConnectDotsGame === "function") {
        openConnectDotsGame(obj);
    } else if (obj) {
        initConnectDotsCanvas(obj);
    }
}

function openConnectDotsGame(object) {
    const resolved = getConnectDotsData(object);
    const puzzle = resolved.puzzle;

    const html = `
        <div class="connect-dots-game">

            <p>${puzzle.description || "Relie les points dans l'ordre."}</p>

            <p>
                Prochain point :
                <strong id="next-dot-num">
                    ${resolved.data.currentNext}
                </strong>
            </p>

            <div class="dots-canvas-container">
                <canvas
                    id="dots-canvas"
                    width="400"
                    height="300">
                </canvas>
            </div>

            <div id="dots-feedback">
                Commence par relier les points dans l'ordre.
            </div>

            <button class="button secondary"
                onclick="resetConnectDots('${resolved.gameId}')">
                Recommencer
            </button>

        </div>
    `;

    // Utilise le système de fenêtre modale existant
    showModal(
        puzzle.title || object.title || "Tracé géométrique",
        html
    );

    // Initialise le jeu après la création de la fenêtre
    initConnectDotsCanvas(object);
}

function setupPatternEvents(object) {
    const svg = document.getElementById("pattern-svg");
    if (!svg) return;

    let drawing = false;

    const toSvg = e => {
        const r = svg.getBoundingClientRect();
        return { x: (e.clientX - r.left) * 300 / r.width, y: (e.clientY - r.top) * 300 / r.height };
    };

    const dotAt = e => {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        const g = el && el.closest ? el.closest(".pattern-dot") : null;
        return g ? Number(g.dataset.index) : null;
    };

    const addDot = index => {
        const path = state.patternPath;
        if (index === null || path.includes(index)) return;

        if (path.length) {
            const last = path[path.length - 1];
            const dc = Math.abs((index % 3) - (last % 3));
            const dr = Math.abs(Math.floor(index / 3) - Math.floor(last / 3));
            // Comme sur téléphone : le point du milieu est ajouté automatiquement
            if ((dc === 0 || dc === 2) && (dr === 0 || dr === 2)) {
                const mid = (index + last) / 2;
                if (!path.includes(mid)) path.push(mid);
            }
        }
        path.push(index);
    };

    svg.addEventListener("pointerdown", e => {
        if (state.patternDone) return;
        e.preventDefault();
        svg.setPointerCapture(e.pointerId);
        clearTimeout(state.patternTimeout);

        drawing = true;
        state.patternPath = [];
        document.getElementById("pattern-area").classList.remove("error");

        addDot(dotAt(e));
        drawPattern(toSvg(e));
    });

    svg.addEventListener("pointermove", e => {
        if (!drawing) return;
        addDot(dotAt(e));
        drawPattern(toSvg(e));
    });

    const end = () => {
        if (!drawing) return;
        drawing = false;
        drawPattern(null);

        if (state.patternPath.length > 1) {
            checkPattern(object);
        } else {
            state.patternPath = [];
            drawPattern(null);
        }
    };

    svg.addEventListener("pointerup", end);
    svg.addEventListener("pointercancel", end);
}



function checkPattern(object) {

    const feedback = document.getElementById("pattern-feedback");
    const area = document.getElementById("pattern-area");

    if (!feedback || !area) return;

    const entered = state.patternPath.join("-");
    const expected = object.pattern.join("-");
    const reversed = [...object.pattern].reverse().join("-");

    if (entered === expected || entered === reversed) {

        state.patternDone = true;

        // Attribution de l'objet
        if (object.reward) {
            addItem(object.reward);
        }

        // Attribution du code
        if (object.rewardCode) {
            addCode(object.rewardCode);
        }

        completeCurrentObjective();

        feedback.innerHTML = `
            <div class="feedback success">

                <strong>🔓 Motif correct !</strong>

                <p>Le digicode est déverrouillé.</p>

                ${object.reward ? `
                    <p>
                        🎁 <strong>Objet obtenu :</strong>
                        ${object.reward}
                    </p>
                ` : ""}

                ${object.rewardCode ? `
                    <p>
                        🔑 <strong>Code obtenu :</strong>
                        ${object.rewardCode}
                    </p>
                ` : ""}

                <button class="button"
                    onclick="closeModal(); renderLaboratory();">
                    Continuer
                </button>

            </div>
        `;

    } else {

        area.classList.add("error");

        feedback.innerHTML = `
            <div class="feedback error">
                <strong>❌ Mauvais motif.</strong>
                <p>Réessaie.</p>
            </div>
        `;

        state.patternTimeout = setTimeout(() => {

            if (state.patternDone ||
                !document.getElementById("pattern-area")) return;

            state.patternPath = [];
            drawPattern(null);
            area.classList.remove("error");

        }, 900);
    }
}

function displayPatternLock(object) {

    state.patternPath = [];
    state.patternDone = false;

    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description || ""}</p>

            <div id="pattern-area" class="pattern-area">
                <svg id="pattern-svg" viewBox="0 0 300 300">
                    <polyline id="pattern-line" points=""/>
                    ${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => {
                        const p = patternPoint(i);
                        return `
                            <g class="pattern-dot" data-index="${i}">
                                <circle class="pattern-hit"
                                    cx="${p.x}" cy="${p.y}" r="38"/>
                                <circle class="dot"
                                    cx="${p.x}" cy="${p.y}" r="13"/>
                            </g>`;
                    }).join("")}
                </svg>
            </div>

            <div id="pattern-feedback"></div>
        </div>
    `);

    setupPatternEvents(object);
}

/* ===== Boutons de couleur ===== */
const COLOR_LABELS = { red: "Rouge", green: "Vert", yellow: "Jaune", blue: "Bleu" };

function openColorSequence(object) {
    state.colorInput = [];
    state.colorDone = false;

    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description}</p>
            <div id="color-progress" class="color-progress"></div>
            <div class="color-board">
                ${Object.keys(COLOR_LABELS).map(c => `
                    <button
    class="color-btn color-${c}"
    onclick="pressColor('${c}')"
    aria-label="${COLOR_LABELS[c]}"
    title="${COLOR_LABELS[c]}"
></button>
                `).join("")}
            </div>
            <div id="color-feedback"></div>
            <button class="button secondary" onclick="resetColors()">Recommencer</button>
        </div>
    `);

    renderColorProgress();
}

function renderColorProgress() {
    const object = state.currentObject;
    const box = document.getElementById("color-progress");
    if (!object || !box) return;

    box.innerHTML = object.sequence.map((_, i) =>
        `<span class="color-dot ${state.colorInput[i] || ""}"></span>`
    ).join("");
}

function resetColors() {
    clearTimeout(state.colorTimeout);
    if (state.colorDone) return;
    state.colorInput = [];
    const feedback = document.getElementById("color-feedback");
    if (feedback) feedback.innerHTML = "";
    renderColorProgress();
}

function pressColor(color) {
    const object = state.currentObject;
    if (!object || state.colorDone || state.colorInput.length >= object.sequence.length) return;

    state.colorInput.push(color);
    renderColorProgress();

    if (state.colorInput.length < object.sequence.length) return;

    const feedback = document.getElementById("color-feedback");
    if (!feedback) return;

    const correct = object.sequence.every((c, i) => c === state.colorInput[i]);

    if (correct) {
        state.colorDone = true;
        addCode(object.rewardCode);
        completeCurrentObjective();

        feedback.innerHTML = `
            <div class="feedback success">
                <strong>🔓 Panneau déverrouillé !</strong>
                <p>Code obtenu : <strong>${object.rewardCode}</strong></p>
                <button class="button" onclick="closeModal(); renderLaboratory();">Continuer</button>
            </div>
        `;
    } else {
        feedback.innerHTML = `<div class="feedback error"><strong>❌ Mauvaise combinaison.</strong></div>`;
        state.colorTimeout = setTimeout(resetColors, 1000);
    }
}
/* =========================================================
   NOUVEAUX MÉCANISMES D'ESCAPE GAME CHIMIE
   ========================================================= */

// 1. BALANCE DE PRÉCISION & DILUTION
function openBalancePuzzle(object) {
    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description}</p>
            <div class="lock-box">
                <label>Masse à peser (en g) :</label>
                <input id="bal-mass" class="code-input" type="number" step="0.01" placeholder="Ex: 9,25">
                <label>Volume de fiole jaugée (en mL) :</label>
                <input id="bal-vol" class="code-input" type="number" placeholder="Ex: 800">
                <button class="button" onclick="checkBalancePuzzle()">⚖️ Lancer la dissolution</button>
                <div id="bal-feedback"></div>
            </div>
        </div>
    `);
}

function checkBalancePuzzle() {
    const obj = state.currentObject;
    const m = parseFloat(document.getElementById("bal-mass").value);
    const v = parseFloat(document.getElementById("bal-vol").value);
    const fb = document.getElementById("bal-feedback");

    if (Math.abs(m - obj.targetMass) <= 0.05 && v === obj.targetVol) {
        addCode(obj.rewardCode);
        completeCurrentObjective();
        fb.innerHTML = `<div class="feedback success"><strong>✅ Solution étalon préparée !</strong><p>Code obtenu : <strong>${obj.rewardCode}</strong></p><button class="button" onclick="closeModal(); renderLaboratory();">Continuer</button></div>`;
    } else {
        fb.innerHTML = `<div class="feedback error"><strong>❌ Concentration incorrecte !</strong><p>Vérifie $n = C \\times V$ et $m = n \\times M$ (attention aux unités mL → L).</p></div>`;
    }
}

// 2. RADAR DE MENDELEÏEV
function openMendeleievPuzzle(object) {
    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description}</p>
            <div class="lock-box">
                <label>Numéro atomique Z :</label>
                <input id="mend-z" class="code-input" type="number" placeholder="Ex: 9">
                <label>Symbole chimique exact :</label>
                <input id="mend-sym" class="code-input" type="text" placeholder="Ex: F">
                <button class="button" onclick="checkMendeleievPuzzle()">🔍 Identifier l'élément</button>
                <div id="mend-feedback"></div>
            </div>
        </div>
    `);
}

function checkMendeleievPuzzle() {
    const obj = state.currentObject;
    const z = Number(document.getElementById("mend-z").value);
    const sym = document.getElementById("mend-sym").value.trim();
    const fb = document.getElementById("mend-feedback");

    if (z === obj.targetZ && sym.toLowerCase() === obj.targetSymbol.toLowerCase()) {
        addCode(obj.rewardCode);
        completeCurrentObjective();
        fb.innerHTML = `<div class="feedback success"><strong>✅ Élément verrouillé dans la base !</strong><p>Code obtenu : <strong>${obj.rewardCode}</strong></p><button class="button" onclick="closeModal(); renderLaboratory();">Continuer</button></div>`;
    } else {
        fb.innerHTML = `<div class="feedback error"><strong>❌ Élément non reconnu.</strong><p>Repère sa ligne (période) et sa colonne (électrons de valence).</p></div>`;
    }
}

// 3. SYNTHÉTISEUR MOLÉCULAIRE (LEWIS & HYBRIDATION)
function openMoleculePuzzle(object) {
    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description}</p>
            <div class="lock-box">
                <label>Hybridation de l'atome central :</label>
                <select id="mol-hyb" class="code-input">
                    <option value="">-- Choisir --</option>
                    <option value="sp">sp (Linéaire)</option>
                    <option value="sp2">sp² (Trigonale plane)</option>
                    <option value="sp3">sp³ (Tétraédrique)</option>
                </select>
                <label>Nombre total de doublets non-liants sur la molécule :</label>
                <input id="mol-dnl" class="code-input" type="number" placeholder="Ex: 2">
                <button class="button" onclick="checkMoleculePuzzle()">🧬 Stabiliser la liaison</button>
                <div id="mol-feedback"></div>
            </div>
        </div>
    `);
}

function checkMoleculePuzzle() {
    const obj = state.currentObject;
    const hyb = document.getElementById("mol-hyb").value;
    const dnl = Number(document.getElementById("mol-dnl").value);
    const fb = document.getElementById("mol-feedback");

    if (hyb === obj.targetHyb && dnl === obj.targetDnl) {
        addCode(obj.rewardCode);
        completeCurrentObjective();
        fb.innerHTML = `<div class="feedback success"><strong>✅ Architecture moléculaire validée !</strong><p>Code obtenu : <strong>${obj.rewardCode}</strong></p><button class="button" onclick="closeModal(); renderLaboratory();">Continuer</button></div>`;
    } else {
        fb.innerHTML = `<div class="feedback error"><strong>❌ Structure instable.</strong><p>Compte les voisins + doublets non-liants (règle VSEPR).</p></div>`;
    }
}

// 4. RÉGULATEUR THERMODYNAMIQUE (HESS & GIBBS)
function openThermoPuzzle(object) {
    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description}</p>
            <div class="lock-box">
                <label>Enthalpie standard de réaction (en kJ/mol) :</label>
                <input id="thermo-dh" class="code-input" type="number" step="0.1" placeholder="Ex: -450">
                <label>La réaction est-elle spontanée à 298 K ?</label>
                <select id="thermo-spont" class="code-input">
                    <option value="">-- Choisir --</option>
                    <option value="oui">Oui (ΔG < 0)</option>
                    <option value="non">Non (ΔG > 0)</option>
                </select>
                <button class="button" onclick="checkThermoPuzzle()">🌡️ Réguler le réacteur</button>
                <div id="thermo-feedback"></div>
            </div>
        </div>
    `);
}

function checkThermoPuzzle() {
    const obj = state.currentObject;
    const dh = parseFloat(document.getElementById("thermo-dh").value);
    const spont = document.getElementById("thermo-spont").value;
    const fb = document.getElementById("thermo-feedback");

    if (Math.abs(dh - obj.targetDh) <= 1 && spont === obj.targetSpont) {
        addCode(obj.rewardCode);
        completeCurrentObjective();
        fb.innerHTML = `<div class="feedback success"><strong>✅ Réacteur stabilisé !</strong><p>Code obtenu : <strong>${obj.rewardCode}</strong></p><button class="button" onclick="closeModal(); renderLaboratory();">Continuer</button></div>`;
    } else {
        fb.innerHTML = `<div class="feedback error"><strong>❌ Surchauffe thermique !</strong><p>Applique la loi de Hess ($\sum \Delta_f H^\circ_{produits} - \sum \Delta_f H^\circ_{réactifs}$).</p></div>`;
    }
}

// 5. CHRONO-CATALYSEUR (CINÉTIQUE)
function openCinetiquePuzzle(object) {
    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description}</p>
            <div class="lock-box">
                <label>Ordre de la réaction déduit des données :</label>
                <select id="cin-ordre" class="code-input">
                    <option value="">-- Choisir --</option>
                    <option value="0">Ordre 0</option>
                    <option value="1">Ordre 1 (t1/2 indépendant de C0)</option>
                    <option value="2">Ordre 2</option>
                </select>
                <label>Temps de demi-réaction t(1/2) calculé (en min) :</label>
                <input id="cin-t12" class="code-input" type="number" step="0.1" placeholder="Ex: 15">
                <button class="button" onclick="checkCinetiquePuzzle()">⏱️ Calibrer la catalyse</button>
                <div id="cin-feedback"></div>
            </div>
        </div>
    `);
}

function checkCinetiquePuzzle() {
    const obj = state.currentObject;
    const ordre = document.getElementById("cin-ordre").value;
    const t12 = parseFloat(document.getElementById("cin-t12").value);
    const fb = document.getElementById("cin-feedback");

    if (ordre === String(obj.targetOrdre) && Math.abs(t12 - obj.targetT12) <= 0.5) {
        addCode(obj.rewardCode);
        completeCurrentObjective();
        fb.innerHTML = `<div class="feedback success"><strong>✅ Cinétique maîtrisée !</strong><p>Code obtenu : <strong>${obj.rewardCode}</strong></p><button class="button" onclick="closeModal(); renderLaboratory();">Continuer</button></div>`;
    } else {
        fb.innerHTML = `<div class="feedback error"><strong>❌ Vitesse de réaction hors tolérance.</strong><p>Pour l'ordre 1 : $t_{1/2} = \\frac{\\ln(2)}{k}$.</p></div>`;
    }
}



home();