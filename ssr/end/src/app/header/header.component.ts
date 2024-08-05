import { Component, inject } from '@angular/core';
import { LINKS } from '../models/category';
import { ROUTE_TOKENS } from '../models/route-tokens';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService  } from '../services/cart.service';
import { NgOptimizedImage } from '@angular/common';
import { LOGGER_TOKEN } from '../tokens/logger-token';
import { UserService } from '../services/user.service';

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
  protected readonly router = inject(Router);
  private readonly logger = inject(LOGGER_TOKEN,  {
    optional: true
   });
  readonly userService = inject(UserService);
  showMenu = false;
  readonly LINKS = LINKS;
  readonly ROUTE_TOKENS = ROUTE_TOKENS;

  readonly menuItemOne = 'Menu Item One';
  readonly logoUrl = '../../assets/images/justlikepeople.png';

  toggleMenu(){
    this.showMenu = !this.showMenu;
    this.logger?.log('menu was closed!');
  }

  selectCategory(name: string){
    this.showMenu = false;
    this.logger?.log(`${name} was clicked!`);
  }
}
