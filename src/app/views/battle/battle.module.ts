import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  BattleComponent } from './battle.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BattleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BattleComponent }]),
    FormsModule 
  ]
})
export class BattleModule {}

