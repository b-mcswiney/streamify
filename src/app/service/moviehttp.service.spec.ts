import { TestBed } from '@angular/core/testing';

import { MoviehttpService } from './moviehttp.service';

describe('MoviehttpService', () => {
  let service: MoviehttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviehttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
