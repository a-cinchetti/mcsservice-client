import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import SwiperCore, {Pagination, Navigation, SwiperOptions} from 'swiper';
import Swiper from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-img-container',
  templateUrl: './img-container.component.html',
  styleUrls: ['./img-container.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ImgContainerComponent implements OnInit {
  @Input()
  imagesList: string[] | undefined;
  swiper: Swiper | undefined;
  paginationConfig: boolean | undefined;
  navigationConfig: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.imagesList)
    if (this.imagesList?.length == 1) {
      console.log("eccomi")
      this.paginationConfig = false;
      this.navigationConfig = false;
    }
  }

}
