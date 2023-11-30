import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './menu/dashboard/dashboard.component';
import { PropertiesComponent } from './menu/properties/properties.component';
import { ContactsComponent } from './menu/contacts/contacts.component';
import { ListingComponent } from './menu/listing/listing.component';
import { ClientsComponent } from './menu/clients/clients.component';
import { ReportsComponent } from './menu/reports/reports.component';
import { SettingComponent } from './menu/setting/setting.component';
import { FooterComponent } from './footer/footer.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { LogoutComponent } from './menu/logout/logout.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    PropertiesComponent,
    ContactsComponent,
    ListingComponent,
    ClientsComponent,
    ReportsComponent,
    SettingComponent,
    FooterComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CanvasJSAngularChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
