import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../pages/home/home.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';


import { AtftModule } from 'atft';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomeModule,
    AtftModule
  ],
  entryComponents: [FooterComponent, HeaderComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    AtftModule
  ]
})
export class CoreModule { }
