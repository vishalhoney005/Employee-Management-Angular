import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DepartmentService } from 'src/app/Department/department.service';
import { EmployeeService } from '../employee.service';
import { Department } from 'src/app/Department/department';
import { Employee } from '../employee';
import { DatePipe } from '@angular/common';
import { Gender } from '../gender';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',

  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  form!:FormGroup;
  list:Department[]=[];
  empid:number=0;
  emp!: Employee;
  genval=Gender;
  constructor(private route:ActivatedRoute, private Dpipe: DatePipe, private router:Router, private depservice:DepartmentService, private empservice:EmployeeService){}
    ngOnInit(): void {
      this.empid=this.route.snapshot.params['id'];
      this.form = new FormGroup({
        id : new FormControl(0),
        name : new FormControl('',Validators.required),
        dateOfBirth: new FormControl(''),
        gender: new FormControl(Gender.Female,Validators.required),
        mobileNo: new FormControl(null,Validators.required),
        email:	new FormControl('',Validators.required),
        salary:	new FormControl(null,Validators.required),
        departmentId:	new FormControl('',Validators.required),
    })
  
    this.depservice.getDepartmentList().subscribe(result=>{
      console.log("Result", result);
      this.list=result;  
    },err=>{
      console.log("Error", err);
      alert("Error");
    })
    
    this.empservice.getById(this.empid).subscribe(e=>{
      console.log(e);
      this.emp=e;
      this.form.setValue({
      id: this.emp.id,
      name: this.emp.name,
      dateOfBirth: this.Dpipe.transform(this.emp.dateOfBirth,'yyyy-MM-dd'),
      gender: this.emp.gender,
      mobileNo: this.emp.mobileNo,
      email: this.emp.email,
      salary: this.emp.salary,
      departmentId: this.emp.departmentId
      })
    })
  
  }

  getGender(gender:number):string{
    return gender===Gender.Male?'Male':'Female';
   }
  
    submitemp() {
      this.empservice.update(this.form.value).subscribe(()=>{
        alert("Updated Successfully")
        this.router.navigate(['/employees']);
      },err=>{
        alert("Failed to update employee");
        console.log(err);
      })
    }

}
