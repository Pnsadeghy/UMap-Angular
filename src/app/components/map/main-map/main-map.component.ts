import { Component } from '@angular/core';
import {latLng, tileLayer} from "leaflet";
import {mapOptions} from "../../../helpers/map.helpers";

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent {
  options = mapOptions(46.879966, -121.726909);
}
