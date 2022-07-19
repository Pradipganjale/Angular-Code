import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Display1ChildComponent } from './display1-child.component';

describe('Display1ChildComponent', () => {
  let component: Display1ChildComponent;
  let fixture: ComponentFixture<Display1ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Display1ChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Display1ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
