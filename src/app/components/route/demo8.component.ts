
import { SelectorMatcher } from "@angular/compiler";
import {Component, OnInit} from "@angular/core";
import { ProductAPI } from "../../models/productapi.model";
import { ProductAPIService } from "../../services/productapi.service";

@Component({
    selector: 'app-root',
    templateUrl: './demo8.component.html'
})

export class Demo8Component implements OnInit{
    username!: string;
    password!: string;
    min!: string;
    max!: string;
    product!: ProductAPI; 
    products!: ProductAPI[];
    login!: string;

    constructor(
        private productAPIService: ProductAPIService
    ){}

    ngOnInit() {
        this.productAPIService.find().then( 
         res => {
         this.product = res;
         },
         err =>{
             console.log(err);
            }
        );
        this.productAPIService.findAll().then(
            res => {
                this.products = res;
            },
            err =>{
                console.log(err);
               }
        );
    }
    Search() {
        var min = parseFloat(this.min);
        console.log("min", min);
        var max = parseFloat(this.max);
        console.log("max", max);
        this.productAPIService.search(min, max).then(
            res => {
                this.products = res;
            },
            err =>{
                console.log(err);
               }
        );
    }
    Login(){
        
        this.productAPIService.login(this.username, this.password).then(
            res => {
                console.log("data", res)
                if (res == true) {
                    this.login = "Login thành công";
                } else {
                    this.login = "Login thất bại";
                }
            },
            err =>{
                console.log(err);
               }
        );
    }
    
}
