import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import SwiperCore from 'swiper';
import Swiper, {Navigation, Pagination} from 'swiper';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-box-carousel-mobile',
  templateUrl: './box-carousel-mobile.component.html',
  styleUrls: ['./box-carousel-mobile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BoxCarouselMobileComponent implements OnInit {
  @Input()
  mobile: boolean = false;
  @Input()
  imagesList: string[] | undefined;
  swiper: Swiper | undefined;
  paginationConfig: boolean | undefined;
  navigationConfig: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    if (this.imagesList?.length == 1) {
      this.paginationConfig = false;
      this.navigationConfig = false;
    }
  }
}
