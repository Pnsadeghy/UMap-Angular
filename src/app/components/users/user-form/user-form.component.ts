import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() userData: any;
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
