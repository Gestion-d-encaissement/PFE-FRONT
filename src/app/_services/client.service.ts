import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './ApiResponse';
import { Facture } from '../employer-board/list-facture/Facture';
import { Client } from '../employer-board/list-facture/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private API_URL= environment.clientUrl;
  constructor(private http: HttpClient) { }

  getClientList(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.API_URL}clients`);
  }
}
