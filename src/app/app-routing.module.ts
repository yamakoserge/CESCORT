import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './basic/auth/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, { path: 'cescort', loadChildren: () => import('./cescort/cescort.module').then(m => m.CescortModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
