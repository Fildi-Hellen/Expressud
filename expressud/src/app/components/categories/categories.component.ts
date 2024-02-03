import { Component, ElementRef, HostListener, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

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

  slideFromLeftState: string = 'hidden';
  slideFromRightState: string = 'hidden';
  @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef<HTMLVideoElement>;

  private intersectionObserver: IntersectionObserver | undefined;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if elements are in the viewport and trigger animations
    this.checkElementVisibility();
  }

  ngAfterViewInit() {
    this.initializeVideo();
  }

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

  initializeVideo() {
    // Set up the IntersectionObserver
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the video is in the viewport, play it
          this.playVideo();
        } else {
          // If the video is not in the viewport, pause it
          this.pauseVideo();
        }
      });
    }, options);

    // Observe the video element
    if (this.videoPlayer.nativeElement) {
      this.intersectionObserver.observe(this.videoPlayer.nativeElement);
    }
  }

  playVideo() {
    const video = this.videoPlayer.nativeElement;
    video.play();
  }

  pauseVideo() {
    const video = this.videoPlayer.nativeElement;
    video.pause();
  }
}
