import { QrAction } from '../app/core/models/qr-action.model';

export const QrActionMap: Record<string, QrAction> = {
  'heal-bier': {
    type: 'heal',
    amount: 10,
    description: 'Du trinkst ein Bier und fühlst dich besser.'
  },
  'item-schwert': {
    type: 'item',
    itemId: 'sword-of-glory'
  },
  'start-battle-max': {
    type: 'startBattle',
    bossId: 'max'
  },
  'quest-goldene-hose': {
    type: 'quest',
    questId: 'goldene-hose'
  }
};
