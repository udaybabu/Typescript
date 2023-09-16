import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstwebComponent } from './firstweb.component';

describe('FirstwebComponent', () => {
  let component: FirstwebComponent;
  let fixture: ComponentFixture<FirstwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstwebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
