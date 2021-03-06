import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  getUser(userId): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + userId);
  }

  updateUser(userId: number, user: User) {
    return this.http.put(this.baseUrl + 'users/' + userId, user);
  }
}
