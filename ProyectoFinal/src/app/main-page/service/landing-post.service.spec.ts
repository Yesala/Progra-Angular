import { TestBed } from '@angular/core/testing';

import { LandingPostService } from './landing-post.service';

describe('LandingPostService', () => {
  let service: LandingPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
