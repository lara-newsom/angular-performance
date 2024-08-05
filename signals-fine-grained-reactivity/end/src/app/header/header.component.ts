import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly cartService = inject(CartService);
  showMenu = signal(false);
  readonly LINKS = LINKS;
  readonly ROUTE_TOKENS = ROUTE_TOKENS;

  readonly logoUrl = '../../assets/images/justlikepeople.png';

  toggleMenu(){
    this.showMenu.set(!this.showMenu());
    console.log('menu was closed!');
  }

  selectCategory(name: string){
    this.showMenu.set(false);
    console.log(name, ' was clicked!');
  }
  templateRendered() {
    console.log('Change Detection in HeaderComponent');
  }
}
