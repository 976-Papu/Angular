import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Residencia } from './residencia';

describe('Residencia', () => {
  let component: Residencia;
  let fixture: ComponentFixture<Residencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Residencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Residencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
