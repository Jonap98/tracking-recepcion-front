import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { DashboardService } from '../../services/dashboard.service';
import { Paquete, Paquetes } from '../../interfaces/paquete.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'dashboard-registrar-paquete',
  templateUrl: './registrar-paquete.component.html',
  styleUrls: ['./registrar-paquete.component.css']
})

// export class RegistrarPaqueteComponent implements OnInit {
export class RegistrarPaqueteComponent {

  public paqueteForm = new FormGroup({
    // id: new FormControl<string>(''), // Nullable
    numero_de_guia: new FormControl<string>('', { nonNullable: true }),
    paqueteria: new FormControl<string>('', { nonNullable: true }),
    quien_captura: new FormControl<string>('', { nonNullable: true }),
    usuario: new FormControl<string>('', { nonNullable: true }),
    correo: new FormControl<string>('', { nonNullable: true }),
    area: new FormControl<string>('', { nonNullable: true }),
    extension: new FormControl<string>('', { nonNullable: true }),
  });

  public paquetes?: Paquetes;

  constructor(
    private dashboardService: DashboardService,
  )
  {}

  // ngOnInit(): void {
  //   this.dashboardService.getPaquetes()
  //     .subscribe( paquetes => {
  //       console.log(paquetes);
  //       this.paquetes = paquetes;

  //       // return;
  //     });
  // }

  get paqueteActual(): Paquete {
    const paquete = this.paqueteForm.value  as Paquete;

    return paquete;
  }

  // registrarPaquete(): void {

  //   if( this.paqueteForm.invalid ) return;

  //   this.dashboardService.registrarPaquete( this.paqueteActual )
  //     .subscribe( ({data}) => {
  //       console.log( data );
  //       // console.log( paquete );
  //       this.paquetes = data
  //       location.reload()
  //     })
  // }

  @Output()
  public onPaquete = new EventEmitter<Paquete>();
//   public onPaquete = new EventEmitter<any>();
//   registrarPaquete( data: any){
//     let emitData: any = {
//       colId: 'data.column.colId',
//       rowId: '1',
//       item:{}
//     };
//     if (emitData){
//         emitData.item=data;
//         this.onPaquete.emit(emitData); // Here  i need to send my data also, and it need to append to the value Data.item=data not just the Data object.
//     }
// }
  // public onValue = new EventEmitter();

  // mostrar(  ) {
  //   this.onValue.emit(  );
  // }

  // registrarPaquete( paquete: Paquete ) {
  // registrarPaquete(): void {
  onSubmit(): void {
    console.log('Registrar');
    if( this.paqueteForm.invalid ) {
      console.log('Invalid');
      return;
    }
    console.log('Valid');
    console.log(this.paqueteForm.value);

    // const paq: Paquete = this.paqueteActual;
    // const paq: any = this.paqueteForm.value;

    // const paq: any = this.paqueteForm.value as Paquete;


    // this.onPaquete.emit( paq );
    // this.onPaquete.emit( paq as Paquete );
    this.onPaquete.emit( this.paqueteForm.value as Paquete );
  }

}
