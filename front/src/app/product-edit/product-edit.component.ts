/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core'
import { ProductService } from '../services/product.service'
import { capitalizeEachWord } from '../utils/utils'
import { Product } from '../types/product.type'
import { AutoCompleteCompleteEvent, Rating } from '../types/createAndEdit.type'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit{
    product:Product = {
        name: '',
        description: '',
        price: 0,
        stock: 0,
        rating: 0,
        sku: '',
        tags: [],
        imageUrl: ''
    }
    ratings: Rating[] = [
        { name: '1 ⭐', value: 1 },
        { name: '2 ⭐', value: 2 },
        { name: '3 ⭐', value: 3 },
        { name: '4 ⭐', value: 4 },
        { name: '5 ⭐', value: 5 },
    ]
    ratingSelected!:Rating

    categories: string[] = []
    suggestionCategories: string[] = []
    selectedCategories: string[] = []

    showImagePreview = false
    imagePreviewUrl = ''

    constructor(
      private productService: ProductService,
      private route: ActivatedRoute
    ) { }
  
    ngOnInit() {
        const productId = this.route.snapshot.paramMap.get('id')
        if (productId) {
            this.loadProduct(productId)
        }
      
        this.productService.getCategories().subscribe({
            next: (response) => {
                this.categories = response.data.map(category => capitalizeEachWord(category.name))
            },
            error: (error) => {
                console.error('Error fetching categories', error)
            }
        })
    }
    loadProduct(productId:string){
        this.productService.getProduct(productId).subscribe({
            next: (response) => {
                this.product = response
                console.log(response)

                this.selectedCategories = response.tags.map(category => capitalizeEachWord(category))

                let indexRating = 0
                if (response.rating) {
                    indexRating = response.rating
                }

                this.ratingSelected = this.ratings[indexRating - 1]

                this.imagePreviewUrl = response.imageUrl
                this.showImagePreview = true
            },
            error: (error) => {
                console.error('Error fetching product', error)
            }
        })
    }

    filterCategoryForSuggestion(event: AutoCompleteCompleteEvent) {
        const filtered: string[] = []
        const query = event.query

        for (let i = 0; i < this.categories.length; i++) {
            const category = this.categories[i]
            if (category.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(category)
            }
        }

        this.suggestionCategories = filtered
    }
  
    addNewCategory(event: Event): void {
        const input = event.srcElement as any
        const newElement = input.value as string
        const includeFilteredCategory = this.suggestionCategories.some(category => { 
            if (category.toLowerCase() === newElement.toLowerCase()){
                return true
            }
            return false

        })
        const includeCategories = this.selectedCategories.some(category => { 
            if (category.toLowerCase() === newElement.toLowerCase()){
                return true
            }
            return false

        })

        if (newElement !== '' &&
      !this.categories.includes(newElement.toLowerCase()) &&
      !includeCategories && 
      !includeFilteredCategory) {
            this.selectedCategories.push(newElement)
            this.suggestionCategories = []
            input.value = ''
        }
        console.log(this.selectedCategories)
    }

    updateImagePreview() {
        this.imagePreviewUrl = this.product.imageUrl
        this.showImagePreview = true
    }

    onSubmit(): void {
        const productToEdit = this.product
        if (this.ratingSelected) {
            productToEdit.rating = this.ratingSelected.value
        }

        if (this.selectedCategories.length !== 0 ) {
            productToEdit.tags = this.selectedCategories.map(category =>  category.toLowerCase())
        }

        const productId = productToEdit._id ? productToEdit._id : ''
        this.productService.editProduct(productId, productToEdit)
    }
}
