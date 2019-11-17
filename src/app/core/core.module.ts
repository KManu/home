import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../pages/home/home.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomeModule
  ],
  entryComponents: [FooterComponent, HeaderComponent],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
