import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDispFormComponent } from './book-disp-form.component';

describe('BookDispFormComponent', () => {
  let component: BookDispFormComponent;
  let fixture: ComponentFixture<BookDispFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDispFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDispFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
