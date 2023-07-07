import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, Users } from 'src/app/auth/interfaces/user.interface';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'usuarios-page',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public registerForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public usuarios?: Users;

  usuariosList: any[] = [];

  public snackbarMessage: string = '';

  constructor(
    private usuariosService: UsuariosService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.usuariosService.getUsers()
      .subscribe( usuarios  => {
        this.usuarios = usuarios;
        this.usuariosList = this.usuarios!.usuarios;
      })
  }

  registrarUsuario( usuario: User ): void {
    this.usuariosService.registrarUsuario( usuario )
      .subscribe( usuario => {
        this.launchSnackbar( usuario.msg );
        this.usuariosList!.unshift(usuario.data);
      })
  }

  public success: boolean = false;
  launchSnackbar( message: string ) {
    this.snackbarMessage = message;
    this.success = true;

    setTimeout(() => {
      this.success = false;
    }, 3000);
  }

  onCancel() {
    this.registerForm.reset();
  }

  public isActive: boolean = false;
  public usuarioSeleccionado?: User;
  initModalContent( usuario: User ) {
    this.usuarioSeleccionado = usuario;
    this.isActive = true;
  }

  removeModalContent() {
    this.isActive = false;
  }

  closeModal() {
    this.removeModalContent();
  }


}
