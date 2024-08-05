import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, AsyncPipe],
  selector: 'app-sub-hero-logo',
  templateUrl: './sub-hero-logo.component.html',
  styleUrls: ['./sub-hero-logo.component.scss'],
})
export class SubHeroLogoComponent {
  readonly logoUrl = '../../assets/images/badge.png';

  allText = [
    'Because you are a good boy',
    'Who doesn\'t like liver?',
    'Anything for mommy\'s little angel',
    'Jump if you like overalls!',
  ];
  index = 0;
  revolvingText = new BehaviorSubject(this.allText[this.index]);
  constructor() {
    setInterval(() => {
      if(this.index > 2) {
        this.index = 0;
      } else {
        this.index++;
      }
      this.revolvingText.next(this.allText[this.index]);
    }, 3000);
  }

  templateRendered() {
    console.log('Change Detection in SubHeroLogoComponent');
  }
}
