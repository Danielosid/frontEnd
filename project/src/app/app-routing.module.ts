import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => 
      import('src/app/login/login.module').then((m) => m.LoginModule),
  },
  {
    path:'books',
    loadChildren: () => 
      import('src/app/books/books.module').then((m) => m.BooksModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
