import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-registreadmin',
  templateUrl: './registreadmin.component.html',
  styleUrls: ['./registreadmin.component.css']
})
export class RegistreadminComponent  {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
   constructor(private authService: AuthService) { }

   onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
