import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentimentComponent } from './sentiment.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '@angular/flex-layout';
import { SentimentService } from './sentiment.service';

const routes: Routes = [
  {
    path: '',
    component: SentimentComponent
  },
];


@NgModule({
  declarations: [SentimentComponent],
  providers: [SentimentService],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CoreModule
  ],
  entryComponents: [SentimentComponent]
})
export class SentimentModule { }
