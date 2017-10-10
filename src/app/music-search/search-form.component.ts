import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-form',
  template: `
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Search for..." aria-label="Search for...">
    <span class="input-group-btn">
      <button class="btn btn-secondary" type="button">Go!</button>
    </span>
  </div>
  `,
  styles: []
})
export class SearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
