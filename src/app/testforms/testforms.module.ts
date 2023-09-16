import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestformsRoutingModule } from './testforms-routing.module';
import { TestformsComponent } from './testforms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
@NgModule({
  declarations: [
    TestformsComponent,
    TemplateformComponent,
    ReactiveformComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TestformsRoutingModule,
    ReactiveFormsModule
  ]
})
export class TestformsModule { }
