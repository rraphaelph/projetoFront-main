import { Injectable } from '@angular/core';

import { Router,
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AutenticacaoService } from './autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private auth: AutenticacaoService) { }

  public canActivate(route: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> | boolean {

    console.log('Aqui canActivate!');

    if (this.auth.isAutenticado()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
