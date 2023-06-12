import { Component, OnInit } from '@angular/core';
import { Paquete, Paquetes } from '../../interfaces/paquete.interface';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {

  // public paquetes: Paquete[] = [];
  public paquetes?: Paquetes;
  public paqs?: Paquete[];

  constructor(
    private dashboardService: DashboardService,
  ) {}

  ngOnInit(): void {
    this.dashboardService.getPaquetes()
      .subscribe( paquetes => {
        console.log(paquetes);
        this.paquetes = paquetes;

        // return;
      });
  }

  public tituloMamalon: string = 'Sin título';

  changeTitle(  ): void {
    this.tituloMamalon = 'Locototeeee';
  }

  regPack( paquete: Paquete ): void {
  // regPackete( paquete: Paquete ): void {
    this.tituloMamalon = 'Titulo mamalón';

    console.log('En dashboard component');
    console.log(paquete);
    // this.paqs!.push(paquete);

    this.dashboardService.registrarPaquete( paquete )
      .subscribe( paquetes => {
        console.log(paquetes.msg);
        console.log(paquetes.data);

        this.paquetes!.paquetes.unshift(paquetes.data);
      })


    // this.dashboardService.getPaquetes()
    //   .subscribe( paquetes => {
    //     console.log(paquetes);
    //     this.paquetes = paquetes;

    //     // return;
    //   });
    // // this.paquetes = this.paquetes[0];
  }


}
