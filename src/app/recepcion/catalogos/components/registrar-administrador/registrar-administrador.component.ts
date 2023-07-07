import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, Users } from 'src/app/auth/interfaces/user.interface';

@Component({
  selector: 'registrar-administrador',
  templateUrl: './registrar-administrador.component.html',
  styleUrls: ['./registrar-administrador.component.css']
})
export class RegistrarAdministradorComponent {

  public administradorForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    // area: ['', Validators.required],
  });

  public administradores?: Users;

  constructor( private fb: FormBuilder ) {}

  @Output()
  public onAdministrador = new EventEmitter<User>();

  // @Input()
  // public areas?: User[];

  onSubmit(): void {
    if( this.administradorForm.invalid ) {
      this.administradorForm.markAllAsTouched();

      return;
    }

    this.onAdministrador.emit( this.administradorForm.value as User );

    this.administradorForm.reset();
  }

}
