import { Boss } from '@core/models/boss.model';

export const exampleBosses: Boss[] = [
  {
    id: 'boss001',
    name: 'Feuerfürst Ignar',
    title: 'Der Flammenzunge',
    description: 'Ein feuriger Dämon, der alles in Asche legen will.',
    image: 'ignar.png',
    stats: {
      strength: 10,
      agility: 4,
      intelligence: 3,
      hp: 100,
      money: 500,
      level: 5,
      experience: 250
    },
    advantages: [
      {
        id: 'fire-resistant',
        name: 'Feuerresistenz',
        description: 'Du erleidest weniger Schaden durch Feuerangriffe.',
        condition: [
          {
            stat: 'hp',
            operator: '>=',
            value: 80
          }
        ]
      },
      {
        id: 'agile-dodge',
        name: 'Ausweichmanöver',
        description: 'Du kannst seinen Feuerbällen leichter ausweichen.',
        condition: [
          {
            stat: 'agility',
            operator: '>=',
            value: 5
          }
        ]
      }
    ],
    defeated: false
  }
];
