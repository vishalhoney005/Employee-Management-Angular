import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './Department/add-department/add-department.component';
import { ListDepartmentComponent } from './Department/list-department/list-department.component';
import { UpdateDepartmentComponent } from './Department/update-department/update-department.component';
import { ListEmployeeComponent } from './Employee/list-employee/list-employee.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { routeAuthGuard } from './Auth/route-auth.guard';

const routes: Routes = [
  {path:'departments', component:ListDepartmentComponent, canActivate:[routeAuthGuard]},
  {path:'departments/add', component:AddDepartmentComponent, canActivate:[routeAuthGuard]},
  {path:'departments/edit/:id', component:UpdateDepartmentComponent, canActivate:[routeAuthGuard]},
  {path:'employees', component:ListEmployeeComponent, canActivate:[routeAuthGuard]},
  {path:'employees/add', component:AddEmployeeComponent, canActivate:[routeAuthGuard]},
  {path:'employees/edit/:id', component:UpdateEmployeeComponent, canActivate:[routeAuthGuard]},
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
