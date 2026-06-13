import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: false
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private context?: gsap.Context;

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      return;
    }

    this.context = gsap.context(() => {
      const content = element.querySelectorAll(
        'h2, h3, p, img, form, .grid > div, .space-y-6 > div'
      );

      gsap.from(content, {
        y: 28,
        opacity: 0,
        duration: .85,
        stagger: 0.045,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 82%',
          once: true
        }
      });
    }, element);
  }

  ngOnDestroy(): void {
    this.context?.revert();
  }
}
