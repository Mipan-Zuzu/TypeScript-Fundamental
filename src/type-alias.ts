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

export type rand1 = string | number
export type rands1 = string | boolean

export type rand2 = {
    id: rand1
    name: string
}

export type rand3 = {
    id: rand1
    name: string
    isAvailable: rands1
}

export type rand4 = {
    information: rand2 | rand3
    data: rand1 | rand2
}