import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfwiththenelseComponent } from './ng-ifwiththenelse.component';

describe('NgIfwiththenelseComponent', () => {
  let component: NgIfwiththenelseComponent;
  let fixture: ComponentFixture<NgIfwiththenelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfwiththenelseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfwiththenelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
