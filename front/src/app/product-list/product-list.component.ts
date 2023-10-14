/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { Product } from '../services/product.type'
import { ProductService } from '../services/product.service'
interface City {
    name: string,
    code: string
}
interface Country {
    name: string;
    code: string;
}
@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Product[] = []
    layout: 'list' | 'grid' = 'grid'
    totalRecords: number = 0
    page: number = 1
    limit: number = 5

    searchTerm: string = ''

    cities!: City[]

    selectedCities!: City[]
    countries!: Country[]

    selectedCountries!: Country[]
    value!: number
    
    paymentOptions: any[] = [
        { name: '⭐', value: 1 },
        { name: '⭐', value: 2 },
        { name: '⭐', value: 3 },
        { name: '⭐', value: 4 },
        { name: '⭐', value: 5 }
    ]

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.loadProducts(this.page, this.limit)
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ]
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ]
        
    }
    
    loadProducts(page: number, limit: number, name?: string): void {
        this.productService.getProducts(page, limit, name).subscribe({
            next: (response) => {
                this.products = response.data
                this.totalRecords = response.total
                console.log(response)
            },
            error: (error) => {
                console.error('Error fetching products', error)
            }
        })
    }
    
    handlePageChange(event: any): void {
        this.page = event.page +1
        this.limit = event.rows
        this.loadProducts(this.page, this.limit, this.searchTerm)
    }

    searchProducts() {
        this.loadProducts(1, this.limit, this.searchTerm)
    }
}
