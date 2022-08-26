import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingListaComponent } from './landing-lista.component';

describe('LandingListaComponent', () => {
  let component: LandingListaComponent;
  let fixture: ComponentFixture<LandingListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
