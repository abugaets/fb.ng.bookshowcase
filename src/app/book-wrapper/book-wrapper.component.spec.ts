import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookWrapperComponent } from './book-wrapper.component';

describe('BookWrapperComponent', () => {
  let component: BookWrapperComponent;
  let fixture: ComponentFixture<BookWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
