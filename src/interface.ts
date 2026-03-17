export interface BarangOlshop {
    id: string
    name: string
    addres: string
    exp: number
    isavalible: boolean
    desc? : string
}

export interface Person {
    id: string
    name: string
    telp?: number
    readonly npwp: string
    readonly ktp: boolean
}