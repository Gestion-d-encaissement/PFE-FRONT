import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginemployer',
  templateUrl: './loginemployer.component.html',
  styleUrls: ['./loginemployer.component.css']
})
export class LoginemployerComponent   implements OnInit{
  showAdminBoard = false;
  msgdirect=false;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private route:Router) { }

  ngOnInit()  {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.loginemp(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);


        this.roles = this.tokenStorage.getUser().roles;
        if(this.roles.includes('ROLE_EMPLOYE')){
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.reloadPage();
        }else{
          this.isLoginFailed = true;
          this.isLoggedIn = false;
          this.msgdirect=true
          this.tokenStorage.signOut();
        }

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {

    this.route.navigateByUrl('/employer')

  }
}
