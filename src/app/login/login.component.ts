import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  invalidEmail: boolean = false;
  invalidPass: boolean = false;
  isValid: boolean = false;
  link: string = '';

  user: any = {
    email: 'Sherwood@rosamond.me',
    pass: 'pass@123'
  };


  GetValue(value: NgForm) {
    console.log(value);

    const email = document.getElementById("email");
    const pass = document.getElementById("pass");

    let data = {
      email: value.form.value.email,
      pass: value.form.value.password
    };
    if (data.email === this.user.email) {
      this.invalidEmail = false;
      this.isValid = true;
      email?.classList.remove("error");
    } else {
      this.invalidEmail = true;
      this.isValid = false;
      email?.classList.add("error");
    }


    if (data.pass === this.user.pass) {
      this.invalidPass = false;
      this.isValid = true;
      pass?.classList.remove("error");
    } else {
      this.invalidPass = true;
      this.isValid = false;
      pass?.classList.add("error");
    }


    if (this.isValid === false) {
      this.router.navigate(["/"]);
    } else {
      this.router.navigate(["/home"]);
    }
  }



}
