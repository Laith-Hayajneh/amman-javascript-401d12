
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }


// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(value) {
//         const node = new Node(value);
//         if (!this.head) {
//             this.head = node;
//             return this;
//         }

//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = node;

//         return this;
//     }
// }

// const ll = new LinkedList();

// ll.append('alaa');
// ll.append('suhaib');
// ll.append('tariq');

// console.table(ll.head);
// console.log(ll.head.next);
// console.log(ll.head.next.next);
// console.table(ll);
