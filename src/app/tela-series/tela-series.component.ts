import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme.model';
import { FilmeService } from '../services/filme.service';

@Component({
  selector: 'app-tela-series',
  templateUrl: './tela-series.component.html',
  styleUrls: ['./tela-series.component.css']
})
export class TelaSeriesComponent implements OnInit {

  public filmes: Array<Filme> = [];

  constructor( private filmeServ: FilmeService) { }

  ngOnInit(): void {
      this.filmeServ.getAll().subscribe( (filmes: Filme[])=> {
      this.filmes = filmes;
    });

  }
}
