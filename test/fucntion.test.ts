
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
})
