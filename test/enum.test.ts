import { DeliveryStatus, type delivery } from "../src/enum"

describe('Enum', () => {
  it("should using enum type", () => {

    const pakage: delivery = {
        id: 3,
        name: "casing hp ip 10/11/13/15/16 pro/med",
        status: DeliveryStatus.PENDING
    }

    console.info(pakage)

  }) 
})
