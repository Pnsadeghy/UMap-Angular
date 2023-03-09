import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserEventService {
  private subject = new Subject();

  getEvent() {
    return this.subject.asObservable();
  }

  callNewUserForm() {
    this.subject.next(null)
  }
  callEditUserForm(data: any) {
    this.subject.next(data)
  }
}
