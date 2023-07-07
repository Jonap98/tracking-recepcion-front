import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environments } from 'src/environments/environments';
import { environments } from '../../../../environments/environments';
import { UsuarioTarjeta } from '../interfaces/usuario-tarjeta.interface';

@Injectable({providedIn: 'root'})
export class UsuariosTarjetaService {

  private urlBase: string = environments.urlBase;

  constructor(
    private http: HttpClient
  ) { }

  getUsuariosFilters( numero_tarjeta: string ): Observable<any> {
    return this.http.get(`${this.urlBase}/usuarios-tarjeta/${numero_tarjeta}/filters`);
  }

  registrarUsuario( numero_tarjeta: string, nombre: string ): Observable<any> {
    const usuario = {
      "numero_tarjeta": numero_tarjeta,
      "nombre": nombre
    };

    const resp = this.http.post(`${this.urlBase}/usuarios-tarjeta/store`, usuario);

    return resp;
  }

}
