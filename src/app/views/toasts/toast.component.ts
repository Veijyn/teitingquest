import { Component } from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  template: `
    <div class="toast" *ngIf="visible">
      {{ message }}
    </div>
  `,
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  message: string | null = null;
  visible: boolean = false;

  constructor(private toastService: ToastService) {
    this.toastService.message$.subscribe(msg => this.message = msg);
    this.toastService.visible$.subscribe(v => this.visible = v);
  }
}
