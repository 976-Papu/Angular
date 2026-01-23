import { Component } from '@angular/core';
import { Encabezado } from "../../Recursos/encabezado/encabezado";
import { Fondo } from "../../Recursos/fondo/fondo";

@Component({
  selector: 'app-alumnos-vista',
  imports: [Encabezado, Fondo],
  templateUrl: './alumnos-vista.html',
  styleUrl: './alumnos-vista.css',
})
export class AlumnosVista {

}
