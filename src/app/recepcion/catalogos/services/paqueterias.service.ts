import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../../environments/environments';
import { Observable } from 'rxjs';
import { Paqueteria, Paqueterias } from '../interfaces/paqueteria.interface';

@Injectable({providedIn: 'root'})
export class PaqueteriasService {

  private urlBase: string = environments.urlBase;

  constructor( private http: HttpClient ) { }

  getPaqueterias(): Observable<Paqueterias> {
    return this.http.get<Paqueterias>(`${this.urlBase}/paqueterias`);
  }

  registrarPaqueteria( paqueteria: Paqueteria ): Observable<any> {
    const resp = this.http.post(`${this.urlBase}/paqueterias/create`, paqueteria);

    return resp;
  }

  // editarPaqueteria( paqueteria: Paqueteria ): Observable<any> {
  editarPaqueteria( id: number, paqueteria: string ): Observable<any> {
    // if( !paqueteria.paqueteria ) throw Error('El nombre es obligatorio');

    // return this.http.patch<Paqueteria>(`${ this.urlBase }/paqueterias/update`, paqueteria);
    const data = {
      "id": id,
      "paqueteria": paqueteria
    };

    const resp = this.http.post(`${ this.urlBase }/paqueterias/update`, data);
    return resp;
  }

}
