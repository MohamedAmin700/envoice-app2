import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericService } from './service-layer/generic.service';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { AcceptedInvoicesComponent } from './accepted-invoices/accepted-invoices.component';
import { DemoComponent } from './demo/demo.component';
import { BranchesComponent } from './branches/branches.component';
import { ClientsComponent } from './clients/clients.component';
import { CountryComponent } from './country/country.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { AddDeductionNoticeComponent } from './add-deduction-notice/add-deduction-notice.component';
import { CommonSideNavComponent } from './common-side-nav/common-side-nav.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { LicenseComponent } from './license/license.component';
import { ViewAddedNoticeComponent } from './view-added-notice/view-added-notice.component';
import { ViewAddedDeductionNoticeComponent } from './view-added-deduction-notice/view-added-deduction-notice.component';
import { ViewSalesInvoiceComponent } from './view-sales-invoice/view-sales-invoice.component';
import { RejectedInvoicesComponent } from './rejected-invoices/rejected-invoices.component';
import { AddSalesInvoiceComponent } from './add-sales-invoice/add-sales-invoice.component';
import { SendInvoiceComponent } from './send-invoice/send-invoice.component';
import { TaxTypesComponent } from './tax-types/tax-types.component';
import { TypesComponent } from './types/types.component';
import { TypesGroupComponent } from './types-group/types-group.component';
import { UnitsComponent } from './units/units.component';
import { CommonModule } from '@angular/common';
import { SalesInvoicesComponent } from './sales-invoices/sales-invoices.component';
import { EditeEnvoiceComponent } from './edite-envoice/edite-envoice.component';
import { CommanHeaderComponent } from './comman-header/comman-header.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ProgramsComponent,
    AcceptedInvoicesComponent,
    DemoComponent,
    BranchesComponent,
    ClientsComponent,
    CountryComponent,
    AddNoticeComponent,
    AddDeductionNoticeComponent,
    CommonSideNavComponent,
    AnalyticsComponent,
    LicenseComponent,
    ViewAddedNoticeComponent,
    ViewAddedDeductionNoticeComponent,
    ViewSalesInvoiceComponent,
    RejectedInvoicesComponent,
    AddSalesInvoiceComponent,
    SendInvoiceComponent,
    TaxTypesComponent,
    TypesComponent,
    TypesGroupComponent,
    UnitsComponent,
    SalesInvoicesComponent,
    EditeEnvoiceComponent,
    CommanHeaderComponent,
    EditUserComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [GenericService],
  bootstrap: [AppComponent]
})
export class AppModule { }
