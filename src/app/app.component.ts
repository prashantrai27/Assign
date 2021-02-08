import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dummy';

  invalidEmail: boolean = false;
  invalidPass: boolean = false;
  isValid: boolean = false;

  user: any = {
    email: 'Sherwood@rosamond.me',
    pass: 'pass@123'
  };


  GetValue(value: NgForm) {
    console.log(value);
    let data = {
      email: value.form.value.email,
      pass: value.form.value.password
    };
    if(data.email === this.user.email) {
      this.invalidEmail = false;
      this.isValid = true;
    } else {
      this.invalidEmail = true;
    }
    if(data.pass === this.user.pass) {
      this.invalidPass = false;
      this.isValid = true;
    } else {
      this.invalidPass = true;
    }
  }
  
}
