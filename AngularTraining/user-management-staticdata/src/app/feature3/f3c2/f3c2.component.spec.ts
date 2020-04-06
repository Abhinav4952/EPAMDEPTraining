import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F3c2Component } from './f3c2.component';

describe('F3c2Component', () => {
  let component: F3c2Component;
  let fixture: ComponentFixture<F3c2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F3c2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F3c2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
