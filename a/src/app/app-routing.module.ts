import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChcolateComponent } from './comps/chcolate/chcolate.component';
import { IceCreamComponent } from './comps/ice-cream/ice-cream.component';
import { DataTitleComponent } from './comps/data-title/data-title.component';
import { CanActiveWiskeyService } from './services/guards/can-active-wiskey.service';
import { JsonAppUserComponent } from './comps/json-app-user/json-app-user.component';
import { LoginComponent } from './comps/login/login.component';






const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'chocolate', component: ChcolateComponent },
  { path: 'ice-cream', component: IceCreamComponent ,
  canActivate: [CanActiveWiskeyService] },




{ path: 'user/:id', component: JsonAppUserComponent },

  {path: 'data-title', 
    component: DataTitleComponent,
    data: { title: 'Heroes List 2', cow:'moo' } 
  },


  {path: '', redirectTo: '/chocolate', pathMatch: 'full'},
  {path: '**', redirectTo: '/chocolate', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }