describe('Optional', () => {
  it("Should using optional", () => {

    const sayHello = (name? : string | null)  => {
        if(name) {
            console.info(`halo saya ${name}`)
        }else{
            console.info(`halo saya siapa ya?`)
        }
    }

    sayHello("mipan")
    const name: String | undefined = undefined
    sayHello(name)
    sayHello(null)

  })
})
