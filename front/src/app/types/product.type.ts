export interface ListProduct {
    total: number
    page: number
    totalPages: number
    limit: number
    data: Product[]
}

export interface Product {
    _id?: string
    name: string
    description: string
    sku: string
    imageUrl: string
    tags: string[]
    price: number
    stock: number
    priceHistory?: PriceHistory[]
    stockHistory?: StockHistory[]
    __v?: number
    rating?:number
    inventoryStatus?:string
    category?:string
}

export interface PriceHistory {
    date: string
    price: number
    _id: string
}

export interface StockHistory {
    date: string
    stock: number
    _id: string
}
