describe('IF statement', () => {
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
})
