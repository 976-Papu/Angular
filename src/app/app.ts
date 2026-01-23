import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './Recursos/encabezado/encabezado';
import { Fondo } from './Recursos/fondo/fondo';//Borrar

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Encabezado, Fondo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('siit');
}
