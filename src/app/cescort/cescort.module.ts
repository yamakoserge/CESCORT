import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CescortRoutingModule } from './cescort-routing.module';
import { CescortComponent } from './cescort.component';


@NgModule({
  declarations: [
    CescortComponent
  ],
  imports: [
    CommonModule,
    CescortRoutingModule
  ]
})
export class CescortModule { }
