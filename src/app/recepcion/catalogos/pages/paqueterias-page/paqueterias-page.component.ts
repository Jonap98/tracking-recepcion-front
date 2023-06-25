import { Component, OnInit } from '@angular/core';
import { Paqueteria, Paqueterias } from '../../interfaces/paqueteria.interface';
import { PaqueteriasService } from '../../services/paqueterias.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'paqueterias-page',
  templateUrl: './paqueterias-page.component.html',
  styleUrls: ['./paqueterias-page.component.css'],
})
export class PaqueteriasPageComponent implements OnInit {

  public paqueteriaForm: FormGroup = this.fb.group({
    id_paqueteria: [0],
    paqueteria: ['', Validators.required]
  });

  public paqueterias?: Paqueterias;

  paqueteriasList: any[] = [];

  public snackbarMessage: string = '';

  constructor(
    private paqueteriasService: PaqueteriasService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.paqueteriasService.getPaqueterias()
      .subscribe( paqueterias => {
        this.paqueterias = paqueterias;
        this.paqueteriasList = this.paqueterias!.paqueterias;
      });
  }

  // editarPaqueteria( paqueteria: Paqueteria ): void {
  //   this.paqueteriasService.editarPaqueteria( paqueteria )
  //     .subscribe( paqueteria => {
  //       console.log(paqueteria);
  //     });
  // }

  registrarPaqueteria( paqueteria: Paqueteria ): void {
    this.paqueteriasService.registrarPaqueteria( paqueteria )
      .subscribe( paqueteria => {
        this.launchSnackbar(paqueteria.msg);
        this.paqueteriasList!.unshift( paqueteria.data )
      });
  }

  public id_paqueteria: number = 0;
  public paqueteria: string = '';
  setPaqueteriaInfo( paqueteria: Paqueteria ): void {
    this.id_paqueteria = paqueteria.id;
    this.paqueteria = paqueteria.paqueteria;
    this.paqueteriaForm.value.id_paqueteria = this.id_paqueteria;
    this.paqueteriaForm.value.paqueteria = this.paqueteria;
  }

  onSubmit() {
    this.paqueteriasService.editarPaqueteria( this.id_paqueteria, this.paqueteriaForm.value.paqueteria )
      .subscribe( paqueteria => {
        console.log(paqueteria);
        location.reload();
      })

      this.paqueteriaForm.reset();

  }

  public success: boolean = false;
  launchSnackbar( message: string ) {
    this.snackbarMessage = message;
    this.success = true;

    setTimeout(() => {
      this.success = false;
    }, 3000);
  }

}
