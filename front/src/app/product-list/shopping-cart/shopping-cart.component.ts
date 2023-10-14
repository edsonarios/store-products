import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core'
import { Product } from 'src/app/services/product.type'

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls:['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {
    @Input() products: Product[] = []
    sourceProducts!: Product[]

    targetProducts!: Product[]

    constructor(
      private cdr: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.targetProducts = this.products
    }
}
