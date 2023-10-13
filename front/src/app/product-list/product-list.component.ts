/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { Product } from '../services/product.type'
import { ProductService } from '../services/product.service'

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

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.loadProducts(this.page, this.limit)
    }
    
    loadProducts(page: number, limit: number): void {
        this.productService.getProducts(page, limit).subscribe({
            next: (response) => {
                this.products = response.data
                this.totalRecords = response.total
                console.log(this.totalRecords)
            },
            error: (error) => {
                console.error('Error fetching products', error)
            }
        })
    }
    
    handlePageChange(event: any): void {
        this.page = event.page +1
        this.limit = event.rows
        this.loadProducts(this.page, this.limit)
    }
}
