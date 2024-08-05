import { Directive, ElementRef } from '@angular/core';
import { JlpButtonDirective } from './jlp-button.directive';

@Directive({
  selector: '[appJlpBorderButton]',
  standalone: true,
  hostDirectives: [
    JlpButtonDirective,
  ]
})
export class JlpBorderButtonDirective {

  constructor(
    private readonly elementRef: ElementRef,
  ) {
    this.elementRef.nativeElement.style['border-radius'] = 'var(--border-radius)';
  }
}
