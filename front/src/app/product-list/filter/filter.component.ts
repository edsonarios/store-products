import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core'
import { Product } from 'src/app/services/product.type'

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls:['./filter.component.css']
})

export class FilterComponent implements OnInit {
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
