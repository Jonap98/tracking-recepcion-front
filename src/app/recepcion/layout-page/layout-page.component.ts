import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'recepcion-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Áreas', icon: 'area', url: './catalogos/areas' },
    { label: 'Destinatarios', icon: 'area', url: './catalogos/destinatarios' },
    { label: 'Paqueterías', icon: 'area', url: './catalogos/paqueterias' },
  ];

  constructor(
    private router: Router
  ) {}

  // *ngFor="let item of sidebarItems"
  //       [routerLink]="item.url"
  //       (click)="sidenav.toggle()"

}
