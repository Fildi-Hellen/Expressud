import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
  
})
export class HeroComponent {
  slides = [
    {img: "assets/img/mobile.webp"},
    {img: "assets/img/fast.jpg"},
    {img: "assets/img/blog/bike.jpg"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // @ViewChild('carousel')
  // carousel!: ElementRef;

  // ngAfterViewInit() {
  //   this.activateCarousel();
  // }

  // activateCarousel() {
  //   $(this.carousel.nativeElement).carousel(); // Initialize the carousel using jQuery
  // }
}
