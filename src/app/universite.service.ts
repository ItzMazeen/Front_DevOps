import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private baseUrl = 'http://192.168.56.18:8081/Foyer/universite';

  constructor(private http: HttpClient) { }

  getAllUniversites(): Observable<any> {
    return this.http.get(`${this.baseUrl}/findAll`);
  }

  addOrUpdateUniversite(universite: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addOrUpdate`, universite);
  }
}
