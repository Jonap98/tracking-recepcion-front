// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-general-table',
//   templateUrl: './general-table.component.html',
//   styleUrls: ['./general-table.component.css']
// })
// export class GeneralTableComponent {

// }


import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paquetes } from 'src/app/recepcion/dashboard/interfaces/paquete.interface';
import { Customer, Representative } from 'src/app/recepcion/dashboard/interfaces/temp.interface';
import { DashboardService } from 'src/app/recepcion/dashboard/services/dashboard.service';
// import { Customer, Representative } from '../../domain/customer';
// import { CustomerService } from '../../service/customerservice';

// @Component({
//     selector: 'table-customers-demo',
//     templateUrl: 'table-customers-demo.html',
//     styleUrls: ['table-customers-demo.scss']
// })
// public data = '';

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
      // private customerService: CustomerService
    ) {}

    public titulo: string = '';
    // paquetes?: Paquetes;

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
      // this.dashboardService.recibirPaquete( this.recibirPackForm.value.id_paquete, this.recibirPackForm.value.empleado_recibe  );
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
