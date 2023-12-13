// // // import { TestBed } from '@angular/core/testing';

// // // import { EmployeeService } from './employee.service';

// // // describe('EmployeeService', () => {
// // //   let service: EmployeeService;

// // //   beforeEach(() => {
// // //     TestBed.configureTestingModule({});
// // //     service = TestBed.inject(EmployeeService);
// // //   });

// // //   it('should be created', () => {
// // //     expect(service).toBeTruthy();
// // //   });
// // // });


// import { TestBed } from '@angular/core/testing';
// import { Employee } from './employee';
// import { Department } from '../Department/department';
// import { EmployeeService } from './employee.service';
// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { Gender } from './gender';

// describe('EmployeeService', () => {
//   let service: EmployeeService;
//   let httpmock: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports:[HttpClientTestingModule],
//       providers:[EmployeeService]
//     });
//     service = TestBed.inject(EmployeeService);
//     httpmock=TestBed.inject(HttpTestingController);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });

//   let department1:Department[]=[
//     {id:4,name:'QA'}
//   ]

//   let genval=Gender;


//   it('get employee list',()=>{

//     let employee:Employee[]=[
//        {id:1,name:'John',dateOfBirth:new Date('2020-05-30'),gender:genval.Male,mobileNo:9876543210,email:'john@gmail.com',salary:3000,departmentId:4}    
//     ];
//     service.getList().subscribe((res)=>{
//       console.log("response");
//       expect(
//         res
//         ).toEqual(employee);
//     });
//     const req=httpmock.expectOne(`${service.apiUrl}/employees`);
//     expect(req.request.method).toEqual('GET');
//     req.flush(employee);
//   })
// });


