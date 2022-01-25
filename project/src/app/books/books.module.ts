import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';

const router : Routes = [{
  path:'list',
  component:BooksComponent
},
{
  path:'book/:id',
  component:BookDetailsComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  declarations: [BooksComponent]
})
export class BooksModule { }
