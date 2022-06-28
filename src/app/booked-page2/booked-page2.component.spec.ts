import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedPage2Component } from './booked-page2.component';

describe('BookedPage2Component', () => {
  let component: BookedPage2Component;
  let fixture: ComponentFixture<BookedPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedPage2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
