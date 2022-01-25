import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';


const router : Routes = [{
  path:'users',
  component:AdminComponent
},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
