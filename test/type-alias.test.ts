import type { Barang, Categories } from "../src/type-alias"

describe('type Alias', () => {
  it("should type alias", () => {
    const categories: Categories = {
        id : "ZXgYJiPKQEn79",
        name: "Samphoo"
    }

    const barang: Barang = {
        id: "HuPKI787NQWLHAs",
        name: "TRESEME",
        price: 200000,
        categories: categories,
        isAvailable: true
    }

    console.info(barang)
  }) 
})
