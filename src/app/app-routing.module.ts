import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TelaEntrarComponent } from './tela-entrar/tela-entrar.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaFilmesComponent } from './tela-filmes/tela-filmes.component';
import { TelaSeriesComponent } from './tela-series/tela-series.component';
import { AddRecentComponent } from './add-recent/add-recent.component';
import { MinhaListComponent } from './minha-list/minha-list.component';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'telaCadastro',
      component: TelaCadastroComponent
    },
    {
      path: 'telaEntrar',
      component: TelaEntrarComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'telaFilmes',
      component: TelaFilmesComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'telaSeries',
      component: TelaSeriesComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'addRecent',
      component: AddRecentComponent,
      canActivate: [AuthGuardService]
    },
    {
      path: 'minhaList',
      component: MinhaListComponent,
      canActivate: [AuthGuardService]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
