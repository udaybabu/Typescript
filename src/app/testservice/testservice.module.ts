import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestserviceRoutingModule } from './testservice-routing.module';
import { TestserviceComponent } from './testservice.component';
import { EarthService } from './earth.service';

@NgModule({
  declarations: [
    TestserviceComponent
  ],
  imports: [
    CommonModule,
    TestserviceRoutingModule
  ],
  providers:[
    EarthService
  ]
})
export class TestserviceModule { }
