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


}
