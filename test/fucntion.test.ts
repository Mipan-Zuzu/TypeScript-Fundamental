describe('function', () => {
  it("should use function type", () => {

    const sayHello = (name: string): string => {
        return `halo ${name}`
    }

    const sayName = (name: string): void => { // ketika pake void brrti kita boleh ga ngirim return value nya
        return 
    }

    expect(sayHello("mipan")).toBe("halo mipan")

  })
})
