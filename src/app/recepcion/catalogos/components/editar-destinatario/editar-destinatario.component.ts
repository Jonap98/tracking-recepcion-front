import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Destinatario, Destinatarios } from '../../interfaces/destinatario.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DestinatariosService } from '../../services/destinatarios.service';
import { Area } from '../../interfaces/area.interface';

@Component({
  selector: 'editar-destinatario',
  templateUrl: './editar-destinatario.component.html',
  styleUrls: ['./editar-destinatario.component.css']
})
export class EditarDestinatarioComponent implements OnInit {

  @Input()
  public destinatario?: Destinatario;

  @Input()
  public areas?: Area[];

  @Output()
  public close = new EventEmitter<string>();

  closeModal(): void {
    this.close.emit( );
  }

  constructor(
    private fb: FormBuilder,
    private destinatariosService: DestinatariosService
  ) {}

  public destinatarioEditForm?: FormGroup;

  ngOnInit(): void {
    this.destinatarioEditForm = this.fb.group({
      id_destinatario: [this.destinatario!.id],
      nombre: [this.destinatario!.nombre, Validators.required],
      correo: [this.destinatario!.correo],
      area: [this.destinatario!.area, Validators.required],
    });
  }


  onSubmit() {

    this.destinatariosService.editarDestinatario(
      this.destinatarioEditForm?.value.id_destinatario,
      this.destinatarioEditForm?.value.nombre,
      this.destinatarioEditForm?.value.correo,
      this.destinatarioEditForm?.value.area,
    )
    .subscribe( destinatario => {
      location.reload();
    });

    this.close.emit( );

    // this.destinatarioForm.reset()
  }


}
