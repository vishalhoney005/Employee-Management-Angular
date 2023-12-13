import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDepartmentComponent } from './Department/add-department/add-department.component';
import { UpdateDepartmentComponent } from './Department/update-department/update-department.component';
import { ListDepartmentComponent } from './Department/list-department/list-department.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { ListEmployeeComponent } from './Employee/list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component'
import { DatePipe } from '@angular/common';
import { TokenInterceptor } from './Auth/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent,
    ListDepartmentComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    UpdateEmployeeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe,{provide:HTTP_INTERCEPTORS, 
    useClass: TokenInterceptor , multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
