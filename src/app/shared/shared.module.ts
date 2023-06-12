import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';



@NgModule({
  declarations: [
    Error404PageComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SnackbarComponent
  ]
})
export class SharedModule { }
