import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  BattleComponent } from './battle.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [BattleComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: BattleComponent }])]
})
export class BattleModule {}
