'use strict';

const Tree = require('../tree');
const Node = require('../node');

describe('tree', () => {
    let tree = null;
    beforeAll(() => {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        three.left = four;
        three.right = five;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;

        /*
               1
            2      3
          6      4   5
            7
          8   9
        */

        tree = new Tree(one);
    });


    it('preOrder', () => {// root -> left -> right
        let preOrder = tree.preOrder();
        let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
        expect(preOrder).toEqual(expected);
    });

    it('postOrder', () => {// left -> right -> root
        let postOrder = tree.postOrder();
        let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        expect(postOrder).toEqual(expected);
    });

    it('inOrder', () => {// left -> root -> right
        let inOrder = tree.inOrder();
        let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        expect(inOrder).toEqual(expected);
    });
});
