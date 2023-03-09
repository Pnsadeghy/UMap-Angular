import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";

import { AppComponent } from './app.component';
import { MainMapComponent } from './components/map/main-map/main-map.component';
import { UserNewButtonComponent } from './components/users/user-new-button/user-new-button.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { UserModalComponent } from './components/users/user-modal/user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMapComponent,
    UserNewButtonComponent,
    UserFormComponent,
    UserModalComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
