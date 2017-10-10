import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[album-item]',
  template: `
    <img class="card-img-top" src="http://simpleicon.com/wp-content/uploads/flash.png" 
      alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
    </div>
  `,
  styles: []
})
export class AlbumItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
