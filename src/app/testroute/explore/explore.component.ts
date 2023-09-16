import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngAfterViewInit(){
    console.log("ngViewAfterInit")
  }
  ngDoCheck(){
    console.log("ngDoCheck")
  }
  ngOnChanges(){
    console.log("ngOnChanges")
  }
  ngOnDestroy(){
    alert('Hello World')
    console.log("ngDestroy")
  }

  btnBackToHome(){
    this.router.navigate(['/firstweb'])
  }

}
