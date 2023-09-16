import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  test:string = ''
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.test = "Hellow World";
  }
  moveToCarriers(){
    this.test = "Hellow Pratap";
 // this.router.navigate(['testroute/dashboard'])
  }
  ngOnChanges(){
    console.log('This is home ngOnChanges')
  }

}
