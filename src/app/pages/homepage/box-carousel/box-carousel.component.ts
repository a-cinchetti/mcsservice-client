import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import SwiperCore, {Autoplay, EffectCoverflow, Pagination} from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

@Component({
  selector: 'app-box-carousel',
  templateUrl: './box-carousel.component.html',
  styleUrls: ['./box-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BoxCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
