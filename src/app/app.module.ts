import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// tslint:disable-next-line:import-spacing
import { FormsModule }   from '@angular/forms';
// tslint:disable-next-line:import-spacing
import { HttpClientModule }    from '@angular/common/http';

// tslint:disable-next-line:import-spacing
import { AppRoutingModule }     from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
