import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { TestformsComponent } from './testforms.component';

const routes: Routes = [{ path: '', component: TestformsComponent,
children:[
  {path: 'tempform', component:TemplateformComponent},
  {path:'reactform', component:ReactiveformComponent}
] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestformsRoutingModule { }
