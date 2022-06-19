import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../models/filme.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  constructor(private http: HttpClient) { }

  public filmes: Array<Filme> =[

  ]

  public getAll(): Observable<Filme[]> {
    return this.http.get<Filme[]>('http://localhost:3000/filmes');
  }

  public get(id: number): Observable<Filme> {
    return this.http.get<Filme>('http://localhost:3000/filmes/'+id);
  }

  public add(filme: Filme): Observable<any> {
    const filmeJSON = JSON.stringify(filme);

    return this.http.post<Filme>('http://localhost:3000/filmes', filmeJSON, httpOptions);
  }

  public update(filme: Filme): Observable<any> {
    const id = filme.id;
    const filmeJSON = JSON.stringify(filme);
    return this.http.put<Filme>('http://localhost:3000/filmes/'+id, filme, httpOptions);
  }

  public delete(id: number) {
    return this.http.delete('http://localhost:3000/filmes/'+id);
  }




}
