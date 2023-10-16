import { Component } from '@angular/core'

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
    product = {
        name: '',
        description: '',
        price: '',
        rating: null,
        category: null,
        imageUrl: ''
    }

    ratings = [
        { name: '1 ⭐', value: 1 },
        { name: '2 ⭐', value: 2 },
        { name: '3 ⭐', value: 3 },
        { name: '4 ⭐', value: 4 },
        { name: '5 ⭐', value: 5 },
    ]

    categories = [
        { name: 'Electronics', value: 'electronics' },
        { name: 'Electronics', value: 'electronics' },
        { name: 'Electronics', value: 'electronics' },
        { name: 'Electronics', value: 'electronics' },
        { name: 'Electronics', value: 'electronics' },
    ]

    constructor() { }



    onSubmit(): void {
        console.log(this.product)
    }

    showImagePreview = false
    imagePreviewUrl = ''
    
    updateImagePreview() {
        this.imagePreviewUrl = this.product.imageUrl
        this.showImagePreview = true // Puedes agregar más lógica aquí para determinar cuándo mostrar la previsualización
    }
}
