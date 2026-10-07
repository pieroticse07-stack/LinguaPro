import { TestBed } from '@angular/core/testing';
import { PromocionService } from './promocion';

describe('PromocionService', () => {
  let service: PromocionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromocionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});