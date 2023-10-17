import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { Product } from 'src/app/types/product.type'

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnChanges {
    @Input() products: Product[] = []
    targetProducts: Product[] = []

    constructor() { }

    ngOnInit() {
        this.targetProducts = [...this.products]
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['products']) {
            this.targetProducts = [...this.products]
        }
    }

    truncateTitle(title: string, limit: number = 20): string {
        return title.length > limit ? title.slice(0, limit) + '...' : title
    }

    removeProduct(product: Product): void {
        const index = this.products.indexOf(product)
        if (index > -1) {
            this.products.splice(index, 1)
        }
    }

    get totalCost(): number {
        return this.products.reduce((acc, product) => acc + product.price, 0)
    }


}
