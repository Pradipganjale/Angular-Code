import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleavesDetComponent } from './empleaves-det.component';

describe('EmpleavesDetComponent', () => {
  let component: EmpleavesDetComponent;
  let fixture: ComponentFixture<EmpleavesDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleavesDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleavesDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
