import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CVerPedidoComponent } from './c-ver-pedido.component';

describe('CVerPedidoComponent', () => {
  let component: CVerPedidoComponent;
  let fixture: ComponentFixture<CVerPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVerPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CVerPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
