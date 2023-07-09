import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-tarea',
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css']
})
export class FormularioTareaComponent {
  // Llamamos a la array de tareas
  @Input() tareas:any;
  // Creamos un contador para la id de la tarea
  cont:number = 0;
  // Creamos un método que añada la tarea a la array añadiendo, a parte de los dos campos, la id de la tarea y su estado de completada por defecto en false
  agregar(tarea:any){
    this.tareas.push({id: this.cont, nombre: tarea.nombre, descripcion: tarea.descripcion, completada: false});
    this.cont++;
  }
}
