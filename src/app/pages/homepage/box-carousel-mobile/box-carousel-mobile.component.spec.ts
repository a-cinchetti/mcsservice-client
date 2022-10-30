import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCarouselMobileComponent } from './box-carousel-mobile.component';

describe('ImgContainerComponent', () => {
  let component: BoxCarouselMobileComponent;
  let fixture: ComponentFixture<BoxCarouselMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxCarouselMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCarouselMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
