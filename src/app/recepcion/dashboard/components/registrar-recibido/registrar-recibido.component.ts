import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { UsuariosTarjetaService } from 'src/app/recepcion/catalogos/services/usuarios-tarjeta.service';
import { AreaService } from 'src/app/recepcion/catalogos/services/areas.service';
import { PaqueteriasService } from 'src/app/recepcion/catalogos/services/paqueterias.service';
import { Paquete } from '../../interfaces/paquete.interface';

@Component({
  selector: 'registrar-recibido',
  templateUrl: './registrar-recibido.component.html',
  styleUrls: ['./registrar-recibido.component.css']
})
export class RegistrarRecibidoComponent implements OnInit {

  @Input()
  public paquete?: Paquete;

  @Output()
  public close = new EventEmitter<any>();

  closeModal(): void {
    this.close.emit();
  }

  public recibirPackForm?: FormGroup;

  ngOnInit(): void {
    this.recibirPackForm = this.fb.group({
      id_paquete: [0],
      empleado_recibe: ['', Validators.required],
      numero_tarjeta: ['']
    });
  }


  constructor(
    private dashboardService: DashboardService,
    private usuariosTarjetaService: UsuariosTarjetaService,
    private areasService: AreaService,
    private paqueteriasService: PaqueteriasService,
    private fb: FormBuilder
  ) {}

  public empleado: string = '';
  public snackbarMessage: string = '';
  public usuarioRegistrado: boolean = true;
  public usuarioEncontrado: boolean = false;
  public automatico: boolean = true;
  public nombre: string = '';
  search() {
    this.usuariosTarjetaService.getUsuariosFilters( this.recibirPackForm!.value.numero_tarjeta )
      .subscribe( usuario => {
        if( usuario.data ) {
          this.automatico = true;

          this.usuarioEncontrado = true;
          this.nombre = usuario.data.nombre;
          this.recibirPackForm!.value.empleado_recibe = this.nombre;
        } else {
          this.automatico = false;
          this.usuarioRegistrado = false;
        }
      })
  }

  public pack?: any;

  onSubmit() {

    if( this.automatico ) {
      this.empleado = this.nombre;
    } else {
      this.empleado = this.recibirPackForm!.value.empleado_recibe;
      this.usuariosTarjetaService.registrarUsuario( this.recibirPackForm!.value.numero_tarjeta, this.empleado )
        .subscribe( usuario => {
          this.automatico = true;
          this.recibirPackForm!.value.empleadoRecibe = '';
        });
      }

      this.dashboardService.recibirPaquete( this.paquete!.id!, this.empleado ?? '' )
        .subscribe( paquete => {
          this.pack = paquete;
          this.close.emit(paquete);
          // this.pqs = this.pqs.filter( (val) => val.id !== paquete.data.id )
          // this.launchSnackbar(paquete.msg);
        })

        this.recibirPackForm!.reset();

  }

  onCancel() {
    this.recibirPackForm!.reset();
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
