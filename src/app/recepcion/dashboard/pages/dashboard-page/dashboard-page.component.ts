import { Component, OnInit } from '@angular/core';
import { Paquete, Paquetes } from '../../interfaces/paquete.interface';
import { DashboardService } from '../../services/dashboard.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {

  // public paquetes: Paquete[] = [];
  public paquetes?: Paquetes;
  public paqs?: Paquete[];

  public statusForm: FormGroup = this.fb.group({
    status: ['']
  });

  constructor(
    private dashboardService: DashboardService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.dashboardService.getPaquetes()
      .subscribe( paquetes => {
        console.log(paquetes);
        this.paquetes = paquetes;

        // return;
      });
  }

  dashboardFilters(): void {
    this.dashboardService.getPaquetesFilters(this.statusForm.value.status)
      .subscribe( paquetes => {
        // console.log(paquetes);
        console.log(this.statusForm.value);

        // this.paquetes = paquetes;
        // this.paquetes!.paquetes.map(map => map = paquetes)
        // this.paquetes!.paquetes.pop();
        this.paquetes!.paquetes.splice(0, this.paquetes!.paquetes.length);

        paquetes.paquetes.forEach(element => {

          this.paquetes!.paquetes.push(element)
        });
      });
  }

  regPack( paquete: Paquete ): void {

    console.log('En dashboard component');
    console.log(paquete);

    this.dashboardService.registrarPaquete( paquete )
      .subscribe( paquetes => {
        console.log(paquetes.msg);
        console.log(paquetes.data);

        this.paquetes!.paquetes.unshift(paquetes.data);
      })
  }


}
