"use strict";

class PraiseButton {
    //构造函数
    constructor(start) {
            this.count = start;
            this.praiseButton;
            this.praiseDiv;
        }
        //记录点赞次数
    praiseCount(count) {
            return typeof count !== 'Number' ? NaN : ++count;
        }
        //点赞事件
    clickPriaseButton(props) {
            console.log('hello');
            let div = this.praiseButton;
            let numSpan = document.createElement('span');
            numSpan.innerText = '+1';
            numSpan.class = 'praise-button-num';
            let left = div.offsetLeft + div.offsetWidth / 2;
            let top = div.offsetTop - div.offsetHeight;
            numSpan.style.position = 'absolute';
            numSpan.style.left = left + 'px';
            numSpan.style.top = top + 'px';
            numSpan.style.zIndex = '9999';
            numSpan.style.fontSize = '12px';
            numSpan.style.color = 'red';
            numSpan.style.animation = '';
            div.appendChild(numSpan);
        }
        //初始化dom
    init(selector) {
        this.praiseButton = document.createElement('button');
        let div = this.praiseButton;
        div.className = 'praise-button';
        div.innerText = '点赞';
        div.addEventListener('click', this.clickPriaseButton.bind(this), false);
        selector.appendChild(div);
    }
}