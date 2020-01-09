import { TestBed } from '@angular/core/testing';

import { NeuralCompressorService } from './neural-compressor.service';

describe('NeuralCompressorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeuralCompressorService = TestBed.get(NeuralCompressorService);
    expect(service).toBeTruthy();
  });
});
