import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatAngularComponent } from './mat-angular.component';

describe('MatAngularComponent', () => {
  let component: MatAngularComponent;
  let fixture: ComponentFixture<MatAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
