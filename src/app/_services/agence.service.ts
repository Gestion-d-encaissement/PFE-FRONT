import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './ApiResponse';
import { Agence } from '../admin-board/agence-managment/Agence';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  private API_URL= environment.agenceUrl;
  constructor(private http: HttpClient) { }

  getAgenceList(): Observable<Agence[]>{
    return this.http.get<Agence[]>(`${this.API_URL}agences`);
  }
  getAllagence(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.API_URL+'agences')
  }
  createagence(agence: Object): Observable<Object> {
    return this.http.post(`${this.API_URL}addagence`, agence);
  }

  deleteAgence(id: number): Observable<Object>{
    return this.http.delete(`${this.API_URL}Agence/${id}`);
  }

  updateAgence(user:Object ): Observable<Object>{
    return this.http.put(this.API_URL+'updatagence',user,{responseType:'text' as 'json'});
  }

}
