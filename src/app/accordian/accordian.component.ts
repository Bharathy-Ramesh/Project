import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  userInput:any;
  travelType:any;
  departure:any;
  destination:any;
  from:any;
  adult:any;
  child:any;
  minDate:any =new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
