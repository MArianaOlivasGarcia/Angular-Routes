import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './screens/properties/properties.component';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    PropertiesComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
