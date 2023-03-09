import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import { AppComponent } from './app.component';
import { MainMapComponent } from './components/map/main-map/main-map.component';
import { UserNewButtonComponent } from './components/users/user-new-button/user-new-button.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { UserModalComponent } from './components/users/user-modal/user-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    LeafletModule,
    NgbModalModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
