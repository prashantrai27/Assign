import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  // {path:"",redirectTo:"/login", pathMatch:'full'},
  
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent},
  {path:'profile/:id',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:"**",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
