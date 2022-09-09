import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFormGastosComponent } from './landing-form-gastos.component';

describe('LandingFormGastosComponent', () => {
  let component: LandingFormGastosComponent;
  let fixture: ComponentFixture<LandingFormGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingFormGastosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingFormGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
