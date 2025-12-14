import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, UserResponse} from '../models/auth';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:5000/api';

  //Leggere utente loggato (provvisorio)
  getCurrentUser(): UserResponse | null {
    const stored = localStorage.getItem('currentUser');
    return stored? JSON.parse(stored) : null;
  }

  //registrazione Post
  register(data: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/register`, data)
  }


  //Login Post
  login(credentials: LoginRequest): Observable<any> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials)
  }

}
