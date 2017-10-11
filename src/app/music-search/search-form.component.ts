import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, AbstractControl, FormControl, FormControlName, FormArray, FormBuilder, Validators } from '@angular/forms';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import { MusicService } from './music.service';

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
        formControlName="query">
    </div>
    <ng-container *ngIf="queryForm.controls.query.touched || queryForm.controls.query.dirty">
      <div *ngIf="queryForm.controls.query.errors?.required">Field is required</div>
      <div *ngIf="queryForm.controls.query.errors?.minlength">
        Field must contain at least {{queryForm.controls.query.errors?.minlength.requiredLength}} characters
      </div>
    </ng-container>
  </form>
  `,
  styles: [`
    form .ng-invalid.ng-touched,
    form .ng-invalid.ng-dirty {
      border: 2px solid red;
    }
  `]
})
export class SearchFormComponent implements OnInit {

  queryForm:FormGroup;

  constructor(private builder:FormBuilder, private service:MusicService) { 
    this.queryForm = builder.group({
      'query': builder.control('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });

    this.queryForm
      .get('query')
      .valueChanges
      .debounceTime(400)
      .subscribe(query => {
        this.search(query);
      })
  }

  search(query) {
    console.log(query);
    this.service.search(query);
  }

  ngOnInit() {
  }

}
