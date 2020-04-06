import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1c1Component } from './f1c1.component';

describe('F1c1Component', () => {
  let component: F1c1Component;
  let fixture: ComponentFixture<F1c1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1c1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
