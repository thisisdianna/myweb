import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JmtBlogComponent } from './jmt-blog.component';

describe('JmtBlogComponent', () => {
  let component: JmtBlogComponent;
  let fixture: ComponentFixture<JmtBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JmtBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JmtBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
