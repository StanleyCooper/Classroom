// Event loop
// A design pattern that a program may use to prioritize certain lines of code for execution

// Stack: A vertical data structure that stores elements in a last in, first out order

// Has two primary functions
// - push(): Places the data on the top of the stack (insertion)
// - pop(): Removes data from the top of the stack (deletion)

// Creates a node containing the data and a reference to the next item
class Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
    }
    push(value) {
        // Create a new node,
        // add data to the new node, and
        // have the pointer point to the top
        this.top = new Node(value, this.top)
    }
    pop() {
        /* In order to remove the top of the stack, you have to point
            the pointer to the next item. That next item becomes the
            top of the stack. */
        const popped = this.top;
        this.top = popped.next;
        return popped.value;
    }
}

// Time complexity for both push() and pop() is a simple O(1)