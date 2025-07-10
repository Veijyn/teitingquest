import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ToastComponent } from '@views/toasts/toast.component';

export const dbConfig = {
  name: 'TeitingQuestDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'gameStates',
      storeConfig: {
        keyPath: 'id',         // das Feld, das als Primärschlüssel genutzt wird
        autoIncrement: true    // automatisch hochzählen (also kein explizites id setzen nötig)
      },
      storeSchema: [
        {
          name: 'updatedAt',
          keypath: 'updatedAt',
          options: { unique: false }
        },
        // hier kannst du bei Bedarf weitere Felder indexieren
        {
          name: 'name',
          keypath: 'name',
          options: { unique: false }
        }
      ]
    }
  ]
};

@NgModule({
  declarations: [
    App,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    ZXingScannerModule,
  ],
  providers: [
    
  ],
  bootstrap: [App]
})
export class AppModule { }
