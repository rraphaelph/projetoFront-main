import { Component, OnInit } from '@angular/core';
import { Filme } from '../models/filme.model';
import { FilmeService } from '../services/filme.service';
@Component({
  selector: 'app-add-recent',
  templateUrl: './add-recent.component.html',
  styleUrls: ['./add-recent.component.css']
})
export class AddRecentComponent implements OnInit {
  public filmes: Array<Filme> = [];

  constructor( private filmeServ: FilmeService) { }

  ngOnInit(): void {
      this.filmeServ.getAll().subscribe( (filmes: Filme[])=> {
      this.filmes = filmes;
    });

  }

}
