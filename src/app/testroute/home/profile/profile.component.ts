import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, CanActivate, Route, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  @Input() testString:string = '';
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((items) => {
      console.log(`Profile type is:${items.profileType} Profile name is:${items.name}`)
    })
  }

  ngOnChanges(){
    console.log('This is profile ngOnChanges')
  }

  ngDOCheck(){
    console.log('This is profile ngDOCheck')
  }

  ngAfterViewInit(){
    console.log('This is profile ngAfterViewInit')
  }

  ngAfterViewChecked(){
    console.log('This is profile ngAfterViewChecked')
  }

}
