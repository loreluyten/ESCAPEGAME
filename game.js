
const app = document.getElementById("app");

const state = {
    mode: null,
    duration: 10,
    level: 1,
    scenario: null,
    currentRoom: null,
    currentObject: null,
    currentQuestion: null,
    questionMistakes: {},
    currentObjectName: null,
    objectCorrectQuestions: {},
currentObjectRoom: null,
completedObjectives: [],
    remaining: 0,
    timer: null,
    inventory: [],
    discoveredCodes: [],
    visitedObjects: [],
    visitedRooms: [],
    usedQuestions: [],
    answers: [],
    hints: 0,
    finished: false
};

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
    if (code && !hasCode(code)) state.discoveredCodes.push(code);
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
            <h1>Ton cours.<br>Ton laboratoire.<br>Ton escape game.</h1>
            <p>Explore des salles, résous des énigmes et utilise tes découvertes pour t'échapper.</p>
        </section>

        <section class="cards">
            <article class="card">
                <div class="big-icon">🧮</div>
                <h2>Mathématiques</h2>
                <p>Équations, calculs et raisonnement.</p>
                <button class="button" onclick="chooseDuration('maths')">Commencer</button>
            </article>

            <article class="card">
                <div class="big-icon">⚗️</div>
                <h2>Chimie</h2>
                <p>Solutions, réactions et notions chimiques.</p>
                <button class="button" onclick="chooseDuration('chimie')">Commencer</button>
            </article>

            <article class="card">
                <div class="big-icon">👑</div>
                <h2>Boss final</h2>
                <p>Une mission qui mélange les deux matières.</p>
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

    state.level = level;
    state.activeRooms = buildLevelRooms(state.mode, level);
    state.scenario = SCENARIOS[state.mode];
    state.currentRoom = state.scenario.startRoom;
    state.currentObject = null;
    state.currentObjectName = null;
    state.objectCorrectQuestions = {};
state.currentObjectRoom = null;
state.completedObjectives = [];
    state.currentQuestion = null;
    state.remaining = state.duration * 60;
    state.inventory = [];
    state.discoveredCodes = [];
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

    closeModal();
    state.currentRoom = roomName;

    if (!state.visitedRooms.includes(roomName)) {
        state.visitedRooms.push(roomName);
    }

    renderLaboratory();
}

function renderLaboratory() {
    const room = getCurrentRoom();

    page(`
        <div class="game-header">
            <div>
                <strong>${state.scenario.subtitle}</strong>
                <small>${room.title}</small>
            </div>
            <div id="timer" class="timer">${formatTime(state.remaining)}</div>
        </div>

        <section class="laboratory">
            <div class="lab-introduction">
                <div class="eyebrow">PIÈCE ${state.visitedRooms.length}</div>
                <h1>${room.title}</h1>
                <p>${room.description}</p>
            </div>

            <div class="room-layout">
                ${Object.entries(room.objects).map(([id, object]) => {
                    const visited = state.visitedObjects.includes(`${state.currentRoom}:${id}`);
                    return `
                        <button class="room-object" onclick="openObject('${id}')">
                            <span class="room-object-icon">${getObjectIcon(object.type)}</span>
                            <span class="room-object-name">${object.title}</span>
                            ${visited ? '<span class="object-status">✓ Inspecté</span>' : ''}
                        </button>
                    `;
                }).join("")}
            </div>

            <div class="navigation-panel">
                <h3>🗺️ Pièces visitées</h3>
                <div class="room-list">
                    ${state.visitedRooms.map(id => `
                        <button class="room-nav-button ${id === state.currentRoom ? "current" : ""}"
                            onclick="visitRoom('${id}')">
                            ${getRooms()[id].title}
                        </button>
                    `).join("")}
                </div>
                <p class="muted">Les nouvelles pièces se débloquent en résolvant les énigmes.</p>
            </div>

            <div class="lab-bottom">
                <div class="inventory-panel">
                    <h3>🎒 Inventaire</h3>
                    ${renderInventory()}
                </div>
                <div class="codes-panel">
                    <h3>🔐 Codes découverts</h3>
                    ${renderCodes()}
                </div>
                <div class="actions-panel">
                    <button class="button secondary" onclick="showGlobalHint()">💡 Indice</button>
                    <button class="button danger" onclick="confirmAbandon()">Abandonner</button>
                </div>
            </div>
        </section>
    `);
}

function getObjectIcon(type) {
    const icons = {
        question: "🧠",
        code: "🔐",
        password: "💻",
        sequence: "⚗️",
        item: "📦",
        clue: "🔎",
        roomDoor: "🚪",
        final: "🚪"
    };

    return icons[type] || "❓";
}

function renderInventory() {
    if (!state.inventory.length) return '<span class="empty">Aucun objet</span>';

    const labels = {
        key: "🗝️ Clé",
        badge: "🪪 Badge",
        computerUnlocked: "💻 Terminal déverrouillé"
    };

    return state.inventory.map(item => `
        <span class="inventory-item">${labels[item] || item}</span>
    `).join("");
}

function renderCodes() {
    if (!state.discoveredCodes.length) return '<span class="empty">Aucun code</span>';

    return state.discoveredCodes.map(code => `
        <span class="code-item">🔢 ${code}</span>
    `).join("");
}
function completeCurrentObjective() {
    if (!state.currentObjectName || !state.currentObjectRoom) return;

    const objectiveId =
        `${state.currentObjectRoom}:${state.currentObjectName}`;

    if (!state.completedObjectives.includes(objectiveId)) {
        state.completedObjectives.push(objectiveId);
    }
}
function openObject(objectName) {
    const room = getCurrentRoom();
    const object = room.objects[objectName];

    if (!object) return;

    state.currentObject = object;
    state.currentObjectName = objectName;
state.currentObjectRoom = state.currentRoom;

    const key = `${state.currentRoom}:${objectName}`;
    if (!state.visitedObjects.includes(key)) state.visitedObjects.push(key);

    switch (object.type) {
        case "question":
            openQuestion(object);
            break;
        case "code":
            openCodeLock(object);
            break;
        case "matching":
            openMatching();
            break;
        
        case "sequence":
            openSequence(object);
             break;

        case "calculation":
            openCalculation(object);
            break;    
        case "password":
            openPassword(object);
            break;
        case "item":
            openItemObject(object);
            break;
        case "clue":
            showModal(object.title, `<p>${object.description}</p>`);
            break;
        case "roomDoor":
            openRoomDoor(object);
            break;
        case "final":
            openFinalDoor(object);
            break;
        default:
            showModal(object.title, `<p>${object.description}</p>`);
    }
}


function openSequence(object) {
    const choices = shuffle(
        object.steps.map((text, originalIndex) => ({
            text,
            originalIndex
        }))
    );

    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description}</p>
            <p>Replace les étapes dans le bon ordre.</p>

            <div id="sequence-options">
                ${choices.map((choice, index) => `
                    <label class="sequence-option">
                        Étape ${index + 1}
                        <select class="answer sequence-select">
                            ${object.steps.map((step, stepIndex) => `
                                <option value="${stepIndex}"
                                    ${stepIndex === choice.originalIndex ? "selected" : ""}>
                                    ${step}
                                </option>
                            `).join("")}
                        </select>
                    </label>
                `).join("")}
            </div>

            <div id="sequence-feedback"></div>

            <button class="button" onclick="checkSequence()">
                Vérifier l'ordre
            </button>
        </div>
    `);
}

function checkSequence() {
    const object = state.currentObject;
    const feedback = document.getElementById("sequence-feedback");
    const selects = [
        ...document.querySelectorAll(".sequence-select")
    ];

    if (!object || !feedback || !selects.length) return;

    const values = selects.map(select => select.value);
    const allDifferent = new Set(values).size === values.length;

    // On compare l'ordre choisi avec l'ordre attendu.
    const selectedSteps = values.map(value =>
        Number(value)
    );

    const correctOrder = object.steps.map((_, index) => index);

    if (
        allDifferent &&
        selectedSteps.length === correctOrder.length &&
        selectedSteps.every((value, index) =>
            value === correctOrder[index]
        )
    ) {
        addCode(object.rewardCode);
        completeCurrentObjective();

        feedback.innerHTML = `
            <div class="feedback success">
                <strong>✅ Protocole validé !</strong>
                <p>Tu as remis les étapes dans le bon ordre.</p>
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
                <strong>❌ Pas encore !</strong>
                <p>Vérifie l'ordre des étapes et réessaie.</p>
            </div>
        `;
    }
}

function openCalculation(object) {
    showModal(object.title, `
        <div class="question-modal">
            <p>${object.description}</p>

            <label for="calculation-answer">
                Nombre de neutrons :
            </label>

            <input
                id="calculation-answer"
                class="code-input"
                type="number"
                placeholder="Ta réponse"
            >

            <button class="button" onclick="checkCalculation()">
                Vérifier
            </button>

            <div id="calculation-feedback"></div>
        </div>
    `);
}

function checkCalculation() {
    const object = state.currentObject;
    const input = document.getElementById("calculation-answer");
    const feedback = document.getElementById("calculation-feedback");

    if (!object || !input || !feedback) return;

    if (input.value.trim() === "") {
        feedback.innerHTML = "<p>Saisis une réponse avant de vérifier.</p>";
        return;
    }

    const answer = Number(input.value);

    if (answer === object.answer) {
        addCode(object.rewardCode);
        completeCurrentObjective();

        feedback.innerHTML = `
            <div class="feedback success">
                <strong>✅ Calcul correct !</strong>
                <p>N = A - Z = 23 - 11 = 12 neutrons.</p>
                <p>Code découvert : <strong>${object.rewardCode}</strong></p>
                <button class="button"
                    onclick="closeModal(); renderLaboratory();">
                    Continuer
                </button>
            </div>
        `;
    } else {
        feedback.innerHTML = `
            <div class="feedback error">
                <strong>❌ Essaie encore !</strong>
                <p>Indice : soustrais le nombre de protons au nombre de nucléons.</p>
            </div>
        `;
    }
}

function openMatching() {
    showModal("🧩 Tableau des symboles", `
        <div class="question-modal">
            <p>Relie chaque symbole à sa bonne définition.</p>

            <label for="match-X"><strong>X</strong></label>
            <select id="match-X" class="answer">
                <option value="">Choisir une définition</option>
                <option value="symbol">Symbole chimique de l'élément</option>
                <option value="mass">Nombre de masse (nucléons)</option>
                <option value="atomic">Numéro atomique (protons)</option>
            </select>

            <label for="match-A"><strong>A</strong></label>
            <select id="match-A" class="answer">
                <option value="">Choisir une définition</option>
                <option value="symbol">Symbole chimique de l'élément</option>
                <option value="mass">Nombre de masse (nucléons)</option>
                <option value="atomic">Numéro atomique (protons)</option>
            </select>

            <label for="match-Z"><strong>Z</strong></label>
            <select id="match-Z" class="answer">
                <option value="">Choisir une définition</option>
                <option value="symbol">Symbole chimique de l'élément</option>
                <option value="mass">Nombre de masse (nucléons)</option>
                <option value="atomic">Numéro atomique (protons)</option>
            </select>

            <div id="matching-feedback"></div>

            <button class="button" onclick="checkMatching()">
                Vérifier les associations
            </button>
        </div>
    `);
}

function checkMatching() {
    const x = document.getElementById("match-X").value;
    const a = document.getElementById("match-A").value;
    const z = document.getElementById("match-Z").value;

    const feedback = document.getElementById("matching-feedback");

    if (!x || !a || !z) {
        feedback.innerHTML =
            "<p>Associe les trois symboles avant de vérifier.</p>";
        return;
    }

    if (
        x === "symbol" &&
        a === "mass" &&
        z === "atomic"
    ) {
        addCode("AZX");
        completeCurrentObjective();

        feedback.innerHTML = `
            <p>✅ Bravo ! Toutes les associations sont correctes.</p>
            <p>Tu as découvert le code : <strong>AZX</strong></p>
            <button class="button" onclick="closeModal()">
                Continuer
            </button>
        `;
    } else {
        feedback.innerHTML = `
            <p>❌ Certaines associations sont incorrectes.</p>
            <p>Rappel : A correspond au nombre de nucléons et Z au nombre de protons.</p>
            <button class="button secondary" onclick="openMatching()">
                Réessayer
            </button>
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

function openQuestion(object, retry = false) {
    if (retry && state.currentQuestion) {
        const question = state.currentQuestion;
        showQuestionModal(question);
        return;
    }
    let available;
if (object.questionId) {
    available = QUESTION_BANK.filter(question =>
        question.id === object.questionId &&
        question.subject === object.questionSubject &&
        !state.usedQuestions.includes(question)
    );
} else if (state.mode === "maths") {
    // Sélection par chapitre, sans dépendre du niveau enregistré.
    const topics = {
        1: ["équation", "equation", "suite"],
        2: ["fonction", "limite", "dérivation", "derivation"],
        3: ["intégrale", "integrale"],
        4: ["différentielle", "differentielle"],
        5: ["trigonométrie", "trigonometrie", "géométrie", "geometrie"]
    };
    available = QUESTION_BANK.filter(question => {
        const subject = normalizeSubject(question.subject);
        const matchesChapter = (topics[state.level] || []).some(topic =>
            subject.includes(normalizeSubject(topic))
        );
        return matchesChapter &&
            !state.usedQuestions.includes(question);
    });
} else if (state.mode === "chimie") {
    const expectedSubject = CHEMISTRY_TOPICS_BY_LEVEL[state.level];
    available = QUESTION_BANK.filter(question =>
        question.subject === expectedSubject &&
        question.level === state.level &&
        !state.usedQuestions.includes(question)
    );
} else {
    available = QUESTION_BANK.filter(question =>
        question.subject === object.questionSubject &&
        question.level === state.level &&
        !state.usedQuestions.includes(question)
    );
}

console.log("Mode :", state.mode);
console.log("Chapitre :", state.level);
console.log("Nombre total de QCM :", QUESTION_BANK.length);
console.log(
    "Sujets présents :",
    [...new Set(QUESTION_BANK.map(q => q.subject))]
);

    if (!available.length) {
        showModal(
            "📭 Plus de QCM disponibles",
            `<p>Aucune question disponible pour cette matière et ce niveau. Vérifie QUESTION_BANK et CHEMISTRY_TOPICS_BY_LEVEL.</p>
             <button class="button" onclick="closeModal()">Retour</button>`
        );
        return;
    }

    const question = shuffle(available)[0];

    state.currentQuestion = question;
    state.usedQuestions.push(question);

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

            <button
                class="button secondary"
                onclick="showQuestionHint()"
            >
                💡 Indice
            </button>
        </div>
    `);
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


function answerQuestion(selectedAnswers) {
    const question = state.currentQuestion;
    if (!question) return;
    const rawAnswers = Array.isArray(question.answers)
    ? question.answers
    : Array.isArray(question.answer)
        ? question.answer
        : Number.isInteger(question.answer)
            ? [question.answer]
            : [];

const correctAnswers = rawAnswers.map(answer =>
    typeof answer === "string"
        ? answer.charCodeAt(0) - 65
        : answer
);
    const selected = [...selectedAnswers].sort((a, b) => a - b);
    const expected = [...correctAnswers].sort((a, b) => a - b);
    const correct =
        selected.length === expected.length &&
        selected.every((value, index) => value === expected[index]);
    if (!correct) {
    const id = question.id ?? question.text;
    state.questionMistakes[id] =
        (state.questionMistakes[id] || 0) + 1;
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
    const object = state.currentObject;
    let progressMessage = "";
    let needsNextQuestion = false;
    const isMultiQuestion = object && object.requiredCorrectAnswers > 1;
    if (correct) {
        if (question.code) addCode(question.code);
        if (object && object.requiredCorrectAnswers) {
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
            const required = object.requiredCorrectAnswers;
            if (total >= required) {
                addCode(object.rewardCode);
                completeCurrentObjective();
                progressMessage = `
                    <p>🎉 Les ${required} QCM sont réussis !</p>
                    <p>Code obtenu : <strong>${object.rewardCode}</strong></p>
                `;
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
    } else {
        const index = state.usedQuestions.indexOf(question);
        if (index !== -1) {
            state.usedQuestions.splice(index, 1);
        }
    }
    const feedback = document.getElementById("question-feedback");
    if (!feedback) return;
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
            ${correct && question.code ? `
                <p>🔢 Code découvert :
                <strong>${question.code}</strong></p>
            ` : ""}
            ${correct ? progressMessage : `
                <p>Réessaie ce QCM : une réponse incorrecte ne compte pas.</p>
            `}
                    ${correct && needsNextQuestion ? `
            <button class="button" onclick="nextQuestionForObject()">
                Question suivante →
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

function openCodeLock(object) {
    showModal(object.title, `
        <p>${object.description}</p>
        <div class="lock-box">
            <label for="code-input">Entre le code :</label>
            <input id="code-input" class="code-input" type="text" autocomplete="off">
            <button class="button" onclick="checkCode()">🔓 Déverrouiller</button>
            <div id="lock-feedback"></div>
        </div>
    `);
}

function checkCode() {
    const object = state.currentObject;
    const input = document.getElementById("code-input");
    const feedback = document.getElementById("lock-feedback");

    if (!object || !input || !feedback) return;

    const entered = input.value.trim();

    const correct = object.code === "discovered"
        ? hasCode(entered)
        : entered === object.code;

    if (correct) {
    addItem(object.reward);
    completeCurrentObjective();

        feedback.innerHTML = `
            <div class="feedback success">
                <strong>🔓 Coffre ouvert !</strong>
                <p>Tu récupères : ${object.reward === "key" ? "une clé" : object.reward}.</p>
                <button class="button" onclick="closeModal(); renderLaboratory();">Continuer</button>
            </div>
        `;
    } else {
        feedback.innerHTML = `<div class="feedback error">❌ Code incorrect. Cherche un code dans un QCM.</div>`;
    }
}

function openPassword(object) {
    showModal(object.title, `
        <p>${object.description}</p>
        <div class="lock-box">
            <label for="password-input">Mot de passe :</label>
            <input id="password-input" class="code-input" type="password" autocomplete="off">
            <button class="button" onclick="checkPassword()">💻 Connexion</button>
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
    addItem(object.reward);
    completeCurrentObjective();

        feedback.innerHTML = `
            <div class="feedback success">
                <strong>💻 Accès autorisé !</strong>
                <p>Le terminal est maintenant déverrouillé.</p>
                <button class="button" onclick="closeModal(); renderLaboratory();">Continuer</button>
            </div>
        `;
    } else {
        feedback.innerHTML = `<div class="feedback error">❌ Mot de passe incorrect.</div>`;
    }
}

function openItemObject(object) {
    if (object.requiredItem && !hasItem(object.requiredItem)) {
        showModal(object.title, `
            <p>${object.description}</p>
            <div class="locked-message">🔒 Verrouillé. Il te manque l'objet nécessaire.</div>
        `);
        return;
    }

    addItem(object.reward);
    completeCurrentObjective();

    showModal(object.title, `
        <div class="unlock-animation">🎉</div>
        <h3>Objet récupéré !</h3>
        <p>${object.reward === "badge" ? "Tu récupères un badge de sécurité." : "Tu as récupéré un objet utile."}</p>
        <button class="button" onclick="closeModal(); renderLaboratory();">Continuer</button>
    `);
}


function openRoomDoor(object) {
    if (object.requiredItem && !hasItem(object.requiredItem)) {
        showModal(object.title, `
            <p>${object.description}</p>
            <div class="locked-message">
                🔒 Il te manque l'objet nécessaire pour ouvrir cette porte.
            </div>
        `);
        return;
    }

    if (
        object.requiredCode === "discovered" &&
        state.discoveredCodes.length === 0
    ) {
        showModal(object.title, `
            <p>${object.description}</p>
            <div class="locked-message">
                🔢 Tu dois d'abord découvrir un code grâce à une énigme.
            </div>
        `);
        return;
    }

    if (
        object.requiredCode &&
        object.requiredCode !== "discovered" &&
        !hasCode(object.requiredCode)
    ) {
        showModal(object.title, `
            <p>${object.description}</p>
            <div class="locked-message">
                <p>Termine les énigmes nécessaires avant de continuer.</p>
            </div>
        `);
        return;
    }

    visitRoom(object.targetRoom);
}



function openFinalDoor(object) {
    // Vérifier tous les objectifs du niveau,
    // en mathématiques comme en chimie.
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

    if (object.requiredItem && !hasItem(object.requiredItem)) {
        showModal(object.title, `
            <div class="locked-message">
                🔒 La sortie est verrouillée.
                <p>Il te faut encore le badge de sécurité.</p>
            </div>
        `);
        return;
    }

    finish("success");
}


    
function getIncompleteObjectives() {
    const requiredTypes = [
        "question",
        "matching",
        "calculation",
        "sequence",
        "code",
        "password",
        "item"
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

function showGlobalHint() {
    state.hints++;

    let message;

    if (!state.discoveredCodes.length) {
        message = "Examine un objet avec le symbole 🧠 et réponds correctement pour obtenir un code.";
    } else if (!hasItem("key")) {
        message = "Utilise l'un de tes codes sur le coffre 🔐.";
    } else if (!hasItem("badge")) {
        message = "La clé peut ouvrir le tiroir ou l'armoire. Cherche cet objet dans le laboratoire.";
    } else if (!hasItem("computerUnlocked")) {
        message = "Trouve le terminal 💻 et essaie le mot de passe indiqué dans les indices.";
    } else {
        message = "Retourne dans les pièces déjà visitées et cherche une porte encore verrouillée.";
    }

    showModal("💡 Indice", `<p>${message}</p>`);
}

function showModal(title, content) {
    closeModal();

    const modal = document.createElement("div");
    modal.className = "modal-overlay";

    modal.innerHTML = `
        <div class="modal">
            <button class="modal-close" onclick="closeModal()" aria-label="Fermer">×</button>
            <h2>${title}</h2>
            ${content}
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
        ? "🎉 Tu t'es échappé !"
        : reason === "time"
            ? "⏰ Temps écoulé !"
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
${(Array.isArray(entry.question.answers)
    ? entry.question.answers
    : [entry.question.answer]
).map(index => entry.question.choices[index]).join(" ; ")}</p>
                        <p class="explanation">${entry.question.explanation}</p>
                    </article>
                `).join("") : "<p>Aucun QCM réalisé.</p>"}
            </div>
        </section>
    `);
}

home();
