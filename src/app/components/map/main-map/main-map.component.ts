import {Component, OnDestroy} from '@angular/core';
import {latLng, Map, marker} from "leaflet";
import {mapOptions} from "../../../helpers/map.helpers";
import {select, Store} from "@ngrx/store";
import {selectLocationList} from "../../../states/location.state";
import {ILocation} from "../../../interfaces/ILocation";
import * as $ from "jquery";
import {LocationEventService} from "../../../servivecs/location-event.service";

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent implements OnDestroy{

  options: any;
  layers: any[] = [];
  list: ILocation[] = [];
  map: any;
  clickEvents: any;

  constructor(private _store: Store, private locationEvent: LocationEventService) {
    this._store.pipe(select(selectLocationList)).subscribe(list => {
      this.layers = list.map(this.makeMarker);
      this.list = [...list];
      this.setCenter();
    });

    this.clickEvents = $(document).on('click', '.location-popup_edit', (event) => {
      const item = this.list.find(i => i.id === +$(event.target).data('id'));
      this.locationEvent.editLocation(item);
    });
  }

  ngOnDestroy() {
    if (this.clickEvents) {
      $(document).off('click', '.location-popup_edit', this.clickEvents);
      this.clickEvents = null;
    }
  }

  onMapReady(map: Map) {
    this.map = map;
  }

  private makeMarker(item: ILocation) {
    const popup = `
<div class="location-popup" >
   <h1 class="location-popup_title" >${item.name}</h1>
   <h2 class="location-popup_type" >${item.type}</h2>
   ${item.logo ? `<img class="location-popup_image" src="${item.logo}" />` : ''}
   <button data-id="${item.id}" class="button button-light button-rounded location-popup_edit" >Edit</button>
</div>
    `;

    return marker([item.location.lat, item.location.lng])
      .bindPopup(popup, {closeOnClick: true, closeButton: true});
  }

  private setCenter() {
    if (this.list.length) {
      const location = this.list[this.list.length - 1].location;
      if (this.map) {
        this.map.setView(latLng(location.lat, location.lng), this.map.zoom);
      } else {
        this.options = mapOptions(location.lat, location.lng);
      }
    } else {
      this.options = mapOptions(46.879966, -121.726909);
    }
  }
}
