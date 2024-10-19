import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private baseUrl = 'http://springboot-app:8081/Foyer/universite';

  constructor(private http: HttpClient) { }

  getAllUniversites(): Observable<any> {
    return this.http.get(`${this.baseUrl}/findAll`);
  }

  addOrUpdateUniversite(universite: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addOrUpdate`, universite);
  }
}
