import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Area, Areas } from '../interfaces/area.interface';
import { environments } from '../../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AreaService {

  private urlBase: string = environments.urlBase;

  constructor( private http: HttpClient ) { }

  getAreas(): Observable<Areas> {
    return this.http.get<Areas>(`${this.urlBase}/areas`);
  }

  registrarArea( area: Area ): Observable<any> {
    const resp = this.http.post(`${this.urlBase}/areas/create`, area);

    return resp;
  }

}
