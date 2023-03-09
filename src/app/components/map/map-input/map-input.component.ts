import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {mapOptions} from "../../../helpers/map.helpers";
import {marker, Map, DragEndEvent} from "leaflet";
import {ILocationDetail} from "../../../interfaces/ILocationDetail";

@Component({
  selector: 'app-map-input',
  templateUrl: './map-input.component.html',
  styleUrls: ['./map-input.component.css']
})
export class MapInputComponent implements OnInit {
  @Input() value: ILocationDetail = { lat: 0, lng: 0 };
  @Output() change = new EventEmitter<any>();

  options: any;
  marker: any;
  isSet: boolean = false;

  constructor() {}

  ngOnInit() {
    // get map options
    this.options = mapOptions(this.value.lat, this.value.lng);

    // set marker
    this.marker = marker([this.value.lat, this.value.lng], {
      draggable: true
    });
    this.isSet = true;
  }

  onMapReady(map: Map) {
    this.marker.addTo(map);
    this.marker.on('dragend', (event: DragEndEvent) => {
      this.change.emit(event.target.getLatLng());
    });
  }
}
