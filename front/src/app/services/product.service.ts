import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ListProduct } from '../types/product.type'
import { environment } from '../../environment'
import { Categories, Category } from '../types/category.type'

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = environment.url + '/api'

    constructor(private http: HttpClient) { }

    getProducts(page: number = 1, limit: number = 5, name?: string, categories?:Category[], price?: string): Observable<ListProduct> {
        let url = `${this.apiUrl}/products?page=${page}&limit=${limit}`
        if (name) {
            url += `&name=${name}`
        }
        if (categories?.length !== 0 ) {
            url += `&category=${categories?.map(category => category.name).join(',')}`
        }
        if (price) {
            url += `&price=${parseInt(price)}`
        }
        console.log(url)
        return this.http.get<ListProduct>(url)
    }

    getCategories(): Observable<Categories> {
        const  url = `${this.apiUrl}/products/tags`
        return this.http.get<Categories>(url)
    }
}
