import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './ApiResponse';
import { Facture } from '../employer-board/list-facture/Facture';
@Injectable({
  providedIn: 'root'
})
export class FactureService {

  private API_URL= environment.factureUrl;
  constructor(private http: HttpClient) { }

  getAllusers()  {
    return this.http.get(this.API_URL+'factures')
  }
  getAllfacture(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.API_URL+'factures')
  }

  getFactureList(): Observable<Facture[]>{
    return this.http.get<Facture[]>(`${this.API_URL}factures`);
  }

  createfacture(employee: Object): Observable<Object> {
    return this.http.post(`${this.API_URL}addfact`, employee);
  }
  get(id: any) {
    return this.http.get(`${this.API_URL}fact/${id}`);
  }

  getsumpay(){
    return this.http.get(`${this.API_URL}countpay`)
  }




  createStudent(facture: object): Observable<object> {
    return this.http.post(`${this.API_URL}addfact` , facture);
  }
  create(data: any): Observable<any> {
    return this.http.post(`${this.API_URL}addfact`, data);
  }
}
