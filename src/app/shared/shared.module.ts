import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { GeneralTableComponent } from './components/general-table/general-table.component';
import { TableModule } from 'primeng/table';
import { RegistrarRecibidoComponent } from '../recepcion/dashboard/components/registrar-recibido/registrar-recibido.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Error404PageComponent,
    SnackbarComponent,
    GeneralTableComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    ReactiveFormsModule
  ],
  exports: [
    SnackbarComponent,
    GeneralTableComponent,
  ]
})
export class SharedModule { }
