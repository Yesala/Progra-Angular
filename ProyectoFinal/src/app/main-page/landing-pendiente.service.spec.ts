import { TestBed } from '@angular/core/testing';

import { LandingPendienteService } from './landing-pendiente.service';

describe('LandingPendienteService', () => {
  let service: LandingPendienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingPendienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
