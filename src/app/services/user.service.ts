import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = environment.api+'users/';

  constructor(private http: HttpClient) { }

  public getAuthUsuario(user: User): Observable<User[]> {
    console.log('getAuthUsuario');

    console.log('usuario', user);

    return this.http.get<User[]>('http://localhost:3000/users?email='
                          +user.email+'&senha='+user.senha);
  }

  public add(user: User): Observable<any> {
    const usuarioJSON = JSON.stringify(user);
    return this.http.post<User>('http://localhost:3000/users', usuarioJSON, httpOptions);
  }

  public checkLogin(user: User): Observable<User[]> {
    return this.http
            .get<User[]>(this.url+'?email='+user.email+'&senha='+user.senha);
  }

}
