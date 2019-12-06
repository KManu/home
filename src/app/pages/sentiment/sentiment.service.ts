import { Injectable } from '@angular/core';

import * as tfjsTox from '@tensorflow-models/toxicity';
@Injectable({
  providedIn: 'root'
})
export class SentimentService {

threshhold = 10;
toxicityLevels = [
  'toxicity',
  'severe_toxicity',
  'insult',
  'threat'
];

constructor() {
}

toxicity() {
  console.log('Running sentiment')
  tfjsTox.load(this.threshhold, this.toxicityLevels).then(model => {
    const sentences = ['you suck', 'die bitch', 'kill yourself'];

    model.classify(sentences).then(predictions => {
      // `predictions` is an array of objects, one for each prediction head,
      // that contains the raw probabilities for each input along with the
      // final prediction in `match` (either `true` or `false`).
      // If neither prediction exceeds the threshold, `match` is `null`.

      console.log(predictions);
      /*
      prints:
      {
        "label": "identity_attack",
        "results": [{
          "probabilities": [0.9659664034843445, 0.03403361141681671],
          "match": false
        }]
      },
      {
        "label": "insult",
        "results": [{
          "probabilities": [0.08124706149101257, 0.9187529683113098],
          "match": true
        }]
      },
      ...
       */
    });
  });
}

}
