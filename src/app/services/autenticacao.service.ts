import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private autenticado: boolean = false;

  public menuHabilitado = new EventEmitter<boolean>();

  constructor(private router: Router,
              private userService: UserService) { }

  public logar(usuario: User) {

      this.userService.getAuthUsuario(usuario).subscribe(
      (usuarioAuth: User[])=>{const [user] = usuarioAuth;

      if (user.email) {
          this.autenticado = true;
          this.menuHabilitado.emit(true);

          console.log('Aqui Teste!');
          this.router.navigate(['/telaEntrar']);
        }
      });
  }

  public isAutenticado(): boolean {
    return this.autenticado;
  }
}
