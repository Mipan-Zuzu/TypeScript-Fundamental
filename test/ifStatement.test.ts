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

 
})
