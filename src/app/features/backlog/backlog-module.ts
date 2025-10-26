import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BacklogRoutingModule } from './backlog-routing-module';
import { BacklogPage } from './pages/backlog-page/backlog-page';


@NgModule({
  imports: [
    CommonModule,
    BacklogRoutingModule,
  ]
})
export class BacklogModule { }
