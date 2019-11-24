import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../pages/home/home.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreMaterialModule } from './core.material.module';
import { SentimentModule } from 'app/pages/sentiment/sentiment.module';


@NgModule({
  declarations: [FooterComponent, HeaderComponent,
    MenuComponent,
    ContentComponent],
  imports: [
    CommonModule,
    HomeModule,
    FlexLayoutModule,
    CoreMaterialModule,
    SentimentModule
  ],
  entryComponents: [FooterComponent, HeaderComponent,
    MenuComponent,
    ContentComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContentComponent,
    CoreMaterialModule,
    SentimentModule
  ]
})
export class CoreModule { }
