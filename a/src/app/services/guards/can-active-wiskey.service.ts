import { Injectable } from '@angular/core';

import {
  CanActivate, 
  CanActivateChild, 
  CanDeactivate,
  CanLoad
} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CanActiveWiskeyService implements CanActivate{

  canActivate() {
    let m = "you cant have ice cream if you dont drink ur wiskey"
    
    alert(m)
    
    return false;
  }
  constructor() { }
}
