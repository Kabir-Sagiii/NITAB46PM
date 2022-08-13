import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttbindingComponent } from './attbinding.component';

describe('AttbindingComponent', () => {
  let component: AttbindingComponent;
  let fixture: ComponentFixture<AttbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttbindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
