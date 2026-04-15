const Node = require("./node");

class LinkedList {
  constructor() {
    this.headNode = null; // start kosong asalll
  }

  // tambah belakang before nulll
  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  // tambah depan skali 
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  // kira size ada bape obj dalam
  size() {
    let count = 0;
    let current = this.headNode;

    while (current !== null) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  // ambil first value dari whole thing
  head() {
    return this.headNode ? this.headNode.value : undefined;
  }

  // ambil last value hujung2
  tail() {
    if (!this.headNode) return undefined;

    let current = this.headNode;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current.value;
  }

  // ambil ikut index throughout the obj
  at(index) {
    let current = this.headNode;
    let i = 0;

    while (current !== null) {
      if (i === index) return current.value;
      current = current.nextNode;
      i++;
    }

    return undefined;
  }

  // buang last node hujung skali
  pop() {
    if (!this.headNode) return undefined;

    if (!this.headNode.nextNode) {
      const value = this.headNode.value;
      this.headNode = null;
      return value;
    }

    let current = this.headNode;

    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }

    const value = current.nextNode.value;
    current.nextNode = null;
    return value;
  }

  // check ada value dalam obj yg mana satu
  contains(value) {
    let current = this.headNode;

    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  // cari index dari obj
  findIndex(value) {
    let current = this.headNode;
    let index = 0;

    while (current !== null) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }

    return -1;
  }

  // print list
  toString() {
    let current = this.headNode;
    let result = "";

    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    return result + "null";
  }

  // EXTRA: insert at index
  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw new RangeError("Index out of bounds");
    }

    values.reverse().forEach(value => {
      if (index === 0) {
        this.prepend(value);
      } else {
        let current = this.headNode;
        let i = 0;

        while (i < index - 1) {
          current = current.nextNode;
          i++;
        }

        const newNode = new Node(value);
        newNode.nextNode = current.nextNode;
        current.nextNode = newNode;
      }
    });
  }

  // EXTRA: remove at index
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    let current = this.headNode;
    let i = 0;

    while (i < index - 1) {
      current = current.nextNode;
      i++;
    }

    current.nextNode = current.nextNode.nextNode;
  }
}

module.exports = LinkedList;