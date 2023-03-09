import { Component } from '@angular/core';
import {UserEventService} from "../../../servivecs/user-event.service";

@Component({
  selector: 'app-user-new-button',
  templateUrl: './user-new-button.component.html',
  styleUrls: ['./user-new-button.component.scss']
})
export class UserNewButtonComponent {

  constructor(private userEvents: UserEventService) { }

  openUserNewForm() {
    // call new user form event
    this.userEvents.callNewUserForm();
  }
}
