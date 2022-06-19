import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme.model';
import { FilmeService } from '../services/filme.service';


@Component({
  selector: 'app-tela-entrar',
  templateUrl: './tela-entrar.component.html',
  styleUrls: ['./tela-entrar.component.css']
})
export class TelaEntrarComponent implements OnInit {
  public filmes: Array<Filme> = [];

  constructor( private filmeServ: FilmeService) { }

  ngOnInit(): void {
      this.filmeServ.getAll().subscribe( (filmes: Filme[])=> {
      this.filmes = filmes;
    });

    // this.filmes = this.filmeServ.getAll();
  }


}
