import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideshowComponent } from './hideshow.component';

describe('HideshowComponent', () => {
  let component: HideshowComponent;
  let fixture: ComponentFixture<HideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
