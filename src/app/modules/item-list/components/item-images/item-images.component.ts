import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-item-images',
  templateUrl: './item-images.component.html',
  styleUrls: ['./item-images.component.scss']
})
export class ItemImagesComponent {

}
