import { ShopItem } from '@core/models/item.model';

export function createShopItems(): ShopItem[] {
  const now = new Date();

  return [
    {
      id: 'heal-small',
      name: 'Kleiner Heiltrank',
      description: 'Stellt 20 HP wieder her.',
      icon: 'health-potion.svg',
      type: 'consumable',
      price: 10,
      bonusStats: { hp: 20 },
      acquiredAt: now,
      stock: 3
    },
    {
      id: 'buff-intelligence',
      name: 'Elixier der Weisheit',
      description: '+5 Intelligenz für 1 Stunde',
      icon: 'int-buff.png',
      type: 'buff',
      price: 25,
      bonusStats: { intelligence: 5 },
      acquiredAt: now,
      stock: 2
    }
  ];
}
