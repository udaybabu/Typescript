import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstwebRoutingModule } from './firstweb-routing.module';
import { FirstwebComponent } from './firstweb.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { AgePipe } from './mainarea/age.pipe';


@NgModule({
  declarations: [
    FirstwebComponent,
    HeaderComponent,
    FooterComponent,
    MainareaComponent,
    AgePipe
  ],
  imports: [
    CommonModule,
    FirstwebRoutingModule
  ]
})
export class FirstwebModule { }
