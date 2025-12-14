import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ScanResponse} from '../models/scan';

@Injectable({
  providedIn: 'root',
})
export class ScanService {
  private http = inject(HttpClient)
  private apiUrl = 'http://localhost:5000/api';


  scan(): Observable<ScanResponse> {
    return this.http.get<ScanResponse>(`${this.apiUrl}/scan`);
  }

}
