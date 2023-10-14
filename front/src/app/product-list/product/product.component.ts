/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Product } from 'src/app/services/product.type'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent{
    @Input() products: Product[] = []
    @Input() totalRecords: number = 0
    @Output() pageChange: EventEmitter<any> = new EventEmitter<any>()
    @Input() first: number = 0
    @Input() limit: number = 0
    layout: 'list' | 'grid' = 'grid'


    getStockTitle(product: Product) {
        const stock = product.stock
        if (stock >= 100) return 'INSTOCK'
        if (stock > 0 && stock < 100) return 'LOWSTOCK'
        if (stock === 0) return 'OUTOFSTOCK'
        return undefined
    }

    getSeverity(product: Product) {
        const stock = product.stock
        if (stock >= 100) return 'success'
        if (stock > 0 && stock < 100) return 'warning'
        if (stock === 0) return 'danger'
        return undefined
    }

    onPageChange(event: any): void {
        this.pageChange.emit(event)
    }
}
