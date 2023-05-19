import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgenceService } from 'src/app/_services/agence.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Agence } from '../agence-managment/Agence';
import { User } from '../usermanagment/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSuccessful2=false;
  isSignUpFailed = false;
  errorMessage = '';
  registerForm:any = FormGroup;
  submitted = false;
  Caisser:boolean = true
  Employer:boolean = false
  agences?: Agence[]= []  ;
  fact: User = new User();
  constructor(private formBuilder: FormBuilder,private authService: AuthService,private agenceservice:AgenceService) { }

  ngOnInit(): void {
   this.getagence();
  }
  onclick()
  { this.Caisser = !this.Caisser;
     //not equal to condition
    this.Employer = !this.Employer
  }

  private getagence(){
    this.agenceservice.getAgenceList().subscribe(data => {
      this.agences = data;
      console.log(data )
    });
  }

  onSubmit() {
    this.authService.registercai(this.form).subscribe(
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
  onSubmit2() {
    this.authService.registeremp(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = false;
        this.isSuccessful2 = true;
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
