'use strcit';
const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return this;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;

        return this;
    }
}

module.exports = LinkedList;
