import { Component } from '@angular/core';
import { SubSectionComponent } from '../shared-ui/sub-section/sub-section.component';
import { HeroSectionComponent } from '../shared-ui/hero-section/hero-section.component';
import { SubHeroLogoComponent } from '../shared-ui/sub-hero-logo/sub-hero-logo.component';
import { UpperCasePipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    SubSectionComponent,
    HeroSectionComponent,
    SubHeroLogoComponent,
    UpperCasePipe,
    MatProgressSpinnerModule,
  ],
  styleUrls: ['./home.component.scss',]
})
export class HomeComponent {
  readonly homeImageUrl = '../../assets/images/heros/hero-5.jpg';
}
