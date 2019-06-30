import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CBolsaComponent } from './c-bolsa.component';

describe('CBolsaComponent', () => {
  let component: CBolsaComponent;
  let fixture: ComponentFixture<CBolsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CBolsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
