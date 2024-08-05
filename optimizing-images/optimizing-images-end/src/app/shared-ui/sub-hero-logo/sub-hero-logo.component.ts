import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  selector: 'app-sub-hero-logo',
  templateUrl: './sub-hero-logo.component.html',
  styleUrls: ['./sub-hero-logo.component.scss']
})
export class SubHeroLogoComponent {
  readonly logoUrl = 'badge.png';
}
