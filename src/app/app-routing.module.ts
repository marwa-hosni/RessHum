import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';




const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  
  
  
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  
  
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
