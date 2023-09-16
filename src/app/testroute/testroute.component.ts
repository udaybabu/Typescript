import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testroute',
  templateUrl: './testroute.component.html',
  styleUrls: ['./testroute.component.scss']
})
export class TestrouteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    debugger
    const siteUrl = window.location.origin;
    const locationHref = window.location.href;
    console.log(`site ur is:${siteUrl} --- location:${locationHref}`,)
  }

}
