import { Component, OnInit } from '@angular/core'
import { Product } from '../services/product.type'
import { ProductService } from '../services/product.service'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    layout: 'list' | 'grid' = 'grid'

    products: Product[] = []

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: (listProduct) => {
                this.products = listProduct.data
                console.log(this.products)
            },
            error: (error) => {
                console.error('Error fetching products', error)
            }
        })
    }
    getSeverity(product: Product) {
        switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success'

        case 'LOWSTOCK':
            return 'warning'

        case 'OUTOFSTOCK':
            return 'danger'

        default:
            return null
        }
    }
}
