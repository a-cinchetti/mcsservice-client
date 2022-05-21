import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFieldsComponent } from './box-fields.component';

describe('BoxFieldsComponent', () => {
  let component: BoxFieldsComponent;
  let fixture: ComponentFixture<BoxFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
