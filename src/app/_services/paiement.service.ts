import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './ApiResponse';
import { Bordero } from '../employer-board/Bordero';
import { Paiement } from '../employer-board/Paiement';
import { Somme } from '../employer-board/Somme';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  private API_URL= environment.payUrl;
  constructor(private http: HttpClient) { }

  public paiementCarte(reclamation:Object):Observable<Object>{
    return this.http.post(this.API_URL+'addpaiementcarte',reclamation,{responseType:'text' as 'json'});
  }
  createpaycart(employee: Object): Observable<Object> {
    return this.http.post(`${this.API_URL}addpaycart`, employee);
  }
  createpaycheq(employee: Object): Observable<Object> {
    return this.http.post(`${this.API_URL}addpaycheq`, employee);
  }
  createpayesp(employee: Object): Observable<Object> {
    return this.http.post(`${this.API_URL}addpayesp`, employee);
  }

  createbbordero(employee: Object): Observable<Object> {
    return this.http.post(`${this.API_URL}bordero`, employee);
  }

  gettotal(){
    return this.http.get(`${this.API_URL}total`)
  }

  getallpaiement(): Observable<Paiement[]>{
    return this.http.get<Paiement[]>(`${this.API_URL}payerall`);
  }

  getsumbyagent(): Observable<Paiement[]>{
    return this.http.get<Paiement[]>(`${this.API_URL}bord`);
  }
  getsum(caissier: Object) {
    return this.http.get(`${this.API_URL}bord/`,caissier);
  }

  get(id: any) {
    return this.http.get(`${this.API_URL}paye/${id}`);
  }
  getcheq(id: any) {
    return this.http.get(`${this.API_URL}payechq/${id}`);
  }
  getesp(id: any) {
    return this.http.get(`${this.API_URL}payesp/${id}`);
  }
}
