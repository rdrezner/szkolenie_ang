import { Directive, ElementRef, OnInit, Input, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective implements OnInit {

  hover: boolean;

  @Input('highlight')
  highlightColor = '#000000';

  @HostBinding('style.border-left-color')
  get getColor() {
    return this.hover ? this.highlightColor : 'inherit';
  }

  @HostListener('mouseenter')
  onEnter(x:number) {
    this.hover = true;
  }

  @HostListener('mouseleave')
  onExit(x:number) {
    this.hover = false;
  }

  ngOnInit() {
    
  }

  constructor(private elem:ElementRef, private renderer:Renderer2) { 
  }

}
