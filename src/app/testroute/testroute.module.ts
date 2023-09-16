import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestrouteRoutingModule } from './testroute-routing.module';
import { TestrouteComponent } from './testroute.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { MylibraryComponent } from './mylibrary/mylibrary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './home/profile/profile.component';


@NgModule({
  declarations: [
    TestrouteComponent,
    HomeComponent,
    ExploreComponent,
    MylibraryComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    TestrouteRoutingModule
  ]
})
export class TestrouteModule { }
