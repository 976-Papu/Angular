import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './encabezado/encabezado';
import { MenuPrin } from './menu-prin/menu-prin';
import { LogIn } from './log-in/log-in';
import { Inicio } from './Mantenimientos/inicio/inicio';
import { Consulta } from './Mantenimientos/consulta/consulta';
import { Docof } from './Mantenimientos/docof/docof';
import { Mantenimiento } from './Mantenimientos/mantenimiento/mantenimiento';
import { DocCert } from './Docentes/doc-cert/doc-cert';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Encabezado, MenuPrin, LogIn, Inicio, Consulta, Docof, Mantenimiento, DocCert],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('siit');
}
