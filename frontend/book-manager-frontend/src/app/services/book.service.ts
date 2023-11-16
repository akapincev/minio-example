import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8080/books';

  constructor(private http: HttpClient) { }

  createBook(book: Book, image: File): Observable<Book> {
    const formData: FormData = new FormData();
    formData.append('book', new Blob([JSON.stringify(book)], {
      type: 'application/json'
    }));
    formData.append('image', image);

    return this.http.post<Book>(this.baseUrl, formData);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl);
  }
}
