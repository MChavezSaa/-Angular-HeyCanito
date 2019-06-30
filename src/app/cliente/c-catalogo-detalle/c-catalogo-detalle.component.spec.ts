import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCatalogoDetalleComponent } from './c-catalogo-detalle.component';

describe('CCatalogoDetalleComponent', () => {
  let component: CCatalogoDetalleComponent;
  let fixture: ComponentFixture<CCatalogoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCatalogoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCatalogoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
