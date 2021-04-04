import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  profile :any;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.profile = this.formbuilder.group({
      name : '',
      email:'',
      password:'',
      religion:'',
      date:''
    });
  }
  
}
