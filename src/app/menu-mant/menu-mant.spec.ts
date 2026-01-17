import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMant } from './menu-mant';

describe('MenuMant', () => {
  let component: MenuMant;
  let fixture: ComponentFixture<MenuMant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuMant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
