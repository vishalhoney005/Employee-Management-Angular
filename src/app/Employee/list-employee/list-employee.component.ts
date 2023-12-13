import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup } from '@angular/forms';
import { Employee } from '../employee';
import { Gender } from '../gender';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  constructor(private empservice: EmployeeService) { }
  form!: FormGroup;
  list: Employee[] = [];
  private empid=0;
  ngOnInit(): void {
    this.empservice.getList().subscribe(e => {
      console.log(e);
      this.list = e;
    }, err => {
      alert("Error");
    })
  }
  delete(){
    this.empservice.delete(this.empid).subscribe(()=>{
      alert("Deleted Successfully");
      this.ngOnInit();
    },err=>{
      alert("Error");
      console.log(err);
    })
  }

  getGender(gender:number):string{
    return gender===Gender.Male?'Male':'Female';
   }

  setId(id:number){
    this.empid=id;
  }
}