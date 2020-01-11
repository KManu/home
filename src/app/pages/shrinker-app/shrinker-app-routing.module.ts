import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShrinkerAppComponent } from './shrinker-app.component';

const routes: Routes = [{ path: '', component: ShrinkerAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShrinkerAppRoutingModule { }
