import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ILocationDetail} from "../../../interfaces/ILocationDetail";
import {Store} from "@ngrx/store";
import {AddNewLocation, UpdateLocation} from "../../../states/location.state";
import {ILocation} from "../../../interfaces/ILocation";

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent implements OnInit{
  @Input() locationData?: any;
  @Output() close = new EventEmitter<void>();

  form: FormGroup;
  locationDetail: ILocationDetail;
  logoImage: string;
  formIsSet: boolean = false;

  constructor(private _store: Store) {
    this.locationDetail = { lat: 46.879966, lng: -121.726909};
    this.logoImage = "";

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      location: new FormControl('-', [Validators.required]),
      type: new FormControl('business', [Validators.required])
    });
  }

  ngOnInit() {
    if (this.locationData) {
      this.locationDetail = this.locationData.location;
      this.form.patchValue({
        name: this.locationData.name,
        type: this.locationData.type
      });
      if (this.locationData.logo)
        this.logoImage = this.locationData.logo;
    }
    this.formIsSet = true;
  }

  onSaveLocation(location: any) {
    this.locationDetail = location;
  }

  onSaveLogo(logo: string) {
    this.logoImage = logo;
  }

  onSubmit() {
    const props = {
      item: {
        id: this.locationData?.id || (new Date()).getTime(),
        name: this.form.controls['name'].value,
        location: this.locationDetail,
        type: this.form.controls['type'].value,
        logo: this.logoImage
      }
    };

    this._store.dispatch(this.locationData ? UpdateLocation(props) : AddNewLocation(props));
    this.onClose();
  }

  onClose() {
    this.close.emit();
  }
}
