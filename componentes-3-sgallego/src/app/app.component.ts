import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentes-3-sgallego';
  // Creamos una variable tareas en el padre, la cual llamaremos en los hijos
  tareas:any = [];

}
