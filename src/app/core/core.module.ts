import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../pages/home/home.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreMaterialModule } from './core.material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [FooterComponent, HeaderComponent,
    MenuComponent,
    ContentComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CoreMaterialModule,
    RouterModule
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
  ]
})
export class CoreModule { }
