import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesComponent } from './screens/properties/properties.component';

const routes: Routes = [
  { path: 'properties', component: PropertiesComponent },
  { path: '', redirectTo: 'properties' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildRoutingModule { }