import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import * as _ from 'lodash';

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
    this.list = [
      {
      direction:"Minsk International 2 BY - Berlin Schoenefeld DE",
      date:"13 January 2020",
      price:"$256.00",
      save:"$32.00",
      tickets:55,
      status:"Open"
    },
    {
      direction:"Vilnius LT - Kiev Zhulhany UA",
      date:"25 January 2020",
      price:"$311.00",
      save:"$86.00",
      tickets:61,
      status:"Open"
    },
    {
      direction:"Tallin EE - Berlin Tegel DE",
      date:"29 January 2020",
      price:"$90.00",
      save:"$12.00",
      tickets:34,
      status:"Open"
    },
    {
      direction:"Prague CZ - St. Petersburg Pulkovo",
      date:"13 January 2020",
      price:"$140.00",
      save:"$89.00",
      tickets:55,
      status:"Open"
    },
    {
      direction:"Warsaw PL - Minsk International 2 BY",
      date:"17 January 2020",
      price:"$220.00",
      save:"$110.00",
      tickets:2,
      status:"Open"
    },
    {
      direction:"Kiev Zhulhany UA - Moscow Vnukovo RU",
      date:"27 January 2020",
      price:"$267.00",
      save:"$90.00",
      tickets:7,
      status:"Open"
    }
  ];
  }
  sort(attr:any){
    this.list = _.orderBy(this.list, [attr],  
    ['asc', 'desc']);
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

  fileChangeEvent(event:any)
  {
    debugger;
   console.log(event);
   const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        console.log(reader.result);
    };
  }

  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }

}