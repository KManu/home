import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    MatExpansionModule
  ]
})
export class SharedModule { }
