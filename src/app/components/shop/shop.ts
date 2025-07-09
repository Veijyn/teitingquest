import { Component, OnInit } from '@angular/core';
import { InventoryService } from '@core/services/inventory.service';
import { PlayerService } from '@core/services/player.service';
import { SoundService } from '@core/services/sound.service';
import { ShopItem } from '@core/models/item.model';
import { createShopItems } from './shop.factory';
import { GameState } from '@core/models/game-state.model';
import { GameSaveService } from '@core/services/game-save.service';
import { ShopService } from '@core/services/shop.service';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.html',
  styleUrls: ['./shop.scss']
})
export class ShopComponent implements OnInit {
  itemsForSale: ShopItem[] = [];
  message = '';

  constructor(
    private inventoryService: InventoryService,
    private playerService: PlayerService,
    private soundService: SoundService,
    private shopService: ShopService,
    private gameSave: GameSaveService
  ) { }

  ngOnInit(): void {
    this.shopService.getShopItems().subscribe(items => {
      this.itemsForSale = items;
    });
  }

  buy(item: ShopItem) {
    if (item.stock <= 0) return;

    if (this.playerService.pay(item.price!)) {
      const purchasedItem = { ...item, acquiredAt: new Date() };
      this.inventoryService.addItem(purchasedItem);
      this.shopService.updateStock(item.id, -1);

      // Spielstand speichern
      this.gameSave.updateGame({
        ...this.buildGameStateSnapshot()
      });

      this.soundService.playEffect('item');
      this.showMessage(`Gekauft: ${item.name}`);
    } else {
      this.showMessage('Nicht genug Gil!');
    }
  }

  private buildGameStateSnapshot(): GameState {
    return {
      id: 1, // dein aktueller Savegame-ID-Mechanismus
      name: 'Aktueller Spielstand', // evtl. dynamisch
      createdAt: new Date(), // ggf. aus gespeichertem Zustand
      updatedAt: new Date(),
      player: this.playerService.getSnapshot()!,
      inventory: this.inventoryService.getSnapshot(),
      quests: [], // TODO
      bosses: [], // TODO: über BossService holen
      battles: [], // TODO
      shopItems: this.shopService.getSnapshot()
    };
  }


  showMessage(text: string) {
    this.message = text;

    setTimeout(() => {
      this.message = '';
    }, 3000);
  }

}
