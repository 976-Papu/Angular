import { Routes } from '@angular/router';
import { Encabezado } from './encabezado/encabezado';
import { MenuPrin } from './menu-prin/menu-prin';
import { LogIn } from './log-in/log-in';
import { Inicio } from './Mantenimientos/inicio/inicio';
import { Consulta } from './Mantenimientos/consulta/consulta';
import { Docof } from './Mantenimientos/docof/docof';
import { InicioAlumnos } from './Alumnos/inicio-alumnos/inicio-alumnos';
import { Mantenimiento } from './Mantenimientos/mantenimiento/mantenimiento';
import { DocCert } from './Docentes/doc-cert/doc-cert';
import { Fondo } from './fondo/fondo'; //eliminar esta linea
import { AlumnosVista } from './residencia/Vistas/alumnos-vista/alumnos-vista';

export const routes: Routes = [
    { path: 'Encabezado', component: Encabezado },
    { path: 'MenuPrin', component: MenuPrin },
    { path: 'login', component: LogIn },
    { path: 'inicio', component: Inicio },
    { path: 'consulta', component: Consulta },
    { path: 'docof', component: Docof },
    { path: 'mantenimiento', component: Mantenimiento },
    { path: 'inicio-alumnos', component: InicioAlumnos },
    { path: 'doc-cert', component: DocCert },
    { path: 'fondo', component: Fondo },// eliinar esta
    { path: 'alumnos-vista', component: AlumnosVista }

];
