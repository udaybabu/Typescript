import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstwebComponent } from './firstweb.component';

const routes: Routes = [{ path: '', component: FirstwebComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstwebRoutingModule { }
