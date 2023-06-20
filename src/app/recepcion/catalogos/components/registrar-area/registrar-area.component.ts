import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Area, Areas } from '../../interfaces/area.interface';

@Component({
  selector: 'registrar-area',
  templateUrl: './registrar-area.component.html',
  styleUrls: ['./registrar-area.component.css']
})
export class RegistrarAreaComponent {

  // public areaForm = new FormGroup({
  //   id: new FormControl<number | null>(null),
  //   area: new FormControl<string>(this.valores ?? '', { nonNullable: true })
  // })
  public areaForm: FormGroup = this.fb.group({
    area: ['', Validators.required]
  });

  public areas?: Areas;

  constructor(
    private fb: FormBuilder
  ) {}

  @Output()
  public onArea = new EventEmitter<Area>();

  @Input()
  public isEditing: boolean = false;

  @Input()
  public valores?: any;

  // setAreaInfo( info: any ): void {
  //   console.log('Info edit');
  //   console.log(info);
  //   this.isEditing = true
  //   // this.areaForm.reset( info )
  //   this.areaForm.value.area = 'info.area';
  // }

  onSubmit(): void {
    if( this.areaForm.invalid ) return;

    // console.log( this.formValues );

    // if( this.isEditing ) {
    //   console.log('Editando');
    //   console.log(this.valores);
    //   console.log(this.valores.area);
    // } else {
    //   console.log('Registrando');
    // }

    // console.log( this.areaForm.value );
    // this.areaForm.value.area = this.valores.area;
    // console.log( this.areaForm.value.area );

    this.onArea.emit( this.areaForm.value as Area );
  }

}
