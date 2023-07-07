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
import { EditarDestinatarioComponent } from './components/editar-destinatario/editar-destinatario.component';
import { RegistrarAdministradorComponent } from './components/registrar-administrador/registrar-administrador.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { EditarAdministradorComponent } from './components/editar-administrador/editar-administrador.component';



@NgModule({
  declarations: [
    AreasPageComponent,
    DestinatariosPageComponent,
    PaqueteriasPageComponent,
    UsuariosComponent,

    RegistrarAreaComponent,
    RegistrarDestinatarioComponent,
    RegistrarPaqueteriaComponent,

    EditarAreaComponent,
    ActualizarAreaComponent,
    EditarDestinatarioComponent,

    RegistrarAdministradorComponent,
    EditarAdministradorComponent,
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
