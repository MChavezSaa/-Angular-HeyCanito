import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AListarProductosComponent } from './a-listar-productos.component';

describe('AListarProductosComponent', () => {
  let component: AListarProductosComponent;
  let fixture: ComponentFixture<AListarProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AListarProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AListarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
