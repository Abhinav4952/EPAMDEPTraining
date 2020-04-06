import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F3c1Component } from './f3c1.component';

describe('F3c1Component', () => {
  let component: F3c1Component;
  let fixture: ComponentFixture<F3c1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F3c1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F3c1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
