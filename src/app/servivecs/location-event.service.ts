import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationEventService {
  private subject = new Subject();

  getEvent() {
    return this.subject.asObservable();
  }

  newLocation() {
    this.subject.next(null)
  }
  editLocation(data: any) {
    this.subject.next(data)
  }
}
