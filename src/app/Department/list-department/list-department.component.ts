import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit{
  list:Department[]=[];
  private depid=0;
  constructor(private depservice:DepartmentService){}
  ngOnInit(): void {
    this.depservice.getDepartmentList().subscribe(result=>{
      console.log(result);
      this.list=result;
    },err=>{
      alert("Error occured");
    })
  }
  deleteDept(){
    console.log('Product to delete: '+this.depid);
    this.depservice.delete(this.depid).subscribe(()=>{
      alert("Deleted Successfully");
      this.ngOnInit();
    },err=>{
      console.log(err);
      alert("Error Occurred");
    })
  }

  setId(id:number){
    this.depid = id;
  }
}
