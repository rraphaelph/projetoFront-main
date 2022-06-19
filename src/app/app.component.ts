import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 listTitler =[{
   trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
   cover:'assets/images/guardios-da-galaxia.jpg',
   name: 'Guardiões da Galáxia 1',
   relevance: 98,
   age: 12,
   parts: 5,
   categories: ['Épico', 'Ficção Científica', 'Ação']

 }, {
  trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
  cover:'assets/images/guardios-da-galaxia.jpg',
  name: 'Guardiões da Galáxia 2',
  relevance: 80,
  age: 18,
  parts: 5,
  categories: ['Épico', 'Ficção Científica', 'Ação']

}, {

  trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
  cover:'assets/images/guardios-da-galaxia.jpg',
  name: 'Guardiões da Galáxia 3',
  relevance: 50,
  age: 16,
  parts: 5,
  categories: ['Épico', 'Ficção Científica', 'Ação']

}];
  
}
 