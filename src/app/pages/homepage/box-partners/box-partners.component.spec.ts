import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPartnersComponent } from './box-partners.component';

describe('BoxFeedbackComponent', () => {
  let component: BoxPartnersComponent;
  let fixture: ComponentFixture<BoxPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
