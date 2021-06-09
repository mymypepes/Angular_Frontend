import {Component, OnInit} from "@angular/core";
import { Product } from "src/app/models/product.model";
import { ProductService } from "src/app/services/product.service";

@Component({
    templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit{

    products!: Product[];

    constructor(
        private productService: ProductService
    ){}
    ngOnInit  (){ 
        this.products = this.productService.findAll();
    }

}