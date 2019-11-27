import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeuralEnhanceComponent } from './neural-enhance.component';
import { CoreModule } from '@core/core.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NeuralEnhanceComponent
  },
];


@NgModule({
  declarations: [NeuralEnhanceComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [NeuralEnhanceComponent]
})
export class NeuralEnhanceModule { }
