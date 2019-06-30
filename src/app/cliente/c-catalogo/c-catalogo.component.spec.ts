import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCatalogoComponent } from './c-catalogo.component';

describe('CCatalogoComponent', () => {
  let component: CCatalogoComponent;
  let fixture: ComponentFixture<CCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
