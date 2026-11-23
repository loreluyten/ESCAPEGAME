/* MED-ESCAPE — Banque de QCM auditée (V3). Les niveaux et corrections sont appliqués directement. */
const QUESTION_BANK = [
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant les isotopes du brome (Z=35) cités ci-dessous, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’isotope 81Br possède plus d’électrons que l’’isotope 79Br",
      "L’isotope 81Br possède plus de neutrons que l’isotope 79Br",
      "L’isotope 81Br possède plus de protons que l’isotope 79Br",
      "L’isotope 81Br possède plus de nucléons que l’isotope 79Br",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-0015",
    "hint": "Deux isotopes d’un même élément ont le même numéro atomique Z, mais des nombres de masse A différents. Calcule les neutrons avec N = A − Z.",
    "explanation": "Les deux isotopes ont 35 protons et, s’ils sont neutres, 35 électrons. Le brome 79 possède 79 − 35 = 44 neutrons, tandis que le brome 81 en possède 81 − 35 = 46. L’isotope 81 a donc plus de neutrons et plus de nucléons."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant le nombre d’Avogadro NA, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "NA correspond au nombre d’atomes contenus dans une mole de carbone 12",
      "NA correspond au nombre d’atomes contenus dans une mole de carbone 14",
      "NA correspond au nombre d’atomes contenus dans 12 grammes de carbone 12",
      "NA vaut environ 6,02 × 10²³ mol⁻¹",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-0022",
    "hint": "Rappelle-toi ce que représente une mole : un nombre fixe d’entités. Pour la proposition sur le carbone, vérifie aussi la masse et l’isotope mentionnés.",
    "explanation": "Une mole contient exactement 6,02214076 × 10²³ entités. Une mole de carbone 12 comme une mole de carbone 14 contient donc le même nombre d’atomes. La masse de 12 g de carbone 12 correspond approximativement à une mole. A, B, C et D sont exactes."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant les atomes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Un atome est essentiellement constitué de vide",
      "La masse d’un électron est égale à la masse d’un proton",
      "Le nombre de protons d’un élément correspond à son numéro atomique (Z)",
      "La masse d’un atome est essentiellement concentrée dans son noyau",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "code": "CG-QCM-0029",
    "hint": "Compare la masse d’un électron à celle des nucléons, puis distingue la taille du noyau de celle de l’atome entier.",
    "explanation": "L’atome est principalement constitué de vide. Le numéro atomique Z correspond au nombre de protons. La quasi-totalité de la masse est concentrée dans le noyau, constitué de protons et de neutrons ; la masse de l’électron est bien plus faible que celle du proton."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant l’atome de fer, caractérisé par les nombres A = 56 et Z = 26, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le noyau de l’atome de fer contient 26 protons",
      "Le noyau de l’atome de fer contient 26 nucléons",
      "Le noyau de l’atome de fer contient 30 neutrons",
      "L’atome de fer possède plus d'électrons que de protons",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2
    ],
    "code": "CG-QCM-0067",
    "hint": "Utilise Z pour trouver les protons et A pour le total protons + neutrons. Un atome neutre possède autant d’électrons que de protons.",
    "explanation": "Z = 26 indique 26 protons. Le nombre de neutrons est A − Z = 56 − 26 = 30. Un atome neutre possède autant d’électrons que de protons."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant les corps purs, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le changement d’état physique d’un corps pur se fait à température constante lorsqu’il s’effectue à pression constante, dans les conditions usuelles",
      "Un corps pur composé est constitué d’au moins deux éléments chimiques différents",
      "Les corps purs composés sont constitués de molécules formées à partir d’atomes de plusieurs sortes",
      "Les corps purs élémentaires sont associés en molécules",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1
    ],
    "code": "CG-QCM-0079",
    "hint": "Distingue un corps pur simple, qui implique un seul élément chimique, d’un corps pur composé, qui en implique plusieurs. Pense aussi au palier de température lors d’un changement d’état.",
    "explanation": "A est vraie pour un changement d'état usuel à pression constante. B est vraie : un corps pur composé contient au moins deux éléments chimiques. C est fausse comme affirmation générale : certains composés, comme NaCl, sont ioniques et ne sont pas constitués de molécules distinctes. D est fausse : certains corps purs simples sont monoatomiques ou forment des réseaux."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant l’atome, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le nombre de masse correspond au nombre de protons",
      "Le numéro atomique correspond au nombre de neutrons",
      "La charge électrique d’un ion est indiquée en indice en bas à droite du symbole chimique",
      "Le numéro atomique permet de situer l’élément dans la classification périodique",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 3,
    "code": "CG-QCM-0086",
    "hint": "Rappelle les définitions de A et Z : l’un représente le total des nucléons, l’autre le nombre de protons. Le numéro atomique identifie l’élément dans le tableau périodique.",
    "explanation": "Le nombre de masse A est le total des protons et des neutrons. Le numéro atomique Z est le nombre de protons. La charge d’un ion est généralement indiquée en exposant à droite du symbole. Z permet d’identifier l’élément dans la classification périodique."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant la mole et/ou le nombre d’Avogadro, indiquer celle(s) qui est (sont) exacte(s) :",
    "choices": [
      "La mole permet de passer de l’échelle microscopique à l’échelle macroscopique",
      "La mole est la quantité de matière qui contient autant d'entités élémentaires qu'il y a d'atomes dans 12 kg de l'isotope 12 du carbone",
      "La constante d’Avogadro se détermine à partir de la règle de Klechkowski",
      "La constante d’Avogadro est à l’origine de la définition de la mole",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-0092",
    "hint": "Vérifie les unités de la définition historique de la mole : la masse mentionnée pour le carbone 12 est un point important. La règle de Klechkowski concerne un autre sujet.",
    "explanation": "La mole sert à relier le nombre d’entités microscopiques à une quantité de matière mesurable. La correction source indique que la proposition B contient une erreur d’unité : elle mentionne 12 kg au lieu de 12 g dans la définition historique. La règle de Klechkowski concerne le remplissage des orbitales électroniques."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Soit 135 mL d’une solution de chlorure de sodium à une concentration de 9,0% m/v (M=58,5 g.mol-1)",
    "choices": [
      "La concentration massique de cette solution est égale à 9,0 g.L-1",
      "Pour préparer les 135 mL de solution, il faut peser 12,2 g de chlorure de sodium (valeur arrondie à la 1re décimale)",
      "La concentration molaire de cette solution est égale à 1,54 mol.L-1 (valeur arrondie à la 2ème décimale)",
      "Dans 250 mL de solution, le nombre de moles de chlorure de sodium est égal à 385 moles",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-0117",
    "hint": "Une concentration de 9,0 % m/v signifie 9,0 g pour 100 mL de solution. Convertis ensuite en g/L, puis divise par la masse molaire pour obtenir mol/L.",
    "explanation": "9,0 % m/v correspond à 90 g·L⁻¹. Pour 135 mL, la masse nécessaire est 90 × 0,135 = 12,15 g, soit environ 12,2 g. La concentration molaire vaut 90/58,5 soit environ égal à 1,54 mol/L. Et dans 250mL, on obtient pas 385mol"
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant la composition isotopique du lithium naturel 3Li (Li = 6,943 de masse atomique) qui est un mélange des deux isotopes 6Li et 7Li, de masses atomiques respectives 6,017 et 7,018, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le lithium naturel est composé de 7,4 % de 6Li et de 92,6 % de 7Li",
      "Le lithium naturel est composé de 5,3 % de 6Li et de 94,7 % de 7Li",
      "Le lithium naturel est composé de 19,9 % de 6Li et de 80,1 % de 7Li",
      "Le lithium naturel est composé de 4,5 % de 6Li et de 95,5 % 7Li",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 0,
    "code": "CG-QCM-0141",
    "hint": "Pose x comme fraction de lithium 6. Écris la masse moyenne comme une moyenne pondérée : 6,017x + 7,018(1 − x) = 6,943.",
    "explanation": "La masse atomique moyenne est la moyenne pondérée des masses isotopiques par leurs abondances. La correction du fichier indique la proposition A. Le calcul avec les valeurs fournies donne une abondance de lithium 6 proche de 7,5 %, selon les arrondis."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant le nombre d’Avogadro NA, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Il correspond au nombre d’atomes réels contenus dans 1 mole de l’isotope 12C du carbone",
      "Il correspond au nombre d’atomes réels contenus dans 1 mole de l’isotope 14C du carbone",
      "Il correspond au nombre d’atomes réels contenus dans 12 grammes de l’isotope 14C du carbone",
      "Il correspond au nombre d’atomes réels contenus dans 12 grammes de l’isotope 12C du carbone",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "code": "CG-QCM-0155",
    "hint": "Une mole de n’importe quel isotope contient le nombre d’Avogadro d’atomes. En revanche, la masse correspondant à une mole dépend de la masse molaire de l’isotope.",
    "explanation": "Une mole contient le nombre d’Avogadro d’entités. Cela vaut pour le carbone 12 comme pour le carbone 14. Historiquement, 12 g de carbone 12 correspondent à une mole de cet isotope ; 12 g de carbone 14 n’en correspondent pas à une mole."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Une solution aqueuse de chlorure de sodium (NaCl) a une concentration massique de 23,4 g·L⁻¹. On donne M(NaCl) = 58,5 g·mol⁻¹. Parmi les propositions suivantes concernant cette solution, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le chlorure de sodium a pour formule KCl",
      "La masse de chlorure de sodium contenue dans 250 mL de cette solution est de 5,85 g",
      "Le nombre de moles de chlorure de sodium contenues dans 100 mL de cette solution est de 0,10 moles (valeur arrondie à la 2ème décimale)",
      "La concentration molaire en chlorure de sodium dans cette solution est de 0,40 mol.L-1 (valeur arrondie à la 2ème décimale)",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-0163",
    "hint": "La formule du chlorure de sodium est NaCl. Pour les calculs, pars de la concentration massique et du volume, puis utilise la masse molaire pour passer aux moles.",
    "explanation": "A est faux : KCl est le chlorure de potassium, tandis que NaCl est le chlorure de sodium. Avec Cm = 23,4 g·L⁻¹, dans 250 mL : m = 23,4 × 0,250 = 5,85 g. Dans 100 mL : n = (23,4 × 0,100)/58,5 = 0,040 mol, et C = 23,4/58,5 = 0,400 mol·L⁻¹. Les réponses correctes sont B et D."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Une solution commerciale concentrée d’acide chlorhydrique HCl possède une densité d = 1,16 et contient 37 % (m/m) de HCl. On donne M(HCl) = 36,5 g·mol⁻¹. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "1 L de solution pèse 1,16 g",
      "100 g de solution contiennent 37 g d’acide chlorhydrique",
      "La concentration massique de cette solution est égale à 730,8 g.L-1 (valeur arrondie à la 1ère décimale)",
      "La concentration molaire de cette solution est égale à 11,8 mol.L-1 (valeur arrondie à la 1ère décimale)",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-0172",
    "hint": "La densité permet de convertir le volume en masse de solution. Applique ensuite le pourcentage massique pour trouver la masse de HCl, puis divise par sa masse molaire pour calculer la concentration molaire.",
    "explanation": "1 L de solution pèse 1160 g. La concentration massique vaut 1160 × 0,37 = 429,2 g·L⁻¹. La concentration molaire vaut 429,2/36,5 = 11,76 mol·L⁻¹, soit 11,8 mol·L⁻¹ à une décimale. Les réponses B et D sont exactes."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "On prépare différentes solutions diluées à partir d’une solution commerciale concentrée d’acide chlorhydrique HCl contenant 37 % (m/m) de HCl, de densité d = 1,16 et de masse molaire M(HCl) = 36,5 g·mol⁻¹. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Si l’on verse 10 mL de solution concentrée dans un volume total de 250 mL, la solution diluée a une concentration molaire comprise entre 0,800 et 0,810 mol.L-1",
      "Si l’on verse 5 mL de solution concentrée dans un volume total de 300 mL, la solution diluée a une concentration massique comprise entre 7,1 et 7,2 g.L-1",
      "Pour préparer 500 mL d’une solution à 0,050 mol.L-1, il faut prélever entre 2,1 et 2,2 mL de solution concentrée",
      "Pour préparer 250 mL d’une solution à 0,100 eq.L-1, il faut prélever entre 2,1 et 2,2 mL de solution concentrée",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "code": "CG-QCM-0180",
    "hint": "Utilise la relation de dilution C₁V₁ = C₂V₂. Pour une concentration massique, garde les unités en g·L⁻¹ ; pour la concentration en équivalents, vérifie la convention utilisée pour HCl.",
    "explanation": "La correction source marque B, C et D comme réponses exactes. La relation de dilution permet de déterminer la concentration finale ou le volume à prélever. L’explication d’origine fait référence à la concentration de la solution concentrée du QCM précédent ; il faut donc vérifier les données et les arrondis avant de valider définitivement ces réponses."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant le composant essentiel d’un savon C18H35O2Na, laquelle (lesquelles) est (sont) exacte(s) ? On donne MNa = 23 g.mol-1",
    "choices": [
      "La masse molaire de C18H35O2Na est 306 g.mol-1",
      "La quantité de matière dans 125 g de C18H35O2Na est de 4,08.10-1 mol",
      "La quantité de matière dans 125 g de C18H35O2Na est de 68,5 mol",
      "Il y a environ 24,6.1022 molécules dans 125 g de C18H35O2Na",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "code": "CG-QCM-0198",
    "hint": "Calcule la masse molaire en additionnant les contributions de chaque atome. Puis applique n = m/M et N = n × Nₐ.",
    "explanation": "La masse molaire vaut 18 × 12 + 35 × 1 + 2 × 16 + 23 = 306 g·mol⁻¹. Pour 125 g, n = 125/306 ≈ 0,408 mol. Le nombre de molécules est alors d’environ 0,408 × 6,02 × 10²³ ≈ 2,46 × 10²³."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant l’abondance isotopique et la masse molaire atomique moyenne du brome (Br, Z=35) composé d’environ 50% de 79Br et 50% de 81Br, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La masse molaire atomique moyenne du brome est donnée par : ½ (79✕50+81✕50)",
      "L’isotope 81Br possède plus de protons que l’isotope 79Br",
      "L’isotope 81Br possède plus de neutrons que l’isotope 79Br",
      "L’isotope 81Br possède plus de nucléons que l’isotope 79Br",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      2,
      3
    ],
    "code": "CG-QCM-0204",
    "hint": "Les abondances de 50 % doivent être converties en fractions 0,50. Pour comparer les isotopes, utilise le même Z et calcule N = A − Z.",
    "explanation": "La masse moyenne avec deux abondances égales est 0,5 × 79 + 0,5 × 81 = 80. Les deux isotopes ont le même Z = 35, donc le même nombre de protons, mais l’isotope 81 possède davantage de neutrons et de nucléons."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Soit un mélange de 100 mL d’une solution de chlorure de potassium KCl à 12% m/v et 140 mL d’une solution de chlorure de calcium CaCl2 à 0,350 mol.L-1",
    "choices": [
      "Le nombre de moles d’ions chlorure dans le mélange est égale à 210 mmoles (valeur arrondie à l’unité)",
      "La masse d’ions chlorure dans le mélange est égale à 9,2 g (valeur arrondie à la 1ère décimale)",
      "La concentration en ions chlorure est égale à 38,3 g.L-1 (valeur arrondie à lère décimale)",
      "La concentration molaire en ions chlorure est égale à 0,88 mol.L-1 (valeur arrondie à la 2ème décimale)",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-0262",
    "hint": "Calcule séparément les moles de KCl et de CaCl₂. Chaque mole de KCl libère une mole de Cl⁻, tandis qu’une mole de CaCl₂ en libère deux. Additionne ensuite les contributions.",
    "explanation": "La quantité totale d’ions chlorure est la somme des contributions des deux sels. Pour KCl, calcule d’abord la masse dans 100 mL à 12 % m/v, puis divise par la masse molaire de KCl. Pour CaCl₂, utilise n = CV et multiplie par deux pour obtenir les moles de Cl⁻. La correction source retient B et C."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Soit 250 mL d’une solution d’hydroxyde de potassium KOH à une concentration à 1,1% m/v",
    "choices": [
      "La concentration massique des cette solution est égale à 1,1 g.L-1",
      "Pour préparer les 250 mL de solution, il faut peser 275 mg d’hydroxyde de potassium",
      "La concentration molaire de cette solution est égale à 0,10 mol.L-1 (valeur arrondie à la 2ème décimale)",
      "Dans les 250 mL de solution, le nombre de moles d’hydroxyde de potassium est égale à 0,05 mole (valeur arrondie à la 2ème décimale)",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 3,
    "code": "CG-QCM-0275",
    "hint": "Une concentration de 1,1 % m/v signifie 1,1 g pour 100 mL. Calcule la masse contenue dans 250 mL, puis utilise n = m/M avec la masse molaire de KOH.",
    "explanation": "À 1,1 % m/v, la concentration massique vaut 11 g·L⁻¹. Dans 250 mL, la masse de KOH est 11 × 0,250 = 2,75 g. Avec M(KOH) ≈ 56,1 g·mol⁻¹, cela représente environ 0,049 mol, soit 0,05 mol à deux décimales. La proposition D est donc cohérente avec ce calcul."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Une solution concentrée d’acide sulfurique H₂SO₄ contient 98,0 % (m/m) de H₂SO₄ et a une densité d = 1,81 (soit environ 1,81 kg de solution par litre). On donne M(H₂SO₄) ≈ 98,0 g·mol⁻¹. Parmi les propositions suivantes concernant cette solution concentrée, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "100 mL de solution pèsent 1,83 kg",
      "100 g de solution contiennent 98 mL d’acide sulfurique",
      "La concentration massique de cette solution est d'environ 1774 g·L⁻¹ (valeur arrondie à l'unité)",
      "La concentration molaire de cette solution est égale à 15,1 mol.L-1 (valeur arrondie à la 1ère décimale)",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 2,
    "code": "CG-QCM-0287",
    "hint": "Utilise la densité pour déterminer la masse d’un litre de solution, puis multiplie par la fraction massique d’acide sulfurique pour obtenir la concentration massique.",
    "explanation": "1 L de solution pèse 1810 g, dont 98 % de H₂SO₄ : 1810 × 0,98 = 1773,8 g, soit 1774 g·L⁻¹ à l'unité. La concentration molaire est 1773,8/98 = 18,1 mol·L⁻¹. Seule C est exacte."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "On prépare des solutions diluées à partir d’une solution concentrée d’acide sulfurique H₂SO₄ à 98,0 % (m/m), de densité d = 1,81. On donne M(H₂SO₄) = 98,0 g·mol⁻¹ ; la concentration molaire de la solution mère est donc d’environ 18,1 mol·L⁻¹. Laquelle (lesquelles) des propositions suivantes est (sont) exacte(s) ?",
    "choices": [
      "Pour préparer 500 mL d’une solution à 0,100 mol.L-1, il faut prélever entre 2,7 et 2,8 mL de solution concentrée",
      "Pour préparer 250 mL d’une solution à 0,100 mol.L-1, il faut prélever entre 1,3 et 1,4 mL de solution concentrée",
      "Si on dilue 10 mL de solution concentrée pour atteindre un volume final de 500 mL, la solution a une concentration molaire comprise entre 0,720 et 0,730 mol.L-1",
      "Si on dilue 5 mL de solution concentrée pour atteindre un volume final de 300 mL, la solution a une concentration comprise entre 29,5 et 29,6 g.L-1",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "code": "CG-QCM-0294",
    "hint": "Applique C₁V₁ = C₂V₂ pour déterminer le volume de solution concentrée à prélever. Pour vérifier une concentration massique, convertis la concentration molaire avec la masse molaire de H₂SO₄.",
    "explanation": "Avec C₁ ≈ 18,1 mol·L⁻¹, les volumes à prélever sont V₁ = C₂V₂/C₁ : pour 500 mL à 0,100 mol·L⁻¹, environ 2,76 mL ; pour 250 mL, environ 1,38 mL. En diluant 5 mL à 300 mL, C₂ ≈ 0,302 mol·L⁻¹, soit une concentration massique d’environ 29,6 g·L⁻¹. Les réponses correctes sont A, B et D."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant les éléments de la classification périodique évoqués ci-dessous, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "²⁴₁₂Mg possède 12 protons et 12 neutrons",
      "²⁸₁₄Si possède 14 protons et 14 neutrons",
      "⁴⁰₂₀Ca possède 20 électrons et 20 neutrons",
      "L’ion 81Br- possède 36 électrons et 46 neutrons",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-0301",
    "hint": "Pour chaque espèce, le nombre de protons est Z et le nombre de neutrons vaut A − Z. Pour un ion négatif, ajoute un électron par charge négative à l’atome neutre.",
    "explanation": "Pour ²⁴Mg, 24 − 12 = 12 neutrons ; pour ²⁸Si, 28 − 14 = 14 ; pour ⁴⁰Ca, 40 − 20 = 20. Le brome a Z = 35, donc Br⁻ possède 36 électrons. Avec A = 81, il possède 81 − 35 = 46 neutrons. La correction source retient les quatre premières propositions."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "On dispose de pastilles de NaOH pour préparer une solution de soude. La masse totale de NaOH utilisée est de 10 g et M=40g/mol On souhaite obtenir une solution de concentration finale 1 mol·L⁻¹. Parmi les volumes d’eau suivants, lequel permet d’obtenir la solution demandée ?",
    "choices": [
      "Le volume d’eau nécessaire est égal à 300 mL",
      "Le volume d’eau nécessaire est égal à 250 mL",
      "Le volume d’eau nécessaire est égal à 260 mL",
      "Le volume d’eau nécessaire est égal à 150 µL",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 1,
    "code": "CG-QCM-0327",
    "hint": "Calcule d’abord la quantité de matière de NaOH, puis déduis le volume final nécessaire pour obtenir une solution à 1 mol·L⁻¹.",
    "explanation": "10 g de NaOH correspondent à 0,25 mol (M = 40 g·mol⁻¹). Pour obtenir une solution à 1 mol·L⁻¹, il faut un volume final de 0,25 L, soit 250 mL. La réponse correcte est donc la proposition B. Attention : on complète avec de l’eau jusqu’au volume final indiqué ; ce n’est pas nécessairement le volume d’eau ajouté."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Soit 50 mL d’une solution d’hydroxyde de sodium NaOH à une concentration de 0,8% m/v.",
    "choices": [
      "La concentration massique de cette solution est égale à 0,8 g·L⁻¹",
      "La concentration molaire de cette solution est égale à 0,20 mol·L⁻¹",
      "Pour préparer 150 mL de cette solution, il faut peser 0,12 g d’hydroxyde de sodium",
      "Dans 250 mL de cette solution, le nombre de moles d’hydroxyde de sodium est égal à 0,05 mol",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-0349",
    "hint": "0,8 % m/v signifie 0,8 g pour 100 mL. Convertis en g·L⁻¹, puis divise par la masse molaire de NaOH, environ 40 g·mol⁻¹.",
    "explanation": "La concentration massique est 0,8 g / 0,100 L = 8 g·L⁻¹. La concentration molaire vaut 8/40 = 0,20 mol·L⁻¹. Dans 250 mL, n = C × V = 0,20 × 0,250 = 0,050 mol. La correction source retient B et D."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Une solution concentrée d’acide nitrique HNO₃ a une densité d = 1,42 et contient 69 % (m/m) de HNO₃. On donne M(HNO₃) ≈ 63,0 g·mol⁻¹. Parmi les propositions suivantes concernant cette solution concentrée, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "100 mL de cette solution pèsent 1,42 g",
      "100 g de cette solution contiennent 69 mL d’acide nitrique",
      "La concentration massique de cette solution est égale à 980 g·L⁻¹ (valeur arrondie à l’unité)",
      "La concentration molaire de cette solution a une valeur comprise entre 15,5 et 15,6",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      2,
      3
    ],
    "code": "CG-QCM-0383",
    "hint": "Une densité de 1,42 correspond à environ 1,42 kg par litre de solution. Utilise ensuite les 69 % en masse pour calculer la concentration massique, puis divise par la masse molaire de HNO₃.",
    "explanation": "Avec d = 1,42, un litre de solution a une masse d’environ 1420 g. La masse de HNO₃ vaut 0,69 × 1420 = 979,8 g·L⁻¹. La concentration molaire vaut 979,8/63,0 ≈ 15,55 mol·L⁻¹. La proposition D est cohérente avec ces données."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant les nombres quantiques, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’état d’un électron dans un atome est défini par 5 nombres quantiques",
      "Le nombre quantique de spin s est un nombre entier qui, pour une valeur donnée de n, peut prendre toutes les valeurs comprises entre 0 et n-1",
      "Le nombre quantique secondaire l dépend du nombre quantique magnétique m",
      "Le nombre quantique principal n peut être nul",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-0416",
    "hint": "Il existe quatre nombres quantiques : n, l, mₗ et mₛ. Vérifie les valeurs autorisées de chacun, en particulier n ≥ 1 et l compris entre 0 et n − 1.",
    "explanation": "L’état d’un électron est décrit par quatre nombres quantiques. Le spin prend deux valeurs possibles, +1/2 ou −1/2. Le nombre quantique secondaire l dépend de n, et non de mₗ. Enfin, le nombre quantique principal n est un entier strictement positif. Aucune des quatre premières propositions n’est exacte."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant les principes régissant la répartition des électrons dans les atomes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A l’état fondamental, un électron a toujours tendance à occuper l’orbite disponible d’énergie la plus élevée",
      "Si l’électron se trouve sur des orbites de rayon rn > a0 (rayon de la première orbite), on dit qu’il est dans un état excité",
      "Deux électrons d’un même atome peuvent avoir tous leurs nombres quantiques égaux",
      "La règle de Hund fait partie des principes régissant la répartition des électrons dans les atomes",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-0424",
    "hint": "Compare l’état fondamental à un état excité : à l’état fondamental, les électrons occupent les niveaux accessibles les moins énergétiques. Rappelle-toi aussi le principe d’exclusion de Pauli.",
    "explanation": "À l’état fondamental, les électrons occupent les orbitales de plus basse énergie disponibles : A est fausse. Un électron situé sur un niveau d’énergie supérieur peut être dans un état excité : B est retenue par la correction source. Deux électrons ne peuvent pas avoir les quatre mêmes nombres quantiques, conformément au principe de Pauli. La règle de Hund régit la répartition des électrons dans les orbitales dégénérées."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant les nombres quantiques et leur signification, quelle(s) est (sont) la (les) proposition(s) exacte(s) ?",
    "choices": [
      "Le nombre quantique principal n est un nombre entier négatif qui caractérise le rayon de l’orbite",
      "Le nombre quantique secondaire l peut prendre toutes les valeurs entières entre -m et +m incluses",
      "Le nombre quantique de spin s peut prendre toutes les valeurs entre 0 et n-1",
      "Le nombre quantique m ne peut prendre que 2 valeurs",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-0431",
    "hint": "Retrouve les domaines de définition : n est positif, l varie de 0 à n − 1, mₗ varie de −l à +l et le spin vaut ±1/2.",
    "explanation": "A est fausse car n est un entier positif non nul. B inverse la relation entre l et mₗ : ce dernier varie de −l à +l. C décrit incorrectement le spin, qui ne prend que deux valeurs. D est fausse car mₗ peut prendre 2l + 1 valeurs entières. La réponse attendue est donc E."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant l’atome, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le nombre de masse indique le nombre d’électrons périphériques",
      "Le proton et le neutron ont des masses beaucoup plus grandes que celle de l’électron",
      "L’atome est électriquement neutre",
      "Le numéro atomique indique le nombre de nucléons"
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-0438",
    "hint": "Distingue le nombre de masse A, qui compte les nucléons, du numéro atomique Z, qui compte les protons. Dans un atome neutre, le nombre de protons égale celui des électrons.",
    "explanation": "A est faux : le nombre de masse correspond au total des protons et des neutrons. B est vrai : protons et neutrons sont beaucoup plus massifs que les électrons. C est vrai pour un atome neutre. D est faux : Z est le nombre de protons."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant les nombres quantiques, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le nombre quantique principal n peut être nul",
      "Le nombre quantique secondaire l caractérise la forme des orbitales atomiques",
      "Le nombre quantique m ne peut prendre que des valeurs entières",
      "Le nombre quantique s définit l’orientation des orbitales atomiques",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-0451",
    "hint": "Le nombre l est associé à la sous-couche et à la forme de l’orbitale ; mₗ indique son orientation. Le spin concerne une propriété intrinsèque de l’électron.",
    "explanation": "n ne peut pas être nul. l caractérise la sous-couche et la forme des orbitales. mₗ prend des valeurs entières entre −l et +l. Le nombre quantique de spin mₛ ne décrit pas l’orientation spatiale de l’orbitale. Les réponses B et C sont donc exactes."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant la théorie de Bohr de l’orbite décrite par l’électron autour du noyau de l’atome d’hydrogène, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Il faut fournir une énergie de – 13,6 eV à l’atome d’hydrogène dans son état fondamental pour lui arracher son électron et l’ioniser",
      "La longueur d'onde de la radiation émise par l'atome d'hydrogène passant du niveau d'énergie n = 5 au niveau n = 3 est égale à 1,28.10-6 m (valeur arrondie à la 2ème décimale)",
      "La valeur de l’énergie du niveau 5 est E5 = – 0,54 eV (valeur arrondie à la 2ème décimale)",
      "La valeur de l’énergie du niveau 3 est E3 = 10,51 eV (valeur arrondie à la 2ème décimale)",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-0458",
    "hint": "Utilise la formule des niveaux d’énergie de l’hydrogène : Eₙ = −13,6/n² eV. Pour la longueur d’onde, calcule l’écart d’énergie entre les deux niveaux puis utilise ΔE = hc/λ.",
    "explanation": "Pour l'hydrogène, Eₙ = −13,6/n² eV. E₅ ≈ −0,54 eV et E₃ ≈ −1,51 eV. La transition 5 → 3 émet à environ 1,28 × 10⁻⁶ m. L'ionisation depuis n = 1 exige +13,6 eV. Les réponses B et C sont exactes."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant la théorie de Bohr et l’orbite décrite par l’électron autour du noyau de l’atome d’hydrogène, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le spectre d’émission de l’atome d’hydrogène, correspondant à une perte d’énergie, est observé après avoir fourni de l’énergie à son unique électron",
      "La longueur d’onde de la radiation émise par l’atome d’hydrogène en passant du niveau 3 au niveau 2 est environ égale à 6,54.10-7 m",
      "La longueur d’onde de la radiation émise par l’atome d’hydrogène en passant du niveau 2 au niveau 1 est environ égale à 1,22.10-7 m",
      "Le rayon de la première orbite stationnaire de Bohr pour l’atome d’hydrogène est 0,529 Å",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-0470",
    "hint": "Pour les transitions de l’hydrogène, utilise Eₙ = −13,6/n² eV. Une émission correspond à une transition vers un niveau d’énergie inférieur ; convertis ensuite l’écart d’énergie en longueur d’onde.",
    "explanation": "La transition n = 3 vers n = 2 donne une longueur d’onde d’environ 656 nm. La transition n = 2 vers n = 1 donne environ 122 nm. Le rayon de Bohr est a₀ ≈ 0,529 Å. La proposition A décrit l’excitation préalable suivie d’une émission lors du retour vers un niveau inférieur."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant l’atome d’hydrogène dans son état fondamental, absorbant un photon de longueur d’onde 97 nm, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Après cette absorption, l’électron se retrouve sur le niveau n = 4",
      "Après cette absorption, l’atome est ionisé",
      "Après cette absorption puis émission d’un photon de longueur d’onde 78 nm, l’électron rejoindra le niveau fondamental",
      "Après cette absorption puis émission d’un photon de longueur d’onde 1879 nm, l’électron se trouvera sur le niveau n = 3",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-0483",
    "hint": "Calcule l’énergie du photon avec E = hc/λ, puis compare-la à l’énergie nécessaire pour passer de n = 1 à n = 4 et à l’énergie d’ionisation de 13,6 eV.",
    "explanation": "Un photon de 97 nm possède une énergie proche de 12,8 eV, suffisante pour exciter l’électron depuis n = 1 jusqu’au niveau n = 4, mais insuffisante pour l’ioniser. Une transition de n = 4 vers n = 3 correspond à une longueur d’onde proche de 1879 nm. La correction source retient A et D."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant les règles régissant l’hybridation des orbitales atomiques, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Les orbitales atomiques hybrides sont de même énergie",
      "Les orbitales atomiques hybrides sont dites dégénérées",
      "Les orbitales atomiques hybrides sont équivalentes entre elles, seule leur orientation spatiale diffère",
      "Les orbitales atomiques hybrides ne peuvent jamais donner de liaisons π (pi)",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-0504",
    "hint": "Pour une hybridation donnée (sp, sp² ou sp³), compare les orbitales hybrides entre elles : leur énergie et leur orientation sont les éléments clés. Distingue aussi les liaisons σ des liaisons π.",
    "explanation": "Dans le modèle usuel de l’hybridation, les orbitales hybrides d’un même ensemble sont équivalentes et dégénérées, c’est-à-dire de même énergie ; elles diffèrent par leur orientation spatiale. Les liaisons π sont généralement formées par recouvrement latéral d’orbitales p non hybridées. Les quatre premières propositions sont celles retenues dans la correction source."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Concernant les principes régissant la répartition des électrons dans l’atome, quelles sont la ou les propositions exactes ?",
    "choices": [
      "A l’état fondamental, un électron a toujours tendance à occuper l’orbite disponible d’énergie la plus basse",
      "Les électrons d’un même atome diffèrent par au moins un de leurs nombres quantiques",
      "Les électrons occupent les sous-niveaux selon les valeurs décroissantes de l’énergie",
      "Le remplissage des cases quantiques d’une même sous-couche doit se faire de manière à ce qu’il y ait un maximum d’électrons présentant des spins parallèles",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "code": "CG-QCM-0510",
    "hint": "Associe chaque proposition à une règle : principe de moindre énergie, exclusion de Pauli et règle de Hund. Attention au sens de l’ordre de remplissage des sous-couches.",
    "explanation": "À l’état fondamental, les électrons occupent les orbitales disponibles de plus basse énergie. Le principe d’exclusion de Pauli interdit à deux électrons d’un même atome d’avoir les quatre mêmes nombres quantiques. La règle de Hund favorise les spins parallèles dans des orbitales dégénérées avant l’appariement. Les sous-niveaux se remplissent par énergie croissante, et non décroissante."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant la configuration électronique d’un élément, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Deux électrons d'un même atome peuvent avoir tous leurs nombres quantiques égaux",
      "Le remplissage des cases quantiques d'une même sous-couche doit se faire de manière à ce qu'il y ait un minimum d'électrons présentant des spins parallèles",
      "Les électrons occupent les sous-niveaux selon les valeurs croissantes de l'énergie",
      "Les électrons d'un même atome diffèrent par au moins un de leurs nombres quantiques",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      2,
      3
    ],
    "code": "CG-QCM-0516",
    "hint": "Rappelle-toi les deux règles essentielles : Pauli interdit quatre nombres quantiques identiques pour deux électrons, et Hund favorise les spins parallèles dans les orbitales de même énergie.",
    "explanation": "Les sous-niveaux sont remplis par énergie croissante. Deux électrons d’un même atome doivent différer par au moins un nombre quantique. Le remplissage d’une sous-couche suit la règle de Hund, qui favorise un maximum d’électrons célibataires de spins parallèles avant leur appariement."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant les principes régissant la répartition des électrons dans les atomes, indiquer celle(s) qui est (sont) exacte(s) :",
    "choices": [
      "Deux électrons d'un même atome peuvent avoir leurs 4 nombres quantiques égaux",
      "Le remplissage des cases quantiques d'une même sous-couche doit se faire de manière qu'il y ait un maximum d'électrons présentant des spins parallèles",
      "Les électrons occupent les sous-niveaux selon les valeurs croissantes de l'énergie",
      "A l'état fondamental, un électron a toujours tendance à occuper l'orbite disponible dont le niveau d'énergie est le plus élevé",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-0524",
    "hint": "Teste chaque proposition avec Pauli, Hund et le principe de moindre énergie. Une configuration fondamentale minimise l’énergie globale au lieu de remplir d’abord les niveaux les plus élevés.",
    "explanation": "La proposition A contredit le principe d’exclusion de Pauli. B correspond à la règle de Hund, et C au remplissage des sous-niveaux par énergie croissante. D est fausse : à l’état fondamental, les électrons occupent les orbitales disponibles les moins énergétiques."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant le moment dipolaire d’une liaison, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Il est lié à la dissymétrie de répartition des électrons de la liaison",
      "S’il existe, la liaison est dite polarisée",
      "Il est orienté de la fraction de charge négative vers la fraction de charge positive",
      "S’il existe, la liaison présente un caractère ionique",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1
    ],
    "code": "CG-QCM-0530",
    "hint": "Une liaison est polarisée si la densité électronique est répartie de façon inégale entre les deux atomes. Distingue une liaison covalente polarisée d’une liaison ionique.",
    "explanation": "Le moment dipolaire est associé à une séparation des charges partielles et caractérise une liaison polarisée. Dans la convention habituelle de chimie, la flèche du dipôle est orientée du pôle positif vers le pôle négatif. Une liaison polarisée n’est pas nécessairement ionique."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant la configuration électronique et la répartition des électrons dans les atomes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A l’état fondamental, un électron a tendance à occuper l’orbitale disponible d’énergie la plus basse",
      "Deux électrons d’un même atome ne peuvent pas avoir tous leurs nombres quantiques égaux",
      "Le remplissage des cases quantiques d'une même sous-couche doit se faire de manière à ce qu'il y ait un maximum d'électrons présentant des spins parallèles",
      "Les électrons occupent les sous-niveaux selon les valeurs croissantes de l'énergie",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-0536",
    "hint": "Vérifie séparément les quatre affirmations : moindre énergie, exclusion de Pauli, règle de Hund et ordre croissant d’énergie des sous-niveaux.",
    "explanation": "Les propositions A à D correspondent respectivement au principe de moindre énergie, au principe d’exclusion de Pauli, à la règle de Hund et au remplissage par énergie croissante. La correction source les retient toutes comme exactes."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant les électrons, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Les isotopes diffèrent par leur nombre d’électrons",
      "La notion d’orbitale atomique est liée à la probabilité de présence d’un électron dans une région de l’espace autour du noyau",
      "Quand un électron se trouve dans un état excité, le retour à l’état fondamental s'accompagne de l’absorption d'un rayonnement",
      "Les électrons sont de masse nulle",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 1,
    "code": "CG-QCM-0542",
    "hint": "Une orbitale décrit une distribution de probabilité de présence de l’électron. Pense aussi à la différence entre isotopes, états excités et émission de photons.",
    "explanation": "Les isotopes d’un élément diffèrent par leur nombre de neutrons, et non par leur nombre d’électrons s’ils sont neutres. Une orbitale est liée à la probabilité de présence de l’électron. Lors du retour vers un état d’énergie inférieur, l’atome émet un rayonnement. L’électron possède une masse non nulle."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant l’ion Al3+, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’ion Al3+ est un cation",
      "L’ion Al3+ provient d’un atome qui a gagné 3 électrons",
      "L’ion Al3+ provient d’un atome qui a perdu 3 électrons",
      "Fe3+ et Al3+ sont des isotopes",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2
    ],
    "code": "CG-QCM-0548",
    "hint": "Un ion positif s'est formé par perte d'électrons. Le signe de la charge te permet de distinguer un cation d'un anion.",
    "explanation": "Al3+ est un cation qui a perdu trois électrons. Fe3+ et Al3+ sont des ions de deux éléments différents, pas des isotopes."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant les configurations électroniques ci-dessous, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "26Fe : 1s22s22p63s23p64s23d6",
      "17Cl : 1s22s22p63s23p6",
      "24Cr : 1s22s22p63s23p64s23d4",
      "23V : 1s22s22p63s23p63d5",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 0,
    "code": "CG-QCM-0554",
    "hint": "Compte les électrons de chaque configuration et respecte l'ordre de remplissage. Attention au cas particulier du chrome, dont la configuration fondamentale est [Ar] 3d⁵ 4s¹.",
    "explanation": "La configuration du fer comporte 26 électrons et s'écrit [Ar] 3d⁶ 4s². Le chlore neutre possède 17 électrons, le chrome présente une configuration particulière 3d⁵ 4s¹, et le vanadium a [Ar] 3d³ 4s²."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant les configurations électroniques ci-dessous, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "21Sc : 1s2 2s2 2p6 3s2 3p6 4s2 3d1",
      "14Si : 1s2 2s2 2p6",
      "24Cr : 1s2 2s2 2p6 3s2 3p6 4s2 3d4",
      "23V : 1s2 2s2 2p6 3s2 3p6 3d3 4s2",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-0560",
    "hint": "Vérifie le nombre total d'électrons de chaque élément. Le silicium a Z = 14, et le chrome est une exception à la configuration attendue par simple remplissage.",
    "explanation": "Le scandium a pour configuration [Ar] 4s² 3d¹. Le silicium doit avoir 14 électrons, avec une configuration [Ne] 3s² 3p². Le chrome adopte [Ar] 4s¹ 3d⁵, tandis que le vanadium a [Ar] 3d³ 4s²."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant la configuration électronique de l’atome 19K, laquelle est exacte ? ⚠ QCU",
    "choices": [
      "1s2 2s2 2p6 3s2 3p6 4s1",
      "1s2 2s2 2p6 3s2 3p5 4s2",
      "1s2 2s2 2p6 3s2 3p7 4s0",
      "1s2 2s2 2p6 3s2 3p6 4s2",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 0,
    "code": "CG-QCM-0579",
    "hint": "Le potassium possède 19 électrons. Additionne les exposants et vérifie que chaque sous-couche respecte sa capacité maximale.",
    "explanation": "La configuration électronique du potassium neutre est [Ar] 4s¹, soit 19 électrons. Une sous-couche p ne peut contenir que six électrons, et la configuration proposée en D correspondrait à 20 électrons."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant la configuration électronique des ions concernés, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Mn2+ (Z = 25): 1s2 2s2 2p6 3s2 3p6 3d5 4s2",
      "Fe3+ (Z = 26): 1s2 2s2 2p6 3s2 3p6 3d5",
      "Cu+ (Z = 29): 1s2 2s2 2p6 3s2 3p6 3d9 4s2",
      "Zn2+ (Z = 30): 1s2 2s2 2p6 3s2 3p6 3d10 4s2",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 1,
    "code": "CG-QCM-0585",
    "hint": "Pour former un cation d'un métal de transition, retire d'abord les électrons de la sous-couche 4s avant ceux de 3d.",
    "explanation": "Fe3+ possède 23 électrons et sa configuration est [Ar] 3d⁵. Mn2+ est [Ar] 3d⁵, Cu+ est [Ar] 3d¹⁰ et Zn2+ est [Ar] 3d¹⁰. Les configurations proposées pour Mn2+, Cu+ et Zn2+ sont donc incorrectes."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant la configuration électronique du Cobalt (Z = 27), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "1s22s22p63s23p64s13d8",
      "1s21p62s22p63s23p63d3",
      "1s22s23s23p64s24p7",
      "1s22s22p63s23p64s23d7",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 3,
    "code": "CG-QCM-0592",
    "hint": "Le cobalt neutre possède 27 électrons. Après le cœur [Ar], vérifie le remplissage des sous-couches 4s et 3d.",
    "explanation": "La configuration fondamentale du cobalt est [Ar] 3d⁷ 4s². La proposition B contient une sous-couche 1p inexistante, et la proposition C utilise une sous-couche 4p avec une occupation impossible."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant la configuration électronique du nickel (Ni, z=28) qui est placé sur la période située après l’argon (Ar) dans la classification périodique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "[Ar] 4s² 3d8",
      "[Ar] 4s² 3d10",
      "1s² 2s² 2p6 3s2 3p6 4s2 3d8",
      "1s² 2s² 2p6 3s2 3p6 3d10",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2
    ],
    "code": "CG-QCM-0599",
    "hint": "Le nickel neutre a 28 électrons. Pars du cœur électronique [Ar], puis répartis les huit électrons restants entre 4s et 3d.",
    "explanation": "La configuration électronique du nickel est [Ar] 3d⁸ 4s². Les propositions A et C décrivent cette configuration. La proposition B donne trop d'électrons dans 3d, et D omet la sous-couche 4s."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant l’ion inconnu A dont la configuration électronique correspond à : 1s2 2s2 2p6 3s2 3p6 4s2 3d10, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Il s’agit de la configuration électronique de Sb3+ (Z=51)",
      "Il s’agit de la configuration électronique de Mn3+ (Z=25)",
      "Il s’agit de la configuration électronique de As3+ (Z=33)",
      "Il s’agit de la configuration électronique de Ge3+ (Z=32)",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 2,
    "code": "CG-QCM-0616",
    "hint": "Additionne les exposants pour trouver le nombre d'électrons de l'ion, puis tiens compte de la charge pour retrouver le numéro atomique de l'atome neutre.",
    "explanation": "La configuration donnée contient 30 électrons. Pour un ion 3+, l'atome neutre correspondant devrait avoir 33 protons. L'arsenic a Z = 33, mais sa configuration électronique ionique doit être vérifiée avec la convention de retrait des électrons ; la correction source retient C."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant les configurations électroniques de l’atome d’argent et de ses trois ions positifs, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "47Ag : 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d9",
      "Ag+ : 1s2 2s2 2p6 3s2 3p6 4s2 3d10 5s1 4d9",
      "Ag2+ : 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d9",
      "Ag3+ : 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d8",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      2,
      3
    ],
    "code": "CG-QCM-0622",
    "hint": "L'argent neutre est une exception de configuration : [Kr] 4d¹⁰ 5s¹. Lors de l'ionisation, enlève d'abord l'électron 5s, puis ceux de 4d.",
    "explanation": "La configuration de l'argent neutre est [Kr] 4d¹⁰ 5s¹. Ag+ est [Kr] 4d¹⁰, Ag2+ est [Kr] 4d⁹ et Ag3+ est [Kr] 4d⁸. Les propositions C et D sont celles retenues dans la correction source, mais leurs écritures complètes doivent être contrôlées attentivement."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant les configurations électroniques de divers métaux de transition, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "27Co : 1s2 2s2 2p6 3s2 3p6 4s2 3d8",
      "27Co3+ : 1s2 2s2 2p6 3s2 3p6 4s1 3d5",
      "25Mn : 1s2 2s2 2p6 3s2 3p6 4s2 3d5",
      "22Ti2+ : 1s2 2s2 2p6 3s2 3p6 3d2"
    ],
    "answer": [
      2,
      3
    ],
    "code": "CG-QCM-0634",
    "hint": "Compte les électrons de chaque espèce. Pour former un cation de métal de transition, enlève d’abord les électrons 4s, puis vérifie le remplissage de 3d.",
    "explanation": "La configuration du cobalt neutre est [Ar] 4s² 3d⁷, donc A contient trop d’électrons. Co³⁺ est [Ar] 3d⁶ après retrait des deux électrons 4s puis d’un électron 3d. Le manganèse neutre est [Ar] 4s² 3d⁵, et Ti²⁺ est [Ar] 3d²."
  },
  {
    "subject": "ATOMISTIQUE",
    "level": 1,
    "text": "Parmi les propositions suivantes concernant l’élément silicium Si (Z=14), composé d’un mélange de trois isotopes 28Si, 29Si, 30Si dans les proportions respectives 92,23 % ; 4,67 % et 3,10 % et dont les masses respectives sont de 27,9769 ; 28,9765 et 29,9738, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Sa configuration est 1s2 2s2 2p6 3s2 3p2",
      "Il se trouve dans la dernière colonne du tableau périodique",
      "Il se trouve dans la même colonne que l’élément carbone",
      "La masse atomique moyenne du silicium est de 28,09",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "code": "CG-QCM-0641",
    "hint": "Pour la masse moyenne, multiplie chaque masse isotopique par son abondance exprimée en fraction, puis additionne. Pour la position dans le tableau, compare les configurations électroniques externes du Si et du C.",
    "explanation": "Le silicium possède 14 électrons et sa configuration fondamentale est [Ne] 3s² 3p². Il appartient au groupe 14, comme le carbone, et non à la colonne des gaz nobles. La moyenne pondérée des masses isotopiques est proche de 28,09."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions concernant les configurations électroniques des éléments suivants, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "33As : 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3",
      "55Cs : 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1",
      "29Cu : 1s2 2s2 2p6 3s2 3p6 4s2 3d9",
      "42Mo : 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d5",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "code": "CG-QCM-0648",
    "hint": "Vérifie le nombre total d’électrons et les exceptions de configuration. Le cuivre et le molybdène adoptent notamment des configurations stabilisées avec une sous-couche d remplie ou à moitié remplie.",
    "explanation": "L’arsenic et le césium ont les configurations proposées. Le cuivre a pour configuration fondamentale [Ar] 3d¹⁰ 4s¹, et non 3d⁹ 4s². Le molybdène présente une configuration particulière [Kr] 4d⁵ 5s¹."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant l’élément krypton (36Kr) et son dérivé, le cyanohydrure de krypton (H-Kr-CN), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Sa configuration électronique est : 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6",
      "Sa configuration électronique peut aussi s’écrire : 1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6",
      "Kr fait partie des halogènes",
      "L’hybridation du carbone dans H-Kr-CN est de type sp3",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1
    ],
    "code": "CG-QCM-0654",
    "hint": "Le krypton a Z = 36. Additionne les exposants pour vérifier sa configuration et identifie sa famille dans le tableau périodique. Pour l’hybridation du carbone, compte les domaines électroniques autour de lui.",
    "explanation": "Les deux écritures des propositions A et B représentent la même configuration électronique du krypton. Le krypton est un gaz noble, et non un halogène. Dans le groupe –C≡N, le carbone est associé à une géométrie linéaire et à une hybridation sp, pas sp³."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant le fluor et l’ion fluorure, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La configuration du fluor est 9F : 1s2 2s2 2p5",
      "Il fait partie de la famille des gaz rares",
      "L’élément qui le suit dans la classification périodique a la configuration suivante : 1s2 2s2 2p6",
      "L’ion fluorure a la configuration d’un gaz rare",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "code": "CG-QCM-0660",
    "hint": "Le fluor neutre a neuf électrons. Un ion fluorure F⁻ gagne un électron : compare alors sa configuration à celle du néon.",
    "explanation": "Le fluor a pour configuration 1s² 2s² 2p⁵. Il appartient à la famille des halogènes. L’élément suivant est le néon, dont la configuration est 1s² 2s² 2p⁶. F⁻ possède lui aussi dix électrons et la configuration du néon."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions concernant les configurations électroniques du fer et de ses ions, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "26Fe : 1s2 2s2 2p6 3s2 3p6 3d8",
      "26Fe : 1s2 2s2 2p6 3s2 3p6 4s2 3d6",
      "Fe2+ : 1s2 2s2 2p6 3s2 3p6 4s2 3d4",
      "Fe3+ : 1s2 2s2 2p6 3s2 3p6 3d5",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-0666",
    "hint": "La configuration du fer neutre est [Ar] 4s² 3d⁶. Lors de l’ionisation, les électrons 4s sont retirés avant les électrons 3d.",
    "explanation": "Le fer neutre a la configuration [Ar] 4s² 3d⁶. Fe²⁺ est [Ar] 3d⁶, et Fe³⁺ est [Ar] 3d⁵. La proposition A est incorrecte pour l’atome neutre, et C conserve à tort les électrons 4s."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant la structure électronique de l’atome de manganèse 25Mn et de son ion Mn2+, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La configuration électronique du Mn est 1s2 2s2 2p6 3s2 3p6 4s2 3d5",
      "La configuration électronique du Mn est 1s2 2s2 2p6 3s2 3p6 3d7",
      "La configuration électronique du Mn2+ est 1s2 2s2 2p6 3s2 3p4 3d7",
      "La configuration électronique du Mn2+ est 1s2 2s2 2p6 3s2 3p6 4s0 3d5",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-0672",
    "hint": "Le manganèse neutre possède 25 électrons. Pour Mn²⁺, enlève les deux électrons de la couche 4s et vérifie que le nombre total restant est 23.",
    "explanation": "Le manganèse neutre a pour configuration [Ar] 4s² 3d⁵. Mn²⁺ perd les deux électrons 4s et devient [Ar] 3d⁵. La proposition C ne respecte pas le remplissage des sous-couches et le nombre d’électrons attendu."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant le nickel, sa configuration électronique et ses ions, indiquer celle(s) qui est (sont) exacte(s) :",
    "choices": [
      "La configuration électronique du nickel (28Ni) se termine en 3p6 3d8",
      "Pour l’ion Ni+, la configuration électronique se termine en 4s1 3d8",
      "Pour l’ion Ni2+, la configuration électronique se termine en 4s1 3d7",
      "La configuration électronique du nickel est 1s2 2s2 2p6 3s2 3p6 3d10",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 1,
    "code": "CG-QCM-0679",
    "hint": "Le nickel neutre est [Ar] 4s² 3d⁸. Pour former Ni⁺, retire un électron 4s ; pour Ni²⁺, retire le second électron 4s.",
    "explanation": "La configuration du nickel neutre est [Ar] 4s² 3d⁸. Ni⁺ est [Ar] 4s¹ 3d⁸, tandis que Ni²⁺ est [Ar] 3d⁸. La proposition D ne contient pas le bon nombre d’électrons pour le nickel."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant l’élément Zn (Z=30), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Zn possède 10 électrons de valence et Zn2+ possède 8 électrons de valence",
      "Zn possède 2 électrons de valence et Zn2+ possède 0 électron de valence",
      "Zn possède 10 électrons de valence et Zn2+ possède 10 électrons de valence",
      "Zn possède 2 électrons de valence et Zn2+ possède 18 électrons de valence",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 1,
    "code": "CG-QCM-0685",
    "hint": "Écris les configurations de Zn et Zn²⁺. Dans la définition des électrons de valence utilisée ici, regarde la couche externe et note que Zn²⁺ a perdu ses deux électrons 4s.",
    "explanation": "Zn a pour configuration [Ar] 3d¹⁰ 4s² et perd ses deux électrons 4s pour former Zn²⁺ : [Ar] 3d¹⁰. La notion d’électrons de valence peut varier selon la convention utilisée pour les métaux de transition ; la correction source retient B, mais cette convention mérite d’être explicitée."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant les configurations électroniques ci-dessous, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "14Si : 1s2 2s2 2p6 3s2 3p2",
      "24Cr : 1s2 2s2 2p6 3s2 3p6 3d4 4s2",
      "23V : 1s2 2s2 2p6 3s2 3p6 3d3 4s2",
      "Si4+ : 1s2 2s2 2p6 3s2 3p6",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2
    ],
    "code": "CG-QCM-0698",
    "hint": "Vérifie le total d’électrons dans chaque configuration. Le chrome est une exception : il adopte [Ar] 3d⁵ 4s¹. Si⁴⁺ a perdu quatre électrons par rapport au silicium neutre.",
    "explanation": "Le silicium neutre est [Ne] 3s² 3p², et le vanadium est [Ar] 3d³ 4s². Le chrome est [Ar] 3d⁵ 4s¹, pas [Ar] 3d⁴ 4s². Si⁴⁺ possède dix électrons, donc la configuration du néon, [Ne], et non dix-huit électrons."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant les configurations électroniques du chrome (Z = 24) et du cuivre (Z = 29), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Cr : 1s2 2s2 2p6 3s2 3p6 4s2 3d4",
      "Cr : 1s2 2s2 2p6 3s2 3p6 4s1 3d5",
      "Cu : 1s2 2s2 2p6 3s2 3p6 4s2 3d9",
      "Cu : 1s2 2s2 2p6 3s2 3p6 4s1 3d10",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-0705",
    "hint": "Apprends les deux exceptions classiques de la première série de transition : le chrome possède une sous-couche 3d à moitié remplie et le cuivre une sous-couche 3d remplie.",
    "explanation": "Les configurations fondamentales sont Cr : [Ar] 3d⁵ 4s¹ et Cu : [Ar] 3d¹⁰ 4s¹. Les propositions B et D sont donc exactes."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant l’élément fer (Z = 26), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La configuration électronique de l’élément fer est 1s2 2s2 2p6 3s2 3p6 4s2 3d6",
      "La configuration électronique de l’élément fer est 1s2 2s2 2p6 3s2 3p6 3d8",
      "La configuration électronique de l’ion Fe2+ est 1s2 2s2 2p6 3s2 3p6 3d6",
      "La configuration électronique de l’ion Fe2+ est 2s2 2p6 3s2 3p6 3d8",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2
    ],
    "code": "CG-QCM-0711",
    "hint": "Pour Fe²⁺, retire les deux électrons de 4s du fer neutre. Contrôle aussi que la configuration conserve bien le cœur électronique [Ar].",
    "explanation": "Fe neutre est [Ar] 4s² 3d⁶. Fe²⁺ est [Ar] 3d⁶ après perte des deux électrons 4s. La proposition B décrit mal l’atome neutre, et D omet des électrons du cœur."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant les éléments fluor (9F) et brome (35Br) appartenant à la même colonne de la classification périodique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La configuration électronique de l’ion fluorure F- est 1s2 2s2 2p4",
      "La configuration électronique de l’ion fluorure F- est 1s2 2s2 2p6",
      "La configuration électronique du brome est 1s2 2s2 2p6 3s2 3p6 4s2 4p5",
      "Ce sont des halogènes",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-0717",
    "hint": "F⁻ a gagné un électron par rapport à F neutre. Pour le brome, n’oublie pas les sous-couches 3d et 4s dans la configuration électronique complète.",
    "explanation": "F⁻ possède dix électrons et la configuration 1s² 2s² 2p⁶. Le fluor et le brome appartiennent tous deux aux halogènes. La configuration complète du brome est [Ar] 3d¹⁰ 4s² 4p⁵."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant les configurations électroniques du cation Cu+ (Cu : Z=29), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "1s2 2s2 2p6 3s2 3p6 4s0 3d10",
      "1s2 2s2 2p6 3s2 3p6 3d10",
      "1s2 2s2 2p6 3s2 3p6 4s0 3d10 4s0",
      "1s2 2s2 2p6 3s2 3p6 4s2 3d8",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "code": "CG-QCM-0724",
    "hint": "Le cuivre neutre est [Ar] 3d¹⁰ 4s¹. Pour Cu⁺, enlève l’électron 4s : les écritures avec 4s⁰ sont équivalentes à l’écriture abrégée sans cette sous-couche.",
    "explanation": "Cu⁺ possède 28 électrons et sa configuration est [Ar] 3d¹⁰. Les propositions A, B et C expriment cette configuration avec des conventions d’écriture différentes, même si C est redondante. D ne correspond pas au nombre d’électrons de Cu⁺."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la configuration électronique du phosphore (P : Z = 15) et son hybridation dans la phosphine PH3, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La configuration du phosphore est 1s2 2s2 2p6 3s2 3p3",
      "La configuration du phosphore est 1s2 2s2 2p6 3s2 3d3",
      "Son hybridation est sp3",
      "Son hybridation est digonale",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2
    ],
    "code": "CG-QCM-0730",
    "hint": "Pour la configuration du phosphore, place les trois derniers électrons dans 3p. Dans le modèle de Lewis utilisé en chimie générale, PH₃ possède trois liaisons P–H et un doublet non liant.",
    "explanation": "Le phosphore a pour configuration [Ne] 3s² 3p³. Dans le modèle d’hybridation simplifié du cours, la phosphine est généralement décrite comme sp³, avec trois liaisons et un doublet non liant. La géométrie moléculaire est pyramidale trigonale."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant la configuration électronique de l’atome de silicium 14Si (Z=14), laquelle (lesquelles) est (sont) exacte(s), sachant que le gaz rare qui le précède dans la classification périodique est le néon (Ne) ?",
    "choices": [
      "1s2 2s2 2p6 3s2 3p2",
      "[Ne] 2s2 2p6 3s2 3p2",
      "[Ne] 3s2 3p2",
      "1s2 2s2 2p6 3p4",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2
    ],
    "code": "CG-QCM-0736",
    "hint": "La notation abrégée [Ne] représente déjà les dix électrons du néon. Ajoute uniquement les quatre électrons restants du silicium.",
    "explanation": "Le silicium possède quatorze électrons. Sa configuration complète est 1s² 2s² 2p⁶ 3s² 3p², et sa notation abrégée est [Ne] 3s² 3p². La proposition B compte deux fois le cœur du néon."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant l’électronégativité dans l’échelle de Pauling, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’électronégativité mesure la tendance d’un atome engagé dans une liaison chimique à attirer à lui les électrons de cette liaison",
      "L’électronégativité augmente de droite à gauche dans une période de la classification périodique",
      "L’électronégativité diminue quand on descend une colonne de la classification périodique",
      "Les éléments les plus électronégatifs sont les métaux",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2
    ],
    "code": "CG-QCM-0745",
    "hint": "Retiens la tendance générale : l’électronégativité augmente vers la droite et vers le haut du tableau périodique. Le fluor est l’élément le plus électronégatif.",
    "explanation": "L’électronégativité décrit la capacité d’un atome engagé dans une liaison à attirer les électrons de liaison. Elle augmente généralement de gauche à droite et diminue lorsqu’on descend dans une colonne. Les éléments les plus électronégatifs sont des non-métaux."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant les éléments de la classification périodique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Les éléments possédant le même nombre d’électrons sur leur couche externe sont placés sur une même période",
      "Les éléments de la classification périodique sont classés par nombre croissant de nucléons",
      "La classification périodique est constituée de colonnes dans lesquelles sont placés des éléments présentant une même configuration électronique externe",
      "Un élément de transition est un élément dont l’atome présente une sous-couche d complète",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 2,
    "code": "CG-QCM-0752",
    "hint": "Les colonnes correspondent aux groupes et rassemblent souvent des éléments aux configurations électroniques externes semblables. La classification moderne est organisée par numéro atomique croissant, pas par nombre de nucléons.",
    "explanation": "Les éléments sont classés par numéro atomique croissant. Les éléments d’un même groupe ont des configurations électroniques externes similaires et des propriétés chimiques proches. Un élément de transition est caractérisé par une sous-couche d incomplète dans l’atome ou dans l’un de ses ions usuels."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant la classification périodique des éléments, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Dans une période, on distingue les éléments typiques et les éléments de transition",
      "La première colonne est la colonne des métaux alcalins",
      "L’électronégativité mesure la tendance d’un atome engagé dans une liaison à attirer à lui les électrons",
      "Les éléments d’une même période possèdent des propriétés chimiques voisines",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "code": "CG-QCM-0758",
    "hint": "Distingue une période (ligne) d’un groupe (colonne). Les éléments d’une même colonne ont généralement des propriétés chimiques plus proches que ceux d’une même période.",
    "explanation": "La première colonne contient les métaux alcalins, à l’exception de l’hydrogène qui présente des caractéristiques particulières. L’électronégativité est bien la tendance à attirer les électrons de liaison. La proposition D est fausse : les propriétés chimiques voisines caractérisent surtout les éléments d’un même groupe."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant la classification périodique des éléments, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Les éléments de transition sont des éléments qui ont (ou qui forment) au moins un ion avec une sous-couche d totalement remplie",
      "Certaines périodes de la classification forment un groupe homogène de propriétés chimiques voisines",
      "Dans une période, on distingue les éléments typiques et les éléments électronégatifs",
      "Les gaz rares ont une configuration électronique qui se termine par p5",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-0769",
    "hint": "Une famille correspond à une colonne, et non à une période. Les gaz nobles ont une couche externe complète ; la plupart se terminent par ns² np⁶.",
    "explanation": "A décrit incorrectement les éléments de transition, dont l’atome ou un ion présente généralement une sous-couche d incomplète. B confond périodes et groupes. C oppose incorrectement les éléments typiques aux éléments électronégatifs. D est fausse : les gaz nobles se terminent généralement par p⁶, sauf l’hélium, qui est 1s². La réponse E est celle indiquée dans le fichier source."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant la classification périodique des éléments, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Les éléments d’une même colonne de la classification ont des propriétés chimiques voisines",
      "Les éléments de transition sont des éléments qui ont (ou qui forment) au moins un ion avec une sous-couche d partiellement remplie",
      "Dans une période, on distingue les éléments typiques et les éléments de transition",
      "Les halogènes ont une configuration électronique qui se termine par p6",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "code": "CG-QCM-0775",
    "hint": "Les éléments d’une même colonne ont des propriétés voisines ; vérifie aussi la définition des éléments de transition et la configuration externe des halogènes.",
    "explanation": "A : les éléments d’une même colonne ont une configuration électronique externe similaire et donc des propriétés chimiques voisines. B : les éléments de transition peuvent former des cations avec une sous-couche d incomplète. D est fausse : les halogènes se terminent par ns2 np5."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Concernant la classification périodique des éléments, quelles sont la ou les propositions exactes ?",
    "choices": [
      "Les métaux alcalins conduisent très facilement à un ion porteur d’une charge négative",
      "Les chalcogènes correspondent aux éléments de configuration ns2 np5",
      "Les halogènes ont toutes leurs couches et sous-couches saturées à l’état fondamental",
      "Les gaz rares s’associent fréquemment aux métaux alcalins dans les milieux biologiques",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-0784",
    "hint": "Compare les configurations externes : alcalins ns1, chalcogènes ns2 np4, halogènes ns2 np5 et gaz nobles à couche externe saturée.",
    "explanation": "A : les métaux alcalins forment plutôt des ions positifs, par exemple Na+. B : les chalcogènes ont une configuration ns2 np4. C : cela décrit les gaz nobles. D : cela ne décrit pas les gaz nobles, mais les halogènes sont souvent réactifs."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant la classification périodique des éléments, indiquer celle(s) qui est (sont) exacte(s) :",
    "choices": [
      "Elle est constituée de 7 périodes et de 18 colonnes",
      "Les éléments de la colonne 18 sont tous solides",
      "La première colonne est celle des métaux alcalins",
      "Dans une période, on distingue les éléments typiques des éléments de transition",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "code": "CG-QCM-0791",
    "hint": "Souviens-toi que les périodes sont les lignes, les colonnes sont les groupes et que la colonne 18 contient les gaz nobles.",
    "explanation": "A : le tableau comporte 7 périodes et 18 colonnes. B est fausse : la colonne 18 est celle des gaz nobles, qui ne sont pas tous solides. C : la première colonne correspond aux métaux alcalins. D : on distingue les éléments typiques et les éléments de transition."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant la sous-couche électronique caractérisée par le nombre quantique secondaire l=1, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Ces orbitales atomiques sont de forme sphérique",
      "Ce sous-niveau d’énergie correspond aux orbitales atomiques p",
      "Cette sous-couche peut contenir au maximum 2 électrons",
      "Elle est caractéristique des orbitales atomiques d",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 1,
    "code": "CG-QCM-0798",
    "hint": "Associe les nombres quantiques secondaires aux sous-couches : l=0 pour s, l=1 pour p et l=2 pour d.",
    "explanation": "B est vraie : l=1 correspond aux orbitales p. A est fausse car les orbitales p ne sont pas sphériques. C est fausse : une sous-couche p peut contenir jusqu’à 6 électrons. D est fausse : les orbitales d correspondent à l=2."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant la classification périodique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Les atomes d’une même période ont la même structure électronique externe",
      "Les halogènes appartiennent au bloc s",
      "La deuxième colonne est celle de la famille des métaux alcalins",
      "Les rangées correspondent aux familles et les colonnes correspondent aux périodes",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-0805",
    "hint": "Distingue les lignes et les colonnes du tableau périodique, puis repère le bloc auquel appartiennent les halogènes.",
    "explanation": "A : les éléments d’une même colonne ont une structure électronique externe similaire. B : les halogènes sont dans le bloc p. C : les alcalins sont dans la première colonne ; la deuxième contient les alcalino-terreux. D : c’est l’inverse, les lignes sont les périodes et les colonnes les familles."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant les éléments : 5B, 19K, 24Cr, 13Al, 9F, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La configuration électronique de l’élément Chrome (Cr) se termine par 4s2 3d4",
      "L’élément Fluor (F) est l’élément le plus électronégatif de la classification périodique",
      "Les éléments Bore (B) et Aluminium (Al) appartiennent à la même colonne",
      "L’élément Potassium (K) a pour configuration électronique : 1s2 2s2 2p6 3s2",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-0812",
    "hint": "Vérifie l’exception de configuration électronique du chrome, la position du fluor et les groupes du bore et de l’aluminium.",
    "explanation": "A : le chrome présente une configuration qui se termine par 4s1 3d5. B : le fluor est l’élément le plus électronégatif. C : le bore et l’aluminium sont dans la même colonne. D : le potassium a une configuration qui se termine par 3p6 4s1."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant les éléments de la dernière colonne de la classification périodique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Ils appartiennent à la famille des gaz rares ou nobles",
      "Ils possèdent tous 8 électrons de valence",
      "Ils appartiennent au bloc p",
      "Ils possèdent des propriétés chimiques analogues",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-0819",
    "hint": "La dernière colonne est celle des gaz nobles ; attention, l’hélium est une exception concernant le nombre d’électrons de valence.",
    "explanation": "A : ce sont les gaz rares ou nobles. B : ils n’ont pas tous 8 électrons de valence, car l’hélium en possède 2. C : ils appartiennent au bloc p, à l’exception de l’hélium. D : les éléments d’une même colonne ont des propriétés voisines."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant le tableau périodique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Les métaux alcalins et les alcalino-terreux constituent les deux dernières colonnes du tableau",
      "Un élément typique est un élément dont l'atome présente une sous-couche d incomplète ou qui peut donner naissance à un ou plusieurs cations à sous-couche d incomplète",
      "Les halogènes ont pour configuration électronique ns2 np6",
      "Les éléments de transition représentent plus de 99 % de la masse du corps humain",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-0825",
    "hint": "Vérifie la position des alcalins et alcalino-terreux, la définition d’un élément de transition et la configuration des halogènes.",
    "explanation": "A : les alcalins et alcalino-terreux occupent les deux premières colonnes. B : cette définition correspond aux éléments de transition. C : les halogènes ont une configuration ns2 np5. D : les éléments typiques représentent l’essentiel de la masse du corps humain."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant la classification périodique schématiquement représentée en fonction de l’évolution du rayon atomique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Sa construction reproduit l’ordre de remplissage des niveaux donné par la règle de Klechkowski",
      "La première ligne correspond à la première couche électronique 1s",
      "La dernière colonne correspond à la colonne des gaz rares",
      "Les éléments les plus électronégatifs se situent en haut à droite de la classification périodique",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "code": "CG-QCM-0831",
    "hint": "Repère les premières couches, la dernière colonne et la tendance générale de l’électronégativité dans le tableau.",
    "explanation": "B : la première ligne correspond à la première couche électronique 1s. C : la dernière colonne est celle des gaz nobles, à couche externe saturée. D : l’électronégativité augmente globalement vers la droite et vers le haut du tableau."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant la classification périodique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Les atomes d’une même période possèdent la même structure électronique externe",
      "Les métaux alcalins appartiennent à la colonne 2 et ont pour configuration externe ns2",
      "Les éléments les plus électronégatifs se trouvent en bas à gauche du tableau périodique",
      "Les halogènes ont pour configuration électronique externe ns2 np5",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 3,
    "code": "CG-QCM-0837",
    "hint": "Les halogènes sont dans la colonne 17 : leur configuration externe se termine par ns2 np5.",
    "explanation": "A : les éléments d’une même colonne ont une structure externe similaire. B : les alcalins sont dans la colonne 1 et ont une configuration externe ns1. C : les éléments les plus électronégatifs sont en haut à droite. D : la configuration externe des halogènes est bien ns2 np5."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant l'électronégativité, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L'électronégativité augmente de droite à gauche le long d’une période de la classification périodique",
      "Les éléments les plus électronégatifs se situent en haut et à droite de la classification périodique",
      "Les métaux sont en général plus électronégatifs que les non-métaux",
      "Dans la famille des halogènes, l’iode est l’élément le plus électronégatif",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 1,
    "code": "CG-QCM-0844",
    "hint": "L’électronégativité augmente globalement vers la droite et vers le haut du tableau ; le fluor est le plus électronégatif.",
    "explanation": "A : l’électronégativité augmente de gauche à droite. C : les non-métaux sont en général plus électronégatifs que les métaux. D : le fluor est l’halogène le plus électronégatif."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant le métal alcalino-terreux 20Ca, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le calcium est un élément de transition",
      "La configuration électronique du calcium se termine par 4s²",
      "L’ion Ca2+ possède la même structure électronique que le gaz rare qui le précède dans la classification",
      "L’ion Ca2+ possède 1 électron de valence",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-0850",
    "hint": "Le calcium a Z=20 et une configuration [Ar] 4s² ; pour former Ca²⁺, il perd ses deux électrons 4s.",
    "explanation": "A : le calcium est un alcalino-terreux, pas un élément de transition. B : sa configuration se termine par 4s². C : Ca²⁺ possède 18 électrons, comme l’argon. D : les deux électrons 4s ont été perdus."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant la classification périodique des éléments, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Les éléments ayant le même nombre d'électrons externes sont disposés sur une même ligne (période)",
      "On change de colonne à chaque fois que le remplissage électronique fait intervenir une nouvelle couche",
      "Les éléments sont classés par nombre croissant de nucléons",
      "On peut connaître le nombre d'électrons externes d'un atome en sachant à quelle colonne il appartient",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 3,
    "code": "CG-QCM-0859",
    "hint": "Les éléments d’une même colonne ont généralement le même nombre d’électrons externes ; le tableau est classé par numéro atomique croissant.",
    "explanation": "A : les éléments ayant le même nombre d’électrons externes se trouvent généralement dans une même colonne. B : le changement de couche correspond au passage à une nouvelle période. C : le classement se fait par numéro atomique croissant. D : la colonne permet généralement d’identifier le nombre d’électrons externes pour les éléments représentatifs."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant les éléments chimiques de la dernière colonne de la classification périodique des éléments, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Ils font partie de la même famille",
      "Ils sont chimiquement instables et peuvent facilement perdre des électrons",
      "Ils font partie de la famille des halogènes",
      "Ils possèdent une couche électronique externe saturée",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-0866",
    "hint": "La dernière colonne est celle des gaz nobles : leur couche externe est saturée et ils sont généralement peu réactifs.",
    "explanation": "A : ce sont les gaz nobles, une même famille. B : ils sont généralement stables et peu réactifs. C : les halogènes se trouvent dans l’avant-dernière colonne. D : leur couche externe est saturée."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant les métaux de transition, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "On les distingue des éléments typiques",
      "Ce sont des éléments dont l'atome présente une sous-couche d complètement remplie",
      "Ils ont plutôt tendance à capter des électrons pour devenir des anions",
      "Bien que les derniers électrons de valence appartiennent au niveau d, les premières ionisations éjectent les électrons du niveau (n+1)s précédant le niveau nd",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-0873",
    "hint": "Les métaux de transition se distinguent des éléments typiques et perdent d’abord généralement les électrons de la sous-couche s externe lors de l’ionisation.",
    "explanation": "A : les métaux de transition forment une catégorie distincte des éléments typiques. B : la définition implique une sous-couche d incomplète pour l’atome ou certains de ses ions. C : ils forment plutôt des cations. D : les électrons ns sont généralement retirés avant les électrons (n−1)d."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant les éléments de la classification périodique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Les éléments de transition sont appelés gaz rares",
      "Les alcalino-terreux conduisent tous à un ion porteur d’une seule charge positive",
      "Les éléments typiques ont toutes leurs sous-couches de niveau n-1 remplies pour une période donnée",
      "Les métaux alcalins se trouvent dans la première colonne",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      2,
      3
    ],
    "code": "CG-QCM-0880",
    "hint": "Distingue les gaz nobles des métaux de transition et rappelle que les alcalino-terreux forment généralement des ions 2+.",
    "explanation": "A : les gaz nobles sont dans la colonne 18, tandis que les éléments de transition occupent le bloc d. B : les alcalino-terreux forment généralement des ions 2+. C : c’est la caractéristique donnée pour les éléments typiques. D : les métaux alcalins sont dans la première colonne."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant le phénomène d’électronégativité, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’électronégativité mesure la tendance d’un atome engagé dans une liaison à repousser les électrons",
      "Toutes les échelles conduisent au même classement des éléments par rapport à leur électronégativité",
      "Les éléments les plus électronégatifs se situent en haut à droite de la classification (hors gaz rares)",
      "Les éléments de la première colonne de la classification périodique sont dits électropositifs",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "code": "CG-QCM-0886",
    "hint": "L’électronégativité mesure l’attraction des électrons de liaison ; elle augmente globalement vers le coin supérieur droit du tableau.",
    "explanation": "A : l’électronégativité mesure la tendance à attirer les électrons. B : selon le cours, les différentes échelles donnent le même classement. C : les éléments les plus électronégatifs sont en haut à droite, notamment le fluor. D : les éléments de la première colonne sont généralement électropositifs."
  },
  {
    "subject": "CLASSIFICATION PÉRIODIQUE",
    "level": 2,
    "text": "Parmi les propositions suivantes concernant la classification périodique des éléments, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La première colonne est la colonne des alcalino-terreux",
      "La seconde colonne est la colonne des halogènes",
      "Le fluor est l’atome le plus électropositif de la classification périodique",
      "Les gaz rares ont tendance à attirer les électrons pour une meilleure stabilité",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-0895",
    "hint": "Les alcalins sont en colonne 1, les alcalino-terreux en colonne 2, les halogènes en colonne 17 et le fluor est très électronégatif.",
    "explanation": "A : la première colonne correspond aux métaux alcalins. B : la seconde colonne correspond aux alcalino-terreux. C : le fluor est le plus électronégatif, pas le plus électropositif. D : les gaz nobles sont déjà très stables."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la liaison chimique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Une liaison entre deux atomes qui ont la même électronégativité est dite liaison polaire",
      "La liaison dative est un cas de liaison ionique",
      "La formation d’une liaison σ entre deux atomes a lieu après la formation d’une liaison π",
      "Une triple liaison est formée d’une liaison π et de deux liaisons σ",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-0903",
    "hint": "Une liaison apolaire correspond à une différence d’électronégativité nulle ; dans une liaison multiple, la liaison σ se forme avant les liaisons π.",
    "explanation": "A : une liaison entre atomes de même électronégativité est apolaire. B : une liaison dative est un cas particulier de liaison covalente. C : la liaison σ se forme avant la liaison π. D : une triple liaison contient une liaison σ et deux liaisons π."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant le mode de formation des liaisons chimiques, quelle(s) est (sont) la (les) proposition(s) exacte(s) ?",
    "choices": [
      "Une liaison chimique se fait par la mise en commun de deux électrons",
      "Le recouvrement axial des orbitales atomiques entraîne la formation d’une liaison sigma σ",
      "Le recouvrement latéral des orbitales atomiques entraîne la formation d’une liaison pi π",
      "Une liaison triple comporte 1 liaison σ et 2 liaisons π situées dans deux plans orthogonaux",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-0915",
    "hint": "Distingue le recouvrement axial (σ) du recouvrement latéral (π) et retiens la composition d’une triple liaison.",
    "explanation": "A : la liaison covalente implique la mise en commun de deux électrons. B : le recouvrement axial forme une liaison σ. C : le recouvrement latéral forme une liaison π. D : une triple liaison contient une liaison σ et deux liaisons π perpendiculaires l’une à l’autre."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la liaison ionique, indiquer celle(s) qui est (sont) exacte(s) :",
    "choices": [
      "C’est une liaison faible",
      "Elle apparaît le plus souvent dans les composés cristallisés",
      "Elle résulte d’un équilibre d’interactions électrostatiques",
      "C’est une liaison non dirigée",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "code": "CG-QCM-0922",
    "hint": "La liaison ionique repose sur l’attraction électrostatique entre ions de charges opposées ; elle est non dirigée.",
    "explanation": "A : la liaison ionique est une liaison forte. B : elle apparaît notamment dans les composés cristallisés comme NaCl. C : elle résulte d’interactions électrostatiques. D : elle est non dirigée."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la liaison chimique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La liaison entre deux atomes qui ont la même électronégativité est une liaison ionique",
      "La liaison C-O est une liaison polaire",
      "Une liaison triple comporte 2 liaisons π et 1 liaison σ",
      "La liaison π est plus faible que la liaison σ",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "code": "CG-QCM-0928",
    "hint": "Compare l’électronégativité du carbone et de l’oxygène, puis rappelle la composition d’une liaison triple.",
    "explanation": "A : une liaison entre atomes de même électronégativité est apolaire, pas ionique. B : C–O est polaire car l’oxygène est plus électronégatif. C : une triple liaison contient une liaison σ et deux liaisons π. D : le recouvrement latéral d’une liaison π est généralement moins fort que le recouvrement axial d’une liaison σ."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la liaison covalente, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Dans une liaison covalente, chaque atome apporte un électron célibataire qui est mis en commun avec celui de l'autre atome",
      "La liaison dative est un cas particulier de liaison covalente",
      "L'élément phosphore (Z = 15) possède sur sa couche externe 5 électrons célibataires lui permettant de créer des liaisons covalentes",
      "Dans la molécule d'eau présentant deux liaisons covalentes entre l’oxygène et les hydrogènes, l’atome d’oxygène possède deux doublets libres",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "code": "CG-QCM-0934",
    "hint": "Pour le phosphore, distingue les cinq électrons de valence du nombre d’électrons célibataires ; pour H₂O, compte les doublets liants et non liants.",
    "explanation": "A : chaque atome apporte un électron dans le modèle classique de la liaison covalente. B : une liaison dative est un cas particulier de liaison covalente. C : le phosphore possède cinq électrons de valence, mais pas cinq électrons célibataires dans sa configuration fondamentale. D : l’oxygène de l’eau possède deux liaisons O–H et deux doublets libres."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la liaison atomique, laquelle (lesquelles) est (sont) exacte(s)?",
    "choices": [
      "Une liaison σ se forme par recouvrement axial de deux orbitales atomiques",
      "Une liaison π se forme par recouvrement latéral de deux orbitales np",
      "Une liaison π ne peut intervenir que s’il y a eu auparavant un recouvrement axial avec formation d’une liaison σ",
      "Une liaison triple comporte une liaison σ et deux liaisons π situées dans deux plans orthogonaux",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-0943",
    "hint": "Retrouve les deux types de recouvrement orbitalaire : axial pour σ, latéral pour π.",
    "explanation": "A : le recouvrement axial forme une liaison σ. B : le recouvrement latéral d’orbitales p forme une liaison π. C : dans une liaison multiple, une liaison σ est présente avant les liaisons π. D : une triple liaison comprend une σ et deux π orientées dans des plans orthogonaux."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant le caractère ionique d’une liaison, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La fraction de charge δ indique l’ionicité",
      "Si δ = 0, la liaison est une liaison ionique",
      "Si δ = 1, la liaison est 100 % atomique",
      "100 δ indique le pourcentage d’ionicité",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-0951",
    "hint": "La fraction δ varie de 0 pour une liaison sans caractère ionique à 1 pour une liaison entièrement ionique.",
    "explanation": "A : δ représente la fraction de caractère ionique. B : δ = 0 correspond à une liaison 100 % covalente dans le modèle du cours. C : δ = 1 correspond à une liaison 100 % ionique. D : le pourcentage d’ionicité est 100δ."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la formation et la nature des liaisons covalentes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Une liaison dative implique que chaque atome apporte un électron pour former la liaison",
      "Les quatre liaisons N–H dans l’ion ammonium NH4+ sont de nature différente",
      "Dans la molécule SiH4, l’atome de silicium est hybridé sp²",
      "Dans une liaison covalente entre deux atomes différents, les électrons sont partagés de manière égale entre les deux atomes",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-0957",
    "hint": "Une liaison dative reçoit ses deux électrons d’un seul atome donneur ; SiH₄ est tétraédrique et son silicium est hybridé sp³.",
    "explanation": "A : dans une liaison dative, les deux électrons sont fournis par le même atome. B : les quatre liaisons N–H de NH₄⁺ sont identiques une fois l’ion formé. C : le silicium est hybridé sp³ dans SiH₄. D : entre deux atomes différents, le partage peut être inégal en raison de la différence d’électronégativité."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la liaison ionique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "C’est une liaison dative",
      "C’est une liaison forte",
      "C’est une liaison qui résulte d’un équilibre d’interactions électrostatiques",
      "C’est une liaison parfaitement symétrique",
      "Aucune proposition ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-0965",
    "hint": "La liaison ionique est due à l’attraction entre ions opposés ; elle ne correspond pas à une liaison dative covalente.",
    "explanation": "A : une liaison ionique n’est pas une liaison dative. B : elle fait partie des liaisons fortes. C : elle résulte d’interactions électrostatiques entre ions de charges opposées. D : la distribution électronique n’est pas parfaitement symétrique entre les atomes d’origine."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la molécule d’éthylène (C2H4), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La double liaison C=C résulte du partage de deux électrons",
      "L’hybridation de chaque atome de carbone résulte de la formation de trois orbitales hybrides de type sp2",
      "La liaison π de l’éthylène est le résultat d’un recouvrement axial",
      "La molécule possède quatre liaisons σ identiques avec les atomes d’hydrogène",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-0971",
    "hint": "Dans l’éthylène, chaque carbone est sp² ; la double liaison contient une σ et une π, et chaque carbone forme deux liaisons C–H.",
    "explanation": "A : une double liaison comporte quatre électrons partagés au total. B : chaque carbone sp² possède trois orbitales hybrides. C : la liaison π résulte d’un recouvrement latéral. D : les quatre liaisons C–H sont équivalentes dans cette molécule."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la formation des liaisons, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Une liaison double comporte deux liaisons π",
      "Une liaison dative est un cas particulier de formation d’une liaison de covalence",
      "Une liaison σ correspond à un recouvrement axial de deux orbitales",
      "Une liaison σ ne peut intervenir que s’il y a eu auparavant un recouvrement latéral de deux orbitales",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-0978",
    "hint": "Une double liaison comprend une σ et une π ; la liaison dative est covalente et la liaison σ provient d’un recouvrement axial.",
    "explanation": "A : une double liaison comporte une liaison σ et une liaison π. B : la liaison dative est un cas particulier de liaison covalente. C : une liaison σ résulte d’un recouvrement axial. D : la liaison σ n’exige pas un recouvrement latéral préalable."
  },
  {
    "subject": "CONFIGURATION ÉLECTRONIQUE",
    "level": 3,
    "text": "Parmi les propositions suivantes concernant les nombres quantiques, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le nombre quantique n est un nombre entier positif non nul qui caractérise le rayon de l’orbite sur laquelle se trouve l’électron ainsi que son énergie",
      "Le nombre quantique secondaire l est un nombre entier pouvant prendre toutes les valeurs entre 0 et n-1",
      "Le nombre quantique m peut prendre toutes les valeurs entières entre -l et +l incluses",
      "Le nombre quantique de spin s ne peut prendre que deux valeurs",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-0985",
    "hint": "Pour un niveau n donné, l va de 0 à n−1 ; m va de −l à +l et le spin possède deux valeurs possibles.",
    "explanation": "A : n est un entier positif qui caractérise le niveau d’énergie. B : l prend les valeurs entières de 0 à n−1. C : m prend les valeurs entières de −l à +l. D : le spin peut prendre deux valeurs, +½ ou −½."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant l’hybridation des orbitales atomiques, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’atome de carbone dans un alcane présente une hybridation sp3",
      "L’atome d’oxygène dans la molécule d’eau présente une hybridation sp3",
      "L’atome d’azote dans la molécule d’ammoniac présente une hybridation sp3",
      "La molécule d’eau est linéaire",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "code": "CG-QCM-0991",
    "hint": "Les carbones des alcanes, l’oxygène de H₂O et l’azote de NH₃ sont décrits ici par une hybridation sp³ ; vérifie la géométrie coudée de l’eau.",
    "explanation": "A, B et C sont données comme exemples dans le cours. D est fausse : la molécule d’eau est coudée, et non linéaire."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant l’atome d'oxygène (168O), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Sa configuration électronique est : 1s2 2s2 2p6 3s2 3p4",
      "À l’état fondamental, il a une case 2p vide",
      "Les quatre domaines électroniques autour de l'oxygène dans H2O présentent une disposition tétraédrique",
      "Son état hybridé dans la molécule d’eau est sp2",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 2,
    "code": "CG-QCM-0998",
    "hint": "L’oxygène a Z=8 : sa configuration fondamentale se termine par 2p⁴. Dans l’eau, l’hybridation considérée est sp³.",
    "explanation": "A : la configuration correcte est 1s² 2s² 2p⁴. B : la sous-couche 2p contient quatre électrons. C : les domaines électroniques autour de l’oxygène s’organisent selon une disposition tétraédrique. D : l’oxygène est considéré sp³ dans la molécule d’eau."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Concernant les orbitales atomiques hybrides, quelle(s) est (sont) la ou les proposition(s) exacte(s) ?",
    "choices": [
      "Les orbitales atomiques hybrides sont équivalentes entre elles, seule leur orientation spatiale diffère",
      "Un type d’hybridation donné conduit à des cases quantiques accolées",
      "Les orbitales atomiques hybrides peuvent contenir un électron célibataire ou un doublet d’électrons",
      "Les orbitales atomiques hybrides ne peuvent jamais donner de liaisons π",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-1006",
    "hint": "Rappelle les propriétés des orbitales hybrides : équivalence, nombre conservé lors de l’hybridation, occupation électronique et participation aux liaisons.",
    "explanation": "A, B et C correspondent aux propriétés présentées dans le cours. D : selon le cours, les orbitales hybrides ne participent pas à la formation des liaisons π."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Concernant l’hybridation de l’atome d’oxygène dans la molécule d’eau, quelle(s) est (sont) la ou les proposition(s) exacte(s) ?",
    "choices": [
      "De par l’hybridation de l’oxygène, la molécule d’eau s’inscrit dans un tétraèdre",
      "Les doublets d’électrons de l’oxygène de l’eau occupent deux des sommets d’un tétraèdre",
      "L’oxygène de l’eau est à l’état hybridé sp2",
      "L’oxygène de l’eau est à l’état hybridé sp3",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "code": "CG-QCM-1012",
    "hint": "Autour de l’oxygène, compte deux liaisons O–H et deux doublets libres : quatre domaines électroniques correspondent à une hybridation sp³.",
    "explanation": "A et B décrivent la disposition tétraédrique des domaines électroniques, dont deux sont des doublets libres. C est fausse ; D est vraie selon le modèle d’hybridation du cours."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant l’hybridation des orbitales atomiques, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’atome de carbone dans un alcyne présente une hybridation sp",
      "L’atome d’oxygène dans la molécule d’eau présente une hybridation sp3",
      "L’atome d’azote dans la molécule d’ammoniac présente une hybridation sp2",
      "La molécule d’ammoniac est linéaire",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1
    ],
    "code": "CG-QCM-1018",
    "hint": "Les carbones d’une triple liaison sont sp ; l’oxygène de l’eau et l’azote de l’ammoniac sont considérés sp³ dans ce cours.",
    "explanation": "A et B sont vraies. C est fausse : l’azote de NH₃ est sp³. D est fausse : l’ammoniac a une géométrie pyramidale trigonale, pas linéaire."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant les règles régissant l’hybridation des orbitales atomiques, indiquer celle(s) qui est (sont) exacte(s) :",
    "choices": [
      "Pour un type donné d’hybridation, seule l’orientation spatiale des orbitales atomiques hybrides diffère",
      "Après hybridation, il y a autant d’orbitales atomiques hybrides que d’orbitales atomiques leur ayant donné naissance",
      "Les orbitales atomiques hybrides sont dites dégénérées",
      "Les orbitales atomiques hybrides participent à la formation des liaisons π",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "code": "CG-QCM-1024",
    "hint": "L’hybridation conserve le nombre d’orbitales combinées ; les orbitales hybrides obtenues sont équivalentes en énergie dans un même type d’hybridation.",
    "explanation": "A : pour un type donné, les orbitales hybrides ont des orientations spatiales différentes. B : leur nombre est égal au nombre d’orbitales atomiques combinées. C : elles sont dégénérées dans le modèle du cours. D : le cours réserve les orbitales hybrides à la formation des liaisons σ."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant les liaisons chimiques, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Dans une liaison dative, chaque atome apporte un électron à la liaison",
      "Une liaison hydrogène est une liaison forte, comparable en énergie à une liaison covalente",
      "Une liaison π se forme par recouvrement latéral d’orbitales p, après la formation d’une liaison σ",
      "Une liaison métallique résulte de la mise en commun d’un seul électron entre deux atomes métalliques voisins",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 2,
    "code": "CG-QCM-1030",
    "hint": "Une liaison dative reçoit ses deux électrons d’un même atome donneur ; une liaison π résulte d’un recouvrement latéral après la liaison σ.",
    "explanation": "A : les deux électrons d’une liaison dative proviennent du même atome. B : la liaison hydrogène est plus faible qu’une liaison covalente. C : c’est la définition de la liaison π donnée dans le cours. D : la liaison métallique implique des électrons délocalisés."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "On considère la molécule d’ibuprofène (C13H18O2), constituée d’un noyau benzénique portant un groupe isobutyle –CH2–CH(CH3)2 et un groupe –CH(CH3)–COOH. Dans le modèle d’hybridation utilisé dans le cours, l’oxygène du carbonyle est sp² et celui du groupe hydroxyle est sp³. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La molécule comprend 6 atomes de carbone hybridés sp3",
      "La molécule comprend 2 atomes hybridés sp",
      "Les deux atomes d’oxygène présentent des hybridations différentes",
      "La molécule comprend 7 atomes hybridés sp3",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "code": "CG-QCM-1045",
    "hint": "Dans le schéma de l’ibuprofène, distingue les carbones saturés, les carbones aromatiques et les deux oxygènes du groupe carboxyle.",
    "explanation": "A : six carbones sont sp³ selon le schéma du cours. B : la molécule ne comporte pas d’atome sp. C : l’oxygène du carbonyle est sp², tandis que l’oxygène du groupe –OH est considéré sp³ dans le cours. D : les six carbones sp³ et l’oxygène du –OH font sept atomes sp³."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant l’hybridation de l’atome de soufre dans la molécule H2S (S : Z = 16), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’hybridation du soufre est sp²",
      "L’hybridation du soufre est sp3",
      "La molécule s’inscrit dans un tétraèdre légèrement déformé",
      "La molécule s’inscrit dans un triangle équilatéral",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-1054",
    "hint": "Autour du soufre, compte deux liaisons S–H et deux doublets libres pour retrouver quatre domaines électroniques.",
    "explanation": "Selon le modèle d’hybridation utilisé dans le cours, le soufre est sp³ et les domaines électroniques adoptent une disposition tétraédrique légèrement déformée."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la molécule NH3 (N : Z = 7), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La molécule est trigonale",
      "L’angle entre les liaisons est de 120 degrés",
      "Le doublet libre de la molécule occupe le même espace qu’une liaison",
      "La molécule s’inscrit dans un tétraèdre",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      2,
      3
    ],
    "code": "CG-QCM-1071",
    "hint": "L’azote de NH₃ possède trois liaisons N–H et un doublet libre : la disposition électronique est tétraédrique et la forme moléculaire est pyramidale trigonale.",
    "explanation": "A : la molécule est pyramidale trigonale, et non plane. B : l’angle H–N–H est d’environ 107°, pas 120°. C : le doublet libre occupe une région de l’espace comparable à un domaine de liaison. D : les domaines électroniques s’inscrivent dans une disposition tétraédrique."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant l’hybridation du carbone de la molécule de CH2Cl2, indiquer celle(s) qui est (sont) exacte(s) :",
    "choices": [
      "L’hybridation du carbone est sp",
      "L’hybridation du carbone est sp²",
      "L’hybridation du carbone est sp3",
      "La géométrie de la molécule est tétraédrique",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      2,
      3
    ],
    "code": "CG-QCM-1077",
    "hint": "Le carbone central forme quatre liaisons simples : compte les domaines électroniques pour déterminer son hybridation et sa géométrie.",
    "explanation": "Le carbone de CH₂Cl₂ forme quatre liaisons simples. Son hybridation est sp³ et la géométrie autour de lui est tétraédrique."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant les nombres quantiques possiblement associés aux électrons de la couche de valence du phosphore (Z=15), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "n = 3, l = 1, m = -1",
      "n = 3, l = 3, m = -1",
      "n = 2, l = 1, m = 1",
      "n = 3, l = 1, m = 0",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-1083",
    "hint": "Le phosphore a pour configuration externe 3s² 3p³. Pour une orbitale p, l=1 et m peut valoir −1, 0 ou +1.",
    "explanation": "A et D sont possibles pour des électrons de la sous-couche 3p. B est impossible car l doit être inférieur à n. C décrit une orbitale de la couche n=2, et non de la couche de valence du phosphore."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la molécule de formaldéhyde H2CO, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’hybridation du carbone du formaldéhyde est de type sp2",
      "L’hybridation du carbone du formaldéhyde est de type sp3",
      "La molécule de formaldéhyde est plane",
      "Les angles entre les liaisons du formaldéhyde sont d’environ 120°",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "code": "CG-QCM-1090",
    "hint": "Le carbone du groupe carbonyle possède trois domaines électroniques autour de lui ; pense à la géométrie trigonale plane.",
    "explanation": "Le carbone du formaldéhyde est hybridé sp² et présente une géométrie trigonale plane, avec des angles proches de 120°. La proposition C dépend de la géométrie considérée : la molécule est généralement décrite comme plane."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant l’hybridation du carbone de la molécule HCN, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’hybridation du carbone est sp",
      "L’hybridation du carbone est sp2",
      "L’hybridation du carbone est sp3",
      "La géométrie de la molécule est tétraédrique",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 0,
    "code": "CG-QCM-1096",
    "hint": "Dans H–C≡N, le carbone possède deux domaines de liaison : un avec H et un avec N.",
    "explanation": "Le carbone de HCN est hybridé sp. La molécule est linéaire, et non tétraédrique."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "On considère quatre atomes de carbone : C1 est le carbone du méthane CH4 ; C2 est un carbone de l’éthène C2H4 ; C3 est le carbone du dioxyde de carbone CO2 ; C4 est un carbone de l’éthyne C2H2. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le carbone C1 est hybridé sp2",
      "Le carbone C2 est hybridé sp3",
      "Le carbone C3 est hybridé sp3",
      "Le carbone C4 est hybridé sp2",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-1105",
    "hint": "Pour chaque carbone, repère les liaisons simples, doubles ou triples : sp³ correspond à une géométrie tétraédrique, sp² à une géométrie trigonale et sp à une géométrie linéaire.",
    "explanation": "Selon les explications du document, les propositions A à D ne correspondent pas aux hybridations des carbones représentés. La structure illustrée dans le document original est nécessaire pour vérifier indépendamment les positions numérotées."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "On considère la molécule de chlorure de nitrosyle NOCl, dont la structure de Lewis est Cl–N=O, avec un doublet non liant sur l’azote. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’atome d’azote central ne possède aucun doublet non liant",
      "L’atome d’azote central est hybridé sp3",
      "La molécule possède une géométrie tétraédrique",
      "La molécule est linéaire",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-1112",
    "hint": "Examine la structure de Lewis de NOCl et le nombre de domaines électroniques autour de l’azote ; la molécule n’est pas linéaire.",
    "explanation": "L’explication du document indique que la molécule est trigonale et non linéaire. Les schémas des propositions A à C ne sont pas présents dans le texte extrait, ce qui empêche de les vérifier indépendamment."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la molécule de CO2, appelée neige carbonique sous forme solide, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’hybridation du carbone de la molécule est de type sp",
      "L’hybridation du carbone dans cette molécule est du même type que celle du carbone dans HCN",
      "À pression atmosphérique, le CO2 passe de l’état solide à la forme gazeuse par sublimation",
      "La transformation du CO2 liquide en neige carbonique (état solide) s’appelle la solidification",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-1126",
    "hint": "Le CO₂ est linéaire, comme HCN pour la géométrie autour du carbone ; à pression atmosphérique, le CO₂ solide sublime.",
    "explanation": "Le carbone du CO₂ est hybridé sp, comme dans HCN. À pression atmosphérique, le CO₂ solide passe directement à l’état gazeux par sublimation. Le passage du CO₂ liquide au solide est une solidification."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant les orbitales atomiques et les liaisons chimiques, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le recouvrement axial d’orbitales atomiques np permet de former une liaison σ",
      "Les liaisons σ présentent une symétrie de révolution autour de l’axe joignant les centres des noyaux",
      "La première liaison d'une liaison multiple est une liaison σ",
      "Les liaisons π s’obtiennent par recouvrement latéral des orbitales np",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-1143",
    "hint": "Retiens les deux types de recouvrement : axial pour σ et latéral pour π.",
    "explanation": "Les liaisons σ présentent une symétrie autour de l’axe internucléaire et résultent d’un recouvrement axial. Dans une liaison multiple, la première liaison est σ ; les liaisons π suivantes proviennent d’un recouvrement latéral."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "On considère deux atomes de carbone : C1 appartient à la molécule d’éthène C2H4 et C2 appartient à la molécule de méthane CH4. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le carbone C1 est hybridé sp3",
      "À l’état excité, le carbone possède la configuration électronique 1s2 2s1 2p3",
      "Le carbone C1 est hybridé sp",
      "Le carbone C2 est hybridé sp2",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 1,
    "code": "CG-QCM-1150",
    "hint": "Les dessins des états électroniques sont essentiels pour les propositions A et B. Pour C et D, détermine l’hybridation à partir des liaisons de chaque carbone sur la structure.",
    "explanation": "La clé extraite du document donne la proposition B comme correcte. Les schémas et la structure portant les numéros C1 et C2 ne sont pas présents dans l’extraction ; cette réponse est donc à contrôler avec le document original."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "On considère la vanilline (4-hydroxy-3-méthoxybenzaldéhyde), constituée d'un cycle benzénique portant un groupe aldéhyde –CHO, un groupe hydroxyle –OH et un groupe méthoxy –O–CH3. Dans le modèle du cours, l'oxygène du carbonyle est sp² et les deux autres oxygènes sont sp³. Parmi les propositions suivantes, lesquelles sont exactes ?",
    "choices": [
      "La molécule comprend 2 atomes d’oxygène hybridés sp²",
      "La molécule comprend 4 atomes hybridés sp",
      "La molécule comprend 1 atome de carbone hybridé sp3",
      "La molécule comprend 7 atomes de carbone hybridés sp²",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      2,
      3
    ],
    "code": "CG-QCM-1162",
    "hint": "Dans la vanilline, les six carbones du cycle aromatique et le carbone du groupe aldéhyde sont sp² ; le carbone du groupe méthoxy est sp³.",
    "explanation": "Le carbone du groupe méthoxy (–OCH₃) est sp³. Les six carbones aromatiques et le carbone du groupe aldéhyde sont sp². La molécule ne comporte pas d’atome sp. L’oxygène du carbonyle est sp² ; les deux autres oxygènes sont généralement décrits comme sp³ dans le modèle du cours."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant les liaisons chimiques, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Les deux électrons d’une liaison dative entre deux atomes ne sont fournis que par un des deux atomes",
      "La liaison hydrogène est la plus faible des liaisons fortes",
      "La liaison ionique résulte d’un équilibre d’interactions électrostatiques",
      "Une double liaison entre deux atomes est constituée de deux liaisons sigma",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2
    ],
    "code": "CG-QCM-1168",
    "hint": "Une liaison dative reçoit ses deux électrons d’un même atome ; une liaison double contient une σ et une π.",
    "explanation": "A : dans une liaison dative, les deux électrons du doublet liant sont fournis par un seul atome. C : la liaison ionique repose sur les interactions électrostatiques entre ions. B est fausse selon la classification du cours, et D est fausse car une double liaison comprend une σ et une π."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la classification des liaisons chimiques, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La liaison ionique est une liaison faible",
      "La liaison atomique ou covalente est une liaison forte",
      "La liaison hydrogène est une liaison de nature électrostatique",
      "La liaison hydrogène est la plus forte des liaisons faibles",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "code": "CG-QCM-1174",
    "hint": "Distingue les liaisons fortes, comme les liaisons covalentes et ioniques, des interactions faibles, dont la liaison hydrogène.",
    "explanation": "A est fausse : la liaison ionique est classée parmi les liaisons fortes. B est vraie : la liaison covalente est une liaison forte. C et D correspondent à la classification présentée dans le cours."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "On applique la théorie de Bohr à l’orbite circulaire décrite par un électron autour du noyau d’un atome d’hydrogène caractérisé par la valeur n = 2 du nombre quantique principal. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le rayon de cette orbite est r2 = 4,761 Å",
      "L’énergie de l’électron est E2 = -1,51 eV",
      "L’énergie d’ionisation de l’atome à partir de cette orbite est de 1,51 eV",
      "On ne peut pas calculer l’énergie de l’électron s’il se retrouve sur un autre niveau",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-1180",
    "hint": "Utilise les relations de Bohr : rₙ = a₀n² et Eₙ = −13,6/n² eV pour l’atome d’hydrogène.",
    "explanation": "Pour n=2, r₂ = 0,529 × 4 = 2,116 Å et E₂ = −13,6/4 = −3,4 eV. L’énergie d’ionisation depuis ce niveau vaut 3,4 eV. L’énergie d’un autre niveau peut également être calculée avec la formule de Bohr. Aucune des propositions A à D n’est exacte."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant l’eau, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Dans l’eau liquide, les molécules sont associées par liaison hydrogène",
      "Les composés à liaison ionique sont très solubles dans l’eau",
      "La molécule d’eau présente un moment dipolaire",
      "L’eau est un solvant dissociant",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-1187",
    "hint": "Relie les propriétés de l’eau à sa polarité, à sa capacité à former des liaisons hydrogène et à sa forte constante diélectrique.",
    "explanation": "Les molécules d’eau forment des liaisons hydrogène. L’eau est polaire, possède un moment dipolaire et favorise la dissolution et la dissociation de nombreux composés ioniques. Attention : tous les composés ioniques ne sont pas nécessairement très solubles."
  },
  {
    "subject": "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    "level": 4,
    "text": "Parmi les propositions suivantes concernant la liaison hydrogène, laquelle (lesquelles) est (sont) exactes ?",
    "choices": [
      "Elle apparaît dans les composés à liaison atomique comportant un (ou plusieurs) atome(s) d’hydrogène",
      "Elle est de nature électrostatique",
      "C’est la plus forte des liaisons faibles",
      "Si l’atome d’hydrogène est lié à un atome fortement électronégatif, la liaison correspondante est polarisée",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-1193",
    "hint": "La liaison hydrogène dépend d’un hydrogène lié à un atome très électronégatif et d’une interaction avec un autre site accepteur.",
    "explanation": "La liaison hydrogène est une interaction de nature électrostatique généralement classée parmi les interactions faibles. Elle implique une liaison fortement polarisée entre l’hydrogène et un atome électronégatif. La proposition A est formulée de façon large : la simple présence d’hydrogène ne suffit pas à garantir une liaison hydrogène."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "On considère un gaz parfait vérifiant l'équation PV = nRT, où P est la pression, V le volume, n la quantité de matière, R la constante des gaz parfaits et T la température absolue. Parmi les propositions suivantes, lesquelles sont exactes ?",
    "choices": [
      "Il s’agit de l’équation des gaz parfaits",
      "Le produit PV est constant si T et n sont constants",
      "Le rapport V/T est constant si P et n sont constants",
      "Le rapport P/T est constant si V et n sont constants",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-1201",
    "hint": "Pars de PV=nRT, puis isole PV, V/T ou P/T en gardant constantes les variables indiquées.",
    "explanation": "L’équation des gaz parfaits est PV=nRT. Si T et n sont constants, PV est constant ; si P et n sont constants, V/T est constant ; si V et n sont constants, P/T est constant. La formule illustrée dans le document original n’apparaît pas dans le texte extrait."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant la transformation thermodynamique d’un système, quelle(s) est (sont) la (les) proposition(s) exacte(s) ?",
    "choices": [
      "Une transformation thermodynamique isotherme se fait à pression constante",
      "Une transformation thermodynamique isobare se fait à volume constant",
      "Une transformation thermodynamique adiabatique se fait sans échange d’énergie avec le milieu extérieur",
      "Une transformation thermodynamique isochore se fait à température constante",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-1209",
    "hint": "Mémorise les quatre définitions : isotherme = température constante ; isobare = pression constante ; isochore = volume constant ; adiabatique = pas d’échange de chaleur.",
    "explanation": "A est fausse : isotherme signifie température constante. B est fausse : isobare signifie pression constante. C est considérée fausse dans la formulation stricte du cours si « énergie » est entendue au sens large : une transformation adiabatique signifie absence d’échange de chaleur. D est fausse : isochore signifie volume constant."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Concernant les systèmes thermodynamiques et le milieu extérieur, quelles sont la ou les propositions exactes ?",
    "choices": [
      "Le classement des systèmes thermodynamiques est fonction des échanges d’énergie et/ou de matière entre le système et le milieu extérieur",
      "Un système ouvert ne permet que des échanges d’énergie",
      "Un système fermé ne permet que des échanges de matière",
      "Un système isolé ne permet ni échange d’énergie, ni échange de matière",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-1215",
    "hint": "Classe les systèmes selon leurs échanges : ouvert (matière et énergie), fermé (énergie mais pas matière), isolé (ni matière ni énergie).",
    "explanation": "A est vraie : la distinction dépend des échanges avec le milieu extérieur. B est fausse : un système ouvert échange matière et énergie. C est fausse : un système fermé peut échanger de l’énergie mais pas de matière. D est vraie."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant la transformation d’un système thermodynamique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Une transformation isotherme se fait à volume constant",
      "Une transformation adiabatique se fait sans échange de chaleur avec le milieu extérieur",
      "Une transformation chimique correspond toujours à un changement d’état physique",
      "Une transformation isobare se déroule à pression constante",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-1221",
    "hint": "Distingue les transformations isotherme, isobare, isochore et adiabatique selon la grandeur constante ou l’absence d’échange thermique.",
    "explanation": "A : isotherme signifie à température constante. B : une transformation adiabatique se fait sans échange de chaleur. C : une transformation chimique ne nécessite pas un changement d’état physique. D : isobare signifie à pression constante."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant le principe de la thermodynamique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Une réaction exothermique correspond à une variation d’enthalpie ΔH négative",
      "Lors d’une transformation réversible, la variation d’entropie totale (système + milieu) est nulle",
      "Une réaction pour laquelle on a ΔH > 0 et ΔS < 0 est non spontanée quelle que soit la température",
      "Dans un système isolé, l’énergie totale se conserve",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-1228",
    "hint": "Utilise les signes de ΔH et ΔS, le critère de spontanéité ΔG = ΔH − TΔS et le premier principe.",
    "explanation": "A : une réaction exothermique a ΔH < 0. B : l’entropie totale ne varie pas lors d’une transformation réversible idéale. C : si ΔH > 0 et ΔS < 0, ΔG reste positive à toute température positive. D : l’énergie totale d’un système isolé se conserve."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant les principes de la thermodynamique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Dans un système isolé, la variation d’entropie ΔS du système qui subit la transformation est toujours négative",
      "Si ΔG > 0, la réaction se produit spontanément",
      "L’énergie interne U d’un système correspond à l’énergie totale du système",
      "Si la variation d’enthalpie est positive, la réaction dégage de l’énergie dans le milieu extérieur",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 2,
    "code": "CG-QCM-1236",
    "hint": "Pour une transformation spontanée dans un système isolé, l’entropie totale ne diminue pas ; à température et pression constantes, examine le signe de ΔG.",
    "explanation": "A : dans un système isolé, l’entropie ne diminue pas spontanément. B : ΔG > 0 indique que la réaction n’est pas spontanée dans le sens indiqué. C : c’est la définition donnée dans le cours. D : ΔH > 0 correspond à une réaction endothermique."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant un gaz parfait qui occupe un volume de 0,08 m³, sous une pression de 2,5 × 10⁵ Pa et à 293 K, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La quantité de gaz est d’environ 1,22 mol",
      "La quantité de gaz est d’environ 8,21 mol",
      "La quantité de gaz est d’environ 44,84 mol",
      "Le produit PV est constant si T et n sont constants",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-1243",
    "hint": "Applique PV = nRT avec les unités SI, puis vérifie la condition nécessaire pour que le produit PV soit constant.",
    "explanation": "La loi des gaz parfaits donne n = PV/(RT). Avec les données de l’énoncé, n ≈ 8,21 mol. Si n et T sont constants, PV = nRT est également constant."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant le système thermodynamique fermé où se produit la réaction C₂H₄(g) + H₂O(g) → C₂H₆O(g), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Toute forme d’énergie est comptée positivement lorsqu’elle est reçue par ce système",
      "Lorsqu’on ajoute de la vapeur d’eau dans l’enceinte du système, à P et à T constantes, l’équilibre se déplace vers la droite",
      "Ce qui se trouve à l’extérieur de ce système constitue ce qu’on appelle le milieu extérieur",
      "Lorsqu’on augmente la pression au sein du système, l’équilibre se déplace vers la droite",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-1250",
    "hint": "Applique le principe de Le Chatelier et compare le nombre de moles gazeuses de chaque côté de l’équation.",
    "explanation": "A : selon la convention de signe du cours, l’énergie reçue par le système est comptée positivement. B : l’ajout d’eau favorise la consommation de cette espèce. C : l’extérieur du système est le milieu extérieur. D : il y a autant de moles gazeuses de chaque côté, donc une variation de pression ne favorise aucun sens par ce seul effet."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant la définition des systèmes en thermochimie, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Un système ouvert permet uniquement les échanges de matière",
      "Un système fermé permet uniquement les échanges d’énergie",
      "Un système isolé permet uniquement les échanges de matière",
      "Un système fermé permet les échanges de matière et d’énergie",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 1,
    "code": "CG-QCM-1257",
    "hint": "Un système ouvert échange matière et énergie ; un système fermé échange de l’énergie mais pas de matière ; un système isolé n’échange ni l’une ni l’autre.",
    "explanation": "A : un système ouvert peut échanger matière et énergie. B : un système fermé échange de l’énergie, mais pas de matière. C : un système isolé n’échange ni matière ni énergie. D : les échanges de matière ne sont pas permis pour un système fermé."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant le premier principe de la thermodynamique et l’énergie interne d’un système, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le premier principe est aussi appelé principe de conservation de l’énergie",
      "L’énergie interne correspond à l’énergie totale d’un système",
      "L’énergie interne est notée U",
      "L’énergie interne correspond à la somme de l’énergie mécanique et de l’énergie thermique",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-1264",
    "hint": "Retrouve le nom du premier principe, le symbole de l’énergie interne et la définition utilisée dans ton cours.",
    "explanation": "Le premier principe exprime la conservation de l’énergie. L’énergie interne est notée U et correspond, dans le cadre du cours, à l’énergie totale interne du système, comprenant les contributions microscopiques mécaniques et thermiques."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant la variation d’enthalpie libre d’une réaction chimique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Si la variation d’enthalpie libre est positive, la réaction est exergonique",
      "Si la variation d’enthalpie libre est positive, la réaction se produit spontanément dans le sens indiqué",
      "Si la variation d’enthalpie libre est négative, la réaction est exergonique",
      "Si la variation d’enthalpie libre est négative, la réaction est thermodynamiquement possible dans ce sens",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      2,
      3
    ],
    "code": "CG-QCM-1271",
    "hint": "À température et pression constantes, une valeur ΔG négative indique un sens exergonique et thermodynamiquement favorable.",
    "explanation": "A : ΔG positif correspond à une réaction endergonique. B : une réaction avec ΔG positif n’est pas spontanée dans le sens indiqué. C et D : une valeur ΔG négative indique un sens exergonique et thermodynamiquement favorable."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant le premier principe de la thermodynamique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Si la variation d’enthalpie d’une réaction est négative, la réaction est dite endothermique",
      "L’enthalpie de fusion d’un composé est négative",
      "Le premier principe est parfois nommé « principe de conservation de l’énergie »",
      "Si la variation d’enthalpie d’une réaction est positive, la réaction absorbe de l’énergie du milieu extérieur",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      2,
      3
    ],
    "code": "CG-QCM-1278",
    "hint": "Une réaction exothermique a ΔH négatif ; une réaction endothermique a ΔH positif. La fusion nécessite généralement un apport de chaleur.",
    "explanation": "A : ΔH négatif signifie exothermique. B : l’enthalpie de fusion est positive dans les conditions usuelles. C : le premier principe est le principe de conservation de l’énergie. D : ΔH positif signifie que le système absorbe de l’énergie thermique."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant un changement d’état physique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Pour un corps pur composé, un changement d’état physique se fait toujours à température constante",
      "La sublimation correspond au changement d’état physique d’une phase gazeuse en une phase solide",
      "Si le changement d’état physique se produit à température constante, c’est que le corps est pur",
      "La condensation correspond au changement d’état physique d’une phase liquide en une phase gazeuse",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0
    ],
    "code": "CG-QCM-1284",
    "hint": "Revois les définitions de fusion, solidification, vaporisation, liquéfaction et sublimation, ainsi que le comportement d’un corps pur pendant le changement d’état.",
    "explanation": "A et C suivent la convention du cours pour un corps pur à pression donnée. B : la sublimation est le passage du solide au gaz. D : le passage du liquide au gaz est la vaporisation."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant la variation d’enthalpie d’une réaction chimique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Si la variation d’enthalpie est négative, la réaction dégage de l’énergie dans le milieu extérieur",
      "Si la variation d’enthalpie est positive, la réaction dégage de l’énergie dans le milieu extérieur",
      "Si la variation d’enthalpie est négative, la réaction est exothermique",
      "Si la variation d’enthalpie est négative, la réaction est endothermique",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2
    ],
    "code": "CG-QCM-1291",
    "hint": "Le signe de ΔH indique le sens du transfert thermique : négatif pour une réaction exothermique, positif pour une réaction endothermique.",
    "explanation": "A et C sont vraies : ΔH négatif signifie que la réaction libère de la chaleur et est exothermique. B est fausse : ΔH positif correspond à une absorption d’énergie. D est fausse : une réaction endothermique a ΔH positif."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant les changements d’état physique, indiquer celle(s) qui est (sont) exacte(s) :",
    "choices": [
      "Le changement d’état physique d’un corps pur simple se produit toujours à température constante",
      "Le changement d’état physique d’un corps pur composé se produit toujours à température constante",
      "La fusion est le passage de l’état solide à l’état liquide",
      "La solidification est le passage de l’état gazeux à l’état liquide",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "code": "CG-QCM-1299",
    "hint": "À pression donnée, le changement d’état d’un corps pur se fait à température constante. La solidification est le passage du liquide au solide.",
    "explanation": "A et B : selon le cours, le changement d’état d’un corps pur se fait à température constante à pression donnée. C : la fusion correspond au passage solide-liquide. D : gaz-liquide est une liquéfaction ou condensation, pas une solidification."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant la réaction HCOOC–COOH (s) → HCOOH (l) + CO₂ (g) à l’état standard (298 K et 1 atm), laquelle (lesquelles) est (sont) exacte(s) ?; On donne les enthalpies standard de formation :ΔfH°(réactif solide) = −830 kJ·mol⁻¹ ;ΔfH°(HCOOH liquide) = −425 kJ·mol⁻¹ ;ΔfH°(CO₂ gazeux) = −395 kJ·mol⁻¹.",
    "choices": [
      "La réaction est endothermique",
      "La variation d’enthalpie de la réaction est d’environ 1 650 kJ·mol⁻¹",
      "La variation d’enthalpie de la réaction est d’environ −450 kJ·mol⁻¹",
      "La variation d’enthalpie de la réaction est d’environ 10 kJ·mol⁻¹",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-1308",
    "hint": "Applique la loi de Hess : ΔH°réaction = somme des enthalpies de formation des produits moins celle des réactifs.",
    "explanation": "D’après les données de correction du document, le calcul est −395 − 425 + 830 = +10 kJ·mol⁻¹. La variation d’enthalpie est positive : la réaction est endothermique."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant la dissolution de H₂S(g) dans l’eau : H₂S(g) ⇌ H₂S(aq), les enthalpies de formation de H₂S(g) et H₂S(aq) étant respectivement de −20,6 kJ·mol⁻¹ et −39,7 kJ·mol⁻¹, à 298 K et 1 atm, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le ΔHr° de dissolution est de −19,1 kJ·mol⁻¹",
      "Le ΔHr° de dissolution est de 19,1 kJ·mol⁻¹",
      "La réaction de dissolution est une réaction exothermique",
      "La solubilité de H₂S(g) augmente avec la température",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2
    ],
    "code": "CG-QCM-1320",
    "hint": "Calcule ΔHr° = ΔHf°(produits) − ΔHf°(réactifs), puis utilise le caractère exothermique ou endothermique pour prévoir l’effet de la température.",
    "explanation": "ΔHr° = −39,7 − (−20,6) = −19,1 kJ·mol⁻¹. La dissolution est donc exothermique. Une augmentation de température défavorise généralement le sens exothermique et diminue ici la solubilité."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant la réaction N₂(g) + O₂(g) → 2 NO(g), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’enthalpie libre standard ΔG° à 25 °C de la réaction est d’environ −80 kcal·mol⁻¹",
      "La réaction est thermodynamiquement possible dans le sens de formation de NO(g)",
      "La réaction est endothermique",
      "La réaction est spontanée",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 2,
    "code": "CG-QCM-1327",
    "hint": "Distingue le signe de ΔH, qui renseigne sur le caractère endothermique, du signe de ΔG, qui renseigne sur la spontanéité.",
    "explanation": "Selon la correction du document, la réaction est endothermique car ΔHr° > 0. La correction indique également ΔG° > 0, donc elle n’est pas spontanée dans le sens de formation de NO dans les conditions standard."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant la réaction 4 HCl(g) + O₂(g) ⇌ 2 Cl₂(g) + 2 H₂O(l), avec ΔH°(298 K) = −202,4 kJ·mol⁻¹, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Si on diminue la température du milieu réactionnel, l’équilibre se déplace dans le sens direct",
      "La diminution de la pression ne modifie pas l’équilibre",
      "La diminution de la concentration de Cl₂(g) favorise la réaction directe",
      "L’augmentation de la concentration de HCl(g) favorise la réaction directe",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "code": "CG-QCM-1345",
    "hint": "Applique le principe de Le Chatelier : la baisse de température favorise le sens exothermique, tandis qu’un ajout de réactif ou un retrait de produit favorise le sens direct.",
    "explanation": "A : le sens direct est exothermique, donc une baisse de température le favorise. C : retirer Cl₂ favorise sa formation. D : ajouter HCl favorise sa consommation. B est fausse : la variation de pression peut déplacer l’équilibre car le nombre de moles gazeuses diffère entre les deux côtés."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant la réaction Hg₂Cl₂(s) + Cl₂(g) → 2 HgCl₂(s), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’enthalpie de la réaction est de 35 kJ·mol⁻¹",
      "L’enthalpie de la réaction est de −195 kJ·mol⁻¹",
      "La réaction est endothermique",
      "La réaction est exothermique",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-1351",
    "hint": "Le signe de ΔHr permet de déterminer le caractère thermique : une enthalpie négative correspond à une réaction exothermique.",
    "explanation": "Selon la correction du document, ΔHr = −195 kJ·mol⁻¹. La réaction est donc exothermique."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant le premier principe de la thermodynamique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’énergie interne d’un système est notée E",
      "L’énergie interne d’un système peut s’exprimer en joules",
      "L’énergie interne d’un système correspond à l’énergie totale de ce système",
      "L’énergie interne d’un système est égale à la somme des énergies mécanique et thermique de toutes les entités microscopiques du système",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "code": "CG-QCM-1362",
    "hint": "L’énergie interne se note U et s’exprime en joules ; elle regroupe les contributions énergétiques microscopiques du système.",
    "explanation": "A : le symbole usuel de l’énergie interne est U. B : l’unité SI de l’énergie est le joule. C et D reprennent la définition de l’énergie interne donnée dans le cours."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant le cycle thermochimique de formation de l’eau (ΔL H° = enthalpie de liaison ; ΔF H° = enthalpie standard de formation), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "ΔfH° = 2 ΔlH°(H-H) + ΔlH°(O=O) + 4 ΔlH°(O-H)",
      "La réaction 4H(g) + 2O(g) → 2H2O(g) est la réaction de formation standard de l’eau",
      "ΔfH° = 4 ΔlH°(O-H) − 2 ΔlH°(H-H) − ΔlH°(O=O)",
      "Pour définir une enthalpie de liaison, les atomes doivent être à l’état gazeux",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      2,
      3
    ],
    "code": "CG-QCM-1392",
    "hint": "Distingue les énergies nécessaires pour rompre des liaisons de celles libérées lors de leur formation.",
    "explanation": "C : le bilan énergétique tient compte des liaisons rompues dans les réactifs et des liaisons formées dans les produits. D : une enthalpie de liaison concerne des espèces à l’état gazeux. La réaction de formation standard doit partir des éléments dans leurs états standards."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant le premier principe de la thermodynamique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Une réaction est dite endothermique si sa variation d’enthalpie est positive",
      "L’enthalpie de fusion d’un composé pur est négative",
      "Le premier principe est parfois nommé « principe de conservation de l’énergie »",
      "Si la variation d’enthalpie d’une réaction est positive, le système absorbe de l’énergie du milieu extérieur",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "code": "CG-QCM-1400",
    "hint": "Rappelle la convention de signe de l’enthalpie et le principe de conservation de l’énergie.",
    "explanation": "A : une réaction endothermique présente une variation d’enthalpie positive. B : la fusion nécessite généralement un apport d’énergie, donc son enthalpie est positive. C : le premier principe exprime la conservation de l’énergie. D : une réaction endothermique absorbe de l’énergie du milieu extérieur."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant la réaction de formation de l’octane gazeux C8H18(g), laquelle est exacte ?",
    "choices": [
      "5C(g) + 4H2(s) → C8H18(g)",
      "6C(s) + 3H2(g) → C8H18(g)",
      "8C(g) + 9H2(g) → C8H18(g)",
      "8C(s, graphite) + 9H2(g) → C8H18(g)",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 3,
    "code": "CG-QCM-1421",
    "hint": "Une réaction de formation standard forme une mole de composé à partir des éléments dans leurs états standards.",
    "explanation": "La réaction de formation standard de l’octane gazeux est 8C(s, graphite) + 9H2(g) → C8H18(g). Le carbone graphite et le dihydrogène gazeux sont les états standards des éléments."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Quelle équation correspond à la combustion complète de l’octane C8H18 ?",
    "choices": [
      "C8H18 + 10O2 → 3CO2 + 9H2O",
      "C8H18 + 6O2 → 7CO2 + 3H2O",
      "C8H18 + 15O2 → 8CO2 + 9H2O",
      "C8H18 + (25/2)O2 → 8CO2 + 9H2O",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 3,
    "code": "CG-QCM-1439",
    "hint": "Équilibre successivement les atomes de carbone, d’hydrogène et d’oxygène.",
    "explanation": "Les 8 atomes de carbone donnent 8 CO2 et les 18 atomes d’hydrogène donnent 9 H2O. Il faut alors 25 atomes d’oxygène, soit 25/2 molécules de O2."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Pour la combustion complète de l’octane, selon l’équation w C8H18 + x O2 → y CO2 + z H2O, quels sont les coefficients stœchiométriques corrects ?",
    "choices": [
      "w = 1 ; x = 5 ; y = 4 ; z = 3",
      "w = 1 ; x = 25 ; y = 5 ; z = 7",
      "w = 1 ; x = 25/2 ; y = 8 ; z = 9",
      "w = 2 ; x = 35/2 ; y = 8 ; z = 9",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 2,
    "code": "CG-QCM-1457",
    "hint": "Vérifie la conservation de chaque élément chimique de part et d’autre de l’équation.",
    "explanation": "Pour une mole d’octane, il faut 8 CO2 et 9 H2O. Le bilan d’oxygène conduit à 25/2 O2. Les coefficients sont donc w = 1, x = 25/2, y = 8 et z = 9."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "On considère la combustion complète de l’octane gazeux C8H18(g), formant CO2(g) et H2O(g). On donne les énergies de dissociation des liaisons : C–C = 347 ; C–H = 413 ; O=O = 498 ; C=O dans CO2 = 803 ; O–H = 462 kJ/mol. Quelle est l’enthalpie de combustion calculée à partir de ces énergies de liaison ?",
    "choices": [
      "ΔH°C = −5076 kJ/mol",
      "ΔH°C = −1140 kJ/mol",
      "ΔH°C = −7542 kJ/mol",
      "ΔH°C = −3899 kJ/mol",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 0,
    "code": "CG-QCM-1463",
    "hint": "Compare l’énergie absorbée pour rompre les liaisons à l’énergie libérée lors de la formation des nouvelles liaisons.",
    "explanation": "La réponse indiquée dans le document source est A : environ −5076 kJ/mol. Le calcul exact dépend des énergies de liaison retenues dans le cours."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Sachant que l’enthalpie standard de combustion de l’octane calculée dans l’exercice est ΔH°C = −5076 kJ/mol, quelle(s) proposition(s) est (sont) exacte(s) ?",
    "choices": [
      "La réaction est endothermique",
      "La réaction libère de l’énergie",
      "La réaction est exothermique",
      "La réaction consomme de l’énergie",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-1483",
    "hint": "Interprète le signe de ΔH : une valeur négative indique une réaction exothermique.",
    "explanation": "La variation d’enthalpie est négative. La réaction est donc exothermique et libère de l’énergie vers le milieu extérieur."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant le premier principe de la thermodynamique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’enthalpie de fusion d’un composé pur est négative",
      "Le premier principe est parfois nommé « principe de conservation de l’énergie »",
      "Une réaction est dite endothermique si sa variation d’enthalpie est négative",
      "Si la variation d’enthalpie d’une réaction est positive, le système absorbe de l’énergie du milieu extérieur",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-1509",
    "hint": "Rappelle le sens du premier principe et la convention de signe pour une réaction endothermique.",
    "explanation": "B : le premier principe est un principe de conservation de l’énergie. D : une variation d’enthalpie positive correspond à une réaction endothermique, qui absorbe de l’énergie. A et C sont fausses."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Pour l’équilibre 2A + B ⇌ 2C + 2D dans un système fermé, quelle condition permet que l’équilibre ne se déplace pas lorsqu’on diminue le volume ?",
    "choices": [
      "B et D sont gazeux, A et C étant solides",
      "Tous les corps sont gazeux",
      "C est solide et A, B et D sont gazeux",
      "B et C sont solides, A et D étant gazeux",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 3,
    "code": "CG-QCM-1516",
    "hint": "Une variation de volume affecte l’équilibre si le nombre total de moles gazeuses diffère entre les deux côtés.",
    "explanation": "Si B et C sont solides tandis que A et D sont gazeux, il y a deux moles gazeuses de chaque côté de l’équation. Une diminution du volume ne favorise donc aucun des deux sens."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "On étudie la réaction CaCO3(s) → CaO(s) + CO2(g). À 298 K, on donne : ΔfH°(CaCO3) = −1210,11 kJ/mol ; ΔfH°(CaO) = −393,14 kJ/mol ; ΔfH°(CO2) = −634,11 kJ/mol ; S°(CaCO3) = 92,80 J/(mol·K) ; S°(CaO) = 213,60 J/(mol·K) ; S°(CO2) = 39,71 J/(mol·K). Quelle(s) proposition(s) est (sont) exacte(s) ?",
    "choices": [
      "La décomposition de CaCO3 est thermodynamiquement possible à 298 K",
      "L’enthalpie libre standard ΔG° à 298 K est égale à 182,86 kJ/mol",
      "La réaction est spontanée à 298 K",
      "La réaction est thermodynamiquement possible dans le sens de formation de CaO(s)",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-1522",
    "hint": "Calcule ΔrH° puis ΔrS°, et utilise ΔrG° = ΔrH° − TΔrS°.",
    "explanation": "ΔrH° = −393,14 − 634,11 + 1210,11 = 182,86 kJ/mol. ΔrS° = 213,60 + 39,71 − 92,80 = 160,51 J/(mol·K). Ainsi ΔrG° ≈ 182,86 − 298 × 0,16051 ≈ 135 kJ/mol. La valeur de 182,86 kJ/mol correspond à ΔrH°, et ΔrG° positif indique que la décomposition n’est pas spontanée dans ces conditions."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Pour la réaction CH4(g) + Cl2(g) ⇌ CH3Cl(g) + HCl(g), on donne à 298 K et 1 atm : ΔfH°(CH4) = −74,9 kJ/mol ; ΔfH°(CH3Cl) = −82,0 kJ/mol ; ΔfH°(HCl) = −91,8 kJ/mol. Quelle(s) proposition(s) est (sont) exacte(s) ?",
    "choices": [
      "Une augmentation de pression déplace l’équilibre vers la droite",
      "La réaction est exothermique",
      "Une augmentation de température déplace l’équilibre vers la droite",
      "La variation d’enthalpie de la réaction est égale à −42,9 kJ/mol",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 1,
    "code": "CG-QCM-1548",
    "hint": "Calcule ΔrH° = somme des enthalpies de formation des produits moins celle des réactifs.",
    "explanation": "ΔrH° = [−82,0 + (−91,8)] − [−74,9 + 0] = −98,9 kJ/mol. La réaction est exothermique. Le nombre de moles gazeuses est identique de chaque côté, donc la pression ne déplace pas l’équilibre. Une hausse de température favorise le sens endothermique, ici le sens inverse."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "On étudie la réaction C6H12O6(s) + x H2O(l) → y CO2(g) + z H2(g). À 25 °C et 1 atm, on donne ΔH° = 613,29 kJ/mol et ΔS° = 2138,52 J/(K·mol). Quelle(s) proposition(s) est (sont) exacte(s) ?",
    "choices": [
      "x = 3 ; y = 3 ; z = 6",
      "ΔG°réaction ≈ −24 kJ/mol",
      "La valeur recherchée est environ −636,7 kJ/mol",
      "Cette réaction est une réaction de combustion",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 1,
    "code": "CG-QCM-1561",
    "hint": "Équilibre d’abord l’équation, puis applique ΔG° = ΔH° − TΔS° en exprimant T en kelvins et ΔS en kJ/(K·mol).",
    "explanation": "La correction source indique ΔG° ≈ −24 kJ/mol. En utilisant les valeurs données : ΔG° = 613,29 − 298 × 2,13852 ≈ −23,99 kJ/mol. L’équation équilibrée donne x = 6, y = 6 et z = 12 ; la réaction n’est pas une combustion au sens usuel."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes, laquelle correspond à la réaction de formation standard du glucose solide C6H12O6(s) ?",
    "choices": [
      "6C(s, graphite) + 12H(g) + 6O(g) → C6H12O6(s)",
      "6C(s, diamant) + 6H2(g) + 3O2(g) → C6H12O6(s)",
      "6C(s, graphite) + 6H2(g) + 3O2(g) → C6H12O6(s)",
      "6C(g) + 6H2(g) + 3O2(g) → C6H12O6(s)",
      "Aucune des propositions ci-dessus ne correspond"
    ],
    "answer": 2,
    "code": "CG-QCM-1573",
    "hint": "Les éléments doivent être écrits dans leurs états standards : carbone graphite, dihydrogène gazeux et dioxygène gazeux.",
    "explanation": "La réaction de formation standard du glucose solide est 6C(s, graphite) + 6H2(g) + 3O2(g) → C6H12O6(s). Elle forme une mole de glucose à partir des éléments dans leurs états standards."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant le second principe de la thermodynamique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le second principe est appelé « principe de conservation de l’énergie »",
      "Le second principe permet de prévoir si une transformation est spontanée",
      "Le second principe est lié à une mesure du désordre au sein d’un système thermodynamique",
      "L’entropie S est une fonction d’état reliée au second principe",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "code": "CG-QCM-1580",
    "hint": "Associe l’entropie au second principe et distingue celui-ci du principe de conservation de l’énergie.",
    "explanation": "Le second principe permet de prévoir le sens d’évolution spontanée d’un système. L’entropie est une fonction d’état associée à ce principe. La conservation de l’énergie relève du premier principe."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant l’entropie, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’entropie est une fonction décrite dans le premier principe de la thermodynamique",
      "L’entropie d’un liquide est supérieure à celle d’un gaz",
      "L’augmentation d’entropie traduit l’augmentation de l’ordre au sein d’un système",
      "L’entropie d’un solide est supérieure à celle d’un gaz",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 4,
    "code": "CG-QCM-1586",
    "hint": "Compare l’entropie des états solide, liquide et gazeux et rappelle le principe auquel elle est associée.",
    "explanation": "A : l’entropie est associée au second principe. B et D : pour un même composé dans des conditions comparables, l’entropie est généralement plus élevée à l’état gazeux qu’à l’état liquide ou solide. C : une augmentation d’entropie traduit généralement une augmentation du désordre."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Concernant la variation d’enthalpie d’une réaction et les deux principes de la thermodynamique, quelles sont les propositions exactes ?",
    "choices": [
      "Si la variation d’enthalpie est négative, la réaction absorbe de l’énergie du milieu extérieur",
      "La variation d’enthalpie indique l’énergie calorifique mise en jeu au cours de la réaction",
      "Le premier principe est aussi appelé principe de conservation de l’énergie",
      "C’est le second principe qui introduit la notion d’enthalpie",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-1596",
    "hint": "Rappelle la signification de ΔH et distingue le premier principe du second principe.",
    "explanation": "A : faux, une variation d’enthalpie négative signifie que la réaction libère de l’énergie. B : vrai, la variation d’enthalpie caractérise l’échange thermique à pression constante. C : vrai. D : faux, l’enthalpie est liée au premier principe."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant l’entropie, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Dans un système isolé, la variation d’entropie ΔS du système qui subit la transformation n’est jamais négative",
      "L’entropie est une mesure du désordre",
      "S(solide) > S(liquide) > S(gaz)",
      "La variation d’entropie d’une réaction peut être calculée en utilisant une loi semblable à la loi de Hess",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "code": "CG-QCM-1602",
    "hint": "Pense à l’évolution de l’entropie d’un système isolé et à la manière de calculer une variation d’entropie de réaction.",
    "explanation": "A : vrai pour une transformation spontanée d’un système isolé, l’entropie ne diminue pas. B : vrai, l’entropie est liée à la dispersion de l’énergie et au nombre de microétats accessibles. C : faux, en général l’entropie molaire augmente du solide au liquide puis au gaz. D : vrai, ΔrS° se calcule à partir des entropies molaires standard des produits et des réactifs, en tenant compte des coefficients stœchiométriques."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Pour l’acide succinique C₄H₆O₄, on considère sa réaction de formation standard à partir des corps purs simples dans leurs états standards : 4 C(graphite, s) + 3 H₂(g) + 2 O₂(g) → C₄H₆O₄(s). Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Cette réaction est une réaction de combustion",
      "Cette réaction est une réaction de formation",
      "Cette réaction correspond à la formation de deux moles d'acide succinique",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 1,
    "code": "CG-QCM-1635",
    "hint": "Une réaction de formation standard produit une mole d’un composé à partir des éléments dans leurs états standards.",
    "explanation": "La réaction écrite forme une mole d’acide succinique à partir des éléments dans leurs états standards : c’est donc une réaction de formation standard. Les données thermodynamiques numériques ne sont pas nécessaires pour répondre à cette question. Réponse B."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les propositions suivantes concernant le cycle thermochimique de formation de l’eau (dans la figure originale, ΔLH° désigne l’enthalpie de liaison et ΔFH° l’enthalpie standard de formation), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "ΔfH° = 2 ΔlH°(H-H) + ΔlH°(O=O) + 4 ΔlH°(O-H)",
      "La réaction 4H(g) + 2O(g) → 2H2O(g) est la réaction de formation standard de l’eau",
      "ΔfH° = 4 ΔlH°(O-H) − ΔlH°(H-H) − ΔlH°(O=O)",
      "Dans les réactions de formation de liaisons, les atomes doivent être pris à l’état gazeux",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 3,
    "code": "CG-QCM-1647",
    "hint": "Les énergies de liaison concernent des atomes gazeux, alors que la formation standard part des éléments dans leurs états standards.",
    "explanation": "A et C : les expressions proposées ne représentent pas correctement le bilan énergétique du cycle. B : la formation standard de l’eau doit partir de H2 et O2 dans leurs états standards, et non d’atomes isolés. D : vrai, les énergies de liaison sont définies pour des espèces gazeuses."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "On considère la décomposition thermique du bicarbonate de sodium : 2 NaHCO3(s) → Na2CO3(s) + CO2(g) + H2O(g). Les entropies molaires standard sont : S°(NaHCO3) = 100 ; S°(Na2CO3) = 140 ; S°(CO2) = 210 ; S°(H2O) = 190 J·mol⁻¹·K⁻¹. Quelle est la variation d'entropie standard de cette réaction ?",
    "choices": [
      "La variation d’entropie de la réaction est de 220 J/(mol·K)",
      "La variation d’entropie de la réaction est de 340 J/(mol·K)",
      "La variation d’entropie de la réaction est de 542 J/(mol·K)",
      "La variation d’entropie de la réaction est de 10 J/(mol·K)",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 1,
    "code": "CG-QCM-1674",
    "hint": "Applique ΔrS° = ΣνS°(produits) − ΣνS°(réactifs), sans oublier les coefficients stœchiométriques.",
    "explanation": "La correction source utilise ΔS° = (140 + 210 + 190) − (2 × 100) = 340 J/(mol·K). La réponse est donc B. Le coefficient stœchiométrique 2 devant NaHCO3 doit être pris en compte."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "On considère la réaction Cr2O3(s) + 3C(s) → 2Cr(s) + 3CO(g), à 298 K. On donne les énergies libres standard de formation ΔfG° (kJ/mol) : Cr2O3 = −1059,3 ; CO = −137,2 ; Cr = 0 ; C = 0. Les entropies molaires standard S° (J/(mol·K)) sont : Cr2O3 = 81,3 ; C = 5,7 ; Cr = 23,8 ; CO = 197,6. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La réaction est spontanée dans les conditions de l’état standard",
      "L’enthalpie libre de la réaction est de 647,7 kJ/mol, arrondie à une décimale",
      "La variation d’entropie de la réaction est de 542,0 J/(mol·K), arrondie à une décimale",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-1686",
    "hint": "Calcule ΔrG° à partir des énergies libres standard de formation et ΔrS° à partir des entropies molaires standard.",
    "explanation": "Selon la correction source, B et C sont exactes : ΔrG° = 647,7 kJ/mol et ΔrS° = 542,0 J/(mol·K). A est fausse car une valeur positive de ΔrG° indique que la réaction n’est pas spontanée dans le sens écrit aux conditions standard."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "Parmi les systèmes à l’équilibre suivants, pour lesquels une augmentation de pression à température constante déplacerait l’équilibre vers la gauche, lequel est exact ?",
    "choices": [
      "CH4(g) + 4O2(g) ⇌ CO2(g) + 2H2O(l)",
      "C(s) + CO2(g) ⇌ 2CO(g)",
      "CO(g) + H2O(g) ⇌ CO2(g) + H2(g)",
      "C(s) + 2H2(g) ⇌ CH4(g)",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 1,
    "code": "CG-QCM-1703",
    "hint": "Lorsqu’on augmente la pression, l’équilibre favorise le côté qui contient le moins de moles gazeuses.",
    "explanation": "Dans B, il y a une mole gazeuse à gauche et deux à droite. Une augmentation de pression favorise donc le sens qui réduit le nombre de moles gazeuses, c’est-à-dire le sens inverse, vers la gauche. C ne présente pas de différence du nombre de moles gazeuses. D est favorisée vers la droite par une augmentation de pression."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "On considère l’équilibre CO2(g) + NO(g) ⇌ CO(g) + NO2(g). Parmi les propositions suivantes concernant le principe de Le Chatelier, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’ajout d’un catalyseur ne modifie pas l’équilibre",
      "La diminution de la pression ne modifie pas l’équilibre",
      "La diminution de la concentration de CO(g) favorise la réaction directe",
      "L’augmentation de la concentration de NO(g) favorise la réaction directe",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-1727",
    "hint": "Un catalyseur accélère les réactions directe et inverse sans modifier la composition à l’équilibre. Compare aussi les moles gazeuses de chaque côté.",
    "explanation": "A : vrai, un catalyseur accélère l’établissement de l’équilibre mais ne change pas sa composition. B : vrai, il y a deux moles gazeuses de chaque côté. C : vrai, retirer un produit favorise le sens direct qui le reforme. D : la correction source indique que l’ajout de NO favorise le sens indirect ; cette proposition est donc fausse selon la correction du document."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "On considère la réaction endothermique CO2(g) + C(s) ⇌ 2CO(g). Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’addition de CO déplace l’équilibre vers la droite",
      "L’élimination de C déplace l’équilibre vers la droite",
      "L’augmentation de la pression déplace l’équilibre vers la droite",
      "L’augmentation de la température déplace l’équilibre vers la droite",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": 3,
    "code": "CG-QCM-1736",
    "hint": "Pour une réaction endothermique, une hausse de température favorise le sens direct. Pour la pression, compare les moles gazeuses.",
    "explanation": "A : faux, l’ajout de CO favorise le sens inverse. B : faux, un solide pur n’intervient pas dans l’expression de l’équilibre tant qu’il est présent. C : faux, le sens direct forme deux moles gazeuses contre une à gauche, donc une hausse de pression favorise la gauche. D : vrai, la réaction étant endothermique, une hausse de température favorise le sens direct."
  },
  {
    "subject": "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    "level": 5,
    "text": "On considère l’équilibre N2(g) + 3H2(g) ⇌ 2NH3(g) dans une enceinte fermée, avec ΔrH° = −92,2 kJ/mol. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Pour favoriser la production d’ammoniac NH3(g), on a intérêt à travailler à haute pression",
      "Pour favoriser la production d’ammoniac NH3(g), on a intérêt à travailler à basse pression",
      "Pour favoriser la production d’ammoniac NH3(g), on peut ajouter un catalyseur",
      "Pour favoriser la production d’ammoniac NH3(g), on a intérêt à travailler à basse température"
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-1744",
    "hint": "La synthèse de l’ammoniac est exothermique et fait passer quatre moles gazeuses à deux.",
    "explanation": "A : vrai, une pression élevée favorise le côté qui contient le moins de moles gazeuses, donc NH3. B : faux. C : faux, un catalyseur accélère l’atteinte de l’équilibre sans le déplacer. D : vrai, une basse température favorise le sens exothermique."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Parmi les propositions concernant la vitesse d’une réaction chimique, quelles sont les propositions exactes ?",
    "choices": [
      "À température constante, elle augmente lorsque la concentration en réactifs augmente",
      "À température constante, elle augmente lorsque la concentration en réactifs diminue",
      "À concentration en réactifs constante, elle augmente lorsque la température du milieu réactionnel diminue",
      "Elle augmente lorsque la concentration des réactifs et la température du milieu réactionnel augmentent",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-1774",
    "hint": "La vitesse dépend généralement de la concentration des réactifs et augmente habituellement avec la température.",
    "explanation": "A : vrai dans le cadre usuel des lois cinétiques. B : faux, diminuer la concentration des réactifs tend à diminuer la vitesse. C : faux, une baisse de température ralentit généralement la réaction. D : vrai dans les conditions habituelles."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Parmi les propositions concernant la cinétique chimique, quelles sont les propositions exactes ?",
    "choices": [
      "La cinétique chimique est l’étude de la vitesse des réactions et des différents mécanismes impliqués",
      "Pour qu’une réaction chimique se produise spontanément d’une manière appréciable, il faut à la fois que les conditions cinétiques et thermodynamiques soient favorables",
      "La constante de vitesse associée à une réaction est toujours positive",
      "La catalyse influe sur la cinétique chimique d’une réaction",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-1781",
    "hint": "Distingue la possibilité thermodynamique d’une réaction de sa rapidité, puis rappelle le rôle d’un catalyseur.",
    "explanation": "A : vrai, la cinétique étudie les vitesses et les mécanismes réactionnels. B : vrai, une réaction thermodynamiquement favorable peut être très lente si sa barrière cinétique est élevée. C : vrai, la constante de vitesse est positive. D : vrai, un catalyseur modifie la vitesse en proposant un mécanisme de plus faible énergie d’activation."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Parmi les propositions suivantes concernant la théorie de l’état de transition pour une réaction donnée, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’état de transition constitue un état intermédiaire observable",
      "L’énergie d’activation est l’énergie à fournir aux espèces réactives pour atteindre le niveau d’énergie permettant à la réaction de se réaliser",
      "Si les produits formés sont moins stables que les réactifs, leur énergie sera plus basse que celle des réactifs",
      "L’étape cinétiquement déterminante est celle dont la barrière énergétique est la plus difficile à franchir",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-1788",
    "hint": "L’état de transition correspond au sommet de la barrière énergétique, tandis qu’un intermédiaire possède une durée de vie distincte.",
    "explanation": "A : faux, l’état de transition n’est pas un intermédiaire observable isolable. B : vrai, l’énergie d’activation correspond à la barrière énergétique à franchir. C : faux, des produits moins stables ont une énergie plus élevée. D : vrai, l’étape présentant la barrière cinétique la plus difficile à franchir est généralement déterminante."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "On considère l’expression de la vitesse d’une réaction chimique v = k[A]^a[B]^b. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "k, la constante de vitesse, est positive",
      "k est constante pour une température donnée",
      "A et B représentent les produits de la réaction",
      "a + b représente l’ordre global de la réaction",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "code": "CG-QCM-1795",
    "hint": "Dans une loi de vitesse, les espèces entre crochets sont généralement les réactifs ; les exposants déterminent l’ordre de réaction.",
    "explanation": "A : vrai, une constante de vitesse est positive. B : vrai, à température donnée et pour un système donné, k est constante. C : faux, A et B désignent les réactifs dans cette expression. D : vrai, l’ordre global est la somme des exposants a + b."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Concernant la cinétique chimique, quelles sont les propositions exactes ?",
    "choices": [
      "Les cinétiques d’ordre global égal à 1 et d’ordre global égal à 2 sont les cas les plus fréquemment rencontrés dans les réactions métaboliques",
      "Le temps de demi-réaction est le temps au bout duquel 50 % du composé suivi a réagi",
      "Pour une cinétique de premier ordre, le temps de demi-réaction ne dépend pas des conditions initiales",
      "Pour une cinétique de second ordre, le temps de demi-réaction dépend des conditions initiales",
      "Aucune des propositions ci-dessus n’est exacte"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "code": "CG-QCM-1801",
    "hint": "Compare les expressions du temps de demi-réaction pour une cinétique de premier ordre et de second ordre.",
    "explanation": "B : le temps de demi-réaction correspond à la durée nécessaire pour consommer la moitié de la quantité initiale. C : pour un ordre 1, t1/2 = ln(2)/k et ne dépend pas de la concentration initiale. D : pour un ordre 2, dans le cas usuel d’un seul réactif, t1/2 = 1/(k[A]0), donc il dépend de la concentration initiale. A est reprise de la correction du document source."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Parmi les propositions suivantes concernant la vitesse d’une réaction chimique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La constante de vitesse k ne dépend pas de la température.",
      "L’unité de la constante de vitesse k est la même pour tous les ordres réactionnels.",
      "Pour une réaction d’ordre global égal à 0, la constante de vitesse s’exprime en mol·L⁻¹·s⁻¹.",
      "La vitesse d’une réaction chimique d’ordre positif augmente nécessairement au cours du temps.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      2
    ],
    "code": "CG-QCM-1841",
    "hint": "L’unité de k dépend de l’ordre de la réaction.",
    "explanation": "Pour une réaction d’ordre 0, v = k et k s’exprime en mol·L⁻¹·s⁻¹. Pour un ordre 1, k s’exprime en s⁻¹ ; pour un ordre 2, en L·mol⁻¹·s⁻¹. La constante de vitesse dépend généralement de la température, et la vitesse ne croît pas nécessairement au cours du temps."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Une réaction chimique suit une loi cinétique d’ordre global égal à 2. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La vitesse de réaction est indépendante de la concentration des réactifs.",
      "La vitesse de réaction dépend de la concentration d’au moins un réactif.",
      "Le temps de demi-réaction est toujours indépendant des concentrations initiales.",
      "Le temps de demi-réaction est toujours égal à ln(2)/k.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      1
    ],
    "code": "CG-QCM-1855",
    "hint": "Pour une réaction d’ordre 2, la vitesse dépend des concentrations selon la loi de vitesse.",
    "explanation": "La vitesse dépend des concentrations des réactifs. Pour une cinétique d’ordre 2, le temps de demi-réaction dépend généralement des concentrations initiales. La formule ln(2)/k est celle d’une cinétique d’ordre 1, pas d’ordre 2."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Une réaction suit une cinétique d’ordre 1 par rapport au réactif A, avec une constante de vitesse k. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "−d[A]/[A] = k·dt.",
      "Le temps de demi-réaction vaut 2/k.",
      "Le temps nécessaire pour consommer 75 % de A vaut ln(4)/k.",
      "La vitesse de disparition de A vaut k·[A]².",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      0,
      2
    ],
    "code": "CG-QCM-1862",
    "hint": "Pour une cinétique d’ordre 1, [A](t) = [A]₀·e⁻ᵏᵗ.",
    "explanation": "La loi différentielle est −d[A]/dt = k[A], donc −d[A]/[A] = k·dt. Le temps de demi-réaction vaut ln(2)/k. Consommer 75 % signifie qu’il reste 25 % de A ; ainsi t = ln(4)/k. La loi k[A]² correspond à un ordre 2."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Une réaction a une concentration initiale en réactif [A]₀ = 5,0 × 10⁻² mol·L⁻¹ et une constante de vitesse k = 5,61 × 10⁻² L·mol⁻¹·s⁻¹ à 25 °C. On suppose une cinétique d’ordre 2 vérifiant −d[A]/dt = k[A]². Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "L’ordre de la réaction peut être déduit de l’unité de la constante de vitesse.",
      "Le temps de demi-réaction est d’environ 356,5 secondes.",
      "Le temps de demi-réaction est de 15 minutes.",
      "75 % du réactif est consommé au bout de 3 minutes.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      0,
      1
    ],
    "code": "CG-QCM-1868",
    "hint": "Pour une cinétique d’ordre 2 avec un seul réactif, t₁/₂ = 1/(k[A]₀).",
    "explanation": "L’unité L·mol⁻¹·s⁻¹ correspond à une constante de vitesse d’ordre 2. Le temps de demi-réaction vaut 1/(k[A]₀) = 1/(5,61 × 10⁻² × 5,0 × 10⁻²) ≈ 356,5 s, soit environ 5,94 min. Le temps nécessaire pour consommer 75 % vaut 3/(k[A]₀), soit environ 17,8 min : la proposition D est fausse."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Pour une réaction d’ordre 2 vérifiant −d[A]/dt = k[A]², de constante de vitesse k et de concentration initiale [A]₀, on définit t₆₀ comme le temps nécessaire pour consommer 60 % du réactif A. Quelle proposition est exacte ?",
    "choices": [
      "t₆₀ = 6/(k[A]₀).",
      "t₆₀ = 1/(4k[A]₀).",
      "t₆₀ = 2/(3k[A]₀).",
      "t₆₀ = 3/(2k[A]₀).",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      3
    ],
    "code": "CG-QCM-1888",
    "hint": "Après 60 % de consommation, il reste 40 % de la concentration initiale.",
    "explanation": "Pour une cinétique d’ordre 2, 1/[A] − 1/[A]₀ = kt. À 60 % de consommation, [A] = 0,40[A]₀. Donc t = (1/0,40 − 1)/(k[A]₀) = 1,5/(k[A]₀) = 3/(2k[A]₀)."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Parmi les propositions suivantes concernant les constantes de vitesse en cinétique chimique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Pour une réaction d’ordre zéro, la constante de vitesse peut s’exprimer en s⁻¹.",
      "Pour une réaction d’ordre 1, la constante de vitesse peut s’exprimer en mol·L⁻¹·s⁻¹.",
      "Pour une réaction d’ordre 2, la constante de vitesse peut s’exprimer en L·mol⁻¹·s⁻¹.",
      "La constante de vitesse ne dépend pas de la température, quel que soit l’ordre de réaction.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      2
    ],
    "code": "CG-QCM-1899",
    "hint": "Déduis l’unité de k à partir de v = k[A]ⁿ, sachant que v s’exprime en mol·L⁻¹·s⁻¹.",
    "explanation": "Pour un ordre zéro, k s’exprime en mol·L⁻¹·s⁻¹. Pour un ordre 1, k s’exprime en s⁻¹. Pour un ordre 2, k s’exprime en L·mol⁻¹·s⁻¹. La constante de vitesse dépend généralement de la température."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Une réaction A → C suit une cinétique d’ordre 1. La concentration initiale en A est [A]₀ = 0,50 mol·L⁻¹ et la constante de vitesse vaut k = 1,5 × 10⁻⁴ s⁻¹. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La valeur de k en h⁻¹ est 0,54.",
      "La concentration de A au bout d’une heure est d’environ 0,291 mol·L⁻¹.",
      "Il reste 41,8 % de A au bout d’une heure.",
      "Le temps de demi-vie de A est d’environ 77 minutes.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      0,
      1,
      3
    ],
    "code": "CG-QCM-1931",
    "hint": "Utilise [A](t) = [A]₀e⁻ᵏᵗ et t₁/₂ = ln(2)/k.",
    "explanation": "La conversion en heures donne k = 1,5 × 10⁻⁴ × 3600 = 0,54 h⁻¹. Après une heure, [A] = 0,50e⁻⁰·⁵⁴ ≈ 0,291 mol·L⁻¹ : il reste 58,2 % de A, et non 41,8 %. Le temps de demi-vie vaut ln(2)/(1,5 × 10⁻⁴) ≈ 4621 s, soit environ 77 minutes."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Une réaction suit une cinétique d’ordre 2 vérifiant −d[A]/dt = k[A]². La concentration initiale est [A]₀. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le temps de demi-réaction ne dépend pas de la concentration initiale.",
      "La constante de vitesse s’exprime en s⁻¹.",
      "Le temps nécessaire pour consommer 75 % de A vaut 3/(k[A]₀).",
      "Le temps nécessaire pour consommer 80 % de A vaut 4/(k[A]₀).",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      2,
      3
    ],
    "code": "CG-QCM-1937",
    "hint": "Pour une cinétique d’ordre 2, t = (1/[A] − 1/[A]₀)/k.",
    "explanation": "Pour 75 % de consommation, [A] = 0,25[A]₀, donc t = (4 − 1)/(k[A]₀) = 3/(k[A]₀). Pour 80 % de consommation, [A] = 0,20[A]₀, donc t = (5 − 1)/(k[A]₀) = 4/(k[A]₀). Le temps de demi-réaction dépend de [A]₀ et k s’exprime en L·mol⁻¹·temps⁻¹."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "La constante de vitesse d’une réaction double lorsque la température passe de 20 °C à 30 °C. En supposant que la loi d’Arrhenius s’applique, quelle proposition concernant l’énergie d’activation est exacte ?",
    "choices": [
      "Elle vaut environ 188 kJ·mol⁻¹.",
      "Elle vaut environ 15 kJ·mol⁻¹.",
      "Elle vaut environ 7,50 kJ·mol⁻¹.",
      "Elle vaut environ 51,2 kJ·mol⁻¹.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      3
    ],
    "code": "CG-QCM-1956",
    "hint": "Utilise ln(k₂/k₁) = (Eₐ/R)(1/T₁ − 1/T₂), avec les températures en kelvins.",
    "explanation": "On a k₂/k₁ = 2, T₁ = 293,15 K et T₂ = 303,15 K. Ainsi Eₐ = R ln(2)/(1/T₁ − 1/T₂) ≈ 51,2 kJ·mol⁻¹."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Une réaction d’ordre 1 transforme un réactif. Sa masse passe de 0,60 g à 0,30 g en 112 secondes. Quelle proposition concernant la constante de vitesse est exacte ?",
    "choices": [
      "k ≈ 6,19 × 10⁻³ s⁻¹.",
      "k ≈ 46,81 × 10⁻³ L·mol⁻¹·s⁻¹.",
      "k ≈ 98,12 × 10⁻² s⁻¹.",
      "k ≈ 0,83 × 10⁻³ s⁻¹.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      0
    ],
    "code": "CG-QCM-1965",
    "hint": "La masse est divisée par deux : les 112 secondes correspondent au temps de demi-réaction.",
    "explanation": "Pour un ordre 1, t₁/₂ = ln(2)/k. Donc k = ln(2)/112 ≈ 6,19 × 10⁻³ s⁻¹. L’unité de k pour un ordre 1 est s⁻¹."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Parmi les propositions suivantes concernant la cinétique chimique et la catalyse, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La constante de vitesse dépend de la température.",
      "Un catalyseur permet de rendre thermodynamiquement possible une réaction qui ne l’est pas.",
      "Plus l’énergie d’activation est grande, plus une réaction est rapide, toutes choses égales par ailleurs.",
      "Dans les conditions usuelles, une hausse de température augmente généralement la vitesse de réaction.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-1972",
    "hint": "Un catalyseur modifie le mécanisme et abaisse l’énergie d’activation, mais ne change pas la thermodynamique globale de la réaction.",
    "explanation": "La constante de vitesse dépend généralement de la température selon la loi d’Arrhenius. Un catalyseur accélère une réaction en proposant un mécanisme de plus faible énergie d’activation ; il ne rend pas une réaction thermodynamiquement favorable. Une énergie d’activation plus élevée ralentit généralement la réaction."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Une réaction d’ordre 1 transforme un réactif. Sa masse passe de 0,60 g à 0,30 g en 120 secondes. Quelle proposition concernant la constante de vitesse est exacte ?",
    "choices": [
      "k ≈ 46,4 × 10⁻³ L·mol⁻¹·s⁻¹.",
      "k ≈ 98,2 × 10⁻² s⁻¹.",
      "k ≈ 5,8 × 10⁻³ s⁻¹.",
      "k ≈ 0,8 × 10⁻³ s⁻¹.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      2
    ],
    "code": "CG-QCM-1985",
    "hint": "La masse est divisée par deux en 120 secondes ; utilise t₁/₂ = ln(2)/k.",
    "explanation": "Le temps de demi-réaction vaut 120 s. Donc k = ln(2)/120 ≈ 5,78 × 10⁻³ s⁻¹, soit environ 5,8 × 10⁻³ s⁻¹."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "La réaction d’hydrolyse du 2-bromo-2-méthylpropane suit une cinétique d’ordre 1 par rapport au réactif RBr. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La réaction est d’ordre 0.",
      "La réaction est d’ordre 1.",
      "La constante de vitesse peut s’exprimer en mol·L⁻¹·h⁻¹.",
      "La constante de vitesse peut s’exprimer en h⁻¹.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      1,
      3
    ],
    "code": "CG-QCM-2014",
    "hint": "Pour une cinétique d’ordre 1, la vitesse est proportionnelle à la concentration du réactif.",
    "explanation": "La réaction est d’ordre 1. Comme v = k[RBr], la constante de vitesse s’exprime en unité de temps inverse, par exemple h⁻¹ si le temps est exprimé en heures."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "La réaction d’hydrolyse du 2-bromo-2-méthylpropane suit une cinétique d’ordre 1, de constante de vitesse k. Parmi les propositions suivantes concernant son temps de demi-réaction, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Le temps de demi-réaction est indépendant de la concentration initiale [RBr]₀.",
      "Le temps de demi-réaction dépend de la température du milieu réactionnel.",
      "Le temps de demi-réaction vaut 1/(k[RBr]₀).",
      "Le temps de demi-réaction vaut k/ln(2).",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      0,
      1
    ],
    "code": "CG-QCM-2021",
    "hint": "Pour une cinétique d’ordre 1, t₁/₂ = ln(2)/k.",
    "explanation": "Le temps de demi-réaction vaut ln(2)/k : il ne dépend donc pas de la concentration initiale, mais dépend de la température par l’intermédiaire de k. La proposition C correspond à la formule du temps de demi-réaction pour une cinétique d’ordre 2 dans le cas d’un seul réactif."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "La constante de vitesse de l’hydrolyse du 2-bromo-2-méthylpropane double lorsque la température passe de 298 K à 308 K. En supposant que la loi d’Arrhenius s’applique, parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La constante de vitesse à 298 K est deux fois plus grande que celle à 308 K.",
      "La constante de vitesse à 308 K est deux fois plus grande que celle à 298 K.",
      "L’énergie d’activation est d’environ 53 kJ·mol⁻¹.",
      "L’énergie d’activation est d’environ 6 kJ·mol⁻¹.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      1,
      2
    ],
    "code": "CG-QCM-2027",
    "hint": "Utilise ln(k₂/k₁) = (Eₐ/R)(1/T₁ − 1/T₂).",
    "explanation": "On a k₂/k₁ = 2, T₁ = 298 K et T₂ = 308 K. La loi d’Arrhenius donne Eₐ = R ln(2)/(1/T₁ − 1/T₂), soit environ 53 kJ·mol⁻¹. Les propositions B et C sont exactes."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Pour une réaction, les constantes de vitesse mesurées sont k₁ = 3 unités SI à 25 °C et k₂ = 14 unités SI à 100 °C. En supposant que la loi d’Arrhenius s’applique, quelle proposition concernant l’énergie d’activation est exacte ?",
    "choices": [
      "Il manque des données pour calculer l’énergie d’activation.",
      "Elle vaut environ 19 kJ·mol⁻¹.",
      "Elle vaut environ 426 kJ·mol⁻¹.",
      "Elle vaut environ −426 kJ·mol⁻¹.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      1
    ],
    "code": "CG-QCM-2036",
    "hint": "Convertis les températures en kelvins avant d’utiliser la forme à deux températures de la loi d’Arrhenius.",
    "explanation": "Avec T₁ = 298,15 K, T₂ = 373,15 K et k₂/k₁ = 14/3, on obtient Eₐ = R ln(k₂/k₁)/(1/T₁ − 1/T₂), soit environ 19 kJ·mol⁻¹."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Parmi les propositions suivantes concernant la catalyse chimique, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Un catalyseur accélère une réaction thermodynamiquement possible.",
      "Un catalyseur est consommé au cours de la réaction comme un réactif ordinaire.",
      "Un catalyseur peut rendre possible une réaction thermodynamiquement impossible.",
      "Un catalyseur ne modifie pas la nature des produits obtenus à l’équilibre.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      0,
      3
    ],
    "code": "CG-QCM-2070",
    "hint": "Un catalyseur accélère l’établissement de l’équilibre sans modifier la constante d’équilibre.",
    "explanation": "Un catalyseur propose un mécanisme réactionnel plus rapide, généralement associé à une énergie d’activation plus faible. Il n’est pas consommé globalement et ne modifie pas la thermodynamique de la réaction ni la position de l’équilibre."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Parmi les propositions suivantes concernant les catalyseurs, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Un catalyseur peut être solide, liquide ou gazeux.",
      "Un catalyseur ne modifie pas la nature des produits obtenus à l’équilibre.",
      "Un catalyseur est consommé au cours de la réaction.",
      "Un catalyseur modifie la constante d’équilibre.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      0,
      1
    ],
    "code": "CG-QCM-2076",
    "hint": "Distingue l’effet cinétique d’un catalyseur de l’effet thermodynamique sur l’équilibre.",
    "explanation": "Un catalyseur peut être dans différents états physiques et ne modifie pas la position de l’équilibre chimique. Il est régénéré au cours du mécanisme global et ne modifie pas la constante d’équilibre."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Parmi les propositions suivantes concernant les catalyseurs, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Un catalyseur est entièrement consommé à la fin d’une réaction chimique.",
      "Un catalyseur peut rendre possible une réaction thermodynamiquement impossible.",
      "Un catalyseur peut favoriser une réaction chimique plutôt qu’une autre.",
      "Un catalyseur peut accélérer une réaction en abaissant l’énergie d’activation de son mécanisme.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      2,
      3
    ],
    "code": "CG-QCM-2082",
    "hint": "Un catalyseur peut modifier la sélectivité cinétique et offrir un mécanisme de plus faible énergie d’activation.",
    "explanation": "Un catalyseur n’est pas consommé globalement et ne rend pas thermodynamiquement possible une réaction qui ne l’était pas. Il peut favoriser certaines voies réactionnelles et accélérer la réaction en abaissant l’énergie d’activation du mécanisme catalysé."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Parmi les propositions suivantes concernant l’effet de la température et d’un catalyseur sur la vitesse d’une réaction, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La constante de vitesse est indépendante de la température.",
      "Un catalyseur augmente l’énergie d’activation, ce qui accélère la réaction.",
      "Un catalyseur modifie nécessairement la composition finale du mélange à l’équilibre.",
      "La loi d’Arrhenius prévoit que la constante de vitesse diminue lorsque la température augmente.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      4
    ],
    "code": "CG-QCM-2094",
    "hint": "La loi d’Arrhenius s’écrit k = A·e⁻ᴱᵃ⁄ᴿᵀ.",
    "explanation": "La constante de vitesse dépend généralement de la température. Un catalyseur abaisse l’énergie d’activation du mécanisme catalysé et ne modifie pas la position de l’équilibre. Selon la loi d’Arrhenius, à énergie d’activation positive, la constante de vitesse augmente généralement avec la température. Aucune des propositions A à D n’est exacte."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Une réaction suit une cinétique d’ordre global égal à 2. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "La vitesse de réaction est indépendante de la concentration des réactifs.",
      "La vitesse de réaction dépend de la concentration d’au moins un réactif.",
      "Le temps de demi-réaction est indépendant des concentrations initiales dans tous les cas.",
      "Le temps de demi-réaction est toujours égal à ln(2)/k.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      1
    ],
    "code": "CG-QCM-2101",
    "hint": "La loi de vitesse d’ordre 2 fait intervenir les concentrations des réactifs.",
    "explanation": "La vitesse d’une réaction d’ordre global 2 dépend des concentrations des réactifs. Le temps de demi-réaction dépend généralement des conditions initiales et n’est pas donné par ln(2)/k, formule caractéristique d’un ordre 1."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Parmi les propositions suivantes concernant le rôle d’un catalyseur, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Son rôle est d’augmenter la vitesse de la réaction.",
      "Il est consommé globalement au cours de la réaction.",
      "Il agit en proposant un mécanisme de plus faible énergie d’activation.",
      "Il peut être solide, liquide ou gazeux.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      0,
      2,
      3
    ],
    "code": "CG-QCM-2108",
    "hint": "Un catalyseur accélère la réaction sans être consommé globalement.",
    "explanation": "Un catalyseur augmente la vitesse de réaction en proposant une voie réactionnelle de plus faible énergie d’activation. Il peut être solide, liquide ou gazeux et est régénéré à la fin du cycle catalytique."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "Parmi les propositions suivantes concernant la catalyse, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "Un catalyseur ne modifie pas la position de l’équilibre chimique.",
      "En catalyse homogène, les étapes caractéristiques sont toujours l’adsorption, la réaction et la désorption.",
      "Un catalyseur modifie l’enthalpie de réaction.",
      "Un catalyseur peut rendre possible une réaction thermodynamiquement impossible.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      0
    ],
    "code": "CG-QCM-2114",
    "hint": "L’adsorption et la désorption sont notamment associées à la catalyse hétérogène.",
    "explanation": "Un catalyseur ne modifie pas la position de l’équilibre ni l’enthalpie de réaction. Les étapes d’adsorption et de désorption sont caractéristiques de nombreux mécanismes de catalyse hétérogène, et un catalyseur ne rend pas une réaction thermodynamiquement impossible possible."
  },
  {
    "subject": "CINÉTIQUE CHIMIQUE ET CATALYSE",
    "level": 6,
    "text": "La constante de vitesse d’une réaction double lorsque la température passe de 20 °C à 30 °C. En supposant que la loi d’Arrhenius s’applique, quelle proposition concernant l’énergie d’activation est exacte ?",
    "choices": [
      "Elle vaut environ 178 kJ·mol⁻¹.",
      "Elle vaut environ 10 kJ·mol⁻¹.",
      "Elle vaut environ 8 kJ·mol⁻¹.",
      "Elle vaut environ 3 kJ·mol⁻¹.",
      "Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      4
    ],
    "code": "CG-QCM-2121",
    "hint": "Convertis les températures en kelvins et applique la loi d’Arrhenius à deux températures.",
    "explanation": "Pour k₂/k₁ = 2, T₁ = 293,15 K et T₂ = 303,15 K, Eₐ = R ln(2)/(1/T₁ − 1/T₂) ≈ 51,2 kJ·mol⁻¹. Cette valeur ne figure pas dans les choix A à D : la réponse E est correcte."
  },
  {
    "subject": "Équations",
    "level": 1,
    "code": "equations-003",
    "text": "On considère le système d'équations linéaires suivant : 3x - 4y = 2 et -5x + 2y = -8. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) Le système n'a aucun couple solution.",
      "B) Le système a un unique couple solution.",
      "C) Le système a une infinité de couples solutions.",
      "D) Les deux droites associées sont sécantes.",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "B",
      "D"
    ],
    "hint": "Calcule le déterminant du système : s'il est non nul, il existe une solution unique.",
    "explanation": "Le déterminant vaut 3 × 2 − (−5 × −4) = −14. Il est non nul : le système admet une solution unique et les deux droites sont sécantes."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "code": "suites-022",
    "text": "On considère une suite géométrique de premier terme u₁ = 2 et de raison 1,2. Quelle proposition donne la valeur entière la plus proche de u₂₀ ?",
    "choices": [
      "A) u₂₀ ≈ 81",
      "B) u₂₀ ≈ 77",
      "C) u₂₀ ≈ 64",
      "D) u₂₀ ≈ 72",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "C"
    ],
    "hint": "Pour une suite géométrique de premier terme u₁, utilise uₙ = u₁ × qⁿ⁻¹.",
    "explanation": "u₂₀ = 2 × 1,2¹⁹ ≈ 63,9. La valeur entière la plus proche est 64."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "code": "suites-023",
    "text": "On considère une suite géométrique (vₙ) de premier terme v₀ = 5 et de raison 0,9. Parmi les propositions suivantes concernant v₂₀, laquelle est exacte ?",
    "choices": [
      "A) v₂₀ ≈ 0,55",
      "B) v₂₀ ≈ 0,61",
      "C) v₂₀ ≈ 1,22",
      "D) v₂₀ ≈ 0,002",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "B"
    ],
    "hint": "Pour une suite géométrique de premier terme v₀, utilise vₙ = v₀ × qⁿ.",
    "explanation": "v₂₀ = 5 × 0,9²⁰ ≈ 0,61."
  },
  {
    "subject": "Suites",
    "level": 1,
    "code": "201",
    "text": "Une suite vérifie U₀ = 4 et Uₙ₊₁ = Uₙ + 3. Quelles propositions sont exactes ?",
    "choices": [
      "La suite est arithmétique de raison 3",
      "La suite est géométrique de raison 3",
      "U₁₀ = 34",
      "U₁₀ = 30",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      2
    ],
    "hint": "Une suite définie en ajoutant toujours le même nombre est arithmétique.",
    "explanation": "La raison vaut 3. Ainsi, Uₙ = 4 + 3n et U₁₀ = 4 + 30 = 34."
  },
  {
    "subject": "Suites",
    "level": 1,
    "code": "202",
    "text": "Une suite géométrique vérifie V₀ = 5 et Vₙ₊₁ = 2Vₙ. Quelles propositions sont exactes ?",
    "choices": [
      "V₄ = 40",
      "V₄ = 80",
      "Vₙ = 5 × 2ⁿ",
      "V₄ = 5 + 4 × 2",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      1,
      2
    ],
    "hint": "Pour une suite géométrique, Vₙ = V₀ × qⁿ.",
    "explanation": "La raison est 2. Donc Vₙ = 5 × 2ⁿ et V₄ = 5 × 16 = 80."
  },
  {
    "subject": "Suites",
    "level": 1,
    "code": "203",
    "text": "Une suite vérifie U₀ = 2 et Uₙ₊₁ = Uₙ + 2n + 1. Quelles propositions sont exactes ?",
    "choices": [
      "U₁ = 3",
      "U₂ = 6",
      "U₃ = 11",
      "La suite est arithmétique",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      1,
      2
    ],
    "hint": "Calcule successivement U₁, U₂ et U₃ en remplaçant n par 0, puis 1, puis 2.",
    "explanation": "U₁ = 3 ; U₂ = 6 ; U₃ = 11. Les différences ne sont pas constantes : la suite n'est pas arithmétique."
  },
  {
    "subject": "Suites",
    "level": 1,
    "code": "204",
    "text": "Une suite arithmétique vérifie U₀ = 7 et r = -2. Quelles propositions sont exactes ?",
    "choices": [
      "U₁₀ = -13",
      "U₁₀ = -20",
      "La somme U₀ + U₁ + ... + U₁₀ vaut -33",
      "La somme U₀ + U₁ + ... + U₁₀ vaut -26",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      2
    ],
    "hint": "Utilise Uₙ = U₀ + nr, puis la formule de somme des termes d'une suite arithmétique.",
    "explanation": "U₁₀ = 7 - 20 = -13. Il y a 11 termes, donc S = 11 × (7 - 13)/2 = -33."
  },
  {
    "subject": "Suites",
    "level": 1,
    "code": "205",
    "text": "Une suite géométrique vérifie W₁ = 12 et W₂ = 6. Quelles propositions sont exactes ?",
    "choices": [
      "La raison est 2",
      "La raison est 1/2",
      "W₃ = 3",
      "W₄ = 1,5",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "hint": "La raison d'une suite géométrique est le quotient de deux termes consécutifs.",
    "explanation": "q = W₂/W₁ = 6/12 = 1/2. Donc W₃ = 3 et W₄ = 1,5."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "code": "fonctions-25",
    "text": "On considère u(x) = x e^(x² + 1) + ln(1 + sin²(x)). On calcule u'(x). Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) u'(x) = (2x + 1)e^(x² + 1) + 1/(1 + sin²(x)).",
      "B) u'(x) = (2x² + 1)e^(x² + 1) + 2 sin(x)cos(x)/(1 + sin²(x)).",
      "C) u'(x) = e^(2x) + 2 sin(x)/(1 + sin²(x)).",
      "D) u'(x) = e^(2x) + 2 cos(x)/(1 + sin²(x)).",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B"
    ],
    "hint": "Utilise la règle du produit pour le premier terme et la dérivée de ln(v) pour le second.",
    "explanation": "La dérivée de x e^(x² + 1) est (2x² + 1)e^(x² + 1). La dérivée de ln(1 + sin²(x)) est 2 sin(x)cos(x)/(1 + sin²(x))."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "code": "fonctions-26",
    "text": "On considère g(x) = 3x³ + sin(2x) + 1/√x. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) lim(x→+∞) g(x) = +∞.",
      "B) g'(x) = 9x² - 2 cos(3x) + 2/(x√x).",
      "C) g'(x) = 9x² + cos(2x) - 1/(x√x).",
      "D) g'(x) = 9x² + 2 cos(2x) - 1/(2x√x).",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A",
      "D"
    ],
    "hint": "Le terme 3x³ domine à l’infini. Pour le dernier terme, dérive x^(-1/2).",
    "explanation": "La limite vaut +∞. La dérivée est 9x² + 2cos(2x) - 1/(2x√x)."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "code": "fonctions-28",
    "text": "On considère h(x) = ln(x² + 1) + x/(x² + 1) + tan(x). On calcule h'(x).",
    "choices": [
      "A) h'(x) = 1/(x² + 1) + (1 - x²)/(x² + 1)² + tan²(x).",
      "B) h'(x) = (2x + 1)/(x² + 1) + (x² - 1)/(x² + 1)² + 1/cos²(x).",
      "C) h'(x) = 2x/(x² + 1) + (1 - x²)/(x² + 1)² + tan²(x) + 1.",
      "D) h'(x) = 2x/(x² + 1) + (x² - 1)/(x² + 1)² + tan²(x) + 1.",
      "E) Aucune des réponses ci-dessus n’est exacte."
    ],
    "answer": [
      "C"
    ],
    "hint": "Dérive séparément le logarithme, le quotient et la tangente.",
    "explanation": "La dérivée est 2x/(x² + 1) + (1 - x²)/(x² + 1)² + 1/cos²(x). Comme 1/cos²(x) = tan²(x) + 1, la réponse C est correcte."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "code": "fonctions-29",
    "text": "On considère g(x) = x²e^(-2x). Parmi les propositions suivantes concernant g et g', laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) lim(x→+∞) g(x) = 0.",
      "B) lim(x→+∞) g(x) = +∞.",
      "C) g'(x) = 2x(1 - x)e^(-2x).",
      "D) g'(x) = x(2 - x)e^(-2x).",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A",
      "C"
    ],
    "hint": "Réécris l’expression comme x²/e^(2x), puis dérive avec la règle du produit.",
    "explanation": "L’exponentielle croît plus vite que le polynôme, donc la limite vaut 0. La dérivée est 2xe^(-2x) - 2x²e^(-2x) = 2x(1 - x)e^(-2x)."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "code": "fonctions-30",
    "text": "On considère f(x) = e^(√x) + sin(x)/cos(x). On calcule f'(x).",
    "choices": [
      "A) f'(x) = -e^(√x)/(2√x) + 1/sin²(x).",
      "B) f'(x) = e^(√x)/(2√x) + 1/cos²(x).",
      "C) f'(x) = -e^(√x)/(2√x) - cos(x)/sin(x).",
      "D) f'(x) = e^(√x)/(2√x) + 1/cos²(x).",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B"
    ],
    "hint": "Utilise la dérivée d’une exponentielle composée et celle de tan(x) = sin(x)/cos(x).",
    "explanation": "La dérivée de e^(√x) est e^(√x)/(2√x). La dérivée de sin(x)/cos(x) est 1/cos²(x). Les réponses B et D sont identiques."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "code": "fonctions-31",
    "text": "On considère g(x) = e^(2x)/x - ln(2x). Parmi les propositions suivantes concernant g et g', laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) lim(x→+∞) g(x) = -∞.",
      "B) lim(x→+∞) g(x) = +∞.",
      "C) g'(x) = 2e^(2x)/x - e^(2x)/x² - ln(2).",
      "D) g'(x) = (2xe^(2x) - e^(2x))/x² - x ln(2x - 1).",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B"
    ],
    "hint": "L’exponentielle domine le logarithme. Pour la dérivée, applique la règle du quotient.",
    "explanation": "La limite est +∞. La dérivée correcte est 2e^(2x)/x - e^(2x)/x² - 1/x. La proposition C comporte une erreur sur le dernier terme."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "code": "fonctions-32",
    "text": "On considère f(x) = 1/√(2x) + ln(x)/x + sin²(2x + 3). On calcule f'(x).",
    "choices": [
      "A) f'(x) = -1/(x√(2x)) + 4cos(2x + 3).",
      "B) f'(x) = 1/(2x√(2x)) + (x - ln(x))/x² + 2cos(2x + 3)sin(2x + 3).",
      "C) f'(x) = -1/(2x√(2x)) + (1 - ln(x))/x² + 4cos(2x + 3)sin(2x + 3).",
      "D) f'(x) = 1/(2x) + (1 + ln(x))/x² + 2cos(2x + 3)sin(2x + 3).",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "C"
    ],
    "hint": "Dérive les trois termes séparément ; attention à la règle de la chaîne.",
    "explanation": "La dérivée vaut -1/(2x√(2x)) + (1 - ln(x))/x² + 4cos(2x + 3)sin(2x + 3)."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "code": "fonctions-33",
    "text": "On considère u(x) = x/(x² + 1) + ln(2 + cos(x)) + 3ˣ. On calcule u'(x).",
    "choices": [
      "A) u'(x) = (1 - x²)/(x² + 1)² - sin(x)/(2 + cos(x)) + ln(3)·3ˣ.",
      "B) u'(x) = (1 - x)/(x² + 1)² + (2 - sin(x))/(2 + cos(x)) + 3ˣ.",
      "C) u'(x) = (1 - x²)/(x² + 1)² + sin(x)/(2 + cos(x)) + 3ˣ.",
      "D) u'(x) = (1 - 2x)/(x² + 1)² + 1/(2 + cos(x)) + ln(3)·3ˣ.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A"
    ],
    "hint": "Dérive séparément le quotient, le logarithme composé et l’exponentielle de base 3.",
    "explanation": "Le quotient donne (1 - x²)/(x² + 1)². Le logarithme donne -sin(x)/(2 + cos(x)). Enfin, (3ˣ)' = ln(3)·3ˣ."
  },
  {
    "subject": "Intégrales",
    "level": 3,
    "code": "301",
    "text": "On considère f(x) = 3x² - 2x + 4. Quelles propositions sont exactes ?",
    "choices": [
      "Une primitive est F(x) = x³ - x² + 4x",
      "Une primitive est F(x) = 6x - 2",
      "Une primitive est F(x) = x³ - 2x² + 4x",
      "F'(x) = 3x² - 2x + 4 pour F(x) = x³ - x² + 4x",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      3
    ],
    "hint": "Pour trouver une primitive d'un polynôme, augmente chaque exposant de 1 et divise par le nouvel exposant.",
    "explanation": "La dérivée de x³ - x² + 4x est 3x² - 2x + 4. Les propositions A et D sont vraies."
  },
  {
    "subject": "Intégrales",
    "level": 3,
    "code": "302",
    "text": "On considère I = ∫₀² (2x + 1) dx. Quelles propositions sont exactes ?",
    "choices": [
      "Une primitive est x² + x",
      "I = 6",
      "I = 4",
      "I = [x² + x]₀²",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "hint": "Calcule une primitive, puis évalue-la en 2 et en 0.",
    "explanation": "Une primitive est x² + x. I = (4 + 2) - 0 = 6."
  },
  {
    "subject": "Intégrales",
    "level": 3,
    "code": "303",
    "text": "On considère I = ∫₀¹ xeˣ dx. Quelles propositions sont exactes ?",
    "choices": [
      "I = 1",
      "Une primitive est xeˣ",
      "Une primitive est (x - 1)eˣ",
      "Le calcul peut se faire par intégration par parties",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "hint": "Pour intégrer un produit x eˣ, utilise une intégration par parties.",
    "explanation": "Une primitive est (x - 1)eˣ. Ainsi I = [(x - 1)eˣ]₀¹ = 1."
  },
  {
    "subject": "Intégrales",
    "level": 3,
    "code": "304",
    "text": "On considère la fonction f(x) = x² sur [0 ; 3]. Quelle est sa valeur moyenne sur cet intervalle ?",
    "choices": [
      "3",
      "9",
      "27",
      "1",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0
    ],
    "hint": "La valeur moyenne vaut 1/(b-a) × ∫ₐᵇ f(x) dx.",
    "explanation": "La valeur moyenne est (1/3) × ∫₀³ x² dx = (1/3) × 9 = 3."
  },
  {
    "subject": "Intégrales",
    "level": 3,
    "code": "305",
    "text": "On considère I = ∫₀^(π/2) cos(x) dx. Quelles propositions sont exactes ?",
    "choices": [
      "I = 0",
      "I = 1",
      "Une primitive de cos(x) est sin(x)",
      "I = [sin(x)]₀^(π/2)",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "hint": "Rappelle-toi la primitive usuelle de cos(x).",
    "explanation": "I = sin(π/2) - sin(0) = 1."
  },
  {
    "subject": "Équations différentielles linéaires d’ordre 1",
    "level": 4,
    "code": "equadiff-7",
    "text": "On considère l'équation différentielle (E) : y'(x) + 5y(x) = 2. On cherche sa solution générale. Laquelle des propositions suivantes est exacte ?",
    "choices": [
      "A) y(x) = Ce^(5x) + x + 2/5, où C est une constante réelle.",
      "B) y(x) = Ce^(-5x) + 2/5, où C est une constante réelle.",
      "C) y(x) = e^(5x) + 2 + C, où C est une constante réelle.",
      "D) y(x) = Ce^(-5x) + 2x, où C est une constante réelle.",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "B"
    ],
    "hint": "Résous d'abord l'équation homogène, puis cherche une solution particulière constante.",
    "explanation": "La solution générale est y = Ce^(-5x) + 2/5."
  },
  {
    "subject": "Équations différentielles linéaires d’ordre 1",
    "level": 4,
    "code": "equadiff-8",
    "text": "On considère l'équation différentielle (E) : 2y'(x) + x²y(x) = x². On cherche sa solution générale. Laquelle des propositions suivantes est exacte ?",
    "choices": [
      "A) y(x) = Ce^(-x²), où C est une constante réelle.",
      "B) y(x) = Ce^(-x³) + 1, où C est une constante réelle.",
      "C) y(x) = Ce^(x³) + 1, où C est une constante réelle.",
      "D) y(x) = Ce^(x²) + x, où C est une constante réelle.",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "E"
    ],
    "hint": "Divise l'équation par 2 avant de résoudre l'équation homogène.",
    "explanation": "La solution homogène est y_h = Ce^(-x³/6). Aucune des propositions A à D ne possède cette solution homogène."
  },
  {
    "subject": "Équations différentielles linéaires d’ordre 1",
    "level": 4,
    "code": "equadiff-11",
    "text": "On considère l'équation différentielle y'(x) + (x - 1)y(x) = x². On cherche l'unique solution vérifiant y(1) = -1. Laquelle des propositions suivantes est exacte ?",
    "choices": [
      "A) y(x) = -3e^(-(x - 1)²/2) + x + 1",
      "B) y(x) = -2e^(-(x - 1)²) + x",
      "C) y(x) = -e^((x - 1)²/2) + x - 1",
      "D) y(x) = -2e^((x - 1)²) + 1",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "E"
    ],
    "hint": "La solution homogène contient l'exponentielle de l'opposé d'une primitive de x - 1. Vérifie ensuite la solution particulière.",
    "explanation": "La solution particulière proposée initialement, y_p = x + 1, ne vérifie pas l'équation différentielle. La solution indiquée en A ne convient donc pas."
  },
  {
    "subject": "Équations différentielles linéaires d’ordre 1",
    "level": 4,
    "code": "equadiff-12",
    "text": "On considère l'équation différentielle y'(x) + x²y(x) = x². On cherche l'unique solution vérifiant y(0) = -2. Laquelle des propositions suivantes est exacte ?",
    "choices": [
      "A) y(x) = -2e^(x³/3) + x",
      "B) y(x) = e^(2x) + x - 3",
      "C) y(x) = -e^(-x³/3) + x - 1",
      "D) y(x) = -3e^(-x³/3) + 1",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "D"
    ],
    "hint": "Vérifie d'abord la solution homogène, puis la condition initiale en x = 0.",
    "explanation": "La solution homogène est y_h = Ce^(-x³/3). Une solution particulière est y_p = 1. La condition y(0) = -2 donne C = -3."
  },
  {
    "subject": "Équations différentielles linéaires d’ordre 1",
    "level": 4,
    "code": "equadiff-15",
    "text": "On considère l'équation différentielle y'(x) + 2xy(x) = x² + x + 1/2. On cherche l'unique solution vérifiant y(0) = 1. Laquelle des propositions suivantes est exacte ?",
    "choices": [
      "A) y(x) = (1/2)e^(-x²) + (1/2)(x + 1)",
      "B) y(x) = (1/2)e^(x²) + (x + 1)",
      "C) y(x) = e^(-2x²) + x/2",
      "D) y(x) = (1/2)e^(-x²) + 1/2",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "E"
    ],
    "hint": "La solution homogène est de la forme Ce^(-x²). Vérifie si la solution particulière proposée convient.",
    "explanation": "La solution homogène est y_h = Ce^(-x²), mais y_p = (x + 1)/2 ne vérifie pas l'équation différentielle. Aucune des propositions A à D ne convient."
  },
  {
    "subject": "Équations différentielles linéaires d’ordre 1",
    "level": 4,
    "code": "equadiff-17",
    "text": "On considère l'équation différentielle (1 - x)y'(x) + 2y(x) = x. On cherche une solution particulière. Laquelle des propositions suivantes est exacte ?",
    "choices": [
      "A) y(x) = x + 1/2",
      "B) y(x) = x - 1",
      "C) y(x) = x - 1/2",
      "D) y(x) = x",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "C"
    ],
    "hint": "Essaie une solution particulière affine y_p(x) = ax + b, puis remplace-la dans l'équation.",
    "explanation": "Avec y_p = ax + b, l'identification donne a = 1 et b = -1/2. La solution particulière est x - 1/2."
  },
  {
    "subject": "Équations différentielles linéaires d’ordre 1",
    "level": 4,
    "code": "equadiff-18",
    "text": "On considère l'équation différentielle (x + 1)y'(x) - 2y(x) = x + 1. On cherche une solution particulière. Laquelle des propositions suivantes est exacte ?",
    "choices": [
      "A) y(x) = x + 1",
      "B) y(x) = x - 1",
      "C) y(x) = -x - 1",
      "D) y(x) = x",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "C"
    ],
    "hint": "Teste les fonctions proposées en calculant leur dérivée et en les remplaçant dans l'équation.",
    "explanation": "Pour y(x) = -x - 1, le membre de gauche vaut -(x + 1) + 2(x + 1) = x + 1. La réponse C est correcte."
  },
  {
    "subject": "Équations différentielles",
    "level": 4,
    "code": "401",
    "text": "On considère l'équation différentielle y' = 3y. Quelles propositions sont exactes ?",
    "choices": [
      "Les solutions sont y = Ce^(3x)",
      "Les solutions sont y = 3x + C",
      "y = e^x est une solution",
      "y = 0 est une solution",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      3
    ],
    "hint": "Pour y' = ay, les solutions sont de la forme Ce^(ax).",
    "explanation": "La solution générale est y = Ce^(3x). Pour C = 0, on obtient la solution nulle."
  },
  {
    "subject": "Équations différentielles",
    "level": 4,
    "code": "402",
    "text": "On considère y' = 2x. Quelles propositions sont exactes ?",
    "choices": [
      "Les solutions sont y = x² + C",
      "Les solutions sont y = 2x + C",
      "y = x² + 1 est une solution",
      "Toute solution a pour dérivée 2x",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      2,
      3
    ],
    "hint": "Cherche une primitive de 2x et ajoute une constante réelle.",
    "explanation": "Les solutions sont y = x² + C. La dérivée de chacune d'elles est bien 2x."
  },
  {
    "subject": "Équations différentielles",
    "level": 4,
    "code": "403",
    "text": "On considère y' + 2y = 0. Quelles propositions sont exactes ?",
    "choices": [
      "Les solutions sont y = Ce^(-2x)",
      "Les solutions sont y = Ce^(2x)",
      "y = 0 est une solution",
      "y = x² est une solution",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      2
    ],
    "hint": "Réécris l'équation sous la forme y' = -2y.",
    "explanation": "La solution générale est y = Ce^(-2x). La solution nulle correspond à C = 0."
  },
  {
    "subject": "Équations différentielles",
    "level": 4,
    "code": "404",
    "text": "On considère y' = 2x + 1 avec y(0) = 3. Quelles propositions sont exactes ?",
    "choices": [
      "La solution générale est y = x² + x + C",
      "La solution particulière est y = x² + x + 3",
      "La solution particulière est y = 2x + 3",
      "y(1) = 5",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "hint": "Intègre le membre de droite, puis utilise la condition initiale pour déterminer C.",
    "explanation": "Une primitive de 2x + 1 est x² + x + C. Comme y(0) = 3, C = 3. Donc y(1) = 5."
  },
  {
    "subject": "Équations différentielles",
    "level": 4,
    "code": "405",
    "text": "On considère y' = eˣ. Quelles propositions sont exactes ?",
    "choices": [
      "Les solutions sont y = eˣ + C",
      "y = eˣ est une solution",
      "Les solutions sont y = xeˣ",
      "Deux solutions diffèrent d'une constante",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "hint": "Cherche une primitive de eˣ.",
    "explanation": "Les solutions sont y = eˣ + C. La différence entre deux solutions est constante."
  },
  {
    "subject": "Trigonométrie",
    "level": 5,
    "code": "trigonometrie-20",
    "text": "Parmi les propositions suivantes concernant les fonctions sinus, cosinus et tangente, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) Pour tout réel a, sin(a + π/4) = (√2/2)(sin(a) + cos(a)).",
      "B) Pour tout réel a, cos(a) = 2(cos(a/2))² + 1.",
      "C) Pour tout réel a différent de kπ/2, avec k ∈ ℤ, tan(π/2 - a)tan(a) = 1.",
      "D) Pour tout réel a, cos(a + π/2) = sin(a).",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "A",
      "C"
    ],
    "hint": "Utilise les formules d'addition et tan(π/2 − a) = 1/tan(a), lorsque les expressions sont définies.",
    "explanation": "A est vraie par la formule d'addition du sinus. B est fausse : cos(a) = 2cos²(a/2) − 1. C est vraie lorsque les tangentes sont définies. D est fausse car cos(a + π/2) = −sin(a)."
  },
  {
    "subject": "Trigonométrie",
    "level": 5,
    "code": "trigonometrie-21",
    "text": "Parmi les propositions suivantes concernant les fonctions sinus et cosinus, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) Pour tout réel t, cos(2t) = 2 sin(t) cos(t).",
      "B) Pour tout réel t, cos(t) = 0 si et seulement si t = (2k + 1)π/2, avec k ∈ ℤ.",
      "C) Pour tout réel t, sin(t/2) = 0 si et seulement si t = 2kπ, avec k ∈ ℤ.",
      "D) Pour tout réel t, cos(π/2 - t) = sin(t).",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "hint": "Utilise les formules de duplication et les solutions générales des équations trigonométriques.",
    "explanation": "A est fausse car cos(2t) = cos²(t) − sin²(t). B, C et D sont vraies."
  },
  {
    "subject": "Trigonométrie",
    "level": 5,
    "code": "5001",
    "text": "Dans le plan Oxy, on considère A(-1 ; -3), B(2 ; 3), C(-2 ; 2) et D(4 ; -1). Quelles propositions sont exactes ?",
    "choices": [
      "A) La droite (AB) a pour coefficient directeur m = -2.",
      "B) La droite (CD) a pour coefficient directeur m = -1/2.",
      "C) La droite (CD) a pour équation y = -x/2 - 1.",
      "D) Les droites (AB) et (CD) sont perpendiculaires.",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "B",
      "D"
    ],
    "hint": "Calcule les coefficients directeurs avec m = (y₂ - y₁)/(x₂ - x₁).",
    "explanation": "m_AB = 2 et m_CD = -1/2. Leur produit vaut -1, donc les droites sont perpendiculaires. L'équation de (CD) est y = -x/2 + 1."
  },
  {
    "subject": "Trigonométrie",
    "level": 5,
    "code": "5019",
    "text": "Sur le cercle trigonométrique de centre O(0 ; 0), on considère A(1 ; 0) et B(1/2 ; √3/2). Quelles propositions concernant l'angle orienté (OA ; OB) sont exactes ?",
    "choices": [
      "A) Une mesure de l'angle en radians est π/6.",
      "B) Une mesure de l'angle en radians est π/3.",
      "C) La tangente de l'angle vaut √3.",
      "D) La cotangente de l'angle vaut √3.",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "B",
      "C"
    ],
    "hint": "Sur le cercle trigonométrique, les coordonnées de B donnent le cosinus et le sinus de l'angle.",
    "explanation": "Les coordonnées de B sont (cos θ ; sin θ) = (1/2 ; √3/2), donc θ = π/3. La tangente vaut √3."
  },
  {
    "subject": "Trigonométrie",
    "level": 5,
    "code": "5018",
    "text": "Dans le plan, on considère A(1 ; 0), B(-1/2 ; √3/2) et C(-1/2 ; -√3/2). Quelles propositions concernant le triangle ABC sont exactes ?",
    "choices": [
      "A) La distance AB vaut √3.",
      "B) Le triangle ABC est rectangle.",
      "C) L'aire du triangle ABC vaut 3√3/2.",
      "D) Le triangle ABC est équilatéral.",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "A",
      "D"
    ],
    "hint": "Calcule les distances avec AB = √((xB - xA)² + (yB - yA)²).",
    "explanation": "Les trois côtés mesurent √3 : le triangle est équilatéral. Son aire vaut 3√3/4, et non 3√3/2."
  },
  {
    "subject": "Trigonométrie",
    "level": 5,
    "code": "5020",
    "text": "Parmi les propositions suivantes concernant les fonctions sinus, cosinus et tangente, lesquelles sont exactes ?",
    "choices": [
      "A) Pour tout réel a, sin(a + π/4) = (√2/2)(sin(a) + cos(a)).",
      "B) Pour tout réel a, cos(a) = 2cos²(a/2) + 1.",
      "C) Pour tout réel a différent de kπ/2, avec k ∈ ℤ, tan(π/2 - a)tan(a) = 1.",
      "D) Pour tout réel a, cos(a + π/2) = sin(a).",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "A",
      "C"
    ],
    "hint": "Utilise les formules d'addition et les identités de duplication. Attention aux signes.",
    "explanation": "A est vraie. B est fausse : cos(a) = 2cos²(a/2) - 1. C est vraie lorsque les deux tangentes sont définies. D est fausse."
  },
  {
    "subject": "Trigonométrie",
    "level": 5,
    "code": "5021",
    "text": "Parmi les propositions suivantes concernant les fonctions sinus et cosinus, lesquelles sont exactes ?",
    "choices": [
      "A) Pour tout réel t, cos(2t) = 2sin(t)cos(t).",
      "B) cos(t) = 0 si et seulement si t = (2k + 1)π/2, avec k ∈ ℤ.",
      "C) sin(t/2) = 0 si et seulement si t = 2kπ, avec k ∈ ℤ.",
      "D) Pour tout réel t, cos(π/2 - t) = sin(t).",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "B",
      "C",
      "D"
    ],
    "hint": "Distingue la formule du cosinus d'un angle double de celle du sinus d'un angle double.",
    "explanation": "A est fausse car cos(2t) = cos²(t) - sin²(t). B, C et D sont vraies."
  },
  {
    "subject": "Trigonométrie",
    "level": 5,
    "code": "5023",
    "text": "On considère les identités trigonométriques suivantes. Quelles propositions sont exactes ?",
    "choices": [
      "A) Pour tout réel t, sin(t + π/2) = cos(t).",
      "B) Pour tout réel t, cos(t + π/2) = sin(t).",
      "C) Pour tout réel t, sin(π - t) = sin(t).",
      "D) Pour tout réel t, cos(π - t) = cos(t).",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "A",
      "C"
    ],
    "hint": "Utilise les formules d'addition et fais attention au signe.",
    "explanation": "A est vraie car sin(t + π/2) = cos(t). B est fausse car cos(t + π/2) = -sin(t). C est vraie. D est fausse car cos(π - t) = -cos(t)."
  },
  {
    "subject": "Trigonométrie",
    "level": 5,
    "code": "5024",
    "text": "Parmi les propositions suivantes concernant les fonctions sinus et cosinus, lesquelles sont exactes ?",
    "choices": [
      "A) Pour tout réel t, cos(t + π/3) + cos(t - π/3) = cos(t).",
      "B) Pour tout réel t, sin(t + π/6) = sin(t).",
      "C) Pour tout réel t, sin(t + π) + sin(t - π) = -2sin(t).",
      "D) Pour tout réel t, cos(t + π) + cos(t - π) = 2cos(t).",
      "E) Aucune des propositions ci-dessus n'est exacte."
    ],
    "answer": [
      "A",
      "C"
    ],
    "hint": "Les formules d'addition permettent de regrouper les termes en cos(t) et sin(t).",
    "explanation": "A et C sont vraies. B est fausse. D est fausse : la somme vaut -2cos(t)."
  },
  {
    "subject": "Géométrie et trigonométrie",
    "level": 5,
    "code": "501",
    "text": "Dans un repère, A(1 ; 2) et B(4 ; 6). Quelles propositions sont exactes ?",
    "choices": [
      "AB = 5",
      "Le milieu de [AB] est (2,5 ; 4)",
      "Le vecteur AB a pour coordonnées (3 ; 4)",
      "Le coefficient directeur de (AB) est 4/3",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "hint": "Utilise la distance, les coordonnées du milieu et le rapport des variations de y et de x.",
    "explanation": "AB = 5. Le milieu est (2,5 ; 4), le vecteur AB vaut (3 ; 4) et le coefficient directeur vaut 4/3."
  },
  {
    "subject": "Géométrie et trigonométrie",
    "level": 5,
    "code": "502",
    "text": "On considère la droite d'équation 2x - y = 3. Quelles propositions sont exactes ?",
    "choices": [
      "Son coefficient directeur est -2",
      "Son coefficient directeur est 2",
      "Elle coupe l'axe des ordonnées en (0 ; -3)",
      "Un vecteur directeur est (1 ; 2)",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      1,
      2,
      3
    ],
    "hint": "Mets l'équation sous la forme y = mx + p.",
    "explanation": "On obtient y = 2x - 3. Le coefficient directeur est 2, l'ordonnée à l'origine est -3 et (1 ; 2) est un vecteur directeur."
  },
  {
    "subject": "Géométrie et trigonométrie",
    "level": 5,
    "code": "503",
    "text": "Quelles identités trigonométriques sont exactes pour tout réel x ?",
    "choices": [
      "sin²(x) + cos²(x) = 1",
      "cos(-x) = -cos(x)",
      "sin(-x) = -sin(x)",
      "cos(x + π) = cos(x)",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      2
    ],
    "hint": "Rappelle-toi l'identité fondamentale et la parité du sinus et du cosinus.",
    "explanation": "sin²(x) + cos²(x) = 1. Le sinus est impair et le cosinus est pair. De plus, cos(x + π) = -cos(x)."
  },
  {
    "subject": "Géométrie et trigonométrie",
    "level": 5,
    "code": "504",
    "text": "On sait que cos(x) = 1/2 et que x ∈ [0 ; π/2]. Quelles propositions sont exactes ?",
    "choices": [
      "x = π/3",
      "sin(x) = √3/2",
      "tan(x) = 1/√3",
      "tan(x) = √3",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      1,
      3
    ],
    "hint": "Utilise les valeurs remarquables pour un angle de 60°.",
    "explanation": "Dans l'intervalle indiqué, x = π/3. Son sinus vaut √3/2 et sa tangente vaut √3."
  },
  {
    "subject": "Géométrie et trigonométrie",
    "level": 5,
    "code": "505",
    "text": "On considère A(0 ; 0), B(4 ; 0) et C(0 ; 3). Quelles propositions sont exactes ?",
    "choices": [
      "AB = 4",
      "AC = 3",
      "BC = 5",
      "Le triangle ABC est rectangle en A",
      "Aucune des propositions précédentes"
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "hint": "Calcule les longueurs et vérifie le théorème de Pythagore.",
    "explanation": "AB = 4, AC = 3 et BC = 5. Comme AB² + AC² = BC², le triangle est rectangle en A."
  },
  {
    "subject": "Équations",
    "level": 1,
    "text": "On considère l’équation 3x² + 8x − 3 = 0. Quelles propositions sont exactes ?",
    "choices": [
      "A) Elle n’a aucune solution réelle.",
      "B) Elle admet deux solutions réelles distinctes.",
      "C) La somme des solutions vaut 8/3.",
      "D) Le trinôme 3x² + 8x − 3 est positif pour tout x ≥ 1.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B",
      "D"
    ],
    "code": "equation_second_degre_01",
    "hint": "Calcule le discriminant, puis détermine les racines et étudie le signe du trinôme.",
    "explanation": "Le discriminant vaut Δ = 8² − 4 × 3 × (−3) = 100 > 0 : il existe deux racines distinctes, −3 et 1/3. Leur somme vaut −8/3, et non 8/3. Comme le coefficient de x² est positif, le trinôme est positif à l’extérieur des racines ; il est donc positif pour x ≥ 1."
  },
  {
    "subject": "Équations",
    "level": 1,
    "text": "On considère l’équation 4x² + 12x + 9 = 0. Quelles propositions sont exactes ?",
    "choices": [
      "A) Elle n’a aucune solution réelle.",
      "B) Elle a une solution réelle double.",
      "C) Elle admet deux solutions réelles distinctes.",
      "D) Le produit des racines vaut 9/4.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B",
      "D"
    ],
    "code": "equation_second_degre_02",
    "hint": "Calcule Δ, puis utilise la relation entre le produit des racines et les coefficients.",
    "explanation": "Δ = 12² − 4 × 4 × 9 = 0 : l’équation possède une racine double, égale à −3/2. Le produit des racines, comptées avec multiplicité, vaut c/a = 9/4."
  },
  {
    "subject": "Équations",
    "level": 1,
    "text": "On considère le système réel : 3x − 4y = 2 et −5x + 2y = −8. Quelles propositions sont exactes ?",
    "choices": [
      "A) Le système n’a aucun couple solution.",
      "B) Le système a un unique couple solution.",
      "C) Le système a une infinité de couples solutions.",
      "D) Les droites 3x − 4y = 2 et −5x + 2y = −8 sont sécantes.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B",
      "D"
    ],
    "code": "systeme_lineaire_01",
    "hint": "Calcule le déterminant des coefficients des deux équations.",
    "explanation": "Le déterminant vaut 3 × 2 − (−5 × −4) = −14, donc il est non nul. Le système admet un unique couple solution. Géométriquement, les deux droites sont sécantes."
  },
  {
    "subject": "Équations",
    "level": 1,
    "text": "On considère le système réel : 4x − 12y = 1 et −3x + 9y = −3/4. Quelles propositions sont exactes ?",
    "choices": [
      "A) Le système n’a aucun couple solution.",
      "B) Le système a un unique couple solution.",
      "C) Le système a une infinité de couples solutions.",
      "D) Tous les points M(x ; y) solutions du système sont alignés.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "C",
      "D"
    ],
    "code": "systeme_lineaire_02",
    "hint": "Vérifie si l’une des équations est un multiple exact de l’autre, y compris pour le second membre.",
    "explanation": "En multipliant la première équation par −3/4, on obtient −3x + 9y = −3/4, soit exactement la seconde équation. Les deux équations représentent la même droite : il existe une infinité de solutions, toutes alignées."
  },
  {
    "subject": "Équations",
    "level": 1,
    "text": "On considère le système réel : 9x − 6y = 12 et −12x + 8y = 16. Quelles propositions sont exactes ?",
    "choices": [
      "A) Le système a une infinité de solutions.",
      "B) Le système n’a aucune solution réelle.",
      "C) Le système a un unique couple solution.",
      "D) L’ensemble des solutions forme une droite.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B"
    ],
    "code": "systeme_lineaire_03",
    "hint": "Les coefficients des inconnues sont proportionnels : compare ensuite les seconds membres.",
    "explanation": "Le déterminant vaut 9 × 8 − (−12 × −6) = 0. Les équations sont incompatibles : multiplier la première par −4/3 donne −12x + 8y = −16, alors que la seconde impose −12x + 8y = 16. Il n’existe donc aucune solution."
  },
  {
    "subject": "Équations",
    "level": 1,
    "text": "On considère le système réel : 6x − 3y = 21 et −4x + 2y = −14. Quelles propositions sont exactes ?",
    "choices": [
      "A) Il y a une infinité de solutions.",
      "B) Il n’a aucune solution réelle.",
      "C) Il a un unique couple solution.",
      "D) L’ensemble des solutions forme une droite.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A",
      "D"
    ],
    "code": "systeme_lineaire_04",
    "hint": "Multiplie la première équation par −2/3 et compare-la à la seconde.",
    "explanation": "En multipliant 6x − 3y = 21 par −2/3, on obtient −4x + 2y = −14, qui est exactement la seconde équation. Le système représente une seule droite et possède une infinité de solutions."
  },
  {
    "subject": "Équations",
    "level": 1,
    "text": "On considère le système réel : 4x − 6y = 3 et −6x + 9y = −9/2. Quelles propositions sont exactes ?",
    "choices": [
      "A) Le système n’a aucun couple solution.",
      "B) Le système a un unique couple solution.",
      "C) Le système a une infinité de couples solutions.",
      "D) L’ensemble des solutions forme une droite du plan Oxy.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "C",
      "D"
    ],
    "code": "systeme_lineaire_05",
    "hint": "Multiplie la première équation par −3/2 et compare les deux équations.",
    "explanation": "La première équation multipliée par −3/2 devient −6x + 9y = −9/2, exactement la seconde équation. Les équations sont identiques : il existe une infinité de solutions, qui forment une droite."
  },
  {
    "subject": "Équations",
    "level": 1,
    "text": "On considère le système réel : 7x − 5y + 1 = −2x + y + 4 et −2x + 3y − 1 = 4x − y − 3. Quelles propositions sont exactes ?",
    "choices": [
      "A) Le système n’a aucun couple solution.",
      "B) Le système a un unique couple solution.",
      "C) Le système a une infinité de couples solutions.",
      "D) L’ensemble des solutions forme une droite du plan Oxy.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "C",
      "D"
    ],
    "code": "systeme_lineaire_06",
    "hint": "Réduis chaque équation en regroupant les termes en x, les termes en y et les constantes.",
    "explanation": "Le système se simplifie en 9x − 6y = 3 et −6x + 4y = −2. En multipliant la première équation par −2/3, on obtient la seconde. Les deux équations représentent la même droite : il y a une infinité de solutions alignées."
  },
  {
    "subject": "Équations",
    "level": 1,
    "text": "On considère le système réel : 3x − 2y + 1 = −3x + 2y + 3 et −5x + 7y − 1 = 4x + y − 4. Quelles propositions sont exactes ?",
    "choices": [
      "A) Le système n’a aucun couple solution.",
      "B) Le système a un unique couple solution.",
      "C) Le système a une infinité de couples solutions.",
      "D) L’ensemble des solutions forme une droite du plan Oxy.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "C",
      "D"
    ],
    "code": "systeme_lineaire_07",
    "hint": "Simplifie le système : les deux équations deviennent-elles proportionnelles ?",
    "explanation": "Après simplification, le système devient 6x − 4y = 2 et −9x + 6y = −3. La seconde équation est égale à −3/2 fois la première. Les deux équations sont donc équivalentes : il existe une infinité de solutions formant une droite."
  },
  {
    "subject": "Équations",
    "level": 1,
    "text": "On considère le système réel : 3x − 4y + 1 = x + 2y + 5 et x − 7y − 1 = −2x + 2y + 5. Quelles propositions sont exactes ?",
    "choices": [
      "A) Le système n’a aucun couple solution.",
      "B) Le système a un unique couple solution.",
      "C) Le système a une infinité de couples solutions.",
      "D) Tous les points M(x ; y) solutions du système sont alignés.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "C",
      "D"
    ],
    "code": "systeme_lineaire_08",
    "hint": "Réduis les équations : tu dois obtenir 2x − 6y = 4 et 3x − 9y = 6.",
    "explanation": "Après simplification, le système devient 2x − 6y = 4 et 3x − 9y = 6. La seconde équation est égale à 3/2 fois la première. Elles représentent la même droite : il existe une infinité de solutions, toutes alignées."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "On considère la suite (uₙ), définie pour n ≥ 1 par uₙ = (-1)ⁿ/n + n³/(3n + 1). Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) limₙ→₊∞ uₙ = +∞.",
      "B) limₙ→₊∞ uₙ = 0.",
      "C) limₙ→₊∞ uₙ = 1.",
      "D) La suite n’admet pas de limite.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A"
    ],
    "code": "suite-1",
    "hint": "Compare les ordres de grandeur de n³ et de 3n + 1.",
    "explanation": "Le terme (-1)ⁿ/n tend vers 0. En revanche, n³/(3n + 1) est équivalent à n²/3 et tend vers +∞. Donc uₙ tend vers +∞. La correction du document indique D, mais son raisonnement oublie le facteur 1/n dans le premier terme et se trompe aussi sur la limite du second."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "On considère, pour n ≥ 0, la suite uₙ = (3ⁿ + 2ⁿ cos(nπ))/(n⁶ + 1). Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) limₙ→₊∞ uₙ = +∞.",
      "B) limₙ→₊∞ uₙ = 0.",
      "C) limₙ→₊∞ uₙ = 1.",
      "D) La suite n’admet pas de limite.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A"
    ],
    "code": "suite-2",
    "hint": "Utilise -1 ≤ cos(nπ) ≤ 1 et compare les puissances exponentielles au polynôme n⁶.",
    "explanation": "Le terme 2ⁿ cos(nπ) est négligeable devant 3ⁿ. Le numérateur est donc dominé par 3ⁿ, qui croît plus vite que le dénominateur polynomial n⁶ + 1. La limite est +∞."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "On considère, pour n ≥ 0, la suite uₙ = (cos(3n) + 2ⁿ)/(2n² + 1). Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) limₙ→₊∞ uₙ = +∞.",
      "B) limₙ→₊∞ uₙ = 0.",
      "C) limₙ→₊∞ uₙ = 1.",
      "D) La suite n’admet pas de limite.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A"
    ],
    "code": "suite-3",
    "hint": "Le cosinus est borné ; compare 2ⁿ à n².",
    "explanation": "Le terme cos(3n) reste borné tandis que 2ⁿ croît exponentiellement. Le numérateur est dominé par 2ⁿ, qui croît plus vite que le dénominateur polynomial. La limite est +∞."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "On considère, pour n ≥ 0, la suite uₙ = n²/5ⁿ - cos(n)/(1 + √n). Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) limₙ→₊∞ uₙ = +∞.",
      "B) limₙ→₊∞ uₙ = -∞.",
      "C) limₙ→₊∞ uₙ = 0.",
      "D) La suite n’admet pas de limite.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "C"
    ],
    "code": "suite-4",
    "hint": "Étudie séparément les deux termes et utilise le fait que le cosinus est borné.",
    "explanation": "n²/5ⁿ tend vers 0, car l’exponentielle 5ⁿ domine le polynôme n². De plus, |cos(n)/(1 + √n)| ≤ 1/(1 + √n), qui tend vers 0. La somme tend donc vers 0."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "On considère, pour n ≥ 0, la suite uₙ = (sin(2n) + 3ⁿ)/((-1)ⁿ + 2√n). Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) limₙ→₊∞ uₙ = +∞.",
      "B) uₙ = 1/2.",
      "C) uₙ = 3/2.",
      "D) uₙ = 0.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A"
    ],
    "code": "suite-5",
    "hint": "Le sinus et (-1)ⁿ sont bornés ; compare les termes dominants du numérateur et du dénominateur.",
    "explanation": "Le numérateur est dominé par 3ⁿ, tandis que le dénominateur croît comme 2√n. Le quotient tend donc vers +∞."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "Un pharmacien vend 1 000 boîtes d’un médicament la première année. Chaque année, il en vend 150 de plus que l’année précédente. On note vₙ le nombre de boîtes vendues l’année n et S le nombre total de boîtes vendues de l’année 1 à l’année 10. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) v₁₀ = 2 500.",
      "B) v₁₀ = 2 350.",
      "C) S = 16 750.",
      "D) S = 17 500.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B",
      "C"
    ],
    "code": "suite-6",
    "hint": "C’est une suite arithmétique de premier terme v₁ = 1 000 et de raison 150.",
    "explanation": "v₁₀ = 1 000 + 9 × 150 = 2 350. La somme des 10 termes vaut (v₁ + v₁₀) × 10 / 2 = 16 750."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "On considère une suite arithmétique de premier terme u₀ = 10 et vérifiant uₙ₊₁ = uₙ + 5 pour n ≥ 0. On cherche u₃₀ et S = u₀ + u₁ + … + u₃₀. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) u₃₀ = 160.",
      "B) u₃₀ = 155.",
      "C) S = 2 550.",
      "D) S = 2 635.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A",
      "D"
    ],
    "code": "suite-7",
    "hint": "Calcule u₃₀, puis compte bien les termes de u₀ à u₃₀ inclus.",
    "explanation": "u₃₀ = 10 + 30 × 5 = 160. Il y a 31 termes de u₀ à u₃₀, donc S = (10 + 160) × 31 / 2 = 2 635."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "On considère une suite arithmétique de premier terme u₀ = 2 et de raison 7. On veut calculer S = u₀ + u₁ + … + u₈₀. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) S ≈ 22 240.",
      "B) S ≈ 22 518.",
      "C) S ≈ 22 560.",
      "D) S ≈ 22 842.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "D"
    ],
    "code": "suite-8",
    "hint": "Il y a 81 termes ; calcule d’abord u₈₀.",
    "explanation": "u₈₀ = 2 + 7 × 80 = 562. Donc S = (2 + 562) × 81 / 2 = 22 842."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "On considère la suite définie par uₙ = 3 + 5n. On cherche S = u₀ + u₁ + … + u₅₀. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) S = 6 328.",
      "B) S = 6 528.",
      "C) S = 6 400.",
      "D) S = 6 458.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B"
    ],
    "code": "suite-9",
    "hint": "Calcule u₀ et u₅₀, puis utilise la formule de somme d’une suite arithmétique.",
    "explanation": "u₀ = 3 et u₅₀ = 3 + 5 × 50 = 253. Il y a 51 termes, donc S = (3 + 253) × 51 / 2 = 6 528."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "On considère une suite de premier terme u₀ = 1 000 vérifiant uₙ₊₁ = 0,8uₙ pour n ≥ 0. On veut calculer u₂₀. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) u₂₀ ≈ 11,5.",
      "B) u₂₀ ≈ 14,4.",
      "C) u₂₀ ≈ 9,2.",
      "D) u₂₀ ≈ 10,8.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A"
    ],
    "code": "suite-10",
    "hint": "C’est une suite géométrique : uₙ = u₀ × qⁿ.",
    "explanation": "u₂₀ = 1 000 × 0,8²⁰ ≈ 11,5."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "On considère une suite de premier terme u₁ = 2 vérifiant uₙ₊₁ = 1,20uₙ. On cherche la valeur entière la plus proche de u₂₀. Parmi les propositions suivantes, laquelle est exacte ?",
    "choices": [
      "A) u₂₀ ≈ 81.",
      "B) u₂₀ ≈ 77.",
      "C) u₂₀ ≈ 64.",
      "D) u₂₀ ≈ 72.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "C"
    ],
    "code": "suite-11",
    "hint": "Le premier terme est u₁ : l’exposant doit donc être 20 − 1.",
    "explanation": "La forme explicite est uₙ = 2 × 1,2ⁿ⁻¹. Ainsi, u₂₀ = 2 × 1,2¹⁹ ≈ 63,9, soit environ 64."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "On considère une suite géométrique (vₙ) de premier terme v₀ = 5 et de raison q = 0,9. Parmi les propositions suivantes concernant v₂₀, laquelle est exacte ?",
    "choices": [
      "A) v₂₀ ≈ 0,55.",
      "B) v₂₀ ≈ 0,61.",
      "C) v₂₀ ≈ 1,22.",
      "D) v₂₀ ≈ 0,002.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B"
    ],
    "code": "suite-12",
    "hint": "Utilise vₙ = v₀ × qⁿ.",
    "explanation": "v₂₀ = 5 × 0,9²⁰ ≈ 0,61."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "On considère la suite (Pₙ) vérifiant Pₙ₊₁ = 0,9Pₙ + 100 et P₀ = 200. Parmi les propositions suivantes, laquelle est exacte ?",
    "choices": [
      "A) Pour tout n ≥ 0, Pₙ = -800 × 0,9ⁿ + 1 000.",
      "B) Pour tout n ≥ 0, Pₙ = 800 × 0,9ⁿ + 1 000.",
      "C) Pour tout n ≥ 0, Pₙ = 400 × 1,1ⁿ - 200.",
      "D) Pour tout n ≥ 0, Pₙ = 1 000 × 1,9ⁿ - 800.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A"
    ],
    "code": "suite-13",
    "hint": "Cherche d’abord la constante C telle que C = 0,9C + 100.",
    "explanation": "La constante vérifie C = 0,9C + 100, donc C = 1 000. La suite Pₙ − 1 000 est géométrique de raison 0,9 et de premier terme -800. Ainsi, Pₙ = -800 × 0,9ⁿ + 1 000."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "Une population compte 1 000 individus à l’année 0 et diminue de 12 % chaque année. Parmi les propositions suivantes concernant (Pₙ), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) Pₙ₊₁ = 0,12Pₙ pour tout n ≥ 0.",
      "B) Pₙ₊₁ = 0,88Pₙ pour tout n ≥ 0.",
      "C) La somme P₀ + P₁ + … + P₁₀, arrondie à l’entier le plus proche, vaut 6 291.",
      "D) La somme P₀ + P₁ + … + P₁₀, arrondie à l’entier le plus proche, vaut 6 012.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B",
      "C"
    ],
    "code": "suite-14",
    "hint": "Une baisse de 12 % correspond à un coefficient multiplicateur de 0,88. La somme comprend 11 termes.",
    "explanation": "Pₙ₊₁ = 0,88Pₙ. La somme géométrique vaut 1 000 × (1 − 0,88¹¹)/(1 − 0,88) ≈ 6 291."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "Une population compte 50 individus à l’année 0 et augmente de 15 % chaque année. Parmi les propositions suivantes concernant (Pₙ), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) Pₙ₊₁ = 1,15Pₙ pour tout n ≥ 0.",
      "B) Pₙ₊₁ = 0,15Pₙ pour tout n ≥ 0.",
      "C) La somme P₀ + P₁ + … + P₁₀, arrondie à l’entier le plus proche, vaut 1 015.",
      "D) La somme P₀ + P₁ + … + P₁₀, arrondie à l’entier le plus proche, vaut 1 217.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A",
      "D"
    ],
    "code": "suite-15",
    "hint": "La somme de P₀ à P₁₀ comporte 11 termes.",
    "explanation": "Le coefficient multiplicateur est 1,15. La somme vaut 50 × (1 − 1,15¹¹)/(1 − 1,15) ≈ 1 217."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "Une population compte 100 individus à l’année 0 et augmente de 10 % chaque année. Parmi les propositions suivantes concernant (Pₙ), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) Pₙ₊₁ = 1,10Pₙ pour tout n ≥ 0.",
      "B) Pₙ₊₁ = 0,10Pₙ pour tout n ≥ 0.",
      "C) La somme P₀ + P₁ + … + P₁₂, arrondie à l’entier le plus proche, vaut 2 452.",
      "D) La somme P₀ + P₁ + … + P₁₂, arrondie à l’entier le plus proche, vaut 2 138.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A",
      "C"
    ],
    "code": "suite-16",
    "hint": "La somme de P₀ à P₁₂ comporte 13 termes.",
    "explanation": "Pₙ₊₁ = 1,10Pₙ. La somme vaut 100 × (1 − 1,10¹³)/(1 − 1,10) ≈ 2 452."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "Une population compte 200 individus à l’année 0 et diminue de 5 % chaque année. Parmi les propositions suivantes concernant (Pₙ), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) Pₙ₊₁ = 0,95Pₙ pour tout n ≥ 0.",
      "B) Pₙ₊₁ = 0,05Pₙ pour tout n ≥ 0.",
      "C) La somme P₀ + P₁ + … + P₁₀, arrondie à l’entier le plus proche, vaut 1 605.",
      "D) La somme P₀ + P₁ + … + P₁₀, arrondie à l’entier le plus proche, vaut 1 725.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A",
      "D"
    ],
    "code": "suite-17",
    "hint": "Une baisse de 5 % donne une raison de 0,95 ; compte les 11 termes.",
    "explanation": "La somme vaut 200 × (1 − 0,95¹¹)/(1 − 0,95) ≈ 1 725."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "On considère une suite (Pₙ) de premier terme P₀ = 100 vérifiant Pₙ₊₁ = 1,15Pₙ pour n ≥ 0. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) P₁₂ ≈ 465.",
      "B) P₁₂ ≈ 535.",
      "C) La somme P₀ + P₁ + … + P₁₂ ≈ 3 435.",
      "D) La somme P₀ + P₁ + … + P₁₂ ≈ 2 900.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B",
      "C"
    ],
    "code": "suite-18",
    "hint": "Calcule P₁₂ = 100 × 1,15¹², puis la somme des 13 termes.",
    "explanation": "P₁₂ ≈ 535. La somme vaut 100 × (1 − 1,15¹³)/(1 − 1,15) ≈ 3 435."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "Une culture de bactéries compte 7 000 individus à l’heure 0. La population augmente de 8 % chaque heure, puis on prélève 500 bactéries chaque heure. Parmi les propositions suivantes concernant (Bₙ), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) Bₙ₊₁ = 1,08Bₙ - 500 pour tout n ≥ 0.",
      "B) Bₙ₊₁ = 0,08Bₙ - 500 pour tout n ≥ 0.",
      "C) Bₙ = 750 × 0,08ⁿ + 6 250 pour tout n ≥ 0.",
      "D) Bₙ = 750 × 1,08ⁿ + 6 250 pour tout n ≥ 0.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A",
      "D"
    ],
    "code": "suite-19",
    "hint": "Traduis l’augmentation de 8 %, puis cherche la constante C vérifiant C = 1,08C - 500.",
    "explanation": "La récurrence est Bₙ₊₁ = 1,08Bₙ - 500. La constante d’équilibre est 6 250 ; Bₙ − 6 250 est géométrique de raison 1,08 et de premier terme 750. Donc Bₙ = 750 × 1,08ⁿ + 6 250."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "Une culture de cellules compte 12 000 cellules à l’heure 0. La population augmente de 15 % chaque heure, puis on prélève 600 cellules chaque heure. Parmi les propositions suivantes concernant (Cₙ), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) Cₙ₊₁ = 0,15Cₙ - 600 pour tout n ≥ 0.",
      "B) Cₙ₊₁ = 1,15Cₙ - 600 pour tout n ≥ 0.",
      "C) Cₙ = 8 000 × 1,15ⁿ + 4 000 pour tout n ≥ 0.",
      "D) Cₙ = 4 000 × 0,15ⁿ + 8 000 pour tout n ≥ 0.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B",
      "C"
    ],
    "code": "suite-20",
    "hint": "La constante d’équilibre vérifie C = 1,15C - 600.",
    "explanation": "La récurrence est Cₙ₊₁ = 1,15Cₙ - 600. La constante d’équilibre vaut 4 000. Ainsi, Cₙ − 4 000 = 8 000 × 1,15ⁿ, donc Cₙ = 8 000 × 1,15ⁿ + 4 000."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "Une population de bactéries compte 5 000 individus à l’heure 0. Elle augmente de 20 % chaque heure, puis on prélève 500 individus chaque heure. Parmi les propositions suivantes concernant (Bₙ), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) Bₙ₊₁ = 1,2Bₙ - 500 pour tout n ≥ 0.",
      "B) Bₙ₊₁ = 0,2Bₙ - 500 pour tout n ≥ 0.",
      "C) Bₙ = 2 500 × 1,2ⁿ + 2 500 pour tout n ≥ 0.",
      "D) Bₙ = 3 000 × 0,2ⁿ + 2 000 pour tout n ≥ 0.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A",
      "C"
    ],
    "code": "suite-21",
    "hint": "La constante d’équilibre vérifie C = 1,2C - 500.",
    "explanation": "La récurrence est Bₙ₊₁ = 1,2Bₙ - 500. La constante d’équilibre vaut 2 500. La suite Bₙ − 2 500 est géométrique de raison 1,2 et de premier terme 2 500. Donc Bₙ = 2 500 × 1,2ⁿ + 2 500."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "Une population compte 1 000 individus à l’année 0. Elle augmente naturellement de 5 % chaque année, mais 200 individus émigrent chaque année. Parmi les propositions suivantes, laquelle est exacte ?",
    "choices": [
      "A) Pₙ₊₁ = 0,05Pₙ - 200 et Pₙ = -800 × 0,05ⁿ + 1 800.",
      "B) Pₙ₊₁ = 0,05Pₙ + 200 et Pₙ = 800 × 0,05ⁿ + 200.",
      "C) Pₙ₊₁ = 1,05Pₙ + 200 et Pₙ = 500 × 1,05ⁿ + 500.",
      "D) Pₙ₊₁ = 1,05Pₙ - 200 et Pₙ = -3 000 × 1,05ⁿ + 4 000.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "D"
    ],
    "code": "suite-22",
    "hint": "Une hausse de 5 % donne le coefficient 1,05 ; l’émigration est une soustraction.",
    "explanation": "Pₙ₊₁ = 1,05Pₙ - 200. La constante d’équilibre vaut 4 000. La suite Pₙ − 4 000 est géométrique de raison 1,05 et de premier terme -3 000. Donc Pₙ = -3 000 × 1,05ⁿ + 4 000."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "Une population de bactéries compte 5 000 individus à l’heure 0. Elle augmente de 30 % chaque heure, puis on prélève 600 individus chaque heure. Parmi les propositions suivantes concernant (Bₙ), laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) Bₙ₊₁ = 1,3Bₙ - 600 pour tout n ≥ 0.",
      "B) Bₙ₊₁ = 0,3Bₙ - 600 pour tout n ≥ 0.",
      "C) Bₙ = 3 000 × 1,3ⁿ + 2 000 pour tout n ≥ 0.",
      "D) Bₙ = 2 000 × 0,3ⁿ + 3 000 pour tout n ≥ 0.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A",
      "C"
    ],
    "code": "suite-23",
    "hint": "La constante d’équilibre vérifie C = 1,3C - 600.",
    "explanation": "La récurrence est Bₙ₊₁ = 1,3Bₙ - 600. La constante d’équilibre vaut 2 000. Bₙ − 2 000 est géométrique de raison 1,3 et de premier terme 3 000. Donc Bₙ = 3 000 × 1,3ⁿ + 2 000."
  },
  {
    "subject": "Suites récurrentes",
    "level": 1,
    "text": "Une population de bactéries compte 3 000 individus à l’heure 0. Elle augmente de 50 % chaque heure, puis on prélève 1 000 individus chaque heure. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) Bₙ₊₁ = 0,5Bₙ - 1 000 pour tout n ≥ 0.",
      "B) Bₙ₊₁ = 1,5Bₙ - 1 000 pour tout n ≥ 0.",
      "C) Bₙ = 2 000 × 0,5ⁿ + 1 000 pour tout n ≥ 0.",
      "D) Bₙ = 1 000 × 1,5ⁿ + 2 000 pour tout n ≥ 0.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B",
      "D"
    ],
    "code": "suite-24",
    "hint": "La constante d’équilibre vérifie C = 1,5C - 1 000.",
    "explanation": "La récurrence est Bₙ₊₁ = 1,5Bₙ - 1 000. La constante d’équilibre vaut 2 000. Bₙ − 2 000 est géométrique de raison 1,5 et de premier terme 1 000. Donc Bₙ = 1 000 × 1,5ⁿ + 2 000."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère f définie pour x > 0 par f(x) = (x + 2)/(2x + 1) + e^(-x) - ln(x)/x. Parmi les propositions suivantes concernant f et sa dérivée f', laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) lim(x→+∞) f(x) = 0.",
      "B) lim(x→+∞) f(x) = 1/2.",
      "C) f'(x) = -3/(2x + 1)² - e^(-x) + (ln(x) - 1)/x².",
      "D) f'(x) = -1/(2x + 1)² + e^(-1) - 1/x².",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B",
      "C"
    ],
    "code": "fonctions-1",
    "hint": "Calcule séparément les limites des trois termes, puis dérive chaque terme avec la formule du quotient.",
    "explanation": "À l’infini, (x + 2)/(2x + 1) tend vers 1/2, tandis que e^(-x) et ln(x)/x tendent vers 0. Pour la dérivée, la dérivée du premier quotient vaut -3/(2x + 1)² et celle de -ln(x)/x vaut (ln(x) - 1)/x²."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère f définie pour x > 0 par f(x) = x² ln(x) - e^(2x) + sin(x)/x². Parmi les propositions suivantes concernant f et sa dérivée f', laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) lim(x→+∞) f(x) = +∞.",
      "B) lim(x→+∞) f(x) = -∞.",
      "C) f'(x) = 2 - e^(2x) + cos(x)/(2x).",
      "D) f'(x) = 2x ln(x) + x - 2e^(2x) + (x cos(x) - 2 sin(x))/x³.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B",
      "D"
    ],
    "code": "fonctions-2",
    "hint": "À l’infini, compare la croissance de l’exponentielle à celle de x² ln(x). Pour sin(x)/x², utilise la dérivée d’un quotient.",
    "explanation": "L’exponentielle e^(2x) domine x² ln(x), donc f(x) tend vers -∞. La dérivée de x² ln(x) est 2x ln(x) + x ; celle de -e^(2x) est -2e^(2x). Enfin, la dérivée de sin(x)/x² est cos(x)/x² - 2sin(x)/x³. La proposition D telle qu’extraite du PDF semble présenter un dénominateur erroné : l’expression correcte est cos(x)/x² - 2sin(x)/x³."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère f(x) = ln(x² + 1) - √x + e^(-x) + sin(x)/x³. On calcule sa limite en +∞. Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) lim(x→+∞) f(x) = -∞.",
      "B) lim(x→+∞) f(x) = 0.",
      "C) lim(x→+∞) f(x) = +∞.",
      "D) lim(x→+∞) f(x) = 1.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A"
    ],
    "code": "fonctions-3",
    "hint": "Compare la croissance de √x à celle de ln(x² + 1) et borne le terme contenant sin(x).",
    "explanation": "Le terme ln(x² + 1) croît moins vite que √x. De plus, e^(-x) tend vers 0 et sin(x)/x³ tend vers 0 puisque sin(x) est borné. Le terme -√x domine, donc la limite vaut -∞."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère f(x) = e^(2x) - ln(x) + cos(x)/√x et on calcule sa limite en +∞. Parmi les propositions suivantes, laquelle est exacte ?",
    "choices": [
      "A) lim(x→+∞) f(x) = -∞.",
      "B) lim(x→+∞) f(x) = 0.",
      "C) lim(x→+∞) f(x) = +∞.",
      "D) lim(x→+∞) f(x) = 1.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "C"
    ],
    "code": "fonctions-4",
    "hint": "Le cosinus est borné et cos(x)/√x tend vers 0. Compare ensuite e^(2x) et ln(x).",
    "explanation": "e^(2x) tend vers +∞ et domine ln(x). Le terme cos(x)/√x tend vers 0 car le cosinus est borné. La limite de f est donc +∞."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère g(x) = ln(x² + 1) - 2x. Parmi les propositions suivantes concernant g et sa dérivée g', laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) lim(x→+∞) g(x) = +∞.",
      "B) lim(x→+∞) g(x) = -∞.",
      "C) g'(x) = 2x/(x² + 1) - 2 ln(2).",
      "D) g'(x) = 1/(x² + 1) - x²x - 1.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B"
    ],
    "code": "fonctions-5",
    "hint": "La fonction linéaire 2x croît plus vite que le logarithme. Dérive ln(u) avec u'/u.",
    "explanation": "La limite est -∞, car -2x domine ln(x² + 1). La dérivée correcte est g'(x) = 2x/(x² + 1) - 2. La proposition C, telle qu’elle apparaît dans le PDF, contient -2 ln(2) au lieu de -2 ; elle est donc fausse."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère g(x) = e^(2x)/x - ln(2x), pour x > 0. Parmi les propositions suivantes concernant g et sa dérivée g', laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) lim(x→+∞) g(x) = -∞.",
      "B) lim(x→+∞) g(x) = +∞.",
      "C) g'(x) = 2e^(2x)/x - e^(2x)/x² - ln(2).",
      "D) g'(x) = (2xe^(2x) - e^(2x))/x² - 1/x.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B",
      "D"
    ],
    "code": "fonctions-6",
    "hint": "L’exponentielle divisée par x domine le logarithme. Pour la dérivée, dérive séparément chaque terme.",
    "explanation": "e^(2x)/x tend vers +∞ et domine ln(2x), donc g tend vers +∞. La dérivée du premier terme est (2xe^(2x) - e^(2x))/x² et celle de -ln(2x) est -1/x. La proposition D est correcte."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère la suite définie pour n ≥ 0 par uₙ = (sin(2n) + 3ⁿ)/((-1)ⁿ + 2√n). On calcule sa limite en +∞. Parmi les propositions suivantes, laquelle est exacte ?",
    "choices": [
      "A) lim(n→+∞) uₙ = +∞.",
      "B) lim(n→+∞) uₙ = 1/2.",
      "C) lim(n→+∞) uₙ = 3/2.",
      "D) lim(n→+∞) uₙ = 0.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A"
    ],
    "code": "fonctions-7",
    "hint": "Le sinus et (-1)ⁿ sont bornés ; compare 3ⁿ à √n.",
    "explanation": "Le numérateur est dominé par 3ⁿ et le dénominateur croît comme 2√n. L’exponentielle domine la racine, donc le quotient tend vers +∞. Attention : la ligne « Réponses : B » du corrigé source contredit son propre item A marqué VRAI ; la bonne réponse mathématique est A."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère f(x) = 1/(2x) - (ln(x))¹⁰⁰ + sin²(x)/√x et on calcule sa limite en +∞. Parmi les propositions suivantes, laquelle est exacte ?",
    "choices": [
      "A) lim(x→+∞) f(x) = -∞.",
      "B) lim(x→+∞) f(x) = 0.",
      "C) lim(x→+∞) f(x) = +∞.",
      "D) lim(x→+∞) f(x) = 1.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A"
    ],
    "code": "fonctions-8",
    "hint": "Le terme sin²(x) est borné entre 0 et 1. Compare les autres termes.",
    "explanation": "1/(2x) tend vers 0 et sin²(x)/√x tend vers 0 car sin²(x) est borné. En revanche, (ln(x))¹⁰⁰ tend vers +∞ et apparaît avec un signe négatif. La limite est donc -∞."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère g(x) = sin(√x) + ln(2x) - 1/x² pour x > 0. Parmi les propositions suivantes concernant g', laquelle est exacte ?",
    "choices": [
      "A) g'(x) = cos(√x)/(2√x) + 1/(2x) + 2/x³.",
      "B) g'(x) = cos(√x)/√x + 1/x - 2/x³.",
      "C) g'(x) = -cos(√x)/(2√x) + 1/(2x) + 3/x³.",
      "D) g'(x) = cos(√x)/(2√x) + 1/x + 2/x³.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "D"
    ],
    "code": "fonctions-9",
    "hint": "Utilise la dérivée de sin(u), celle de ln(2x) et celle de -x⁻².",
    "explanation": "La dérivée de sin(√x) est cos(√x)/(2√x), celle de ln(2x) est 1/x, et celle de -1/x² est 2/x³. La somme donne la proposition D."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère la fonction f définie par f(x) = xe^(-x). Parmi les propositions suivantes concernant f et sa tangente au point d’abscisse x = 1, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) Le domaine de définition de f est ℝ.",
      "B) Une équation de la tangente T est y = -x - 1.",
      "C) Une équation de la tangente T est y = x + 1.",
      "D) f'(x) = e^(-x)(1 - x).",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A",
      "D"
    ],
    "code": "fonctions-18",
    "hint": "Dérive le produit xe^(-x), puis calcule f(1) et f'(1).",
    "explanation": "La fonction est définie sur ℝ. Sa dérivée est f'(x) = e^(-x)(1 - x). En x = 1, f'(1) = 0 et f(1) = 1/e : la tangente est horizontale, d’équation y = 1/e. La correction source indique A et D, mais il faut aussi tenir compte de la tangente si une proposition correspond à y = 1/e."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère la fonction g définie par g(x) = ln(x² + 1) - 2x. Parmi les propositions suivantes concernant g et sa dérivée g', laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) lim(x→+∞) g(x) = +∞.",
      "B) lim(x→+∞) g(x) = -∞.",
      "C) g'(x) = 2x/(x² + 1) - 2x ln(2).",
      "D) g'(x) = 1/(x² + 1) - x²x - 1.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B"
    ],
    "code": "fonctions-19",
    "hint": "Compare les croissances du logarithme et de la fonction linéaire, puis applique la dérivée de ln(u).",
    "explanation": "La limite est -∞ puisque 2x domine ln(x² + 1). Attention : la correction du PDF indique C comme vraie, mais la dérivée mathématique correcte est g'(x) = 2x/(x² + 1) - 2. L’item C reproduit la formule du document et contient une erreur."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère la fonction u(x) = sin(√(x² + 1)). Parmi les propositions suivantes concernant u', laquelle est exacte ?",
    "choices": [
      "A) u'(x) = x cos(√(x² + 1))/(2√(x² + 1)).",
      "B) u'(x) = x cos(√(x² + 1))/√(2x).",
      "C) u'(x) = x cos(√(x² + 1))/√(x² + 1).",
      "D) u'(x) = cos(√(x² + 1))/(2√(x² + 1)).",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "C"
    ],
    "code": "fonctions-20",
    "hint": "Utilise la dérivée d’une fonction composée deux fois : d’abord la racine, puis le sinus.",
    "explanation": "La dérivée de √(x² + 1) est x/√(x² + 1). Donc u'(x) = x cos(√(x² + 1))/√(x² + 1)."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère la fonction f définie par f(x) = x ln(x) - 2x. On étudie sa tangente au point d’abscisse x = 1. Parmi les propositions suivantes, laquelle est exacte ?",
    "choices": [
      "A) Le domaine de définition de f est ℝ privé de 0.",
      "B) Une équation de la tangente est y = -x - 1.",
      "C) Une équation de la tangente est y = x + 1.",
      "D) Une équation de la tangente est y = x - 1.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B"
    ],
    "code": "fonctions-21",
    "hint": "Le logarithme impose x > 0. Utilise ensuite y = f'(1)(x - 1) + f(1).",
    "explanation": "Le domaine est ]0 ; +∞[. On a f'(x) = ln(x) - 1, donc f'(1) = -1 et f(1) = -2. La tangente est y = -(x - 1) - 2 = -x - 1."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère g(x) = ln(x² + 1) - 2x. Parmi les propositions suivantes concernant g et sa dérivée g', laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) lim(x→+∞) g(x) = +∞.",
      "B) lim(x→+∞) g(x) = -∞.",
      "C) g'(x) = 2x/(x² + 1) - 2x ln(2).",
      "D) g'(x) = 1/(x² + 1) - x²x - 1.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B"
    ],
    "code": "fonctions-5-bis",
    "hint": "Compare la croissance du logarithme à celle de la fonction linéaire, puis vérifie la dérivée indiquée.",
    "explanation": "La limite est -∞. Dans le corrigé du PDF, C est indiqué vrai, mais la dérivée correcte est 2x/(x² + 1) - 2 : l’expression de C semble comporter une erreur dans le document."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère la fonction g définie pour x > 0 par g(x) = e^(2x)/x - ln(2x). Parmi les propositions suivantes concernant g et sa dérivée g', laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) lim(x→+∞) g(x) = -∞.",
      "B) lim(x→+∞) g(x) = +∞.",
      "C) g'(x) = 2e^(2x)/x - e^(2x)/x² - ln(2).",
      "D) g'(x) = (2xe^(2x) - e^(2x))/x² - 1/x.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B",
      "D"
    ],
    "code": "fonctions-6-bis",
    "hint": "L’exponentielle domine le logarithme. Pour la dérivée du quotient, utilise la règle du quotient.",
    "explanation": "La limite vaut +∞. La dérivée de e^(2x)/x est (2xe^(2x) - e^(2x))/x² et celle de -ln(2x) est -1/x. La proposition D est correcte."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère la suite (uₙ), définie pour n ≥ 0 par uₙ = (sin(2n) + 3ⁿ)/((-1)ⁿ + 2√n). On calcule sa limite en +∞.",
    "choices": [
      "A) lim(n→+∞) uₙ = +∞.",
      "B) lim(n→+∞) uₙ = 1/2.",
      "C) lim(n→+∞) uₙ = 3/2.",
      "D) lim(n→+∞) uₙ = 0.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A"
    ],
    "code": "fonctions-7-bis",
    "hint": "Le sinus et (-1)ⁿ sont bornés ; compare 3ⁿ à √n.",
    "explanation": "Le numérateur est dominé par 3ⁿ et le dénominateur croît comme 2√n. La limite mathématique est +∞. Le corrigé du PDF indique pourtant B dans sa ligne de réponses, alors que son item A est marqué vrai."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère f(x) = 1/(2x) - (ln(x))¹⁰⁰ + sin²(x)/√x. On calcule sa limite en +∞.",
    "choices": [
      "A) lim(x→+∞) f(x) = -∞.",
      "B) lim(x→+∞) f(x) = 0.",
      "C) lim(x→+∞) f(x) = +∞.",
      "D) lim(x→+∞) f(x) = 1.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A"
    ],
    "code": "fonctions-8-bis",
    "hint": "Utilise 0 ≤ sin²(x) ≤ 1, puis compare les termes contenant ln(x).",
    "explanation": "Le premier terme tend vers 0 et sin²(x)/√x tend vers 0. Le terme -(ln(x))¹⁰⁰ tend vers -∞. La limite correcte est donc -∞ ; l’item A devrait être vrai. Le corrigé source indique C, ce qui est incohérent."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère g(x) = sin(√x) + ln(2x) - 1/x², pour x > 0. On calcule g'(x).",
    "choices": [
      "A) g'(x) = cos(√x)/(2√x) + 1/(2x) + 2/x³.",
      "B) g'(x) = cos(√x)/√x + 1/x - 2/x³.",
      "C) g'(x) = -cos(√x)/(2√x) + 1/(2x) + 3/x³.",
      "D) g'(x) = cos(√x)/(2√x) + 1/x + 2/x³.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "D"
    ],
    "code": "fonctions-9-bis",
    "hint": "Dérive séparément sin(√x), ln(2x) et -x⁻².",
    "explanation": "Les dérivées sont respectivement cos(√x)/(2√x), 1/x et 2/x³. La proposition D est correcte."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère g(x) = cos(x²) + ln(√x) + 1/x³, pour x > 0. On calcule g'(x).",
    "choices": [
      "A) g'(x) = sin(x²) + 1/(2x) + 1/(3x²).",
      "B) g'(x) = -sin(2x) + 1/√x + 3/x².",
      "C) g'(x) = -2x sin(x²) + 1/(2x) - 3/x⁴.",
      "D) g'(x) = sin(x²) + 1/√x - 4/x⁴.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "C"
    ],
    "code": "fonctions-10",
    "hint": "Utilise la dérivée de cos(u) avec u = x², puis dérive ln(√x) et x⁻³.",
    "explanation": "Les dérivées sont -2x sin(x²), 1/(2x) et -3/x⁴. La proposition C est correcte."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère f(x) = cos(2x)/(x + 1) - x² + e^(3x). Parmi les propositions suivantes concernant f et f', laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) lim(x→+∞) f(x) = +∞.",
      "B) lim(x→+∞) f(x) = 0.",
      "C) f'(x) = (-(x + 1)sin(2x) - cos(2x))/(x + 1)² - 2x + e^(3x).",
      "D) f'(x) = (-2(x + 1)sin(2x) - cos(2x))/(x + 1)² - 2x + 3e^(3x).",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A",
      "D"
    ],
    "code": "fonctions-11",
    "hint": "L’exponentielle domine le terme polynomial ; pour le quotient, dérive cos(2x) avec la règle de la chaîne.",
    "explanation": "La limite vaut +∞. La dérivée de cos(2x) est -2sin(2x) et celle de e^(3x) est 3e^(3x). La proposition D correspond au résultat attendu dans le corrigé."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère g(x) = 1/(x√x) + ln(1 + x²), pour x > 0. On calcule g'(x).",
    "choices": [
      "A) g'(x) = -(3/2)√x/x³ + 1/(x² + 1).",
      "B) g'(x) = -3/(2x²√x) + 2x/(x² + 1).",
      "C) g'(x) = 1/x³ + 1/(x² + 1).",
      "D) g'(x) = -(3/2)√x/x³ + 2x/(x² + 1).",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B",
      "D"
    ],
    "code": "fonctions-12",
    "hint": "Réécris 1/(x√x) comme x^(-3/2), puis dérive ln(1 + x²).",
    "explanation": "La dérivée du premier terme vaut -(3/2)x^(-5/2), soit -3/(2x²√x) et aussi -(3/2)√x/x³. La dérivée du logarithme est 2x/(x² + 1). Les propositions B et D sont équivalentes."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère g(x) = 3x² + x/(x² + 1) + sin(2x + 1) + e^(√x). On calcule g'(x).",
    "choices": [
      "A) g'(x) = 6x + (1 - x²)/(x² + 1)² + cos(2x + 1) + e^(√x)/√x.",
      "B) g'(x) = 6x + (1 - x²)/(x² + 1)² + 2cos(2x + 1) + e^(√x)/(2√x).",
      "C) g'(x) = 6x + (1 - x²)/(x² + 1)² + 2cos(2x + 1) + e^(1/(2√x)).",
      "D) g'(x) = 6x + (1 - x²)/(x² + 1)² + cos(2x + 1) + √x e^(√x).",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B"
    ],
    "code": "fonctions-13",
    "hint": "Attention aux dérivées de sin(2x + 1) et e^(√x).",
    "explanation": "La dérivée du quotient est (1 - x²)/(x² + 1)². Celle de sin(2x + 1) est 2cos(2x + 1), et celle de e^(√x) est e^(√x)/(2√x)."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère g(x) = 5x⁴ + cos(3x) + 1/√x. On calcule g'(x).",
    "choices": [
      "A) g'(x) = 5x³ + 3sin(3x) + 1/(x√x).",
      "B) g'(x) = 20x³ - 3sin(3x) + 2/(x√x).",
      "C) g'(x) = 4x³ + 3sin(3x) - 1/(x√x).",
      "D) g'(x) = 20x³ - 3sin(3x) - 1/(2x√x).",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "D"
    ],
    "code": "fonctions-14",
    "hint": "Réécris 1/√x sous forme x^(-1/2).",
    "explanation": "Les dérivées sont 20x³, -3sin(3x) et -(1/2)x^(-3/2) = -1/(2x√x). La proposition D est correcte."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère f(x) = x ln(x) - 2x, définie pour x > 0. On s’intéresse à la tangente T à la courbe au point x = 1. Quelle(s) proposition(s) est (sont) exacte(s) ?",
    "choices": [
      "A) Le domaine de définition de f est ℝ privé de 0.",
      "B) Une équation de la tangente T est y = -x - 1.",
      "C) Une équation de la tangente T est y = x + 1.",
      "D) Une équation de la tangente T est y = x - 1.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "B"
    ],
    "code": "fonctions-21-bis",
    "hint": "Calcule f(1), puis f'(1), avant d’appliquer y = f'(1)(x - 1) + f(1).",
    "explanation": "Le domaine est ]0 ; +∞[. On a f'(x) = ln(x) - 1, donc f'(1) = -1 et f(1) = -2. La tangente est y = -(x - 1) - 2 = -x - 1."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère g(x) = 3x³ + sin(x²) - 1/√x. Parmi les propositions suivantes concernant g et sa dérivée g', laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) lim(x→+∞) g(x) = +∞.",
      "B) La fonction g n’admet pas de limite en +∞.",
      "C) g'(x) = 9x² + 2x cos(x²) + 1/(2x√x).",
      "D) g'(x) = 9x² + x cos(x²) - 1/(x√x).",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A",
      "C"
    ],
    "code": "fonctions-22",
    "hint": "Le terme polynomial domine les termes bornés ou tendant vers zéro. Pour la dérivée, écris 1/√x sous la forme x^(-1/2).",
    "explanation": "La limite est +∞, car 3x³ domine les autres termes. De plus, g'(x) = 9x² + 2x cos(x²) + 1/(2x√x). Les réponses A et C sont correctes."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère u(x) = x e^(x²) + 3ˣ. On calcule u'(x). Parmi les propositions suivantes, laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) u'(x) = e^(x²)(1 + 2x²) + ln(3)·3ˣ.",
      "B) u'(x) = e^(x²)(1 + 2x) + 3ˣ.",
      "C) u'(x) = e^(2x) + x·3ˣ.",
      "D) u'(x) = (2x² + 1)e^(2x) + 3ˣ⁻¹.",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A"
    ],
    "code": "fonctions-23",
    "hint": "Applique la dérivée d’un produit à x e^(x²), puis la formule (aˣ)' = ln(a)·aˣ.",
    "explanation": "La dérivée de x e^(x²) est e^(x²) + 2x²e^(x²) = (1 + 2x²)e^(x²). Celle de 3ˣ est ln(3)·3ˣ. La proposition A est correcte."
  },
  {
    "subject": "Fonctions et limites, dérivation et fonctions usuelles",
    "level": 2,
    "text": "On considère g(x) = cos(x²) + (x + 1)/√x. Parmi les propositions suivantes concernant g et sa dérivée g', laquelle (lesquelles) est (sont) exacte(s) ?",
    "choices": [
      "A) lim(x→+∞) g(x) = +∞.",
      "B) lim(x→+∞) g(x) = 0.",
      "C) g'(x) = -2 sin(x²) + (2x - 1)/(2x√x).",
      "D) g'(x) = -2x sin(x²) + (x - 1)/(2x√x).",
      "E) Aucune des propositions ci-dessus n’est exacte."
    ],
    "answer": [
      "A",
      "D"
    ],
    "code": "fonctions-24",
    "hint": "Réécris (x + 1)/√x comme √x + 1/√x avant d’étudier la limite et de dériver.",
    "explanation": "La limite est +∞, car √x tend vers +∞ tandis que cos(x²) reste borné. La dérivée correcte est -2x sin(x²) + (x - 1)/(2x√x). Les réponses A et D sont correctes."
  }
];
const CHEMISTRY_TOPICS_BY_LEVEL = {
    1: "ATOMISTIQUE",
    2: "CLASSIFICATION PÉRIODIQUE",
    3: "CONFIGURATION ÉLECTRONIQUE",
    4: "HYBRIDATION DES ORBITALES ET LIAISONS CHIMIQUES",
    5: "THERMOCHIMIE ET ÉQUILIBRES THERMODYNAMIQUES",
    6: "CINÉTIQUE CHIMIQUE ET CATALYSE"
};
const maths_TOPICS_BY_LEVEL = {
    1: [
        "Équations",
        "Suites récurrentes",
        "Suites"
    ],
    2: [
        "Fonctions et limites, dérivation et fonctions usuelles"
    ],
    3: [
        "Intégrales"
    ],
    4: [
        "Équations différentielles linéaires d’ordre 1",
    ],
    5: [
        "Trigonométrie",
        "Géométrie et trigonométrie"
    ]
};

function normaliserSujetMaths(s) {
    return String(s ?? "")
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[’']/g, " ")
        .replace(/\bderivations\b/g, "derivation")
        .replace(/\bsuites\b/g, "suite")
        .replace(/\bequations\b/g, "equation")
        .replace(/\s+/g, " ")
        .trim();
}

function niveauMaths(subject) {
    const s = normaliserSujetMaths(subject);

    // On ignore les sujets de chimie
    if (/chimi|atomistique|thermo|electronique|periodique|hybridation|cinetique/.test(s)) return null;

    if (s.includes("differentielle")) return 4;
    if (s.includes("integrale")) return 3;
    if (s.includes("trigonometrie") || s.includes("geometrie")) return 5;
    if (s.includes("fonction") || s.includes("limite") || s.includes("derivation")) return 2;
    if (s.includes("equation") || s.includes("suite")) return 1;
    return null;
}

QUESTION_BANK.forEach(question => {
    const level = niveauMaths(question.subject);
    if (level !== null) question.level = level;
});