import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environments } from 'src/environments/environments';
import { environments } from '../../../environments/environments';
import { User, Users } from '../interfaces/user.interface';
import { Observable, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

  private urlBase = environments.urlBase;
  private user?: User;

  constructor(
    private http: HttpClient
  ) { }

  get currentUser() {
    if( !this.user ) return undefined;

    return structuredClone( this.user );
  }

  getUsers(): Observable<Users> {
    return this.http.get<Users>(`${this.urlBase}/usuarios`);
  }

  register( name: string, email: string, password: string ): Observable<any> {
    const data = {
      name,
      email,
      password,
    };

    return this.http.post<User>(`${this.urlBase}/register`, data)
      .pipe(
        tap( user => this.user = user  ),
        tap( user => {
          // console.log('From auth');
          // console.log(user)
          // console.log(user.token)
        }),
      )
  }

  login( email: string, password: string ): Observable<User> {
    const data = {
      email,
      password,
    };

    return this.http.post<User>(`${this.urlBase}/login`, data)
      .pipe(
        tap( user => this.user = user  ),
        tap( user => {
          // console.log('From auth');
          // console.log(user)
          // console.log(user.token)
        }),
        tap( user => localStorage.setItem( 'token', user.token!.toString() ) ),
        tap( user => localStorage.setItem( 'usuario', user.user!.name!.toString() ) )
      )
  }

  checkAuthentication(): Observable<boolean> {
    if( !localStorage.getItem('token') ) return of(false);

    const token = localStorage.getItem('token');

    return of(true);

    // return this.http.get<User>(`${this.urlBase}/auth`)
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }

}
