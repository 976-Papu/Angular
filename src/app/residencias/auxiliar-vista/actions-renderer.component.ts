import { Component, ChangeDetectorRef } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="action-cell-container">
      <div class="action-trigger" (click)="toggleMenu($event)">
        {{ value }} <span class="arrow">▼</span>
      </div>
      <div *ngIf="isOpen" class="dropdown-menu">
        <div class="menu-header">SubMenuInscripciones</div>
        <button class="menu-option">Registro Avances</button>
        <button class="menu-option">Modificacion</button>
        <button class="menu-option">Liberar Residencia</button>
        <button class="menu-option">...</button>
      </div>
    </div>
  `,
  styles: [`
    .action-cell-container {
      position: relative;
      cursor: pointer;
      overflow: visible; 
      width: 100%;
      height: 100%;
    }
    .action-trigger {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0 5px;
        user-select: none;
    }
    .dropdown-menu {
      position: absolute;
      top: 100%;
      right: 0; 
      z-index: 99999;
      background-color: #dcdcdc;
      border: 1px solid #999;
      border-radius: 5px;
      padding: 10px;
      width: 220px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    }
    .menu-header {
      font-size: 0.8rem;
      margin-bottom: 5px;
      color: #666;
      padding-left: 5px;
    }
    .menu-option {
      background-color: #9ea8b4;
      border: none;
      border-radius: 15px;
      padding: 5px 10px;
      cursor: pointer;
      font-family: 'Courier New', Courier, monospace;
      font-weight: bold;
      color: #000;
      text-align: center;
      width: 100%;
    }
    .menu-option:hover {
      background-color: #8e98a4;
    }
  `]
})
export class ActionsRendererComponent implements ICellRendererAngularComp {
  value: any;
  isOpen = false;

  constructor(private cdr: ChangeDetectorRef) { }

  agInit(params: ICellRendererParams): void {
    this.value = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    this.value = params.value;
    return true;
  }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
    this.cdr.detectChanges();
  }
}
