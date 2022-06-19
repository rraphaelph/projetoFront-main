import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AutenticacaoService } from './../services/autenticacao.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public usuario: User = new User();

  constructor(private auth: AutenticacaoService) { }


  ngOnInit(): void {

  }

  public realizarLogin(formulario: any) {
    console.log(formulario);
    console.log(formulario.valid);
    console.log(formulario.value);

    if (formulario.valid) {
      this.usuario.email = formulario.value.email;
      this.usuario.senha = formulario.value.senha;

      this.auth.logar(this.usuario);
    }


  }

}
