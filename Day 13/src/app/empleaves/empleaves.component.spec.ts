import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleavesComponent } from './empleaves.component';

describe('EmpleavesComponent', () => {
  let component: EmpleavesComponent;
  let fixture: ComponentFixture<EmpleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
