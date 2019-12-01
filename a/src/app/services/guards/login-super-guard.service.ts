import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginSuperGuardService {

  isLogin:Boolean = false

  constructor(private router:Router) {

    this.router.events.subscribe(routerEvent=>{
      if (routerEvent instanceof NavigationEnd) {
        console.log('routerEvent, isLogin: ', 
        this.isLogin, 
        this.router.url);

        if (this.router.url.includes('login')==false) {
          if (this.isLogin ==false) {
            this.router.navigateByUrl('/login')
          }
          
        }
      }

    })
   }

  
}
