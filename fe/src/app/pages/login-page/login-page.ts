import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from '../../services/auth';
import {LoginRequest} from '../../models/auth';

@Component({
  selector: 'app-login-page',
    imports: [
        ReactiveFormsModule,
        RouterLink
    ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  private authservice = inject(AuthService)
  private router = inject(Router)

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })






  onSubmit(){
    if (this.loginForm.invalid){
      return;
    }

    const credentials: LoginRequest = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!
    };

    this.authservice.login(credentials).subscribe({
      next: res => {
        console.log('Login ok', res)
        localStorage.setItem('currentUser', JSON.stringify(res.user));
        alert("Utente Salvato Con successo Rendirect")
        this.router.navigate(['/dashboard'])
      },
      error: (err) => console.error('Errore login: ', err)
    })


  }

}
