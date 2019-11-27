import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeuralCompressorComponent } from './neural-compressor.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '@core/core.module';

const routes: Routes = [
  {
    path: '',
    component: NeuralCompressorComponent
  },
];


@NgModule({
  declarations: [NeuralCompressorComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [NeuralCompressorComponent]
})
export class NeuralCompressorModule { }
