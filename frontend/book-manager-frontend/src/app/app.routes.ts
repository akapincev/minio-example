import { Routes } from '@angular/router';
import {BookFormComponent} from './book-form/book-form.component';
import {BookListComponent} from './book-list/book-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'add-book', component: BookFormComponent },
  { path: 'books', component: BookListComponent }
];

