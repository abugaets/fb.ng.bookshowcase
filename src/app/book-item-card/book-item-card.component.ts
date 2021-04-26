import { Component, Input, OnInit } from '@angular/core';

import { BookItem } from '../database.service';

@Component({
  selector: 'bookitem-card',
  templateUrl: './book-item-card.component.html',
  styleUrls: ['./book-item-card.component.scss']
})
export class BookItemCardComponent implements OnInit {
  bookReview: any
  @Input() bookItem: BookItem;
  constructor() {
    this.bookItem = {} as BookItem
  }

  ngOnInit(): void { }

}
