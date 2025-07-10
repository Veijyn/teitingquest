import { Item } from '@core/models/item.model';

export function createEquipmentItems(): Item[] {
  const now = new Date();

  return [
    {
      id: 'belt',
      slot: 'belt',
      name: 'Starker Gürtel',
      description: 'Ein stabiler Gürtel, der Haltung und Magie stärkt.',
      icon: 'belt.svg',
      type: 'equipment',
      bonusStats: { hp: 1, agility: 1, intelligence: 1 },
      acquiredAt: now,
      questsRequired: 1,
      available: false
    },
    {
      id: 'helmet',
      name: 'Mystischer Helm',
      slot: 'head',
      description: 'Eine verstärkte Kopfbedeckung für mutige Abenteurer.',
      icon: 'helm.svg',
      type: 'equipment',
      bonusStats: { hp: 1, intelligence: 2 },
      acquiredAt: now,
      questsRequired: 5,
      available: false
    },
    {
      id: 'backmount',
      slot: 'back',
      name: 'Waffenhalterung',
      description: 'Ermöglicht dir, deine Waffen noch schneller zu ziehen.',
      icon: 'scheide.svg',
      type: 'equipment',
      bonusStats: { hp: 2, intelligence: 1 },
      acquiredAt: now,
      questsRequired: 10,
      available: false
    },
    {
      id: 'gloves',
      slot: 'hands',
      name: 'Kampfhandschuhe',
      description: 'Stärken den Griff und den Schlag im Kampf.',
      icon: 'gloves.svg',
      type: 'equipment',
      bonusStats: { hp: 2, strength: 1 },
      acquiredAt: now,
      questsRequired: 16,
      available: false
    },
    {
      id: 'pants',
      slot: 'legs',
      name: 'Bequeme Hose',
      description: 'Bietet Beweglichkeit und etwas Schutz.',
      icon: 'beine.svg',
      type: 'equipment',
      bonusStats: { hp: 5, agility: 1 },
      acquiredAt: now,
      questsRequired: 23,
      available: false
    },
    {
      id: 'chest',
      slot: 'chest',
      name: 'Brustpanzer',
      description: 'Robuste Brustplatte gegen jegliche Gefahren.',
      icon: 'brust.svg',
      type: 'equipment',
      bonusStats: { hp: 5, strength: 1 },
      acquiredAt: now,
      questsRequired: 31,
      available: false
    },
    {
      id: 'wrist',
      slot: 'wrist',
      name: 'Gelenkschützer',
      description: 'Im Shop erhältlich – schützt und stärkt die Gelenke.',
      icon: 'wrist.svg',
      type: 'equipment',
      bonusStats: { hp: 2, strength: 1 },
      price: 40,
      acquiredAt: now,
      available: false
    },
    {
      id: 'shoulder',
      slot: 'shoulders',
      name: 'Schulterplatte',
      description: 'Kommt aus einer geheimnisvollen Lootbox.',
      icon: 'schultern.svg',
      type: 'equipment',
      bonusStats: { hp: 3, agility: 1, intelligence: 1 },
      acquiredAt: now,
      available: false
    },
    {
      id: 'boots',
      slot: 'feet',
      name: 'Verzauberte Stiefel',
      description: 'Ein Schatz aus einem alten Haus – macht dich schneller.',
      icon: 'boots.svg',
      type: 'equipment',
      bonusStats: { hp: 2, strength: 1, agility: 2 },
      acquiredAt: now,
      available: false
    },
    {
      id: 'bastardsword',
      slot: 'weapon',
      name: 'Bastardschwert',
      description: 'Erhalten durch Sieg gegen alle Triple-Triad-Spieler.',
      icon: 'schwert.svg',
      type: 'equipment',
      bonusStats: { strength: 3, agility: 2, intelligence: 2 },
      acquiredAt: now,
      available: false
    },
    {
      id: 'gunblade',
      slot: 'weapon',
      name: 'Gunblade',
      description: 'Ultimative Waffe – nur durch das Sammeln aller Rüstungsteile.',
      icon: 'schwert.svg',
      type: 'equipment',
      bonusStats: { strength: 7, agility: 5, intelligence: 5 },
      acquiredAt: now,
      available: false
    }
  ];
}
