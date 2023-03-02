import { TestBed } from '@angular/core/testing';

import { RockPaparScissorsService } from './rock-papar-scissors.service';

describe('RockPaparScissorsService', () => {
  let service: RockPaparScissorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RockPaparScissorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
