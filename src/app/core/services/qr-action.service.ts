import { Injectable } from '@angular/core';
import { QrActionMap } from '../../../data/qr-actions';
import { QrAction } from '../models/qr-action.model';
import { Item } from '../models/item.model';
import { InventoryService } from './inventory.service';
import { PlayerService } from './player.service';
import { SoundService } from './sound.service';
import { createEquipmentItems } from '@components/inventory/inventory.factory';
import { QuestService } from './quest.service';

@Injectable({ providedIn: 'root' })
export class QrActionService {

  constructor(
    private playerService: PlayerService,
    private inventoryService: InventoryService,
    private soundService: SoundService,
    private questService: QuestService // 👈 hinzufügen
  ) { }

  handleQrCode(code: string): string {
    let action: any;
    try {
      action = JSON.parse(code);
    } catch {
      return 'Ungültiger QR-Code.';
    }

    if (!action.type) return 'Unbekannter QR-Code.';

    switch (action.type) {
      case 'heal':
        if (!action.amount) return 'Heilwert fehlt.';
        this.playerService.heal(action.amount);
        this.soundService.playEffect('heal');
        return action.description ?? `+${action.amount} HP geheilt.`;

      case 'item':
        const unlockeditem = this.inventoryService.unlockItemById(action.itemId);
        const item = createEquipmentItems().find(i => i.id === action.itemId);
        const nameitem = item?.name ?? action.itemId;

        if (!unlockeditem) return `Item bereits freigeschaltet: ${nameitem}`;
        this.soundService.playEffect('item-kaufen');
        return `Item freigeschaltet: ${nameitem}`;

     case 'quest':
  const questId = action.questId ?? action.id; // ← fallback, falls im QR-Code nur "id" heißt

  const quest = this.questService.getSnapshot().find(q => q.id === questId);
  if (!quest) return 'Quest nicht gefunden.';

  const alreadyAcquired = quest.acquired;
  if (alreadyAcquired) return `Quest bereits erhalten: ${quest.title}`;

  this.questService.markQuestAcquired(questId);
  this.soundService.playEffect('quest-annahme');
  return `Neue Quest erhalten: ${quest.title}`;


      case 'startBattle':
        return `Kampf gegen Boss gestartet: ${action.bossId}`;

      default:
        return 'Unbekannte Aktion.';
    }

  }

}
