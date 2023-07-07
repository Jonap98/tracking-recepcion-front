import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { DashboardService } from '../../services/dashboard.service';
import { Paquete, Paquetes } from '../../interfaces/paquete.interface';
import { switchMap } from 'rxjs';
import { Area, Areas } from 'src/app/recepcion/catalogos/interfaces/area.interface';
import { Paqueteria } from 'src/app/recepcion/catalogos/interfaces/paqueteria.interface';

@Component({
  selector: 'dashboard-registrar-paquete',
  templateUrl: './registrar-paquete.component.html',
  styleUrls: ['./registrar-paquete.component.css']
})

// export class RegistrarPaqueteComponent implements OnInit {
export class RegistrarPaqueteComponent {

  public currentUser = localStorage.getItem('usuario');

  public paqueteForm = new FormGroup({
    // id: new FormControl<string>(''), // Nullable
    numero_de_guia: new FormControl<string>('', { nonNullable: true }),
    paqueteria: new FormControl<string>('', { nonNullable: true }),
    quien_captura: new FormControl<string>(this.currentUser ?? '', { nonNullable: true }),
    usuario: new FormControl<string>('', { nonNullable: true }),
    correo: new FormControl<string>('', { nonNullable: true }),
    area: new FormControl<string>('', { nonNullable: true }),
    extension: new FormControl<string>('', { nonNullable: true }),
  });

  public paquetes?: Paquetes;

  constructor(
    private dashboardService: DashboardService,
  )
  {
    this.currentUser = localStorage.getItem('usuario');
  }

  @Input()
  public areas?: Area[];

  @Input()
  public paqueterias?: Paqueteria[];

  get paqueteActual(): Paquete {
    const paquete = this.paqueteForm.value  as Paquete;

    return paquete;
  }

  @Output()
  public onPaquete = new EventEmitter<Paquete>();

  onSubmit(): void {
    if( this.paqueteForm.invalid ) {

      return;
    }

    this.onPaquete.emit( this.paqueteForm.value as Paquete );

    this.paqueteForm.reset();
  }

}
