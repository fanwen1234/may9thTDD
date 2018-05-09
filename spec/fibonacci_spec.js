const fibonacci = require("../fibonicca")

describe("fibonacci", ()=> {

    it("should return 1 when input 1", ()=> {
        expect(fibonacci(1)).toBe(1)
    })

    it("should return 1 when input 2", ()=> {
        expect(fibonacci(2)).toBe(1)
    })
})
