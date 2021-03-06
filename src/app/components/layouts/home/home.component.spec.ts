import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHomeComponent } from './home.component';

describe('LayoutHomeComponent', () => {
  let component: LayoutHomeComponent;
  let fixture: ComponentFixture<LayoutHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
