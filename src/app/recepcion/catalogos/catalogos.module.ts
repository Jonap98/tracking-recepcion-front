import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasPageComponent } from './pages/areas-page/areas-page.component';
import { DestinatariosPageComponent } from './pages/destinatarios-page/destinatarios-page.component';
import { PaqueteriasPageComponent } from './pages/paqueterias-page/paqueterias-page.component';
import { CatalogosRoutingModule } from './catalogos-routing.module';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarAreaComponent } from './components/registrar-area/registrar-area.component';
import { RegistrarDestinatarioComponent } from './components/registrar-destinatario/registrar-destinatario.component';
import { RegistrarPaqueteriaComponent } from './components/registrar-paqueteria/registrar-paqueteria.component';
import { EditarAreaComponent } from './pages/areas-page/editar-area/editar-area.component';
import { ActualizarAreaComponent } from './pages/areas-page/actualizar-area/actualizar-area.component';



@NgModule({
  declarations: [
    AreasPageComponent,
    DestinatariosPageComponent,
    PaqueteriasPageComponent,

    RegistrarAreaComponent,
    RegistrarDestinatarioComponent,
    RegistrarPaqueteriaComponent,
    EditarAreaComponent,
    ActualizarAreaComponent
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule
    // FormsModule,
  ]
})
export class CatalogosModule { }
