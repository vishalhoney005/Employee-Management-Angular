import { TestBed } from '@angular/core/testing';
 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DepartmentService } from './department.service';
import { Department } from './department';
 
describe('DepartmentService', () => {
  let service: DepartmentService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DepartmentService]
    });
    service = TestBed.inject(DepartmentService);
    httpMock = TestBed.inject(HttpTestingController);
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('get department list', () => {
    let department: Department[] = [
      { id: 1, name: 'HR' },
      { id: 2, name: 'Cloud' }
    ];
    service.getDepartmentList().subscribe(list => {
      expect(list).toEqual(department);
});
const req = httpMock.expectOne(`${service.apiUrl}`);
expect(req.request.method).toBe('GET');
req.flush(department);
})
})