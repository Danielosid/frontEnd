import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  id!: number;
  header!: string;
  book: Book = {
    id: 0,
    name: '',
    genreId: 0,
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.header = this.id === 0 ? 'Add Book' : 'Edit Book';

    if (this.id === 0) {
      this.book = this.bookService.onGetBook(this.id)!;
    }
  }

  onSubmit(form: NgForm) {
    let book: Book = {
      id: form.value.id,
      name: form.value.name,
      genreId: form.value.genreId,
    };

    if (this.id === 0) {
      this.bookService.onAdd(book);
    } else {
      this.bookService.onUpdate(book);
    }

    this.router.navigateByUrl('');
  }
}
