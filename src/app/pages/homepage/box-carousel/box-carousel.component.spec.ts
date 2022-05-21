import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCarouselComponent } from './box-carousel.component';

describe('BoxCarouselComponent', () => {
  let component: BoxCarouselComponent;
  let fixture: ComponentFixture<BoxCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
