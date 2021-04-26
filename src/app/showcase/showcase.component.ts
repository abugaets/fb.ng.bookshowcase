import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookItem, DatabaseService } from './../database.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  public books: Observable<BookItem[]>;

  constructor(
    public dbService: DatabaseService
  ) {
    this.books = this.dbService.books;
  }

  ngOnInit(): void {

  }

}
