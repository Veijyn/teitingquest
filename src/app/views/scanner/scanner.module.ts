import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './scanner.component';
import { RouterModule, Routes } from '@angular/router';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

const routes: Routes = [{ path: '', component: ScannerComponent }];

@NgModule({
  declarations: [ScannerComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ZXingScannerModule]
})
export class ScannerModule {}