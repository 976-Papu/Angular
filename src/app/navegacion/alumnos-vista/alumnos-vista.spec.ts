import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosVista } from './alumnos-vista';

describe('AlumnosVista', () => {
  let component: AlumnosVista;
  let fixture: ComponentFixture<AlumnosVista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosVista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosVista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
