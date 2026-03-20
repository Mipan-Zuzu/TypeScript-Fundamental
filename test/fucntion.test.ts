
describe('function', () => {
  it("should use function type", () => {

    const sayHello = (name: string ): string => {
        return `halo ${name}`
    }

    const sayName = (name: string): void => { // ketika pake void brrti kita boleh ga ngirim return value nya
        return 
    }

    expect(sayHello("mipan")).toBe("halo mipan")

  })

  it("should support default value", () => {

    const sayHello = (name: string = "user"): string => {
        return `helo ${name}`
    }

    expect(sayHello("suki")).toBe("helo suki")
    expect(sayHello()).toBe("helo user")

  })

  it("should support rest parameter", () => {

    const sum = (...values: number[]) : number => {
        let result: number = 0
        for(const value of values) {
            result += value
        }
        return result
    }

    expect(sum(1,3,3,3,4)).toBe(14)

  })

  it("sould support optional parameter", () => {
    
    const sayHello = (fristname:string , lastName?: string):string => {
        return lastName? `helo ${fristname} ${lastName}` : `helo ${fristname}`
    }

    expect(sayHello("mipan")).toBe("helo mipan")
    expect(sayHello("mipan", "suki")).toBe("helo mipan suki")

  })

  it("should support function overloading", () => {

    function callMe(value: string) : string;
    function callMe(value: number) : number;
    function callMe(value: any) {
        if(typeof value === "string") {
            return value
        }else if(typeof value === "number"){
            return value
        }
    }

  })

  it("support function as parameter", () => {

    const sayHello = (name: string, filter : (name: string) => string) => `Hello ${filter(name)}`
    const toUpper = (name: string): string => name.toUpperCase()

    expect(sayHello("mipan", toUpper)).toBe("Hello MIPAN")
    expect(sayHello("suki", (name: string): string => {
      return name.toUpperCase()
    })).toBe("Hello SUKI")
  })
})
