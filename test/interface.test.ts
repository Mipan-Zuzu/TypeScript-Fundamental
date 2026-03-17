import type { BarangOlshop, Person} from "../src/interface"

describe('interface', () => {
  it("shloud suport interface", () => {

    const client:BarangOlshop = {
        id: "HJii8gTwXcZsQpLkMHg",
        name: "spatula spongebob",
        addres: "jl mawar keris sakti",
        exp: 2807209,
        isavalible: true
    }

    const person:Person = {
        id: "QWXERTYA",
        name: "mipanPok3",
        npwp: "23u812",
        ktp: true
    }

    console.log(person)
    console.log(client)

  })

  it("should use interface fucntion", () => {

    interface SayHello {
        (val1:string , val2:number) : string
    }

    const sayThat:SayHello = (name:string, age:number) : string  => {
        if(name && age) {
            return `${name} ${age}`
        }else{
            return `gagal`
        }
    }

    expect(sayThat("mipan", 10)).toBe("mipan 10")

  })
})
