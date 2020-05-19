import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('class.classperso') isClass: boolean = false;
  constructor() { }
  @HostListener('mouseenter') mouseenter(){
    this.isClass = true;
  }

  @HostListener('mouseleave') mouseleave(){
    this.isClass = false;
  }
}
