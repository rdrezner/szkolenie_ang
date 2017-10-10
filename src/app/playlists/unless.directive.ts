import { Directive, TemplateRef, ViewContainerRef, Input, ViewRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  cached:ViewRef;

  @Input('unless')
  set unless(hide) {
    if(hide) {
      this.cached = this.vcr.detach();
    } 
    else {
      if(this.cached) {
        this.vcr.insert(this.cached);
      }
      else {
        this.vcr.createEmbeddedView(this.tpl, {
          $implicit: 'ala ma kota'
        });
      }
    }
  }

  constructor(private tpl:TemplateRef<any>, private vcr:ViewContainerRef) { 
    console.log("unless");
  }

}
