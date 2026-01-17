import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAlumnos } from './inicio-alumnos';

describe('InicioAlumnos', () => {
  let component: InicioAlumnos;
  let fixture: ComponentFixture<InicioAlumnos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioAlumnos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioAlumnos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
