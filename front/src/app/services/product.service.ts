import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ListProduct, Product } from '../types/product.type'
import { environment } from '../../environment'
import { Categories, Category } from '../types/category.type'
import { MessageService } from 'primeng/api'

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = environment.url + '/api/products'

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    getProducts(page: number = 1, limit: number = 5, name?: string, categories?: Category[], price?: string, rating?: number): Observable<ListProduct> {
        let url = `${this.apiUrl}?page=${page}&limit=${limit}`
        if (name) {
            url += `&name=${name}`
        }
        if (categories?.length !== 0) {
            url += `&category=${categories?.map(category => category.name).join(',')}`
        }
        if (price) {
            url += `&price=${parseInt(price)}`
        }
        if (rating) {
            url += `&rating=${rating.toString()}`
        }
        console.log(url)
        return this.http.get<ListProduct>(url)
    }

    getCategories(): Observable<Categories> {
        const url = `${this.apiUrl}/tags`
        return this.http.get<Categories>(url)
    }

    getProduct(id: string): Observable<Product> {
        const url = `${this.apiUrl}/getById/${id}`
        console.log(url)
        return this.http.get<Product>(url)
    }

    createNewProduct(bodyNewProduct: Product) {
        const url = `${this.apiUrl}/`
        this.http.post<Product>(url, bodyNewProduct).subscribe({
            next: (response) => {
                console.log("Produc created", response)
                this.messageService.add({ severity: 'success', summary: '¡Success!', detail: 'Product create successfully.' })
            },
            error: (error) => {
                console.error('Error creating new product', error)
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'There was an error creating the product.' })
            }
        })
    }

    editProduct(productId: string, bodyNewProduct: Product) {
        const url = `${this.apiUrl}/${productId}`
        console.log(url)
        this.http.put<Product>(url, bodyNewProduct).subscribe({
            next: (response) => {
                console.log("Product edited", response)
                this.messageService.add({ severity: 'success', summary: '¡Success!', detail: 'Product edited successfully.' })
            },
            error: (error) => {
                console.error('Error editing product', error)
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'There was an error editing the product.' })
            }
        })
    }
}
