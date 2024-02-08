import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import {VgApiService} from '@videogular/ngx-videogular/core';


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
export class CategoriesComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    this.autoplay();
  }

  slideFromLeftState: string = 'hidden';
  slideFromRightState: string = 'hidden';
  @ViewChild('media') media: any; videoPlayer!: ElementRef<HTMLVideoElement>;
  
  ngOnInit(){
    this.autoplay();
  }

  private intersectionObserver: IntersectionObserver | undefined;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if elements are in the viewport and trigger animations
    this.checkElementVisibility();
  }

  // ngAfterViewInit() {
  //   this.initializeVideo();
  // }

  ngOnDestroy() {
    // Clean up the IntersectionObserver when the component is destroyed
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
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

  preload: string = 'auto';
  api: VgApiService = new VgApiService;
 
  onPlayerReady(source: VgApiService) {
      this.api = source;
  
  this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
    this.autoplay.bind(this)
)}

autoplay(){
  this.api.play();
}

}

