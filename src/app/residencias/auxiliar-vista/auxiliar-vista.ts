import { Component, ViewEncapsulation } from '@angular/core';
import { Fondo } from "../../Recursos/fondo/fondo";
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ModuleRegistry, ClientSideRowModelModule } from 'ag-grid-community';
import { ActionsRendererComponent } from './actions-renderer.component';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: 'app-auxiliar-vista',
  imports: [Fondo, AgGridAngular, ActionsRendererComponent],
  templateUrl: './auxiliar-vista.html',
  styleUrl: './auxiliar-vista.css',
  encapsulation: ViewEncapsulation.None
})
export class AuxiliarVista {

  rowData = [
    { numeroControl: "xx04xxxx", nombre: "Ejemplo x", carrera: "xxxxxx", acciones: "Registrar Avances" },
    { numeroControl: "xx04xxxx", nombre: "miguel", carrera: "Sistemas Computacionales", acciones: "Registrar Avances" },
    { numeroControl: "xx04xxxx", nombre: "juan", carrera: "Sistemas Computacionales", acciones: "Registrar Avances" },
    { numeroControl: "xx04xxxx", nombre: "pedro", carrera: "Sistemas Computacionales", acciones: "Registrar Avances" },
    { numeroControl: "xx04xxxx", nombre: "maria", carrera: "Sistemas Computacionales", acciones: "Registrar Avances" },
    { numeroControl: "xx04xxxx", nombre: "luis", carrera: "Sistemas Computacionales", acciones: "Registrar Avances" },
    { numeroControl: "xx04xxxx", nombre: "ana", carrera: "Sistemas Computacionales", acciones: "Registrar Avances" },
    { numeroControl: "xx04xxxx", nombre: "jose", carrera: "Sistemas Computacionales", acciones: "Registrar Avances" }
  ];

  colDefs: ColDef[] = [
    { field: 'numeroControl', headerName: 'Numero de control:', flex: 1 },
    { field: 'nombre', headerName: 'Nombre:', flex: 1 },
    { field: 'carrera', headerName: 'Carrera:', flex: 1 },
    {
      field: 'acciones',
      headerName: 'Acciones:',
      flex: 1,
      cellRenderer: ActionsRendererComponent,
      editable: false,
      sortable: false,
      filter: false
    }
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };
}
