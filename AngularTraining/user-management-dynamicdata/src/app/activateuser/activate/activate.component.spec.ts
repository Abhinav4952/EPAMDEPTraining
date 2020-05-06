import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivateComponent } from './activate.component';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { UsersService } from 'src/app/users.service';
import { ActiveUsersPipe } from '../active-users.pipe';

describe('ActivateComponent', () => {
  let component: ActivateComponent;
  let fixture: ComponentFixture<ActivateComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['getUsers', 'updateUser']);
  const getQuoteSpy = userServiceSpy.getUsers.and.returnValue(of([{}]));
  const updateQuoteSpy = userServiceSpy.updateUser.and.returnValue(of([{}]));
  let router: Router;
  let usersService: UsersService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivateComponent, ActiveUsersPipe],
      providers: [
        { provide: UsersService, useValue: userServiceSpy }
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set userslist on ngOnInit', () => {
    const result = component.ngOnInit();
    expect(component.usersListnew).toEqual([{}]);
    expect(component.buttondisplay).toEqual(true);
  });
});

