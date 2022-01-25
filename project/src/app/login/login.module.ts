import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Router, RouterModule, Routes } from '@angular/router';

const router : Routes = [{
  path: 'sign-in',
  component:LoginComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
