import {Component, EventEmitter, Input, Output} from '@angular/core';
import {mapOptions} from "../../../helpers/map.helpers";
import {marker, Map, DragEndEvent} from "leaflet";
import {ILocationDetail} from "../../../interfaces/ILocationDetail";

@Component({
  selector: 'app-map-input',
  templateUrl: './map-input.component.html',
  styleUrls: ['./map-input.component.css']
})
export class MapInputComponent {
  @Input() value?: ILocationDetail;
  @Output() change = new EventEmitter<string>();

  options: any;
  marker: any;

  constructor() {
    // extract location value or set default
    const location = this.value || {lat: 46.879966, lng: -121.726909};

    // get map options
    this.options = mapOptions(location.lat, location.lng);

    // set marker
    this.marker = marker([location.lat, location.lng], {
      draggable: true
    });

    //
    if (!this.value)
      this.change.emit(JSON.stringify(location));
  }

  onMapReady(map: Map) {
    this.marker.addTo(map);
    this.marker.on('dragend', (event: DragEndEvent) => {
      this.change.emit(event.target.getLatLng());
    });
  }
}
