import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  @Input() imageUrl = '../../assets/images/heros/hero-1.jpg';

  templateRendered() {
    console.log('Change Detection in HeroSectionComponent');
  }
}


