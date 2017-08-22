"use strict";

export class PraiseButton {
    //构造函数
    constructor(start) {
            this.count = start;
        }
        //记录点赞次数
    praiseCount(count) {
            return typeof count !== 'Number' ? NaN : ++count;
        }
        //点赞事件
    clickPriaseButton(selector, clicker) {
            selector.append('<span class="praise-button-num">+1</span>');
            let numSpan = $('.praise-button-num');
            let left = clicker.offset().left + clicker.width() / 2;
            let top = clicker.offset().top - clicker.height();
            numSpan.css({
                'position': 'absolute',
                'left': left + 'px',
                'top': top + 'px',
                'z-index': 9999,
                'font-size': '14px',
                'line-height': '16px',
                'color': 'red'
            });
            numSpan.animate({
                'font-size': '16px',
                'opacity': '0',
                'top': top - 16 + 'px',
            }, 600, function() {
                numSpan.remove();
            });

        }
        //初始化dom
    init(selector) {
        selector.append('<button class="praise-button">点赞</button>');
        let clicker = $('.praise-button');
        selector.click(this.clickPriaseButton.bind(this, selector, clicker));
    }
}

export class Thumb extend PraiseButton {
    constructor(start) {
        super(start);
    }

}