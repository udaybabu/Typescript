import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { SignupGuard } from '../guards/signup.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExploreComponent } from './explore/explore.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './home/profile/profile.component';
import { MylibraryComponent } from './mylibrary/mylibrary.component';
import { TestrouteComponent } from './testroute.component';

const routes: Routes = [{ path: '', 
 //redirectTo: 'home',
 //pathMatch: 'full',
component: TestrouteComponent,
children:[
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', 
  component:HomeComponent},
  {path:'home', 
  canActivateChild:[SignupGuard],
  children:[
  {path:':profileType/:name',
  component:ProfileComponent
  }]},
  {path:'explore', component:ExploreComponent, canActivate:[LoginGuard]},
  {path:'mylibrary', component:MylibraryComponent},
  {path:'dashboard', component:DashboardComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestrouteRoutingModule { }
