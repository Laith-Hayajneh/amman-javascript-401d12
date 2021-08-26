'use strict';

const Stack = require('../stack');

describe('Stack', () => {
    it('should create new instance of Stack', () => {
        const stack = new Stack();
        expect(stack).toBeInstanceOf(Stack);
    });

    describe('should peek', () => {
        it('should return null on an empty stack', () => {
            const stack = new Stack();
            expect(stack.peek()).toBeNull();
        });

        it('should return the last item', () => {
            const stack = new Stack();
            stack.push(1);
            // expect(stack.peek()).toBe(1);
            stack.push(2);
            stack.push(3);
            expect(stack.peek()).toBe(3);
        });

        it('should not alter the stack', () => {
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(3);

            // firts solution
            expect(stack.peek()).toBe(3);
            expect(stack.peek()).toBe(3);

            // second solution
            // stack.peek();
            // expect(stack.size()).toBe(3);
        });

        it('should points to the new head of the stack after pop', () => {
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.peek()).toBe(3);
            stack.pop();
            expect(stack.peek()).toBe(2);
        });
    });

    describe('Push', () => {
        it('should add a value to the top of the stack', () => {
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            // expect(stack.top).toEquals(2);
            stack.push(3);

            expect(stack.top).toEqual(3);
            // expect(stack.size()).toBe(3);
        });
    });

    describe('Pop', () => {
        it('should return and remove the top item from the stack', () => {
            const stack = new Stack();
            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.pop()).toBe(3);
            expect(stack.pop()).toBe(2);
            expect(stack.pop()).toBe(1);
            expect(stack.pop()).toBeUndefined();
        });
    });
})