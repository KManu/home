import { Component, OnInit } from '@angular/core';
import { SentimentService } from './sentiment.service';


@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.scss']
})
export class SentimentComponent implements OnInit {

  constructor(
    private sentiment: SentimentService
  ) { }

  ngOnInit() {
    this.sentiment.toxicity();
  }

}
