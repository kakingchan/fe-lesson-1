describe("click thumb test", function() {
    it("click one time thumb", function() {
        $('body').append('<div id="a"></div>');
        var thumb = new praise.Thumb($('#a'), 0);
        thumb.initThumb();
        $('#a').click();
        expect($('#a').length && $('#a').length > 0).toBe(true);
        expect(thumb.count).toBe(1);
    });
    it("click 10 times", function() {
        $('body').append('<div id="b"></div>');
        var thumb = new praise.Thumb($('#b'), 0);
        thumb.initThumb();
        for (var i = 0; i < 10; i++) {
            $('#b').click();
        }
        expect(thumb.count).toBe(10);
        expect($('#b>.praise-button-thumb').hasClass('disabled')).toBe(true);
        $('#b').click();
        expect(thumb.count).toBe(10);
    });
});