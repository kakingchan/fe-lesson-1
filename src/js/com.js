"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
    //构造函数
    function PraiseButton(start) {
        _classCallCheck(this, PraiseButton);

        this.count = start;
    }
    //记录点赞次数


    _createClass(PraiseButton, [{
        key: 'praiseCount',
        value: function praiseCount(count) {
            return typeof count !== 'Number' ? NaN : ++count;
        }
        //点赞事件

    }, {
        key: 'clickPriaseButton',
        value: function clickPriaseButton(selector) {
            selector.append('<span class="praise-button-num">+1</span>');
            var numSpan = $('.praise-button-num');
            var praiseButton = $('.praise-button');
            var left = praiseButton.offset().left + praiseButton.width() / 2;
            var top = praiseButton.offset().top - praiseButton.height();
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
                'top': top - 16 + 'px'
            }, 600, function () {
                numSpan.remove();
            });
        }
        //初始化dom

    }, {
        key: 'init',
        value: function init(selector) {
            selector.append('<button class="praise-button">点赞</button>');
            selector.click(this.clickPriaseButton.bind(this, selector));
        }
    }]);

    return PraiseButton;
}();

exports.default = PraiseButton;
