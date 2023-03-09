import { Component } from '@angular/core';
import {latLng, Map, marker, tileLayer} from "leaflet";
import {mapOptions} from "../../../helpers/map.helpers";
import {select, Store} from "@ngrx/store";
import {selectLocationList} from "../../../states/location.state";
import {ILocation} from "../../../interfaces/ILocation";
import {ILocationDetail} from "../../../interfaces/ILocationDetail";

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent {
  options: any;
  layers: any[] = [];
  map: any;
  center: any;

  constructor(private _store: Store) {
    this.options = mapOptions(46.879966, -121.726909);

    this._store.pipe(select(selectLocationList)).subscribe(list => {
      if (list.length && this.map) {
        const location = list[list.length - 1].location;
        this.center = latLng(location.lat, location.lng);
        this.setCenter();
      }
      this.layers = list.map((i: ILocation) => marker([i.location.lat, i.location.lng]));
    });
  }

  onMapReady(map: Map) {
    this.map = map;
    this.setCenter();
  }

  setCenter() {
    if (!this.map) return;
    this.map.setView(this.center, this.map.zoom);
  }
}
