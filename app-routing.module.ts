import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InternshipComponent } from './internship/internship.component';

export const routes: Routes = 
[
  {path:'applyNow',component:InternshipComponent},
  { path: '', redirectTo: 'home', pathMatch:"full" },
  { path: 'home', component: HomeComponent}
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }