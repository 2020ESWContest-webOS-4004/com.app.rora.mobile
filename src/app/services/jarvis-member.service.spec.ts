import { TestBed } from '@angular/core/testing';

import { JarvisMemberService } from './jarvis-member.service';

describe('JarvisMemberService', () => {
  let service: JarvisMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JarvisMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
