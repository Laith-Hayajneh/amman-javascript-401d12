'use strict';
class Stack {
    constructor() {
        this.items = new Array();
        this.top = null;
    }

    peek() {
        return this.top;
    }

    push(item) {
        this.items.unshift(item);
        this.top = item;
    }

    pop() {
        let temp = this.items.shift();
        this.top = this.items[0];
        return temp;
     }
}

module.exports = Stack;