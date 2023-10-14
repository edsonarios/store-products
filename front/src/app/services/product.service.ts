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

    getProducts(page: number = 1, limit: number = 5, name?: string): Observable<ListProduct> {
        let url = `${this.apiUrl}/products?page=${page}&limit=${limit}`
        if (name) {
            url += `&name=${name}`
        }
        console.log(this.apiUrl)
        // console.log('page', page, "limit", limit)
        return this.http.get<ListProduct>(url)
    }
}
