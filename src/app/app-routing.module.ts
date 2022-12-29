import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummymanagerComponent } from './dummymanager/dummymanager.component';

const routes: Routes = [
  {
    path:'' , redirectTo:'/contact/admin',pathMatch:'full'
  },
 {
   path:'contact/admin', component:DummymanagerComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
