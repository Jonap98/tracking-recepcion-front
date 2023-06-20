import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { RecepcionRoutingModule } from './recepcion-routing.module';
import { RegistrarAreaComponent } from './catalogos/components/registrar-area/registrar-area.component';
import { RegistrarDestinatarioComponent } from './catalogos/components/registrar-destinatario/registrar-destinatario.component';
import { RegistrarPaqueteriaComponent } from './catalogos/components/registrar-paqueteria/registrar-paqueteria.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
  ],
  imports: [
    CommonModule,
    RecepcionRoutingModule
  ]
})
export class RecepcionModule { }
