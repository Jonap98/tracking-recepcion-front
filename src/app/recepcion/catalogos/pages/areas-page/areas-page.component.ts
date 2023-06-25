import { Component, OnInit } from '@angular/core';
import { Area, Areas } from '../../interfaces/area.interface';
import { AreaService } from '../../services/areas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-areas-page',
  templateUrl: './areas-page.component.html',
  styleUrls: ['./areas-page.component.css'],
})
export class AreasPageComponent implements OnInit {

  public areaForm: FormGroup = this.fb.group({
    id_area: [0],
    area: ['', Validators.required]
  });

  public areas?: Areas;

  areasList: any[] = [];

  public snackbarMessage: string = '';

  constructor(
    private areasService: AreaService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.areasService.getAreas()
      .subscribe( areas => {
        this.areas = areas;
        this.areasList = this.areas!.areas;
      });
  }


  public id_area: number = 0;
  public area: string = '';
  setAreaInfo( area: Area ): void {
    this.id_area = area.id;
    this.area = area.area;
    this.areaForm.value.id_area = this.id_area;
    this.areaForm.value.area = this.area;
  }


  registrarArea( area: Area ): void {
    this.areasService.registrarArea( area )
      .subscribe( area => {
        this.launchSnackbar(area.msg);
        this.areasList!.unshift(area.data);
      });
  }

  onSubmit() {
    // this.areasService.registrarArea( area: Area )
    //   .subscribe( area => {
    //     console.log(area);
    //     location.reload();
    //   })

      this.areaForm.reset();

  }

  onEdit() {
    this.areasService.editarArea( this.id_area, this.areaForm.value.area )
      .subscribe( area => {
        console.log(area);
        location.reload();
      });

    this.areaForm.reset();
  }

  onCancel() {
    this.areaForm.reset();
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
