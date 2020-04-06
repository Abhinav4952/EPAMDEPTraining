import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ManageComponent } from './manage.component';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('ManageComponent', () => {
  let component: ManageComponent;
  let fixture: ComponentFixture<ManageComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['getUsers']);
  const getQuoteSpy = userServiceSpy.getUsers.and.returnValue(of([{}]));
  let router: Router;
  let usersService: UsersService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageComponent ],
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
    fixture = TestBed.createComponent(ManageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigate method to create User', () => {
    spyOn(router, 'navigate');
    const result = component.createUser();
    expect(router.navigate).toHaveBeenCalledWith(['manage/create']);
  });

  it('should call navigate method listing all User details', () => {
    spyOn(router, 'navigate');
    const id='dummy_id';
    const result = component.showDetails(id);
    expect(router.navigate).toHaveBeenCalledWith(['manage', id]);
  });

  it('should call navigate method for modifing User details', () => {
    spyOn(router, 'navigate');
    const id='dummy_id';
    const result = component.editDetails(id);
    expect(router.navigate).toHaveBeenCalledWith(['manage/edit/', id]);
  });

  it('should set userslist on ngOnInit', () => {
    const result = component.ngOnInit();
    expect(component.usersList).toEqual([{}]);
  });

});

