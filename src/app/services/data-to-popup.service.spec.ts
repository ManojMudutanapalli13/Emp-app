import { TestBed } from '@angular/core/testing';

import { DataToPopupService } from './data-to-popup.service';

describe('DataToPopupService', () => {
  let service: DataToPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataToPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
