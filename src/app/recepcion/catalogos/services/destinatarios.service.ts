import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Area } from '../interfaces/area.interface';
import { environments } from '../../../../environments/environments';
import { Observable } from 'rxjs';
import { Destinatario, Destinatarios } from '../interfaces/destinatario.interface';

@Injectable({providedIn: 'root'})
export class DestinatariosService {

  private urlBase: string = environments.urlBase;

  constructor( private http: HttpClient ) { }

  getDestinatarios(): Observable<Destinatarios> {
    return this.http.get<Destinatarios>(`${this.urlBase}/destinatarios`);
  }

  registrarDestinatario( destinatario: Destinatario ): Observable<any> {
    const resp = this.http.post(`${this.urlBase}/destinatarios/create`, destinatario);

    return resp;
  }

    editarDestinatario( id: number, nombre: string, correo: string, area: string ) {
    const data = {
      "id": id,
      "nombre": nombre,
      "correo": correo,
      "area": area,
    };

    const resp = this.http.post(`${this.urlBase}/destinatarios/update`, data);

    return resp;
  }

}
