import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPendienteComponent } from './landing-pendiente.component';

describe('LandingPendienteComponent', () => {
  let component: LandingPendienteComponent;
  let fixture: ComponentFixture<LandingPendienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPendienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
