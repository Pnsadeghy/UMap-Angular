import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {StoreModule} from "@ngrx/store";
import {NgxDropzoneModule} from "ngx-dropzone";

import { AppComponent } from './app.component';
import { MainMapComponent } from './components/map/main-map/main-map.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LocationNewButtonComponent} from "./components/location/location-new-button/location-new-button.component";
import {LocationModalComponent} from "./components/location/location-modal/location-modal.component";
import {LocationFormComponent} from "./components/location/location-form/location-form.component";
import { MapInputComponent } from './components/map/map-input/map-input.component';
import { ImageUploadComponent } from './components/form/image-upload/image-upload.component';

import { locationReducer, LOCATION_NAME } from "./states/location.state";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainMapComponent,
    LocationNewButtonComponent,
    LocationModalComponent,
    LocationFormComponent,
    MapInputComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    NgbModalModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    StoreModule.forRoot({
      [LOCATION_NAME]: locationReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
