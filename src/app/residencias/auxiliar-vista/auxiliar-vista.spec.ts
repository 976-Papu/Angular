import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarVista } from './auxiliar-vista';

describe('AuxiliarVista', () => {
  let component: AuxiliarVista;
  let fixture: ComponentFixture<AuxiliarVista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuxiliarVista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuxiliarVista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
