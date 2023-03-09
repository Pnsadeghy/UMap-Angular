import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css']
})
export class LocationFormComponent {
  @Input() locationData: any;
  @Output() close = new EventEmitter<void>();

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(this.locationData?.name, [Validators.required]),
      location: new FormControl(this.locationData?.location, [Validators.required]),
      type: new FormControl(this.locationData?.type || 'business', [Validators.required]),
      logo: new FormControl(this.locationData?.logo)
    });
  }

  onSaveLocation(location: string) {
    this.form.patchValue({
      location
    });
  }

  onSubmit() {}

  onClose() {
    this.close.emit();
  }
}
