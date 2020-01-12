import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule
  ]
})
export class SharedModule { }
