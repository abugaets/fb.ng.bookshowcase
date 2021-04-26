import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { BookItem, DatabaseService} from '../database.service';

@Component({
  selector: 'book-disp-form',
  templateUrl: './book-disp-form.component.html',
  styleUrls: ['./book-disp-form.component.scss']
})
export class BookDispFormComponent implements OnInit {
  public id: string;
  public bookItem: Observable<BookItem | undefined>;
  constructor(
    private dbService: DatabaseService, private router: Router, private route: ActivatedRoute, public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.bookItem = this.route.paramMap.pipe(
      switchMap(params => {
        this.id = params.get('id') as string;
        if (typeof this.id !== 'string') this.router.navigate(['/']);
        return this.dbService.getDocument(this.id);
      })
    )
  }

}
