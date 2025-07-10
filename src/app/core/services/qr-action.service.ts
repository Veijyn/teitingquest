import { Injectable } from '@angular/core';
import { QrActionMap } from '../../../data/qr-actions';
import { QrAction } from '../models/qr-action.model';
import { Item } from '../models/item.model';
import { InventoryService } from './inventory.service';
import { PlayerService } from './player.service';
import { SoundService } from './sound.service';

@Injectable({ providedIn: 'root' })
export class QrActionService {

  constructor(
    private playerService: PlayerService,
    private inventoryService: InventoryService,
    private soundService: SoundService
  ) { }

  handleQrCode(code: string): string {
    const action = QrActionMap[code];
    if (!action) return 'Unbekannter Code.';

    switch (action.type) {
      case 'heal':
        this.playerService.heal(action.amount);
        this.soundService.playEffect('heal');
        return action.description ?? `+${action.amount} HP geheilt.`;

      case 'item':
        const item: Item = {
          id: action.itemId,
          name: action.itemId,
          description: 'Ein mächtiges Item.',
          icon: 'placeholder.png',
          type: 'equipment',
          acquiredAt: new Date()
        };
        this.inventoryService.addItem(item);
        this.soundService.playEffect('item-kaufen');
        return `Item erhalten: ${action.itemId}`;

      case 'quest':
        // questService.addQuest(action.questId); // später
        this.soundService.playEffect('quest-annahme');
        return `Neue Quest erhalten: ${action.questId}`;

      case 'startBattle':
        // navigationService.navigateToBattle(action.bossId); → später
        return `Kampf gegen Boss gestartet: ${action.bossId}`;

      default:
        return 'Unbekannte Aktion.';
    }
  }
}
