import { Component, OnInit } from '@angular/core';
import { Paquete, Paquetes } from '../../interfaces/paquete.interface';
import { DashboardService } from '../../services/dashboard.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosTarjetaService } from '../../../catalogos/services/usuarios-tarjeta.service';
import { AreaService } from 'src/app/recepcion/catalogos/services/areas.service';
import { Area } from 'src/app/recepcion/catalogos/interfaces/area.interface';
import { Paqueteria } from 'src/app/recepcion/catalogos/interfaces/paqueteria.interface';
import { PaqueteriasService } from 'src/app/recepcion/catalogos/services/paqueterias.service';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {

  public pqs: any[] = [];
  public paquetes?: Paquetes;

  public snackbarMessage: string = '';
  public isAuthenticated: boolean = false;
  public authOptions: any[] = [];

  public today: Date = new Date();
  public todayFormatted = formatDate(this.today, 'MM/dd/yyyy', 'en-US');

  public statusForm: FormGroup = this.fb.group({
    status: ['']
  });

  constructor(
    private dashboardService: DashboardService,
    private usuariosTarjetaService: UsuariosTarjetaService,
    private areasService: AreaService,
    private paqueteriasService: PaqueteriasService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const checkAuth: boolean = localStorage.getItem('token') ? true : false;
    this.isAuthenticated = checkAuth;

    this.dashboardService.getPaquetes()
      .subscribe( paquetes => {
        this.paquetes = paquetes;
        this.pqs = this.paquetes!.paquetes;

        this.pqs.forEach(pack => {

          const fechaFormatted = formatDate(pack.fecha, 'MM/dd/yyyy hh:mm', 'en-US');
          pack.fecha = fechaFormatted;

          const dia = formatDate(pack.fecha, 'MM/dd/yyyy', 'en-US');

          const diff = this.diferenciaEntreDiasEnDias(new Date(dia), new Date(this.todayFormatted));

          pack.diferencia = diff;
        });
      });

  }


  diferenciaEntreDiasEnDias(a: Date, b: Date): any{
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    const diff = utc2 - utc1;

    const difinsecs = diff / 1000;

    const diffinhours = difinsecs / 3600;

    const diffInDays = diffinhours / 24;

    return diffInDays;
  }


  dashboardFilters(): void {
    this.dashboardService.getPaquetesFilters(this.statusForm.value.status)
      .subscribe( paquetes => {
        this.paquetes = paquetes;
        this.pqs = this.paquetes!.paquetes;

        this.pqs.forEach(pack => {

          const fechaFormatted = formatDate(pack.fecha, 'MM/dd/yyyy hh:mm', 'en-US');
          pack.fecha = fechaFormatted;

          const dia = formatDate(pack.fecha, 'MM/dd/yyyy', 'en-US');

          const diff = this.diferenciaEntreDiasEnDias(new Date(dia), new Date(this.todayFormatted));

          pack.diferencia = diff;
        });
      });
  }

  regPack( paquete: Paquete ): void {
    this.dashboardService.registrarPaquete( paquete )
      .subscribe( paquetes => {
        this.launchSnackbar(paquetes.msg);

        this.pqs!.unshift(paquetes.data);
      })
  }


  public areas?: Area[];
  public paqueterias?: Paqueteria[];
  registrarPaquete() {
    this.areasService.getAreas()
      .subscribe( areas => {
        this.areas = areas.areas;
    });

    this.paqueteriasService.getPaqueterias()
      .subscribe( paqueterias => {
        this.paqueterias = paqueterias.paqueterias;
    });
  }

  getAreas() {
    this.areasService.getAreas()
      .subscribe( areas => {
        this.areas = areas.areas;
    });
  }

  getPaqueterias() {
    this.paqueteriasService.getPaqueterias()
      .subscribe( paqueterias => {
        this.paqueterias = paqueterias.paqueterias;
    });
  }

  public isActive: boolean = false;
  public isRecibidoActive: boolean = false;


  public paqueteSeleccionado?: Paquete;
  initModalContent( paquete: Paquete ) {
    this.paqueteSeleccionado = paquete;
    this.isActive = true;

    if( !this.areas )
      this.getAreas();

    if( !this.paqueterias )
      this.getPaqueterias();
  }

  public valor: string = '';
  public id_paquete: number = 0;
  clickButton(pack: any) {
    this.paqueteSeleccionado = pack;
    this.isRecibidoActive = true;
    this.valor = pack.numero_de_guia;
    this.id_paquete = pack.id;
  }

  removeModalContent() {
    this.isActive = false;
    this.isRecibidoActive = false;
  }

  // Editar paquete
  closeModal() {
    this.removeModalContent();
  }

  // Entregar paquete
  closeModal2(pack: any) {
    this.pqs = this.pqs.filter( (val) => val.id !== pack.data.id )
    this.launchSnackbar(pack.msg);
    this.removeModalContent();
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
