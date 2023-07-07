import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Area, Areas } from '../../interfaces/area.interface';

@Component({
  selector: 'registrar-area',
  templateUrl: './registrar-area.component.html',
  styleUrls: ['./registrar-area.component.css']
})
export class RegistrarAreaComponent {

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

  onSubmit(): void {
    if( this.areaForm.invalid ) return;

    this.onArea.emit( this.areaForm.value as Area );

    this.areaForm.reset();
  }

}
