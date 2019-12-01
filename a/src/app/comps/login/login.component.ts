import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSuperGuardService } from 'src/app/services/guards/login-super-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginSvc:LoginSuperGuardService,
    private router:Router) { }

  ngOnInit() {
  
  }
  login(){
    this.loginSvc.isLogin = true
    this.router.navigateByUrl('')
   
    
  }
 
}
