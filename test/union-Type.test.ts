describe('unionType', () => {
  it("should union type", () => {
    
    let data: string | number | boolean = "mipan"
    data = true
    data = 44

    console.log(`ini data ${data}`)

    let house: ReadonlyArray <string | number | object> = ["modern", "mediavel", "yunani"]
    console.log(`ini house ${house}`)

    let sample: Array <string | object | number> = [33, 44, 10, 22]
    sample = [{name : "mipan"}]
    console.log(sample)
  }) 

  it("should use typeOf", () => {
    const values = (value: string | number |boolean ) => {
        if(typeof value === "string") {
            return value.toUpperCase()
        }else if(typeof value === "number") {
            return value + 4
        }else {
            return !value
        }
    }

    expect(values("mipan")).toBe("MIPAN")
    expect(values(10)).toBe(14)
    expect(values(true)).toBe(false)
    
  })
})
