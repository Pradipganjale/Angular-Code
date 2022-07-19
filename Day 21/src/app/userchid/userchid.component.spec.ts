import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchidComponent } from './userchid.component';

describe('UserchidComponent', () => {
  let component: UserchidComponent;
  let fixture: ComponentFixture<UserchidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserchidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserchidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
