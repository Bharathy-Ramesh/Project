import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validator} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  flight:any;
  hotels:any;
  registers:any;
  firstname:any;
  lastname:any;
  email:any;
  login:any;
  password:any;
  confirm:any;
  travelType:any;
  departure:any;
  destination:any;
  from:any;
  adult:any;
  child:any;
  place:any;
  checkin:any;
  checkout:any;
  pickup:any;
  return:any;
  setbool:boolean=true;
  minDate:any =new Date();
  matcher = new MyErrorStateMatcher();
  constructor() { }

  ngOnInit(): void {
    
  }
  validate(mail:any){
    debugger;
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
        { 
          return (true);
        }
        this.setbool= false;
        return (false);
  }
}
