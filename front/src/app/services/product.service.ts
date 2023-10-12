import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ListProduct } from './product.type'
import { environment } from '../../environment'

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = environment.url + '/api'

    constructor(private http: HttpClient) { }

    getProducts(): Observable<ListProduct> {
        console.log(this.apiUrl)
        return this.http.get<ListProduct>(this.apiUrl + '/products')
    }
}
