import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestserviceComponent } from './testservice.component';

const routes: Routes = [{ path: '', component: TestserviceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestserviceRoutingModule { }
