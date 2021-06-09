import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { ProductAPIService } from './services/productapi.service';
import { TicketAPIService } from './services/ticketapi.service';
import { TicketsComponent } from './components/tickets/ticket.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ProductService,
    ProductAPIService,
    TicketAPIService
  ],
  bootstrap: [TicketsComponent]
})
export class AppModule {
  
 }
