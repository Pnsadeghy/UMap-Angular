import { Component } from '@angular/core';
import {LocationEventService} from "../../../servivecs/location-event.service";

@Component({
  selector: 'app-location-new-button',
  templateUrl: './location-new-button.component.html',
  styleUrls: ['./location-new-button.component.scss']
})
export class LocationNewButtonComponent {

  constructor(private locationEvent: LocationEventService) { }

  onNewLocation() {
    // call new location event
    this.locationEvent.newLocation();
  }
}
