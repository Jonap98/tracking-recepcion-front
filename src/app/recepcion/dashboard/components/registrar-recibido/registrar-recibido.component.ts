import { Component, Input } from '@angular/core';

@Component({
  selector: 'registrar-recibido',
  templateUrl: './registrar-recibido.component.html',
  styleUrls: ['./registrar-recibido.component.css']
})
export class RegistrarRecibidoComponent {

  @Input()
  public valor: string = '';

}
