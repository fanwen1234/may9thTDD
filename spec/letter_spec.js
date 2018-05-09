const letter = require("../letter")

describe("letter", ()=> {

    it("should return [] when input is empty string", ()=> {
        expect(letter()).toEqual([])
    })

    it("should return [a] when input is a ", ()=> {
        expect(letter('a')).toEqual(["a"])
    })

    it("should return [ab,ba] when input is abc", ()=> {
        expect(letter("ab")).toEqual(["ab","ba"])
    })

    it("should return [abc,acb,bac,bca,cba,cab] when input is abc", ()=> {
        expect(letter("abc")).toEqual(["abc","acb","bac","bca","cba","cab"])
    })
})
