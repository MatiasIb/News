import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private apiKey = 'e11e2f04c4ad445d9e0dc417f59b8c36'; // Reemplaza con tu clave de API

  constructor(private http: HttpClient) {}
  
  getTopHeadlines(): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  getNewsByCategory(category: string): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}