import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildComponent } from './wild/wild.component';

const routes: Routes = [{ path: 'firstweb', loadChildren: () => import('./firstweb/firstweb.module').then(m => m.FirstwebModule) }, 
{ path: 'testroute', loadChildren: () => import('./testroute/testroute.module').then(m => m.TestrouteModule) },
{ path: 'testservice', loadChildren: () => import('./testservice/testservice.module').then(m => m.TestserviceModule) },
{ path: 'testforms', loadChildren: () => import('./testforms/testforms.module').then(m => m.TestformsModule) },
{path:'**', component: WildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
