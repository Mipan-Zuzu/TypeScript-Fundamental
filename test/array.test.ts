describe('Array', () => {
  it("shoudl same with javascript", () => {

    const names: string[] = ["mipan","suki","liar"]
    const ages: number[] = [19,16,20]
    console.info(names, ages)
  })

  it("should only read", () => {
    const activity : ReadonlyArray<string> = ["mainGame", "tidur"]
    console.info(activity)

    // activity[0] = "suki" //Error
  })
})
