import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CescortComponent } from './cescort.component';

const routes: Routes = [{ path: '', component: CescortComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CescortRoutingModule { }
