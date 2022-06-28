import { TestBed } from '@angular/core/testing';

import { DetailsfetchService } from './detailsfetch.service';

describe('DetailsfetchService', () => {
  let service: DetailsfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
