import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  })

  constructor(private loginService: LoginService, private router: Router ) { }

  ngOnInit() { }

  login(){
    //request backend
    console.log(this.form.value);
    const name = this.form.controls["username"].value;
    const password = this.form.controls["password"].value;
    this.loginService.login(name, password).subscribe(resp => {
      console.log(resp);
      //if user ok
      this.router.navigateByUrl("books/list");

    })
  }

}
