import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    { path: 'dashboard',
      component: DashboardComponent,
      // canActivate: [ AuthGuard ],
      loadChildren: () => import('./child-routing.module').then( m => m.ChildRoutingModule  )
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }