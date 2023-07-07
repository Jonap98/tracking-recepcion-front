import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paquete } from '../../interfaces/paquete.interface';
import { Area } from 'src/app/recepcion/catalogos/interfaces/area.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { Paqueteria } from 'src/app/recepcion/catalogos/interfaces/paqueteria.interface';

@Component({
  selector: 'editar-paquete',
  templateUrl: './editar-paquete.component.html',
  styleUrls: ['./editar-paquete.component.css']
})
export class EditarPaqueteComponent implements OnInit {

  @Input()
  public paquete?: Paquete;

  @Input()
  public areas?: Area[];

  @Input()
  public paqueterias?: Paqueteria[];

  @Output()
  public close = new EventEmitter<string>();

  closeModal(): void {
    this.close.emit( );
  }

  constructor(
    private fb: FormBuilder,
    private paquetesService: DashboardService
  ) {}

  public paqueteForm?: FormGroup;

  ngOnInit(): void {
    this.paqueteForm = this.fb.group({
      id: [this.paquete!.id],
      numero_de_guia: [this.paquete!.numero_de_guia],
      paqueteria: [this.paquete!.paqueteria],
      quien_captura: [this.paquete!.quien_captura],
      usuario: [this.paquete!.usuario],
      correo: [this.paquete!.correo],
      area: [this.paquete!.area],
      extension: [this.paquete!.extension],
    });
  }

  onSubmit() {
    this.paquetesService.editarPaquete(
      this.paqueteForm?.value.id,
      this.paqueteForm?.value.numero_de_guia,
      this.paqueteForm?.value.paqueteria,
      this.paqueteForm?.value.quien_captura,
      this.paqueteForm?.value.usuario,
      this.paqueteForm?.value.correo,
      this.paqueteForm?.value.area,
      this.paqueteForm?.value.extension,
    )
    .subscribe( paquete => {
      location.reload();
    })

    this.close.emit();
  }


}
