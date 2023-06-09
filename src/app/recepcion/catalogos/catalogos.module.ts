import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasPageComponent } from './pages/areas-page/areas-page.component';
import { DestinatariosPageComponent } from './pages/destinatarios-page/destinatarios-page.component';
import { PaqueteriasPageComponent } from './pages/paqueterias-page/paqueterias-page.component';
import { CatalogosRoutingModule } from './catalogos-routing.module';



@NgModule({
  declarations: [
    AreasPageComponent,
    DestinatariosPageComponent,
    PaqueteriasPageComponent
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule
  ]
})
export class CatalogosModule { }
