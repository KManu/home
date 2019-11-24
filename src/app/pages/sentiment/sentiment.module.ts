import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentimentComponent } from './sentiment.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SentimentComponent
  },
];


@NgModule({
  declarations: [SentimentComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  entryComponents: [SentimentComponent]
})
export class SentimentModule { }
