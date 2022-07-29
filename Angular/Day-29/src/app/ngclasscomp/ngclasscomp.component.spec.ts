import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclasscompComponent } from './ngclasscomp.component';

describe('NgclasscompComponent', () => {
  let component: NgclasscompComponent;
  let fixture: ComponentFixture<NgclasscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgclasscompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgclasscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
