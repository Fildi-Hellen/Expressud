import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
// import {VgApiService} from '@videogular/ngx-videogular/core';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  animations: [
    trigger('slideFromLeft', [
      transition('hidden => visible', [
        style({ transform: 'translateX(-100%)' }),
        animate('2.5s ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('slideFromRight', [
      transition('hidden => visible', [
        style({ transform: 'translateX(100%)' }),
        animate('2.5s ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ],
})
export class CategoriesComponent implements OnInit {

  images: { src: string, alt: string, category: string }[] = [
    { src: 'assets/img/fast.jpg', alt: 'Food', category: 'Food' },
    { src: 'assets/img/bag.jpg', alt: 'Groceries', category: 'Groceries' },
    { src: 'assets/img/product-sale.webp', alt: 'Skincare', category: 'Skincare' }
  ];
  
  currentIndex: number = 0;
  category: string = this.images[this.currentIndex].category;
  slideFromLeftState: string = 'isvisible';
  slideFromRightState: string = 'isvisible';

  countdown: { days: number, hours: number, minutes: number, seconds: number } = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  constructor() { }

  ngOnInit(): void {
    // Logic to change category based on image (carousel-item)
    // For simplicity, assuming category changes based on image index
    setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex >= this.images.length) {
        this.currentIndex = 0;
      }
      this.category = this.images[this.currentIndex].category;
    }, 5000); // Change category every 5 seconds

    // Update countdown every second
    setInterval(() => {
      const now = new Date();
      const eventDate = new Date('2024-05-01'); // Example event date

      const difference = eventDate.getTime() - now.getTime();

      this.countdown.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      this.countdown.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.countdown.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      this.countdown.seconds = Math.floor((difference % (1000 * 60)) / 1000);
    }, 1000); // Update countdown every second
  }

  checkElementVisibility() {
    const categoriesTextElement = document.querySelector('.categories__text') as HTMLElement;
    const categoriesCountdownElement = document.querySelector('.categories__deal__countdown') as HTMLElement;

    if (this.isElementInViewport(categoriesTextElement)) {
      this.slideFromLeftState = 'visible';
    }

    if (this.isElementInViewport(categoriesCountdownElement)) {
      this.slideFromRightState = 'visible';
    }
  }

  isElementInViewport(element: HTMLElement | null): boolean {
    if (!element) {
      return false;
    }

    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

}

