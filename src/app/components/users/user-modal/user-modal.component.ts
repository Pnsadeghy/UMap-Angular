import {Component, NgModule, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {UserEventService} from "../../../servivecs/user-event.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent {
  subscription: Subscription;
  @ViewChild('content', { static: false }) private content: any;

  constructor(private userEvents: UserEventService, private modalService: NgbModal) {
    // subscribe for user modal requests
    this.subscription = this.userEvents.getEvent().subscribe((data: any) => {
       this.openModal();
    });
  }

  openModal() {
    this.modalService.open(this.content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      () => {
        alert('confirm')
      },
      () => {
        alert('close')
      },
    );
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
