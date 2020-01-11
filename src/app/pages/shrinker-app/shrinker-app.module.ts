import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShrinkerAppRoutingModule } from './shrinker-app-routing.module';
import { ShrinkerAppComponent } from './shrinker-app.component';


@NgModule({
  declarations: [ShrinkerAppComponent],
  imports: [
    CommonModule,
    ShrinkerAppRoutingModule
  ]
})
export class ShrinkerAppModule { }
