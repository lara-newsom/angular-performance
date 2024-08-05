import { Directive, ElementRef, NgZone, OnInit, inject} from '@angular/core';

@Directive({
  selector: '[appJlpButton]',
  standalone: true,
})
export class JlpButtonDirective implements OnInit {
  private readonly ngZone = inject(NgZone);

  constructor(
    private elementRef: ElementRef
  ) {
    this.elementRef.nativeElement.style.padding= '10px';
    this.elementRef.nativeElement.style['min-width'] = '44px';
    this.elementRef.nativeElement.style['min-height'] = '44px';
    this.elementRef.nativeElement.style['font-size'] = 'var(--element-text)';
    this.addBlurStyles();
  }
  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.elementRef.nativeElement.addEventListener('mouseenter', () => this.addFocusStyles());
      this.elementRef.nativeElement.addEventListener('focus', () => this.addFocusStyles());
      this.elementRef.nativeElement.addEventListener('mouseleave', () => this.addBlurStyles());
      this.elementRef.nativeElement.addEventListener('blur', () => this.addBlurStyles());
    })
  }

  addFocusStyles() {
    if(!this.elementRef.nativeElement.disabled) {
      this.elementRef.nativeElement.style['background-color'] = 'var(--background-dark-blue-hover)';
      this.elementRef.nativeElement.style.filter = 'drop-shadow(0 0 4px var(--drop-shadow))';
      this.elementRef.nativeElement.style['font-weight'] = 'var(--semi-bold-text)';
    }
  }

  addBlurStyles() {
    this.elementRef.nativeElement.style['background-color'] = 'var(--background-dark-blue)';
    this.elementRef.nativeElement.style.filter = 'none';
    this.elementRef.nativeElement.style['font-weight'] = 'var(--regular-text)';
  }
}
