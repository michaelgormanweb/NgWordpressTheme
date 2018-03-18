import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMediaComponent } from './media.component';

describe('LayoutMediaComponent', () => {
  let component: LayoutMediaComponent;
  let fixture: ComponentFixture<LayoutMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
