import { Component, OnInit} from '@angular/core';
import { AuthService } from './Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'EmployeeManagement';

  constructor(private authsvc:AuthService){}
  ngOnInit(): void {
    this.logout();
  }


  isloggedIn(){
    return this.authsvc.isloggedIn();
  }
  
  logout(){
    this.authsvc.logout();
  }
}
