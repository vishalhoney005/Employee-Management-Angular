import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Employee } from './employee';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl=`${environment.baseApiUrl}employees`;
  constructor(private client:HttpClient) { }

  getList():Observable<Employee[]>{
    return this.client.get<Employee[]>(this.apiUrl);
  }

  add(emp:Employee):Observable<Employee>{
    return this.client.post<Employee>(this.apiUrl, emp);
  }

  delete(id:number):Observable<void>{
    return this.client.delete<void>(this.apiUrl+'/'+id);
  }

  update(emp:Employee):Observable<Employee>{
    return this.client.put<Employee>(`${this.apiUrl}/${emp.id}`, emp);
    }

  getById(id:number):Observable<Employee>{
    return this.client.get<Employee>(`${this.apiUrl}/${id}`);
  }

}
