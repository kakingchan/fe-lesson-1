"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = exports.PraiseButton = function () {
    //构造函数
    function PraiseButton(selector) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, PraiseButton);

        this.count = start;
        this.selector = selector;
    }
    //记录点赞次数


    _createClass(PraiseButton, [{
        key: 'praiseCount',
        value: function praiseCount(count) {
            // console.log(typeof count);
            return typeof count !== 'number' ? NaN : ++count;
        }
        //点赞事件

    }, {
        key: 'clickPriaseButton',
        value: function clickPriaseButton(clicker) {
            this.count = this.praiseCount(this.count);
            this.selector.append('<span class="praise-button-num">+1</span>');
            var numSpan = $('.praise-button-num');
            var left = clicker.offset().left + clicker.width() / 2;
            var top = clicker.offset().top - clicker.height();
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
        key: 'initPriaseButton',
        value: function initPriaseButton() {
            this.selector.append('<button class="praise-button">点赞</button>');
            this.selector.click(this.clickPriaseButton.bind(this, $('.praise-button')));
        }
    }]);

    return PraiseButton;
}();

var Thumb = exports.Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb(selector) {
        var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, selector, start));
    }

    _createClass(Thumb, [{
        key: 'initThumb',
        value: function initThumb() {
            this.selector.append('<div class="praise-button-thumb">' + '<div class="hand"></div>' + '<div class="finger-thumb"></div>' + '<div class="finger-group-1"></div>' + '<div class="finger-group-2"></div>' + '</div>');
            this.selector.click(this.clickThumb.bind(this, $('.praise-button-thumb')));
        }
    }, {
        key: 'clickThumb',
        value: function clickThumb(clicker) {
            _get(Thumb.prototype.__proto__ || Object.getPrototypeOf(Thumb.prototype), 'clickPriaseButton', this).call(this, clicker);
            console.log(this.count);
            if (this.count >= 10) {
                // this.selector.unbind('click');
                clicker.addClass('disabled');
                console.log('it has already praised 10 times');
            }
        }
    }]);

    return Thumb;
}(PraiseButton);
