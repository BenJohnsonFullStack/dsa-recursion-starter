class listNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function search(head, value) {}

// This function searches a linked list built from the provided listNode class, returning True if an element is found in the linked list. It returns False otherwise.

// Convert it to a recursive solution, i.e., the search function must call itself instead of using a loop.

// Hint: what is the base case?

// if head is null (return false)
// if the value passed in is found within the linked list (return true)

// Test cases:
const head = new listNode(3);
head.next = new listNode(6);
head.next.next = new listNode(9);
// The linked list is 3 -> 6 -> 9 (3 is the head of the list)

console.log(search(head, 3)); // true
console.log(search(head, 0)); // false
console.log(search(head, 9)); // true
