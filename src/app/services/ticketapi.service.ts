import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TicketAPI } from "../models/ticketapi.model";
import { CountAndTotal } from "../models/countandtotal.model";

@Injectable()
export class TicketAPIService{ 

    private BASE_URL: string = 'https://localhost:44381/api/ticket/';

    constructor(
        private httpClient: HttpClient

    ){}

    
    findAll() {
        return this.httpClient.get(this.BASE_URL + 'findAll').toPromise().then(res => res as TicketAPI[]);
    }
    search(min: number, max: number) {
        return this.httpClient.get(this.BASE_URL + 'search/' + min + '/' + max).toPromise().then(res => res as TicketAPI[]);
    }
    searchbycustomer(customerId: number) {
        return this.httpClient.get(this.BASE_URL + 'search-by-customerid/' + customerId).toPromise().then(res => res as TicketAPI[]);
    }
    countandtotalamount(countandtotalamount: number) {
        return this.httpClient.get(this.BASE_URL + 'count-and-total-amount/' + countandtotalamount).toPromise().then(res => res as CountAndTotal);
    }
    searchbymonth(year: string, month: string) {
        return this.httpClient.get(this.BASE_URL + 'searchbymonth/' + year + "/"+ +month).toPromise().then(res => res as TicketAPI[]);
    }

    create(name: string, price:number, customer:number, flightId:number) {
        let body = {
            "name": name,
            "price": price,
            "customerId": customer,
            "flightId":flightId
        };
        return this.httpClient.post(this.BASE_URL + 'create', body).toPromise().then(res => res);
    }

}