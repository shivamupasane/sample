import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetUserDetailsComponent } from './get-user-details/get-user-details.component';

const routes: Routes = [
  {
    path : 'getUserDetails',
    component : GetUserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
