import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ILocationDetail} from "../../../interfaces/ILocationDetail";
import {Store} from "@ngrx/store";
import {AddNewLocation} from "../../../states/location.state";

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent {
  @Input() locationData: any;
  @Output() close = new EventEmitter<void>();

  form: FormGroup;
  locationDetail: ILocationDetail;

  constructor(private _store: Store) {
    this.locationDetail = this.locationData
      ? this.locationData?.location
      : { lat: 46.879966, lng: -121.726909};

    this.form = new FormGroup({
      name: new FormControl(this.locationData?.name, [Validators.required]),
      location: new FormControl('-', [Validators.required]),
      type: new FormControl(this.locationData?.type || 'business', [Validators.required]),
      logo: new FormControl(this.locationData?.logo)
    });
  }

  onSaveLocation(location: any) {
    this.locationDetail = location;

    this.form.patchValue({
      location: '-'
    });
  }

  onSubmit() {
    this._store.dispatch(AddNewLocation({
      item: {
        id: (new Date()).getTime(),
        name: this.form.controls['name'].value,
        location: this.locationDetail,
        type: this.form.controls['type'].value,
        logo: this.form.controls['logo'].value,
      }
    }));
    this.onClose();
  }

  onClose() {
    this.close.emit();
  }
}
