import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedPage3Component } from './booked-page3.component';

describe('BookedPage3Component', () => {
  let component: BookedPage3Component;
  let fixture: ComponentFixture<BookedPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedPage3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
