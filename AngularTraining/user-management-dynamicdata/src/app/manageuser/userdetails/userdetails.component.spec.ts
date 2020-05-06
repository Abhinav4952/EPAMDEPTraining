import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserdetailsComponent } from './userdetails.component';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

describe('UserdetailsComponent', () => {
  let component: UserdetailsComponent;
  let fixture: ComponentFixture<UserdetailsComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['getUser']);
  const getQuoteSpy = userServiceSpy.getUser.and.returnValue(of([{}]));
  let router: Router;
  let usersService: UsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailsComponent ],
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
    fixture = TestBed.createComponent(UserdetailsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selected user details on ngOnInit', () => {
    const result = component.ngOnInit();
    expect(component.singleuser).toEqual([{}]);
  });
});

