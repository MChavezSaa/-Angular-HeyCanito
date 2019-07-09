import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacioComponent } from './vacio.component';

describe('VacioComponent', () => {
  let component: VacioComponent;
  let fixture: ComponentFixture<VacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
