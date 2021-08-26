'use strict';

const Queue = require('../queue');

describe('Queue', () => {
    it('should implements first in first out (FIFO) functionality', () => {
        const queue = new Queue();
        queue.enqueue('first');
        queue.enqueue('second');
        queue.enqueue('third');
        
        expect(queue.dequeue()).toBe('first');
        expect(queue.dequeue()).toBe('second');
        expect(queue.dequeue()).toBe('third');
    });
});