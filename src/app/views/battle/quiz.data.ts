// quiz-data.ts
export interface QuizQuestion {
  question: string;
  answers: string[];
  correct: string;
}

export interface Quiz {
  title: string;
  questions: QuizQuestion[];
}

export const QUIZZES: { [key: string]: Quiz } = {
  ff5: {
  title: "Final Fantasy V Quiz",
  questions: [
    {
      question: "Wie heißt der Protagonist von Final Fantasy V?",
      answers: ["Bartz Klauser", "Cloud Strife", "Squall Leonhart", "Tidus"],
      correct: "Bartz Klauser"
    },
    {
      question: "Wie lautet der Name der Prinzessin von Tycoon?",
      answers: ["Lenna Charlotte Tycoon", "Aerith Gainsborough", "Tifa Lockhart", "Yuna"],
      correct: "Lenna Charlotte Tycoon"
    },
    {
      question: "Welcher Charakter ist als Piratin bekannt?",
      answers: ["Faris Scherwiz", "Zidane Tribal", "Tidus", "Cloud Strife"],
      correct: "Faris Scherwiz"
    },
    {
      question: "Welcher der folgenden Charaktere dient als alter Krieger und Mentor in Final Fantasy V?",
      answers: ["Galuf", "Bartz Klauser", "Lenna", "Faris Scherwiz"],
      correct: "Galuf"
    },
    {
      question: "Welches zentrale System bildet einen wesentlichen Bestandteil von Final Fantasy V?",
      answers: ["Job-System", "Materia-System", "Limit Breaks", "Junction-System"],
      correct: "Job-System"
    },
    {
      question: "Welcher Job in Final Fantasy V ist für schwere Rüstungen und hohe physische Stärke bekannt?",
      answers: ["Knight", "Ninja", "White Mage", "Thief"],
      correct: "Knight"
    },
    {
      question: "Welcher Job ist spezialisiert auf den Einsatz von zerstörerischer Magie?",
      answers: ["Black Mage", "White Mage", "Red Mage", "Knight"],
      correct: "Black Mage"
    },
    {
      question: "Welcher Job wird vornehmlich für Heilzauber eingesetzt?",
      answers: ["White Mage", "Black Mage", "Red Mage", "Thief"],
      correct: "White Mage"
    },
    {
      question: "Welcher Job vereint offensive und heilende Fähigkeiten?",
      answers: ["Red Mage", "Blue Mage", "Knight", "Monk"],
      correct: "Red Mage"
    },
    {
      question: "Welches Kleidungsstück ist zu Bartz' Markenzeichen geworden?",
      answers: ["Hut", "Mantel", "Stiefel", "Handschuhe"],
      correct: "Hut"
    },
    {
      question: "Aus welchem Königreich stammt Prinzessin Lenna?",
      answers: ["Tycoon", "Alexandria", "Ivalice", "Eorzea"],
      correct: "Tycoon"
    },
    {
      question: "Welcher der folgenden Charaktere gehört nicht zur Hauptgruppe von Final Fantasy V?",
      answers: ["Cloud Strife", "Bartz Klauser", "Lenna Charlotte Tycoon", "Faris Scherwiz"],
      correct: "Cloud Strife"
    },
    {
      question: "Welche Rolle spielen die Kristalle in Final Fantasy V?",
      answers: [
        "Sie sind zentrale Kraftquellen",
        "Sie dienen als Tauschmittel",
        "Sie erscheinen nur als Dekoration",
        "Sie ermöglichen Zeitreisen"
      ],
      correct: "Sie sind zentrale Kraftquellen"
    },
    {
      question: "Welcher Aspekt von Final Fantasy V wird durch das flexible Job-System besonders betont?",
      answers: [
        "Individuelle Charakterentwicklung",
        "Offene Welt",
        "Multiplayer-Modus",
        "Benutzerdefinierte Steuerung"
      ],
      correct: "Individuelle Charakterentwicklung"
    },
    {
      question: "Wie nennt man einen Angriff, bei dem mehrere Gegner gleichzeitig getroffen werden?",
      answers: ["Flächenangriff", "Einzelzielangriff", "Kritischer Treffer", "Magischer Schlag"],
      correct: "Flächenangriff"
    },
    {
      question: "Welcher Charakter wird in Final Fantasy V auch als Pirat getarnt dargestellt?",
      answers: ["Faris Scherwiz", "Lenna", "Bartz Klauser", "Galuf"],
      correct: "Faris Scherwiz"
    },
    {
      question: "Welcher Gegenstand wird typischerweise verwendet, um HP wiederherzustellen?",
      answers: ["Potion", "Ether", "Phoenix Down", "Elixir"],
      correct: "Potion"
    },
    {
      question: "Wie viele Kristalle spielen traditionell eine zentrale Rolle in der Handlung von Final Fantasy V?",
      answers: ["Vier", "Fünf", "Sechs", "Sieben"],
      correct: "Vier"
    },
    {
      question: "Welcher wiederkehrende optionale Boss ist in Final Fantasy V zu finden?",
      answers: ["Gilgamesh", "Sephiroth", "Ifrit", "Bartz"],
      correct: "Gilgamesh"
    },
    {
      question: "Wie verbessert ein Charakter seine Fähigkeiten im Job-System von Final Fantasy V?",
      answers: [
        "Durch das Sammeln von Erfahrungspunkten im jeweiligen Job",
        "Durch den Einsatz von Materia",
        "Durch das Wechseln der Ausrüstung",
        "Durch den Abschluss von Nebenquests"
      ],
      correct: "Durch das Sammeln von Erfahrungspunkten im jeweiligen Job"
    }
  ]
},
  ff6: {
  title: "Final Fantasy VI Quiz",
  questions: [
    {
      question: "Wie heißt die Protagonistin von Final Fantasy VI, die aufgrund ihrer einzigartigen magischen Kräfte und verlorenen Erinnerungen zu Beginn im Mittelpunkt steht?",
      answers: ["Terra Branford", "Celes Chere", "Relm Arrowny", "Rinoa Heartilly"],
      correct: "Terra Branford"
    },
    {
      question: "Welcher ehemalige Imperiums-General wechselt im Laufe des Spiels auf die Seite der Rebellen?",
      answers: ["Celes Chere", "Locke Cole", "Edgar Roni Figaro", "Sabin Rene Figaro"],
      correct: "Celes Chere"
    },
    {
      question: "Wie heißt der geschickte Dieb, der sich als loyaler Gefährte erweist?",
      answers: ["Locke Cole", "Shadow", "Setzer Gabbiani", "Galuf"],
      correct: "Locke Cole"
    },
    {
      question: "Welcher Charakter ist bekannt für seinen brutalen Kampfstil und den Einsatz wilder Fäuste?",
      answers: ["Sabin Rene Figaro", "Terra Branford", "Celes Chere", "Locke Cole"],
      correct: "Sabin Rene Figaro"
    },
    {
      question: "Wie heißt der weise, etwas schrullige Magier, der als Erzähler und Gefährte fungiert?",
      answers: ["Strago Magus", "Cyan Garamonde", "Shadow", "Setzer Gabbiani"],
      correct: "Strago Magus"
    },
    {
      question: "Welcher stoische Kämpfer mit markanter Augenklappe trägt das Gewicht eines tragischen Verlusts in sich?",
      answers: ["Cyan Garamonde", "Sabin Rene Figaro", "Terra Branford", "Locke Cole"],
      correct: "Cyan Garamonde"
    },
    {
      question: "Wie heißt der wilde und unkonventionelle Charakter, der für seine animalische Natur und unberechenbare Angriffe bekannt ist?",
      answers: ["Gau", "Terra Branford", "Locke Cole", "Shadow"],
      correct: "Gau"
    },
    {
      question: "Welcher charmante Abenteurer und Luftschiff-Pilot sorgt für humorvolle Momente im Spiel?",
      answers: ["Setzer Gabbiani", "Locke Cole", "Celes Chere", "Edgar Roni Figaro"],
      correct: "Setzer Gabbiani"
    },
    {
      question: "Wie heißt der rätselhafte Assassine, dessen Vergangenheit in Dunkelheit gehüllt ist?",
      answers: ["Shadow", "Locke Cole", "Sabin Rene Figaro", "Terra Branford"],
      correct: "Shadow"
    },
    {
      question: "Welcher kleine, flauschige Begleiter sorgt häufig für charmanten Humor?",
      answers: ["Mog", "Gau", "Edgar Roni Figaro", "Strago Magus"],
      correct: "Mog"
    },
    {
      question: "Wie heißt das eisige Bergdorf, in dem das Abenteuer seinen Anfang nimmt?",
      answers: ["Narshe", "Vector", "Figaro", "Zanarkand"],
      correct: "Narshe"
    },
    {
      question: "Wie nennt man die magischen Wesen, die den Helden ihre Zauberkräfte verleihen?",
      answers: ["Espers", "Eidolons", "Guardian Forces", "Aeons"],
      correct: "Espers"
    },
    {
      question: "Welches zentrale Thema befasst sich in Final Fantasy VI mit der Suche nach Identität und Erlösung?",
      answers: ["Identität und Schicksal", "Liebe und Verrat", "Krieg und Frieden", "Rache und Vergeltung"],
      correct: "Identität und Schicksal"
    },
    {
      question: "Welcher Charakter ist nicht nur ein tapferer Kämpfer, sondern auch ein talentierter Techniker und Erfinder?",
      answers: ["Edgar Roni Figaro", "Sabin Rene Figaro", "Locke Cole", "Setzer Gabbiani"],
      correct: "Edgar Roni Figaro"
    },
    {
      question: "Wie erhalten die Charaktere im Laufe des Spiels neue magische Fähigkeiten?",
      answers: ["Durch den Einsatz von Espers", "Durch das Sammeln von Kristallen", "Durch das Erlernen alter Techniken", "Durch Training an speziellen Schulen"],
      correct: "Durch den Einsatz von Espers"
    },
    {
      question: "Welches tragische Ereignis prägte das Schicksal von Cyan Garamonde?",
      answers: ["Der Verlust seiner Familie im Krieg", "Der Verrat durch einen Freund", "Ein magischer Fluch", "Ein gefährlicher Unfall"],
      correct: "Der Verlust seiner Familie im Krieg"
    },
    {
      question: "Wer ist der grausame und sadistische Antagonist, der das Imperium in Final Fantasy VI anführt?",
      answers: ["Kefka Palazzo", "Ultimecia", "Sephiroth", "Kuja"],
      correct: "Kefka Palazzo"
    },
    {
      question: "Wie viele spielbare Hauptcharaktere gibt es in Final Fantasy VI (ohne optionale Nebencharaktere)?",
      answers: ["14", "10", "12", "16"],
      correct: "14"
    },
    {
      question: "Wer komponierte den epischen Soundtrack von Final Fantasy VI?",
      answers: ["Nobuo Uematsu", "Yoko Shimomura", "Hitoshi Sakimoto", "Yuzo Koshiro"],
      correct: "Nobuo Uematsu"
    },
    {
      question: "Welcher der folgenden Charaktere ist kein spielbarer Held in Final Fantasy VI?",
      answers: ["Sephiroth", "Terra Branford", "Celes Chere", "Locke Cole"],
      correct: "Sephiroth"
    }
  ]
},
 ff7: {
  title: "Final Fantasy VII Quiz",
  questions: [
    {
      question: "Wie heißt der Hauptcharakter von Final Fantasy VII?",
      answers: ["Cloud Strife", "Sephiroth", "Zack Fair", "Vincent Valentine"],
      correct: "Cloud Strife"
    },
    {
      question: "Welche Organisation nutzt Mako-Energie?",
      answers: ["Avalanche", "Shinra", "Turks", "Don Corneo's Firma"],
      correct: "Shinra"
    },
    {
      question: "Wie lautet der Name von Clouds legendärem Schwert?",
      answers: ["Buster Sword", "Excalibur", "Masamune", "Dragonslayer"],
      correct: "Buster Sword"
    },
    {
      question: "Wer ist der Hauptantagonist in FF7?",
      answers: ["Barret Wallace", "Cloud Strife", "Sephiroth", "Red XIII"],
      correct: "Sephiroth"
    },
    {
      question: "In welcher Stadt beginnt das Spiel?",
      answers: ["Nibelheim", "Midgar", "Cosmo Canyon", "Rocket Town"],
      correct: "Midgar"
    },
    {
      question: "Welche Widerstandsgruppe kämpft gegen Shinra?",
      answers: ["Turks", "Fenrir", "Avalanche", "AG Entourage"],
      correct: "Avalanche"
    },
    {
      question: "Welcher Charakter ist bekannt für seinen markanten Waffenarm?",
      answers: ["Cloud Strife", "Tifa Lockhart", "Barret Wallace", "Yuffie Kisaragi"],
      correct: "Barret Wallace"
    },
    {
      question: "Welcher Charakter hat eine geheimnisvolle Vergangenheit und ist als Vampir bekannt?",
      answers: ["Vincent Valentine", "Sephiroth", "Zack Fair", "Cid Highwind"],
      correct: "Vincent Valentine"
    },
    {
      question: "Welche Person wird als Diebin und Ninja dargestellt?",
      answers: ["Yuffie Kisaragi", "Tifa Lockhart", "Aerith Gainsborough", "Cait Sith"],
      correct: "Yuffie Kisaragi"
    },
    {
      question: "Was ist Materia in Final Fantasy VII?",
      answers: ["Eine Waffe", "Ein magisches Item", "Ein Kleidungsstück", "Ein Transportmittel"],
      correct: "Ein magisches Item"
    },
    {
      question: "Wer besitzt eine besondere Verbindung zur Erde und wird oft mit Blumen assoziiert?",
      answers: ["Aerith Gainsborough", "Tifa Lockhart", "Yuffie Kisaragi", "Rufus Shinra"],
      correct: "Aerith Gainsborough"
    },
    {
      question: "Welche Kampftechnik nutzt Tifa Lockhart hauptsächlich?",
      answers: ["Schwertkampf", "Schusswaffen", "Fäuste", "Magie"],
      correct: "Fäuste"
    },
    {
      question: "Wie heißt der fahrende Mechaniker und Pilot in FF7?",
      answers: ["Cid Highwind", "Zack Fair", "Gogo", "Genesis Rhapsodos"],
      correct: "Cid Highwind"
    },
    {
      question: "Wer ist der mysteriöse, katzenartige Begleiter im Spiel?",
      answers: ["Cait Sith", "Red XIII", "Sephiroth", "Zack Fair"],
      correct: "Cait Sith"
    },
    {
      question: "Welche besondere Gabe besitzt Aerith Gainsborough?",
      answers: ["Magische Heilung", "Kenntnis der Zukunft", "Verbindung zum Leben", "Unsichtbarkeit"],
      correct: "Verbindung zum Leben"
    },
    {
      question: "Welcher Charakter ist ein tierähnliches Wesen mit hoher Intelligenz?",
      answers: ["Red XIII", "Barret Wallace", "Cid Highwind", "Cloud Strife"],
      correct: "Red XIII"
    },
    {
      question: "In welchem Jahr wurde Final Fantasy VII ursprünglich veröffentlicht?",
      answers: ["1997", "1995", "1994", "1998"],
      correct: "1997"
    },
    {
      question: "Wie heißt Clouds Heimatstadt?",
      answers: ["Midgar", "Nibelheim", "Balamb", "Luca"],
      correct: "Nibelheim"
    },
    {
      question: "Was ist das primäre Ziel der Gruppe Avalanche?",
      answers: ["Schatzsuche", "Kampf gegen Shinra", "Weltrettung", "Diebstahl von Materia"],
      correct: "Kampf gegen Shinra"
    },
    {
      question: "Welcher Charakter wird von Schuldgefühlen geplagt und hat eine tragische Vergangenheit?",
      answers: ["Vincent Valentine", "Cid Highwind", "Zack Fair", "Sephiroth"],
      correct: "Vincent Valentine"
    },
    {
      question: "Welcher Charakter träumt davon, Pilot zu werden und ist ein passionierter Mechaniker?",
      answers: ["Cid Highwind", "Cloud Strife", "Zack Fair", "Barret Wallace"],
      correct: "Cid Highwind"
    },
    {
      question: "Welches Element wird durch Materia hauptsächlich repräsentiert?",
      answers: ["Feuer", "Wasser", "Magie", "Erde"],
      correct: "Magie"
    },
    {
      question: "Welcher Gegenstand kann in spezielle Ausrüstungsslots eingesetzt werden, um magische Kräfte zu entfalten?",
      answers: ["Materia", "Kerne", "Energiebälle", "Städte"],
      correct: "Materia"
    },
    {
      question: "Welcher Charakter ist auch als 'Nanaki' bekannt?",
      answers: ["Red XIII", "Zack Fair", "Cloud Strife", "Vincent Valentine"],
      correct: "Red XIII"
    },
    {
      question: "Welcher Ort gilt als spirituelles Zentrum in FF7?",
      answers: ["Nibelheim", "Cosmo Canyon", "Midgar", "Wutai"],
      correct: "Cosmo Canyon"
    },
    {
      question: "Wie viele verschiedene Materia-Arten gibt es ungefähr in FF7?",
      answers: ["10", "20", "30", "über 50"],
      correct: "über 50"
    },
    {
      question: "Wie heißt der Vergnügungspark in Final Fantasy VII?",
      answers: ["Gold Saucer", "Silver Dome", "Platinum Carnival", "Emerald Park"],
      correct: "Gold Saucer"
    },
    {
      question: "Welcher Charakter ist für seine tiefgründigen Einsichten in Lebensfragen bekannt?",
      answers: ["Aerith Gainsborough", "Cloud Strife", "Sephiroth", "Yuffie Kisaragi"],
      correct: "Aerith Gainsborough"
    },
    {
      question: "Welcher Charakter war früher ein SOLDIER?",
      answers: ["Cloud Strife", "Cid Highwind", "Yuffie Kisaragi", "Tifa Lockhart"],
      correct: "Cloud Strife"
    },
    {
      question: "Welcher Konflikt steht im Mittelpunkt von FF7?",
      answers: ["Umweltzerstörung vs. Natur", "Krieg zwischen Nationen", "Liebesgeschichte", "Technologie gegen Magie"],
      correct: "Umweltzerstörung vs. Natur"
    },
    {
      question: "Welcher Charakter hat eine mystische Verbindung zu einer alten, verlorenen Zivilisation?",
      answers: ["Red XIII", "Barret Wallace", "Cid Highwind", "Cloud Strife"],
      correct: "Red XIII"
    },
    {
      question: "Welcher Mechanismus erlaubt es den Charakteren, mächtige Angriffe durchzuführen, wenn sie angeschlagen sind?",
      answers: ["Limit Breaks", "Super Attacks", "Final Moves", "Overdrives"],
      correct: "Limit Breaks"
    },
    {
      question: "Wer war Cloud Strifes engster Freund, dessen Schicksal tragisch endete?",
      answers: ["Zack Fair", "Sephiroth", "Barret Wallace", "Cid Highwind"],
      correct: "Zack Fair"
    },
    {
      question: "Welcher Charakter ist für seinen Nahkampfstil und seine beeindruckenden Limit Breaks bekannt?",
      answers: ["Tifa Lockhart", "Yuffie Kisaragi", "Aerith Gainsborough", "Cloud Strife"],
      correct: "Tifa Lockhart"
    },
    {
      question: "Welches außerirdische Wesen spielt eine zentrale Rolle in der Handlung von FF7?",
      answers: ["Jenova", "Bahamut", "Ifrit", "Leviathan"],
      correct: "Jenova"
    },
    {
      question: "Wie viele Sektoren hat Midgar?",
      answers: ["6", "8", "10", "12"],
      correct: "8"
    },
    {
      question: "Welcher Charakter ist bekannt für seine schnelle Reaktion und außergewöhnliche Geschicklichkeit?",
      answers: ["Cloud Strife", "Tifa Lockhart", "Yuffie Kisaragi", "Cid Highwind"],
      correct: "Yuffie Kisaragi"
    },
    {
      question: "Welcher Ort in Midgar ist bekannt für seine dichten Slums und als Rückzugsort der Rebellen?",
      answers: ["Sector 7 Slums", "Cosmo Canyon", "Shinra Mansion", "Nibelheim"],
      correct: "Sector 7 Slums"
    },
    {
      question: "Welches Element spielt eine bedeutende Rolle im thematischen Konflikt von FF7?",
      answers: ["Magie", "Maschinen", "Natur", "Wissenschaft"],
      correct: "Natur"
    },
    {
      question: "Welcher Gegenstand symbolisiert Hoffnung und die Chance auf einen Neuanfang in FF7?",
      answers: ["Buster Sword", "Materia", "Ein altes Tagebuch", "Ein Medaillon"],
      correct: "Materia"
    }
  ]
},
  ff8: {
  title: "Final Fantasy VIII Quiz",
  questions: [
    {
      question: "Wie heißt der Protagonist von Final Fantasy VIII?",
      answers: ["Squall Leonhart", "Zidane Tribal", "Tidus", "Cloud Strife"],
      correct: "Squall Leonhart"
    },
    {
      question: "Wie heißt die weibliche Hauptfigur von Final Fantasy VIII?",
      answers: ["Rinoa Heartilly", "Yuna", "Tifa Lockhart", "Aerith Gainsborough"],
      correct: "Rinoa Heartilly"
    },
    {
      question: "Welche militärische Organisation bildet die Elitekrieger in Final Fantasy VIII?",
      answers: ["SeeD", "G-Force", "SOLDIER", "FFM"],
      correct: "SeeD"
    },
    {
      question: "Wie heißt die militärische Basis, an der Squall ausgebildet wurde?",
      answers: ["Balamb Garden", "Galbadia Garden", "Trabia Garden", "Winhill Garden"],
      correct: "Balamb Garden"
    },
    {
      question: "Welcher Charakter ist bekannt für seine coole und rebellische Art und dient als Squalls Rivale?",
      answers: ["Seifer Almasy", "Zell Dincht", "Irvine Kinneas", "Quistis Trepe"],
      correct: "Seifer Almasy"
    },
    {
      question: "Welcher Charakter ist ein enger Freund und Teammitglied von Squall?",
      answers: ["Zell Dincht", "Laguna Loire", "Selphie Tilmitt", "Quistis Trepe"],
      correct: "Zell Dincht"
    },
    {
      question: "Wer ist der Scharfschütze der Gruppe?",
      answers: ["Irvine Kinneas", "Seifer Almasy", "Zell Dincht", "Squall Leonhart"],
      correct: "Irvine Kinneas"
    },
    {
      question: "Welcher Charakter träumt von einer besseren Zukunft und zeigt Idealismus?",
      answers: ["Edea Kramer", "Squall Leonhart", "Rinoa Heartilly", "Seifer Almasy"],
      correct: "Rinoa Heartilly"
    },
    {
      question: "Wie heißt die erste mächtige Hexe, die in FF8 eine zentrale Rolle spielt?",
      answers: ["Edea Kramer", "Ultimecia", "Fujin", "Lunafreya"],
      correct: "Edea Kramer"
    },
    {
      question: "Wie heißt die ultimative Gegenspielerin, die das Zeitgefüge manipuliert?",
      answers: ["Edea Kramer", "Rinoa Heartilly", "Seifer Almasy", "Ultimecia"],
      correct: "Ultimecia"
    },
    {
      question: "Welches System war in FF8 neu und ermöglicht es, Magie mit Statuswerten zu verbinden?",
      answers: ["Limit Breaks", "Junction-System", "Materia", "Paradigm-System"],
      correct: "Junction-System"
    },
    {
      question: "Wie nennt man das System, das es erlaubt, Magie in Statuswerte einzubinden?",
      answers: ["Skill Tree", "Level-Up", "Junction-System", "License Board"],
      correct: "Junction-System"
    },
    {
      question: "Wie werden die mächtigen Kreaturen genannt, die den Charakteren im Kampf helfen?",
      answers: ["Espers", "Summons", "Guardian Forces", "Mognetes"],
      correct: "Guardian Forces"
    },
    {
      question: "Welches dieser Themen ist zentral in der Handlung von FF8?",
      answers: ["Liebe und Schicksal", "Krieg und Zerstörung", "Gier und Macht", "Reichtum und Besitz"],
      correct: "Liebe und Schicksal"
    },
    {
      question: "In welcher Einrichtung findet ein Großteil der militärischen Ausbildung statt?",
      answers: ["Esthar", "Del Sol Garden", "Trabia Garden", "Balamb Garden"],
      correct: "Balamb Garden"
    },
    {
      question: "Welcher Charakter ist für seine fröhliche und unbeschwerte Art bekannt?",
      answers: ["Selphie Tilmitt", "Irvine Kinneas", "Seifer Almasy", "Rinoa Heartilly"],
      correct: "Selphie Tilmitt"
    },
    {
      question: "Welche Figur fungiert als Ausbilderin für die neuen SeeD-Rekruten?",
      answers: ["Selphie Tilmitt", "Rinoa Heartilly", "Quistis Trepe", "Edea Kramer"],
      correct: "Quistis Trepe"
    },
    {
      question: "Welcher der folgenden Charaktere ist kein Mitglied des SeeD-Teams?",
      answers: ["Zell Dincht", "Cloud Strife", "Squall Leonhart", "Rinoa Heartilly"],
      correct: "Cloud Strife"
    },
    {
      question: "Welches Genre repräsentiert Final Fantasy VIII?",
      answers: ["Shooter", "Strategiespiel", "Rollenspiel", "Sportspiel"],
      correct: "Rollenspiel"
    },
    {
      question: "Wer ist der Komponist der ikonischen Musik in FF8?",
      answers: ["Nobuo Uematsu", "Yoko Shimomura", "Hans Zimmer", "John Williams"],
      correct: "Nobuo Uematsu"
    },
    {
      question: "Welche Arten von Magie können in FF8 eingesetzt werden?",
      answers: ["Wasser, Erde, Licht, Dunkelheit", "Nur Feuer und Eis", "Zufällige Zauber", "Feuer, Eis, Blitz, Wind"],
      correct: "Feuer, Eis, Blitz, Wind"
    },
    {
      question: "Welches Element der Handlung beschäftigt sich mit Zeitmanipulation?",
      answers: ["Ultimecias Zeitkompression", "Balamb Garden Training", "Rinoas Aufstand", "Squalls Ausbildung"],
      correct: "Ultimecias Zeitkompression"
    },
    {
      question: "Welche Figur leitet die militärische Ausbildung an Balamb Garden?",
      answers: ["Quistis Trepe", "General Cid", "Professor Kadowaki", "Headmaster Hohenheim"],
      correct: "Quistis Trepe"
    },
    {
      question: "Welches Thema dominiert die Erzählung in Final Fantasy VIII?",
      answers: ["Schicksal und freier Wille", "Gut gegen Böse", "Revolution und Machtübernahme", "Zeitreise und Wiedergeburt"],
      correct: "Schicksal und freier Wille"
    },
    {
      question: "Welche Beschreibung passt am besten zur Welt von Final Fantasy VIII?",
      answers: ["Ein rein mittelalterlicher Schauplatz", "Eine futuristische Cyber-Welt", "Eine Mischung aus moderner Technologie und Magie", "Eine postapokalyptische Landschaft"],
      correct: "Eine Mischung aus moderner Technologie und Magie"
    },
    {
      question: "Welcher Charakter hat eine parallele Nebenhandlung, die häufig dargestellt wird?",
      answers: ["Squall Leonhart", "Laguna Loire", "Rinoa Heartilly", "Seifer Almasy"],
      correct: "Laguna Loire"
    },
    {
      question: "Welche Rolle spielt Laguna Loire in FF8?",
      answers: ["Ist der Hauptantagonist", "Dient als Squalls Militärkommandant", "Leitet Balamb Garden", "Erlebt Abenteuer in parallelen Zeitebenen"],
      correct: "Erlebt Abenteuer in parallelen Zeitebenen"
    },
    {
      question: "Welches Ereignis markiert einen Wendepunkt in der Handlung von FF8?",
      answers: ["Squalls Aufnahme in SeeD", "Rinoas Wiedergeburt", "Die Enthüllung von Ultimecia", "Zells Abschied"],
      correct: "Die Enthüllung von Ultimecia"
    },
    {
      question: "Welches Machtmittel setzen die Charaktere im Kampf ein?",
      answers: ["Overdrive Moves", "Super Weapons", "Limit Breaks", "Guardian Forces"],
      correct: "Guardian Forces"
    },
    {
      question: "Wie beeinflusst das Junction-System die Charakterentwicklung?",
      answers: ["Erhöht Statuswerte durch Magie-Einbindung", "Erhöht die Angriffskraft direkt", "Verbessert nur die Verteidigung", "Hat keinen Einfluss"],
      correct: "Erhöht Statuswerte durch Magie-Einbindung"
    },
    {
      question: "Welches Spielelement sorgt für strategische Tiefe im Kampf?",
      answers: ["Paradigm-System", "Quick Time Events", "Rundenbasiertes Kampfsystem", "Minispiele"],
      correct: "Paradigm-System"
    },
    {
      question: "Wie heißt die besondere Fähigkeit, die das Team strategisch einsetzen kann?",
      answers: ["Limit Break", "Overdrive", "Paradigmenwechsel", "Rapid Attack"],
      correct: "Paradigmenwechsel"
    },
    {
      question: "Welches Element betont die emotionale Entwicklung der Charaktere?",
      answers: ["Hass", "Gier", "Liebe", "Eifersucht"],
      correct: "Liebe"
    },
    {
      question: "Wie trägt Rinoa Heartilly zur Gruppendynamik bei?",
      answers: ["Inspiriert Squall und stärkt den Zusammenhalt", "Agiert als Antagonistin", "Zerstört das Paradigm-System", "Verlässt das Team frühzeitig"],
      correct: "Inspiriert Squall und stärkt den Zusammenhalt"
    },
    {
      question: "Welches spezielle Instrument benutzt Squall im Kampf?",
      answers: ["Gunblade", "Katana", "Zwillingsschwerter", "Degen"],
      correct: "Gunblade"
    },
    {
      question: "Welches Thema zieht sich durch Squalls persönliche Reise?",
      answers: ["Selbstfindung", "Reichtum", "Rache", "Flucht vor der Vergangenheit"],
      correct: "Selbstfindung"
    },
    {
      question: "Wie wird der Konflikt zwischen persönlichen Beziehungen und Pflicht gezeigt?",
      answers: ["Durch reine Action-Szenen", "Durch Minispiele", "Durch eine lineare Storyline ohne Tiefe", "Durch innere Kämpfe der Charaktere"],
      correct: "Durch innere Kämpfe der Charaktere"
    },
    {
      question: "Was symbolisiert das Zusammenspiel von Magie und Technologie in FF8?",
      answers: ["Nur den Fortschritt", "Nur den Traditionserhalt", "Fortschritt und der Konflikt zwischen Tradition und Moderne", "Ein zufälliges Spielelement"],
      correct: "Fortschritt und der Konflikt zwischen Tradition und Moderne"
    }
  ]
},ff9: {
  title: "Final Fantasy IX Quiz",
  questions: [
    {
      question: "Wie heißt der Protagonist von Final Fantasy IX?",
      answers: ["Zidane Tribal", "Cloud Strife", "Squall Leonhart", "Tidus"],
      correct: "Zidane Tribal"
    },
    {
      question: "Welcher Charakter ist ein junger Zauberer, der oft an seiner Herkunft zweifelt?",
      answers: ["Vivi Ornitier", "Quina Quen", "Steiner", "Amarant Coral"],
      correct: "Vivi Ornitier"
    },
    {
      question: "Wie lautet der richtige Name der Prinzessin in Final Fantasy IX?",
      answers: ["Garnet Til Alexandr", "Aerith Gainsborough", "Rinoa Heartilly", "Lunafreya"],
      correct: "Garnet Til Alexandr"
    },
    {
      question: "Welcher Charakter fungiert als eiserner Beschützer von Garnet?",
      answers: ["Steiner", "Zidane Tribal", "Vivi Ornitier", "Amarant Coral"],
      correct: "Steiner"
    },
    {
      question: "Welche Gruppe von Dieben und Schauspielern spielt eine wichtige Rolle in Final Fantasy IX?",
      answers: ["Tantalus", "SeeD", "Del Sol", "Balamb Garden"],
      correct: "Tantalus"
    },
    {
      question: "Welcher Charakter ist bekannt für seine Vorliebe zum Essen und seine unglaublichen Esskünste?",
      answers: ["Quina Quen", "Vivi Ornitier", "Zidane Tribal", "Steiner"],
      correct: "Quina Quen"
    },
    {
      question: "Wie nennt man die mächtigen Beschwörungswesen in Final Fantasy IX?",
      answers: ["Eidolons", "Espers", "Guardian Forces", "Aeons"],
      correct: "Eidolons"
    },
    {
      question: "Welche besondere Fähigkeit besitzt Garnet Til Alexandr?",
      answers: ["Sie kann Eidolons beschwören", "Sie kann fliegen", "Sie beherrscht Schwarzmagie", "Sie kann die Zeit manipulieren"],
      correct: "Sie kann Eidolons beschwören"
    },
    {
      question: "Wie heißt das versteckte Dorf, in dem Eiko Carol lebt?",
      answers: ["Madain Sari", "Balamb Garden", "Alexandria", "Lindblum"],
      correct: "Madain Sari"
    },
    {
      question: "Welcher Eidolon wird mit dem Zauber 'Mega Flare' in Verbindung gebracht?",
      answers: ["Bahamut", "Shiva", "Ifrit", "Ramuh"],
      correct: "Bahamut"
    },
    {
      question: "Welcher Eidolon repräsentiert das Element Eis in Final Fantasy IX?",
      answers: ["Shiva", "Ifrit", "Bahamut", "Ramuh"],
      correct: "Shiva"
    },
    {
      question: "Welcher Eidolon steht für das Element Feuer in Final Fantasy IX?",
      answers: ["Ifrit", "Ramuh", "Leviathan", "Shiva"],
      correct: "Ifrit"
    },
    {
      question: "Welches zentrale Thema behandelt Final Fantasy IX?",
      answers: ["Identität und Selbstfindung", "Krieg und Eroberung", "Zeitreisen", "Wirtschaftskrise"],
      correct: "Identität und Selbstfindung"
    },
    {
      question: "In welchem Jahr wurde Final Fantasy IX erstmals veröffentlicht?",
      answers: ["2000", "1999", "2001", "1998"],
      correct: "2000"
    },
    {
      question: "Für welche Konsole wurde Final Fantasy IX primär entwickelt?",
      answers: ["PlayStation", "Nintendo 64", "Sega Saturn", "Dreamcast"],
      correct: "PlayStation"
    },
    {
      question: "Welcher Charakter in FF9, bekannt als mysteriöser Kämpfer, verlässt Tantalus, um eigenständig zu agieren?",
      answers: ["Amarant Coral", "Vivi Ornitier", "Zidane Tribal", "Steiner"],
      correct: "Amarant Coral"
    },
    {
      question: "Welcher Eidolon wird in Final Fantasy IX als Symbol des Donners und Blitzes dargestellt?",
      answers: ["Ramuh", "Ifrit", "Bahamut", "Shiva"],
      correct: "Ramuh"
    },
    {
      question: "Wer war der Regisseur von Final Fantasy IX?",
      answers: ["Hiroyuki Ito", "Yoshinori Kitase", "Hironobu Sakaguchi", "Motomu Toriyama"],
      correct: "Hiroyuki Ito"
    },
    {
      question: "Welcher Song ist ein berühmter Bestandteil des Final Fantasy IX Soundtracks?",
      answers: ["Melodies of Life", "Eyes on Me", "Suteki Da Ne", "To Zanarkand"],
      correct: "Melodies of Life"
    },
    {
      question: "Welcher Charakter kämpft im Spiel mit seiner eigenen Existenz und Identität?",
      answers: ["Vivi Ornitier", "Zidane Tribal", "Steiner", "Amarant Coral"],
      correct: "Vivi Ornitier"
    }
  ]
},
  ff10: {
  title: "Final Fantasy X Quiz",
  questions: [
    {
      question: "Wie heißt der Protagonist von Final Fantasy X?",
      answers: ["Tidus", "Auron", "Wakka", "Yuna"],
      correct: "Tidus"
    },
    {
      question: "Wer übernimmt in Final Fantasy X die Rolle der Beschwörerin auf Pilgerreise?",
      answers: ["Yuna", "Lulu", "Rikku", "Kimahri"],
      correct: "Yuna"
    },
    {
      question: "Wie heißt die Welt, in der Final Fantasy X stattfindet?",
      answers: ["Spira", "Ivalice", "Eorzea", "Vana'diel"],
      correct: "Spira"
    },
    {
      question: "Welcher weise, erfahrene Krieger begleitet Yuna und fungiert als Mentor?",
      answers: ["Auron", "Wakka", "Tidus", "Seymour"],
      correct: "Auron"
    },
    {
      question: "Welcher Eidolon, der feurige Beschwörer, gehört zu Yunas Aeons?",
      answers: ["Ifrit", "Shiva", "Valefor", "Anima"],
      correct: "Ifrit"
    },
    {
      question: "Welcher Aeon verkörpert in Final Fantasy X das Element Eis?",
      answers: ["Shiva", "Ifrit", "Ramuh", "Bahamut"],
      correct: "Shiva"
    },
    {
      question: "Welcher Sport hat in Spira einen hohen Stellenwert und prägt das Leben vieler Charaktere?",
      answers: ["Blitzball", "Fußball", "Basketball", "Rugby"],
      correct: "Blitzball"
    },
    {
      question: "Welcher flitzende Charakter bringt mit seiner Lebhaftigkeit Humor in Final Fantasy X?",
      answers: ["Rikku", "Yuna", "Lulu", "Auron"],
      correct: "Rikku"
    },
    {
      question: "Wie heißt das Fortschrittssystem in Final Fantasy X, über das die Charaktere ihre Fähigkeiten verbessern können?",
      answers: ["Sphere Grid", "Junction System", "License Board", "Paradigm System"],
      correct: "Sphere Grid"
    },
    {
      question: "Welches monströse Phänomen ist der stetige Gegner, dessen Wiederkehr Spira heimsucht?",
      answers: ["Sin", "Seymour", "Jecht", "Yevon"],
      correct: "Sin"
    },
    {
      question: "Wie entsteht Sin gemäß der Hintergrundgeschichte von Final Fantasy X?",
      answers: ["Durch die Verwandlung von Jecht in ein Monster", "Durch magischen Missbrauch", "Als natürliche Katastrophe", "Durch den Fluch der Kristalle"],
      correct: "Durch die Verwandlung von Jecht in ein Monster"
    },
    {
      question: "Welcher Aeon wird als erster von Yuna beschworen?",
      answers: ["Valefor", "Ifrit", "Shiva", "Anima"],
      correct: "Valefor"
    },
    {
      question: "Welches religiöse Dogma prägt den Glauben in Spira und führt zu einem endlosen Kreislauf der Zerstörung?",
      answers: ["Yevon", "Gaia", "Rikudou", "Spira"],
      correct: "Yevon"
    },
    {
      question: "Welche grundlegende Thematik spiegelt sich in Final Fantasy X wider?",
      answers: ["Identität und Vergänglichkeit", "Krieg und Eroberung", "Technologischer Fortschritt", "Freundschaft und Verrat"],
      correct: "Identität und Vergänglichkeit"
    },
    {
      question: "Welcher Sport treibt Tidus besonders an und prägt damit einen großen Teil seiner Persönlichkeit?",
      answers: ["Blitzball", "Fußball", "Baseball", "Basketball"],
      correct: "Blitzball"
    },
    {
      question: "Was passiert am Ende von Final Fantasy X mit Tidus?",
      answers: ["Er verschwindet, da seine Existenz ein Traum war", "Er bleibt, um Spira zu beschützen", "Er wird zum Gott", "Er opfert sich im finalen Kampf"],
      correct: "Er verschwindet, da seine Existenz ein Traum war"
    },
    {
      question: "Welcher Charakter, der selbst aus der Blitzball-Szene stammt, hinterfragt im Verlauf des Spiels die dogmatischen Lehren von Yevon?",
      answers: ["Wakka", "Auron", "Tidus", "Rikku"],
      correct: "Wakka"
    },
    {
      question: "Welcher Aeon stellt im späteren Verlauf Final Fantasy X’ eine der gewaltigsten Beschwörungsfähigkeiten zur Verfügung?",
      answers: ["Anima", "Bahamut", "Ixion", "Valefor"],
      correct: "Anima"
    },
    {
      question: "Wie nennt sich die ultimative Fähigkeit, die jeder Charakter einsetzen kann, sobald seine Overdrive-Leiste gefüllt ist?",
      answers: ["Overdrive", "Limit Break", "Final Attack", "Ether Burst"],
      correct: "Overdrive"
    },
    {
      question: "Wie viele Spieler bilden in Final Fantasy X typischerweise eine Blitzball-Mannschaft?",
      answers: ["7", "5", "9", "11"],
      correct: "7"
    }
  ]
}
};
