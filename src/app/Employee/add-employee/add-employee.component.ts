import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/Department/department.service';
import { Department } from 'src/app/Department/department';
import { Gender } from '../gender';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  form!:FormGroup;
  list: Department[]=[];
  genderval=Gender;

  constructor(private empservice:EmployeeService, private router:Router, private depservice:DepartmentService){}
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(0),
      name:	new FormControl('',Validators.required),
      dateOfBirth:	new FormControl('',[Validators.required, this.dateOfBirthValidator]),
      gender:	new FormControl('',Validators.required),
      mobileNo:	new FormControl(null,[Validators.required,Validators.minLength(10)]),
      email:	new FormControl('',Validators.required),
      salary:	new FormControl(null,[Validators.min(1),Validators.required]),
      departmentId:	new FormControl('',Validators.required),
    });
    this.depservice.getDepartmentList().subscribe(result=>{
      console.log(result);
      this.list=result;
    },err=>{
      alert("Error");
    })
  }
  submit(){
    console.log(this.form.value);
    this.empservice.add(this.form.value).subscribe(result=>{
      alert("Successfully Added");
      this.router.navigate(['/employees']);
    },err=>{
      alert("Failed to add employee");
      console.log(err);
    })

  }
  dateOfBirthValidator(control: any): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if(selectedDate>currentDate)
    {
      return {futureDate:true};
    }
    return null;}
 
}
