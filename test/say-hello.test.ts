import { sayHello } from "../src/say-hello";

describe('sayHello', () => {
  it("should return hello", (): void => {
    expect(sayHello("mipan")).toBe("hello mipan")
  })
})
