import { InfoService } from './info.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private info:InfoService,private route:Router) {}
  canActivate():boolean{
    if(!this.info.isAuthenticated()){
      console.log("AlwaysAuthGuard");
        this.route.navigate(['login']);
        return false;
    }
    return true;
   
  }
  
}
