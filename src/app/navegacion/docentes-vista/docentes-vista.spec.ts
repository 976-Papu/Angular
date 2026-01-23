import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesVista } from './docentes-vista';

describe('DocentesVista', () => {
  let component: DocentesVista;
  let fixture: ComponentFixture<DocentesVista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocentesVista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocentesVista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
