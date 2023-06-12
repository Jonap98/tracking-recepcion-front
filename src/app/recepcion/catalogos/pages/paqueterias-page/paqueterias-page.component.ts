import { Component } from '@angular/core';
import { Paqueterias } from '../../interfaces/paqueteria.interface';
import { PaqueteriasService } from '../../services/paqueterias.service';

@Component({
  selector: 'app-paqueterias-page',
  templateUrl: './paqueterias-page.component.html',
  styleUrls: ['./paqueterias-page.component.css'],
})
export class PaqueteriasPageComponent {

  public paqueterias?: Paqueterias;

  constructor(
    private paqueteriasService: PaqueteriasService,
  ) {}

  ngOnInit(): void {
    this.paqueteriasService.getPaqueterias()
      .subscribe( paqueterias => {
        this.paqueterias = paqueterias;
      })
  }

}
