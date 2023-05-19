import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './ApiResponse';
import { User } from '../admin-board/usermanagment/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private API_URL= environment.adminUrl;
  constructor(private http: HttpClient) { }
  getUsersList(): Observable<User[]>{
    return this.http.get<User[]>(`${this.API_URL}Users`);
  }
  getAllusers()  {
    return this.http.get(this.API_URL+'Users')
  }
  getAllusers2(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.API_URL+'Users')
  }
  getAllusers3(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.API_URL+'Users')
  }
  getAllClient(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL+'Users')
  }


  deleteUser(id: number): Observable<Object>{
    return this.http.delete(`${this.API_URL}Users/${id}`);
  }

  updateUser2(user:Object ): Observable<Object>{
    return this.http.put(this.API_URL+'updateuser',user,{responseType:'text' as 'json'});
  }
  get(id: any): Observable<User> {
    return this.http.get(`${this.API_URL}user/${id}`);
  }
  findByTitle(title: any): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}?title=${title}`);
  }
}
