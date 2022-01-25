import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './guards/role-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'books',
    loadChildren: () =>
      import('src/app/books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('src/app/admin/admin.module').then((m) => m.AdminModule),
    canLoad: [RoleGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
