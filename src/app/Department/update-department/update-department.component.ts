import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {
  form!: FormGroup;
  depid: number = 0;
  dept1!: Department;
  constructor(private depservice: DepartmentService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.depid = this.route.snapshot.params['id'];
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
    })
    this.depservice.getById(this.depid).subscribe(d => {
      console.log(d);
      this.dept1 = d;
      this.form.setValue({
        id: this.depid,
        name: this.dept1.name
      })
    },err=>{
      alert("Error");
      console.log(err);
    })
  }

    submit(){
      this.depservice.update(this.form.value).subscribe(() => {
        alert("Updated Successfully");
        this.router.navigate(['/departments']);
      }, err => {
        console.log(err);
        alert("Error");
      })
    }
  }

