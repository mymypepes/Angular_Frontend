import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductAPI } from "../models/productapi.model";

@Injectable()
export class ProductAPIService{ 

    private BASE_URL: string = 'https://localhost:44381/api/product/';

    constructor(
        private httpClient: HttpClient

    ){}

    find() {
        return this.httpClient.get(this.BASE_URL + 'Find').toPromise().then(res => res as ProductAPI);
    }
    findAll() {
        return this.httpClient.get(this.BASE_URL + 'findAll').toPromise().then(res => res as ProductAPI[]);
    }
    search(min: number, max: number) {
        return this.httpClient.get(this.BASE_URL + 'search/' + min + '/' + max).toPromise().then(res => res as ProductAPI[]);
    }
    login(username: string, password: string){
        let body = {
            "username": username,
            "password": password
        };
        return this.httpClient.post(this.BASE_URL + 'login', body).toPromise().then(res => res);
    }

}