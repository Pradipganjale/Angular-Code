import { TestBed } from '@angular/core/testing';

import { MsgdisplayService } from './msgdisplay.service';

describe('MsgdisplayService', () => {
  let service: MsgdisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgdisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
