import type { ID } from "../src/type-alias"

describe('Object', () => {
  it("should object alias type", () => {

    const user: {id: ID, name: string, hoobies?: string[]} = {
        id: "ZXgY6RpLn",
        name: "mipan",
    }

    console.info(user)

  })
})
