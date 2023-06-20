import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RegistrarPaqueteComponent } from './components/registrar-paquete/registrar-paquete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { GeneralTableComponent } from 'src/app/shared/components/general-table/general-table.component';
import { RegistrarRecibidoComponent } from './components/registrar-recibido/registrar-recibido.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    RegistrarPaqueteComponent,
    // RegistrarRecibidoComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    SharedModule,

    ButtonModule,
  ],
  exports: [
    // RegistrarRecibidoComponent
  ]
})
export class DashboardModule { }
