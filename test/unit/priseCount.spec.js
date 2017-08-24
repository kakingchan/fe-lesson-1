describe("A praiseCount test", function() {
    it("let a number to add 1", function() {
        expect(praise.praiseCount(1)).toBe(2);
        expect(praise.praiseCount(5)).toBe(6);
    });
    it("return a NAN when input other types", function() {
        expect(praise.praiseCount('new Object()')).toEqual(NaN);
        expect(praise.praiseCount(new Object())).toEqual(NaN);
    });
});