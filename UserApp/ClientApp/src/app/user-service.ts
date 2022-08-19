import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private authUser: boolean = false;
  private baseUrl = 'https://localhost:5001/User';
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient,
              private router: Router  ) { }

  getUser(codigo: number): Observable<any> {
    debugger
    return this.http.get(`${this.baseUrl}/${codigo}`);
  }

  createUser(usuario: Object): Observable<Object> {
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

  fazerLogin(usuario: User) {
    if (usuario.login === "SISTEMA" && usuario.senha === "candidato123") {

      this.authUser = true;

      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/'])

    } else {
      this.authUser = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }
}
