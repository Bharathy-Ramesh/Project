import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  userInput:any;
  panelOpenState:any=false;
  floatLabelControl = new FormControl('oneway');
  constructor() { }

  ngOnInit(): void {
  }

}
