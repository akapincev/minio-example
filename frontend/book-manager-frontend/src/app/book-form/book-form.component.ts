import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {BookService} from '../services/book.service';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatButtonModule, HttpClientModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
  bookForm: FormGroup;
  selectedImage: File | undefined;

  constructor(private fb: FormBuilder, private bookService: BookService) {
    this.bookForm = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    });
  }

  onImageSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.selectedImage = fileList[0];
    }
  }

  onSubmit(): void {
    if (this.bookForm.valid && this.selectedImage) {
      this.bookService.createBook(this.bookForm.value, this.selectedImage).subscribe({
        next: (book) => {
          // Handle the response
        },
        error: (err) => {
          // Handle errors
        }
      });
    }
  }
}
