import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditsRoutingModule } from './credits-routing.module';
import { CreditsComponent } from './credits.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [CreditsComponent],
  imports: [
    CommonModule,
    CreditsRoutingModule,
    SharedModule
  ]
})
export class CreditsModule { }
