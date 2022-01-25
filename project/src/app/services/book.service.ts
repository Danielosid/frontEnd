import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  books: Book[] = [
    {
      id: 1,
      name: 'Harry Potter',
      genreId: 3,
    },
    {
      id: 2,
      name: 'Cenusareasa',
      genreId: 2,
    },
  ];

  constructor() {}

  onGet() {
    return this.books;
  }
  onGetBook(id: Number) {
    return this.books.find((x) => x.id === id);
  }

  onAdd(book: Book) {
    this.books.push(book);
  }
  onDelete(id: Number) {
    let book = this.books.find((x) => x.id === id)!;
    let index = this.books.indexOf(book, 0);
    this.books.splice(index, 1);
  }

  onUpdate(book: Book) {
    let oldBook = this.books.find((x) => x.id === book.id)!;
    oldBook.name = book.name;
    oldBook.genreId = book.genreId;
  }
}
