import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../../environments/environments';
import { Observable } from 'rxjs';
import { Destinatario, Destinatarios } from '../interfaces/destinatario.interface';
import { User, Users } from 'src/app/auth/interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class UsuariosService {

  private urlBase: string = environments.urlBase;

  constructor( private http: HttpClient ) { }

  getUsers(): Observable<Users> {
    return this.http.get<Users>(`${this.urlBase}/usuarios`);
  }

  registrarUsuario( usuario: User ): Observable<any> {
    const resp = this.http.post(`${this.urlBase}/register`, usuario);

    return resp;
  }

    editarUsuario( id: number, nombre: string, correo: string ) {
    const data = {
      "id": id,
      "name": nombre,
      "email": correo,
    };

    const resp = this.http.post(`${this.urlBase}/usuarios/update`, data);

    return resp;
  }

}
