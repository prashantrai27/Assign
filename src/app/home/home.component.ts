import { InfoService } from './../info.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: User[] = [];

  constructor(private user: InfoService) {
    
    this.user.getData()
      .subscribe(
        (data) => {
          console.log(data);
          data.forEach((element: { name: string; email: string; phone: number; }) => {
            let userData: User = {
              name: element.name,
              email: element.email,
              phone: element.phone,
            }
            this.users.push(userData);
          });
          console.log(this.users);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  ngOnInit(): void {

  }

}
