import {Component, NgModule, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {LocationEventService} from "../../../servivecs/location-event.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.component.html',
  styleUrls: ['./location-modal.component.css']
})
export class LocationModalComponent {
  @ViewChild('content', {static: false}) private content: any;
  subscription: Subscription;

  formIsActive: boolean = false;

  locationData: any = null;
  modalTitle: string = '';

  constructor(private locationEvent: LocationEventService, private modalService: NgbModal) {
    // subscribe for location modal requests
    this.subscription = this.locationEvent.getEvent().subscribe((data: any) => {
      this.setDetailFromData(data);
      this.openModal();
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  private setDetailFromData(data: any) {
    this.locationData = data;
    this.modalTitle = !!data ? 'location.title.edit' : 'location.title.new';
  }

  private openModal() {
    this.formIsActive = true;
    this.modalService.open(this.content, {
      size: 'lg'
    }).result.then(
      () => {

      },
      () => {
        setTimeout(() => {
          this.formIsActive = false;
        }, 500);
      },
    );
  }
}
