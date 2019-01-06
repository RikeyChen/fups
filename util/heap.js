class BinaryMaxHeap {
  constructor() {
    this.store = [];
  }

  extract() {
    if (this.count() == 0) throw 'no element to extract';

    let val = this.store[0];

    if (this.count() > 1) {
      this.store[0] = this.store.pop()
      // heapify down
    } else {
      this.store.pop();
    }

    return val;
  }

  count() {
    this.store.length
  }

  peek() {
    if (this.count() == 0) throw 'no element to peek';
    return this.store[0];
  }

  push() {
    this.store.push(val);
    // heapify up
  }

}