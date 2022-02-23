// Queue: A horizontal data structure that stores data in a first in, first out order
// A List where data is added at the end, and removed from the front

// Creates a node containing the data and a reference to the next item
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
    }
    // To insert, we "enqueue".
    enqueue(value) {
        const newNode = new Node(value);

        if (this.first) {
            this.last.next = newNode;
        } else {
            // Set the node of the queue's next pointer to be the new node
            this.first = newNode;
        }

        // Make the new node the lat item on the queue
        this.last = newNode;
    }
    // To remove, we "dequeue"
    dequeue() {
        if (this.first) {
            const dequeued = this.first;

            // Update first pointer to point to the next node of the dequeue
            this.first = dequeued.next;

            // If the dequeued node is the last node in the queue,
            // update the last pointer to point null
            if (dequeued === this.last) {
                this.last = null;
            }
            return dequeued.value;
        }
    }
}
// Both dequeue() and enqueue() have a time complexity of O(1)

