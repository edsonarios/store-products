import { Component, Input } from '@angular/core'
import { Product } from 'src/app/services/product.type'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls:['./product.component.css']
})
export class ProductComponent {
    layout: 'list' | 'grid' = 'grid'
    typeButton: 'success' | 'warning' | 'danger' = 'success'

    @Input() products: Product[] = []

    getSeverity(product: Product) {
        switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success'

        case 'LOWSTOCK':
            return 'warning'

        case 'OUTOFSTOCK':
            return 'danger'

        default:
            return undefined
        }
    }
}
