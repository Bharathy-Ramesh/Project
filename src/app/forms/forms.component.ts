import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  profile :any;
  constructor() { }

  ngOnInit(): void {
    this.profile = new FormGroup({
      name : new FormControl(),
      email:new FormControl(),
      password:new FormControl(),
      religion:new FormControl(),
      date:new FormControl()
    });
  }
  
}
