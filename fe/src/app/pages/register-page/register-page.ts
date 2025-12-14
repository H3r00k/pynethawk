import {Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth';

@Component({
  selector: 'app-register-page',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {
  private authservice = inject(AuthService)
  private router = inject(Router)

registerForm: FormGroup = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
  email: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  confirmPassword: new FormControl('', [Validators.required])

})

  onSubmit(){
    if (this.registerForm.invalid) {
      return;
    }

    const {password, confirmPassword } = this.registerForm.value;

    if (password !== confirmPassword) {
      this.registerForm.get('confirmPassword')?.setErrors({ mismatch: true});
      return;
    }

    const userData = {
      name: this.registerForm.value.name,
      lastname: this.registerForm.value.lastname,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };

    this.authservice.register(userData).subscribe({
      next: (res) => {
        console.log('ok: ', res);
        this.router.navigate(['/login'])
      },
      error: (err) => console.error('Errore', err)
    });



  }

}
