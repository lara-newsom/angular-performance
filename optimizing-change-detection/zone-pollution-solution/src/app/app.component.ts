import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private readonly router: Router
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      takeUntilDestroyed()
    ).subscribe(() => {
        const content = document.querySelector<HTMLElement>('#mainRouter');
        if(content){
          content.focus();
        }
      }
    )
  }
}
