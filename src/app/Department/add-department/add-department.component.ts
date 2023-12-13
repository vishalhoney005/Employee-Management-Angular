import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit{
  form!: FormGroup;
  constructor(private depservice:DepartmentService, private router:Router){}  
  ngOnInit(): void {
    this.form=new FormGroup({
      id: new FormControl(0),
      name: new FormControl('',Validators.required),
    })
  }
  submit(){
    console.log(this.form.value);
    this.depservice.add(this.form.value).subscribe(result=>{
      alert("Added Successfully");
      this.router.navigate(['departments']);
    },err=>{
      alert("Error Occured")
      console.log(err);
    })
  }
}
