import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CErrorComponent } from './c-error.component';

describe('CErrorComponent', () => {
  let component: CErrorComponent;
  let fixture: ComponentFixture<CErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
