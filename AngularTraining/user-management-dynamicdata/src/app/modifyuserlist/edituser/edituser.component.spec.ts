import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EdituserComponent } from './edituser.component';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';
import { of } from 'rxjs';

describe('EdituserComponent', () => {
  let component: EdituserComponent;
  let fixture: ComponentFixture<EdituserComponent>;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['getUser']);
  const getQuoteSpy = userServiceSpy.getUser.and.returnValue(of([{}]));
  let router: Router;
  let usersService: UsersService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdituserComponent ],
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
    fixture = TestBed.createComponent(EdituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });
});

