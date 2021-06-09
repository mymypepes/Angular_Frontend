import {Injectable} from "@angular/core"
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
    
    findAll(): Product[] {
        return [
            {
                id: 'p01',
                name: 'my my',
                status: false,
                price: 5.0,
                quantity: 5
            },
            {
                id: 'p02',
                name: 'abc',
                status: false, 
                price: 4.5,
                quantity: 4
            },
            {
                id: 'p03',
                name: 'van my',
                status: false,
                price: 6.0,
                quantity: 6
            },
            {
                id: 'p04',
                name: 'van',
                status: true,
                price: 6.0,
                quantity: 6
            }

        ];
    }
}