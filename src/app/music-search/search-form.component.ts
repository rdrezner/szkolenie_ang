import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, AbstractControl, FormControl, FormControlName, FormArray } from '@angular/forms';

@Component({
  selector: 'search-form',
  template: `
  <form [formGroup]="queryForm">
    <div class="input-group">
      <input type="text" 
        class="form-control" 
        placeholder="Search for..." 
        aria-label="Search for..." 
        #queryRef 
        formControlName="query"
        (keyup.enter)="search(queryRef.value)">
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button" (click)="search(queryRef.value)">Go!</button>
      </span>
    </div>
  </form>
  `,
  styles: []
})
export class SearchFormComponent implements OnInit {

  queryForm:FormGroup;

  constructor() { 
    this.queryForm = new FormGroup({
      'query': new FormControl('Batman')
    });
  }

  search(query) {
    console.log(query);
  }

  ngOnInit() {
  }

}
