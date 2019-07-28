import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AListarPedidosComponent } from './a-listar-pedidos.component';

describe('AListarPedidosComponent', () => {
  let component: AListarPedidosComponent;
  let fixture: ComponentFixture<AListarPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AListarPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AListarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
