import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPedidoComponent } from './c-pedido.component';

describe('CPedidoComponent', () => {
  let component: CPedidoComponent;
  let fixture: ComponentFixture<CPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
