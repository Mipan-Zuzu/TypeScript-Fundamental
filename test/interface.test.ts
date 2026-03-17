import type { WeatherApi } from "../src/extending-interface"
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

  it("should support indexable interface", () => {
    
    interface Arrays {
        [index: number] : string
    }

    const cars:Arrays = ["lightingmequen", "maker"]
    console.log(cars)

  })

  it("should use Object", () => {

    interface StringDectonary {
        [key: string] : string
    }

    const dictonary:StringDectonary = {
        name: "mipan",
        address: "jalan bumi linggah"
    }

    console.info(dictonary["name"])

  })

  it("should use extending-interface", () => {

    const apiweather: WeatherApi = {
        method: "GET",
        type: "application/json",
        body: ["bali", "partly Cloud", "30", "wind 3km/h"]
    }

    console.info(apiweather)

  })

  it("sould support function in interface", () => {

    interface Person {
        names: string
        sayHello(name:string) : string
    }

    const person:Person = {
        names: "mipan",
        sayHello (name: string): string {
            return `hello ${name} my name is ${this.names}` //dont use arrow func for use this to get var in an object 
        }
    }
    console.info(person.sayHello("mipanPok3"))

  })

  it("shoudl Type Assertions", () => {

    const shop: any = {
        name: "suki",
        address: "jalan mawar harum"
    }

    const OlShop:Person = shop as Person //memaksa ts untuk yakinin bahwa itu tipe data yg valid dengan as
    console.log(OlShop)

  })
})
