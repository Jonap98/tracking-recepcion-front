import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  public loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  onLogin(): void {
    if( this.loginForm.invalid ) {
      this.launchSnackbar('Inicio de sesión inválido, por favor revise sus credenciales nuevamente');

      this.loginForm.reset();
      return;
    }

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe( user => {
        this.router.navigate(['/']);
      })
  }

  public success: boolean = false;
  public snackbarMessage: string = '';

  launchSnackbar( message: string ) {
    this.snackbarMessage = message;
    this.success = true;

    setTimeout(() => {
      this.success = false;
    }, 3000);
  }

}
