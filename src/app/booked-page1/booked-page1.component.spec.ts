import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedPage1Component } from './booked-page1.component';

describe('BookedPage1Component', () => {
  let component: BookedPage1Component;
  let fixture: ComponentFixture<BookedPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedPage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
