import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchfetchComponent } from './ngswitchfetch.component';

describe('NgswitchfetchComponent', () => {
  let component: NgswitchfetchComponent;
  let fixture: ComponentFixture<NgswitchfetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgswitchfetchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgswitchfetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
