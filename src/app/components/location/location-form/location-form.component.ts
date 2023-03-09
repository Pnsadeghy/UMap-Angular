import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ILocationDetail} from "../../../interfaces/ILocationDetail";
import {Store} from "@ngrx/store";
import {AddNewLocation} from "../../../states/location.state";
import {ILocation} from "../../../interfaces/ILocation";

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent {
  @Input() locationData?: ILocation;
  @Output() close = new EventEmitter<void>();

  form: FormGroup;
  locationDetail: ILocationDetail;
  logoImage: string;

  constructor(private _store: Store) {
    this.locationDetail = this.locationData
      ? this.locationData?.location
      : { lat: 46.879966, lng: -121.726909};
    this.logoImage = this.locationData?.logo || "";

    this.form = new FormGroup({
      name: new FormControl(this.locationData?.name, [Validators.required]),
      location: new FormControl('-', [Validators.required]),
      type: new FormControl(this.locationData?.type || 'business', [Validators.required])
    });
  }

  onSaveLocation(location: any) {
    this.locationDetail = location;
  }

  onSaveLogo(logo: string) {
    this.logoImage = logo;
  }

  onSubmit() {
    this._store.dispatch(AddNewLocation({
      item: {
        id: (new Date()).getTime(),
        name: this.form.controls['name'].value,
        location: this.locationDetail,
        type: this.form.controls['type'].value,
        logo: this.logoImage
      }
    }));
    this.onClose();
  }

  onClose() {
    this.close.emit();
  }
}
