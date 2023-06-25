import { Component, OnInit } from '@angular/core';
import { Paquete, Paquetes } from '../../interfaces/paquete.interface';
import { DashboardService } from '../../services/dashboard.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {

  public pqs: any[] = [];
  public paquetes?: Paquetes;
  // public paqs?: any[];
  public snackbarMessage: string = '';

  public statusForm: FormGroup = this.fb.group({
    status: ['']
  });


  public recibirPackForm: FormGroup = this.fb.group({
    id_paquete: [0],
    empleado_recibe: ['', Validators.required]
  });

  constructor(
    private dashboardService: DashboardService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.dashboardService.getPaquetes()
      .subscribe( paquetes => {
        this.paquetes = paquetes;
        this.pqs = this.paquetes!.paquetes;

        console.log('Start paquetes')
        console.log(this.pqs);
        console.log('End paquetes')

        // return;
      });
  }

  dashboardFilters(): void {
    this.dashboardService.getPaquetesFilters(this.statusForm.value.status)
      .subscribe( paquetes => {

        this.paquetes = paquetes;
        this.pqs = this.paquetes!.paquetes;

        // Jala pero se rompe la referencia de la cantidad
        // console.log(this.statusForm.value);
        // this.pqs!.splice(0, this.pqs!.length);
        // paquetes.paquetes.forEach(element => {
        //   this.pqs!.push(element)
        // });
      });
  }

  regPack( paquete: Paquete ): void {
    console.log('En dashboard component');
    console.log(paquete);
    this.dashboardService.registrarPaquete( paquete )
      .subscribe( paquetes => {
        this.launchSnackbar(paquetes.msg);
        console.log(paquetes.msg);
        console.log(paquetes.data);

        this.pqs!.unshift(paquetes.data);
      })
  }


  // Tabla

  public valor: string = '';
  public id_paquete: number = 0;
  clickButton(pack: any) {
    this.valor = pack.numero_de_guia;
    this.id_paquete = pack.id;
    this.recibirPackForm.value.id_paquete = this.id_paquete;
  }

  onSubmit() {
    this.dashboardService.recibirPaquete( this.id_paquete, this.recibirPackForm.value.empleado_recibe  )
      .subscribe( paquete => {
        this.launchSnackbar(paquete.msg);
        console.log(paquete);
        console.log(paquete.data);
        console.log(this.pqs.indexOf(paquete.data));
      })

    this.recibirPackForm.reset();
  }

  onCancel() {
    this.recibirPackForm.reset();
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
