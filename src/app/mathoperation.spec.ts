import { TestBed } from '@angular/core/testing';

import { Mathoperation } from './mathoperation';

describe('Mathoperation', () => {
  let service: Mathoperation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mathoperation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
