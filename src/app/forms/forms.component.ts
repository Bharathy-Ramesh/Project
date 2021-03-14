import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  profile = new FormGroup({
    name : new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
    
  }
  
}
