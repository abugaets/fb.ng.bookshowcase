import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { AuthService } from '../auth.service';
import { BookItem, DatabaseService } from '../database.service';

type BookFromType = {
  author: string;
  createdAt: string;
  description: string;
  imageUrl: string;
  isbn: number;
  notes: string;
  pages: number;
  publisher: string;
  rating: number;
  review: string;
  title: string;
  year: number;
}

@Component({
  selector: 'book-edit-form',
  templateUrl: './book-edit-form.component.html',
  styleUrls: ['./book-edit-form.component.scss']
})
export class BookEditFormComponent implements OnInit {
  private id: string;
  public state: 'create' | 'edit';
  public imageUrl: string;
  public bookItem: BookItem | undefined;
  public disabled = false;
  public form = {} as BookFromType;
  public bookForm: FormGroup = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    author: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ]),
    imageUrl: new FormControl(''),
    isbn: new FormControl('', [
      Validators.required
    ]),
    notes: new FormControl(''),
    pages: new FormControl(null),
    publisher: new FormControl('', [
      Validators.required
    ]),
    rating: new FormControl(0),
    review: new FormControl(''),
    year: new FormControl(null, [
      Validators.required
    ])
  });

  constructor(
    private messageService: MessageService,
    private dbService: DatabaseService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.bookForm.get('imageUrl')?.valueChanges.subscribe(val => {
      this.imageUrl = val;
    })
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') as string;
      if (typeof this.id !== 'string') {
        this.state = 'create';
        return ;
      };
      this.state = 'edit';
      this.dbService.getDocument(this.id).subscribe(data => {
        this.bookItem = data;
        if (!data) return;
        this.bookForm.patchValue({
          title: data.title,
          author: data.author,
          description: data.description,
          imageUrl: data.imageUrl,
          isbn: data.isbn,
          notes: data.notes,
          pages: data.pages,
          publisher: data.publisher,
          rating: data.rating,
          review: data.review,
          year: data.year
        })
      });
    })
  }

  invalidForm() {
    this.messageService.add({severity:'warn', summary:'Warning', detail:'Please, fill form corrctly', life: 7000});
  }

  errorOnSave() {
    this.messageService.add({severity:'error', summary:'Warning', detail:'Error during request', life: 7000});
  }

  saveForm() {
    if (!this.checkForm()) {
      this.invalidForm();
      return
    };
    this.disabled = true;
    if (this.state === 'edit') {
      this.dbService.updateDocument(this.id, this.bookForm.value)
      .then(() => this.router.navigate(['/book', this.id]))
      .catch(() => this.errorOnSave());
      return;
    }
    this.dbService.setDocument(this.bookForm.value)
      .then(() => this.router.navigate(['/']))
      .catch(() => this.errorOnSave());
  }

  checkForm() {
    return this.bookForm.valid;
  }

}
