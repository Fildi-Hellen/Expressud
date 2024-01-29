import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
  
})
export class HeroComponent implements OnInit, AfterViewInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild('carousel')
  carousel!: ElementRef;

  ngAfterViewInit() {
    this.activateCarousel();
  }

  activateCarousel() {
    $(this.carousel.nativeElement).carousel(); // Initialize the carousel using jQuery
  }
}
