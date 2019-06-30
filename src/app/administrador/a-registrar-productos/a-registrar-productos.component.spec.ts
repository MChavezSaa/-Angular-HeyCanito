import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ARegistrarProductosComponent } from './a-registrar-productos.component';

describe('ARegistrarProductosComponent', () => {
  let component: ARegistrarProductosComponent;
  let fixture: ComponentFixture<ARegistrarProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ARegistrarProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ARegistrarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
