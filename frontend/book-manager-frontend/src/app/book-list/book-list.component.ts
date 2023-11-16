import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookService} from '../services/book.service';
import {Book} from '../models/book.model';
import {MatCardModule} from '@angular/material/card';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, HttpClientModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (err) => {
        console.error('Error fetching books', err);
      }
    });
  }
}
