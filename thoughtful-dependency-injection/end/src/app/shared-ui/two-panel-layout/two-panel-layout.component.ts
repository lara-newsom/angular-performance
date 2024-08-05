import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-two-panel-layout',
  standalone: true,
  imports: [],
  templateUrl: './two-panel-layout.component.html',
  styleUrl: './two-panel-layout.component.scss'
})
export class TwoPanelLayoutComponent {
  @Input({required: true}) ariaLabel!: string;
  @Input() ariaLiveSetting: 'assertive' | 'polite' | 'off' = 'off';
}
