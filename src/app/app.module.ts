import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
import { InquiryComponent } from './customer/inquiry/inquiry.component';
import { AppRoutingModule } from './/app-routing.module';
import { CustomerService } from './service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './customer/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    InquiryComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
