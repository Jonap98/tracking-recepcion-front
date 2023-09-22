import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/auth/interfaces/user.interface';
import { UsuariosService } from '../../services/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'editar-administrador',
  templateUrl: './editar-administrador.component.html',
  styleUrls: ['./editar-administrador.component.css']
})
export class EditarAdministradorComponent {

  @Input()
  public usuario?: User;

  @Output()
  public close = new EventEmitter<string>();

  closeModal(): void {
    this.close.emit( );
  }

  constructor(
    private fb: FormBuilder,
    private usuariosService: UsuariosService
  ) {}

  public usuarioEditForm?: FormGroup;

  ngOnInit(): void {
    this.usuarioEditForm = this.fb.group({
      id: [this.usuario!.id],
      name: [this.usuario!.name, Validators.required],
      email: [this.usuario!.email],
      role: [this.usuario!.role],
    });
  }

  onSubmit() {

    this.usuariosService.editarUsuario(
      this.usuarioEditForm?.value.id,
      this.usuarioEditForm?.value.name,
      this.usuarioEditForm?.value.email,
      this.usuarioEditForm?.value.role,
    )
    .subscribe( usuario => {
      location.reload();
    });

    this.close.emit( );
  }

}
