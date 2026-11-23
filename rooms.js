
const ROOMS = {
    maths: {
        entrance: {
            title: "Hall du laboratoire",
            description: "Trouve un premier indice pour accéder au laboratoire.",
            objects: {
                notebook: {
                    title: "📖 Cahier du professeur",
                    description: "Un exercice révèle un code si tu réponds correctement.",
                    type: "question",
                    questionSubject: "maths"
                },
                notice: {
                    title: "📋 Tableau",
                    description: "Message : « Les bonnes réponses ouvrent les bonnes portes. »",
                    type: "clue"
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    description: "La porte attend un code découvert grâce à un QCM.",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredCode: "discovered"
                },
                doorExit: {
                    title: "🚪 Sortie principale",
                    description: "Cette porte exige un badge de sécurité.",
                    type: "final",
                    requiredItem: "badge"
                }
            }
        },

        lab: {
            title: "Laboratoire de mathématiques",
            description: "Explore le matériel et cherche la clé du tiroir.",
            objects: {
                microscope: {
                    title: "🔬 Microscope numérique",
                    description: "Une énigme mathématique est affichée à l'écran.",
                    type: "question",
                    questionSubject: "maths"
                },
                securitySheet: {
    title: "📋 Fiche de sécurité",
    description: "Réponds à la question pour découvrir le mot de passe du terminal.",
    type: "question",
    questionSubject: "chimie",
    questionId: "terminalPassword"
},
                computer: {
                    title: "💻 Ordinateur",
                    description: "Le terminal demande un mot de passe.",
                    type: "password",
                    password: "MATH",
                    reward: "computerUnlocked"
                },
                safe: {
                    title: "🔐 Coffre",
                    description: "Le clavier accepte un code obtenu dans un QCM.",
                    type: "code",
                    code: "discovered",
                    reward: "key"
                },
                drawer: {
                    title: "🗄️ Tiroir verrouillé",
                    description: "Une clé permet d'ouvrir ce tiroir et de récupérer un badge.",
                    type: "item",
                    requiredItem: "key",
                    reward: "badge"
                },
                doorAnalysis: {
    title: "🚪 Salle d'analyse",
    description: "Réussis les 5 QCM du microscope et déverrouille le terminal pour continuer.",
    type: "roomDoor",
    targetRoom: "analysis",
    requiredItem: "computerUnlocked",
    requiredCode: "CHIM5"
}
            }
        },

        analysis: {
            title: "Salle d'analyse",
            description: "Résous une dernière énigme et retourne vers la sortie.",
            objects: {
                finalQuestion: {
                    title: "🧠 Problème final",
                    description: "Un dernier problème mathématique t'attend.",
                    type: "question",
                    questionSubject: "maths"
                },
                finalDoor: {
                    title: "🚪 Porte finale",
                    description: "Seul un badge de sécurité permet de sortir.",
                    type: "final",
                    requiredItem: "badge"
                }
            }
        }
    },

    chimie: {
        entrance: {
            title: "Vestiaire du laboratoire",
            description: "Le laboratoire de chimie est verrouillé. Commence par le protocole.",
            objects: {
                protocol: {
    title: "🧪 Protocole expérimental",
    description: "Réussis 3 QCM différents sur le protocole expérimental pour obtenir le code de progression.",
    type: "question",
    questionSubject: "chimie",
    requiredCorrectAnswers: 3,
    rewardCode: "PROTO5"
     },
     
protocolOrder: {
    title: "⚗️ Remettre le protocole dans l'ordre",
    description: "Un protocole a été mélangé. Replace ses étapes dans l'ordre logique.",
    type: "sequence",
    steps: [
        "Identifier le matériel nécessaire",
        "Mettre les équipements de protection",
        "Réaliser la manipulation selon les consignes",
        "Nettoyer et ranger le matériel"
    ],
    rewardCode: "PROTOORDRE"
},

                safetyPanel: {
                    title: "⚠️ Indication sur le mur",
                    description: "Message : « Le code est le nombre d'électrons du Cl- »",
                    type: "clue"
                },
                doorLab: {
    title: "🚪 Porte du laboratoire",
    description: "La porte va s'ouvrir quand tu auras répondu bon aux 3 QCM du protocole expérimental.",
    type: "roomDoor",
    targetRoom: "lab",
    requiredCode: "PROTO5"
},
            }
        },

        lab: {
            title: "Laboratoire de chimie",
            description: "Analyse les équipements pour retrouver le badge.",
            objects: {
               microscope: {
    title: "🔬 Microscope",
    description: "Réponds correctement à 5 QCM scientifiques différents pour obtenir le code de progression.",
    type: "question",
    questionSubject: "chimie",
    requiredCorrectAnswers: 5,
    rewardCode: "CHIM5"
},
                 securitySheet: {
    title: "📋 Fiche de sécurité",
    description: "Réponds à la question pour découvrir le mot de passe du terminal.",
    type: "question",
    questionSubject: "chimie",
    questionId: "terminalPassword"
},
matchingPuzzle: {
    title: "🧩 Tableau des symboles",
    description: "Associe chaque symbole à sa bonne définition.",
    type: "matching"
},

neutronPuzzle: {
    title: "⚛️ Analyse du noyau",
    description: "Un atome possède A = 23 nucléons et Z = 11 protons. Calcule le nombre de neutrons.",
    type: "calculation",
    answer: 12,
    rewardCode: "12"
},

                computer: {
                    title: "💻 Terminal de sécurité",
                    description: "Le terminal demande un mot de passe.",
                    type: "password",
                    password: "CHIM",
                    reward: "computerUnlocked"
                },
                safe: {
                    title: "🔐 Coffre de sécurité",
                    description: "Entre un code obtenu grâce à un QCM.",
                    type: "code",
                    code: "discovered",
                    reward: "key"
                },
                test: {
                    title: "🔐 Cadenas numéro 1",
                    description: "Entre un code.",
                    type: "code",
                    code: "18",
                    reward: "key"
                },
                cabinet: {
                    title: "🧪 Armoire",
                    description: "La clé permet d'ouvrir l'armoire et de récupérer un badge.",
                    type: "item",
                    requiredItem: "key",
                    reward: "badge"
                },
                doorAnalysis: {
                    title: "🚪 Salle d'analyse",
                    description: "Déverrouille le terminal avant de continuer.",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredItem: "computerUnlocked"
                }
            }
        },

        analysis: {
            title: "Salle d'analyse chimique",
            description: "Termine la mission scientifique.",
            objects: {
                experiment: {
                    title: "⚗️ Expérience finale",
                    description: "Interprète les données de l'expérience.",
                    type: "question",
                    questionSubject: "chimie"
                },
                finalDoor: {
                    title: "🚪 Sortie sécurisée",
                    description: "Il faut un badge pour quitter le laboratoire.",
                    type: "final",
                    requiredItem: "badge"
                }
            }
        }
    },

    boss: {
        entrance: {
            title: "Zone de confinement",
            description: "Le laboratoire ultime est protégé par un terminal.",
            objects: {
                journal: {
                    title: "📖 Journal du professeur",
                    description: "Le journal contient une énigme scientifique.",
                    type: "question",
                    questionSubject: "boss"
                },
                terminal: {
                    title: "💻 Terminal central",
                    description: "Le mot de passe du système est BOSS.",
                    type: "password",
                    password: "BOSS",
                    reward: "computerUnlocked"
                },
                doorLab: {
                    title: "🚪 Porte du laboratoire",
                    description: "Le terminal doit être déverrouillé.",
                    type: "roomDoor",
                    targetRoom: "lab",
                    requiredItem: "computerUnlocked"
                }
            }
        },

        lab: {
            title: "Laboratoire ultime",
            description: "Combine tes connaissances en maths et en chimie.",
            objects: {
                microscope: {
                    title: "🔬 Microscope expérimental",
                    description: "Une question du boss est disponible.",
                    type: "question",
                    questionSubject: "boss"
                },
                safe: {
                    title: "🔐 Coffre central",
                    description: "Le coffre attend un code issu d'un QCM.",
                    type: "code",
                    code: "discovered",
                    reward: "key"
                },
                cabinet: {
                    title: "🧰 Mallette scientifique",
                    description: "La clé permet d'ouvrir la mallette et de récupérer un badge.",
                    type: "item",
                    requiredItem: "key",
                    reward: "badge"
                },
                doorAnalysis: {
                    title: "🚪 Chambre finale",
                    description: "Un badge est nécessaire pour accéder à la dernière salle.",
                    type: "roomDoor",
                    targetRoom: "analysis",
                    requiredItem: "badge"
                }
            }
        },

        analysis: {
            title: "Chambre expérimentale finale",
            description: "Dernière étape de l'épreuve ultime.",
            objects: {
                finalQuestion: {
                    title: "🧠 Épreuve ultime",
                    description: "Résous une dernière question.",
                    type: "question",
                    questionSubject: "boss"
                },
                finalDoor: {
                    title: "🚪 Porte ultime",
                    description: "La sortie nécessite le badge.",
                    type: "final",
                    requiredItem: "badge"
                }
            }
        }
    }
};

/* =========================================================
   MED-ESCAPE — PARCOURS PAR MATIÈRE ET PAR NIVEAU
   Conserve les salles originales du niveau 1 de chimie.
   ========================================================= */

const LEVEL_DURATIONS_MINUTES = {
    maths: {
        1: 10,
        2: 15,
        3: 20,
        4: 30
    },
    chimie: {
        1: 10,
        2: 15,
        3: 20,
        4: 30
    },
    boss: {
        0: 30
    }
};

function cloneRooms(rooms) {
    return JSON.parse(JSON.stringify(rooms));
}

function buildLevelRooms(mode, level) {
    // Le Boss garde son parcours d'origine.
    if (mode === "boss") {
        return cloneRooms(ROOMS.boss);
    }

    // Copier le parcours existant sans modifier ROOMS.
    const rooms = cloneRooms(ROOMS[mode]);

    // IMPORTANT : chimie niveau 1 reste inchangée.
    if (mode === "chimie" && level === 1) {
        return rooms;
    }

    const isMaths = mode === "maths";

    // Corriger les éléments de chimie dans le parcours maths.
    if (isMaths) {
        if (rooms.entrance.objects.doorLab) {
            delete rooms.entrance.objects.doorLab.requiredCode;
        }

        if (rooms.lab.objects.securitySheet) {
            rooms.lab.objects.securitySheet.questionSubject = "maths";
            delete rooms.lab.objects.securitySheet.questionId;
        }

        if (rooms.lab.objects.doorAnalysis) {
            delete rooms.lab.objects.doorAnalysis.requiredCode;
        }
    }

    // Aux niveaux de chimie 2 à 4, la question spéciale
    // devient une question normale du niveau choisi.
    if (mode === "chimie" && rooms.lab.objects.securitySheet) {
        delete rooms.lab.objects.securitySheet.questionId;
    }

    // Parcours progressifs.


const extraRoomsByLevel = {
    1: [],
    2: ["preparation"],
    3: ["preparation", "calibration"],
    4: ["preparation", "calibration", "archive", "containment"],
    5: ["preparation", "calibration", "archive", "containment"],
    6: ["preparation", "calibration", "archive", "containment"]
};

if (mode === "maths") {
    extraRoomsByLevel[5] = [];
}


const extraRooms = extraRoomsByLevel[level] || [];


    // Personnaliser les salles de base.
    const subjectName = isMaths ? "mathématiques" : "chimie";

    rooms.entrance.title = isMaths
        ? `Accueil des mathématiques — Niveau ${level}`
        : `Vestiaire de chimie — Niveau ${level}`;

    rooms.lab.title = isMaths
        ? `Laboratoire de mathématiques — Niveau ${level}`
        : `Laboratoire de chimie — Niveau ${level}`;

    rooms.analysis.title = isMaths
        ? `Salle d'analyse mathématique — Niveau ${level}`
        : `Salle d'analyse chimique — Niveau ${level}`;

    rooms.entrance.description =
        `Parcours de ${subjectName}, niveau ${level}. ` +
        "Explore les objets, résous les énigmes et trouve la sortie.";

    // Définition des nouvelles salles.
    const roomDetails = {
        preparation: {
            title: "Salle de préparation",
            description: "Rassemble les informations nécessaires pour avancer.",
            puzzleTitle: "Épreuve de préparation",
            puzzleDescription: isMaths
                ? "Calcule : 18 + 24."
                : "Un atome possède A = 23 nucléons et Z = 11 protons. Calcule son nombre de neutrons.",
            answer: 42,
            rewardCode: "PREPA"
        },

        calibration: {
            title: "Salle de calibration",
            description: "Vérifie tes connaissances avant de continuer.",
            puzzleTitle: "Épreuve de calibration",
            puzzleDescription: isMaths
                ? "Calcule : 7 × 8."
                : "Une solution contient 2 moles dans 4 litres. Calcule la concentration en mol/L.",
            answer: isMaths ? 56 : 0.5,
            rewardCode: "CALIB"
        },

        archive: {
            title: "Archives scientifiques",
            description: "Analyse les données retrouvées dans les archives.",
            puzzleTitle: "Épreuve des archives",
            puzzleDescription: isMaths
                ? "Calcule : 125 ÷ 5."
                : "Un atome possède A = 40 nucléons et Z = 18 protons. Calcule son nombre de neutrons.",
            answer: isMaths ? 25 : 22,
            rewardCode: "ARCH"
        },

        containment: {
            title: "Salle de confinement",
            description: "Résous la dernière énigme avant l'analyse finale.",
            puzzleTitle: "Épreuve finale",
            puzzleDescription: isMaths
                ? "Calcule : 12 × 12."
                : "Un atome possède A = 35 nucléons et Z = 17 protons. Calcule son nombre de neutrons.",
            answer: isMaths ? 144 : 18,
            rewardCode: "FINAL"
        }
    };

    // Pas de salle supplémentaire au niveau 1.
    if (extraRooms.length === 0) {
        return rooms;
    }

    // Le parcours commence par la salle de préparation.
    const firstExtraRoom = extraRooms[0];

    if (rooms.entrance.objects.doorLab) {
        rooms.entrance.objects.doorLab.targetRoom = firstExtraRoom;
    }

    // Créer la première salle supplémentaire.
    rooms[firstExtraRoom] = {
        title: roomDetails[firstExtraRoom].title,
        description: roomDetails[firstExtraRoom].description,
        objects: {
            puzzle: {
                title: roomDetails[firstExtraRoom].puzzleTitle,
                description: roomDetails[firstExtraRoom].puzzleDescription,
                type: "calculation",
                answer: roomDetails[firstExtraRoom].answer,
                rewardCode: roomDetails[firstExtraRoom].rewardCode
            },
            note: {
                title: "📋 Note du laboratoire",
                description: "Indice : vérifie les données avant de valider ta réponse.",
                type: "clue"
            },
            doorNext: {
                title: "🚪 Porte du laboratoire",
                description: "Accède à la salle suivante.",
                type: "roomDoor",
                targetRoom: "lab"
            }
        }
    };

    // Le laboratoire mène vers les salles supplémentaires,
    // puis vers la salle d'analyse finale.
    const postLabRooms = extraRooms.slice(1);

    if (rooms.lab.objects.doorAnalysis) {
        rooms.lab.objects.doorAnalysis.targetRoom =
            postLabRooms.length > 0
                ? postLabRooms[0]
                : "analysis";
    }

    // Construire les salles supplémentaires suivantes.
    postLabRooms.forEach((roomKey, index) => {
        const details = roomDetails[roomKey];

        const nextRoom =
            index + 1 < postLabRooms.length
                ? postLabRooms[index + 1]
                : "analysis";

        rooms[roomKey] = {
            title: details.title,
            description: details.description,
            objects: {
                puzzle: {
                    title: details.puzzleTitle,
                    description: details.puzzleDescription,
                    type: "calculation",
                    answer: details.answer,
                    rewardCode: details.rewardCode
                },
                note: {
                    title: "📋 Dossier scientifique",
                    description:
                        `Dossier du niveau ${level} : lis les données attentivement.`,
                    type: "clue"
                },
                doorNext: {
                    title: "🚪 Porte vers la suite",
                    description: "Poursuis le parcours.",
                    type: "roomDoor",
                    targetRoom: nextRoom
                }
            }
        };
    });

    return rooms;
}
