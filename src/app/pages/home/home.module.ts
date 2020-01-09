import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from '@core/core.module';
import { ParticlesModule } from 'ng-particle';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoreModule,
    ParticlesModule
  ],
  entryComponents: [HomeComponent],
  exports: []
})
export class HomeModule { }
