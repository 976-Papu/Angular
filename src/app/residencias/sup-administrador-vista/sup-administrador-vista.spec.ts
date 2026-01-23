import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupAdministradorVista } from './sup-administrador-vista';

describe('SupAdministradorVista', () => {
  let component: SupAdministradorVista;
  let fixture: ComponentFixture<SupAdministradorVista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupAdministradorVista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupAdministradorVista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
