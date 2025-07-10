import { Quest } from '@core/models/quest.model';

export function createQuestPool(): Quest[] {
  const now = new Date();

  return [
    {
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
    },
    {
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
      // - Gold Saucer Eintrittskarte (Gold Saucer Quests freischalten)
      //   (Chocobo-Rennen, Dosenschießen, Pokerturnier, Sackwerfen, Fingerdarts, Ringwurf)
      rewardItems: [],
      createdAt: now
    },
    {
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
    },
    {
      id: 'mimikry-gogo',
      title: 'Tanz mit dem Teufel',
      description: `description: Ein Mann in seltsamen Kleidern versperrt dir den Weg. Niemand vermag mit Sicherheit zu sagen, wer oder gar was hinter dieser Maskerade steckt... Was hat er nur vor?`,
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
      followUpQuestIds: ['magic-roman'], // optionaler Verweis
      createdAt: now
    },
        {
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
      // - 1x Abspotten (siehe Shop)
      rewardItems: [],
      createdAt: now
    },
    {
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
    },
    {
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
    },
    {
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
    },
      {
      id: 'chocobo-race',
      title: 'Das Rennen der dunklen Feder',
      description: `Gold Saucer Event (Für weitere Informationen siehe dir die separaten Spielregeln an)`,
      type: 'side',
      status: 'open',
      acquired: true,
      repeatable: true,
      rewardXp: 175,
      rewardMoney: 10,
      // rewardItems:
      // - 1x Bobbycar
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'can-throwing',
      title: 'Schnaps-Schuss',
      description: `Gold Saucer Event (Für weitere Informationen siehe dir die separaten Spielregeln an)`,
      type: 'side',
      status: 'open',
      acquired: true,
      repeatable: true,
      // rewardXp: 25/50/75 XP (abhängig vom High Score)
      // rewardMoney: 5/10/15 Gil (abhängig vom High Score)
      rewardXp: 150,
      rewardMoney: 30,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
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
    },
    {
      id: 'bean-bag',
      title: 'Der Sack muss ins Loch!',
      description: `Gold Saucer Event (Für weitere Informationen siehe dir die separaten Spielregeln an)`,
      type: 'side',
      status: 'open',
      acquired: true,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 30,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'fingerdarts',
      title: 'Bullseye',
      description: `Gold Saucer Event (Für weitere Informationen siehe dir die separaten Spielregeln an)`,
      type: 'side',
      status: 'open',
      acquired: true,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 30,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'ringwurf',
      title: 'Ringe müssen her',
      description: `Gold Saucer Event (Für weitere Informationen siehe dir die separaten Spielregeln an)`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 30,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'grill-anfeuern',
      title: 'Brutzelnder Ruhm',
      description: `Zünde den Grill an und lege somit den Grundstein für ein fürstliches Mahl.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 75,
      rewardMoney: 5,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'knoten-challenge',
      title: 'Der Knoten war schon so, ehrlich!',
      description: `Meistere alle Knoten in einer Zeit von 30 Minuten, Seemann.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'peruecke-stylen',
      title: 'Haarspalterei',
      description: `Sorge dafür, dass deine Haare (Perücke) richtig toll aussehen.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 125,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'bananarama',
      title: 'Bananarama',
      description: `Verzehre innerhalb von 12 Minuten vier schmackhafte Bananen hintereinander ohne zu kotzen.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 125,
      rewardMoney: 10,
      // rewardItems:
      // - 1x Banane
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'dreh-lauf',
      title: 'Die taumelnden Titanen',
      description: `Drehe dich 20x um die eigene Achse und laufe im Anschluss innerhalb von 25 Sekunden durch ein Ziel, welches sich 15 Meter weit entfernt befindet. Währenddessen darfst du nicht umkippen oder kotzen (Drehwürmer sind gestattet).`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 200,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'seilchen',
      title: 'Spring vor Glück',
      description: `Suche dir einen Gegner aus und springe innerhalb einer Minute häufiger mit dem Seil als dein Kontrahent.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'magic-roman',
      title: 'Eine magische Zusammenkunft',
      description: `Gewinne eine Partie Magic the Gathering gegen Roman (die Regeln findest du im Shop).`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 200,
      rewardMoney: 20,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
        {
      id: 'boccia',
      title: 'Rock and Roll',
      description: `Wähle einen Mitstreiter und zwei Gegner aus. Das Team, wessen Ball am Ende näher an der Markierung liegt gewinnt eine Partie. Gewinne 2 von 3 Partien um einen Sieg zu erringen.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 175,
      rewardMoney: 15,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'willy-bier',
      title: 'Wo ein Willy ist, ist auch ein Bier',
      description: `Überzeuge Willy davon mit dir ein Bier im Gartenhaus zu trinken.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 75,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'schere-stein-papier',
      title: 'Brunnen ist verboten!',
      description: `Gewinne gegen alle anderen hintereinander in Schere, Stein, Papier.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'iq-test',
      title: 'Weiser und Gelehrter',
      description: `Stelle dich einem IQ-Test und beantworte entsprechende Fragen. Alle Fragen müssen korrekt beantwortet sein, damit die Aufgabe als bestanden gilt.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 125,
      rewardMoney: 0,
      // rewardItems:
      // - 1x Intelligenztrank (siehe Shop)
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'flunkyball',
      title: 'Blitzball-Turnier',
      description: `Gewinne in einem brutalen 3 gegen 3 mit deinem Team gegen das gegnerische Team in Sven's Lieblingsspiel Flunky Ball.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 175,
      rewardMoney: 15,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'bierpong',
      title: 'Die roten Kelche des Kater-Königs',
      description: `Gewinne in einem erfrischenden 3 gegen 3 mit deinem Team gegen das gegnerische Team in Bierpong.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 175,
      rewardMoney: 15,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'bier-test',
      title: 'Hopfen-Herausforderung des Braumeisters',
      description: `Du erhältst zwei Biere, erkenne anhand des köstlichen Geschmacks das Oettinger Pils.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 75,
      rewardMoney: 0,
      // rewardItems:
      // - 1x Potion (siehe Shop)
      rewardItems: [],
      createdAt: now
    },
        {
      id: 'blumen-pfluecken',
      title: 'Vier Blumen für ein Hallelujah',
      description: `Entdecke den Baumkuschler in dir! Finde und pflücke 4 verschiedene Blumenarten.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 100,
      rewardMoney: 5,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'gil-gestohlen',
      title: 'Der ganz große Coup',
      description: `Deine hart verdienten Gil wurden dir gestohlen. Einer dieser sechs Verdächtigen muss es gewesen sein! Errate den Dieb, aber vorsicht – eine falsche Anschuldigung wird man dir übel nehmen.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'foto-mission',
      title: 'Porträt-Panik',
      description: `Mache mit allen Beteiligten ein schönes Erinnerungsfoto – entweder als Selfie oder mit Auslöser.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 75,
      rewardMoney: 5,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'fruehstueck',
      title: 'Toast der tausend Mägen',
      description: `Bereite ein nahrhaftes Frühstück in Form von Rührei für die Gruppe vor.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 15,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'kueche-aufraeumen',
      title: 'Moogle-Mopp-Mission',
      description: `Die Küche muss "besenrein" sein, Captain Milosz meldet sich nicht zum Putzdienst.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 200,
      rewardMoney: 15,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'piktomant',
      title: 'Der Weg des Piktomanten',
      description: `Zeichne ein vorgegebenes Bild innerhalb von 5 Minuten nach – kannst du die Kunstkritiker zufriedenstellen?`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 125,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'eierlauf',
      title: 'Eieiei',
      description: `Transportiere ein Ei mit einem Löffel im Mund 15 Meter nach vorne ohne, dass es herunterfällt. Laufe einfach dabei wie auf Eierschalen.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 175,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
        {
      id: 'triple-triad',
      title: 'Das Herz der Karten',
      description: `Gewinne dein erstes Triple Triad Spiel.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 125,
      rewardMoney: 0,
      // rewardItems:
      // - 1x Triple Triad Karte "Common" (siehe Shop)
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'kniebeugen',
      title: 'Rhythmus im Blut',
      description: `Mache 30 Kniebeugen im perfekten Rhythmus – ein Gruppenmitglied zählt im Takt 1-2-3-herunter. Wer aus dem Takt kommt, fängt von vorne an.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'escort',
      title: 'Bitte nicht alleine lassen',
      description: `Begleite ein Gruppenmitglied auf seiner Reise und schütze ihn dabei vor allen Gefahren.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 175,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'milosz-spiel',
      title: 'Milosz – Das Spiel',
      description: `Milosz.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 200,
      rewardMoney: 20,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'nicht-lachen',
      title: 'Warum denn so ernst?',
      description: `Suche dir einen Teampartner und zwei Gegner aus (Milosz ist der Moderator). Ihr müsst euch über mehrere Runden witzige Dinge angucken und dürft dabei nicht lachen, ansonsten gilt die Runde als verloren und das gegnerische Team bekommt einen Punkt. Welches Team zuerst 8 Punkte hat, gewinnt.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'daumen-wrestling',
      title: 'Daumen-König',
      description: `Tritt gegen jeden Kontrahenten hintereinander im Daumenwrestling an.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'papierflieger',
      title: 'Hoch hinaus',
      description: `Suche dir einen Gegner aus, anschließend baut ihr beide einen Papierflieger. Der Papierflieger, der eine größere Strecke zurücklegt, gewinnt.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 125,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
        {
      id: 'karaoke',
      title: 'Karaoke Abend',
      description: `Singe dein Lieblingslied.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 100,
      rewardMoney: 5,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'armdruecken',
      title: 'Muskeln aus Stahl',
      description: `Fordere jemanden zu einem Armdrückduell heraus und gewinne.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'vogelsuche',
      title: 'Chocobo Snap',
      description: `Mache ein Selfie mit einem Vogel.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'mario-kart',
      title: 'Heißes Pflaster',
      description: `Patrick muss immer den ersten Platz auf dem Schwierigkeitsgrad 100cc Star Cup Race belegen.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 175,
      rewardMoney: 15,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'versteckspiel',
      title: '1 2 3 4 Eckstein',
      description: `Zähle bis 10 und suche den versteckten Kaktor innerhalb von 5 Minuten.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    },
    {
      id: 'mordfall',
      title: 'Wer erschoss Mr Milosz?',
      description: `Ein Mord hat sich ereignet. Nutze all deine Kombinationsfähigkeit, um diesen schwierigen Fall zu lösen. Der Fall gilt erst als abgeschlossen, wenn es genügend Beweise für eine gerichtsfeste Anklage oder Verurteilung gibt.`,
      type: 'side',
      status: 'open',
      acquired: false,
      repeatable: true,
      rewardXp: 150,
      rewardMoney: 10,
      // rewardItems: keine
      rewardItems: [],
      createdAt: now
    }
  ];
}

