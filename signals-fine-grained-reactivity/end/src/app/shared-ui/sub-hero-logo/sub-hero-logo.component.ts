import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  selector: 'app-sub-hero-logo',
  templateUrl: './sub-hero-logo.component.html',
  styleUrls: ['./sub-hero-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  revolvingText = signal(this.allText[this.index]);
  constructor() {
    setInterval(() => {
      if(this.index > 2) {
        this.index = 0;
      } else {
        this.index++;
      }
      this.revolvingText.set(this.allText[this.index]);
    }, 3000);
  }

  templateRendered() {
    console.log('Change Detection in SubHeroLogoComponent');
  }
}
