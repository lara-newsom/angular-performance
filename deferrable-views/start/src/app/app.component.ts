import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LOGGER_TOKEN } from './tokens/logger-token';
import { LoggerService } from './services/logger.service';

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
  providers: [
    {
      provide: LOGGER_TOKEN,
      useClass: LoggerService,
    }
  ]
})
export class AppComponent {
}
