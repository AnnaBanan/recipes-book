import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isopen = false;

  @HostListener('click') onClick() {
    this.isopen = !this.isopen;
  }

  // complicated but working:
  //
  // constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  // nativeElem = this.elementRef.nativeElement;
  // @HostListener('click') onClick() {
  //   if (this.nativeElem.classList.contains('open')) {
  //     this.renderer.removeClass(this.nativeElem, 'open');
  //   } else {
  //     this.renderer.addClass(this.nativeElem, 'open');
  //   }
  // }
}
