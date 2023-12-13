import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form!: FormGroup;
  constructor(private authservice:AuthService, private router:Router) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(0),
      userName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role: new FormControl(1)
    })
  }
  submit(){
    console.log(this.form.value);
    this.authservice.register(this.form.value).subscribe(result=>{
      console.log(result);
      alert("Successfully Registered");
      this.router.navigate(['']);
    },err=>{
      console.log(err);
      alert("Error");
    })
  }
}
