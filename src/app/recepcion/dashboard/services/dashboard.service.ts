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

}
