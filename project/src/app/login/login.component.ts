import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { OnlineStatusType } from 'ngx-online-status';
import { NetworkService } from 'src/app/network/network.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  OnlineStatusType = OnlineStatusType;
  status: OnlineStatusType | undefined;
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
    private NetworkService: NetworkService
  ) {}

  ngOnInit() {
    this.NetworkService.networkState$.subscribe((response) => {
      this.status = response;
    });
  }

  login() {
    //request backend
    console.log(this.form.value);
    const name = this.form.controls['username'].value;
    const password = this.form.controls['password'].value;
    this.loginService.login(name, password).subscribe((resp) => {
      console.log(resp);
      //if user ok
      localStorage.setItem('user', JSON.stringify(resp));
      this.router.navigateByUrl('book');
    });
  }
}
