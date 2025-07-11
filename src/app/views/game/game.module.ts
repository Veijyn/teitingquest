import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { RouterModule, Routes } from '@angular/router';
import { QuestlogComponent } from '../../components/questlog/questlog';
import { InventoryComponent } from '../../components/inventory/inventory';
import { StatsComponent } from '../../components/stats/stats';
import { BossListComponent } from '../../components/boss-list/boss-list';
import { ShopComponent } from '../../components/shop/shop';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GameComponent,
    QuestlogComponent,
    InventoryComponent,
    StatsComponent,
    BossListComponent,
    ShopComponent
    ],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: GameComponent }]), FormsModule]
})
export class GameModule {}
