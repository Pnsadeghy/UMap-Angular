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
      name: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      logo: new FormControl('')
    });
  }

  onSubmit() {}

  onClose() {
    this.close.emit();
  }
}
