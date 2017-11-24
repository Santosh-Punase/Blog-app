import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogShowcaseComponent } from './blog-showcase.component';

describe('BlogShowcaseComponent', () => {
  let component: BlogShowcaseComponent;
  let fixture: ComponentFixture<BlogShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
