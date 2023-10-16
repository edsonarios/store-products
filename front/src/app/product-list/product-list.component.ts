/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { Product } from '../types/product.type'
import { ProductService } from '../services/product.service'
import { Category } from '../types/category.type'

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

    searchByName: string = ''

    categories: Category[] = []
    selectedCategories: Category[] = []

    price: string = ''

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
        this.loadProducts()
        this.loadCategories()
    }
    
    loadProducts(): void {
        this.productService.getProducts(this.page, this.limit, this.searchByName, this.selectedCategories, this.price).subscribe({
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
        this.page = event.page + 1
        this.limit = event.rows
        this.loadProducts()
    }

    searchProducts() {
        this.loadProducts()
    }

    loadCategories(): void {
        this.productService.getCategories().subscribe({
            next: (response) => {
                this.categories = response.data
            },
            error: (error) => {
                console.error('Error fetching categories', error)
            }
        })
    }
}
