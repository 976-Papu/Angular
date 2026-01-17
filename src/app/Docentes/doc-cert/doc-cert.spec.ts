import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocCert } from './doc-cert';

describe('DocCert', () => {
  let component: DocCert;
  let fixture: ComponentFixture<DocCert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocCert]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocCert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
