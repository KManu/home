import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    outlet: 'mainContent'
  },
  {
    path: 'sentiment',
    loadChildren: './pages/sentiment/sentiment.module#SentimentModule',
    outlet: 'mainContent'
  },
  {
    path: 'compressor',
    loadChildren: './pages/neural-compressor/neural-compressor.module#NeuralCompressorModule',
    outlet: 'mainContent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
