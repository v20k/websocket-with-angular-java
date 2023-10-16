import { TestBed } from '@angular/core/testing';

import { WebsockServiceService } from './websock-service.service';

describe('WebsockServiceService', () => {
  let service: WebsockServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsockServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
