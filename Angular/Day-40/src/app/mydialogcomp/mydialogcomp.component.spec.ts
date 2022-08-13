import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydialogcompComponent } from './mydialogcomp.component';

describe('MydialogcompComponent', () => {
  let component: MydialogcompComponent;
  let fixture: ComponentFixture<MydialogcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydialogcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydialogcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
