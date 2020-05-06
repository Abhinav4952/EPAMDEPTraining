import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { HttpClient } from '@angular/common/http';

describe('UsersService', () => {

  let service: UsersService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(UsersService);

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get users', () => {

    service.getUsers().subscribe((data) => {
      expect(data).toEqual([]);
    });


    const req = httpTestingController.expectOne('http://localhost:8080/users');
    expect(req.request.method).toEqual('GET');

    req.flush([]);

    httpTestingController.verify();
  });
  it('should get users', () => {

    service.getUser('id').subscribe((data) => {
      expect(data).toEqual([]);
    });


    const req = httpTestingController.expectOne('http://localhost:8080/users/id');
    expect(req.request.method).toEqual('GET');

    req.flush([]);

    httpTestingController.verify();
  });
});

