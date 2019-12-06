/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SentimentService } from './sentiment.service';

describe('Service: Sentiment', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SentimentService]
    });
  });

  it('should ...', inject([SentimentService], (service: SentimentService) => {
    expect(service).toBeTruthy();
  }));
});
