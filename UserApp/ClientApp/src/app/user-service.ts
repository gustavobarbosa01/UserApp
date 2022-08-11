import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://localhost:5001/User';

  constructor(private http: HttpClient) { }

  getUser(codigo: number): Observable<any> {
    debugger
    return this.http.get(`${this.baseUrl}/${codigo}`);
  }

  createProduto(usuario: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, usuario);
  }

  updateUser(codigo: number, value: any): Observable<Object> {
    debugger
    return this.http.put(`${this.baseUrl}/${codigo}`, value);
  }

  deleteUser(codigo: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${codigo}`, { responseType: 'text' });
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
