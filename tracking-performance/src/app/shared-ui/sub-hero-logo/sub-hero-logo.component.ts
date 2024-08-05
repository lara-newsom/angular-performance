import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-sub-hero-logo',
  templateUrl: './sub-hero-logo.component.html',
  styleUrls: ['./sub-hero-logo.component.scss']
})
export class SubHeroLogoComponent {
  readonly logoUrl = '../../assets/images/badge.png';
}
