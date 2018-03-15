import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './account/login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProvisionListComponent} from './provision/provision-list/provision-list.component';
import {CreateProvisionComponent} from './provision/create-provision/create-provision.component';
import {ProvisionDetailComponent} from './provision/provision-detail/provision-detail.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'provisions', component: ProvisionListComponent },
  { path: 'provisions/create', component: CreateProvisionComponent },
  { path: 'provisions/:id', component: ProvisionDetailComponent },
  { path: 'customers', component: CustomerListComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
