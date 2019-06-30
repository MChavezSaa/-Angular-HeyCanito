import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AAprobarPedidosComponent } from './a-aprobar-pedidos.component';

describe('AAprobarPedidosComponent', () => {
  let component: AAprobarPedidosComponent;
  let fixture: ComponentFixture<AAprobarPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AAprobarPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AAprobarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
