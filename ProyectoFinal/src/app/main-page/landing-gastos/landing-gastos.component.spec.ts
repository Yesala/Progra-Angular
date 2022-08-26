import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingGastosComponent } from './landing-gastos.component';

describe('LandingGastosComponent', () => {
  let component: LandingGastosComponent;
  let fixture: ComponentFixture<LandingGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingGastosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
