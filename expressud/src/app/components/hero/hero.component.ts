import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
  @ViewChild(SlickCarouselComponent) slickModal: SlickCarouselComponent | undefined;

  slides = [
    { img: "assets/img/mobile.webp" },
    { img: "assets/img/fast.jpg" },
    { img: "assets/img/home.jpeg" },
    {img: "assets/img/venue.jpg"}
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  ngAfterViewInit() {
    if (this.slickModal) {
      // this.slickModal.slickInit();
    }
  }
}
