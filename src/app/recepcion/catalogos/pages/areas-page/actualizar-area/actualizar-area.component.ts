import { Component } from '@angular/core';

@Component({
  selector: 'actualizar-area',
  templateUrl: './actualizar-area.component.html',
  styleUrls: ['./actualizar-area.component.css']
})
export class ActualizarAreaComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
