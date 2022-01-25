import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(username: string, pass: string): Observable<user> {
    const u = new user();
    u.name = 'test';
    u.token = 'token';
    u.role = 1;
    return new Observable((obs) => obs.next(u));

    //pt backend
    // return this.httpClient.post<user>('localhost:3333/api/user',{
    //   username,
    //   pass,
    // });
  }
}
