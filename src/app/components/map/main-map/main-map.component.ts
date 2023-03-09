import { Component } from '@angular/core';
import {latLng, marker, tileLayer} from "leaflet";
import {mapOptions} from "../../../helpers/map.helpers";
import {select, Store} from "@ngrx/store";
import {selectLocationList} from "../../../states/location.state";
import {ILocation} from "../../../interfaces/ILocation";

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent {
  options: any;
  layers: any[] = [];

  constructor(private _store: Store) {
    this.options = mapOptions(46.879966, -121.726909);

    this._store.pipe(select(selectLocationList)).subscribe(list => {
      if (list.length) {
        const location = list[list.length - 1].location;
        this.options = mapOptions(location.lat, location.lng);
      }
      this.layers = list.map((i: ILocation) => marker([i.location.lat, i.location.lng]));
    });
  }

  mapLayers() {

  }
}
