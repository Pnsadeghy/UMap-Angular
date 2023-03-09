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
  @ViewChild('content', {static: false}) private content: any;
  subscription: Subscription;

  userData: any = null;
  editUser: boolean = false;
  modalTitle: string = '';

  constructor(private userEvents: UserEventService, private modalService: NgbModal) {
    // subscribe for user modal requests
    this.subscription = this.userEvents.getEvent().subscribe((data: any) => {
      this.setDetailFromData(data);
      this.openModal();
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  private setDetailFromData(data: any) {
    this.userData = data;
    this.editUser = !!data;
    this.modalTitle = this.editUser ? 'users.title.edit' : 'users.title.new';
  }

  private openModal() {
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then(
      () => {

      },
      () => {
        // close
      },
    );
  }
}
