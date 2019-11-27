import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule
  ],
  providers: [],
})
export class CoreMaterialModule { }
