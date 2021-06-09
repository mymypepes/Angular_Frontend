import {Component, OnInit} from "@angular/core";
import { TicketAPI } from "../../models/ticketapi.model";
import { TicketAPIService } from "../../services/ticketapi.service";
import { CountAndTotal } from "../../models/countandtotal.model";

@Component({
    selector: 'app-root',
    templateUrl: './ticket.component.html'
})
export class TicketsComponent implements OnInit{
    min!: string;
    max!: string;
    customerId!: string;
    ticketApi!: TicketAPI[];
    countAndTotalCustomerId!: number;
    countAndTotal!: CountAndTotal;
    searchByMonth!: string;
    searchByYear!: string;
    result!: string;

    nameForm!: string;
    priceForm!: number;
    customerIdForm!: number;
    FlightIdForm!: number;

    constructor(
        private ticketAPIService: TicketAPIService
    ){}
    ngOnInit  (){ 
        this.ticketAPIService.findAll().then(
            res => {
                console.log("data,", res);
                this.ticketApi = res;
            },
            err =>{
                console.log(err);
                this.ticketApi = [];
               }
        );
    }
    Search() {
        var min = parseFloat(this.min);
        console.log("min", min);
        var max = parseFloat(this.max);
        console.log("max", max);
        this.ticketAPIService.search(min, max).then(
            res => {
                this.ticketApi = res;
            },
            err =>{
                console.log(err);
               }
        );
    }
    SearchByCustomerId() {
        var customerId = parseInt(this.customerId);
        this.ticketAPIService.searchbycustomer(customerId).then(
            res => {
                console.log("data customer,", res);
                this.ticketApi = res;
            },
            err =>{
                console.log(err);
               }
        );
    }
    Create() {
        this.ticketAPIService.create(this.nameForm, this.priceForm, this.customerIdForm, this.FlightIdForm).then(
            res => {
                if (res == true) {
                    this.ticketAPIService.findAll().then(
                        res => {
                            console.log("data,", res);
                            this.ticketApi = res;
                        },
                        err =>{
                            console.log(err);
                            this.ticketApi = [];
                           }
                    );
                } else {
                    
                }
            },
            err =>{
                console.log(err);
               }
        );
    }
    CountAndTotalAmount(){
        this.ticketAPIService.countandtotalamount(this.countAndTotalCustomerId).then(
            res => {
                this.countAndTotal = res;
                this.result = "Số lượng: "+ this.countAndTotal.count +" và tổng tiền: "+ this.countAndTotal.totalAmount;
            },
            err =>{
                console.log(err);
               }
        );
    }
    SearchByMonth(){
        this.ticketAPIService.searchbymonth(this.searchByYear, this.searchByMonth).then(
            res => {
                console.log("data customer,", res);
                this.ticketApi = res;
            },
            err =>{
                console.log(err);
               }
        );
    }
}