import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item.model';
import { ToastService } from '@views/toasts/toast.service';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private items$ = new BehaviorSubject<Item[]>([]);

  constructor(private toast: ToastService) {}

  setInventory(items: Item[]) {
    this.items$.next([...items]);
  }

  getInventory() {
    return this.items$.asObservable();
  }

  
addItem(item: Item) {
  const current = this.items$.value;
  this.items$.next([...current, item]);

  /*if (item.available !== false) {
    this.toast.show(`📦 Neues Item erhalten: ${item.name}`);
  }*/
}

  addItems(items: Item[]) {
  const current = this.items$.value;
  this.items$.next([...current, ...items]);
  }

  getSnapshot(): Item[] {
    return this.items$.value;
  }
}
