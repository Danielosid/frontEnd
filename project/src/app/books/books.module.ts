import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { FormsModule } from '@angular/forms';

const router: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'add/:id',
    component: BookDetailsComponent,
  },
  {
    path: 'edit/:id',
    component: BookDetailsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(router), FormsModule],
  declarations: [BooksComponent],
})
export class BooksModule {}
