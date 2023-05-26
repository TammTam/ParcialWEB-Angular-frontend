import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from './models/libro.module';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private baseUrl = 'http://localhost:ng bui;3000/api/libros';

  constructor(private http: HttpClient) { }

  obtenerLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.baseUrl);
  }

  agregarLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.baseUrl, libro);
  }
}