import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme.model';
import { FilmeService } from '../services/filme.service';
@Component({
  selector: 'app-minha-list',
  templateUrl: './minha-list.component.html',
  styleUrls: ['./minha-list.component.css']
})
export class MinhaListComponent implements OnInit {
  public filmes: Array<Filme> = [];

  constructor( private filmeServ: FilmeService) { }

  ngOnInit(): void {
      this.filmeServ.getAll().subscribe( (filmes: Filme[])=> {
      this.filmes = filmes;
    });

  }

}
