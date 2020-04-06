import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F2c1Component } from './f2c1.component';

describe('F2c1Component', () => {
  let component: F2c1Component;
  let fixture: ComponentFixture<F2c1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F2c1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F2c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
