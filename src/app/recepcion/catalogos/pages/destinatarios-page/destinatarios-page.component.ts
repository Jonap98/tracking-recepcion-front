import { Component, OnInit } from '@angular/core';
import { Destinatario, Destinatarios } from '../../interfaces/destinatario.interface';
import { DestinatariosService } from '../../services/destinatarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-destinatarios-page',
  templateUrl: './destinatarios-page.component.html',
  styleUrls: ['./destinatarios-page.component.css'],
})
export class DestinatariosPageComponent implements OnInit {

  public destinatarioForm: FormGroup = this.fb.group({
    id_destinatario: [0],
    nombre: ['', Validators.required],
    correo: [''],
    area: ['', Validators.required],
  });

  public destinatarios?: Destinatarios;

  destinatariosList: any[] = [];

  public snackbarMessage: string = '';

  constructor(
    private destinatariosService: DestinatariosService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.destinatariosService.getDestinatarios()
      .subscribe( destinatarios => {
        this.destinatarios = destinatarios;
        this.destinatariosList = this.destinatarios!.destinatarios;
      })
  }

  registrarDestinatario( destinatario: Destinatario ): void {
    this.destinatariosService.registrarDestinatario( destinatario )
      .subscribe( destinatario => {
        this.launchSnackbar(destinatario.msg);
        this.destinatariosList!.unshift( destinatario.data );
      })
  }

  public id_destinatario: number = 0;
  public nombre: string = '';
  public correo: string = '';
  public area: string = '';
  setDestinatarioInfo( destinatario: Destinatario ) {
    this.id_destinatario = destinatario.id;
    this.nombre = destinatario.nombre;
    this.correo = destinatario.correo;
    this.area = destinatario.area;
    this.destinatarioForm.value.id_destinatario = this.id_destinatario;
    this.destinatarioForm.value.nombre = this.nombre;
    this.destinatarioForm.value.correo = this.correo;
    this.destinatarioForm.value.area = this.area;

  }

  onSubmit() {
    this.nombre = this.destinatarioForm.value.nombre;
    this.correo = this.destinatarioForm.value.correo;
    this.area = this.destinatarioForm.value.area;
    this.destinatariosService.editarDestinatario(
      this.id_destinatario,
      this.nombre,
      this.correo,
      this.area,
    )
    .subscribe( destinatario => {
      console.log(destinatario);
    });

    // this.destinatarioForm.reset()
  }

  onCancel() {
    this.destinatarioForm.reset();
  }

  public success: boolean = false;
  launchSnackbar( message: string ) {
    this.snackbarMessage = message;
    this.success = true;

    setTimeout(() => {
      this.success = false;
    }, 3000);
  }

}
