import { Directive, Input } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appSpinnerButton]',
})
export class SpinnerButtonDirective {
  @Input('appSpinnerButton')
  isWaiting!: boolean;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.disabled = this.isWaiting;
    var spanLoader = document.createElement('span');
    var firstSpan = this.el.nativeElement.firstChild;
    var nextSpan = firstSpan.firstChild;
    if (this.isWaiting) {
      spanLoader.className += 'mx-1 fi fi-spinner spin';
      firstSpan.insertBefore(spanLoader, nextSpan);
    } else {
      if (firstSpan.firstChild.classList.contains('fi-spinner')) {
        firstSpan.firstChild.remove();
      }
    }
  }
}
