import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private visibleSubject = new BehaviorSubject<boolean>(false);
  private messageSubject = new BehaviorSubject<string | null>(null);

  visible$ = this.visibleSubject.asObservable();
  message$ = this.messageSubject.asObservable();

  show(message: string, duration = 3000) {
    this.messageSubject.next(message);
    this.visibleSubject.next(true);

    setTimeout(() => {
      this.visibleSubject.next(false);
      this.messageSubject.next(null);
    }, duration);
  }
}
