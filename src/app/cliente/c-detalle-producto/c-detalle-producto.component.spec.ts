import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDetalleProductoComponent } from './c-detalle-producto.component';

describe('CDetalleProductoComponent', () => {
  let component: CDetalleProductoComponent;
  let fixture: ComponentFixture<CDetalleProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDetalleProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDetalleProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
