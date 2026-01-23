import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoVista } from './mantenimiento-vista';

describe('MantenimientoVista', () => {
  let component: MantenimientoVista;
  let fixture: ComponentFixture<MantenimientoVista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantenimientoVista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoVista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
