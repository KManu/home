import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreMaterialModule } from './core.material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, HeaderComponent,
    MenuComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    CoreMaterialModule,
    RouterModule
  ],
  entryComponents: [FooterComponent, HeaderComponent,
    MenuComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CoreMaterialModule,
    FlexLayoutModule
  ]
})
export class CoreModule { }
