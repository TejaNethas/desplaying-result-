import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmitionFormComponent } from './admitionform/admitionform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AplicationformComponent } from './aplicationform/aplicationform.component';


const routes: Routes = [
  {path: '', redirectTo: ' ', pathMatch: 'full'},
  {path:'aplication',component:AplicationformComponent},

  {path:'admitionfrom',component:AdmitionFormComponent},
  
  {path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
