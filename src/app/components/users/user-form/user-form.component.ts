import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() userData: any;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
