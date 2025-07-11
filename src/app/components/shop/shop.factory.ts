import { ShopItem } from '@core/models/item.model';

export function createShopItems(): ShopItem[] {
  const now = new Date();

  return [
    {
      id: 'abspotten',
      name: 'Abspotten',
      description: 'Jemand anderes muss saufen (gilt nicht für das Elixir des Lebens)',
      icon: 'screaming.svg',
      type: 'consumable',
      price: 3,
      acquiredAt: now,
      stock: 5
    },
    {
      id: 'armreife',
      name: 'Armreife',
      description: 'Ausrüstungsgegenstand (nur im Shop erhältlich)',
      slot: 'wrist',
      icon: 'wrist.svg',
      type: 'equipment',
      bonusStats: { hp: 2, strength: 1 },
      price: 40,
      acquiredAt: now,
      stock: 1
    },    
    {
      id: 'verlorene-seelen',
      name: 'Das Erwachen der Verlorenen Seelen',
      description: 'Man erzählt sich, dass die verlorenen Seelen einen im Schlaf heimsuchen',
      icon: 'book-cover.svg',
      type: 'quest',
      price: 20,
      acquiredAt: now,
      stock: 1
    },
    {
      id: 'vier-kristalle',
      name: 'Die Legende der vier Kristalle',
      description: 'Legenden zufolge handelt es sich hierbei um eine Legende',
      icon: 'book-cover2.svg',
      type: 'quest',
      price: 20,
      acquiredAt: now,
      stock: 1
    },
    {
      id: 'paradigmenwechsel',
      name: 'Ein Paradigmenwechsel des Schicksals',
      description: 'Kannst du dir eine Welt vorstellen, wo alles umso schwieriger wird je stärker man ist?',
      icon: 'book-pile.svg',
      type: 'quest',
      price: 20,
      acquiredAt: now,
      stock: 1
    },
    {
      id: 'buff-agility',
      name: 'Geschicklichkeitstrank (Bufffood)',
      description: '5min +3 Geschicklichkeit aber -1 Stärke (shared Cooldown 5min mit anderem Bufffood)\n(1 Pinnchen Jägermeister)',
      icon: 'potion-of-madness.svg',
      type: 'buff',
      price: 10,
      bonusStats: { agility: 3, strength: -1 },
      acquiredAt: now,
      stock: 99
    },
    {
      id: 'haargel',
      name: 'Haargel',
      description: 'Für stattliche Abenteurer',
      icon: 'comb.svg',
      type: 'consumable',
      price: 10,
      acquiredAt: now,
      stock: 1
    },
    {
      id: 'buff-intelligence',
      name: 'Intelligenztrank (Bufffood)',
      description: '5min +3 Intelligenz aber -1 Geschicklichkeit (shared Cooldown 5min mit anderem Bufffood)\n(1 Pinnchen Rum)',
      icon: 'magic-potion.svg',
      type: 'buff',
      price: 10,
      bonusStats: { intelligence: 3, agility: -1 },
      acquiredAt: now,
      stock: 99
    },
    {
      id: 'lootbox-w6',
      name: 'Lootbox W6 (6-seitiger Würfel)',
      description: 'Solange verfügbar bis jede Augenzahl einmal gewürfelt wurde.\n(Bei bereits gewürfelter Augenzahl = 5 Gil zurück)\nBelohnung: 3 Gil pro Auge + ggf. Bonus bei 6',
      icon: 'open-treasure-chest.svg',
      type: 'consumable',
      price: 10,
      acquiredAt: now,
      stock: 99
    },
    {
      id: 'jan',
      name: 'Der Jan',
      description: 'Manchmal benötigen Dinge einfach länger. Verzögerung ist auch eine Kunst.',
      icon: 'clockwork.svg',
      type: 'quest',
      price: 1,
      acquiredAt: now,
      stock: 1
    },
    {
      id: 'phoenixfeder',
      name: 'Phönixfeder',
      description: 'Man ist einmalig geschützt vor negativem Effekt wenn man KO geht',
      icon: 'condor-emblem.svg',
      type: 'consumable',
      price: 80,
      acquiredAt: now,
      stock: 1
    },
    {
      id: 'potion',
      name: 'Potion',
      description: 'Heilt 10 HP (Cooldown 5min)\n1 Glas Bier',
      icon: 'health-potion.svg',
      type: 'buff',
      price: 5,
      bonusStats: { hp: 10 },
      acquiredAt: now,
      stock: 99
    },
    {
      id: 'midgar-schatten',
      name: 'Schatten über Midgar',
      description: 'Dieser sogenannte Schatten soll angeblich nichts weiter sein als eine riesige Smogwolke',
      icon: 'bookmarklet.svg',
      type: 'quest',
      price: 20,
      acquiredAt: now,
      stock: 1
    },
    {
      id: 'rulebook-mtg',
      name: 'Spielanleitung: Magic the Gathering',
      description: 'Für magische Regelnerds',
      icon: 'card-2-hearts.svg',
      type: 'quest',
      price: 2,
      acquiredAt: now,
      stock: 1
    },
    {
      id: 'rulebook-tripletriad',
      name: 'Spielanleitung: Triple Triad',
      description: 'Für fantasievolle Regelnerds',
      icon: 'card-ace-diamonds.svg',
      type: 'quest',
      price: 2,
      acquiredAt: now,
      stock: 1
    },
    {
      id: 'buff-strength',
      name: 'Stärketrank (Bufffood)',
      description: '5min +3 Stärke aber -1 Intelligenz (shared Cooldown 5min mit anderem Bufffood)\n(1 Pinnchen Vodka)',
      icon: 'standing-potion.svg',
      type: 'buff',
      price: 10,
      bonusStats: { strength: 3, intelligence: -1 },
      acquiredAt: now,
      stock: 99
    },
    {
      id: 'tidus',
      name: 'Tidus und sein Abenteuer',
      description: 'Da gab es mal einen jungen Mann namens Tidus… oder sprach man seinen Namen "Taidus" aus?',
      icon: 'bookmark.svg',
      type: 'quest',
      price: 20,
      acquiredAt: now,
      stock: 1
    },
    {
      id: 'tt-card-common',
      name: 'Triple Triad Karte Common',
      description: '1 Zufallskarte Triple Triad Stufe 2–3',
      icon: 'card-random.svg',
      type: 'quest',
      price: 10,
      acquiredAt: now,
      stock: 5
    },
    {
      id: 'tt-card-uncommon',
      name: 'Triple Triad Karte Uncommon',
      description: '1 Zufallskarte Triple Triad Stufe 4–6',
      icon: 'card-random.svg',
      type: 'quest',
      price: 20,
      acquiredAt: now,
      stock: 4
    },
    {
      id: 'tt-card-rare',
      name: 'Triple Triad Karte Rare',
      description: '1 Zufallskarte Triple Triad Stufe 7–9',
      icon: 'card-random.svg',
      type: 'quest',
      price: 30,
      acquiredAt: now,
      stock: 3
    },
    {
      id: 'wunderlampe',
      name: 'Wunderlampe',
      description: 'Eine schäbige alte Lampe',
      icon: 'magic-lamp.svg',
      type: 'quest',
      price: 80,
      acquiredAt: now,
      stock: 1
    },
    {
      id: 'wunschlied',
      name: 'Wunschlied',
      description: 'Füge ein Lied deiner Wahl der allgemeinen Playlist hinzu',
      icon: 'love-song.svg',
      type: 'consumable',
      price: 1,
      acquiredAt: now,
      stock: 99
    },
    {
      id: 'zidane',
      name: 'Zidane auf seiner Reise',
      description: 'Sein Kopfstoß während einer Weltmeisterschaft soll ohne gleichen sein',
      icon: 'white-book.svg',
      type: 'quest',
      price: 20,
      acquiredAt: now,
      stock: 1
    }
  ];
}

