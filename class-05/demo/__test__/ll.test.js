'use strict';

const LL = require('../ll');

describe('Linked list', () => {
    it('should create new Empty LL', () => {
        // arrange
        // act
        const list = new LL();
        // assert
        expect(list.head).toBeNull();
    });

    it('should append node to an empty LL', () => {
        // arrange
        const list = new LL();
        const value = 'first value';
        // act
        list.append(value);
        // assert
        expect(list.head.value).toBe(value);
        expect(list.head.next).toBeNull();
    });

    it('should append node to LL with some values', () => {
        // arrange
        const list = new LL();
        const value1 = 'first value';
        list.append(value1);
        const value2 = 'second value';
        // act
        list.append(value2);
        // assert
        expect(list.head.value).toBe(value1);
        expect(list.head.next.value).toBe(value2);
        expect(list.head.next.next).toBeNull();
    });
})
