import { Component } from '@angular/core';
import { QrActionService } from '@core/services/qr-action.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  standalone: false,
  template: `
    <h2>QR-Code scannen</h2>
<zxing-scanner (scanSuccess)="onScan($event)"></zxing-scanner>
<p *ngIf="message">{{ message }}</p>

<button class="rpg-button" (click)="goBack()">Zurück</button>
  `
})
export class ScannerComponent {
  message = '';

  constructor(
    private qrActionService: QrActionService,
    private router: Router
  ) {}

  onScan(result: string) {
    this.message = this.qrActionService.handleQrCode(result);

    // Optional: Auto zurück nach 3 Sek.
    setTimeout(() => this.router.navigate(['/game']), 3000);
  }

  goBack() {
    this.router.navigate(['/game']);
  }
}