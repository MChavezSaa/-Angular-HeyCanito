import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COpinionComponent } from './c-opinion.component';

describe('COpinionComponent', () => {
  let component: COpinionComponent;
  let fixture: ComponentFixture<COpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
