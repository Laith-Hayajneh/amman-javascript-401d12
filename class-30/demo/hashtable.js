class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    values() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}
//charCodeAt() a = 97, z = 122
class HashTable {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    hash(key) {//20
        // sam
        // s ascii code is 83
        // a ascii code is 97
        // m ascii code is 109
        let hash = key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0) * 599 % this.size;

        // 83 + 97 + 109 = 320
        // 320 * 599 = 24480
        // 24480 % 50 = 24

        return hash;
    }


    set(key, value) {
        let hash = this.hash(key);

        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }

        // we need to make sure that the key is unique

        let bucket = { [key]: value };
        this.map[hash].add(bucket);
    }
}


let myhash = new HashTable(50);
myhash.set('John','Boss');
myhash.set('Cathy','The Real Boss');
myhash.set('Zach','Kid 1');
myhash.set('Allie','Kid 2');
myhash.set('Rosie','Dog');
myhash.set('Cat','TA');
myhash.set('Justin','Student');
myhash.set('Jason','Student');
myhash.set('Ben','Student');
myhash.set('Timea','Student');
myhash.set('Jen','Student');
myhash.set('Khalil','Student');
myhash.set('Michael','Student');
myhash.set('Ovi','Student');

myhash.map.forEach( (data,i) => {
  console.log(i, data && data.values());
});
