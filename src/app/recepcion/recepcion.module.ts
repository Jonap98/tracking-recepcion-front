import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { RecepcionRoutingModule } from './recepcion-routing.module';



@NgModule({
  declarations: [
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    RecepcionRoutingModule
  ]
})
export class RecepcionModule { }
