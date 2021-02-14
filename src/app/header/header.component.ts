import { Router } from '@angular/router';
import { InfoService } from './../info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private infoservice:InfoService,private router:Router) { }

  ngOnInit(): void {
  }
Logout(){
  if(this.infoservice.Logout()){
      this.router.navigate(['/login']);
  }
}

}