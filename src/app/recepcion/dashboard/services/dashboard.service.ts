import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from "rxjs";

import { environments } from 'src/environments/environments';
import { Paquete, Paquetes } from '../interfaces/paquete.interface';


@Injectable({providedIn: 'root'})
export class DashboardService {

  private urlBase: string = environments.urlBase;

  constructor( private http: HttpClient ) { }

  getPaquetes(): Observable<Paquetes> {
    return this.http.get<Paquetes>(`${this.urlBase}/paquetes`);
  }

  // registrarPaquete( paquete: Paquete ): void {
  registrarPaquete( paquete: Paquete ): Observable<any> {
    const resp = this.http.post(`${this.urlBase}/paquetes/create`, paquete
    // {
    //   // "id": 'id',
    //   "numero_de_guia": 'numero_de_guia',
    //   "paqueteria": 'paqueteria',
    //   "quien_captura": 'quien_captura',
    //   "usuario": 'usuario',
    //   "correo": 'correo@gmail.com',
    //   "area": 'area',
    //   "extension": 'extension',
    //   // "empleado_recibe": 'empleado_recibe',
    //   // "fecha_entregado": 'fecha_entregado',
    //   // "status": 'status',
    // }
    );

    return resp;
  }

  recibirPaquete( id: number, empleado: string ): Observable<any> {

    console.log(`Paquete recibido por: ${empleado} con id: ${id}`);

    const data = {
      "id": id,
      "empleado": empleado
    };

    const resp = this.http.post(`${ this.urlBase }/paquetes/update`, data );
    console.log(resp);

    return resp;
  }

}
