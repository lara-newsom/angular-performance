import { NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTE_TOKENS } from '../models/route-tokens';

@Component({
  selector: 'app-featured-pet',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    UpperCasePipe,
  ],
  templateUrl: './featured-pet.component.html',
  styleUrls: ['./shared-featured-pet-styles.scss','./featured-pet.component.scss']
})
export class FeaturedPetComponent {
  protected readonly ROUTE_TOKENS = ROUTE_TOKENS;
}
