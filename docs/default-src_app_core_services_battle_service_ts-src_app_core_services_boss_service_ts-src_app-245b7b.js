"use strict";
(self["webpackChunkteitingquest"] = self["webpackChunkteitingquest"] || []).push([["default-src_app_core_services_battle_service_ts-src_app_core_services_boss_service_ts-src_app-245b7b"],{

/***/ 7317:
/*!***********************************************************!*\
  !*** ./src/app/components/questlog/quest-pool.factory.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createQuestPool: () => (/* binding */ createQuestPool)
/* harmony export */ });
function createQuestPool() {
  const now = new Date();
  return [{
    id: 'tutorial',
    title: 'Es ist noch kein Meister vom Himmel gefallen',
    description: `Du bekommst Informationen über das Event, die dazugehörigen Regeln und die App. Außerdem erhältst du ein Triple Triad Starter Deck. Somit steht deinem großen Abenteuer nichts mehr im Wege.`,
    type: 'main',
    status: 'open',
    acquired: true,
    rewardXp: 25,
    rewardMoney: 5,
    // rewardItems:
    // - Triple Triad Starter Deck
    rewardItems: [],
    createdAt: now
  }, {
    id: 'ff-quiz-kaktor',
    title: 'Der glücklichste Ort auf Erden',
    description: `Ein aufgeregter Kaktor ist außer Rand und Band und beschießt alle, die ihm zu nahe kommen mit seinen spitzen Nadeln. Du musst diesem Treiben ein Ende setzen. Er läuft flink umher doch nach einiger Zeit bist du in der Lage ihn zu stellen. Ob sich diese Entscheidung jedoch als weise herausstellt wird sich noch zeigen.`,
    type: 'main',
    status: 'open',
    acquired: true,
    rewardXp: 400,
    rewardMoney: 25,
    // rewardItems:
    // - Zufällige A-Karte (Triple Triad)
    // - Gold Saucer Eintrittskarte
    //   (Chocobo-Rennen, Dosenschießen, Pokerturnier, Sackwerfen, Fingerdarts, Ringwurf)
    rewardItems: [],
    createdAt: now
  }, {
    id: 'memory-warrior-light',
    title: 'Das Lied von Schatten und Licht',
    description: `Dir tritt die Inkarnation des Kriegers des Lichts entgegen. Fest entschlossen verurteilt er dich die wahre Inkarnation des Bösen zu sein, der Krieger der Dunkelheit. Er hat bei seiner Ehre geschworen alles dafür zu geben um deinem finsteren Treiben ein Ende zu setzen. Eine epische Schlacht zwischen Licht und Finsternis entscheidet über das Schicksal dieser Welt.`,
    type: 'main',
    status: 'open',
    acquired: true,
    rewardXp: 400,
    rewardMoney: 25,
    // rewardItems:
    // - Zufällige A-Karte (Triple Triad)
    // - Ziehe 3 Karten und verteile Schlücke
    //   (Bilder und Asse = 10 Schlücke; Joker = 15 Schlücke)
    rewardItems: [],
    createdAt: now
  }, {
    id: 'mimikry-gogo',
    title: 'Tanz mit dem Teufel',
    description: `Ein Mann in seltsamen Kleidern versperrt dir wortlos den Weg. Niemand vermag mit Sicherheit zu sagen, wer oder gar was hinter dieser Maskerade steckt... Was hat er nur vor?`,
    type: 'main',
    status: 'open',
    acquired: true,
    rewardXp: 400,
    rewardMoney: 25,
    // rewardItems:
    // - Zufällige A-Karte (Triple Triad)
    // - Magic the Gathering Deck (Cloud)
    // - Schaltet die Nebenquest "Eine magische Zusammenkunft" frei
    rewardItems: [],
    followUpQuestIds: ['magic-roman'],
    // optionaler Verweis
    createdAt: now
  }, {
    id: 'music-siren',
    title: 'Sirens Jukebox des Todes',
    description: `Du nimmst einen wundervollen Klang in weiter Ferne wahr. Als du näher herantrittst ertönt eine Stimme in deinem Kopf. Die Stimme ersucht dich eine Beschwörungsformel aufzusagen, damit du ihn aus seiner Gefangenschaft befreien kannst. Du sprichst die Worte aus und ein wundersames Wesen mit Harfe und Flügeln manifestiert sich vor dir. Jedoch hat dieses Wesen seine wahren Absichten verschleiert, ehe du dich versiehst bist du in seinen Bann gezogen worden.`,
    type: 'main',
    status: 'open',
    acquired: true,
    rewardXp: 400,
    rewardMoney: 25,
    // rewardItems:
    // - Zufällige A-Karte (Triple Triad)
    rewardItems: [],
    createdAt: now
  }, {
    id: 'yojimbo-bribe',
    title: 'Die Höhle des Löwen',
    description: `Ein ehemaliger Soldat der Bürgerwehr wurde einst als Bestia wiedergeboren. Er hat die Gestalt eines großen Samurai angenommen, sein treuer Hund Daigoro steht ihm stets zur Seite. Deine lange Suche nach dem Samurai war von Erfolg gekrönt. Er wirkt zugleich neugierig und dennoch desinteressiert über deine Ankunft. Bist du in der Lage diesen legendären Krieger von deinem Unterfangen überzeugen zu können?`,
    type: 'main',
    status: 'open',
    acquired: true,
    rewardXp: 400,
    rewardMoney: 25,
    // rewardItems:
    // - Zufällige A-Karte (Triple Triad)
    // - Yojimbo kann ab sofort beschworen werden
    rewardItems: [],
    createdAt: now
  }, {
    id: 'alchemy-seymour',
    title: 'Der flüssige Tod',
    description: `„Suche nicht nach Erbarmen in mir, suche nicht nach Mitgefühl in mir. Ich bin nicht das gütige Kind dieses neuen Zeitalters. Ich bin der Fels auf dessen Fundament es ruht. Wenn du dich nach Hoffnung sehnst, schaue dir an was ich geschaffen habe. Perfektion in seiner wahren Form! Ich bin die einzige Hoffnung, die es gibt. Ich halte das Schicksal dieser Welt in meinen Händen.“`,
    type: 'main',
    status: 'open',
    acquired: true,
    rewardXp: 400,
    rewardMoney: 25,
    // rewardItems:
    // - Zufällige A-Karte (Triple Triad)
    // - Wahl zwischen 1x Potion / Stärke- / Geschicklichkeits- / Intelligenztrank
    rewardItems: [],
    createdAt: now
  }, {
    id: 'finale-tracking',
    title: 'Finale Junggesellen Fantasien',
    description: `Auf deiner Reise wirst du auf viele Gefahren und Hürden treffen. Sechs mächtige Feinde sind wie aus dem Nichts aufgetaucht und terrorisieren nun das Land. Es ist deine Bestimmung diese Bosse zu bezwingen, denn du bist der Auserwählte. Verzage nicht und sammle all deinen Mut. Die bevorstehenden Aufgaben erfordern deine ganze Stärke, Geschick, Intelligenz und auch Ausdauer. Du wirst mit jeder dir gestellten Prüfung wachsen und am Ende deiner Reise für deine Mühen entlohnt werden.`,
    type: 'main',
    status: 'open',
    acquired: true,
    // rewardItems:
    // - 1x Triple Triad Set
    // - 1x FF8 Poker Deck
    rewardItems: [],
    createdAt: now
  }, {
    id: 'chocobo-race',
    title: 'Das Rennen der dunklen Feder',
    description: `Gold Saucer Event (Für weitere Informationen siehe dir die separaten Spielregeln an)`,
    type: 'side',
    status: 'open',
    acquired: true,
    rewardXp: 175,
    rewardMoney: 10,
    // rewardItems:
    // - 1x Bobbycar
    rewardItems: [],
    createdAt: now
  }, {
    id: 'can-throwing',
    title: 'Schnaps-Schuss',
    description: `Gold Saucer Event (Für weitere Informationen siehe dir die separaten Spielregeln an)`,
    type: 'side',
    status: 'open',
    acquired: true,
    // rewardXp: 25/50/75 XP (abhängig vom High Score)
    // rewardMoney: 5/10/15 Gil (abhängig vom High Score)
    rewardXp: 75,
    rewardMoney: 15,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'poker-tournament',
    title: 'Der große Bluff der Bierbarone',
    description: `Gold Saucer Event (Für weitere Informationen siehe dir die separaten Spielregeln an)`,
    type: 'side',
    status: 'open',
    acquired: true,
    // rewardXp: 200 XP (max)
    // rewardMoney: 30 Gil (max)
    rewardXp: 200,
    rewardMoney: 30,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'bean-bag',
    title: 'Der Sack muss ins Loch!',
    description: `Gold Saucer Event (Für weitere Informationen siehe dir die separaten Spielregeln an)`,
    type: 'side',
    status: 'open',
    acquired: true,
    rewardXp: 75,
    rewardMoney: 15,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'fingerdarts',
    title: 'Bullseye',
    description: `Gold Saucer Event (Für weitere Informationen siehe dir die separaten Spielregeln an)`,
    type: 'side',
    status: 'open',
    acquired: true,
    rewardXp: 75,
    rewardMoney: 15,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'ringwurf',
    title: 'Ringe müssen her',
    description: `Gold Saucer Event (Für weitere Informationen siehe dir die separaten Spielregeln an)`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 75,
    rewardMoney: 15,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'grill-anfeuern',
    title: 'Brutzelnder Ruhm',
    description: `Zünde den Grill an und lege somit den Grundstein für ein fürstliches Mahl.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 75,
    rewardMoney: 5,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'knoten-challenge',
    title: 'Der Knoten war schon so, ehrlich!',
    description: `Meistere alle Knoten in einer Zeit von 30 Minuten, Seemann.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 150,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'peruecke-stylen',
    title: 'Haarspalterei',
    description: `Sorge dafür, dass deine Haare (Perücke) richtig toll aussehen.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 125,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'bananarama',
    title: 'Bananarama',
    description: `Verzehre innerhalb von 12 Minuten vier schmackhafte Bananen hintereinander ohne zu kotzen.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 125,
    rewardMoney: 10,
    // rewardItems:
    // - 1x Banane
    rewardItems: [],
    createdAt: now
  }, {
    id: 'dreh-lauf',
    title: 'Die taumelnden Titanen',
    description: `Drehe dich 20x um die eigene Achse und laufe im Anschluss innerhalb von 25 Sekunden durch ein Ziel, welches sich 15 Meter weit entfernt befindet. Währenddessen darfst du nicht umkippen oder kotzen (Drehwürmer sind gestattet).`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 200,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'seilchen',
    title: 'Spring vor Glück',
    description: `Suche dir einen Gegner aus und springe innerhalb einer Minute häufiger mit dem Seil als dein Kontrahent.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 150,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'magic-roman',
    title: 'Eine magische Zusammenkunft',
    description: `Gewinne eine Partie Magic the Gathering gegen Roman (die Regeln findest du im Shop).`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 200,
    rewardMoney: 20,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'boccia',
    title: 'Rock and Roll',
    description: `Wähle einen Mitstreiter und zwei Gegner aus. Das Team, wessen Ball am Ende näher an der Markierung liegt gewinnt eine Partie. Gewinne 2 von 3 Partien um einen Sieg zu erringen.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 175,
    rewardMoney: 15,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'willy-bier',
    title: 'Wo ein Willy ist, ist auch ein Bier',
    description: `Überzeuge Willy davon mit dir ein Bier im Gartenhaus zu trinken.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 75,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'schere-stein-papier',
    title: 'Brunnen ist verboten!',
    description: `Gewinne gegen alle anderen hintereinander in Schere, Stein, Papier.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 150,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'iq-test',
    title: 'Weiser und Gelehrter',
    description: `Stelle dich einem IQ-Test und beantworte entsprechende Fragen. Mindestens 80% der Fragen müssen korrekt sein, damit die Aufgabe als bestanden gilt.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 125,
    rewardMoney: 0,
    // rewardItems:
    // - 1x Intelligenztrank (siehe Shop)
    rewardItems: [],
    createdAt: now
  }, {
    id: 'flunkyball',
    title: 'Blitzball-Turnier',
    description: `Gewinne in einem brutalen 3 gegen 3 mit deinem Team gegen das gegnerische Team in Sven's Lieblingsspiel Flunky Ball.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 175,
    rewardMoney: 15,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'bierpong',
    title: 'Die roten Kelche des Kater-Königs',
    description: `Gewinne in einem erfrischenden 3 gegen 3 mit deinem Team gegen das gegnerische Team in Bierpong.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 175,
    rewardMoney: 15,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'bier-test',
    title: 'Hopfen-Herausforderung des Braumeisters',
    description: `Du erhältst zwei Biere, erkenne anhand des köstlichen Geschmacks das Oettinger Pils.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 75,
    rewardMoney: 0,
    // rewardItems:
    // - 1x Potion (siehe Shop)
    rewardItems: [],
    createdAt: now
  }, {
    id: 'blumen-pfluecken',
    title: 'Vier Blumen für ein Hallelujah',
    description: `Entdecke den Baumkuschler in dir! Finde und pflücke 4 verschiedene Blumenarten.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 100,
    rewardMoney: 5,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'gil-gestohlen',
    title: 'Der ganz große Coup',
    description: `Deine hart verdienten Gil wurden dir gestohlen. Einer dieser sechs Verdächtigen muss es gewesen sein! Errate den Dieb, aber vorsicht – eine falsche Anschuldigung wird man dir übel nehmen.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 150,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'foto-mission',
    title: 'Porträt-Panik',
    description: `Mache mit allen Beteiligten ein schönes Erinnerungsfoto – entweder als Selfie oder mit Auslöser.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 75,
    rewardMoney: 5,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'fruehstueck',
    title: 'Toast der tausend Mägen',
    description: `Bereite ein nahrhaftes Frühstück in Form von Rührei für die Gruppe vor.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 150,
    rewardMoney: 15,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'kueche-aufraeumen',
    title: 'Moogle-Mopp-Mission',
    description: `Die Küche muss "besenrein" sein, Captain Milosz meldet sich nicht zum Putzdienst.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 200,
    rewardMoney: 15,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'piktomant',
    title: 'Der Weg des Piktomanten',
    description: `Zeichne ein vorgegebenes Bild innerhalb von 5 Minuten nach – kannst du die Kunstkritiker zufriedenstellen?`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 125,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'eierlauf',
    title: 'Eieiei',
    description: `Transportiere ein Ei mit einem Löffel im Mund 15 Meter nach vorne ohne, dass es herunterfällt. Laufe einfach dabei wie auf Eierschalen.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 175,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'triple-triad',
    title: 'Das Herz der Karten',
    description: `Gewinne dein erstes Triple Triad Spiel.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 125,
    rewardMoney: 0,
    // rewardItems:
    // - 1x Triple Triad Karte "Common" (siehe Shop)
    rewardItems: [],
    createdAt: now
  }, {
    id: 'kniebeugen',
    title: 'Rhythmus im Blut',
    description: `Mache 30 Kniebeugen im perfekten Rhythmus – ein Gruppenmitglied zählt im Takt 1-2-3-herunter. Wer aus dem Takt kommt, fängt von vorne an.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 150,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'escort',
    title: 'Bitte nicht alleine lassen',
    description: `Begleite ein Gruppenmitglied auf seiner Reise und schütze ihn dabei vor allen Gefahren.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 175,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'milosz-spiel',
    title: 'Milosz – Das Spiel',
    description: `Milosz.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 200,
    rewardMoney: 20,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'nicht-lachen',
    title: 'Warum denn so ernst?',
    description: `Suche dir einen Teampartner und zwei Gegner aus (Milosz ist der Moderator). Ihr müsst euch über mehrere Runden witzige Dinge angucken und dürft dabei nicht lachen, ansonsten gilt die Runde als verloren und das gegnerische Team bekommt einen Punkt. Welches Team zuerst 8 Punkte hat, gewinnt.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 150,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'daumen-wrestling',
    title: 'Daumen-König',
    description: `Tritt gegen jeden Kontrahenten hintereinander im Daumenwrestling an.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 150,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'papierflieger',
    title: 'Hoch hinaus',
    description: `Suche dir einen Gegner aus, anschließend baut ihr beide einen Papierflieger. Der Papierflieger, der eine größere Strecke zurücklegt, gewinnt.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 125,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'karaoke',
    title: 'Karaoke Abend',
    description: `Singe dein Lieblingslied.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 100,
    rewardMoney: 5,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'armdruecken',
    title: 'Muskeln aus Stahl',
    description: `Fordere jemanden zu einem Armdrückduell heraus und gewinne.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 150,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'vogelsuche',
    title: 'Chocobo Snap',
    description: `Mache ein Selfie mit einem Vogel.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 150,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'mario-kart',
    title: 'Heißes Pflaster',
    description: `Patrick muss immer den ersten Platz auf dem Schwierigkeitsgrad 100cc Star Cup Race belegen.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 175,
    rewardMoney: 15,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'versteckspiel',
    title: '1 2 3 4 Eckstein',
    description: `Zähle bis 10 und suche den versteckten Kaktor innerhalb von 5 Minuten.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 150,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }, {
    id: 'mordfall',
    title: 'Wer erschoss Mr Milosz?',
    description: `Ein Mord hat sich ereignet. Nutze all deine Kombinationsfähigkeit, um diesen schwierigen Fall zu lösen. Der Fall gilt erst als abgeschlossen, wenn es genügend Beweise für eine gerichtsfeste Anklage oder Verurteilung gibt.`,
    type: 'side',
    status: 'open',
    acquired: false,
    rewardXp: 150,
    rewardMoney: 10,
    // rewardItems: keine
    rewardItems: [],
    createdAt: now
  }];
}

/***/ }),

/***/ 4406:
/*!*************************************************!*\
  !*** ./src/app/core/services/battle.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BattleService: () => (/* binding */ BattleService)
/* harmony export */ });
/* harmony import */ var C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _utils_evaluate_condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/evaluate-condition */ 9699);
/* harmony import */ var _game_save_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-save.service */ 2200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);








let BattleService = /*#__PURE__*/(() => {
  class BattleService {
    router;
    gameSave;
    currentBattle$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    gameState;
    constructor(router, gameSave) {
      this.router = router;
      this.gameSave = gameSave;
    }
    setGameState(state) {
      this.gameState = state;
    }
    startBattle(bossId) {
      const boss = this.gameState.bosses.find(b => b.id === bossId);
      if (!boss) return;
      const unlockedAdvantages = boss.advantages.filter(adv => (0,_utils_evaluate_condition__WEBPACK_IMPORTED_MODULE_1__.evaluateCondition)(adv.condition, this.gameState.player));
      const battle = {
        id: `${bossId}-${Date.now()}`,
        bossId: boss.id,
        advantagesUnlocked: unlockedAdvantages,
        startedAt: new Date()
      };
      this.currentBattle$.next(battle);
    }
    getCurrentBattle() {
      return this.currentBattle$.asObservable();
    }
    finishBattle(won) {
      var _this = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const battle = _this.currentBattle$.value;
        if (!battle) return;
        battle.outcome = won ? 'win' : 'loss';
        battle.finishedAt = new Date();
        const boss = _this.gameState.bosses.find(b => b.id === battle.bossId);
        if (boss) {
          if (won) {
            boss.defeated = true;
          } else {
            boss.attempts = (boss.attempts || 0) + 1;
          }
        }
        _this.gameState.battles.push(battle);
        _this.currentBattle$.next(null);
        yield _this.gameSave.updateCurrentGame();
        _this.router.navigate(['/game']);
      })();
    }
    getSnapshot() {
      return this.gameState.battles;
    }
    static ɵfac = function BattleService_Factory(t) {
      return new (t || BattleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_game_save_service__WEBPACK_IMPORTED_MODULE_2__.GameSaveService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: BattleService,
      factory: BattleService.ɵfac,
      providedIn: 'root'
    });
  }
  return BattleService;
})();

/***/ }),

/***/ 7901:
/*!***********************************************!*\
  !*** ./src/app/core/services/boss.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BossService: () => (/* binding */ BossService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


let BossService = /*#__PURE__*/(() => {
  class BossService {
    bosses$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    setBosses(bosses) {
      this.bosses$.next([...bosses]);
    }
    getBosses() {
      return this.bosses$.asObservable();
    }
    getSnapshot() {
      return this.bosses$.value;
    }
    static ɵfac = function BossService_Factory(t) {
      return new (t || BossService)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BossService,
      factory: BossService.ɵfac,
      providedIn: 'root'
    });
  }
  return BossService;
})();

/***/ }),

/***/ 2200:
/*!****************************************************!*\
  !*** ./src/app/core/services/game-save.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameSaveService: () => (/* binding */ GameSaveService)
/* harmony export */ });
/* harmony import */ var C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-indexed-db */ 465);





let GameSaveService = /*#__PURE__*/(() => {
  class GameSaveService {
    db;
    lastGameStateId;
    currentSnapshotBuilder;
    constructor(db) {
      this.db = db;
    }
    registerSnapshotBuilder(builder) {
      this.currentSnapshotBuilder = builder;
    }
    saveNewGame(state) {
      var _this = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        state.updatedAt = new Date();
        const result = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this.db.add('gameStates', state));
        const id = typeof result === 'number' ? result : result.id;
        _this.lastGameStateId = id;
        return {
          ...state,
          id
        };
      })();
    }
    updateCurrentGame() {
      var _this2 = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this2.currentSnapshotBuilder) throw new Error('No snapshot builder registered.');
        const snapshot = _this2.currentSnapshotBuilder();
        snapshot.updatedAt = new Date();
        return _this2.updateGame(snapshot);
      })();
    }
    updateGame(state) {
      var _this3 = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this3.db.update('gameStates', state));
        return state;
      })();
    }
    loadGame(id) {
      var _this4 = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this4.lastGameStateId = id;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this4.db.getByKey('gameStates', id));
      })();
    }
    listGames() {
      var _this5 = this;
      return (0,C_Users_sven_erik_borheier_source_repos_teitingquest_teitingquest_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this5.db.getAll('gameStates'));
      })();
    }
    static ɵfac = function GameSaveService_Factory(t) {
      return new (t || GameSaveService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_3__.NgxIndexedDBService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: GameSaveService,
      factory: GameSaveService.ɵfac,
      providedIn: 'root'
    });
  }
  return GameSaveService;
})();

/***/ }),

/***/ 1100:
/*!****************************************************!*\
  !*** ./src/app/core/services/inventory.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InventoryService: () => (/* binding */ InventoryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _views_toasts_toast_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @views/toasts/toast.service */ 8258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




let InventoryService = /*#__PURE__*/(() => {
  class InventoryService {
    toast;
    items$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    constructor(toast) {
      this.toast = toast;
    }
    setInventory(items) {
      this.items$.next([...items]);
    }
    getInventory() {
      return this.items$.asObservable();
    }
    addItem(item) {
      const current = this.items$.value;
      this.items$.next([...current, item]);
      /*if (item.available !== false) {
        this.toast.show(`📦 Neues Item erhalten: ${item.name}`);
      }*/
    }
    addItems(items) {
      const current = this.items$.value;
      this.items$.next([...current, ...items]);
    }
    getSnapshot() {
      return this.items$.value;
    }
    static ɵfac = function InventoryService_Factory(t) {
      return new (t || InventoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_views_toasts_toast_service__WEBPACK_IMPORTED_MODULE_0__.ToastService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: InventoryService,
      factory: InventoryService.ɵfac,
      providedIn: 'root'
    });
  }
  return InventoryService;
})();

/***/ }),

/***/ 3665:
/*!*************************************************!*\
  !*** ./src/app/core/services/player.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerService: () => (/* binding */ PlayerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


let PlayerService = /*#__PURE__*/(() => {
  class PlayerService {
    player$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    setPlayer(stats) {
      this.player$.next({
        ...stats
      });
    }
    getPlayer() {
      return this.player$.asObservable();
    }
    updatePlayer(stats) {
      this.player$.next({
        ...stats
      });
    }
    heal(amount) {
      const stats = this.player$.value;
      if (!stats) return;
      stats.hp += amount;
      this.player$.next({
        ...stats
      });
    }
    pay(amount) {
      const stats = this.player$.value;
      if (!stats || stats.money < amount) return false;
      stats.money -= amount;
      this.player$.next({
        ...stats
      });
      return true;
    }
    addMoney(amount) {
      const stats = this.player$.value;
      if (!stats) return;
      stats.money += amount;
      this.player$.next({
        ...stats
      });
    }
    addXp(amount) {
      const stats = this.player$.value;
      if (!stats) return;
      stats.experience += amount;
      this.player$.next({
        ...stats
      });
    }
    updateStats(partial) {
      const current = this.player$.value;
      this.player$.next({
        ...current,
        ...partial
      });
    }
    getSnapshot() {
      return this.player$.value;
    }
    static ɵfac = function PlayerService_Factory(t) {
      return new (t || PlayerService)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PlayerService,
      factory: PlayerService.ɵfac,
      providedIn: 'root'
    });
  }
  return PlayerService;
})();

/***/ }),

/***/ 2926:
/*!************************************************!*\
  !*** ./src/app/core/services/quest.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestService: () => (/* binding */ QuestService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _components_questlog_quest_pool_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/questlog/quest-pool.factory */ 7317);
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory.service */ 1100);
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.service */ 3665);
/* harmony import */ var _game_save_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-save.service */ 2200);
/* harmony import */ var _views_toasts_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @views/toasts/toast.service */ 8258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);











let QuestService = /*#__PURE__*/(() => {
  class QuestService {
    inventoryService;
    playerService;
    gameSave;
    toastService;
    quests$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    questPool = (0,_components_questlog_quest_pool_factory__WEBPACK_IMPORTED_MODULE_0__.createQuestPool)();
    constructor(inventoryService, playerService, gameSave, toastService) {
      this.inventoryService = inventoryService;
      this.playerService = playerService;
      this.gameSave = gameSave;
      this.toastService = toastService;
    }
    setQuests(quests) {
      this.quests$.next([...quests]);
    }
    getQuests() {
      return this.quests$.asObservable();
    }
    addQuest(quest) {
      const current = this.quests$.value;
      const exists = current.some(q => q.id === quest.id && !quest.repeatable);
      if (exists) return;
      const newQuest = {
        ...quest,
        createdAt: new Date()
      };
      const updated = [...current, newQuest];
      this.commit(updated); // ✅ persistente Speicherung
    }
    /** Aufrufbar per QR-Scan */
    addQuestById(id) {
      const template = this.questPool.find(q => q.id === id);
      if (!template) return false;
      this.addQuest({
        ...template
      });
      return true;
    }
    getSnapshot() {
      return this.quests$.value;
    }
    setFromSnapshot(snapshot) {
      this.quests$.next(snapshot);
    }
    markCompleted(id, inventoryService, playerService) {
      const updated = this.quests$.value.map(q => {
        if (q.id !== id) return q;
        // Rewards:
        if (q.rewardItems?.length) {
          const rewardItems = q.rewardItems.map(item => ({
            ...item,
            acquiredAt: new Date()
          }));
          inventoryService.addItems(rewardItems);
        }
        if (q.rewardXp) {
          playerService.addXp(q.rewardXp);
        }
        if (q.rewardMoney) {
          playerService.addMoney(q.rewardMoney); // oder wie auch immer du Geld speicherst
        }
        // Folgequests hinzufügen
        if (q.followUpQuestIds?.length) {
          for (const nextId of q.followUpQuestIds) {
            const template = this.questPool.find(q => q.id === nextId);
            if (template) {
              this.addQuest({
                ...template,
                createdAt: new Date()
              });
            }
          }
        }
        return {
          ...q,
          status: 'completed',
          completedAt: new Date()
        };
      });
      // Quests zählen
      const completedCount = updated.filter(q => q.status === 'completed').length;
      playerService.updateStats({
        questsCompleted: completedCount
      });
      // Neue Equipment-Items freischalten
      const inventory = this.inventoryService.getSnapshot();
      const newUnlocks = [];
      const updatedInventory = inventory.map(item => {
        if (item.type === 'equipment' && item.questsRequired != null && item.questsRequired <= completedCount && item.available !== true) {
          newUnlocks.push(item.name);
          return {
            ...item,
            available: true
          };
        }
        return item;
      });
      if (newUnlocks.length > 0) {
        this.inventoryService.setInventory(updatedInventory);
        this.toastService.show(`Neue Ausrüstung freigeschaltet:\n- ${newUnlocks.join('\n- ')}`);
      }
      this.commit(updated);
    }
    startQuest(id) {
      const updated = this.quests$.value.map(q => q.id === id && q.status === 'open' ? {
        ...q,
        status: 'doing'
      } : q);
      this.commit(updated);
    }
    failQuest(id) {
      const updated = this.quests$.value.map(q => {
        if (q.id !== id) return q;
        let failedAttempts = q.failedAttempts ?? 0;
        failedAttempts++;
        const canRetry = q.repeatable ?? false;
        return {
          ...q,
          status: canRetry ? 'open' : 'failed',
          failedAttempts
        };
      });
      this.commit(updated);
    }
    cancelQuest(id) {
      const updated = this.quests$.value.map(q => q.id === id && q.status === 'doing' ? {
        ...q,
        status: 'open'
      } : q);
      this.commit(updated);
    }
    commit(updated) {
      this.quests$.next(updated);
      this.gameSave.updateCurrentGame();
    }
    static ɵfac = function QuestService_Factory(t) {
      return new (t || QuestService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_inventory_service__WEBPACK_IMPORTED_MODULE_1__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_player_service__WEBPACK_IMPORTED_MODULE_2__.PlayerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_game_save_service__WEBPACK_IMPORTED_MODULE_3__.GameSaveService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_views_toasts_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: QuestService,
      factory: QuestService.ɵfac,
      providedIn: 'root'
    });
  }
  return QuestService;
})();

/***/ }),

/***/ 3108:
/*!***********************************************!*\
  !*** ./src/app/core/services/shop.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShopService: () => (/* binding */ ShopService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


let ShopService = /*#__PURE__*/(() => {
  class ShopService {
    shopItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    setShopItems(items) {
      this.shopItems$.next([...items]);
    }
    getShopItems() {
      return this.shopItems$.asObservable();
    }
    updateStock(itemId, delta) {
      const current = this.shopItems$.value;
      const updated = current.map(item => item.id === itemId ? {
        ...item,
        stock: item.stock + delta
      } : item);
      this.shopItems$.next(updated);
    }
    getSnapshot() {
      return this.shopItems$.value;
    }
    static ɵfac = function ShopService_Factory(t) {
      return new (t || ShopService)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ShopService,
      factory: ShopService.ɵfac,
      providedIn: 'root'
    });
  }
  return ShopService;
})();

/***/ }),

/***/ 9699:
/*!**************************************************!*\
  !*** ./src/app/core/utils/evaluate-condition.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateCondition: () => (/* binding */ evaluateCondition)
/* harmony export */ });
function evaluateCondition(conditions, stats) {
  return conditions.every(cond => {
    const statVal = stats[cond.stat] ?? 0;
    switch (cond.operator) {
      case '>=':
        return statVal >= cond.value;
      case '<=':
        return statVal <= cond.value;
      case '>':
        return statVal > cond.value;
      case '<':
        return statVal < cond.value;
      case '==':
        return statVal === cond.value;
      case '!=':
        return statVal !== cond.value;
      default:
        return false;
    }
  });
}

/***/ }),

/***/ 6196:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstValueFrom: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 3335);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 9285);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_services_battle_service_ts-src_app_core_services_boss_service_ts-src_app-245b7b.js.map