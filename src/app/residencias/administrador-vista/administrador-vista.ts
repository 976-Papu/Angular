import { Component, ViewEncapsulation } from '@angular/core';
import { Fondo } from "../../Recursos/fondo/fondo";
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { ModuleRegistry, ClientSideRowModelModule } from 'ag-grid-community';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: 'app-administrador-vista',
  imports: [Fondo, AgGridAngular],
  templateUrl: './administrador-vista.html',
  styleUrl: './administrador-vista.css',
  encapsulation: ViewEncapsulation.None
})
export class AdministradorVista {

  rowData = [
    { numeroControl: "xx04xxxx", alumno: "Ejemplo x", carrera: "Ejemplo x", asesor: "Ejemplo x", documentacion: "Registro para Residencia" },
    { numeroControl: "123456", alumno: "Juan Perez", carrera: "Sistemas", asesor: "Maria Lopez", documentacion: "Completa" }
  ];

  colDefs: ColDef[] = [
    { field: "numeroControl", headerName: "Numero de control", flex: 1 },
    { field: "alumno", headerName: "Alumno", flex: 1 },
    { field: "carrera", headerName: "Carrera", flex: 1 },
    { field: "asesor", headerName: "Asesor", flex: 1 },
    { field: "documentacion", headerName: "Documentacion Disponible", flex: 1.5 }
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };
}