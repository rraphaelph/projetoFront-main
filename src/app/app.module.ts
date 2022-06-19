import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaEntrarComponent } from './tela-entrar/tela-entrar.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { HomeComponent } from './home/home.component';
import { TelaSeriesComponent } from './tela-series/tela-series.component';
import { TelaFilmesComponent } from './tela-filmes/tela-filmes.component';
import { AddRecentComponent } from './add-recent/add-recent.component';
import { MinhaListComponent } from './minha-list/minha-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaEntrarComponent,
    TelaCadastroComponent,
    HomeComponent,
    TelaSeriesComponent,
    TelaFilmesComponent,
    AddRecentComponent,
    MinhaListComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
