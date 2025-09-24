import { TestBed } from '@angular/core/testing';

import { CatigoryServiesService } from './catigory-servies.service';

describe('CatigoryServiesService', () => {
  let service: CatigoryServiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatigoryServiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
