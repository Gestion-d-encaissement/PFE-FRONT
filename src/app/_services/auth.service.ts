import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL= environment.authUrl;
  constructor(private http: HttpClient) { }
  getcaiiser(id: any) {
    return this.http.get(`${this.API_URL}caissier/${id}`);
  }

  login(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(this.API_URL + 'signinadmin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  logincaisser(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(this.API_URL + 'signinCais', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
  loginemp(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(this.API_URL + 'signinEmp', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: { username: any; codeagence: any; password: any;nom: any; prenom: any;matricule: any;  }): Observable<any> {
    return this.http.post(this.API_URL + 'signupad', {
      username: user.username,
      codeagence: user.codeagence,


      password: user.password,
      nom: user.nom,
      prenom: user.prenom,
      matricule: user.matricule
    }, httpOptions);
  }


  registercai(user: { username: any; codeagence: any; password: any;nom: any; prenom: any;matricule: any;agence: any;   }): Observable<any> {
    return this.http.post(this.API_URL + 'signupcai', {
      username: user.username,
      codeagence: user.codeagence,


      password: user.password,
      nom: user.nom,
      prenom: user.prenom,
      matricule: user.matricule,
      agence: user.agence,


    }, httpOptions);
  }
  registeremp(user: { username: any; codeagence: any; password: any;nom: any; prenom: any;matricule: any;agence: any;   }): Observable<any> {
    return this.http.post(this.API_URL + 'signupemp', {
      username: user.username,
      codeagence: user.codeagence,


      password: user.password,
      nom: user.nom,
      prenom: user.prenom,
      matricule: user.matricule,
      agence: user.agence,


    }, httpOptions);
  }
}
