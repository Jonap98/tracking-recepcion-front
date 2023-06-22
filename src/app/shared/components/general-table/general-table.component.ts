import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paquetes } from 'src/app/recepcion/dashboard/interfaces/paquete.interface';
import { Customer, Representative } from 'src/app/recepcion/dashboard/interfaces/temp.interface';
import { DashboardService } from 'src/app/recepcion/dashboard/services/dashboard.service';

@Component({
  selector: 'general-table',
  templateUrl: './general-table.component.html',
  styleUrls: ['./general-table.component.css']
})
export class GeneralTableComponent implements OnInit{

  public recibirPackForm: FormGroup = this.fb.group({
    id_paquete: [0],
    empleado_recibe: ['', Validators.required]
  });

  @Input()
  informationData?: Paquetes;

    constructor(
      private fb: FormBuilder,
      private dashboardService: DashboardService
    ) {}

    public titulo: string = '';

    paqs: any[] = [];

    ngOnInit() {
      this.paqs = this.informationData!.paquetes;
    }

    public valor: string = '';
    public title: string = '';
    public id_paquete: number = 0;
    clickButton(pack: any) {
      this.title = pack.numero_de_guia;
      this.valor = pack.numero_de_guia;
      this.id_paquete = pack.id;
      this.recibirPackForm.value.id_paquete = this.id_paquete;
    }

    onSubmit() {
      this.dashboardService.recibirPaquete( this.id_paquete, this.recibirPackForm.value.empleado_recibe  )
        .subscribe( paquete => {
          console.log(paquete);
        })

      this.recibirPackForm.reset();
    }

    onCancel() {
      this.recibirPackForm.reset();
    }

}
