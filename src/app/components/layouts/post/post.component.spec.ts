import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPostComponent } from './post.component';

describe('LayoutPostComponent', () => {
  let component: LayoutPostComponent;
  let fixture: ComponentFixture<LayoutPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
