import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDispFormComponent } from './book-disp-form/book-disp-form.component';
import { BookEditFormComponent } from './book-edit-form/book-edit-form.component';
import { BookWrapperComponent } from './book-wrapper/book-wrapper.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'addbook', component: AddBookComponent },
  { path: 'book', component: BookWrapperComponent,
    children: [
      { path: ':id', component: BookDispFormComponent },
      { path: ':id/edit', component: BookEditFormComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
