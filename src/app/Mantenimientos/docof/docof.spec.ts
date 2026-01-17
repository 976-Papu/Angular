import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Docof } from './docof';

describe('Docof', () => {
  let component: Docof;
  let fixture: ComponentFixture<Docof>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Docof]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Docof);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
