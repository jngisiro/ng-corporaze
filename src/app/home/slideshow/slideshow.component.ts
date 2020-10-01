import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit, OnDestroy {
  banners: { image: string; title: string; subtitle: string }[] = [
    {
      title: 'Company Registration',
      subtitle:
        'Register your company to gives to give it a legal Identity/status.',
      image:
        'https://images.unsplash.com/photo-1542822038-3a1810a5fb69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
    },
    {
      title: 'Business Name Registration',
      subtitle:
        'Registration enables the business to access opportunities like loans, tenders, financing.',
      image:
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    },
    {
      title: 'Intellectual Property Registration',
      subtitle:
        'Gain exclusive rights to exploit and benefit from your creations.',
      image:
        'https://images.unsplash.com/photo-1518611507436-f9221403cca2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
    },
    {
      title: 'Taxation and Auditing',
      subtitle:
        'Do not miss to file an annual return each calendar year after incorporation.',
      image:
        'https://images.unsplash.com/photo-1589621317313-38f7fbf010cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    },
    {
      title: 'Name Search & Registration',
      subtitle:
        'Search facility enables you to search against millions registered entities',
      image:
        'https://images.unsplash.com/photo-1586685983931-c460519010b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    },
    {
      title: '24/7 Business Support',
      subtitle:
        'We offer on-demand assistance, technical support, or even remote support.',
      image:
        'https://images.unsplash.com/photo-1448932284983-0c7b152eba33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    },
  ];

  currentSlide = this.banners[0];
  currentIndex = 0;
  timer: Subscription;

  constructor() {}

  getStyle() {
    return `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
      this.banners[this.currentIndex].image
    })`;
  }

  ngOnInit(): void {
    this.timer = interval(5000).subscribe(() => {
      this.moveSlide('next');
    });
  }

  moveSlide(direction: string) {
    if (direction === 'prev') {
      if (this.currentIndex === 0) {
        this.currentIndex = this.banners.length - 1;
      } else {
        this.currentIndex -= 1;
      }
    }

    if (direction === 'next') {
      if (this.currentIndex === this.banners.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex += 1;
      }
    }
  }

  clearInterval() {
    this.timer.unsubscribe();
  }

  ngOnDestroy() {
    this.clearInterval();
  }
}
