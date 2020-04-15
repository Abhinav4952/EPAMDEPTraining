import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateUsersComponent } from './app-activateuser.component';

describe('F1c1Component', () => {
  let component: ActivateUsersComponent;
  let fixture: ComponentFixture<ActivateUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

