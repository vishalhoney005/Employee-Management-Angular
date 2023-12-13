import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserDto } from './user-dto';
import { LoginResponseDto } from './login-response-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl=environment.baseApiUrl+'auth';
  constructor(private client:HttpClient) { }

  register(u:User):Observable<User>{
    return this.client.post<User>(this.apiUrl, u);

  }

  login(ud:UserDto):Observable<LoginResponseDto>{
      let res=this.client.post<LoginResponseDto>(`${this.apiUrl}/login`, ud);
      res.subscribe(response=>
      {
        localStorage.clear();
        localStorage.setItem('userDetails', JSON.stringify(response));
      },err=>{
        console.log("Error occured");
        alert("error");
        return null;
      })
      return res;
      
    }

    getUser():LoginResponseDto{
      let user =localStorage.getItem('userDetails');
      return JSON.parse(user||'{}');
    }

    isloggedIn():boolean{
      return localStorage.getItem('userDetails') !=null ? true : false
    }

    logout(){
      localStorage.clear();
}

}
