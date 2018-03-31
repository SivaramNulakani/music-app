import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gmc',
  templateUrl: './gmc.component.html',
  styleUrls: ['./gmc.component.css']
})
export class GmcComponent implements OnInit {

  curr_date: Date = new Date();
  gmcArray;
  selectedValue="All";
  constructor() {
    this.gmcArray = [{
      "date": "March 23, 2018",
      "items": [
        {
          "status": "Open",
          "Description": "Your case has been opened",
          "LastUpdatedDate": "March 23, 2018"
        },
        {
          "status": "Closed",
          "Description": "Your case has been closed",
          "LastUpdatedDate": "March 23, 2018"
        }
      ]
    },
    {
      "date": "March 24, 2018",
      "items": [
        {
          "status": "Open",
          "Description": "Your case has been opened",
          "LastUpdatedDate": "March 24, 2018"
        },
        {
          "status": "Closed",
          "Description": "Your case was closed",
          "LastUpdatedDate": "March 24, 2018"
        },
        {
          "status": "Open",
          "Description": "Your case has been opened",
          "LastUpdatedDate": "March 24, 2018"
        }
      ]
    }];
  }
  onChange(event) {
    this.gmcArray = this.gmcArray.filter(data => data.items.filter(x => x.status == event.value));
    console.log(this.gmcArray)
    console.log(event.value);
    this.selectedValue=event.value;
  }

  ngOnInit() {
  }

}
