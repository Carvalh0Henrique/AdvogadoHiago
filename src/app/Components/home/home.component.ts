import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private gsapContext?: gsap.Context;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.setupGsap(reduceMotion);
  }

  ngOnDestroy(): void {
    this.gsapContext?.revert();
  }

  private setupGsap(reduceMotion: boolean): void {
    if (reduceMotion) return;

    this.gsapContext = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });

      intro
        .from('.hero-rule', { scaleX: 0, duration: .8, transformOrigin: 'left' })
        .from('.hero-eyebrow', { y: 14, opacity: 0, duration: .65 }, '-=.4')
        .from('.hero-title-line', { yPercent: 80, opacity: 0, stagger: .11, duration: .9 }, '-=.3')
        .from('.hero-subtitle', { y: 18, opacity: 0, duration: .7 }, '-=.55')
        .from('.hero-actions a', { y: 14, opacity: 0, stagger: .08, duration: .55 }, '-=.4')
        .from('.trust-item', { y: 12, opacity: 0, stagger: .07, duration: .5 }, '-=.25')
        .from('.legal-seal', { scale: .96, opacity: 0, duration: 1 }, '-=1');
    }, this.host.nativeElement);
  }

}
