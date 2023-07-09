import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {
  // Llamamos a la array de tareas
  @Input() tareas:any;
  // Creamos un método para eliminar la tarea, buscando su id en la array y eliminando su posicion al encontrarla
  eliminar(id:number){
    for (let i = 0; i < this.tareas.length; i++) {
      if(this.tareas[i].id == id){
        this.tareas.splice(i, 1);
      }
    }
  }
  // Creamos una array que marque la fila su id la cual sea igual que la id de la tarea, pasando la lista de tareas
  marcar(tarea:any){
    // Creamos una variable donde almacenaremos la fila donde se encuentra la checkbox
    let fila = document.getElementById(tarea.id);
    // Comprobamos si la ha encontrado
    if(fila !== null){
      // Si la encuentra, comprobamos si la tarea ha sido completada o no.
      // Si no está completada en el momento que clickamos en la checkbox es que queremos completarla, así que cambia el fondo de la tarea a verde, y viceversa
      if(tarea.completada){
        fila.style.backgroundColor = "white";
        tarea.completada = false;
      } else{
        fila.style.backgroundColor = "green";
        tarea.completada = true;
      }
    }
    
  }

}
