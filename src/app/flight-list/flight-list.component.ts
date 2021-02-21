import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {
  offerTab:any=1;
  regTab:any=0;
  infoTab:any=0;
  list:any;
  changeText1:boolean=false;
  changeText2:boolean=false;
  changeText3:boolean=false;
  changeText4:boolean=false;
  changeText5:boolean=false;
  changeText6:boolean=false;
  changeText7:boolean=false;
  constructor() {
   }
  
  ngOnInit(): void {
    this.list = [{
      direction:"Minsk International 2 BY - Berlin Schoenefeld DE",
      date:"13 January 2020",
      price:"$256.00",
      save:"$32.00",
      tickets:55,
      status:"Open"
    }];
  }
  changetable(val:any){
    debugger;
    if(val==1){
     this.offerTab = 1;
     this.regTab = 0;
     this.infoTab = 0;
    }
    if(val==2){
      this.offerTab = 0;
      this.regTab = 1;
      this.infoTab = 0;
     }
     if(val==3){
      this.offerTab = 0;
      this.regTab = 0;
      this.infoTab = 1;
     }
  }

}