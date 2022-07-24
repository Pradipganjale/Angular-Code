import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment1DetComponent } from './assignment1-det.component';

describe('Assignment1DetComponent', () => {
  let component: Assignment1DetComponent;
  let fixture: ComponentFixture<Assignment1DetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignment1DetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignment1DetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
