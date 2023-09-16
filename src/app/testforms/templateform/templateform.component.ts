import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit {

  institutions : any;
  defaultValue : any;
  testName : any;

  currency = [
    { key: 'USD', value: 'USD', isSelected: true },
    { key: 'AUD', value: 'AUD', isSelected: false }
  ];
  defaultSelectedCurrency: any;
  constructor() { }

  ngOnInit(): void {
    this.defaultSelectedCurrency = this.currency[0].value;
    this.institutions = [
      {name:'uday', id:'1', isSelect:true},
      {name:'pradeep', id:'2', isSelect:false},
      {name:'ishanth', id:'3', isSelect:false},
      {name:'radha', id:'4', isSelect:false},
    ]
    this.defaultValue = this.institutions[0]
    this.testName = 'ishanth';
  }
  clickLogin(logiForm:NgForm){
   
  }
  ChangingValue(event:any){

  }

}
