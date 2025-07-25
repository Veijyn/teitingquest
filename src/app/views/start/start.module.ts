import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: StartComponent }];

@NgModule({
  declarations: [StartComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule]
})
export class StartModule {}