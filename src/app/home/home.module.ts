import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UploadComponent } from './containers/upload/upload.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UploadComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
