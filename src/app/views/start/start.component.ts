import { Component } from '@angular/core';
import { GameSaveService } from '@core/services/game-save.service';
import { PlayerService } from '@core/services/player.service';
import { InventoryService } from '@core/services/inventory.service';
import { BattleService } from '@core/services/battle.service';
import { ShopService } from '@core/services/shop.service';
import { GameState } from '@core/models/game-state.model';
import { Router } from '@angular/router';
import { createNewGameState } from './game.factory';
import { BossService } from '@core/services/boss.service';

@Component({
  selector: 'app-start',
  standalone: false,
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  savegames: GameState[] = [];
  newGameName: string = '';

  constructor(
    private gameSave: GameSaveService,
    private playerService: PlayerService,
    private inventoryService: InventoryService,
    private bossService: BossService,
    private battleService: BattleService,
    private shopService: ShopService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.savegames = await this.gameSave.listGames();
  }

  async loadGame(id: number) {
    const gameState = await this.gameSave.loadGame(id);
    this.applyGameState(gameState);
    this.router.navigate(['/game']);
  }

  async newGame() {
    const trimmedName = this.newGameName.trim();
    const name = trimmedName.length ? trimmedName : 'Teiting Quest';

    const state = createNewGameState(name);
    const savedState = await this.gameSave.saveNewGame(state);
    this.applyGameState(savedState);
    this.router.navigate(['/game']);
  }

  private applyGameState(gameState: GameState) {
    this.playerService.setPlayer(gameState.player);
    this.inventoryService.setInventory(gameState.inventory);
    this.battleService.setGameState(gameState);
    this.bossService.setBosses(gameState.bosses); 
    this.shopService.setShopItems(gameState.shopItems)
  }
}
