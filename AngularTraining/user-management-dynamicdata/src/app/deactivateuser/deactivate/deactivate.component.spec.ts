import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DeactivateComponent } from './deactivate.component';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';
import { DeletedUsersPipe } from '../deleted-users.pipe';

describe('DeactivateComponent', () => {
  let component: DeactivateComponent;
  let fixture: ComponentFixture<DeactivateComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['getUsers','updateUser']);
  const getQuoteSpy = userServiceSpy.getUsers.and.returnValue(of([{}]));
  const updateQuoteSpy=userServiceSpy.updateUser.and.returnValue(of([{}]));
  let router: Router;
  let usersService: UsersService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivateComponent,DeletedUsersPipe ],
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
    fixture = TestBed.createComponent(DeactivateComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assign userslist on ngInit', () => {
    const result = component.ngOnInit();
    expect(component.usersListnew).toEqual([{}]);
    expect(component.buttondisplay).toEqual(true);
  });
});

