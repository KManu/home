import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '@shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    MatExpansionModule
  ]
})
export class PortfolioModule { }
