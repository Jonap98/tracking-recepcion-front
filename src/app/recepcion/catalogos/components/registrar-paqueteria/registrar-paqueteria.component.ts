import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paqueteria, Paqueterias } from '../../interfaces/paqueteria.interface';

@Component({
  selector: 'registrar-paqueteria',
  templateUrl: './registrar-paqueteria.component.html',
  styleUrls: ['./registrar-paqueteria.component.css']
})
export class RegistrarPaqueteriaComponent {

  public paqueteriaForm: FormGroup = this.fb.group({
    paqueteria: ['', Validators.required],
  });

  public paqueterias?: Paqueterias;

  constructor( private fb: FormBuilder ) {}

  @Output()
  public onPaqueteria = new EventEmitter<Paqueteria>();

  get paqueteriaActual(): Paqueteria {
    const paqueteria = this.paqueteriaForm.value as Paqueteria;

    return paqueteria;
  }

  onSubmit(): void {
    if( this.paqueteriaForm.invalid ) {
      this.paqueteriaForm.markAllAsTouched();

      return;
    }

    this.onPaqueteria.emit( this.paqueteriaForm.value as Paqueteria );

    this.paqueteriaForm.reset();
  }

}
