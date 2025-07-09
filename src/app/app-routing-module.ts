import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', loadChildren: () => import('./views/start/start.module').then(m => m.StartModule) },
  { path: 'game', loadChildren: () => import('./views/game/game.module').then(m => m.GameModule) },
  { path: 'battle', loadChildren: () => import('./views/battle/battle.module').then(m => m.BattleModule) },
  //{ path: 'admin', loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule) },
  //{ path: 'shop', loadChildren: () => import('./views/shop/shop.module').then(m => m.ShopModule) },
  { path: 'scanner', loadChildren: () => import('./views/scanner/scanner.module').then(m => m.ScannerModule) },
  { path: '**', redirectTo: 'start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
