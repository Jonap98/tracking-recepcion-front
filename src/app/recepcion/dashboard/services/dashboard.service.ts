import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from "rxjs";

// import { environments } from 'src/environments/environments';
import { environments } from '../../../../environments/environments';
import { Paquete, Paquetes } from '../interfaces/paquete.interface';


@Injectable({providedIn: 'root'})
export class DashboardService {

  private urlBase: string = environments.urlBase;

  constructor( private http: HttpClient ) { }

  getPaquetes(): Observable<Paquetes> {
    return this.http.get<Paquetes>(`${this.urlBase}/paquetes`);
  }

  getPaquetesFilters( status: string ): Observable<Paquetes> {
    const data = {
      "status": status
    };

    return this.http.post<Paquetes>(`${this.urlBase}/paquetes/filters`, data);
  }

  registrarPaquete( paquete: Paquete ): Observable<any> {
    const resp = this.http.post(`${this.urlBase}/paquetes/create`, paquete);

    return resp;
  }

  recibirPaquete( id: number, empleado: string ): Observable<any> {
    const data = {
      "id": id,
      "empleado": empleado
    };

    const resp = this.http.post(`${ this.urlBase }/paquetes/update`, data );

    return resp;
  }

  editarPaquete(
    id: number,
    numero_de_guia: string,
    paqueteria: string,
    quien_captura: string,
    usuario: string,
    correo: string,
    area: string,
    extension: string
  ) {
    const data = {
      "id": id,
      "numero_de_guia": numero_de_guia,
      "paqueteria": paqueteria,
      "quien_captura": quien_captura,
      "usuario": usuario,
      "correo": correo,
      "area": area,
      "extension": extension,
    };

    const resp = this.http.post(`${this.urlBase}/paquetes/update-fields`, data);

    return resp;
  }

}
