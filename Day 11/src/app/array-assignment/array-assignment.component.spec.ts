import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayAssignmentComponent } from './array-assignment.component';

describe('ArrayAssignmentComponent', () => {
  let component: ArrayAssignmentComponent;
  let fixture: ComponentFixture<ArrayAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
