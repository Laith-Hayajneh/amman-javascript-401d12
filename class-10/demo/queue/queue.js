'use strict';
class Queue {
    constructor() {
        this.items = new Array();
    }

    peek() {
        return this.items[0];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }
}

module.exports = Queue;