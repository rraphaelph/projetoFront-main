import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme.model';
import { FilmeService } from '../services/filme.service';
@Component({
  selector: 'app-tela-filmes',
  templateUrl: './tela-filmes.component.html',
  styleUrls: ['./tela-filmes.component.css']
})
export class TelaFilmesComponent implements OnInit {

  public filmes: Array<Filme> = [];

  constructor( private filmeServ: FilmeService) { }

  ngOnInit(): void {
      this.filmeServ.getAll().subscribe( (filmes: Filme[])=> {
      this.filmes = filmes;
    });

  }
}
