import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '*',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sentiment',
    loadChildren: () => import('./pages/sentiment/sentiment.module').then(m => m.SentimentModule)
  },
  {
    path: 'compressor',
    loadChildren: () => import('./pages/neural-compressor/neural-compressor.module').then(m => m.NeuralCompressorModule)
  },
  {
    path: 'enhancer',
    loadChildren: () => import('./pages/neural-enhance/neural-enhance.module').then(m => m.NeuralEnhanceModule)
  },
  { path: 'shrinker-app', loadChildren: () => import('./pages/shrinker-app/shrinker-app.module').then(m => m.ShrinkerAppModule) },
  { path: 'credits', loadChildren: () => import('./pages/credits/credits.module').then(m => m.CreditsModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
