// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val, next) {
        this.value = val;
        this.next = next;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newTail = new Node(val, null)
        if (this.head === null) {
            this.head = newTail;
        } 

        if (this.tail) {
            this.tail.next = newTail;
        }

        this.tail = newTail;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        let oldTail = this.tail;
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return oldTail;
        }

        let list = [];
        let cNode = this.head
        while (cNode !== this.tail) {
            list.push(cNode);
            cNode = cNode.next;
        }

        let newTail = list[list.length - 1];
        newTail.next = null;
        this.length -= 1;
        this.tail = newTail;
        return oldTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let oldHead = this.head ? this.head : null;
        let newHead = new Node(val, oldHead);
        if (this.length === 0) {
            this.tail = newHead;
        };
        
        this.length++;
        this.head = newHead;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        let oldHead = this.head;
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
        }
        
        this.length -= 1;
        return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let cNode = this.head;

        while (cNode !== null) {
            if (cNode.value === target) return true;
            cNode = cNode.next;
        }

        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        let cNode = this.head;
        let nodes = [];
        if (index < 0 || index > this.length - 1) return null;

        while (cNode !== null) {
            nodes.push(cNode);
            cNode = cNode.next;
        }
        return nodes[index];
    }

    // TODO: Implement the set method here
    set(index, val) {
        let targetNode = this.get(index);
        if (targetNode) {
            targetNode.value = val;
            return true;
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index > this.length - 1) return false;
        let prevIndex = index - 1 > 0 ? index - 1 : 0;
        let oldIndexNode = this.get(prevIndex);

        if (oldIndexNode) {
            // point at the forward neighbor of the previous node
            let newNode = new Node(val, oldIndexNode.next);
            this.length++;
            oldIndexNode.next = newNode;
            return true
        }
        return false;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index > this.length -1 || index < 0) return undefined;
        let prevIndex = index - 1 > 0 ? index - 1 : 0;
        let prevNode = this.get(prevIndex);

        if (prevNode) {
            let removedNode = prevNode.next;
            prevNode.next = removedNode.next;
            this.length--;
            return removedNode;
        }
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
