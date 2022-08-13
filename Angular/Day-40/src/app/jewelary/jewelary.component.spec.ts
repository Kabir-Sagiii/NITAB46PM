import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelaryComponent } from './jewelary.component';

describe('JewelaryComponent', () => {
  let component: JewelaryComponent;
  let fixture: ComponentFixture<JewelaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JewelaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JewelaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
