import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'modal',
  template: `
   <div class="card">
    <div class="card-body">
        <h4 class="card-title">{{title}}</h4>
        <ng-content></ng-content>
    </div>
    <div class="card-footer">
      <ng-content select="footer, .footer"></ng-content>      
    </div>
   </div>
  `,
  styles: []
})
export class ModalComponent implements OnInit {

  @Input()
  title

  constructor() { }

  ngOnInit() {
  }

}
