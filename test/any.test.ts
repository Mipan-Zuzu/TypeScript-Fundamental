describe('any', () => {
  it("should any type", () => {

    const personal : any = {
        name : "mipan",
        age: 30,
        maried : false
    }

    personal.region = "indonesia"

    console.log(personal)

  }) 
})
