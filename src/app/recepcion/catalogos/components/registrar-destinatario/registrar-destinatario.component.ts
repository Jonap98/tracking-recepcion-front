import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Destinatario, Destinatarios } from '../../interfaces/destinatario.interface';

@Component({
  selector: 'registrar-destinatario',
  templateUrl: './registrar-destinatario.component.html',
  styleUrls: ['./registrar-destinatario.component.css']
})
export class RegistrarDestinatarioComponent {

  public destinatarioForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    correo: ['', Validators.required],
    area: ['', Validators.required],
  });

  public destinatarios?: Destinatarios;

  constructor( private fb: FormBuilder ) {}

  @Output()
  public onDestinatario = new EventEmitter<Destinatario>();

  onSubmit(): void {
    if( this.destinatarioForm.invalid ) {
      this.destinatarioForm.markAllAsTouched();

      return;
    }

    this.onDestinatario.emit( this.destinatarioForm.value as Destinatario );

    this.destinatarioForm.reset();
  }

}
