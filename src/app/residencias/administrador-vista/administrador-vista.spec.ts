import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorVista } from './administrador-vista';

describe('AdministradorVista', () => {
  let component: AdministradorVista;
  let fixture: ComponentFixture<AdministradorVista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradorVista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorVista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
