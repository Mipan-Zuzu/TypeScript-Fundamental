describe('IF statement', () => {
    const log = console.log
  it("should suppoer IF statement", () => {

    const counting = (count: number, countBack: (num: number) => string): string => {
        return countBack(count)
    }

    expect(counting(10, (num: number): string => {
        if(num === 10) return `number ${num}`
        else if(num === 11) return `number ${num}`
        else return `number`
    })).toBe("number 10")

  })
  it("should support ternary operator", () => {

    const count: number = 90
    const counting = (counts: number): string => {
        const result: string = counts >= 80 ? "angka lebih besar dari 80" : "angka kurang dari 80"
        return result
    }

    log(counting(count))

  })

  it("should support switch statement", () => {
    
    const sayHello = (name?: string): string => {
        switch (name) {
            case "mipan" : 
                return `halo mipan`
                break
            case "suki" : 
                return `halo suki`
                break
            default :
                return `halo`
        }
    }

    log(sayHello("mipan"))
    log(sayHello("suki"))
    log(sayHello())

  })

  it("should support For loop", () => {
    
    const names: string[] = ["mipan", "pok3", "suki"]

    for(let i = 0; i < names.length; i ++) {
        log(names[i])
    }

    for(const name of names) {
        log(name)
    }

    for(const index in names){
        log(names[index])
    }

  })

  it("should support while loop", () => {

    let count: number = 0
    while(count <= 15){
        log(count ++)
    }

  })
  it("should support do while loop", () => {

    let count: number = 0
    do{
        log(count ++)
    }while (count < 15)

  })
})
