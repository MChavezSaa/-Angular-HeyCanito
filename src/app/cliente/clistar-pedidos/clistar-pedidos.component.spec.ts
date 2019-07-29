import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClistarPedidosComponent } from './clistar-pedidos.component';

describe('ClistarPedidosComponent', () => {
  let component: ClistarPedidosComponent;
  let fixture: ComponentFixture<ClistarPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClistarPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClistarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
