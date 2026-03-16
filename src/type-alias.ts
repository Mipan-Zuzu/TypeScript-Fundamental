export type ID = string | number 

export type Categories = {
    id: ID | boolean
    name: string
}

export type Barang = {
    id: ID | boolean
    name: string
    price: number
    categories: Categories
    isAvailable: boolean
}