import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrin } from './menu-prin';

describe('MenuPrin', () => {
  let component: MenuPrin;
  let fixture: ComponentFixture<MenuPrin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPrin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPrin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
