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
  constructor() { }
  
  ngOnInit(): void {
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