import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if correct content is displaying on the home page', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const ele: HTMLElement = fixture.nativeElement;
    const contianer = ele.querySelector('.card-title');
    expect(contianer.textContent).toBe('User Management');
    const description=ele.querySelector('.card-text');
    expect(description.textContent).toBe('Welcome to User Management');
  });
});

