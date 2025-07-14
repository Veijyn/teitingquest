import { Boss } from '@core/models/boss.model';

export function createBosses(): Boss[] {
  return [
    {
      id: 'boss-mimic',
      name: 'Vermummter Fremder',
      title: 'Der Gestaltlose',
      description: 'Es ist schon seltsam wie beweglich er in dieser Kleidung ist.',
      image: 'ninja-head.svg',
      questId: 'mimikry-gogo',
      stats: {
        hp: 100,
        strength: 10,
        agility: 10,
        intelligence: 10,
        experience: 250,
        money: 50,
        level: 1
      },
      advantages: [
        {
          id: 'int-9',
          name: 'Regelverständnis',
          description: 'Questregeln werden erklärt',
          condition: [{ stat: 'intelligence', operator: '>=', value: 9 }]
        },
        {
          id: 'mimic-fail-damage',
          name: 'Fehlerbestrafung',
          description: '10 HP Schaden bei Fehler',
          condition: [{ stat: 'hp', operator: '>=', value: 0 }] // rein symbolisch
        },
        {
          id: 'stat-split',
          name: 'Kampfzeit-Bonus',
          description: 'Bossfighttime variiert je nach Stärke + Geschicklichkeit',
          condition: [
            /*{ stat: 'strength', operator: '>=', value: 15 },
            { stat: 'agility', operator: '>=', value: 15 }*/
          ]
        },
      ],
      defeated: false
    },
    {
      id: 'boss-memory',
      name: 'Krieger des Lichts',
      title: 'Das Licht vergangener Zeiten',
      description: 'Ein mythischer Krieger, der Patrick auf die Probe seiner geistigen und körperlichen Fähigkeiten stellt.',
      image: 'swordwoman.svg',
      questId: 'memory-warrior-light',
      stats: {
        hp: 120,
        strength: 22,
        agility: 12,
        intelligence: 11,
        experience: 300,
        money: 75,
        level: 2
      },
      advantages: [
        {
          id: 'int-7',
          name: 'Mechanikerklärung',
          description: 'Einmalige Erklärung der Mechaniken aus dem Extra-Deck',
          condition: [{ stat: 'intelligence', operator: '>=', value: 7 }]
        },
        {
          id: 'int-11',
          name: 'Spickzettel',
          description: 'Erklärzettel mit Mechaniken werden bereitgelegt',
          condition: [{ stat: 'intelligence', operator: '>=', value: 11 }]
        },
        {
          id: 'agi-9',
          name: 'Kettenmechanik (erweitert)',
          description: 'Aetherial Rift Event wird leichter',
          condition: [{ stat: 'agility', operator: '>=', value: 9 }]
        },
        {
          id: 'agi-12',
          name: 'Kettenmechanik (max)',
          description: 'Aetherial Rift Event wird noch leichter',
          condition: [{ stat: 'agility', operator: '>=', value: 12 }]
        },
        {
          id: 'str-21',
          name: 'Limit Break Überlebt',
          description: 'Schaden vom Ultimate Crossover-Event wird vermieden',
          condition: [{ stat: 'strength', operator: '>=', value: 21 }]
        }
      ],
      defeated: false
    },
    {
      id: 'boss-music',
      name: 'Siren',
      title: 'Die Tödliche Melodie',
      description: 'Ein verführerisches Wesen, das tödliche Musikrätsel stellt.',
      image: 'lyre.svg',
      questId: 'music-siren',
      stats: {
        hp: 100,
        strength: 13,
        agility: 10,
        intelligence: 7,
        experience: 280,
        money: 60,
        level: 2
      },
      advantages: [
        {
          id: 'int-7',
          name: 'Kategorie 1 Bonus',
          description: 'Nur noch 2 Lieder aus Kategorie 1',
          condition: [{ stat: 'intelligence', operator: '>=', value: 7 }]
        },
        {
          id: 'agi-10',
          name: 'Kategorie 2 Bonus',
          description: 'Nur noch 2 Lieder aus Kategorie 2',
          condition: [{ stat: 'agility', operator: '>=', value: 10 }]
        },
        {
          id: 'str-13',
          name: 'Kategorie 3 Bonus',
          description: 'Nur noch 2 Lieder aus Kategorie 3',
          condition: [{ stat: 'strength', operator: '>=', value: 13 }]
        }
      ],
      defeated: false
    },
    {
      id: 'boss-ffquiz',
      name: 'Kaktor',
      title: 'Der rasende Fragenwerfer',
      description: 'Ein hyperaktiver Kaktor stellt dir Fragen, die du besser beantworten solltest.',
      image: 'cactus.svg',
      questId: 'ff-quiz-kaktor',
      stats: {
        hp: 150,
        strength: 12,
        agility: 12,
        intelligence: 12,
        experience: 300,
        money: 50,
        level: 3
      },
      advantages: [
        {
          id: 'attr-check',
          name: 'Attributsprüfung',
          description: 'Vor dem Kampf erfolgt ein Check auf Stärke, Intelligenz und Geschicklichkeit',
          condition: [
            /*{ stat: 'strength', operator: '>=', value: 10 },
            { stat: 'agility', operator: '>=', value: 10 },
            { stat: 'intelligence', operator: '>=', value: 10 }*/
          ]
        }
      ],
      defeated: false
    },
    {
      id: 'boss-yojimbo',
      name: 'Yojimbo',
      title: 'Der Bestechliche Krieger',
      description: 'Ein legendärer Samurai, dessen Loyalität zweifelhaft ist.',
      image: 'samurai-helmet.svg',
      questId: 'yojimbo-bribe',
      stats: {
        hp: 200,
        strength: 16,
        agility: 10,
        intelligence: 8,
        experience: 350,
        money: 0,
        level: 4
      },
      advantages: [
        {
          id: 'has-lamp',
          name: 'Dinge',
          description: 'Dinge sind sein Wunsch.',
          condition: [{ stat: 'hp', operator: '>=', value: 1 }]
        }
      ],
      defeated: false
    },
    {
      id: 'boss-alchemie',
      name: 'Seymour',
      title: 'Der Flüssige Tod',
      description: 'Ein unberechenbarer Alchemist. Sei gewarnt, er ist nicht normal und sein Gebräu ist überall gefürchtet.',
      image: 'fizzing-flask.svg',
      questId: 'alchemy-seymour',
      stats: {
        hp: 180,
        strength: 12,
        agility: 9,
        intelligence: 11,
        experience: 320,
        money: 50,
        level: 4
      },
      advantages: [
        {
          id: 'trankkunde',
          name: 'Trankkunde',
          description: 'Du kannst der Versuchung von weiterer Flüssigkeit widerstehen.',
          condition: [{ stat: 'intelligence', operator: '>', value: 9 }]
        },
        {
          id: 'koerperresistenz',
          name: 'Körperresistenz',
          description: 'Du hast Resistenz gegen das Alchemiegebräu. Weniger Schaden.',
          condition: [{ stat: 'strength', operator: '>', value: 10 },
                    { stat: 'agility', operator: '>', value: 10 },
                    { stat: 'intelligence', operator: '>', value: 10 }
                    ]
        },
        {
          id: 'mentalemeisterschaft',
          name: 'Mentale Meisterschaft',
          description: 'Du wirst fokussiert und kannst dein Gebräu besser zusammenstellen. Ein Plus auf Würfe.',
           condition: [{ stat: 'strength', operator: '>', value: 13 },
                    { stat: 'agility', operator: '>', value: 13 },
                    { stat: 'intelligence', operator: '>', value: 13 }
                    ]
        },
        {
          id: 'derjan',
          name: 'Der Jan ist da',
          description: 'Der Jan ist da, wirklich? Solltest du den Jan im Inventar haben, dann wirken deine Vorteile alle eine Runde später.',
          condition: [{ stat: 'hp', operator: '>=', value: 0 }]
        }
      ],
      defeated: false
    }
  ];
}
