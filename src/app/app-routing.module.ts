import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TdfformsComponent} from './component/tdfforms/tdfforms.component';
import {ReactiveformsComponent} from './component/reactiveforms/reactiveforms.component';
import {ReformswithfbComponent} from './component/reformswithfb/reformswithfb.component';
import {PagenotfoundComponent} from './component/pagenotfound/pagenotfound.component';
import {CheckGuard} from './guard/check.guard';

const routes: Routes = [
  {path:'tdf',component:TdfformsComponent,canDeactivate:[CheckGuard]},
  {path:'reactiveForms',component:ReactiveformsComponent},
  {path:'formBuilder',component:ReformswithfbComponent},
  {path :'',redirectTo:'/tdf',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
