import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraEscolares } from './extra-escolares';

describe('ExtraEscolares', () => {
  let component: ExtraEscolares;
  let fixture: ComponentFixture<ExtraEscolares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraEscolares]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraEscolares);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
