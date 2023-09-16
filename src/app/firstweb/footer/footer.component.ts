import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  isTest = true;
  caseTest ="b";
  selectedValue = "Two";
  constructor() { }

  ngOnInit(): void {
  }

}
