import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFeedbackComponent } from './box-feedback.component';

describe('BoxFeedbackComponent', () => {
  let component: BoxFeedbackComponent;
  let fixture: ComponentFixture<BoxFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
