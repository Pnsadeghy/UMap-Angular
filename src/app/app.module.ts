import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";

import { AppComponent } from './app.component';
import { MainMapComponent } from './components/map/main-map/main-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMapComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
