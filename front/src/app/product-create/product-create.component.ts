/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}
@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{
    product = {
        name: '',
        description: '',
        price: '',
        stock: '',
        rating: null,
        sku: '',
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

    categories: string[] = []
    filteredCategories: string[] = []
    selectedCategories: string[] = []
    selectedCategory: string[] = []
    ngOnInit() {
        this.categories = ["Electronics", "Clothing", "Toys", "Books", "Book"]
    }

    filterCategory(event: AutoCompleteCompleteEvent) {
        const filtered: string[] = []
        const query = event.query

        for (let i = 0; i < this.categories.length; i++) {
            const category = this.categories[i]
            if (category.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(category)
            }
        }

        this.filteredCategories = filtered
    }
    
    addNewCategory(event: Event): void {
        const input = event.srcElement as any
        const newElement = input.value as string
        const includeFilteredCategory = this.filteredCategories.some(category => { 
            if (category.toLowerCase() === newElement.toLowerCase()){
                return true
            }
            return false

        })
        
        if (newElement !== '' &&
        !this.categories.includes(newElement.toLowerCase()) &&
        !this.selectedCategory.includes(newElement.toLowerCase()) && 
        !includeFilteredCategory) {
            this.selectedCategory.push(newElement)
            this.filteredCategories = []
            input.value = ''
        }
    }
    constructor() { }



    onSubmit(): void {
        console.log(this.product)
    }

    showImagePreview = false
    imagePreviewUrl = ''

    updateImagePreview() {
        this.imagePreviewUrl = this.product.imageUrl
        this.showImagePreview = true
    }
}
