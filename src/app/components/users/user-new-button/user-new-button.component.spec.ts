import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewButtonComponent } from './user-new-button.component';

describe('UserNewButtonComponent', () => {
  let component: UserNewButtonComponent;
  let fixture: ComponentFixture<UserNewButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNewButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
