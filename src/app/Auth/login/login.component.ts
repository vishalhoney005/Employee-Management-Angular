import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!: FormGroup;
  constructor(private authservice:AuthService, private router:Router) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', Validators.required),

    })
  }
  submit(){
    console.log(this.form.value);
    this.authservice.login(this.form.value).subscribe(result=>{
      console.log(result);
      this.router.navigate(['employees']);
    },err=>{
      console.log(err);
      alert("Error");
    })
  }
}
