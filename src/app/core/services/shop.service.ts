// core/services/shop.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShopItem } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export class ShopService {
  private shopItems$ = new BehaviorSubject<ShopItem[]>([]);

  setShopItems(items: ShopItem[]) {
    this.shopItems$.next([...items]);
  }

  getShopItems() {
    return this.shopItems$.asObservable();
  }

  updateStock(itemId: string, delta: number) {
    const current = this.shopItems$.value;
    const updated = current.map(item =>
      item.id === itemId ? { ...item, stock: item.stock + delta } : item
    );
    this.shopItems$.next(updated);
  }

  getSnapshot(): ShopItem[] {
    return this.shopItems$.value;
  }
}
