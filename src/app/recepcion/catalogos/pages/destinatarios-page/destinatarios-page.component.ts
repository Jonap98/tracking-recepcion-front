import { Component, OnInit } from '@angular/core';
import { Destinatarios } from '../../interfaces/destinatario.interface';
import { DestinatariosService } from '../../services/destinatarios.service';

@Component({
  selector: 'app-destinatarios-page',
  templateUrl: './destinatarios-page.component.html',
  styleUrls: ['./destinatarios-page.component.css'],
})
export class DestinatariosPageComponent implements OnInit {

  public destinatarios?: Destinatarios;

  constructor(
    private destinatariosService: DestinatariosService,
  ) {}

  ngOnInit(): void {
    this.destinatariosService.getDestinatarios()
      .subscribe( destinatarios => {
        this.destinatarios = destinatarios;
      })
  }

}
