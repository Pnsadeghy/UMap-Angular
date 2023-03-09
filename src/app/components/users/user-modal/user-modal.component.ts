import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {UserEventService} from "../../../servivecs/user-event.service";

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent {
  subscription: Subscription;

  constructor(private userEvents: UserEventService) {
    // subscribe for user modal requests
    this.subscription = this.userEvents.getEvent().subscribe((data: any) => {
       console.log(data);
       alert(data ? "Edit user" : "New user");
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
