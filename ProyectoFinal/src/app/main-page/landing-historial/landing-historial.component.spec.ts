import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHistorialComponent } from './landing-historial.component';

describe('LandingHistorialComponent', () => {
  let component: LandingHistorialComponent;
  let fixture: ComponentFixture<LandingHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingHistorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
