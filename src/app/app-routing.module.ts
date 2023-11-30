import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { PropertiesComponent } from './menu/properties/properties.component';
import { ContactsComponent } from './menu/contacts/contacts.component';
import { ListingComponent } from './menu/listing/listing.component';
import { ClientsComponent } from './menu/clients/clients.component';
import { ReportsComponent } from './menu/reports/reports.component';
import { SettingComponent } from './menu/setting/setting.component';
import { LogoutComponent } from './menu/logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
