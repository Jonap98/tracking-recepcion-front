import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'recepcion-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})


export class LayoutPageComponent implements OnInit {

  public isAuthenticated: boolean = false;

  public sidebarItems: any[] = [];
  public navbarItems: any[] = [];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const checkAuth: boolean = localStorage.getItem('token') ? true : false;
    this.isAuthenticated = checkAuth;

    this.sidebarItems = this.isAuthenticated ? [
      { label: 'Áreas', icon: 'area', url: './catalogos/areas' },
      { label: 'Destinatarios', icon: 'area', url: './catalogos/destinatarios' },
      { label: 'Paqueterías', icon: 'area', url: './catalogos/paqueterias' },
      { label: 'Administradores', icon: 'area', url: './catalogos/usuarios' },
    ]
    : [];

    this.navbarItems = !this.isAuthenticated ? [
      { label: 'Login', icon: 'area', url: '../auth' },
    ] : [];

  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['./auth']);
  }

}
