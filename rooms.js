const MATHS_ROOM_VISUALS = {
    15: {
        entrance: {
            background: "image/maths-X-entree.png",
            zones: {
                notice: { x: 29, y: 17, w: 26, h: 34 },
                notebook: { x: 8, y: 60, w: 27, h: 28 },
                doorLab: { x: 56, y: 18, w: 25, h: 60 },
                doorExit: { x: 84, y: 16, w: 15, h: 70 }
            }
        },
        lab: {
            background: "image/maths-10-labo.png",
            zones: {
                microscope: { x: 4, y: 28, w: 18, h: 47 },
                securitySheet: { x: 25, y: 60, w: 19, h: 21 },
                computer: { x: 31, y: 39, w: 19, h: 21 },
                safe: { x: 60, y: 32, w: 14, h: 29 },
                drawer: { x: 59, y: 60, w: 13, h: 13 },
                matchingBoard: { x: 42, y: 14, w: 16, h: 18 },
                doorAnalysis: { x: 80, y: 15, w: 18, h: 69 }
            }
        },
        analysis: {
            background: "image/maths-10-final.png",
            zones: {
                note: { x: 0, y: 20, w: 27, h: 30 },
                puzzle: { x: 15, y: 60, w: 30, h: 30 },
                experience: { x: 64, y: 58, w: 28, h: 30 },
                finalQuestion: { x: 62, y: 12, w: 34, h: 40 }
            }
        }
    },

    30: {
        entrance: {
            background: "image/maths-20-entree.png",
            zones: {
                notice: { x: 18, y: 13, w: 30, h: 37 },
                notebook: { x: 5, y: 60, w: 30, h: 22 },
                doorLab: { x: 51, y: 16, w: 17, h: 55 },
                doorExit: { x: 85, y: 16, w: 14, h: 54 }
            }
        },
        lab: {
            background: "image/maths-20-labo.png",
            zones: {
                microscope: { x: 6, y: 31, w: 20, h: 47 },
                securitySheet: { x: 30, y: 56, w: 22, h: 19 },
                computer: { x: 55, y: 35, w: 20, h: 37 },
                safe: { x: 31, y: 28, w: 17, h: 32 },
                drawer: { x: 65, y: 70, w: 13, h: 30 },
                board: { x: 55, y: 10, w: 24, h: 27 },
                doorAnalysis: { x: 82, y: 9, w: 17, h: 69 }
            }
        },
        analysis: {
            background: "image/maths-20-final.png",
            zones: {
                puzzle: { x: 15, y: 14, w: 30, h: 35 },
                note: { x: 18, y: 64, w: 25, h: 25 },
                finalQuestion: { x: 45, y: 34, w: 17, h: 18 }
            }
        }
    },

    45: {
        entrance: {
            background: "image/maths-30-entree.png",
            zones: {
                notice: { x: 10, y: 19, w: 22, h: 25 },
                archive: { x: 10, y: 48, w: 20, h: 15 },
                notebook: { x: 8, y: 66, w: 24, h: 24 },
                doorLab: { x: 31, y: 16, w: 24, h: 61 },
                encryptedNote: { x: 59, y: 30, w: 16, h: 18 },
                directionalLock: { x: 66, y: 49, w: 16, h: 18 },
                doorExit: { x: 84, y: 18, w: 15, h: 60 }
            }
        },
        lab: {
            background: "image/maths-30-labo.png",
            zones: {
                coordinateNote: { x: 4, y: 2, w: 18, h: 39 },
                microscope: { x: 4, y: 29, w: 18, h: 39 },
                securitySheet: { x: 10, y: 75, w: 24, h: 21 },
                computer: { x: 33, y: 34, w: 18, h: 28 },
                board: { x: 45, y: 15, w: 20, h: 16 },
                safe: { x: 54, y: 34, w: 17, h: 36 },
                drawer: { x: 63, y: 74, w: 15, h: 16 },
                doorAnalysis: { x: 81, y: 15, w: 17, h: 66 }
            }
        },
        analysis: {
            background: "image/maths-30-final.png",
            zones: {
                puzzle: { x: 15, y: 20, w: 35, h: 25 },
                note: { x: 68, y: 5, w: 33, h: 35 },
                finalQuestion: { x: 47, y: 45, w: 24, h: 30 }
            }
        }
    }
};

function buildMathsScenario(level, duration) {
    const visuals = MATHS_ROOM_VISUALS[duration];

  const STORIES_CLEAN = {
    // =====================================================================
    // CHAPITRE 1 : ÉQUATIONS ET SUITES
    // =====================================================================
    1: {
        15: {
            title: "Suites & Équations : Parcours Express",
            intro: "Lis le tableau d'affichage et valide le cahier pour obtenir le badge d'entrée au laboratoire.",
            room1: {
                notice: {
                    title: "📌 Tableau d'affichage",
                    type: "clue",
                    description: "Suite arithmétique : u₀ = 2 et raison r = 3. La valeur de u₄ ouvre le coffre du laboratoire. La porte de sortie attend le code final donné par l'ordinateur."
                },
                notebook: {
                    title: "📓 Cahier d'entrée",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    reward: "badge",
                    description: "Réussis 1 question sur les suites et équations pour obtenir le badge du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredItem: "badge",
                    useBadgeReader: true,
                    description: "Passe ton badge sur le lecteur pour entrer au laboratoire."
                },
                doorExit: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredCode: "CONVERGE",
                    description: "Entre le code final généré par l'ordinateur du laboratoire."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Plan de progression (Labo)",
                    type: "clue",
                    description: "1) Ouvre le coffre avec u₄ pour avoir la clé du tiroir. 2) Le tiroir donne le code de la salle d'analyse. 3) Les fiches donnent le code du microscope. 4) Le microscope débloque le circuit et la simulation en salle d'analyse. 5) L'ordinateur assemble les 4 codes de la salle d'analyse pour ouvrir la sortie."
                },
                safe: {
                    title: "🔐 Coffre du laboratoire",
                    type: "code",
                    code: "14",
                    reward: "key",
                    description: "Entre la valeur de u₄ calculée depuis le tableau du hall pour obtenir la clé du tiroir."
                },
                drawer: {
                    title: "🗄️ Tiroir à codes",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "RANG",
                    description: "Ouvre avec la clé du coffre pour obtenir le code de la porte de la salle d'analyse."
                },
                matchingBoard: {
                    title: "🃏 Fiches de récurrence",
                    type: "matching",
                    rewardCode: "INDICE",
                    description: "Associe chaque notation à sa signification pour obtenir le code du microscope.",
                    prompt: "Associe chaque notation à sa signification :",
                    buttonLabel: "Vérifier les associations",
                    successTitle: "✅ Associations correctes !",
                    errorTitle: "❌ Certaines associations sont incorrectes.",
                    reminder: "Rappel : une suite récurrente se définit à partir d'un terme initial et d'une relation de récurrence.",
                    options: [
                        { value: "initial", label: "Terme initial de la suite" },
                        { value: "recurrence", label: "Relation permettant de calculer le terme suivant" },
                        { value: "general", label: "Terme général de la suite" }
                    ],
                    items: [{ id: "relation", label: "uₙ₊₁ = f(uₙ)", expected: "recurrence" },
                        { id: "u0", label: "u₀", expected: "initial" },                        { id: "un", label: "uₙ", expected: "general" }
                    ]
                },
                microscope: {
                    title: "🔬 Microscope d'analyse",
                    type: "question",
                    requiredCode: "INDICE",
                    requiredCorrectAnswers: 1,
                    rewardCode: "TERME",
                    description: "Entre le code des fiches, puis réussis 1 question pour débloquer le circuit et la simulation en salle d'analyse."
                },
                computer: {
                    title: "💻 Ordinateur de synthèse",
                    type: "code",
                    requiredCode: ["SUITE", "LIMITE", "RAISON"],
                    rewardCode: "CONVERGE",
                    description: "Saisis les 3 codes obtenus en salle d'analyse pour débloquer le code de sortie."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "RANG",
                    description: "Entre le code récupéré dans le tiroir du laboratoire."
                }
            },
            room3: {
                note: {
                    title: "📝 Fiche de calcul (uₙ)",
                    type: "calculation",
                    answer: 16,
                    rewardCode: "RAISON",
                    description: "Pour uₙ = 2n + 4, calcule u₆. Ce code va sur l'ordinateur du laboratoire."
                },
                puzzle: {
                    title: "🌀 Circuit des suites",
                    type: "mazeGame",
                    requiredCode: "TERME",
                    rewardCode: "LIMITE",
                    description: "Entre le code du microscope, puis guide la bille jusqu'au bout pour obtenir un code pour l'ordinateur."
                },
                
                finalQuestion: {
                    title: "🧠 Énigme de synthèse",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    rewardCode: "SUITE",
                    description: "Réussis 1 question pour obtenir un code destiné à l'ordinateur du laboratoire."
                }
            }
        },

        30: {
            title: "Suites Récurrentes : Protocole Intermédiaire",
            intro: "Lis le tableau d'affichage, puis résous le cahier pour obtenir le code d'entrée au laboratoire.",
            room1: {
                notice: {
                    title: "📌 Tableau d'affichage",
                    type: "clue",
                    description: "Le code du cahier ouvre le laboratoire. Au laboratoire : l'ordinateur attend le mot de 5 lettres formé par les mots du tableau, et les voyants du coffre suivent l'ordre croissant des indices u₀, u₁, u₂, u₃."
                },
                notebook: {
                    title: "📓 Cahier d'entrée",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "RECURRENCE",
                    description: "Réussis 2 questions pour obtenir le code de la porte du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "RECURRENCE",
                    description: "Entre le code délivré par le cahier d'entrée."
                },
                doorExit: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "EULER",
                    description: "Nécessite le badge du tiroir et le code final obtenu dans la salle d'analyse."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Consignes du laboratoire",
                    type: "clue",
                    description: "L'ordinateur débloque le tiroir (qui donne le badge). Le coffre des voyants ouvre la salle d'analyse. Le microscope débloque le digicode en salle d'analyse."
                },
                board: {
                    title: "📌 Tableau de notation",
                    type: "clue",
                    description: "Mots clés : Soustraction — Opération — Matrice — Multiplication — Ensemble."
                },
                safe: {
                    title: "🔐 Coffre des indices (u₀ → u₃)",
                    type: "colors",
                    sequence: ["blue", "red", "green", "yellow"],
                    rewardCode: "MONOTONE",
                    description: "Allume les voyants dans l'ordre croissant des indices (Bleu = u₀, Rouge = u₁, Vert = u₂, Jaune = u₃) pour ouvrir la salle d'analyse."
                },
                computer: {
                    title: "💻 Ordinateur central",
                    type: "password",
                    password: "SOMME",
                    rewardCode: "BORNE",
                    description: "Entre le mot de 5 lettres formé à partir du tableau de notation pour débloquer le tiroir."
                },
                drawer: {
                    title: "🗄️ Tiroir sécurisé",
                    type: "code",
                    requiredCode: "BORNE",
                    reward: "badge",
                    description: "Entre le code donné par l'ordinateur central pour récupérer le badge de sortie."
                },
                microscope: {
                    title: "🔬 Microscope numérique",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "ALGEBRE",
                    description: "Réussis 2 questions pour obtenir le code du digicode en salle d'analyse."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "MONOTONE",
                    description: "Entre le code obtenu après avoir validé la séquence des voyants."
                }
            },
            room3: {
                note: {
                    title: "📝 Équation à résoudre",
                    type: "calculation",
                    answer: 9,
                    rewardCode: "X9",
                    description: "Résous 3x − 7 = 20 pour obtenir la 1re clé de l'énigme finale."
                },
                puzzle: {
                    title: "🔵 Digicode en zigzag",
                    type: "pattern",
                    pattern: [2, 1, 0, 3, 4, 5, 8, 7, 6],
                    requiredCode: "ALGEBRE",
                    rewardCode: "SOMME1",
                    description: "Entre le code du microscope, puis trace l'initiale du premier mot sur le tableau dans la salle 2 sur la grille 3×3 pour obtenir la 2e clé."
                },
                finalQuestion: {
                    title: "🧠 Épreuve finale des suites",
                    type: "question",
                    requiredCode: ["X9", "SOMME1"],
                    requiredCorrectAnswers: 2,
                    rewardCode: "EULER",
                    description: "Réunis les deux clés de cette salle et réussis 2 questions pour obtenir le code de sortie."
                }
            }
        },

        45: {
            title: "Algèbre & Récurrence : Protocole Complet",
            intro: "Observe les indices du hall pour orienter la serrure directionnelle et déverrouiller le cahier de recherche.",
            room1: {
                notice: {
                    title: "📌 Rose des vents du veilleur",
                    type: "clue",
                    description: "« L'aiguille s'éveille face à l'étoile Polaire (nord), puis suit la course du soleil (est) autour du cadran jusqu'à fermer le cercle. »"
                },
                archive: {
                    title: "📄 Registre des symboles",
                    type: "clue",
                    description: "Valeurs : ▲ = 2 ; ● = 4 ; ▼ = 6 ; ■ = 8. Le coffre du laboratoire s'ouvre avec la valeur de ● suivie de celle de ▼."
                },
                encryptedNote: {
                    title: "✉️ Message codé",
                    type: "clue",
                    description: "Texte intercepté : MBQPSBUPJSF."
                },
                directionalLock: {
                    title: "🔒 Serrure directionnelle",
                    type: "directional",
                    sequence: ["up", "right", "down", "left"],
                    rewardCode: "NORD",
                    description: "Reproduis la course décrite par la rose des vents pour débloquer le cahier."
                },
                notebook: {
                    title: "📓 Cahier de recherche",
                    type: "question",
                    requiredCode: "NORD",
                    requiredCorrectAnswers: 3,
                    rewardCode: "ARITHMETIQUE",
                    description: "Entre le code de la serrure et réussis 3 questions. Ce code ouvre le laboratoire et sert sur l'ordinateur."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "ARITHMETIQUE",
                    description: "Entre le code délivré par le cahier de recherche."
                },
                doorExit: {
                    title: "🚪 Porte de confinement",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "GAUSS",
                    description: "Nécessite le badge du tiroir et le code final obtenu dans la salle d'analyse."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Protocole du laboratoire",
                    type: "clue",
                    description: "1) L'ordinateur demande le code du cahier du hall puis le mot décodé. 2) Le coffre ouvre le tiroir (qui donne le badge). 3) Le microscope ouvre la salle d'analyse."
                },
              
                board: {
                    title: "📌 Mémo d'analyse",
                    type: "clue",
                    description: "Vérifie bien les écarts ou raisons de chaque suite avant de valider."
                },
                computer: {
                    title: "💻 Ordinateur de recherche",
                    type: "password",
                    password: "LABORATOIRE",
                    requiredCode: "ARITHMETIQUE",
                    rewardCode: "GEOMETRIQUE",
                    description: "Entre le code du cahier du hall, puis saisis le mot de 11 lettres du message codé en reculant chaque lettre d'un rang dans l'alphabet (B → A)."
                },
                microscope: {
                    title: "🔬 Analyseur de séquences",
                    type: "question",
                    requiredCode: "GEOMETRIQUE",
                    requiredCorrectAnswers: 3,
                    rewardCode: "CROISSANT",
                    description: "Entre le code de l'ordinateur et réussis 3 questions pour obtenir le code de la salle d'analyse."
                },
                safe: {
                    title: "🔐 Coffre numérique",
                    type: "code",
                    code: "46",
                    reward: "key",
                    description: "Saisis la valeur de ● suivie de celle de ▼ d'après le registre du hall pour obtenir la clé du tiroir."
                },
                drawer: {
                    title: "🗄️ Tiroir de confinement",
                    type: "item",
                    requiredItem: "key",
                    reward: "badge",
                    description: "Ouvre avec la clé du coffre pour récupérer le badge de sortie."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "CROISSANT",
                    description: "Entre le code délivré par l'analyseur de séquences."
                }
            },
            room3: {
                note: {
                    title: "📝 Console des carrés",
                    type: "calculation",
                    answer: 36,
                    rewardCode: "CARRE",
                    description: "Quel est le terme suivant de 1 ; 4 ; 9 ; 16 ; 25 ? Ce code débloque le circuit."
                },
                puzzle: {
                    title: "🌀 Circuit de récurrence",
                    type: "mazeGame",
                    requiredCode: "CARRE",
                    rewardCode: "FIBONACCI",
                    description: "Entre le code de la console, puis guide la bille jusqu'au bout pour obtenir la clé de l'épreuve finale."
                },
                finalQuestion: {
                    title: "🧠 Épreuve finale d'algèbre",
                    type: "question",
                    requiredCode: "FIBONACCI",
                    requiredCorrectAnswers: 4,
                    rewardCode: "GAUSS",
                    description: "Entre le code du circuit et réussis 4 questions pour obtenir le code final de sortie."
                }
            }
        }
    },

    // =====================================================================
    // CHAPITRE 2 : FONCTIONS USUELLES, LIMITES ET DÉRIVATION
    // =====================================================================
    2: {
        15: {
            title: "Fonctions & Dérivation : Parcours Express",
            intro: "Lis le tableau d'affichage et valide le cahier pour entrer dans le laboratoire.",
            room1: {
                notice: {
                    title: "📌 Tableau d'affichage",
                    type: "clue",
                    description: "Pour f(x) = x², la valeur de f'(5) ouvre le coffre du laboratoire. La porte de sortie attend le code final donné par l'ordinateur."
                },
                notebook: {
                    title: "📓 Cahier d'entrée",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    reward: "badge",
                    description: "Réussis 1 question sur les fonctions et la dérivation pour obtenir le badge du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredItem: "badge",
                    useBadgeReader: true,
                    description: "Passe ton badge sur le lecteur pour entrer au laboratoire."
                },
                doorExit: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredCode: "BIJECTION",
                    description: "Entre le code final généré par l'ordinateur du laboratoire."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Plan de progression (Labo)",
                    type: "clue",
                    description: "1) Ouvre le coffre avec f'(5) pour avoir la clé du tiroir. 2) Le tiroir donne le code de la salle d'analyse. 3) Les fiches donnent le code du microscope. 4) Le microscope débloque le tracé et l'expérience en salle d'analyse. 5) L'ordinateur assemble les 4 codes de la salle d'analyse pour ouvrir la sortie."
                },
                safe: {
                    title: "🔐 Coffre du laboratoire",
                    type: "code",
                    code: "10",
                    reward: "key",
                    description: "Saisis la valeur de f'(5) pour f(x) = x² afin d'obtenir la clé du tiroir."
                },
                drawer: {
                    title: "🗄️ Tiroir à codes",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "ABSCISSE",
                    description: "Ouvre avec la clé du coffre pour obtenir le code de la porte de la salle d'analyse."
                },
                matchingBoard: {
                    title: "🃏 Fiches de dérivation",
                    type: "matching",
                    rewardCode: "ORDONNEE",
                    description: "Associe chaque notation à sa signification pour obtenir le code du microscope.",
                    prompt: "Associe chaque notation à sa signification :",
                    buttonLabel: "Vérifier les associations",
                    successTitle: "✅ Associations correctes !",
                    errorTitle: "❌ Certaines associations sont incorrectes.",
                    reminder: "Rappel : f'(a) est le nombre dérivé en a, f(x) est l'image, et f'(x) est la fonction dérivée.",
                    options: [
                        { value: "image", label: "Image de x par la fonction f" },
                        { value: "nombre_derive", label: "Nombre dérivé en a (pente de la tangente)" },
                        { value: "fonction_derivee", label: "Fonction dérivée de f" }
                    ],
                    items: [
                        { id: "fx", label: "f(x)", expected: "image" },
                        { id: "fpa", label: "f'(a)", expected: "nombre_derive" },
                        { id: "fpx", label: "f'(x)", expected: "fonction_derivee" }
                    ]
                },
                microscope: {
                    title: "🔬 Microscope d'analyse",
                    type: "question",
                    requiredCode: "ORDONNEE",
                    requiredCorrectAnswers: 1,
                    rewardCode: "TANGENTE",
                    description: "Entre le code des fiches, puis réussis 1 question pour débloquer le tracé et l'expérience en salle d'analyse."
                },
                computer: {
                    title: "💻 Ordinateur de synthèse",
                    type: "code",
                    requiredCode: ["DERIVEE", "2", "EXTREMUM"],
                    rewardCode: "BIJECTION",
                    description: "Saisis les 3 codes obtenus en salle d'analyse pour débloquer le code de sortie."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "ABSCISSE",
                    description: "Entre le code récupéré dans le tiroir du laboratoire."
                }
            },
            room3: {
                note: {
                    title: "📝 Fiche d'image",
                    type: "calculation",
                    answer: 8,
                    rewardCode: "DERIVEE",
                    description: "Pour f(x) = x³, calcule f(2). Ce code va sur l'ordinateur du laboratoire."
                },
                puzzle: {
                    title: "📈 Tracé de points",
                    type: "connectDots",
                    requiredCode: "TANGENTE",
                    dots: [
                         { id: 1, x: 110, y: 75 },
    { id: 2, x: 155, y: 55 },
    { id: 3, x: 220, y: 55 },
    { id: 4, x: 260, y: 85 },
    { id: 5, x: 255, y: 120 },
    { id: 6, x: 220, y: 155 },
    { id: 7, x: 175, y: 190 },
    { id: 8, x: 130, y: 225 },
    { id: 9, x: 190, y: 240 },
    { id: 10, x: 270, y: 240 }
                    ],
                    rewardCode: "2",
                    description: "Entre le code du microscope, puis relie les points dans l'ordre pour tracer un chiffre : ce chiffre est un code pour l'ordinateur."
                },
               
                finalQuestion: {
                    title: "🧠 Énigme de synthèse",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    rewardCode: "EXTREMUM",
                    description: "Réussis 1 question pour obtenir un code destiné à l'ordinateur du laboratoire."
                }
            }
        },

        30: {
            title: "Tangentes & Limites : Protocole Intermédiaire",
            intro: "Lis le tableau d'affichage et résous le cahier pour obtenir le code d'entrée au laboratoire.",
            room1: {
                notice: {
                    title: "📌 Tableau d'affichage",
                    type: "clue",
                    description: " Au laboratoire, range les voyants de la plus petite valeur à la plus grande : Rouge = cos(π/2), Bleu = cos(π/3), Vert = sin(π/4), Jaune = sin(π/2)."
                },
                notebook: {
                    title: "📓 Cahier d'entrée",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "CONTINUITE",
                    description: "Réussis 2 questions pour obtenir le code de la porte du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "CONTINUITE",
                    description: "Entre le code délivré par le cahier d'entrée."
                },
                doorExit: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "LEIBNIZ",
                    description: "Nécessite le badge du tiroir et le code final obtenu dans la salle d'analyse."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Consignes du laboratoire",
                    type: "clue",
                    description: "L'ordinateur débloque le tiroir (qui donne le badge). Le coffre des voyants débloque le calcul de dérivée en salle d'analyse. Le microscope ouvre la porte de la salle d'analyse."
                },
                board: {
                    title: "📌 Tableau des initiales",
                    type: "clue",
                    description: "Mots clés : Logarithme — Image — Majorant — Intervalle — Tangente — Extremum."
                },
                safe: {
                    title: "🔐 Coffre des voyants (croissant)",
                    type: "colors",
                    sequence: ["red", "blue", "green", "yellow"],
                    rewardCode: "DERIV",
                    description: "Active les voyants de la plus petite valeur à la plus grande pour obtenir le code du calcul de dérivée."
                },
                computer: {
                    title: "💻 Ordinateur central",
                    type: "password",
                    password: "LIMITE",
                    rewardCode: "ASYMPTOTE",
                    description: "Entre le mot de 6 lettres formé à partir du tableau pour débloquer le tiroir."
                },
                drawer: {
                    title: "🗄️ Tiroir sécurisé",
                    type: "code",
                    requiredCode: "ASYMPTOTE",
                    reward: "badge",
                    description: "Entre le code donné par l'ordinateur central pour récupérer le badge de sortie."
                },
                microscope: {
                    title: "🔬 Microscope numérique",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "VARIATION",
                    description: "Réussis 2 questions pour obtenir le code d'ouverture de la salle d'analyse."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "VARIATION",
                    description: "Entre le code délivré par le microscope numérique."
                }
            },
            room3: {
                note: {
                    title: "📝 Calcul de dérivée",
                    type: "calculation",
                    answer: 12,
                    requiredCode: "DERIV",
                    rewardCode: "F12",
                    description: "Entre le code des voyants du laboratoire, puis calcule f'(2) pour f(x) = 3x² afin d'obtenir la 1re clé."
                },
                puzzle: {
                    title: "🔵 Digicode des fonctions",
                    type: "pattern",
                    pattern: [0,1,2,4,6,7,8],
                    rewardCode: "COURBE",
                    description: "Trace sur la grille le symbole des entiers relatifs en partant d'en haut à droite pour obtenir la 2e clé."
                },
                finalQuestion: {
                    title: "🧠 Épreuve finale d'analyse",
                    type: "question",
                    requiredCode: ["F12", "COURBE"],
                    requiredCorrectAnswers: 2,
                    rewardCode: "LEIBNIZ",
                    description: "Réunis les deux clés de cette salle et réussis 2 questions pour obtenir le code de sortie."
                }
            }
        },

        45: {
            title: "Analyse de Fonctions : Protocole Complet",
            intro: "Observe les indices du hall pour orienter la serrure directionnelle et déverrouiller le cahier.",
            room1: {
                notice: {
                    title: "📌 Tableau des variations",
                    type: "clue",
                    description: "« On lit la courbe depuis l'origine à l'ouest, on grimpe jusqu'au sommet, on poursuit vers l'est puis on redescend vers le minimum. »"
                },
                archive: {
                    title: "📄 Message codé",
                    type: "clue",
                    description: "Texte intercepté : UBOHFOUF."
                },
                encryptedNote: {
                    title: "✉️ Mémo d'accès",
                    type: "clue",
                    description: "Le code de la serrure directionnelle est nécessaire pour déverrouiller le cahier du professeur."
                },
                directionalLock: {
                    title: "🔒 Serrure directionnelle",
                    type: "directional",
                    sequence: ["left", "up", "right", "down"],
                    rewardCode: "VAR",
                    description: "Suis le tracé de la courbe décrit sur le tableau des variations pour débloquer le cahier."
                },
                notebook: {
                    title: "📓 Cahier du professeur",
                    type: "question",
                    requiredCode: "VAR",
                    requiredCorrectAnswers: 3,
                    rewardCode: "EXPONENTIELLE",
                    description: "Entre le code de la serrure et réussis 3 questions. Ce code ouvre le laboratoire, l'ordinateur et le coffre."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "EXPONENTIELLE",
                    description: "Entre le code délivré par le cahier du professeur."
                },
                doorExit: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "NEWTON",
                    description: "Nécessite le badge du tiroir et le code final obtenu dans la salle d'analyse."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Protocole du laboratoire",
                    type: "clue",
                    description: "1) L'ordinateur demande le code du cahier du hall puis le mot décodé. 2) Le coffre délivre le code du contrôleur, et le tableau affiche le réseau à mémoriser pour obtenir le badge. 3) Le microscope ouvre la salle d'analyse."
                },
                coordinateNote: {
                    title: "📄 Préparation salle d'analyse",
                    type: "clue",
                    description: "En salle d'analyse, la fiche de calcul attend la valeur de f(4) pour f(x) = 4x − 1."
                },
                board: {
                    title: "🗺️ Tableau du réseau de fonctions",
                    type: "maze",
                    description: "Mémorise bien le chemin de l'entrée à la sortie : tu devras le reproduire à l'aveugle sur le contrôleur du tiroir."
                },
                computer: {
                    title: "💻 Ordinateur",
                    type: "password",
                    password: "TANGENTE",
                    requiredCode: "EXPONENTIELLE",
                    rewardCode: "LOGARITHME",
                    description: "Entre le code du cahier du hall, puis saisis le mot de 8 lettres du message codé en reculant chaque lettre d'un rang dans l'alphabet (B → A)."
                },
                microscope: {
                    title: "🔬 Microscope numérique",
                    type: "question",
                    requiredCode: "LOGARITHME",
                    requiredCorrectAnswers: 3,
                    rewardCode: "CONVEXE",
                    description: "Entre le code de l'ordinateur et réussis 3 questions pour obtenir le code de la salle d'analyse."
                },
                safe: {
                    title: "🔐 Coffre",
                    type: "code",
                    code: "EXPONENTIELLE",
                    rewardCode: "RESEAU2",
                    description: "Entre le code du cahier du hall pour obtenir le code d'activation du contrôleur du tiroir."
                },
                drawer: {
                    title: "🕹️ Contrôleur du tiroir blindé",
                    type: "mazeController",
                    requiredCode: "RESEAU2",
                    reward: "badge",
                    rewardCode: "BADGE_ANALYSE",
                    description: "Entre le code du coffre, puis reproduis de mémoire le trajet observé sur le tableau du réseau pour récupérer le badge de sortie."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "CONVEXE",
                    description: "Entre le code délivré par le microscope numérique."
                }
            },
            room3: {
                note: {
                    title: "📝 Calcul d'image",
                    type: "calculation",
                    answer: 15,
                    rewardCode: "IMAGE",
                    description: "Donne le code indiqué sur la note de preparation dans la salle précédente."
                },
                puzzle: {
                    title: "🌀 Parcours asymptotique",
                    type: "mazeGame",
                    requiredCode: "IMAGE",
                    rewardCode: "INFLEXION",
                    description: "Entre le code du calcul, puis guide la bille jusqu'au bout pour obtenir la clé de l'épreuve finale."
                },
                finalQuestion: {
                    title: "🧠 Épreuve finale",
                    type: "question",
                    requiredCode: "INFLEXION",
                    requiredCorrectAnswers: 4,
                    rewardCode: "NEWTON",
                    description: "Entre le code du parcours et réussis 4 questions pour obtenir le code final de sortie."
                }
            }
        }
    },

    // =====================================================================
    // CHAPITRE 3 : INTÉGRALES
    // =====================================================================
    3: {
        15: {
            title: "Aires & Primitives : Parcours Express",
            intro: "Lis le tableau d'affichage et valide le cahier pour entrer dans le laboratoire.",
            room1: {
                notice: {
                    title: "📌 Tableau d'affichage",
                    type: "clue",
                    description: "Une primitive de x est x²/2 : sur [0 ; 6], l'intégrale de x ouvre le coffre du laboratoire. La porte de sortie attend le code final donné par l'ordinateur."
                },
                notebook: {
                    title: "📓 Cahier d'entrée",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    reward: "badge",
                    description: "Réussis 1 question sur les intégrales pour obtenir le badge du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredItem: "badge",
                    useBadgeReader: true,
                    description: "Passe ton badge sur le lecteur pour entrer au laboratoire."
                },
                doorExit: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredCode: "DARBOUX",
                    description: "Entre le code final généré par l'ordinateur du laboratoire."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Plan de progression (Labo)",
                    type: "clue",
                    description: "1) Ouvre le coffre avec l'intégrale de x sur [0 ; 6] pour avoir la clé du tiroir. 2) Le tiroir donne le code de la salle d'analyse. 3) Les fiches donnent le code du microscope. 4) Le microscope débloque le tracé d'aire et l'expérience. 5) L'ordinateur assemble les 4 codes de la salle d'analyse pour ouvrir la sortie."
                },
                safe: {
                    title: "🔐 Coffre du laboratoire",
                    type: "code",
                    code: "18",
                    reward: "key",
                    description: "Saisis la valeur de l'intégrale de x sur [0 ; 6] depuis le tableau du hall pour obtenir la clé du tiroir."
                },
                drawer: {
                    title: "🗄️ Tiroir à codes",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "PRIMITIVE",
                    description: "Ouvre avec la clé du coffre pour obtenir le code de la porte de la salle d'analyse."
                },
                matchingBoard: {
                    title: "🃏 Fiches d'intégration",
                    type: "matching",
                    rewardCode: "SUBDIVISION",
                    description: "Associe chaque notion à sa définition pour obtenir le code du microscope.",
                    prompt: "Associe chaque notion à sa définition :",
                    buttonLabel: "Vérifier les associations",
                    successTitle: "✅ Associations correctes !",
                    errorTitle: "❌ Certaines associations sont incorrectes.",
                    reminder: "Rappel : une primitive F vérifie F' = f, et l'intégrale définie se calcule avec F(b) − F(a).",
                    options: [
                        { value: "primitive", label: "Fonction F dont la dérivée est f" },
                        { value: "integrale_def", label: "Valeur F(b) − F(a) sur un intervalle [a ; b]" },
                        { value: "moyenne", label: "Valeur moyenne sur [a ; b]" }
                    ],
                    items: [
                        { id: "prim", label: "Primitive F", expected: "primitive" },
                        { id: "int_ab", label: "∫ₐᵇ f(x) dx", expected: "integrale_def" },
                        { id: "val_moy", label: "μ = [1/(b−a)] ∫ₐᵇ f(x) dx", expected: "moyenne" }
                    ]
                },
                microscope: {
                    title: "🔬 Microscope d'analyse",
                    type: "question",
                    requiredCode: "SUBDIVISION",
                    requiredCorrectAnswers: 1,
                    rewardCode: "AIRE",
                    description: "Entre le code des fiches, puis réussis 1 question pour débloquer le tracé d'aire et l'expérience en salle d'analyse."
                },
                computer: {
                    title: "💻 Ordinateur de synthèse",
                    type: "code",
                    requiredCode: ["INTEGRALE", "7", "RIEMANN"],
                    rewardCode: "DARBOUX",
                    description: "Saisis les 3 codes obtenus en salle d'analyse pour débloquer le code de sortie."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "PRIMITIVE",
                    description: "Entre le code récupéré dans le tiroir du laboratoire."
                }
            },
            room3: {
                note: {
                    title: "📝 Calcul d'intégrale",
                    type: "calculation",
                    answer: 12,
                    rewardCode: "INTEGRALE",
                    description: "Calcule ∫₁⁵ 3 dx. Ce code va sur l'ordinateur du laboratoire."
                },
                puzzle: {
                    title: "📐 Tracé d'aire",
                    type: "connectDots",
                    requiredCode: "AIRE",
                    dots: [
    { id: 1, x: 125, y: 50 },
    { id: 2, x: 185, y: 38 },
    { id: 3, x: 250, y: 50 },
    { id: 4, x: 265, y: 65 },
    { id: 5, x: 240, y: 105 },
    { id: 6, x: 215, y: 150 },
    { id: 7, x: 190, y: 195 },
    { id: 8, x: 165, y: 240 },
    { id: 9, x: 145, y: 280 }
],
rewardCode: "7",
                    description: "Entre le code du microscope, puis relie les points dans l'ordre pour tracer un chiffre : ce chiffre est un code pour l'ordinateur."
                },
                
                finalQuestion: {
                    title: "🧠 Énigme de synthèse",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    rewardCode: "RIEMANN",
                    description: "Réussis 1 question pour obtenir un code destiné à l'ordinateur du laboratoire."
                }
            }
        },

        30: {
            title: "Intégrale Définie : Protocole Intermédiaire",
            intro: "Lis le tableau d'affichage et résous le cahier pour obtenir le code d'entrée au laboratoire.",
            room1: {
                notice: {
                    title: "📌 Tableau d'affichage",
                    type: "clue",
                    description: "Relation de Chasles : ∫ₐᶜ f(x)dx = ∫ₐᵇ f(x)dx + ∫ᵦᶜ f(x)dx. Au laboratoire, allume les voyants par valeur croissante de ∫₀ᵏ 2x dx : Rouge (k=0), Bleu (k=1), Jaune (k=2), Vert (k=3)."
                },
                notebook: {
                    title: "📓 Cahier d'entrée",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "SEGMENT",
                    description: "Réussis 2 questions pour obtenir le code de la porte du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "SEGMENT",
                    description: "Entre le code délivré par le cahier d'entrée."
                },
                doorExit: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "LEBESGUE",
                    description: "Nécessite le badge du tiroir et le code final obtenu dans la salle d'analyse."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Consignes du laboratoire",
                    type: "clue",
                    description: "L'ordinateur débloque le tiroir (qui donne le badge). Le coffre des bornes débloque le calcul d'intégrale en salle d'analyse. Le microscope ouvre la porte de la salle d'analyse."
                },
                board: {
                    title: "📌 Tableau des initiales",
                    type: "clue",
                    description: "Mots clés : Courbe — Homogénéité — Aire — Somme — Linéarité — Encadrement — Surface."
                },
                safe: {
                    title: "🔐 Coffre des bornes (croissant)",
                    type: "colors",
                    sequence: ["red", "blue", "yellow", "green"],
                    rewardCode: "BORNES",
                    description: "Allume les voyants par valeur croissante (0, 1, 4, 9) pour obtenir le code du calcul d'intégrale."
                },
                computer: {
                    title: "💻 Ordinateur central",
                    type: "password",
                    password: "CHASLES",
                    rewardCode: "LINEARITE",
                    description: "Entre le nom de 7 lettres formé à partir du tableau pour débloquer le tiroir."
                },
                drawer: {
                    title: "🗄️ Tiroir sécurisé",
                    type: "code",
                    requiredCode: "LINEARITE",
                    reward: "badge",
                    description: "Entre le code donné par l'ordinateur central pour récupérer le badge de sortie."
                },
                microscope: {
                    title: "🔬 Microscope numérique",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "POSITIVITE",
                    description: "Réussis 2 questions pour obtenir le code d'ouverture de la salle d'analyse."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "POSITIVITE",
                    description: "Entre le code délivré par le microscope numérique."
                }
            },
            room3: {
                note: {
                    title: "📝 Intégrale de x²",
                    type: "calculation",
                    answer: 9,
                    requiredCode: "BORNES",
                    rewardCode: "INT9",
                    description: "Entre le code des bornes du laboratoire, puis calcule ∫₀³ x² dx afin d'obtenir la 1re clé."
                },
                puzzle: {
                    title: "🔵 Digicode des suites",
                    type: "pattern",
                    pattern: [0, 3, 6, 7, 8, 5, 2],
                    rewardCode: "MOYENNE",
                    description: "Trace sur la grille la lettre utilisée couramment pour désigner une suite afin d'obtenir la 2e clé."
                },
                finalQuestion: {
                    title: "🧠 Épreuve finale d'intégration",
                    type: "question",
                    requiredCode: ["INT9", "MOYENNE"],
                    requiredCorrectAnswers: 2,
                    rewardCode: "LEBESGUE",
                    description: "Réunis les deux clés de cette salle et réussis 2 questions pour obtenir le code de sortie."
                }
            }
        },

        45: {
            title: "Méthodes d'Intégration : Protocole Complet",
            intro: "Observe les indices du hall pour orienter la serrure directionnelle et déverrouiller le cahier.",
            room1: {
                notice: {
                    title: "📌 Tableau de valeur moyenne",
                    type: "clue",
                    description: "« Pour encadrer l'aire sous la courbe, plonge d'abord vers la borne inférieure, longe l'axe des abscisses vers la droite, remonte jusqu'au plafond de la fonction, puis reviens fermer le rectangle vers l'origine. »"
                },
                archive: {
                    title: "📄 Message codé",
                    type: "clue",
                    description: "Texte intercepté : QSJNJUJWF."
                },
                encryptedNote: {
                    title: "✉️ Mémo d'accès",
                    type: "clue",
                    description: "Le code de la serrure directionnelle est nécessaire pour déverrouiller le cahier du professeur."
                },
                directionalLock: {
                    title: "🔒 Serrure directionnelle",
                    type: "directional",
                    sequence: ["down", "right", "up", "left"],
                    rewardCode: "MOY",
                    description: "Trace le contour du rectangle décrit sur le tableau pour débloquer le cahier."
                },
                notebook: {
                    title: "📓 Cahier du professeur",
                    type: "question",
                    requiredCode: "MOY",
                    requiredCorrectAnswers: 3,
                    rewardCode: "PRIMITIVE30",
                    description: "Entre le code de la serrure et réussis 3 questions. Ce code ouvre le laboratoire, l'ordinateur et le coffre."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "PRIMITIVE30",
                    description: "Entre le code délivré par le cahier du professeur."
                },
                doorExit: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "CAUCHY",
                    description: "Nécessite le badge du tiroir et le code final obtenu dans la salle d'analyse."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Protocole du laboratoire",
                    type: "clue",
                    description: "1) L'ordinateur demande le code du cahier du hall puis le mot décodé. 2) Le coffre s'ouvre avec le code du cahier du hall pour donner la clé du tiroir. 3) Le microscope ouvre la salle d'analyse."
                },
                coordinateNote: {
                    title: "📄 Préparation salle d'analyse",
                    type: "clue",
                    description: "En salle d'analyse, la fiche de calcul attend la valeur de ∫₀⁴ 5 dx."
                },
                board: {
                    title: "📌 Aire sous une courbe",
                    type: "clue",
                    description: "Lorsque f ≥ 0 sur [a ; b], l'intégrale correspond à l'aire du domaine sous la courbe."
                },
                computer: {
                    title: "💻 Ordinateur",
                    type: "password",
                    password: "PRIMITIVE",
                    requiredCode: "PRIMITIVE30",
                    rewardCode: "TRAPEZE",
                    description: "Entre le code du cahier du hall, puis saisis le mot de 9 lettres du message codé en reculant chaque lettre d'un rang dans l'alphabet (B → A)."
                },
                microscope: {
                    title: "🔬 Microscope numérique",
                    type: "question",
                    requiredCode: "TRAPEZE",
                    requiredCorrectAnswers: 3,
                    rewardCode: "QUADRATURE",
                    description: "Entre le code de l'ordinateur et réussis 3 questions pour obtenir le code de la salle d'analyse."
                },
                safe: {
                    title: "🔐 Coffre",
                    type: "code",
                    code: "PRIMITIVE30",
                    reward: "key",
                    description: "Entre le code du cahier du hall pour libérer la clé du tiroir."
                },
                drawer: {
                    title: "🗄️ Tiroir verrouillé",
                    type: "item",
                    requiredItem: "key",
                    reward: "badge",
                    description: "Ouvre avec la clé du coffre pour récupérer le badge de sortie."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "QUADRATURE",
                    description: "Entre le code délivré par le microscope numérique."
                }
            },
            room3: {
                note: {
                    title: "📝 Calcul d'aire simple",
                    type: "calculation",
                    answer: 20,
                    rewardCode: "AIRE20",
                    description: "Le code indiqué sur la feuille de la salle précédente débloque le parcours."
                },
                puzzle: {
                    title: "🌀 Labyrinthe d'aires",
                    type: "mazeGame",
                    requiredCode: "AIRE20",
                    rewardCode: "SIMPSON",
                    description: "Entre le code du calcul, puis guide la bille jusqu'au bout pour obtenir la clé de l'épreuve finale."
                },
                finalQuestion: {
                    title: "🧠 Épreuve finale",
                    type: "question",
                    requiredCode: "SIMPSON",
                    requiredCorrectAnswers: 4,
                    rewardCode: "CAUCHY",
                    description: "Entre le code du parcours et réussis 4 questions pour obtenir le code final de sortie."
                }
            }
        }
    },

    // =====================================================================
    // CHAPITRE 4 : ÉQUATIONS DIFFÉRENTIELLES
    // =====================================================================
    4: {
        15: {
            title: "Équations Différentielles : Parcours Express",
            intro: "Lis le tableau d'affichage et valide le cahier pour entrer dans le laboratoire.",
            room1: {
                notice: {
                    title: "📌 Tableau d'affichage",
                    type: "clue",
                    description: "Les solutions de y' = a·y sont de la forme x ↦ C·e^(ax). Pour C = 3 et a = 2, la valeur en 0 ouvre le coffre du laboratoire. La porte de sortie attend le code final donné par l'ordinateur."
                },
                notebook: {
                    title: "📓 Cahier d'entrée",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    reward: "badge",
                    description: "Réussis 1 question sur les équations différentielles pour obtenir le badge du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredItem: "badge",
                    useBadgeReader: true,
                    description: "Passe ton badge sur le lecteur pour entrer au laboratoire."
                },
                doorExit: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredCode: "LAPLACE",
                    description: "Entre le code final généré par l'ordinateur du laboratoire."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Plan de progression (Labo)",
                    type: "clue",
                    description: "1) Ouvre le coffre avec la condition initiale du tableau pour avoir la clé du tiroir. 2) Le tiroir donne le code de la salle d'analyse. 3) Les fiches donnent le code du microscope. 4) Le microscope débloque le tracé et l'expérience en salle d'analyse. 5) L'ordinateur assemble les 4 codes de la salle d'analyse pour ouvrir la sortie."
                },
                safe: {
                    title: "🔐 Coffre du laboratoire",
                    type: "code",
                    code: "3",
                    reward: "key",
                    description: "Saisis la valeur en x = 0 indiquée sur le tableau du hall pour obtenir la clé du tiroir."
                },
                drawer: {
                    title: "🗄️ Tiroir à codes",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "HOMOGENE",
                    description: "Ouvre avec la clé du coffre pour obtenir le code de la porte de la salle d'analyse."
                },
                matchingBoard: {
                    title: "🃏 Fiches d'équations différentielles",
                    type: "matching",
                    rewardCode: "CONSTANTE",
                    description: "Associe chaque élément à sa signification pour obtenir le code du microscope.",
                    prompt: "Associe chaque élément à sa signification :",
                    buttonLabel: "Vérifier les associations",
                    successTitle: "✅ Associations correctes !",
                    errorTitle: "❌ Certaines associations sont incorrectes.",
                    reminder: "Rappel : y' est la dérivée, y(0) fixe la constante d'intégration, et y' = a·y + b admet un second membre.",
                    options: [
                        { value: "derivee_y", label: "Dérivée de la fonction inconnue y" },
                        { value: "cond_init", label: "Condition initiale déterminant la constante" },
                        { value: "second_membre", label: "Terme constant ajoutant une solution particulière" }
                    ],
                    items: [
                        { id: "yp", label: "y'", expected: "derivee_y" },
                        { id: "y0", label: "y(0)", expected: "cond_init" },
                        { id: "b_term", label: "b dans y' = a·y + b", expected: "second_membre" }
                    ]
                },
                microscope: {
                    title: "🔬 Microscope d'analyse",
                    type: "question",
                    requiredCode: "CONSTANTE",
                    requiredCorrectAnswers: 1,
                    rewardCode: "COURBE",
                    description: "Entre le code des fiches, puis réussis 1 question pour débloquer le tracé et l'expérience en salle d'analyse."
                },
                computer: {
                    title: "💻 Ordinateur de synthèse",
                    type: "code",
                    requiredCode: ["FLUX", "SOLUTION", "3"],
                    rewardCode: "LAPLACE",
                    description: "Saisis les 3 codes obtenus en salle d'analyse pour débloquer le code de sortie."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "HOMOGENE",
                    description: "Entre le code récupéré dans le tiroir du laboratoire."
                }
            },
            room3: {
                note: {
                    title: "📝 Condition initiale",
                    type: "calculation",
                    answer: 5,
                    rewardCode: "SOLUTION",
                    description: "Pour f(x) = 5·e^(-3x), calcule f(0). Ce code va sur l'ordinateur du laboratoire."
                },
                puzzle: {
                    title: "📈 Tracé de points",
                    type: "connectDots",
                    requiredCode: "COURBE",
                dots: [
    { id: 1,  x: 125, y: 50 },
    { id: 2,  x: 190, y: 38 },
    { id: 3,  x: 250, y: 65 },
    { id: 4,  x: 262, y: 110 },
    { id: 5,  x: 222, y: 145 },
    { id: 6,  x: 170, y: 150 },
    { id: 7,  x: 230, y: 185 },
    { id: 8,  x: 265, y: 225 },
    { id: 9,  x: 240, y: 268 },
    { id: 10, x: 185, y: 282 },
    { id: 11, x: 125, y: 262 }
],
rewardCode: "3",
                    description: "Entre le code du microscope, puis relie les points dans l'ordre pour tracer un chiffre : ce chiffre est un code pour l'ordinateur."
                },
                
                finalQuestion: {
                    title: "🧠 Énigme de synthèse",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    rewardCode: "FLUX",
                    description: "Réussis 1 question pour obtenir un code destiné à l'ordinateur du laboratoire."
                }
            }
        },

        30: {
            title: "Second Membre : Protocole Intermédiaire",
            intro: "Lis le tableau d'affichage et résous le cahier pour obtenir le code d'entrée au laboratoire.",
            room1: {
                notice: {
                    title: "📌 Tableau d'affichage",
                    type: "clue",
                    description: "Pour y' = a·y + b (avec a ≠ 0), une solution constante vaut −b/a. Au laboratoire, allume les voyants par valeur initiale croissante de y(0) = k : Bleu (k=1), Vert (k=2), Jaune (k=4), Rouge (k=8)."
                },
                notebook: {
                    title: "📓 Cahier d'entrée",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "EQUILIBRE",
                    description: "Réussis 2 questions pour obtenir le code de la porte du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "EQUILIBRE",
                    description: "Entre le code délivré par le cahier d'entrée."
                },
                doorExit: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "FOURIER",
                    description: "Nécessite le badge du tiroir et le code final obtenu dans la salle d'analyse."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Consignes du laboratoire",
                    type: "clue",
                    description: "L'ordinateur débloque le tiroir (qui donne le badge). Le coffre des régimes débloque le calcul de solution constante en salle d'analyse. Le microscope ouvre la porte de la salle d'analyse."
                },
                board: {
                    title: "📌 Tableau des initiales",
                    type: "clue",
                    description: "Mots clés : Constante — Asymptote — Limite — Calcul — Unité — Longueur."
                },
                safe: {
                    title: "🔐 Coffre des régimes (croissant)",
                    type: "colors",
                    sequence: ["blue", "green", "yellow", "red"],
                    rewardCode: "REGIME",
                    description: "Active les voyants par valeur initiale croissante (1, 2, 4, 8) pour obtenir le code de la solution constante."
                },
                computer: {
                    title: "💻 Ordinateur central",
                    type: "password",
                    password: "CALCUL",
                    rewardCode: "AMORTI",
                    description: "Entre le mot de 6 lettres formé à partir du tableau pour débloquer le tiroir."
                },
                drawer: {
                    title: "🗄️ Tiroir sécurisé",
                    type: "code",
                    requiredCode: "AMORTI",
                    reward: "badge",
                    description: "Entre le code donné par l'ordinateur central pour récupérer le badge de sortie."
                },
                microscope: {
                    title: "🔬 Microscope numérique",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "TRANSITOIRE",
                    description: "Réussis 2 questions pour obtenir le code d'ouverture de la salle d'analyse."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "TRANSITOIRE",
                    description: "Entre le code délivré par le microscope numérique."
                }
            },
            room3: {
                note: {
                    title: "📝 Solution constante",
                    type: "calculation",
                    answer: 6,
                    requiredCode: "REGIME",
                    rewardCode: "CONST6",
                    description: "Entre le code des régimes du laboratoire, puis donne la solution constante de y' + 2y = 12 pour obtenir la 1re clé."
                },
                puzzle: {
                    title: "🔵 Digicode différentiel",
                    type: "pattern",
                    pattern: [2, 1, 0, 3, 6, 7, 8],
                    rewardCode: "RELAXATION",
                    description: "Trace sur la grille l'initiale du premier mot du tableau de la salle 2 pour obtenir la 2e clé."
                },
                finalQuestion: {
                    title: "🧠 Épreuve finale d'équations différentielles",
                    type: "question",
                    requiredCode: ["CONST6", "RELAXATION"],
                    requiredCorrectAnswers: 2,
                    rewardCode: "FOURIER",
                    description: "Réunis les deux clés de cette salle et réussis 2 questions pour obtenir le code de sortie."
                }
            }
        },

        45 : {
            title: "Modélisation Différentielle : Protocole Complet",
            intro: "Observe les indices du hall pour orienter la serrure directionnelle et déverrouiller le cahier.",
            room1: {
                notice: {
                    title: "📌 Structure des solutions",
                    type: "clue",
                    description: "« Pour atteindre l'équilibre d'un système amorti : avance d'abord vers le futur à l'est, laisse la courbe décroître vers le bas, recule ensuite vers l'origine à l'ouest, puis remonte vers la condition initiale. »"
                },
                archive: {
                    title: "📄 Message codé",
                    type: "clue",
                    description: "Texte intercepté : FYQPOFOUJFMMF."
                },
                encryptedNote: {
                    title: "✉️ Mémo d'accès",
                    type: "clue",
                    description: "Le code de la serrure directionnelle est nécessaire pour déverrouiller le cahier du professeur."
                },
                directionalLock: {
                    title: "🔒 Serrure directionnelle",
                    type: "directional",
                    sequence: ["right", "down", "left", "up"],
                    rewardCode: "CAP",
                    description: "Reproduis la séquence d'équilibre décrite sur le tableau pour débloquer le cahier."
                },
                notebook: {
                    title: "📓 Cahier du professeur",
                    type: "question",
                    requiredCode: "CAP",
                    requiredCorrectAnswers: 3,
                    rewardCode: "PARTICULIERE",
                    description: "Entre le code de la serrure et réussis 3 questions. Ce code ouvre le laboratoire, l'ordinateur et le coffre."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "PARTICULIERE",
                    description: "Entre le code délivré par le cahier du professeur."
                },
                doorExit: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "POINCARE",
                    description: "Nécessite le badge du tiroir et le code final obtenu dans la salle d'analyse."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Protocole du laboratoire",
                    type: "clue",
                    description: "1) L'ordinateur demande le code du cahier du hall puis le mot décodé. 2) Le coffre délivre le code du contrôleur, et le tableau affiche le trajet à mémoriser pour obtenir le badge. 3) Le microscope ouvre la salle d'analyse."
                },
                coordinateNote: {
                    title: "📄 Préparation salle d'analyse",
                    type: "clue",
                    description: "En salle d'analyse, la fiche de calcul attend la solution constante de y' + 3y = 12."
                },
                board: {
                    title: "🗺️ Schéma du circuit différentiel",
                    type: "maze",
                    description: "Mémorise bien le chemin de l'entrée à la sortie : tu devras le refaire à l'aveugle sur le contrôleur du tiroir."
                },
                computer: {
                    title: "💻 Ordinateur",
                    type: "password",
                    password: "EXPONENTIELLE",
                    requiredCode: "PARTICULIERE",
                    rewardCode: "LINEAIRE",
                    description: "Entre le code du cahier du hall, puis saisis le mot de 13 lettres du message codé en reculant chaque lettre d'un rang dans l'alphabet (B → A)."
                },
                microscope: {
                    title: "🔬 Microscope numérique",
                    type: "question",
                    requiredCode: "LINEAIRE",
                    requiredCorrectAnswers: 3,
                    rewardCode: "ORBITALE",
                    description: "Entre le code de l'ordinateur et réussis 3 questions pour obtenir le code de la salle d'analyse."
                },
                safe: {
                    title: "🔐 Coffre",
                    type: "code",
                    code: "PARTICULIERE",
                    rewardCode: "TRAJET4",
                    description: "Entre le code du cahier du hall pour obtenir le code d'activation du contrôleur du tiroir."
                },
                drawer: {
                    title: "🕹️ Contrôleur du tiroir blindé",
                    type: "mazeController",
                    requiredCode: "TRAJET4",
                    reward: "badge",
                    rewardCode: "BADGE_EQUADIFF",
                    description: "Entre le code du coffre, puis reproduis de mémoire le trajet observé sur le schéma du circuit pour récupérer le badge de sortie."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "ORBITALE",
                    description: "Entre le code délivré par le microscope numérique."
                }
            },
            room3: {
                note: {
                    title: "📝 Solution particulière constante",
                    type: "calculation",
                    answer: 4,
                    rewardCode: "SOL4",
                    description: "Le code indiqué sur la feuille de la salle précédente débloque le parcours."
                },
                puzzle: {
                    title: "🌀 Parcours d'évolution",
                    type: "mazeGame",
                    requiredCode: "SOL4",
                    rewardCode: "PHASE",
                    description: "Entre le code de la solution particulière, puis guide la bille jusqu'au bout pour obtenir la clé de l'épreuve finale."
                },
                finalQuestion: {
                    title: "🧠 Épreuve finale",
                    type: "question",
                    requiredCode: "PHASE",
                    requiredCorrectAnswers: 4,
                    rewardCode: "POINCARE",
                    description: "Entre le code du parcours et réussis 4 questions pour obtenir le code final de sortie."
                }
            }
        }
    },

    // =====================================================================
    // CHAPITRE 5 : GÉOMÉTRIE ET TRIGONOMÉTRIE
    // =====================================================================
    5: {
        15: {
            title: "Trigonométrie & Angles : Parcours Express",
            intro: "Lis le tableau d'affichage et valide le cahier pour entrer dans le laboratoire.",
            room1: {
                notice: {
                    title: "📌 Tableau d'affichage",
                    type: "clue",
                    description: "Sur le cercle trigonométrique, la valeur de cos(0) ouvre le coffre du laboratoire. La porte de sortie attend le code final donné par l'ordinateur."
                },
                notebook: {
                    title: "📓 Cahier d'entrée",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    reward: "badge",
                    description: "Réussis 1 question de géométrie et trigonométrie pour obtenir le badge du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredItem: "badge",
                    useBadgeReader: true,
                    description: "Passe ton badge sur le lecteur pour entrer au laboratoire."
                },
                doorExit: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredCode: "PYTHAGORE",
                    description: "Entre le code final généré par l'ordinateur du laboratoire."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Plan de progression (Labo)",
                    type: "clue",
                    description: "1) Ouvre le coffre avec cos(0) pour avoir la clé du tiroir. 2) Le tiroir donne le code de la salle d'analyse. 3) Les fiches donnent le code du microscope. 4) Le microscope débloque le tracé géométrique et l'expérience. 5) L'ordinateur assemble les 4 codes de la salle d'analyse pour ouvrir la sortie."
                },
                safe: {
                    title: "🔐 Coffre du laboratoire",
                    type: "code",
                    code: "1",
                    reward: "key",
                    description: "Saisis la valeur de cos(0) d'après le tableau du hall pour obtenir la clé du tiroir."
                },
                drawer: {
                    title: "🗄️ Tiroir à codes",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "RADIAN",
                    description: "Ouvre avec la clé du coffre pour obtenir le code de la porte de la salle d'analyse."
                },
                matchingBoard: {
                    title: "🃏 Fiches trigonométriques",
                    type: "matching",
                    rewardCode: "ABSCISSE5",
                    description: "Associe chaque relation à sa signification pour obtenir le code du microscope.",
                    prompt: "Associe chaque relation à sa signification :",
                    buttonLabel: "Vérifier les associations",
                    successTitle: "✅ Associations correctes !",
                    errorTitle: "❌ Certaines associations sont incorrectes.",
                    reminder: "Rappel : sur le cercle trigonométrique, cos(θ) et sin(θ) sont les coordonnées, et u · v = 0 traduit l'orthogonalité.",
                    options: [
                        { value: "ortho", label: "Condition d'orthogonalité de deux vecteurs" },
                        { value: "pyth_trigo", label: "Identité fondamentale sur le cercle trigonométrique" },
                        { value: "cos_angle", label: "Cosinus d'un angle aigu dans un triangle rectangle" }
                    ],
                    items: [
                        { id: "uv0", label: "u · v = 0", expected: "ortho" },
                        { id: "cos2sin2", label: "cos²(x) + sin²(x) = 1", expected: "pyth_trigo" },
                        { id: "adj_hyp", label: "Côté adjacent / Hypoténuse", expected: "cos_angle" }
                    ]
                },
                microscope: {
                    title: "🔬 Microscope d'analyse",
                    type: "question",
                    requiredCode: "ABSCISSE5",
                    requiredCorrectAnswers: 1,
                    rewardCode: "GEO",
                    description: "Entre le code des fiches, puis réussis 1 question pour débloquer le tracé géométrique et l'expérience en salle d'analyse."
                },
                computer: {
                    title: "💻 Ordinateur de synthèse",
                    type: "code",
                    requiredCode: ["8", "ANGLE", "TRIGO"],
                    rewardCode: "PYTHAGORE",
                    description: "Saisis les 3 codes obtenus en salle d'analyse pour débloquer le code de sortie."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "RADIAN",
                    description: "Entre le code récupéré dans le tiroir du laboratoire."
                }
            },
            room3: {
                note: {
                    title: "📝 Somme des angles",
                    type: "calculation",
                    answer: 180,
                    rewardCode: "ANGLE",
                    description: "Quelle est la somme (en degrés) des trois angles d'un triangle ? Ce code va sur l'ordinateur du laboratoire."
                },
                puzzle: {
                    title: "📐 Tracé géométrique",
                    type: "connectDots",
                    requiredCode: "GEO",
                  dots: [
    { id: 1,  x: 200, y: 40 },
    { id: 2,  x: 245, y: 62 },
    { id: 3,  x: 245, y: 110 },
    { id: 4,  x: 190, y: 150 },
    { id: 5,  x: 150, y: 190 },
    { id: 6,  x: 150, y: 240 },
    { id: 7,  x: 200, y: 265 },
    { id: 8,  x: 250, y: 240 },
    { id: 9,  x: 250, y: 190 },
    { id: 10, x: 210, y: 150 },
    { id: 11, x: 150, y: 110 },
    { id: 12, x: 155, y: 62 },
    { id: 13,  x: 203, y: 38 },
],
rewardCode: "8",
                    description: "Entre le code du microscope, puis relie les points dans l'ordre pour tracer un chiffre : ce chiffre est un code pour l'ordinateur."
                },
                
                finalQuestion: {
                    title: "🧠 Énigme de synthèse",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    rewardCode: "TRIGO",
                    description: "Réussis 1 question pour obtenir un code destiné à l'ordinateur du laboratoire."
                }
            }
        },

        30: {
            title: "Produit Scalaire & Repères : Protocole Intermédiaire",
            intro: "Lis le tableau d'affichage et résous le cahier pour obtenir le code d'entrée au laboratoire.",
            room1: {
                notice: {
                    title: "📌 Tableau d'affichage",
                    type: "clue",
                    description: "Deux vecteurs non nuls sont orthogonaux si et seulement si u · v = 0. Au laboratoire, allume les voyants par angle croissant : Bleu (0), Vert (π/6), Rouge (π/4), Jaune (π/2)."
                },
                notebook: {
                    title: "📓 Cahier d'entrée",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "ORTHOGONAL",
                    description: "Réussis 2 questions pour obtenir le code de la porte du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "ORTHOGONAL",
                    description: "Entre le code délivré par le cahier d'entrée."
                },
                doorExit: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "THALES",
                    description: "Nécessite le badge du tiroir et le code final obtenu dans la salle d'analyse."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Consignes du laboratoire",
                    type: "clue",
                    description: "L'ordinateur débloque le tiroir (qui donne le badge). Le coffre des angles débloque le calcul de produit scalaire en salle d'analyse. Le microscope ouvre la porte de la salle d'analyse."
                },
                board: {
                    title: "📌 Tableau des initiales",
                    type: "clue",
                    description: "Mots clés : Cercle — Orthonormé — Scalaire — Isométrie — Norme — Unitaire — Sinus."
                },
                safe: {
                    title: "🔐 Coffre des angles (croissant)",
                    type: "colors",
                    sequence: ["blue", "green", "red", "yellow"],
                    rewardCode: "ANGLES",
                    description: "Active les voyants par angle croissant (0, π/6, π/4, π/2) pour obtenir le code du produit scalaire."
                },
                computer: {
                    title: "💻 Ordinateur central",
                    type: "password",
                    password: "COSINUS",
                    rewardCode: "PROJECTION",
                    description: "Entre le mot de 7 lettres formé à partir du tableau pour débloquer le tiroir."
                },
                drawer: {
                    title: "🗄️ Tiroir sécurisé",
                    type: "code",
                    requiredCode: "PROJECTION",
                    reward: "badge",
                    description: "Entre le code donné par l'ordinateur central pour récupérer le badge de sortie."
                },
                microscope: {
                    title: "🔬 Microscope numérique",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "NORME",
                    description: "Réussis 2 questions pour obtenir le code d'ouverture de la salle d'analyse."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "NORME",
                    description: "Entre le code délivré par le microscope numérique."
                }
            },
            room3: {
                note: {
                    title: "📝 Produit scalaire",
                    type: "calculation",
                    answer: 14,
                    requiredCode: "ANGLES",
                    rewardCode: "SCAL14",
                    description: "Entre le code des angles du laboratoire, puis calcule u · v = x·x' + y·y' pour u(2 ; 3) et v(4 ; 2) afin d'obtenir la 1re clé."
                },
                puzzle: {
                    title: "🔵 Digicode trigonométrique",
                    type: "pattern",
                    pattern: [6, 3, 0, 4, 2, 5, 8],
                    rewardCode: "REPERE",
                    description: "Trace sur la grille l'initiale de la matière révisée en ce moment pour obtenir la 2e clé."
                },
                finalQuestion: {
                    title: "🧠 Épreuve finale de géométrie",
                    type: "question",
                    requiredCode: ["SCAL14", "REPERE"],
                    requiredCorrectAnswers: 2,
                    rewardCode: "THALES",
                    description: "Réunis les deux clés de cette salle et réussis 2 questions pour obtenir le code de sortie."
                }
            }
        },

        45 : {
            title: "Géométrie & Trigonométrie : Protocole Complet",
            intro: "Observe les indices du hall pour orienter la serrure directionnelle et déverrouiller le cahier.",
            room1: {
                notice: {
                    title: "📌 Cercle des quatre quadrants",
                    type: "clue",
                    description: "« Sur le cercle trigonométrique, pars de π/2 au zénith, tourne dans le sens direct vers π, descends jusqu'à 3π/2 au nadir, puis rejoins 0 à l'horizon. »"
                },
                archive: {
                    title: "📄 Message codé",
                    type: "clue",
                    description: "Texte intercepté : WFDJFVS."
                },
                encryptedNote: {
                    title: "✉️ Mémo d'accès",
                    type: "clue",
                    description: "Le code de la serrure directionnelle est nécessaire pour déverrouiller le cahier du professeur."
                },
                directionalLock: {
                    title: "🔒 Serrure directionnelle",
                    type: "directional",
                    sequence: ["up", "left", "down", "right"],
                    rewardCode: "ORDRE",
                    description: "Reproduis la rotation directe sur le cercle décrite par l'indice pour débloquer le cahier."
                },
                notebook: {
                    title: "📓 Cahier du professeur",
                    type: "question",
                    requiredCode: "ORDRE",
                    requiredCorrectAnswers: 3,
                    rewardCode: "CERCLE",
                    description: "Entre le code de la serrure et réussis 3 questions. Ce code ouvre le laboratoire, l'ordinateur et le coffre."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "CERCLE",
                    description: "Entre le code délivré par le cahier du professeur."
                },
                doorExit: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "EUCLIDE",
                    description: "Nécessite le badge du tiroir et le code final obtenu dans la salle d'analyse."
                }
            },
            room2: {
                securitySheet: {
                    title: "📋 Protocole du laboratoire",
                    type: "clue",
                    description: "1) L'ordinateur demande le code du cahier du hall puis le mot décodé. 2) Le coffre délivre le code du contrôleur, et le tableau affiche le repère à mémoriser pour obtenir le badge. 3) Le microscope ouvre la salle d'analyse."
                },
                coordinateNote: {
                    title: "📄 Préparation salle d'analyse",
                    type: "clue",
                    description: "En salle d'analyse, la fiche de calcul attend la norme du vecteur u(3 ; 4)."
                },
                board: {
                    title: "🗺️ Plan du repère orthonormé",
                    type: "maze",
                    description: "Mémorise bien le chemin de l'entrée à la sortie : tu devras le refaire à l'aveugle sur le contrôleur du tiroir."
                },
                computer: {
                    title: "💻 Ordinateur",
                    type: "password",
                    password: "VECTEUR",
                    requiredCode: "CERCLE",
                    rewardCode: "SINUS",
                    description: "Entre le code du cahier du hall, puis saisis le mot de 7 lettres du message codé en reculant chaque lettre d'un rang dans l'alphabet (B → A)."
                },
                microscope: {
                    title: "🔬 Microscope numérique",
                    type: "question",
                    requiredCode: "SINUS",
                    requiredCorrectAnswers: 3,
                    rewardCode: "TANGENTE30",
                    description: "Entre le code de l'ordinateur et réussis 3 questions pour obtenir le code de la salle d'analyse."
                },
                safe: {
                    title: "🔐 Coffre",
                    type: "code",
                    code: "CERCLE",
                    rewardCode: "REPERAGE5",
                    description: "Entre le code du cahier du hall pour obtenir le code d'activation du contrôleur du tiroir."
                },
                drawer: {
                    title: "🕹️ Contrôleur du tiroir blindé",
                    type: "mazeController",
                    requiredCode: "REPERAGE5",
                    reward: "badge",
                    rewardCode: "BADGE_TRIGO",
                    description: "Entre le code du coffre, puis reproduis de mémoire le trajet observé sur le plan du repère pour récupérer le badge de sortie."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "TANGENTE30",
                    description: "Entre le code délivré par le microscope numérique."
                }
            },
            room3: {
                note: {
                    title: "📝 Norme d'un vecteur",
                    type: "calculation",
                    answer: 5,
                    rewardCode: "NORME5",
                    description: "Le code indiqué sur la feuille de note de la salle précédente débloque le parcours."
                },
                puzzle: {
                    title: "🌀 Labyrinthe géométrique",
                    type: "mazeGame",
                    requiredCode: "NORME5",
                    rewardCode: "COLLINEAIRE",
                    description: "Entre le code de la norme, puis guide la bille jusqu'au bout pour obtenir la clé de l'épreuve finale."
                },
                finalQuestion: {
                    title: "🧠 Épreuve finale",
                    type: "question",
                    requiredCode: "COLLINEAIRE",
                    requiredCorrectAnswers: 4,
                    rewardCode: "EUCLIDE",
                    description: "Entre le code du labyrinthe et réussis 4 questions pour obtenir le code final de sortie."
                }
            }
        }}}
        
    const story = STORIES_CLEAN[level][duration];
    const buildRoomObjects = (roomObjs, roomZones) => {
        const res = {};
        for (const [key, obj] of Object.entries(roomObjs)) {
            res[key] = {
                ...obj,
                questionSubject: "maths",
                hotspot: roomZones[key] ? { ...roomZones[key] } : undefined
            };
        }
        return res;
    };

    return {
        entrance: {
            title: `${story.title} — Hall`,
            description: story.intro,
            background: visuals.entrance.background,
            aspectRatio: "16 / 9",
            objects: buildRoomObjects(story.room1, visuals.entrance.zones)
        },
        lab: {
            title: `${story.title} — Laboratoire`,
            description: "Utilise chaque code au bon endroit pour ouvrir la salle d'analyse.",
            background: visuals.lab.background,
            aspectRatio: "16 / 9",
            objects: buildRoomObjects(story.room2, visuals.lab.zones)
        },
        analysis: {
            title: `${story.title} — Salle d'analyse`,
            description: "Dernière étape avant de débloquer la porte de sortie.",
            background: visuals.analysis.background,
            aspectRatio: "16 / 9",
            objects: buildRoomObjects(story.room3, visuals.analysis.zones)
        }
    };
}
/* =========================================================
   APPLICATION AUTOMATIQUE DES IMAGES
   ========================================================= */

function applyMathsTimeScenario(rooms, duration) {
    const visuals = MATHS_ROOM_VISUALS[duration];
    console.log("Durée sélectionnée :", duration);
console.log("Image salle finale :", rooms.analysis.background);

    if (!visuals) {
        console.error("Durée Maths inconnue :", duration);
        return;
    }

    for (const [roomKey, visual] of Object.entries(visuals)) {
        const room = rooms[roomKey];

        if (!room) {
            console.warn("Salle Maths introuvable :", roomKey);
            continue;
        }

        // Image d'arrière-plan.
        room.background = visual.background;
        room.aspectRatio = "16 / 9";

        // Coordonnées des boutons.
        if (!room.objects) continue;

        for (const [objectKey, object] of Object.entries(room.objects)) {
            const zone = visual.zones[objectKey];

            if (zone) {
                object.hotspot = { ...zone };
            } else {
                delete object.hotspot;
            }
        }

        console.log(
            "Image Maths :",
            duration,
            roomKey,
            room.background
        );
    }
}

  
/* =========================================================
   MED-ESCAPE — IMAGES ET COORDONNÉES MATHS
   Configuration unique pour 10, 20 et 30 minutes
   ========================================================= */






const LEVEL_DURATIONS_MINUTES = {
    maths: {
        1: 15,
        2: 15,
        3: 30,
        4: 45
    },
    chimie: {
        1: 15,
        2: 15,
        3: 30,
        4: 45
    },
    boss: {
        0: 30
    }
};

function cloneRooms(rooms) {
    return JSON.parse(JSON.stringify(rooms));
}

const CHIMIE_BASE_VISUALS = {
    15: {
        entrance: {
            background: "image/chimie-10-vestiaire.png",
            zones: {
                blouse: { x: 18, y: 20, w: 12, h: 48 },
                screenBoard: { x: 35, y: 17, w: 22, h: 21 },
                corkBoard: { x: 59, y: 19, w: 14, h: 28 },
                redFolder: { x: 61, y: 70, w: 26, h: 17 },
                symbolChest: { x: 35, y: 50, w: 22, h: 20 },
                casiers: { x: 0, y: 10, w: 17, h: 60 },
                caisse: { x: 18, y: 3, w: 12, h: 15 },
                doorLab: { x: 75, y: 8, w: 22, h: 63 }
            }
        },
        lab: {
            background: "image/chimie-10-labo.png",
            zones: {
                computer: { x: 2, y: 38, w: 12, h: 20 },
                meublesousbureau: { x: 0, y: 60, w: 12, h: 27 },
                microscope: { x: 14, y: 38, w: 6, h: 16 },
                tubes: { x: 22, y: 42, w: 8, h: 12 },
                cabinet: { x: 30, y: 23, w: 11, h: 35 },
                reactor: { x: 41, y: 19, w: 18, h: 40 },
                clipboard: { x: 35, y: 60, w: 20, h: 8 },
                safe: { x: 58, y: 52, w: 12, h: 12 },
                doorAnalysis: { x: 85, y: 14, w: 14, h: 60 },
                tiroirs: { x: 25, y: 70, w: 40, h: 30 },
                postetravail: { x: 60, y: 19, w: 18, h: 30 }
            }
        },
        analysis: {
            background: "image/chimie-10-analyse.png",
            zones: {
                computer: { x: 4, y: 45, w: 12, h: 18 },
                etagere: { x: 0, y: 15, w: 19, h: 27 },
                machine: { x: 55, y: 45, w: 17, h: 15 },
                hood: { x: 26, y: 15, w: 26, h: 42 },
                tubes1: { x: 25, y: 69, w: 13, h: 15 },
                balance: { x: 33, y: 81, w: 14, h: 12 },
                notebook: { x: 52, y: 81, w: 13, h: 10 },
                finalDoor: { x: 79, y: 18, w: 19, h: 63 }
            }
        }
    },
    30: {
        entrance: {
            background: "image/chimie-20-vestiaire.png",
            zones: {
                blouse1: { x: 4, y: 22, w: 10, h: 45 },
                whiteboard: { x: 22, y: 14, w: 19, h: 33 },
                atomBoard: { x: 43, y: 11, w: 29, h: 38 },
                tableCards: { x: 14, y: 71, w: 28, h: 9 },
                doorLab: { x: 76, y: 3, w: 23, h: 86 },
                feuille1: { x: 43, y: 68, w: 13, h: 9 },
                solutionstubes: { x: 40, y: 48, w: 19, h: 15 },
                malle: { x: 59, y: 50, w: 10, h: 12 }
            }
        },
        lab: {
            background: "image/chimie-20-labo.png",
            zones: {
                symbolsBoard: { x: 3, y: 14, w: 24, h: 35 },
                atomModel: { x: 25, y: 36, w: 13, h: 25 },
                microscope: { x: 37, y: 45, w: 9, h: 24 },
                computer: { x: 44, y: 41, w: 13, h: 22 },
                safe: { x: 61, y: 54, w: 14, h: 14 },
                tiroir1: { x: 70, y: 70, w: 10, h: 30 },
                armoire: { x: 55, y: 20, w: 12, h: 32 },
                clipboard: { x: 16, y: 74, w: 17, h: 15 },
                tubes2: { x: 7, y: 53, w: 19, h: 20 },
                fichemur: { x: 71, y: 25, w: 8, h: 20 },
                doorAnalysis: { x: 80, y: 12, w: 19, h: 73 }
            }
        },
        analysis: {
            background: "image/chimie-20-analyse.png",
            zones: {
                cabinet: { x: 1, y: 6, w: 12, h: 55 },
                microscope: { x: 10, y: 39, w: 12, h: 30 },
                colorValves: { x: 62, y: 21, w: 11, h: 19 },
                balance: { x: 61, y: 45, w: 10, h: 21 },
                blackCase: { x: 1, y: 69, w: 22, h: 28 },
                finalDoor: { x: 76, y: 9, w: 19, h: 66 },
                feuille2: { x: 56, y: 65, w: 15, h: 12 },
                experience: { x: 25, y: 49, w: 35, h: 21 },
                classeurs: { x: 42, y: 32, w: 11, h: 19 },
                ordinateur: { x: 23, y: 32, w: 13, h: 20 }
            }
        }
    },
    45: {
        entrance: {
            background: "image/chimie-30-vestiaire.png",
            zones: {
                blouse: { x: 0, y: 18, w: 12, h: 50 },
                corkBoard: { x: 13, y: 13, w: 14, h: 32 },
                mazePoster: { x: 40, y: 17, w: 12, h: 24 },
                mazeConsole: { x: 41, y: 42, w: 13, h: 12 },
                symbolChest: { x: 59, y: 34, w: 17, h: 16 },
                doorLab: { x: 83, y: 5, w: 16, h: 77 },
                tableSequence: { x: 28, y: 17, w: 12, h: 26 },
                cadenasdirection: { x: 57, y: 50, w: 17, h: 16 },
                tubes4: { x: 59, y: 14, w: 17, h: 16 },
                meuble: { x: 57, y: 65, w: 17, h: 16 },
                tubes3: { x: 20, y: 43, w: 20, h: 15 },
                livre: { x: 0, y: 64, w: 35, h: 15 },
                feuille3: { x: 37, y: 69, w: 20, h: 15 }
            }
        },
        lab: {
            background: "image/chimie-30-labo.png",
            zones: {
                cabinet: { x: 1, y: 7, w: 15, h: 68 },
                colorPanels: { x: 16, y: 19, w: 16, h: 20 },
                keypad: { x: 34, y: 18, w: 8, h: 23 },
                periodicBoard: { x: 42, y: 20, w: 17, h: 22 },
                microscope: { x: 12, y: 44, w: 15, h: 34 },
                safeCase: { x: 45, y: 44, w: 13, h: 12 },
                doorAnalysis: { x: 86, y: 8, w: 13, h: 79 },
                tableauatome: { x: 60, y: 16, w: 14, h: 30 },
                feuillesecurite: { x: 75, y: 17, w: 9, h: 25 },
                coffre: { x: 58, y: 46, w: 10, h: 10 },
                ordinateur1: { x: 69, y: 44, w: 15, h: 15 },
                feuille4: { x: 37, y: 75, w: 14, h: 17 },
                ordinateur2: { x: 27, y: 40, w: 15, h: 16 }
            }
        },
        analysis: {
            background: "image/chimie-30-analyse.png",
            zones: {
                heater: { x: 20, y: 29, w: 18, h: 39 },
                balance: { x: 44, y: 47, w: 10, h: 16 },
                laptop: { x: 53, y: 44, w: 12, h: 15 },
                notebook: { x: 25, y: 71, w: 20, h: 15 },
                finalDoor: { x: 79, y: 23, w: 14, h: 45 },
                poster: { x: 37, y: 10, w: 10, h: 32 },
                hotte: { x: 62, y: 23, w: 12, h: 28 },
                blouse2: { x: 58, y: 65, w: 15, h: 40 },
                tubes5: { x: 0, y: 60, w: 20, h: 23 }
            }
        }
    }
};

function buildChimieScenario(level, duration) {
    const visuals = CHIMIE_BASE_VISUALS[duration];

    // Définition des 18 parcours uniques (6 chapitres × 3 durées)
    // Règle QCM : 10 min = 3 (1/1/1) | 20 min = 6 (2/2/2) | 30 min = 10 (3/3/4)
     const STORIES = {
    // =========================================================================
    // NIVEAU 1 : ATOMISTIQUE & CONCENTRATIONS
    // =========================================================================
    1: {
        15: {
            title: "Alerte Contamination Isotopique",
            intro: "Étape 1 : fouille la salle de départ pour obtenir un badge et un code. Étape 2 : entre au labo et ouvre la salle de contrôle. Étape 3 : rassemble les codes de la dernière salle pour activer la machine puis la sortie.",
            room1: {
                blouse: {
                    title: "🥼 Blouse du chef de labo",
                    type: "clue",
                    description: "Indice pour le digicode des casiers : « L'élément de base de la vie organique est Z = 6. Le dessin de son symbole pourrait être utile sur la grille. »"
                },
                casiers: {
                    title: "🔵 Digicode des casiers",
                    type: "pattern",
                    pattern: [2, 1, 0, 3, 6, 7, 8],
                    rewardCode: "CARB6",
                    description: "Inspire-toi de l'indice de la blouse pour tracer la forme en grand. Tu obtiendras un code utile dans la salle suivante."
                },
                redFolder: {
                    title: "📕 Dossier d'urgence",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    reward: "badge",
                    description: "Réussis 1 QCM d'atomistique pour obtenir le badge nécessaire au sas du laboratoire."
                },
                doorLab: {
                    title: "🚪 Sas du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredItem: "badge",
                    useBadgeReader: true,
                    description: "Utilise le badge obtenu avec le dossier d'urgence pour passer dans le laboratoire."
                }
            },
            room2: {
                clipboard: {
                    title: "📌 Note sur le presse-papier",
                    type: "clue",
                    description: "Repère de progression : le code de la mallette vient du digicode de la première salle ; sa clé ouvre l'armoire à réactifs, qui donne le code de la salle de contrôle."
                },
                safe: {
                    title: "🔐 Mallette blindée",
                    type: "code",
                    code: "CARB6",
                    reward: "key",
                    description: "Entre ici le code débloqué sur le digicode des casiers (salle 1) pour récupérer la clé de l'armoire à réactifs."
                },
                cabinet: {
                    title: "🗄️ Armoire à réactifs",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "DILU10",
                    description: "Nécessite la clé obtenue dans la mallette blindée. Elle délivre le code d'accès à la salle de contrôle."
                },
                reactor: {
                    title: "⚗️ Réacteur de dilution",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    rewardCode: "NEUT12",
                    description: "Réussis 1 QCM sur les concentrations pour obtenir un code qui servira dans la dernière salle."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle de contrôle",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "DILU10",
                    description: "Entre le code trouvé dans l'armoire à réactifs (après avoir ouvert la mallette) pour entrer dans la dernière salle."
                }
            },
            room3: {
                etagere: {
                    title: "🌀 Étagère du circuit de refroidissement",
                    type: "mazeGame",
                    requiredCode: "NEUT12",
                    rewardCode: "OUV5",
                    description: "Entre d'abord le code donné par le réacteur de dilution (salle 2), puis guide la bille sans toucher les parois. Le code obtenu servira sur la machine."
                },
                notebook: {
                    title: "📓 Carnet de paillasse",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    rewardCode: "M85",
                    description: "Réussis 1 QCM final pour obtenir un des codes attendus par la machine. Rappel : masse molaire NaCl = 58,5 g/mol."
                },
                balance: {
                    title: "⚖️ Balance de précision",
                    type: "balance",
                    targetMass: 5.85,
                    targetVol: 500,
                    rewardCode: "PURE",
                    description: "Calcule la masse à peser pour 500 mL de NaCl (M = 58,5 g/mol) à C = 0,20 mol/L. Ce calcul donne le 3e code pour la machine."
                },
                machine: {
                    title: "🔐 Machine de contrôle",
                    type: "code",
                    requiredCode: ["M85", "OUV5", "PURE"],
                    rewardCode: "FINI",
                    description: "Entre ici les 3 codes récupérés dans cette salle (étagère du circuit, carnet et balance) pour obtenir le code final de sortie."
                },
                finalDoor: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredCode: "FINI",
                    description: "Entre le code final généré par la machine de cette salle pour terminer la mission."
                }
            }
        },
        30: {
            title: "Le Coffre du Professeur Curie",
            intro: "Étape 1 : observe le tableau blanc, associe les fiches et fais les épreuves de la salle 1. Étape 2 : utilise l'ordre des flacons sur le modèle atomique puis débloque l'ordinateur et l'armoire. Étape 3 : décode les images, réussis les épreuves de la salle 3 et ouvre la porte blindée.",
            room1: {
                whiteboard: {
                    title: "📋 Tableau blanc",
                    type: "clue",
                    description: "Indice pour le modèle atomique du laboratoire : quatre flacons radioactifs sont alignés. Le Bleu ouvre la série, le Vert la clôture, et le Rouge est juste avant le Jaune."
                },
                tableCards: {
                    title: "🃏 Fiches sur la table",
                    type: "matching",
                    rewardCode: "ISOTOPE",
                    description: "Associe chaque notation à sa signification. Ce module débloque le code d'entrée du laboratoire.",
                    prompt: "Associe chaque notation à sa signification :",
                    buttonLabel: "Vérifier les associations",
                    successTitle: "✅ Associations correctes !",
                    errorTitle: "❌ Certaines associations sont incorrectes.",
                    reminder: "Rappel : une suite récurrente se définit à partir d'un terme initial et d'une relation de récurrence.",
                    options: [
                        { value: "initial", label: "Nombre de masse" },
                        { value: "recurrence", label: "Numéro atomique" },
                        { value: "general", label: "Symbole de l'atome" }
                    ],
                    items: [
                        { id: "u0", label: "A", expected: "initial" },
                        { id: "relation", label: "Z", expected: "recurrence" },
                        { id: "un", label: "X", expected: "general" }
                    ]
                },
                solutionstubes: {
                    title: "🧪 Tubes à solutions",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "MATIERE",
                    description: "Réussis 2 QCM liés aux tubes à solutions pour obtenir un code qui servira aux classeurs dans la dernière salle."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "ISOTOPE",
                    description: "Entre le code obtenu après avoir validé les fiches sur la table de la salle 1."
                }
            },
            room2: {
                fichemur: {
                    title: "📄 Fiche murale",
                    type: "clue",
                    description: "Plan du labo : le modèle atomique donne le mot de passe de l'ordinateur ; l'ordinateur donne la clé sécurisée pour l'armoire, qui ouvre la salle d'analyse."
                },
                atomModel: {
                    title: "⚛️ Modèle atomique",
                    type: "colors",
                    sequence: ["blue", "red", "yellow", "green"],
                    rewardCode: "PRISME",
                    description: "Appuie sur les couleurs dans l'ordre déduit du tableau blanc (salle 1) pour obtenir le mot de passe de l'ordinateur."
                },
                computer: {
                    title: "💻 Ordinateur du labo",
                    type: "password",
                    password: "PRISME",
                    reward: "clé sécurisée",
                    description: "Entre ici le code débloqué sur le modèle atomique pour récupérer la clé sécurisée destinée à l'armoire."
                },
                armoire: {
                    title: "🗄️ Armoire du labo",
                    type: "item",
                    requiredItem: "clé sécurisée",
                    rewardCode: "ACCESLABO",
                    description: "Nécessite la clé sécurisée donnée par l'ordinateur. Elle fournit le code d'accès à la salle d'analyse."
                },
                microscope: {
                    title: "🔬 Microscope",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "NUCLEON",
                    description: "Réussis 2 QCM au microscope pour obtenir l'un des codes demandés par la balance en salle 3."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "ACCESLABO",
                    description: "Entre le code récupéré dans l'armoire pour entrer dans la salle d'analyse."
                }
            },
            room3: {
                feuille2: {
                    title: "📄 Feuille d'archivage",
                    type: "clue",
                    description: "Indice pour la mallette noire : trace la majuscule du numéro atomique sur le digicode."
                },
                cabinet: {
                    title: "🖼️ Grille de décodage (placard)",
                    type: "clue",
                    image: "image/chimie/image code grille.png",
                    description: "Observe cette grille avec la carte chiffrée pour retrouver le code demandé par l'expérience."
                },
                microscope: {
                    title: "🖼️ Carte chiffrée (poste optique)",
                    type: "clue",
                    image: "image/chimie/image YOUPI.jpeg",
                    description: "Compare cette carte avec la grille de décodage pour déchiffrer le code de l'expérience."
                },
                experience: {
                    title: "🎯 Expérience de projection",
                    type: "game",
                    requiredCode: "YOUPI",
                    rewardCode: "PROJECTION",
                    description: "Entre le code obtenu en croisant les deux images, puis réussis l'expérience pour obtenir un code pour la balance."
                },
                blackCase: {
                    title: "🔵 Digicode de la mallette noire",
                    type: "pattern",
                    pattern: [0, 1, 2, 4, 6, 7, 8],
                    rewardCode: "Lettre dessinée = Code pour la balance de précision",
                    description: "Trace la lettre indiquée par la feuille d'archivage pour obtenir le code attendu par la balance."
                },
                classeurs: {
                    title: "📚 Classeurs de dosage",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    requiredCode: "MATIERE",
                    reward: "badge",
                    description: "Entre d'abord le code des tubes à solutions (salle 1), puis réussis 2 QCM pour obtenir le badge de sortie."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 18.0,
                    targetVol: 250,
                    requiredCode: ["PROJECTION", "NUCLEON", "Z"],
                    rewardCode: "GLUCOSE",
                    description: "Entre les codes venus de l'expérience, du microscope (salle 2) et de la mallette noire, puis prépare 250 mL de glucose (M = 180 g/mol) à 0,40 mol/L."
                },
                finalDoor: {
                    title: "🚪 Porte blindée",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "GLUCOSE",
                    description: "Présente le badge des classeurs et entre le code donné par la balance pour sortir."
                }
            }
        },
        45: {
            title: "Protocole Oméga : Le Réacteur Perdu",
            intro: "Étape 1 : décode les directions et les couleurs en salle 1 pour obtenir une clé et passer au labo. Étape 2 : utilise l'énigme des couleurs sur les panneaux de couleur, ouvre le coffret et l'armoire pour le badge. Étape 3 : enchaîne puzzle, poster, carnet, ordinateur et balance pour ouvrir la porte finale.",
            room1: {
                corkBoard: {
                    title: "📌 Panneau en liège",
                    type: "clue",
                    description: "Indice pour le cadenas directionnel : 1er à Gauche ; 2e opposé du Haut ; 3e vers l'Est ; 4e opposé du 2e."
                },
                blouse: {
                    title: "🥼 Blouse du chercheur",
                    type: "clue",
                    description: "Indice pour les panneaux de couleur du laboratoire : 5 propositions pour une suite de 4 couleurs distinctes. Prop. 1 : Jaune - Vert - Rouge - Bleu (1 bien placée, 2 mal placées). Prop. 2 : Rouge - Jaune - Bleu - Vert (0 bien placée, 3 mal placées). Prop. 3 : Vert - Bleu - Jaune - Rouge (0 bien placée, 2 mal placées). Prop. 4 : Bleu - Rouge - Vert - Jaune (0 bien placée, 4 mal placées). Prop. 5 : Jaune - Bleu - Vert - Rouge (2 bien placées, 1 mal placée)."
                },
                cadenasdirection: {
                    title: "🔒 Cadenas directionnel",
                    type: "directional",
                    sequence: ["left", "down", "right", "up"],
                    reward: "key",
                    description: "Actionne les 4 directions déduites du panneau en liège pour récupérer la clé du meuble."
                },
                meuble: {
                    title: "🗄️ Meuble",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "PORTAIL",
                    description: "Ouvre avec la clé du cadenas directionnel pour obtenir le code d'entrée au laboratoire."
                },
                livre: {
                    title: "📖 Livre d'atomistique",
                    type: "question",
                    requiredCorrectAnswers: 3,
                    rewardCode: "ATOMISTIQUE",
                    description: "Réussis 3 QCM du livre pour obtenir le code qui déverrouille le puzzle des tubes en salle 3."
                },
                doorLab: {
                    title: "🚪 Sas du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "PORTAIL",
                    description: "Entre le code trouvé dans le meuble pour accéder au laboratoire."
                }
            },
            room2: {
                feuillesecurite: {
                    title: "📄 Feuille de sécurité",
                    type: "clue",
                    description: "Repère du labo : les panneaux de couleur donnent le code du coffret ; la clé du coffret ouvre l'armoire (qui contient le badge)."
                },
                colorPanels: {
                    title: "🎨 Panneaux de couleur",
                    type: "colors",
                    sequence: ["red", "green", "blue", "yellow"],
                    rewardCode: "SPECTRE",
                    description: "Résous l'énigme des 5 propositions laissée sur la blouse (salle 1) et active les couleurs dans l'ordre pour obtenir le code du coffret."
                },
                safeCase: {
                    title: "🔐 Coffret à code",
                    type: "code",
                    code: "SPECTRE",
                    reward: "key",
                    description: "Entre le code fourni par les panneaux de couleur pour récupérer la clé de l'armoire."
                },
                cabinet: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "key",
                    reward: "badge",
                    description: "Utilise la clé du coffret pour récupérer le badge indispensable à la sortie."
                },
                microscope: {
                    title: "🔬 Microscope",
                    type: "question",
                    requiredCorrectAnswers: 3,
                    rewardCode: "CONCENTRE",
                    description: "Réussis 3 QCM au microscope pour obtenir le code de la porte de la salle d'analyse."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "CONCENTRE",
                    description: "Entre le code débloqué par le microscope pour entrer dans la salle d'analyse."
                }
            },
            room3: {
                tubes5: {
                    title: "🧩 Puzzle des 5 tubes",
                    type: "puzzle",
                    image: "image/chimie_concentrations.png",
                    requiredCode: "ATOMISTIQUE",
                    rewardCode: "Le code est la bonne réponse du QCM",
                    description: "Entre le code du livre d'atomistique (salle 1), puis assemble le puzzle. Le code obtenu servira sur le poster."
                },
                poster: {
                    title: "🌀 Poster du circuit",
                    type: "mazeGame",
                    requiredCode: "C",
                    rewardCode: "CIRCUIT",
                    description: "Entre le code issu du puzzle des 5 tubes, puis traverse le circuit sur le poster pour obtenir le code du carnet."
                },
                notebook: {
                    title: "📓 Carnet de calcul",
                    type: "calculation",
                    answer: 20,
                    requiredCode: "CIRCUIT",
                    rewardCode: "CALCIUM",
                    description: "Entre le code du poster, puis calcule le nombre de neutrons pour Z = 20 et A = 40. Ce code servira sur la balance."
                },
                laptop: {
                    title: "💻 Ordinateur portable",
                    type: "question",
                    requiredCorrectAnswers: 4,
                    rewardCode: "SYNTHESE",
                    description: "Réussis 4 QCM sur l'ordinateur portable pour obtenir le second code demandé par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 4.0,
                    targetVol: 1000,
                    requiredCode: ["CALCIUM", "SYNTHESE"],
                    rewardCode: "SORTIE",
                    description: "Entre les codes du carnet et de l'ordinateur portable, puis prépare 1000 mL de NaOH (M = 40 g/mol) à 0,10 mol/L pour obtenir le code de sortie."
                },
                finalDoor: {
                    title: "🚪 Porte finale",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "SORTIE",
                    description: "Présente le badge de l'armoire et entre le code donné par la balance pour évacuer."
                }
            }
        }
    },

    // =========================================================================
    // CHAPITRE 2 : CLASSIFICATION PÉRIODIQUE
    // =========================================================================
    2: {
        15: {
            title: "Le Vol du Tableau de Mendeleïev",
            intro: "Étape 1 : repère l'élément sur l'écran et fais le QCM du dossier en salle 1. Étape 2 : utilise le code de l'écran sur la mallette, ouvre l'armoire et passe en salle d'analyse. Étape 3 : enchaîne étagère, carnet, QCM, balance et machine pour ouvrir la sortie.",
            room1: {
                corkBoard: {
                    title: "📌 Panneau en liège",
                    type: "clue",
                    description: "Indice pour l'écran : cherche l'halogène de la 3e période (colonne 17)."
                },
                screenBoard: {
                    title: "🖥️ Écran de classification",
                    type: "mendeleiev",
                    targetZ: 17,
                    targetSymbol: "Cl",
                    rewardCode: "HALOGENE",
                    description: "Sélectionne l'élément décrit sur le panneau en liège pour obtenir un code utile dans le laboratoire."
                },
                redFolder: {
                    title: "📕 Dossier rouge",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    reward: "badge",
                    description: "Réussis 1 QCM du dossier rouge pour obtenir le badge nécessaire à l'ouverture de la porte du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredItem: "badge",
                    useBadgeReader: true,
                    description: "Passe le badge obtenu avec le dossier rouge pour entrer dans le laboratoire."
                }
            },
            room2: {
                clipboard: {
                    title: "📌 Presse-papier",
                    type: "clue",
                    description: "Repère du labo : l'écran (salle 1) ouvre la mallette ; la clé de la mallette ouvre l'armoire, qui donne le code de la salle d'analyse."
                },
                safe: {
                    title: "🔐 Mallette",
                    type: "code",
                    code: "HALOGENE",
                    reward: "key",
                    description: "Entre le code obtenu sur l'écran (salle 1) pour récupérer la clé de l'armoire."
                },
                cabinet: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "PERIODE",
                    description: "Ouvre avec la clé de la mallette pour obtenir le code d'entrée en salle d'analyse."
                },
                reactor: {
                    title: "⚗️ Réacteur",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    rewardCode: "COLONNE",
                    description: "Réussis 1 QCM du réacteur pour obtenir le code qui active l'étagère en salle 3."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "PERIODE",
                    description: "Entre le code récupéré dans l'armoire pour passer en salle d'analyse."
                }
            },
            room3: {
                etagere: {
                    title: "🌀 Étagère du circuit",
                    type: "mazeGame",
                    requiredCode: "COLONNE",
                    rewardCode: "PARCOURS",
                    description: "Entre le code du réacteur (salle 2), puis guide la bille pour obtenir le code du carnet."
                },
                notebook: {
                    title: "📓 Carnet de valence",
                    type: "calculation",
                    answer: 7,
                    requiredCode: "PARCOURS",
                    rewardCode: "VALENCE",
                    description: "Entre le code de l'étagère, puis indique le nombre d'électrons de valence pour Z = 17. Ce code débloque le QCM final."
                },
                qcmFinal: {
                    title: "📘 Cahier QCM final",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    requiredCode: "VALENCE",
                    rewardCode: "FAMILLES",
                    description: "Entre le code du carnet, puis réussis 1 QCM pour obtenir le code demandé par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 5.85,
                    targetVol: 500,
                    requiredCode: "FAMILLES",
                    rewardCode: "SALINITE",
                    description: "Entre le code du cahier QCM final, puis prépare 500 mL de NaCl (M = 58,5 g/mol) à 0,20 mol/L pour obtenir le code de la machine."
                },
                machine: {
                    title: "🔐 Machine",
                    type: "code",
                    requiredCode: "SALINITE",
                    rewardCode: "MENDELEIEV",
                    description: "Entre le code donné par la balance pour générer le code final de sortie."
                },
                finalDoor: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredCode: "MENDELEIEV",
                    description: "Entre le code fourni par la machine pour terminer le chapitre."
                }
            }
        },
        30 : {
            title: "Les Archives Secrètes des Alcalins",
            intro: "Étape 1 : lis le tableau blanc, sélectionne l'alcalin sur les fiches et fais les QCM des tubes en salle 1. Étape 2 : trace le motif sur le modèle atomique, débloque l'ordinateur et l'armoire. Étape 3 : décode les images, mémorise la feuille 2, valide les épreuves et franchis la porte blindée.",
            room1: {
                whiteboard: {
                    title: "📋 Tableau blanc",
                    type: "clue",
                    description: "Indice pour l'expérience en salle 3 : Néon = Rouge, Hélium = Jaune, Argon = Vert, Krypton = Bleu. Classe-les d'abord par numéro atomique décroissant, puis inverse totalement cet ordre."
                },
                tableCards: {
                    title: "⚛️ Fiches sur la table",
                    type: "mendeleiev",
                    targetZ: 11,
                    targetSymbol: "Na",
                    rewardCode: "ALCALIN",
                    description: "Trouve le métal alcalin de la 3e période sur les fiches pour obtenir le code d'entrée au laboratoire."
                },
                solutionstubes: {
                    title: "🧪 Tubes à solutions",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "TRIALCALIN",
                    description: "Réussis 2 QCM des tubes à solutions pour obtenir un code utile aux classeurs en salle 3."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "ALCALIN",
                    description: "Entre le code obtenu sur les fiches de la salle 1 pour entrer au laboratoire."
                }
            },
            room2: {
                fichemur: {
                    title: "📄 Fiche murale",
                    type: "clue",
                    description: "Indice pour le modèle atomique : trace la majuscule du carbone (Z = 6). Le code obtenu servira sur l'ordinateur, qui donne la clé de l'armoire."
                },
                atomModel: {
                    title: "🔵 Digicode du modèle atomique",
                    type: "pattern",
                    pattern: [2, 1, 0, 3, 6, 7, 8],
                    rewardCode: "FAMILLE1",
                    description: "Dessine la lettre suggérée sur la fiche murale pour obtenir le mot de passe de l'ordinateur."
                },
                computer: {
                    title: "💻 Ordinateur",
                    type: "password",
                    password: "FAMILLE1",
                    reward: "clé sécurisée",
                    description: "Entre ici le code débloqué sur le modèle atomique pour récupérer la clé sécurisée."
                },
                armoire: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "clé sécurisée",
                    rewardCode: "ACCESANALYSE",
                    description: "Nécessite la clé sécurisée fournie par l'ordinateur. Elle donne le code de la salle d'analyse."
                },
                microscope: {
                    title: "🔬 Microscope",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "RAYON",
                    description: "Réussis 2 QCM au microscope pour obtenir l'un des codes demandés par la balance en salle 3."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "ACCESANALYSE",
                    description: "Entre le code trouvé dans l'armoire pour entrer dans la salle d'analyse."
                }
            },
            room3: {
                feuille2: {
                    title: "🗺️ Feuille 2 (plan du réseau)",
                    type: "maze",
                    description: "Mémorise bien le chemin de l'entrée à la sortie : tu devras le refaire à l'aveugle sur la mallette noire."
                },
                cabinet: {
                    title: "🖼️ Grille de décodage (placard)",
                    type: "clue",
                    image: "image/chimie/image code grille.png",
                    description: "Utilise cette grille avec le microscope pour trouver le code demandé par l'expérience."
                },
                microscope: {
                    title: "🖼️ Carte chiffrée (poste optique)",
                    type: "clue",
                    image: "image/chimie/image YOUPI.jpeg",
                    description: "Décode cette carte à l'aide de la grille de décodage pour obtenir le code de l'expérience."
                },
                experience: {
                    title: "🎛️ Expérience des gaz nobles",
                    type: "colors",
                    sequence: ["red", "yellow", "green", "blue"],
                    requiredCode: "YOUPI",
                    rewardCode: "GAZNOBLE",
                    description: "Entre le code issu des deux images, puis règle les couleurs selon l'énigme du tableau blanc (salle 1) pour obtenir un code pour la balance."
                },
                blackCase: {
                    title: "🕹️ Contrôleur de la mallette noire",
                    type: "mazeController",
                    reward: "badge",
                    rewardCode: "BADGEALCALIN",
                    description: "Reproduis de mémoire le trajet observé sur la feuille 2 pour récupérer le badge de sortie."
                },
                classeurs: {
                    title: "📚 Classeurs d'archives",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    requiredCode: "TRIALCALIN",
                    rewardCode: "ARCHIVEOK",
                    description: "Entre le code des tubes à solutions (salle 1), puis réussis 2 QCM pour obtenir le 2e code requis par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 5.85,
                    targetVol: 500,
                    requiredCode: ["GAZNOBLE", "ARCHIVEOK"],
                    rewardCode: "SORTIE20",
                    description: "Entre les codes de l'expérience et des classeurs, puis prépare 500 mL de NaCl (M = 58,5 g/mol) à 0,20 mol/L pour le code final."
                },
                finalDoor: {
                    title: "🚪 Porte blindée",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "SORTIE20",
                    description: "Présente le badge de la mallette noire et entre le code de la balance pour sortir."
                }
            }
        },
        45 : {
            title: "L'Héritage de Dmitri",
            intro: "Étape 1 : résous le cadenas directionnel, ouvre le meuble et fais les QCM du livre en salle 1. Étape 2 : utilise l'ordre des familles sur les panneaux de couleur, ouvre le coffret et l'armoire pour le badge. Étape 3 : enchaîne les 5 tubes, le poster, le carnet, l'ordinateur portable et la balance pour atteindre la porte finale.",
            room1: {
                corkBoard: {
                    title: "📌 Panneau en liège",
                    type: "clue",
                    description: "Indice pour le cadenas directionnel : 1er Nord ; 2e Est ; 3e Sud ; 4e Ouest."
                },
                blouse: {
                    title: "🥼 Blouse de Dmitri",
                    type: "clue",
                    description: "Indice pour les panneaux de couleur (salle 2) : Alcalins = Bleu, Alcalino-terreux = Jaune, Halogènes = Rouge, Gaz nobles = Vert. Parcours le tableau de la colonne 1 à la colonne 18."
                },
                cadenasdirection: {
                    title: "🔒 Cadenas directionnel",
                    type: "directional",
                    sequence: ["up", "right", "down", "left"],
                    reward: "key",
                    description: "Suis les 4 directions du panneau en liège pour récupérer la clé du meuble."
                },
                meuble: {
                    title: "🗄️ Meuble",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "SASPERIODE",
                    description: "Ouvre avec la clé du cadenas directionnel pour obtenir le code d'entrée au laboratoire."
                },
                livre: {
                    title: "📖 Livre périodique",
                    type: "question",
                    requiredCorrectAnswers: 3,
                    rewardCode: "BLOCSSP",
                    description: "Réussis 3 QCM du livre pour obtenir le code qui déverrouille les 5 tubes en salle 3."
                },
                doorLab: {
                    title: "🚪 Sas",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "SASPERIODE",
                    description: "Entre le code récupéré dans le meuble pour passer au laboratoire."
                }
            },
            room2: {
                feuillesecurite: {
                    title: "📄 Feuille de sécurité",
                    type: "clue",
                    description: "Repère du labo : les panneaux de couleur donnent le code du coffret ; la clé du coffret ouvre l'armoire pour obtenir le badge."
                },
                colorPanels: {
                    title: "🎨 Panneaux de couleur",
                    type: "colors",
                    sequence: ["blue", "yellow", "red", "green"],
                    rewardCode: "VOYANTS2",
                    description: "Active les couleurs dans l'ordre des colonnes du tableau périodique (indice sur la blouse en salle 1) pour obtenir le code du coffret."
                },
                safeCase: {
                    title: "🔐 Coffret à cadenas",
                    type: "code",
                    code: "VOYANTS2",
                    reward: "key",
                    description: "Entre le code donné par les panneaux de couleur pour récupérer la clé de l'armoire."
                },
                cabinet: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "key",
                    reward: "badge",
                    description: "Ouvre avec la clé du coffret pour récupérer le badge de sortie."
                },
                microscope: {
                    title: "🔬 Microscope",
                    type: "question",
                    requiredCorrectAnswers: 3,
                    rewardCode: "IONISATION",
                    description: "Réussis 3 QCM au microscope pour obtenir le code d'ouverture de la salle d'analyse."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "IONISATION",
                    description: "Entre le code délivré par le microscope pour entrer en salle d'analyse."
                }
            },
            room3: {
                tubes5: {
                    title: "🧩 Puzzle des 5 tubes",
                    type: "puzzle",
                    image: "image/chimie_tableau_BCD.png",
                    requiredCode: "BLOCSSP",
                    rewardCode: "Le code est les bonnes réponses de ce qcm (ex:AD)",
                    description: "Entre le code du livre périodique (salle 1), puis reconstitue le puzzle pour obtenir le code demandé par le poster."
                },
                poster: {
                    title: "🗺️ Poster du Grand Tableau",
                    type: "mendeleiev",
                    targetZ: 35,
                    targetSymbol: "Br",
                    requiredCode: "BCD",
                    rewardCode: "BROME",
                    description: "Entre le code issu du puzzle des 5 tubes, puis sélectionne Z = 35 sur le poster pour obtenir le code du carnet."
                },
                notebook: {
                    title: "📓 Carnet d'électrons de valence",
                    type: "calculation",
                    answer: 5,
                    requiredCode: "BROME",
                    rewardCode: "AZOTE15",
                    description: "Entre le code du poster, puis indique le nombre d'électrons de valence de la colonne 15. Ce code servira sur la balance."
                },
                laptop: {
                    title: "💻 Ordinateur portable",
                    type: "question",
                    requiredCorrectAnswers: 4,
                    rewardCode: "SYNTHESE2",
                    description: "Réussis 4 QCM sur l'ordinateur portable pour obtenir le second code requis par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 18.0,
                    targetVol: 250,
                    requiredCode: ["AZOTE15", "SYNTHESE2"],
                    rewardCode: "SORTIE30",
                    description: "Entre les codes du carnet et de l'ordinateur portable, puis prépare 250 mL de glucose (M = 180 g/mol) à 0,40 mol/L pour le code final."
                },
                finalDoor: {
                    title: "🚪 Porte finale",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "SORTIE30",
                    description: "Présente le badge de l'armoire et entre le code de la balance pour sortir."
                }
            }
        }
    },

    // =========================================================================
    // CHAPITRE 3 : CONFIGURATION ÉLECTRONIQUE
    // =========================================================================
    3: {
        15: {
            title: "Court-Circuit Quantique",
            intro: "Étape 1 : configure l'Azote sur l'écran et fais le QCM du dossier rouge en salle 1. Étape 2 : utilise le code de l'écran sur la mallette, ouvre l'armoire et passe en salle d'analyse. Étape 3 : enchaîne étagère, carnet, ordinateur, balance et machine pour ouvrir la sortie.",
            room1: {
                corkBoard: {
                    title: "📌 Panneau en liège",
                    type: "clue",
                    description: "Indice pour l'écran : configure l'atome d'Azote (Z = 7)."
                },
                screenBoard: {
                    title: "⚛️ Écran de configuration",
                    type: "electron",
                    element: { symbol: "N", name: "Azote", Z: 7 },
                    subshells: [{ name: "1s", electrons: 2 }, { name: "2s", electrons: 2 }, { name: "2p", electrons: 3 }],
                    rewardCode: "ORBITALE",
                    description: "Répartis les électrons de l'Azote (Z = 7) selon le panneau en liège pour obtenir un code utile dans le laboratoire."
                },
                redFolder: {
                    title: "📕 Dossier rouge",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    reward: "badge",
                    description: "Réussis 1 QCM du dossier rouge pour obtenir le badge nécessaire à l'entrée du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredItem: "badge",
                    useBadgeReader: true,
                    description: "Passe le badge obtenu avec le dossier rouge pour entrer dans le laboratoire."
                }
            },
            room2: {
                clipboard: {
                    title: "📌 Presse-papier",
                    type: "clue",
                    description: "Repère du labo : l'écran (salle 1) ouvre la mallette ; la clé de la mallette ouvre l'armoire, qui donne le code de la salle d'analyse."
                },
                safe: {
                    title: "🔐 Mallette",
                    type: "code",
                    code: "ORBITALE",
                    reward: "key",
                    description: "Entre le code obtenu sur l'écran (salle 1) pour récupérer la clé de l'armoire."
                },
                cabinet: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "COUCHE",
                    description: "Ouvre avec la clé de la mallette pour obtenir le code de la salle d'analyse."
                },
                reactor: {
                    title: "⚗️ Réacteur",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    rewardCode: "QUANTUM",
                    description: "Réussis 1 QCM du réacteur pour obtenir le code qui active l'étagère en salle 3."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "COUCHE",
                    description: "Entre le code trouvé dans l'armoire pour passer en salle d'analyse."
                }
            },
            room3: {
                etagere: {
                    title: "🌀 Étagère du circuit",
                    type: "mazeGame",
                    requiredCode: "QUANTUM",
                    rewardCode: "ONDE",
                    description: "Entre le code du réacteur (salle 2), puis guide la bille pour obtenir le code du carnet."
                },
                notebook: {
                    title: "📓 Carnet d'électrons",
                    type: "calculation",
                    answer: 6,
                    requiredCode: "ONDE",
                    rewardCode: "SOUSCOUCHE",
                    description: "Entre le code de l'étagère, puis indique le nombre maximal d'électrons d'une sous-couche p. Ce code débloque l'ordinateur."
                },
                computer: {
                    title: "📘 Ordinateur",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    requiredCode: "SOUSCOUCHE",
                    rewardCode: "REMPLISSAGE1",
                    description: "Entre le code du carnet, puis réussis 1 QCM sur l'ordinateur pour obtenir le code demandé par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 4.0,
                    targetVol: 1000,
                    requiredCode: "REMPLISSAGE1",
                    rewardCode: "EQUILIBRE",
                    description: "Entre le code de l'ordinateur, puis prépare 1000 mL de NaOH (M = 40 g/mol) à 0,10 mol/L pour obtenir le code de la machine."
                },
                machine: {
                    title: "🔐 Machine",
                    type: "code",
                    requiredCode: "EQUILIBRE",
                    rewardCode: "SORTIE31",
                    description: "Entre le code donné par la balance pour générer le code final de sortie."
                },
                finalDoor: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredCode: "SORTIE31",
                    description: "Entre le code fourni par la machine pour terminer le chapitre."
                }
            }
        },
        30: {
            title: "La Règle de Klechkowski",
            intro: "Étape 1 : lis le tableau blanc, configure le Magnésium sur les fiches et fais les QCM des tubes en salle 1. Étape 2 : trace le motif sur le modèle atomique, débloque l'ordinateur et l'armoire. Étape 3 : décode les images, mémorise la feuille 2, valide les épreuves et franchis la porte blindée.",
            room1: {
                whiteboard: {
                    title: "📋 Tableau blanc",
                    type: "clue",
                    description: "Rappel pour configurer l'atome : place au maximum deux électrons par case avec spins opposés, en remplissant d'abord séparément."
                },
                tableCards: {
                    title: "⚛️ Fiches du Magnésium",
                    type: "electron",
                    element: { symbol: "Mg", name: "Magnésium", Z: 12 },
                    subshells: [{ name: "1s", electrons: 2 }, { name: "2s", electrons: 2 }, { name: "2p", electrons: 6 }, { name: "3s", electrons: 2 }],
                    rewardCode: "MAGNESIUM",
                    description: "Configure les sous-couches du Magnésium (Z = 12) sur les fiches pour obtenir le code d'entrée au laboratoire."
                },
                solutionstubes: {
                    title: "🧪 Tubes à solutions",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "COEURVALENCE",
                    description: "Réussis 2 QCM des tubes à solutions pour obtenir un code utile aux classeurs en salle 3."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "MAGNESIUM",
                    description: "Entre le code obtenu après avoir configuré le Magnésium pour entrer au laboratoire."
                }
            },
            room2: {
                fichemur: {
                    title: "📄 Fiche murale",
                    type: "clue",
                    description: "Indice pour le modèle atomique : trace la majuscule de la couche n = 2. Le code obtenu débloque l'ordinateur, qui donne la clé de l'armoire."
                },
                atomModel: {
                    title: "🔵 Digicode du modèle atomique",
                    type: "pattern",
                    pattern: [0, 3, 6, 7, 8],
                    rewardCode: "KLECHKOWSKI",
                    description: "Dessine la lettre suggérée sur la fiche murale pour obtenir le mot de passe de l'ordinateur."
                },
                computer: {
                    title: "💻 Ordinateur",
                    type: "password",
                    password: "KLECHKOWSKI",
                    reward: "clé sécurisée",
                    description: "Entre ici le code débloqué sur le modèle atomique pour récupérer la clé sécurisée."
                },
                armoire: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "clé sécurisée",
                    rewardCode: "ACCESCONF",
                    description: "Nécessite la clé sécurisée donnée par l'ordinateur. Elle donne le code de la salle d'analyse."
                },
                microscope: {
                    title: "🔬 Microscope",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "REMPLISSAGE",
                    description: "Réussis 2 QCM au microscope pour obtenir l'un des codes demandés par la balance en salle 3."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "ACCESCONF",
                    description: "Entre le code trouvé dans l'armoire pour entrer en salle d'analyse."
                }
            },
            room3: {
                feuille2: {
                    title: "🗺️ Feuille 2 (carte des orbitales)",
                    type: "maze",
                    description: "Mémorise bien le chemin de l'électron : tu devras le refaire à l'aveugle sur la mallette noire."
                },
                cabinet: {
                    title: "🖼️ Grille de décodage (placard)",
                    type: "clue",
                    image: "image/chimie/image code grille.png",
                    description: "Croise cette grille avec le microscope pour trouver le code demandé par l'expérience."
                },
                microscope: {
                    title: "🖼️ Carte chiffrée (poste optique)",
                    type: "clue",
                    image: "image/chimie/image YOUPI.jpeg",
                    description: "Déchiffre cette carte à l'aide de la grille de décodage pour obtenir le code de l'expérience."
                },
                experience: {
                    title: "🎯 Expérience d'électrons",
                    type: "game",
                    requiredCode: "YOUPI",
                    rewardCode: "FAISCEAU",
                    description: "Entre le code issu des deux images, puis réussis l'expérience pour obtenir un des codes demandés par la balance."
                },
                blackCase: {
                    title: "🕹️ Contrôleur de la mallette noire",
                    type: "mazeController",
                    reward: "badge",
                    description: "Reproduis de mémoire le trajet observé sur la feuille 2 pour récupérer le badge de sortie."
                },
                classeurs: {
                    title: "📚 Classeurs des exceptions",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    requiredCode: "COEURVALENCE",
                    rewardCode: "EXCEPTIONS",
                    description: "Entre le code des tubes à solutions (salle 1), puis réussis 2 QCM pour obtenir un autre code requis par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 5.85,
                    targetVol: 500,
                    requiredCode: ["FAISCEAU", "REMPLISSAGE", "EXCEPTIONS"],
                    rewardCode: "SORTIE32",
                    description: "Entre les codes venus de l'expérience, du microscope (salle 2) et des classeurs, puis prépare 500 mL de NaCl (M = 58,5 g/mol) à 0,20 mol/L."
                },
                finalDoor: {
                    title: "🚪 Porte blindée",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "SORTIE32",
                    description: "Présente le badge de la mallette noire et entre le code de la balance pour sortir."
                }
            }
        },
        45 : {
            title: "L'Énigme des Métaux de Transition",
            intro: "Étape 1 : décode le cadenas directionnel et l'ordre des sous-couches en salle 1 pour obtenir une clé et passer au labo. Étape 2 : allume les panneaux de couleur selon l'ordre s, p, d, f, ouvre le coffret et l'armoire pour le badge. Étape 3 : enchaîne les 5 tubes, le poster, le carnet, l'ordinateur portable et la balance pour ouvrir la porte finale.",
            room1: {
                corkBoard: {
                    title: "📌 Panneau en liège",
                    type: "clue",
                    description: "Indice pour le cadenas directionnel : 1er Haut ; 2e opposé ; 3e comme 1er ; 4e comme 2e."
                },
                blouse: {
                    title: "🥼 Blouse quantique",
                    type: "clue",
                    description: "Indice pour les panneaux de couleur (salle 2) : s = Jaune, f = Rouge, p = Bleu, d = Vert. Classe-les selon l'ordre croissant du nombre quantique secondaire l (de l = 0 à l = 3)."
                },
                cadenasdirection: {
                    title: "🔒 Cadenas directionnel",
                    type: "directional",
                    sequence: ["up", "down", "up", "down"],
                    reward: "key",
                    description: "Suis les 4 indications du panneau en liège pour récupérer la clé du meuble."
                },
                meuble: {
                    title: "🗄️ Meuble",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "SASQUANT",
                    description: "Ouvre avec la clé du cadenas directionnel pour obtenir le code d'entrée au laboratoire."
                },
                livre: {
                    title: "📖 Livre quantique",
                    type: "question",
                    requiredCorrectAnswers: 3,
                    rewardCode: "CATIONS",
                    description: "Réussis 3 QCM du livre pour obtenir le code qui déverrouille les 5 tubes en salle 3."
                },
                doorLab: {
                    title: "🚪 Sas",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "SASQUANT",
                    description: "Entre le code récupéré dans le meuble pour passer au laboratoire."
                }
            },
            room2: {
                feuillesecurite: {
                    title: "📄 Feuille de sécurité",
                    type: "clue",
                    description: "Repère du labo : les panneaux de couleur donnent le code du coffret ; la clé du coffret ouvre l'armoire pour obtenir le badge."
                },
                colorPanels: {
                    title: "🎨 Panneaux de couleur",
                    type: "colors",
                    sequence: ["yellow", "blue", "green", "red"],
                    rewardCode: "ORBITAL4",
                    description: "Active les couleurs dans l'ordre des sous-couches s, p, d, f (indice sur la blouse en salle 1) pour obtenir le code du coffret."
                },
                safeCase: {
                    title: "🔐 Coffret à cadenas",
                    type: "code",
                    code: "ORBITAL4",
                    reward: "key",
                    description: "Entre le code fourni par les panneaux de couleur pour récupérer la clé de l'armoire."
                },
                cabinet: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "key",
                    reward: "badge",
                    description: "Ouvre avec la clé du coffret pour récupérer le badge de sortie."
                },
                microscope: {
                    title: "🔬 Microscope",
                    type: "question",
                    requiredCorrectAnswers: 3,
                    rewardCode: "METAUXD",
                    description: "Réussis 3 QCM au microscope pour obtenir le code d'ouverture de la salle d'analyse."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "METAUXD",
                    description: "Entre le code délivré par le microscope pour entrer en salle d'analyse."
                }
            },
            room3: {
                tubes5: {
                    title: "🧩 Puzzle des 5 tubes",
                    type: "puzzle",
                    image: "image/chimie_config_A.png",
                    requiredCode: "CATIONS",
                    rewardCode: "Le code est la bonne réponse de ce QCM (ex: D)",
                    description: "Entre le code du livre quantique (salle 1), puis reconstitue le puzzle pour obtenir le code demandé par le poster."
                },
                poster: {
                    title: "🌀 Poster du circuit",
                    type: "mazeGame",
                    requiredCode: "A",
                    rewardCode: "CIRCUIT33",
                    description: "Entre le code issu du puzzle des 5 tubes, puis traverse le circuit sur le poster pour obtenir le code du carnet."
                },
                notebook: {
                    title: "📓 Carnet d'électrons 3d",
                    type: "calculation",
                    answer: 9,
                    requiredCode: "CIRCUIT33",
                    rewardCode: "CUIVRE2",
                    description: "Entre le code du poster, puis calcule le nombre d'électrons 3d de Cu2+ (Z = 29, neutre [Ar] 4s1 3d10). Ce code servira sur la balance."
                },
                laptop: {
                    title: "💻 Ordinateur portable",
                    type: "question",
                    requiredCorrectAnswers: 4,
                    rewardCode: "SYNTHESE33",
                    description: "Réussis 4 QCM sur l'ordinateur portable pour obtenir le second code requis par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 4.0,
                    targetVol: 1000,
                    requiredCode: ["CUIVRE2", "SYNTHESE33"],
                    rewardCode: "SORTIE33",
                    description: "Entre les codes du carnet et de l'ordinateur portable, puis prépare 1000 mL de NaOH (M = 40 g/mol) à 0,10 mol/L pour le code final."
                },
                finalDoor: {
                    title: "🚪 Porte finale",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "SORTIE33",
                    description: "Présente le badge de l'armoire et entre le code de la balance pour sortir."
                }
            }
        }
    },

    // =========================================================================
    // CHAPITRE 4 : HYBRIDATION & LIAISONS CHIMIQUES
    // =========================================================================
    4: {
        15: {
            title: "Synthèse du Polymère Instable",
            intro: "Étape 1 : règle le dossier rouge et fais le QCM de la caisse en salle 1. Étape 2 : utilise le code du dossier rouge sur la mallette, ouvre l'armoire et passe en salle d'analyse. Étape 3 : enchaîne étagère, carnet, cahier QCM, balance et machine pour ouvrir la sortie.",
            room1: {
                corkBoard: {
                    title: "📌 Panneau en liège",
                    type: "clue",
                    description: "Indice pour le dossier rouge : pour H2O, vise l'hybridation sp3 et 2 doublets non-liants sur l'oxygène."
                },
                redFolder: {
                    title: "📕 Dossier rouge moléculaire",
                    type: "molecule",
                    targetHyb: "sp3",
                    targetDnl: 2,
                    rewardCode: "COUDE",
                    description: "Règle l'hybridation et le nombre de doublets non-liants d'après le panneau en liège pour obtenir un code utile au laboratoire."
                },
                caisse: {
                    title: "📦 Caisse VSEPR",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    reward: "badge",
                    description: "Réussis 1 QCM de la caisse pour obtenir le badge nécessaire à l'entrée du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredItem: "badge",
                    useBadgeReader: true,
                    description: "Passe le badge obtenu avec la caisse pour entrer dans le laboratoire."
                }
            },
            room2: {
                clipboard: {
                    title: "📌 Presse-papier",
                    type: "clue",
                    description: "Repère du labo : le dossier rouge (salle 1) ouvre la mallette ; la clé de la mallette ouvre l'armoire, qui donne le code de la salle d'analyse."
                },
                safe: {
                    title: "🔐 Mallette",
                    type: "code",
                    code: "COUDE",
                    reward: "key",
                    description: "Entre le code obtenu sur le dossier rouge (salle 1) pour récupérer la clé de l'armoire."
                },
                cabinet: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "POLYMERE",
                    description: "Ouvre avec la clé de la mallette pour obtenir le code de la salle d'analyse."
                },
                reactor: {
                    title: "⚗️ Réacteur",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    rewardCode: "SIGMA",
                    description: "Réussis 1 QCM du réacteur pour obtenir le code qui active l'étagère en salle 3."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "POLYMERE",
                    description: "Entre le code trouvé dans l'armoire pour passer en salle d'analyse."
                }
            },
            room3: {
                etagere: {
                    title: "🌀 Étagère du circuit",
                    type: "mazeGame",
                    requiredCode: "SIGMA",
                    rewardCode: "LIAISON",
                    description: "Entre le code du réacteur (salle 2), puis guide la bille pour obtenir le code du carnet."
                },
                notebook: {
                    title: "📓 Carnet d'angle de liaison",
                    type: "calculation",
                    answer: 180,
                    requiredCode: "LIAISON",
                    rewardCode: "LINEAIRE",
                    description: "Entre le code de l'étagère, puis donne l'angle (en degrés) d'une molécule linéaire. Ce code débloque le cahier QCM."
                },
                qcmGeometrie: {
                    title: "📘 Cahier QCM géométrie",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    requiredCode: "LINEAIRE",
                    rewardCode: "GEOMETRIE1",
                    description: "Entre le code du carnet, puis réussis 1 QCM pour obtenir le code demandé par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 18.0,
                    targetVol: 250,
                    requiredCode: "GEOMETRIE1",
                    rewardCode: "SOLVANT",
                    description: "Entre le code du cahier QCM géométrie, puis prépare 250 mL de glucose (M = 180 g/mol) à 0,40 mol/L pour obtenir le code de la machine."
                },
                machine: {
                    title: "🔐 Machine",
                    type: "code",
                    requiredCode: "SOLVANT",
                    rewardCode: "SORTIE41",
                    description: "Entre le code donné par la balance pour générer le code final de sortie."
                },
                finalDoor: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredCode: "SORTIE41",
                    description: "Entre le code fourni par la machine pour terminer le chapitre."
                }
            }
        },
        30: {
            title: "Le Mystère de la Double Liaison",
            intro: "Étape 1 : lis le tableau blanc, règle les fiches sur la table et fais les QCM des tubes en salle 1. Étape 2 : trace le motif sur le modèle atomique, débloque l'ordinateur et l'armoire. Étape 3 : décode les images, mémorise la feuille 2, valide les épreuves et franchis la porte blindée.",
            room1: {
                whiteboard: {
                    title: "📋 Tableau blanc",
                    type: "clue",
                    description: "Indice pour les fiches sur la table : chaque carbone de C2H4 a une hybridation sp2 et 0 doublet non-liant."
                },
                tableCards: {
                    title: "🧬 Fiches sur la table (éthylène)",
                    type: "molecule",
                    targetHyb: "sp2",
                    targetDnl: 0,
                    rewardCode: "ETHYLENE",
                    description: "Règle l'hybridation et les doublets non-liants indiqués sur le tableau blanc pour obtenir le code d'entrée au laboratoire."
                },
                solutionstubes: {
                    title: "🧪 Tubes à solutions",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "HYBRIDATION2",
                    description: "Réussis 2 QCM des tubes à solutions pour obtenir un code utile aux classeurs en salle 3."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "ETHYLENE",
                    description: "Entre le code délivré par les fiches sur la table pour entrer au laboratoire."
                }
            },
            room2: {
                fichemur: {
                    title: "📄 Fiche murale",
                    type: "clue",
                    description: "Indice pour le modèle atomique : trace l'initiale de Gilbert Lewis. Le code obtenu débloque l'ordinateur, qui donne la clé de l'armoire."
                },
                atomModel: {
                    title: "🔵 Digicode du modèle atomique",
                    type: "pattern",
                    pattern: [0, 3, 6, 7, 8],
                    rewardCode: "ANGLES",
                    description: "Dessine la lettre suggérée sur la fiche murale pour obtenir le mot de passe de l'ordinateur."
                },
                computer: {
                    title: "💻 Ordinateur",
                    type: "password",
                    password: "ANGLES",
                    reward: "clé sécurisée",
                    description: "Entre ici le code débloqué sur le modèle atomique pour récupérer la clé sécurisée."
                },
                armoire: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "clé sécurisée",
                    rewardCode: "ACCESHYB",
                    description: "Nécessite la clé sécurisée donnée par l'ordinateur. Elle donne le code de la salle d'analyse."
                },
                microscope: {
                    title: "🔬 Microscope",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "DOUBLETS",
                    description: "Réussis 2 QCM au microscope pour obtenir l'un des codes demandés par la balance en salle 3."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "ACCESHYB",
                    description: "Entre le code trouvé dans l'armoire pour entrer en salle d'analyse."
                }
            },
            room3: {
                feuille2: {
                    title: "🗺️ Feuille 2 (schéma de Lewis)",
                    type: "maze",
                    description: "Mémorise bien le trajet entre les deux carbones : tu devras le refaire à l'aveugle sur la mallette noire."
                },
                cabinet: {
                    title: "🖼️ Grille de décodage (placard)",
                    type: "clue",
                    image: "image/chimie/image code grille.png",
                    description: "Croise cette grille avec le microscope pour trouver le code demandé par l'expérience."
                },
                microscope: {
                    title: "🖼️ Carte chiffrée (poste optique)",
                    type: "clue",
                    image: "image/chimie/image YOUPI.jpeg",
                    description: "Déchiffre cette carte à l'aide de la grille de décodage pour obtenir le code de l'expérience."
                },
                experience: {
                    title: "🎯 Expérience d'orbitales",
                    type: "game",
                    requiredCode: "YOUPI",
                    rewardCode: "RECOUVRE",
                    description: "Entre le code issu des deux images, puis réussis l'expérience pour obtenir un des codes demandés par la balance."
                },
                blackCase: {
                    title: "🕹️ Contrôleur de la mallette noire",
                    type: "mazeController",
                    reward: "badge",
                    description: "Reproduis de mémoire le trajet observé sur la feuille 2 pour récupérer le badge de sortie."
                },
                classeurs: {
                    title: "📚 Classeurs organiques",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    requiredCode: "HYBRIDATION2",
                    rewardCode: "ORGANIQUE",
                    description: "Entre le code des tubes à solutions (salle 1), puis réussis 2 QCM pour obtenir un autre code requis par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 4.0,
                    targetVol: 1000,
                    requiredCode: ["RECOUVRE", "DOUBLETS", "ORGANIQUE"],
                    rewardCode: "SORTIE42",
                    description: "Entre les codes venus de l'expérience, du microscope (salle 2) et des classeurs, puis prépare 1000 mL de NaOH (M = 40 g/mol) à 0,10 mol/L."
                },
                finalDoor: {
                    title: "🚪 Porte blindée",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "SORTIE42",
                    description: "Présente le badge de la mallette noire et entre le code de la balance pour sortir."
                }
            }
        },
        45: {
            title: "L'Architecte Moléculaire",
            intro: "Étape 1 : décode le cadenas directionnel et l'ordre des géométries VSEPR en salle 1 pour obtenir une clé et passer au labo. Étape 2 : active les panneaux de couleur de la géométrie la plus simple à la plus encombrée, ouvre le coffret et l'armoire pour le badge. Étape 3 : enchaîne les 5 tubes, le poster, le carnet, l'ordinateur portable et la balance pour ouvrir la porte finale.",
            room1: {
                corkBoard: {
                    title: "📌 Panneau en liège",
                    type: "clue",
                    description: "Indice pour le cadenas directionnel : 1er Ouest ; 2e Sud ; 3e Est ; 4e Nord."
                },
                blouse: {
                    title: "🥼 Blouse moléculaire",
                    type: "clue",
                    description: "Indice pour les panneaux de couleur (salle 2) : Linéaire = Vert, Trigonale plane = Rouge, Tétraédrique = Bleu, Octaédrique = Jaune. Classe-les de la moins encombrée (2 paires d'électrons) à la plus encombrée (6 paires d'électrons)."
                },
                cadenasdirection: {
                    title: "🔒 Cadenas directionnel",
                    type: "directional",
                    sequence: ["left", "down", "right", "up"],
                    reward: "key",
                    description: "Suis les 4 directions du panneau en liège pour récupérer la clé du meuble."
                },
                meuble: {
                    title: "🗄️ Meuble",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "SASLIAISON",
                    description: "Ouvre avec la clé du cadenas directionnel pour obtenir le code d'entrée au laboratoire."
                },
                livre: {
                    title: "📖 Livre de liaison chimique",
                    type: "question",
                    requiredCorrectAnswers: 3,
                    rewardCode: "POLARITE3",
                    description: "Réussis 3 QCM du livre pour obtenir le code qui déverrouille les 5 tubes en salle 3."
                },
                doorLab: {
                    title: "🚪 Sas",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "SASLIAISON",
                    description: "Entre le code récupéré dans le meuble pour passer au laboratoire."
                }
            },
            room2: {
                feuillesecurite: {
                    title: "📄 Feuille de sécurité",
                    type: "clue",
                    description: "Repère du labo : les panneaux de couleur donnent le code du coffret ; la clé du coffret ouvre l'armoire pour obtenir le badge."
                },
                colorPanels: {
                    title: "🎨 Panneaux de couleur",
                    type: "colors",
                    sequence: ["green", "red", "blue", "yellow"],
                    rewardCode: "DIPOLAIRE",
                    description: "Active les couleurs de la géométrie la plus simple à la plus encombrée (indice sur la blouse en salle 1) pour obtenir le code du coffret."
                },
                safeCase: {
                    title: "🔐 Coffret à cadenas",
                    type: "code",
                    code: "DIPOLAIRE",
                    reward: "key",
                    description: "Entre le code fourni par les panneaux de couleur pour récupérer la clé de l'armoire."
                },
                cabinet: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "key",
                    reward: "badge",
                    description: "Ouvre avec la clé du coffret pour récupérer le badge de sortie."
                },
                microscope: {
                    title: "🔬 Microscope",
                    type: "question",
                    requiredCorrectAnswers: 3,
                    rewardCode: "GEOMETRIE",
                    description: "Réussis 3 QCM au microscope pour obtenir le code d'ouverture de la salle d'analyse."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "GEOMETRIE",
                    description: "Entre le code délivré par le microscope pour entrer en salle d'analyse."
                }
            },
            room3: {
                tubes5: {
                    title: "🧩 Puzzle des 5 tubes",
                    type: "puzzle",
                    image: "image/chimie_hybridation_ACD.png",
                    requiredCode: "POLARITE3",
                    rewardCode: "Le code est les bonnes réponses de ce QCM (ex: BD)",
                    description: "Entre le code du livre de liaison chimique (salle 1), puis reconstitue le puzzle pour obtenir le code demandé par le poster."
                },
                poster: {
                    title: "🌀 Poster du parcours",
                    type: "mazeGame",
                    requiredCode: "ACD",
                    rewardCode: "PARCOURS43",
                    description: "Entre le code issu du puzzle des 5 tubes, puis traverse le parcours sur le poster pour obtenir le code du carnet."
                },
                notebook: {
                    title: "📓 Carnet de la règle de l'octet",
                    type: "calculation",
                    answer: 8,
                    requiredCode: "PARCOURS43",
                    rewardCode: "OCTET8",
                    description: "Entre le code du poster, puis indique le nombre d'électrons de l'octet. Ce code servira sur la balance."
                },
                laptop: {
                    title: "💻 Ordinateur portable",
                    type: "question",
                    requiredCorrectAnswers: 4,
                    rewardCode: "SYNTHESE43",
                    description: "Réussis 4 QCM sur l'ordinateur portable pour obtenir le second code requis par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 5.85,
                    targetVol: 500,
                    requiredCode: ["OCTET8", "SYNTHESE43"],
                    rewardCode: "SORTIE43",
                    description: "Entre les codes du carnet et de l'ordinateur portable, puis prépare 500 mL de NaCl (M = 58,5 g/mol) à 0,20 mol/L pour le code final."
                },
                finalDoor: {
                    title: "🚪 Porte finale",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "SORTIE43",
                    description: "Présente le badge de l'armoire et entre le code de la balance pour sortir."
                }
            }
        }
    },

    // =========================================================================
    // CHAPITRE 5 : THERMOCHIMIE & ÉQUILIBRES THERMODYNAMIQUES
    // =========================================================================
    5: {
        15: {
            title: "Surchauffe du Calorimètre",
            intro: "Étape 1 : règle le dossier rouge et fais le QCM de la caisse en salle 1. Étape 2 : utilise le code du dossier rouge sur la mallette, ouvre l'armoire et passe en salle d'analyse. Étape 3 : enchaîne étagère, carnet, cahier QCM, balance et machine pour ouvrir la sortie.",
            room1: {
               corkBoard: {
    title: "📌 Panneau en liège — Données expérimentales",
    type: "clue",
    description: `
        <strong>Étude : formation de l'eau liquide</strong><br><br>

        Équation :
        H₂(g) + ½ O₂(g) → H₂O(l)<br><br>

        <strong>Enthalpies standard de formation ΔfH° (kJ/mol)</strong><br>
            H₂O(l) : -286<br><br>

        <strong>Entropie standard de réaction ΔrS°</strong><br>
        ΔrS° = -163 J/mol·K<br><br>

        <strong>Conditions :</strong> T = 298 K
    `
},
                redFolder: {
    title: "📕 Dossier rouge — Thermodynamique",
    type: "thermo",
    targetDh: -286,
    targetSpont: "oui",
    rewardCode: "ENTHALPIE",
    description: "Calcule l'enthalpie de réaction à partir des données du panneau et utilise l'entropie fournie."
},
                caisse: {
                    title: "📦 Caisse calorimétrie",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    reward: "badge",
                    description: "Réussis 1 QCM de la caisse pour obtenir le badge nécessaire à l'entrée du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredItem: "badge",
                    useBadgeReader: true,
                    description: "Passe le badge obtenu avec la caisse pour entrer dans le laboratoire."
                }
            },
            room2: {
                clipboard: {
                    title: "📌 Presse-papier",
                    type: "clue",
                    description: "Repère du labo : le dossier rouge (salle 1) ouvre la mallette ; la clé de la mallette ouvre l'armoire, qui donne le code de la salle d'analyse."
                },
                safe: {
                    title: "🔐 Mallette",
                    type: "code",
                    code: "ENTHALPIE",
                    reward: "key",
                    description: "Entre le code obtenu sur le dossier rouge (salle 1) pour récupérer la clé de l'armoire."
                },
                cabinet: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "CRYOGENIE",
                    description: "Ouvre avec la clé de la mallette pour obtenir le code de la salle d'analyse."
                },
                reactor: {
                    title: "⚗️ Réacteur",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    rewardCode: "ENTROPIE",
                    description: "Réussis 1 QCM du réacteur pour obtenir le code qui active l'étagère en salle 3."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "CRYOGENIE",
                    description: "Entre le code trouvé dans l'armoire pour passer en salle d'analyse."
                }
            },
            room3: {
                etagere: {
                    title: "🌀 Étagère du circuit",
                    type: "mazeGame",
                    requiredCode: "ENTROPIE",
                    rewardCode: "THERMIQUE",
                    description: "Entre le code du réacteur (salle 2), puis guide la bille pour obtenir le code du carnet."
                },
                notebook: {
                    title: "📓 Carnet de conversion en Kelvin",
                    type: "calculation",
                    answer: 358,
                    requiredCode: "THERMIQUE",
                    rewardCode: "KELVIN85",
                    description: "Entre le code de l'étagère, puis convertis 85 °C en Kelvin (+ 273). Ce code débloque le cahier QCM."
                },
                qcmThermique: {
                    title: "📘 Cahier QCM thermique",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    requiredCode: "KELVIN85",
                    rewardCode: "CALORIMETRIE",
                    description: "Entre le code du carnet, puis réussis 1 QCM pour obtenir le code demandé par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 4.0,
                    targetVol: 1000,
                    requiredCode: "CALORIMETRIE",
                    rewardCode: "CALORIE",
                    description: "Entre le code du cahier QCM thermique, puis prépare 1000 mL de NaOH (M = 40 g/mol) à 0,10 mol/L pour obtenir le code de la machine."
                },
                machine: {
                    title: "🔐 Machine",
                    type: "code",
                    requiredCode: "CALORIE",
                    rewardCode: "SORTIE51",
                    description: "Entre le code donné par la balance pour générer le code final de sortie."
                },
                finalDoor: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredCode: "SORTIE51",
                    description: "Entre le code fourni par la machine pour terminer le chapitre."
                }
            }
        },
        30: {
            title: "Le Cycle de Born-Haber",
            intro: "Étape 1 : lis le tableau blanc, règle les fiches sur la table et fais les QCM des tubes en salle 1. Étape 2 : trace le motif sur le modèle atomique, débloque l'ordinateur et l'armoire. Étape 3 : décode les images, mémorise la feuille 2, valide les épreuves et franchis la porte blindée.",
            room1: {
whiteboard: {
    title: "📋 Tableau blanc — Données expérimentales",
    type: "clue",
    description: `
        <strong>Étude : combustion du méthane</strong><br><br>

        Équation :
        CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)<br><br>

          <strong>Enthalpies standard de formation ΔfH° (kJ/mol)</strong><br>
        CH₄(g) : -75<br>
        O₂(g) : 0<br>
        CO₂(g) : -394<br>
        H₂O(l) : -286<br><br>

        <strong>Entropie standard de réaction ΔrS°</strong><br>
        ΔrS° = -243 J/mol·K<br><br>

        <strong>Conditions :</strong> T = 298 K
    `
},

tableCards: {
    title: "🌡️ Fiches sur la table — Thermodynamique",
    type: "thermo",
    targetDh: -891,
    targetSpont: "oui",
    rewardCode: "METHANE",
    description: "Complète les données suivantes avec les indices du tableau."
},

                solutionstubes: {
                    title: "🧪 Tubes à solutions",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "DESORDRE2",
                    description: "Réussis 2 QCM des tubes à solutions pour obtenir un code utile aux classeurs en salle 3."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "METHANE",
                    description: "Entre le code délivré par les fiches sur la table pour entrer au laboratoire."
                }
            },
            room2: {
                fichemur: {
                    title: "📄 Fiche murale",
                    type: "clue",
                    description: "Indice pour le modèle atomique : trace la majuscule de l'entropie en partant d'en haut à droite. Le code obtenu débloque l'ordinateur, qui donne la clé de l'armoire."
                },
                atomModel: {
                    title: "🔵 Digicode du modèle atomique",
                    type: "pattern",
                    pattern: [2, 1, 0, 3, 4, 5, 8, 7, 6],
                    rewardCode: "BORNHABER",
                    description: "Dessine la lettre suggérée sur la fiche murale pour obtenir le mot de passe de l'ordinateur."
                },
                computer: {
                    title: "💻 Ordinateur",
                    type: "password",
                    password: "BORNHABER",
                    reward: "clé sécurisée",
                    description: "Entre ici le code débloqué sur le modèle atomique pour récupérer la clé sécurisée."
                },
                armoire: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "clé sécurisée",
                    rewardCode: "ACCESTHERMO",
                    description: "Nécessite la clé sécurisée donnée par l'ordinateur. Elle donne le code de la salle d'analyse."
                },
                microscope: {
                    title: "🔬 Microscope",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "EQUILIBREK",
                    description: "Réussis 2 QCM au microscope pour obtenir l'un des codes demandés par la balance en salle 3."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "ACCESTHERMO",
                    description: "Entre le code trouvé dans l'armoire pour entrer en salle d'analyse."
                }
            },
            room3: {
                feuille2: {
                    title: "🗺️ Feuille 2 (schéma du calorimètre)",
                    type: "maze",
                    description: "Mémorise bien le trajet du fluide : tu devras le refaire à l'aveugle sur la mallette noire."
                },
                cabinet: {
                    title: "🖼️ Grille de décodage (placard)",
                    type: "clue",
                    image: "image/chimie/image code grille.png",
                    description: "Croise cette grille avec le microscope pour trouver le code demandé par l'expérience."
                },
                microscope: {
                    title: "🖼️ Carte chiffrée (poste optique)",
                    type: "clue",
                    image: "image/chimie/image YOUPI.jpeg",
                    description: "Déchiffre cette carte à l'aide de la grille de décodage pour obtenir le code de l'expérience."
                },
                experience: {
                    title: "🎯 Expérience de régulation",
                    type: "game",
                    requiredCode: "YOUPI",
                    rewardCode: "FLUXTHERM",
                    description: "Entre le code issu des deux images, puis réussis l'expérience pour obtenir un des codes demandés par la balance."
                },
                blackCase: {
                    title: "🕹️ Contrôleur de la mallette noire",
                    type: "mazeController",
                    reward: "badge",
                    description: "Reproduis de mémoire le trajet observé sur la feuille 2 pour récupérer le badge de sortie."
                },
                classeurs: {
                    title: "📚 Classeurs Le Chatelier",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    requiredCode: "DESORDRE2",
                    rewardCode: "CHATELIER",
                    description: "Entre le code des tubes à solutions (salle 1), puis réussis 2 QCM pour obtenir un autre code requis par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 18.0,
                    targetVol: 250,
                    requiredCode: ["FLUXTHERM", "EQUILIBREK", "CHATELIER"],
                    rewardCode: "SORTIE52",
                    description: "Entre les codes venus de l'expérience, du microscope (salle 2) et des classeurs, puis prépare 250 mL de glucose (M = 180 g/mol) à 0,40 mol/L."
                },
                finalDoor: {
                    title: "🚪 Porte blindée",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "SORTIE52",
                    description: "Présente le badge de la mallette noire et entre le code de la balance pour sortir."
                }
            }
        },
        45: {
            title: "Synthèse d'Ammoniac : Procédé Haber",
            intro: "Étape 1 : décode le cadenas directionnel et l'ordre des états thermodynamiques en salle 1 pour obtenir une clé et passer au labo. Étape 2 : active les panneaux de couleur du plus désordonné au plus ordonné, ouvre le coffret et l'armoire pour le badge. Étape 3 : enchaîne les 5 tubes, le poster, le carnet, l'ordinateur portable et la balance pour ouvrir la porte finale.",
            room1: {
                corkBoard: {
                    title: "📌 Panneau en liège",
                    type: "clue",
                    description: "Indice pour le cadenas directionnel : 1H (Haut) ; 2B (Bas) ; 3D (Droite) ; 4G (Gauche)."
                },
                mazePoster :{
        title: "📌 Panneau en liège — Données thermodynamiques",
        type: "clue",
        description: `
            <strong>Étude : synthèse de l'ammoniac</strong><br><br>

            Équation :
            N₂(g) + 3 H₂(g) → 2 NH₃(g)<br><br>

            <strong>Enthalpies standard de formation ΔfH° (kJ/mol)</strong><br>
            N₂(g) : 0<br>
            H₂(g) : 0<br>
            NH₃(g) : -46<br><br>

            <strong>Entropie standard de réaction ΔrS°</strong><br>
            ΔrS° = -199 J/mol·K<br><br>

            <strong>Conditions :</strong> T = 298 K
        `
    },
                blouse: {
                    title: "🥼 Blouse de calorimétrie",
                    type: "clue",
                    description: "Indice pour les panneaux de couleur (salle 2) : Gaz = Jaune, Plasma = Rouge, Liquide = Vert, Solide = Bleu. Classe-les de l'état le plus désordonné (entropie maximale) au plus ordonné (entropie minimale)."
                },
                cadenasdirection: {
                    title: "🔒 Cadenas directionnel",
                    type: "directional",
                    sequence: ["up", "down", "right", "left"],
                    reward: "key",
                    description: "Actionne les 4 directions selon le panneau en liège pour récupérer la clé du meuble."
                },
                meuble: {
                    title: "🗄️ Meuble",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "SAS",
                    description: "Ouvre avec la clé du cadenas directionnel pour obtenir le code d'entrée au laboratoire."
                },
                livre: {
                    title: "📖 Livre de thermodynamique",
                    type: "question",
                    requiredCorrectAnswers: 3,
                    rewardCode: "PRESSION3",
                    description: "Réussis 3 QCM du livre pour obtenir le code qui déverrouille les 5 tubes en salle 3."
                },
                doorLab: {
                    title: "🚪 Sas",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "SAS",
                    description: "Entre le code récupéré dans le meuble pour passer au laboratoire."
                }
            },
            room2: {
                feuillesecurite: {
                    title: "📄 Feuille de sécurité",
                    type: "clue",
                    description: "Repère du labo : les panneaux de couleur donnent le code du coffret ; la clé du coffret ouvre l'armoire pour obtenir le badge."
                },
                colorPanels: {
                    title: "🎨 Panneaux de couleur",
                    type: "colors",
                    sequence: ["red", "yellow", "green", "blue"],
                    rewardCode: "VOYANTSTH",
                    description: "Active les couleurs du plus désordonné au plus ordonné (indice sur la blouse en salle 1) pour obtenir le code du coffret."
                },
                safeCase: {
                    title: "🔐 Coffret à cadenas",
                    type: "code",
                    code: "VOYANTSTH",
                    reward: "key",
                    description: "Entre le code fourni par les panneaux de couleur pour récupérer la clé de l'armoire."
                },
                cabinet: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "key",
                    reward: "badge",
                    description: "Ouvre avec la clé du coffret pour récupérer le badge de sortie."
                },
                microscope: {
                    title: "🔬 Microscope",
                    type: "question",
                    requiredCorrectAnswers: 3,
                    rewardCode: "CONSTANTEK",
                    description: "Réussis 3 QCM au microscope pour obtenir le code d'ouverture de la salle d'analyse."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "CONSTANTEK",
                    description: "Entre le code délivré par le microscope pour entrer en salle d'analyse."
                }
            },
            room3: {
                tubes5: {
                    title: "🧩 Puzzle des 5 tubes",
                    type: "puzzle",
                    image: "image/chimie_thermo_AD.png",
                    requiredCode: "PRESSION3",
                    rewardCode: "Le code est les bonnes réponses de ce QCM (ex: BD)",
                    description: "Entre le code du livre de thermodynamique (salle 1), puis reconstitue le puzzle pour obtenir le code demandé par le poster."
                },
                poster: {
                    title: "🌀 Poster du circuit",
                    type: "mazeGame",
                    requiredCode: "AD",
                    rewardCode: "RECYCLAGE",
                    description: "Entre le code issu du puzzle des 5 tubes, puis traverse le circuit sur le poster pour obtenir le code du carnet."
                },
            
notebook: {
    title: "📓 Carnet du quotient de réaction",
    type: "thermo",
    targetDh: -92,
    targetSpont: "oui",
    rewardCode: "ENTROPIE",
    description: "Calcule l'enthalpie de réaction à partir des données du panneau de la salle 1 et utilise l'entropie fournie pour déterminer la spontanéité."
},
                    
                laptop: {
                    title: "💻 Ordinateur portable",
                    type: "question",
                    requiredCorrectAnswers: 4,
                    rewardCode: "SYNTHESE53",
                    description: "Réussis 4 QCM sur l'ordinateur portable pour obtenir le second code requis par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 4.0,
                    targetVol: 1000,
                    requiredCode: ["ENTROPIE", "SYNTHESE53"],
                    rewardCode: "SORTIE53",
                    description: "Entre les codes du carnet et de l'ordinateur portable, puis prépare 1000 mL de NaOH (M = 40 g/mol) à 0,10 mol/L pour le code final."
                },
                finalDoor: {
                    title: "🚪 Porte finale",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "SORTIE53",
                    description: "Présente le badge de l'armoire et entre le code de la balance pour sortir."
                }
            }
        }
    },

    // =========================================================================
    // CHAPITRE 6 : CINÉTIQUE CHIMIQUE & CATALYSE
    // =========================================================================
    6: {
        15: {
            title: "Course Contre la Demi-Réaction",
            intro: "Étape 1 : règle le dossier rouge et fais le QCM de la caisse en salle 1. Étape 2 : utilise le code du dossier rouge sur la mallette, ouvre l'armoire et passe en salle d'analyse. Étape 3 : enchaîne étagère, carnet, balance et machine pour ouvrir la sortie.",
            room1: {
                corkBoard: {
                    title: "📌 Panneau en liège",
                    type: "clue",
                    description: "Indice pour le dossier rouge : ordre 1 avec k = 0,0693 min⁻¹."
                },
                redFolder: {
                    title: "📕 Dossier rouge cinétique",
                    type: "cinetique",
                    targetOrdre: 1,
                    targetT12: 10,
                    rewardCode: "DEMIVIE",
                    description: "Règle l'ordre et le temps de demi-réaction à partir du panneau en liège pour obtenir un code utile au laboratoire."
                },
                caisse: {
                    title: "📦 Caisse vitesse",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    reward: "badge",
                    description: "Réussis 1 QCM de la caisse pour obtenir le badge nécessaire à l'entrée du laboratoire."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredItem: "badge",
                    useBadgeReader: true,
                    description: "Passe le badge obtenu avec la caisse pour entrer dans le laboratoire."
                }
            },
            room2: {
                clipboard: {
                    title: "📌 Presse-papier",
                    type: "clue",
                    description: "Repère du labo : le dossier rouge (salle 1) ouvre la mallette ; la clé de la mallette ouvre l'armoire, qui donne le code de la salle d'analyse."
                },
                safe: {
                    title: "🔐 Mallette",
                    type: "code",
                    code: "DEMIVIE",
                    reward: "key",
                    description: "Entre le code obtenu sur le dossier rouge (salle 1) pour récupérer la clé de l'armoire."
                },
                cabinet: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "key",
                    rewardCode: "CATALYSE",
                    description: "Ouvre avec la clé de la mallette pour obtenir le code de la salle d'analyse."
                },
                reactor: {
                    title: "⚗️ Réacteur",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    rewardCode: "ACTIVATION",
                    description: "Réussis 1 QCM du réacteur pour obtenir le code qui active l'étagère en salle 3."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "CATALYSE",
                    description: "Entre le code trouvé dans l'armoire pour passer en salle d'analyse."
                }
            },
            room3: {
                etagere: {
                    title: "🌀 Étagère du circuit",
                    type: "mazeGame",
                    requiredCode: "ACTIVATION",
                    rewardCode: "FLUIDE",
                    description: "Entre le code du réacteur (salle 2), puis guide la bille pour obtenir le code du carnet."
                },
                notebook: {
                    title: "📓 Carnet Arrhenius",
                    type: "question",
                    requiredCorrectAnswers: 1,
                    requiredCode: "FLUIDE",
                    rewardCode: "ARRHENIUS",
                    description: "Entre le code de l'étagère, puis réussis 1 QCM du carnet pour obtenir le code demandé par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 5.85,
                    targetVol: 500,
                    requiredCode: "ARRHENIUS",
                    rewardCode: "DOSAGE61",
                    description: "Entre le code du carnet, puis prépare 500 mL de NaCl (M = 58,5 g/mol) à 0,20 mol/L pour obtenir le code de la machine."
                },
                machine: {
                    title: "🔐 Machine de demi-vie",
                    type: "calculation",
                    answer: 10,
                    requiredCode: "DOSAGE61",
                    rewardCode: "SORTIE61",
                    description: "Entre le code de la balance, puis calcule t1/2 (en min) pour k = 0,0693 min⁻¹ (ordre 1) afin d'obtenir le code final de sortie."
                },
                finalDoor: {
                    title: "🚪 Porte de sortie",
                    type: "final",
                    requiredCode: "SORTIE61",
                    description: "Entre le code fourni par la machine pour terminer le chapitre."
                }
            }
        },
        30: {
            title: "Sabotage Enzymatique",
            intro: "Étape 1 : lis le tableau blanc, règle les fiches sur la table et fais les QCM des tubes en salle 1. Étape 2 : trace le motif sur le modèle atomique, débloque l'ordinateur et l'armoire. Étape 3 : décode les images, mémorise la feuille 2, valide les épreuves et franchis la porte blindée.",
            room1: {
                whiteboard: {
                    title: "📋 Tableau blanc",
                    type: "clue",
                    description: "Indice pour les fiches sur la table : réaction d'ordre 1 avec t1/2 = 20 min."
                },
                tableCards: {
                    title: "⏱️ Fiches sur la table (vitesse)",
                    type: "cinetique",
                    targetOrdre: 1,
                    targetT12: 20,
                    rewardCode: "VITESSE1",
                    description: "Règle l'ordre et le temps de demi-réaction d'après le tableau blanc pour obtenir le code d'entrée au laboratoire."
                },
                solutionstubes: {
                    title: "🧪 Tubes à solutions",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "DEMIVIE20",
                    description: "Réussis 2 QCM des tubes à solutions pour obtenir un code utile aux classeurs en salle 3."
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "VITESSE1",
                    description: "Entre le code délivré par les fiches sur la table pour entrer au laboratoire."
                }
            },
            room2: {
                fichemur: {
                    title: "📄 Fiche murale",
                    type: "clue",
                    description: "Indice pour le modèle atomique : trace la majuscule de la concentration en partant d'en haut à droite. Le code obtenu débloque l'ordinateur, qui donne la clé de l'armoire."
                },
                atomModel: {
                    title: "🔵 Digicode du modèle atomique",
                    type: "pattern",
                    pattern: [2, 1, 0, 3, 6, 7, 8],
                    rewardCode: "FACTEURS",
                    description: "Dessine la lettre suggérée sur la fiche murale pour obtenir le mot de passe de l'ordinateur."
                },
                computer: {
                    title: "💻 Ordinateur",
                    type: "password",
                    password: "FACTEURS",
                    reward: "clé sécurisée",
                    description: "Entre ici le code débloqué sur le modèle atomique pour récupérer la clé sécurisée."
                },
                armoire: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "clé sécurisée",
                    rewardCode: "ACCESCATA",
                    description: "Nécessite la clé sécurisée fournie par l'ordinateur. Elle donne le code de la salle d'analyse."
                },
                microscope: {
                    title: "🔬 Microscope",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    rewardCode: "CATALYSEUR",
                    description: "Réussis 2 QCM au microscope pour obtenir l'un des codes demandés par la balance en salle 3."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "ACCESCATA",
                    description: "Entre le code trouvé dans l'armoire pour entrer en salle d'analyse."
                }
            },
            room3: {
                feuille2: {
                    title: "🗺️ Feuille 2 (plan optique)",
                    type: "maze",
                    description: "Mémorise bien le trajet du faisceau : tu devras le refaire à l'aveugle sur la mallette noire."
                },
                cabinet: {
                    title: "🖼️ Grille de décodage (placard)",
                    type: "clue",
                    image: "image/chimie/image code grille.png",
                    description: "Croise cette grille avec le microscope pour trouver le code demandé par l'expérience."
                },
                microscope: {
                    title: "🖼️ Carte chiffrée (poste optique)",
                    type: "clue",
                    image: "image/chimie/image YOUPI.jpeg",
                    description: "Déchiffre cette carte à l'aide de la grille de décodage pour obtenir le code de l'expérience."
                },
                experience: {
                    title: "🎯 Expérience de dosage",
                    type: "game",
                    requiredCode: "YOUPI",
                    rewardCode: "TREMPE",
                    description: "Entre le code issu des deux images, puis réussis l'expérience pour obtenir un des codes demandés par la balance."
                },
                blackCase: {
                    title: "🕹️ Contrôleur de la mallette noire",
                    type: "mazeController",
                    reward: "badge",
                    rewardCode: "BADGECATA",
                    description: "Reproduis de mémoire le trajet observé sur la feuille 2 pour récupérer le badge de sortie."
                },
                classeurs: {
                    title: "📚 Classeurs cinétiques",
                    type: "question",
                    requiredCorrectAnswers: 2,
                    requiredCode: "DEMIVIE20",
                    rewardCode: "CINETIQUE20",
                    description: "Entre le code des tubes à solutions (salle 1), puis réussis 2 QCM pour obtenir un autre code requis par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 4.0,
                    targetVol: 1000,
                    requiredCode: ["TREMPE", "CATALYSEUR", "CINETIQUE20"],
                    rewardCode: "SORTIE62",
                    description: "Entre les codes venus de l'expérience, du microscope (salle 2) et des classeurs, puis prépare 1000 mL de NaOH (M = 40 g/mol) à 0,10 mol/L."
                },
                finalDoor: {
                    title: "🚪 Porte blindée",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "SORTIE62",
                    description: "Présente le badge de la mallette noire et entre le code de la balance pour sortir."
                }
            }
        },
        45: {
            title: "Le Réacteur d'Arrhenius",
            intro: "Étape 1 : décode le cadenas directionnel et l'ordre des grandeurs cinétiques en salle 1 pour obtenir une clé et passer au labo. Étape 2 : active les panneaux de couleur selon l'ordre chronologique puis énergétique, ouvre le coffret et l'armoire pour le badge. Étape 3 : enchaîne les 5 tubes, le poster, le carnet, l'ordinateur portable et la balance pour ouvrir la porte finale.",
            room1: {
                corkBoard: {
                    title: "📌 Panneau en liège",
                    type: "clue",
                    description: "Indice pour le cadenas directionnel : 1er Nord ; 2e Est ; 3e Sud ; 4e Ouest."
                },
                blouse: {
                    title: "🥼 Blouse cinétique",
                    type: "clue",
                    description: "Indice pour les panneaux de couleur (salle 2) : Ea = Rouge, t = 0 = Bleu, t1/2 = Vert, tf = Jaune. Commence par l'instant de départ, poursuis avec le temps de demi-réaction, continue avec la fin de la transformation et termine par la barrière énergétique."
                },
                cadenasdirection: {
                    title: "🔒 Cadenas directionnel",
                    type: "directional",
                    sequence: ["up", "right", "down", "left"],
                    reward: "key1",
                    description: "Suis les 4 directions du panneau en liège pour récupérer la clé du meuble."
                },
                meuble: {
                    title: "🗄️ Meuble",
                    type: "item",
                    requiredItem: "key1",
                    rewardCode: "SASCINETIQUE",
                    description: "Ouvre avec la clé du cadenas directionnel pour obtenir le code d'entrée au laboratoire."
                },
                livre: {
                    title: "📖 Livre de cinétique",
                    type: "question",
                    requiredCorrectAnswers: 3,
                    rewardCode: "ACTES3",
                    description: "Réussis 3 QCM du livre pour obtenir le code qui déverrouille les 5 tubes en salle 3."
                },
                doorLab: {
                    title: "🚪 Sas",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "SASCINETIQUE",
                    description: "Entre le code récupéré dans le meuble pour passer au laboratoire."
                }
            },
            room2: {
                feuillesecurite: {
                    title: "📄 Feuille de sécurité",
                    type: "clue",
                    description: "Repère du labo : les panneaux de couleur donnent le code du coffret ; la clé du coffret ouvre l'armoire pour obtenir le badge."
                },
                colorPanels: {
                    title: "🎨 Panneaux de couleur",
                    type: "colors",
                    sequence: ["blue", "green", "yellow", "red"],
                    rewardCode: "VOYANT",
                    description: "Active les couleurs selon l'ordre décrit sur la blouse cinétique (salle 1) pour obtenir le code du coffret."
                },
                safeCase: {
                    title: "🔐 Coffret à cadenas",
                    type: "code",
                    code: "VOYANT",
                    reward: "key2",
                    description: "Entre le code fourni par les panneaux de couleur pour récupérer la clé de l'armoire."
                },
                cabinet: {
                    title: "🗄️ Armoire",
                    type: "item",
                    requiredItem: "key2",
                    reward: "badge",
                    description: "Ouvre avec la clé du coffret pour récupérer le badge de sortie."
                },
                microscope: {
                    title: "🔬 Microscope",
                    type: "question",
                    requiredCorrectAnswers: 3,
                    rewardCode: "LOIARRH",
                    description: "Réussis 3 QCM au microscope pour obtenir le code d'ouverture de la salle d'analyse."
                },
                doorAnalysis: {
                    title: "🚪 Porte de la salle d'analyse",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredCode: "LOIARRH",
                    description: "Entre le code délivré par le microscope pour entrer en salle d'analyse."
                }
            },
            room3: {
                tubes5: {
                    title: "🧩 Puzzle des 5 tubes",
                    type: "puzzle",
                    image: "image/chimie_cinetique_D.png",
                    requiredCode: "ACTES3",
                    rewardCode: "Le code est la bonne réponse de ce QCM (ex: B)",
                    description: "Entre le code du livre de cinétique (salle 1), puis reconstitue le puzzle pour obtenir le code demandé par le poster."
                },
                poster: {
                    title: "🌀 Poster du chemin réactionnel",
                    type: "mazeGame",
                    requiredCode: "D",
                    rewardCode: "CHEMIN63",
                    description: "Entre le code issu du puzzle des 5 tubes, puis traverse le chemin réactionnel sur le poster pour obtenir le code du carnet."
                },
                notebook: {
                    title: "📓 Carnet d'ordre global",
                    type: "calculation",
                    answer: 2,
                    requiredCode: "CHEMIN63",
                    rewardCode: "ORDRE2",
                    description: "Entre le code du poster, puis calcule l'ordre global de v = k · [A] · [B]. Ce code servira sur la balance."
                },
                laptop: {
                    title: "💻 Ordinateur portable",
                    type: "question",
                    requiredCorrectAnswers: 4,
                    rewardCode: "SYNTHESE63",
                    description: "Réussis 4 QCM sur l'ordinateur portable pour obtenir le second code requis par la balance."
                },
                balance: {
                    title: "⚖️ Balance",
                    type: "balance",
                    targetMass: 18.0,
                    targetVol: 250,
                    requiredCode: ["ORDRE2", "SYNTHESE63"],
                    rewardCode: "SORTIE63",
                    description: "Entre les codes du carnet et de l'ordinateur portable, puis prépare 250 mL de glucose (M = 180 g/mol) à 0,40 mol/L pour le code final."
                },
                finalDoor: {
                    title: "🚪 Porte finale",
                    type: "final",
                    requiredItem: "badge",
                    requiredCode: "SORTIE63",
                    description: "Présente le badge de l'armoire et entre le code de la balance pour sortir."
                }
            }
        }
    }
};

        
    const story = STORIES[level][duration];
    const buildRoomObjects = (roomObjs, roomZones) => {
        const res = {};
        for (const [key, obj] of Object.entries(roomObjs)) {
            res[key] = {
                ...obj,
                questionSubject: "chimie",
                hotspot: roomZones[key] ? { ...roomZones[key] } : undefined
            };
        }
        return res;
    };

    return {
        entrance: {
            title: `${story.title} — Vestiaire`,
            description: story.intro,
            background: visuals.entrance.background,
            aspectRatio: "16 / 9",
            objects: buildRoomObjects(story.room1, visuals.entrance.zones)
        },
        lab: {
            title: `${story.title} — Laboratoire`,
            description: "Relie les indices récupérés précédemment pour ouvrir la salle d'analyse.",
            background: visuals.lab.background,
            aspectRatio: "16 / 9",
            objects: buildRoomObjects(story.room2, visuals.lab.zones)
        },
        analysis: {
            title: `${story.title} — Salle d'analyse`,
            description: "Dernière étape avant l'évacuation du complexe.",
            background: visuals.analysis.background,
            aspectRatio: "16 / 9",
            objects: buildRoomObjects(story.room3, visuals.analysis.zones)
        }
    };

}
/* =========================================================
   BOSS — IMAGES, ZONES CLIQUABLES ET SCÉNARIO
   ========================================================= */
const BOSS_ROOM_VISUALS = {
    entrance: {
        background: "image/boss-1fin.png",
        zones: {
  journal: { x: 5, y: 74, w: 25, h: 18 },
  terminal: { x: 63, y: 35, w: 18, h: 24 },
  doorLab: { x: 33, y: 12, w: 25, h: 60 },

  thermometerClue: { x: 7, y: 10, w: 9, h: 48 },
  padlockDoor: { x: 85, y: 10, w: 20, h: 50 },
  testTubeRack: { x: 4, y: 48, w: 16, h: 25 },
  digitThreeDots: { x: 18, y: 25, w: 11, h: 26 },
  suiteBoard: { x: 62, y: 15, w: 19, h: 24 }
}
    },
    lab: {
        background: "image/boss-2.png",
       zones: {
  microscope: { x: 10, y: 43, w: 16, h: 27 },
  safe: { x: 36, y: 36, w: 19, h: 28 },
  cabinet: { x: 56, y: 69, w: 18, h: 20 },
  doorAnalysis: { x: 74, y: 29, w: 22, h: 48 },

  colorPanel: { x: 29, y: 13, w: 27, h: 19 },
  goldSheet: { x: 26, y: 85, w: 19, h: 12 },
  systemClue2: { x: 15, y: 20, w: 13, h: 18 },
  chemBasket: { x: 0, y: 7, w: 13, h: 42 },
  digitsClue1: { x: 55, y: 28, w: 12, h: 15 },
  mendeleievRadar: { x: 71, y: 7, w: 27, h: 23 },
  caesarClue1: { x: 8, y: 79, w: 20, h: 13 },
  caesarClue2: { x: 72, y: 85, w: 30, h: 15 },
  precisionBalance: { x: 57, y: 43, w: 15, h: 18 }
}
    },
    analysis: {
  background: "image/boss-final3.png",

 
zones: {
  // Indices codés en haut à gauche
  alternatingClue1: { x: 7, y: 18, w: 10, h: 15 },
  alternatingClue2: { x: 18, y: 20, w: 8, h: 14 },

  // Synthétiseur moléculaire
  molSynth: { x: 31, y: 10, w: 14, h: 36 },

  // Console de validation finale
  finalQuestion: { x: 3, y: 37, w: 22, h: 15 },

  // Tubes de départ
  tubesImgClue1: { x: 0, y: 55, w: 15, h: 15 },

  // Deux schémas de balance
  balanceClue1: { x: 3, y: 74, w: 14, h: 15 },
  balanceClue2: { x: 18, y: 74, w: 11, h: 15 },

  // Verrou directionnel
  finalDirLock: { x: 31, y: 51, w: 19, h: 24 },

  // Régulateur thermique
  thermoRegulator: { x: 51, y: 42, w: 9, h: 22 },

  // Véritable porte blindée
  finalDoor: { x: 61, y: 22, w: 17, h: 44 },

  // Véritable barrière laser
  laserGrid: { x: 85, y: 18, w: 14, h: 51 },

  // Tubes de fin
  tubesImgClue2: { x: 88, y: 73, w: 12, h: 19 }
}

}}

function buildBossScenario() {
    const visuals = BOSS_ROOM_VISUALS;

    const story = {
        title: "Épreuve Ultime — Boss",
        intro: "Sas de confinement. Démarre calmement : observe, déverrouille le verrou de la porte et prépare l'accès au laboratoire.",
        labIntro: "Laboratoire ultime. Les indices de la première salle prennent sens ici.",
        analysisIntro: "Chambre expérimentale finale. Combine toutes tes déductions pour désactiver le système.",

        /* =================================================================
           SALLE 1 : ZONE DE CONFINEMENT
           ================================================================= */
        room1: {
            thermometerClue: {
                title: "🌡️ Thermomètre mural",
                description: "Un thermomètre affiche 100 °C. Une inscription précise : « Convertis cette température en kelvins en utilisant 273 comme approximation pour déverouiller l'interface digitale à droite de la salle »",
                type: "clue"
            },

            padlockDoor: {
                title: "🔒 Interface digitale verouillée",
                description: "Entre la température en kelvins relevée sur le thermomètre mural pour déverrouiller le sas et obtenir le code d'accès au carnet.",
                type: "code",
                code: "373",
                rewardCode: "SAS"
            },

            journal: {
                title: "📖 Carnet posé en bas à gauche",
                description: "Saisis le code obtenu sur la porte cadenassée du sas, puis réussis 3 QCM d'initialisation pour obtenir le 1er code chiffré destiné au terminal central.",
                type: "question",
                requiredCode: "SAS",
                requiredCorrectAnswers: 3,
                rewardCode: "UN"
            },

            testTubeRack: {
                title: "🧪 Portoir de tubes colorés (en bas à gauche)",
                description: "Quatre tubes étalons colorés sont alignés de gauche à droite. Mémorise bien leur ordre de couleurs : il servira sur le séquenceur chromatique de la salle suivante.",
                type: "test_tube"
            },

            digitThreeDots: {
                title: "✏️ Grille de points à relier (à gauche)",
                description: "Relie les points de 1 à 6 pour former un chiffre unique et obtenir le 2e code chiffré destiné au terminal central.",
                type: "connectDots",
                // Dessine le chiffre "3"
                dots: [
                    { id: 1, x: 130, y: 70 },
                    { id: 2, x: 250, y: 70 },
                    { id: 3, x: 180, y: 145 },
                    { id: 4, x: 260, y: 190 },
                    { id: 5, x: 210, y: 245 },
                    { id: 6, x: 125, y: 235 }
                ],
                rewardCode: "TROIS"
            },

            suiteBoard: {
                title: "🔢 Tableau des suites (en haut à droite)",
                description: "Trouve le terme (?) de chaque suite : 1=[2, 4, 8, 16, ?] ; 2=[1, 4, 9, 16, ?] ; 3=[2, 4, ?, 8, 10] ; 4=[3, 6, 12, 24, ?]. Classe-les du plus petit au plus grand pour obtenir le 3e code chiffré destiné au terminal central.",
                type: "sequence",
                steps: [
                    "Suite 3 ",
                    "Suite 2 ",
                    "Suite 1 ",
                    "Suite 4"
                ],
                rewardCode: "SEPT"
            },

            terminal: {
                title: "💻 Terminal à clavier (à droite)",
                description: "Le terminal délivre le code d'accès de la porte du laboratoire. Note : additionne la valeur des trois nombres écrits en toutes lettres (obtenus sur le carnet, le tracé de points et le tableau des suites), puis écris le résultat en lettres majuscules.",
                type: "password",
                password: "ONZE",
                rewardCode: "ACCES"
            },

            doorLab: {
                title: "🚪 Porte du laboratoire",
                description: "Entre le code d'accès délivré par le terminal central pour entrer dans le laboratoire ultime.",
                type: "roomDoor",
                targetRoom: "lab",
                requiredCode: "ACCES"
            }
        },

        /* =================================================================
           SALLE 2 : LABORATOIRE ULTIME
           ================================================================= */
        room2: {
            colorPanel: {
                title: "🎨 Bandeau de voyants colorés (en haut)",
                description: "Reproduis de gauche à droite l'ordre des couleurs observé sur le portoir témoin de la salle 1 pour obtenir le 1er code du coffre central.",
                type: "colors",
                sequence: ["blue", "red", "yellow", "green"],
                rewardCode: "AT"
            },

            goldSheet: {
                title: "🥇 Fiche posée en bas à gauche",
                description: "L'or possède 79 protons et 118 neutrons. Saisis son nombre de masse (A = Z + N) pour obtenir la première moitié de la légende directionnelle de la salle 3.",
                type: "code",
                code: "197",
                rewardCode: "G=HAUT F=BAS"
            },

            systemClue2: {
                title: "📝 Note de calcul inscrite sur un tableau",
                description: "Système d'équations : x + y = 15 et x - y = 5. Une note indique : « L'injecteur balistique (en haut à gauche) attend le produit x × y. »",
                type: "clue"
            },

            chemBasket: {
                title: "⚗️ Appareil de lancement (en haut à gauche)",
                description: "Entre le produit x × y trouvé sur la note de calcul, puis réussis l'expérience en plaçant 2 billes dans le tube pour débloquer le microscope expérimental.",
                type: "game",
                unlockCode: "50",
                rewardCode: "INJECTEUR"
            },

            digitsClue1: {
                title: "🕵️ Fiche d'essais (en haut à gauche)",
                description: "Code à 3 chiffres différents pour le radar de Mendeleïev : 682 (1 chiffre juste et bien placé) ; 614 (1 chiffre juste mais mal placé) ; 206 (2 chiffres justes mais mal placés) ; 738 (aucun chiffre juste) ; 780 (1 chiffre juste mais mal placé).",
                type: "clue"
            },

            mendeleievRadar: {
                title: "🔍 Console radar de classification (au centre)",
                description: "Entre le code à 3 chiffres déduit du registre des essais, puis sélectionne l'élément ayant pour caractéristique A=34 à l'état stable et neutre pour obtenir la seconde moitié de la légende directionnelle de la salle 3.",
                type: "mendeleiev",
                unlockCode: "042",
                targetZ: 17,
                targetSymbol: "Cl",
                rewardCode: "K=DROITE W=GAUCHE"
            },

            caesarClue1: {
                title: "📜 Feuille",
                description: "Un mot est inscrit en gros sur la feuille, il est noté qu'il sera utile pour la balance de précision s'affiche sur l'écran : FKLIIUH.",
                type: "clue"
            },

            caesarClue2: {
                title: "📜 Inscriptions gravés sur le sol",
                description: "Une inscription précise : « Le scientifique fou décalait toujours ses mots de passe de trois rangs vers l'avant dans l'alphabet. »",
                type: "clue"
            },

            precisionBalance: {
                title: "⚖️ Balance de précision (en haut à droite)",
                description: "Entre le mot de 7 lettres décodé depuis la feuille du bureau et les inscriptions sur le sol, puis pèse et prépare 500 mL d'une solution de NaCl (M = 58,5 g/mol) à C = 0,20 mol/L pour obtenir le 2e code du coffre central.",
                type: "balance",
                unlockCode: "CHIFFRE",
                targetMass: 5.85,
                targetVol: 500,
                rewardCode: "TU"
            },

            microscope: {
                title: "🔬 Microscope d'analyse (à gauche)",
                description: "Entre le code délivré par l'appareil de lancement, puis réussis 6 QCM différents pour obtenir le 3e code du coffre central.",
                type: "question",
                requiredCode: "INJECTEUR",
                requiredCorrectAnswers: 6,
                rewardCode: "TOR"
            },

            safe: {
                title: "🔐 Coffre verrouillé (au centre)",
                description: "Saisis le mot formé par les 3 codes du laboratoire (Séquenceur chromatique, Balance de précision, Microscope expérimental) pour récupérer la clé de la mallette scientifique.",
                type: "code",
                requiredCode: "TUTORAT",
                reward: "key"
            },

            cabinet: {
                title: "🧰 Mallette rangée en bas à droite",
                description: "La clé permet d'ouvrir la mallette et de récupérer un badge.",
                type: "item",
                requiredItem: "key",
                reward: "badge"
            },

            doorAnalysis: {
                title: "🚪 Porte de la chambre finale (à droite)",
                description: "Un badge est nécessaire pour accéder à la dernière salle.",
                type: "roomDoor",
                targetRoom: "analysis",
                requiredItem: "badge",
                useBadgeReader: true
            }
        },

        /* =================================================================
           SALLE 3 : CHAMBRE EXPÉRIMENTALE FINALE
           ================================================================= */
        room3: {
            finalDirLock: {
                title: "🧭 Commande directionnelle (au centre)",
                description: "Entre la séquence correspondant aux lettres GGFKW (à l'aide de la légende obtenue dans la salle 2 sur la fiche de l'Or et le radar de classification au dessus de la porte) pour obtenir le 1er code de l'épreuve ultime.",
                type: "directional",
                sequence: ["up", "up", "down", "right", "left"],
                rewardCode: "Pour décoder le code incompréhensible, une lettre sur deux suffit en commençant par la première. »"
            },

            alternatingClue1: {
                title: "📄 Feuille codée en haut à gauche",
                description: "Suite de lettres relevée pour le synthétiseur moléculaire : IPNATOELGSRXALIE.",
                type: "clue"
            },

            alternatingClue2: {
                title: "📌 Annotation sale",
                type : "scratch",
                description: "Une couche de saleté recouvre cette surface. Frotte pour découvrir ce qui est écrit dessous.",
    rewardCode: "2"
            },

            molSynth: {
                title: "🧬 Module de géométrie moléculaire (en haut)",
                description: "Entre le mot caché codé par l'affiche à gauche, puis règle la géométrie de l'eau (H₂O : hybridation sp³, 2 doublets non-liants) pour obtenir la première lettre pour déverouiller le lecteur de QCM.",
                type: "molecule",
                unlockCode: "INTEGRALE",
                targetHyb: "sp3",
                targetDnl: 2,
                rewardCode: "☢1"
            },

            balanceClue1: {
                title: "⚖️ Schéma de pesée ",
                description: "Trois balances sont représentées : 1 éprouvette = 2 thermomètres ; 1 fiole = 3 éprouvettes.1 fiole + 1 thermomètre = 14 unités. Une note précise : « La masse d'une éprouvette déverrouille le régulateur thermodynamique. »",
                type: "clue"
            },

            balanceClue2: {
                title: " Grille",
                type: "clue",
                description : "Ce grille sera utile pour déverouiller le lecteur final de QCM",
                image: "image/grille.png"

            },

            thermoRegulator: {
                title: "🌡️ Capteur et régulateur thermique (en bas)",
                description: `
        <strong>Entre la masse d'une éprouvette déduite des balances, puis règle la combustion du méthane pour avoir la deuxième lettre à enter sur le lecteur de QCM: </strong><br><br>

        Équation :
        CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l)<br><br>

        <strong>Enthalpies standard de formation ΔfH° (kJ/mol)</strong><br>
        CH₄(g) : -75<br>
        O₂(g) : 0<br>
        CO₂(g) : -394<br>
        H₂O(l) : -286<br><br>

        <strong>Entropie standard de réaction ΔrS°</strong><br>
        ΔrS° = -243 J/mol·K<br><br>

        <strong>Conditions :</strong> T = 298 K
    `,
                type: "thermo",
                unlockCode: "4",
                targetDh: -891,
                targetSpont: "oui",
                rewardCode: "♥5"
            },

            tubesImgClue1: {
                title: "🖼️ Vue des tubes au départ (à gauche)",
                description: "État initial des tubes numérotés (1 à 5) avant réaction.",
                type: "clue",
                image: "image/tubes_depart.png"
            },

            tubesImgClue2: {
                title: "🖼️ Vue des tubes à la fin (en bas à droite)",
                description: "Compare avec l'état initial : les numéros des tubes dont le niveau a changé forment (dans l'ordre croissant) le code de la grille laser.",
                type: "clue",
                image: "image/tubes_fin.png"
            },

            laserGrid: {
                title: "⚡ Barrière laser (à droite)",
                description: "Entre le code à 3 chiffres formé par les numéros des tubes qui ont évolué, puis traverse le labyrinthe sans toucher les parois laser pour obtenir la 3ème lettre de l'épreuve ultime.",
                type: "mazeGame",
                requiredCode: "235",
                rewardCode: "♥1"
            },

            finalQuestion: {
                title: "🧠 Lecteur final de QCM",
                description: "Utilise le numero caché sous la poussière puis les 3 lettres codées pour pouvoir activer le lecteur de QCMs",
                type: "question",
                requiredCode: "2ATP",
                requiredCorrectAnswers: 7,
                rewardCode: "FINALISE"
            },

            finalDoor: {
                title: "🚪 Sas de sortie final (à droite)",
                description: "Entre le code final obtenu après les ultimes QCM réalisés sur le lecteur de QCM pour sortir.",
                type: "final",
                requiredCode: "FINALISE"

            }
        }
    };

    const buildRoomObjects = (roomObjs, roomZones) => {
        const res = {};
        for (const [key, obj] of Object.entries(roomObjs)) {
            res[key] = {
                ...obj,
                questionSubject: "boss",
                hotspot: roomZones[key] ? { ...roomZones[key] } : undefined
            };
        }
        return res;
    };

    return {
        entrance: {
            title: `${story.title} — Zone de confinement`,
            description: story.intro,
            background: visuals.entrance.background,
            aspectRatio: "16 / 9",
            objects: buildRoomObjects(story.room1, visuals.entrance.zones)
        },
        lab: {
            title: `${story.title} — Laboratoire ultime`,
            description: story.labIntro,
            background: visuals.lab.background,
            aspectRatio: "16 / 9",
            objects: buildRoomObjects(story.room2, visuals.lab.zones)
        },
        analysis: {
            title: `${story.title} — Chambre expérimentale finale`,
            description: story.analysisIntro,
            background: visuals.analysis.background,
            aspectRatio: "16 / 9",
            objects: buildRoomObjects(story.room3, visuals.analysis.zones)
        }
    };
};

   

function buildLevelRooms(mode, level) {
    if (mode === "boss") return buildBossScenario();
    if (mode === "chimie") return buildChimieScenario(level, Number(state.duration));
    if (mode === "maths") return buildMathsScenario(level, Number(state.duration));
    return cloneRooms(ROOMS[mode]);
}
   