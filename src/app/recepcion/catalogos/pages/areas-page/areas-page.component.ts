import { Component, OnInit } from '@angular/core';
import { Area, Areas } from '../../interfaces/area.interface';
import { AreaService } from '../../services/areas.service';

@Component({
  selector: 'app-areas-page',
  templateUrl: './areas-page.component.html',
  styleUrls: ['./areas-page.component.css'],
})
export class AreasPageComponent implements OnInit {

  public areas?: Areas;

  constructor(
    private areasService: AreaService,
  ) {}

  ngOnInit(): void {
    this.areasService.getAreas()
      .subscribe( areas => {
        this.areas = areas;
      });
  }

}
