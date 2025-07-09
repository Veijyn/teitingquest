import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private items$ = new BehaviorSubject<Item[]>([]);

  setInventory(items: Item[]) {
    this.items$.next([...items]);
  }

  getInventory() {
    return this.items$.asObservable();
  }

  addItem(item: Item) {
    const current = this.items$.value;
    this.items$.next([...current, item]);
  }

  getSnapshot(): Item[] {
    return this.items$.value;
  }
}
