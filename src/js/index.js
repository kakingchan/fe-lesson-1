"use strict";

export class PraiseButton {
    //构造函数
    constructor(selector, start = 0) {
            this.count = start;
            this.selector = selector;
        }
        //记录点赞次数
    praiseCount(count) {
            // console.log(typeof count);
            return typeof count !== 'number' ? NaN : ++count;
        }
        //点赞事件
    clickPriaseButton(clicker) {
            this.count = this.praiseCount(this.count);
            this.selector.append('<span class="praise-button-num">+1</span>');
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
    initPriaseButton() {
        this.selector.append('<button class="praise-button">点赞</button>');
        this.selector.click(this.clickPriaseButton.bind(this, $('.praise-button')));
    }
}

export class Thumb extends PraiseButton {
    constructor(selector, start = 0) {
        super(selector, start);
    }
    initThumb() {
        this.selector.append('<div class="praise-button-thumb">' +
            '<div class="hand"></div>' +
            '<div class="finger-thumb"></div>' +
            '<div class="finger-group-1"></div>' +
            '<div class="finger-group-2"></div>' +
            '</div>');
        this.selector.click(this.clickThumb.bind(this, $('.praise-button-thumb')));
    }
    clickThumb(clicker) {
        super.clickPriaseButton(clicker);
        console.log(this.count);
        if (this.count >= 10) {
            // this.selector.unbind('click');
            clicker.addClass('disabled');
            console.log('it has already praised 10 times');
        }
    }
}