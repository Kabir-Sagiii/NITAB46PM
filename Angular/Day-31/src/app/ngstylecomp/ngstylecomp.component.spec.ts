import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstylecompComponent } from './ngstylecomp.component';

describe('NgstylecompComponent', () => {
  let component: NgstylecompComponent;
  let fixture: ComponentFixture<NgstylecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgstylecompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgstylecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
