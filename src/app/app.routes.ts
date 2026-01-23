import { Routes } from '@angular/router';
import { Encabezado } from './Recursos/encabezado/encabezado';//Borrar
import { Fondo } from './Recursos/fondo/fondo';//Borrar
import { AlumnosVista } from './residencias/alumnos-vista/alumnos-vista';//Borrar
import { AuxiliarVista } from './residencias/auxiliar-vista/auxiliar-vista';//Borrar
import { AdministradorVista } from './residencias/administrador-vista/administrador-vista';//Borrar
import { SupAdministradorVista } from './residencias/sup-administrador-vista/sup-administrador-vista';

export const routes: Routes = [

    { path: 'encabezado', component: Encabezado },
    { path: 'fondo', component: Fondo },
    { path: 'alumnos-vista', component: AlumnosVista },
    { path: 'auxiliar-vista', component: AuxiliarVista },
    { path: 'administrador-vista', component: AdministradorVista },
    { path: 'sup-administrador-vista', component: SupAdministradorVista }
];
