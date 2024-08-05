import { Component, inject } from '@angular/core';
import { LINKS } from '../models/category';
import { ROUTE_TOKENS } from '../models/route-tokens';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
  ]
})
export class HeaderComponent {
  protected readonly cartService = inject(CartService);
  showMenu = false;
  readonly LINKS = LINKS;
  readonly ROUTE_TOKENS = ROUTE_TOKENS;

  readonly menuItemOne = 'Menu Item One';
  readonly logoUrl = 'justlikepeople.png';

  toggleMenu(){
    this.showMenu = !this.showMenu;
    console.log('menu was closed!');
  }

  selectCategory(name: string){
    this.showMenu = false;
    console.log(name, ' was clicked!');
  }
}
