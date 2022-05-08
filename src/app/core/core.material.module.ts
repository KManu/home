import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [],
})
export class CoreMaterialModule { }
