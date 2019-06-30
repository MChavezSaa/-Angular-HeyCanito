import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRegistrarClienteComponent } from './c-registrar-cliente.component';

describe('CRegistrarClienteComponent', () => {
  let component: CRegistrarClienteComponent;
  let fixture: ComponentFixture<CRegistrarClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRegistrarClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRegistrarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
