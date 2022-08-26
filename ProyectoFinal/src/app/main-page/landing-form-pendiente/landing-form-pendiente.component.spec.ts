import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFormPendienteComponent } from './landing-form-pendiente.component';

describe('LandingFormPendienteComponent', () => {
  let component: LandingFormPendienteComponent;
  let fixture: ComponentFixture<LandingFormPendienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingFormPendienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingFormPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
