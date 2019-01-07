class BinaryMaxHeap {
  constructor() {
    this.store = [];
  }

  extract() {
    if (this.count() === 0) throw 'no element to extract';

    let val = this.store[0];

    if (this.count() > 1) {
      this.store[0] = this.store.pop()
      this.heapifyDown(this.store, 0)
    } else {
      this.store.pop();
    }

    return val;
  }

  count() {
    return this.store.length
  }

  peek() {
    if (this.count() === 0) throw 'no element to peek';
    return this.store[0];
  }

  push(val) {
    this.store.push(val);
    this.heapifyUp(this.store, this.count() - 1)
    return this.store;
  }

  childIndicies(len, parentIdx) {
    let children = [2 * parentIdx + 1, 2 * parentIdx + 2].filter((el) => el < len)
    return children
  }

  parentIndex(child_idx) {
    if (child_idx === 0) throw 'root has no parent';
    let parent_idx = Math.floor((child_idx - 1) / 2);
    return parent_idx;
  }
  
  compareNodes(a, b) {
    if (a > b) {
      return -1
    } else if (a === b) {
      return 0
    } else {
      return 1
    }
  }

  heapifyDown(array, parentIdx, len = array.length) {
    let func = this.compareNodes

    let nodes = this.childIndicies(len, parentIdx)
    let leftIdx = nodes[0];
    let rightIdx = nodes[1];

    let parentVal = array[parentIdx];
    let children = []
    if (leftIdx) children.push(array[leftIdx]);
    if (rightIdx) children.push(array[rightIdx]);
 

    if (children.every(child => this.compareNodes(parentVal, child) <= 0)) {
      return array
    }

    let swapIdx = null;

    if (children.length === 1) {
      swapIdx = leftIdx
    } else {
      swapIdx = this.compareNodes(children[0], children[1]) === -1 ? leftIdx : rightIdx
    }

    let temp = array[swapIdx];
    array[swapIdx] = array[parentIdx];
    array[parentIdx] = temp

    this.heapifyDown(array, swapIdx, len, this.compareNodes);
  }

  heapifyUp(array, childIdx, len = array.length, func) {
    func = func || this.compareNodes;

    if (childIdx === 0) {
      return array
    }

    let parentIdx = this.parentIndex(childIdx);

    let [childVal, parentVal] = [array[childIdx], array[parentIdx]];

    if (childVal <= parentVal) {
      return array
    }
    let temp = array[childIdx];
    array[childIdx] = array[parentIdx];
    array[parentIdx] = temp
    
    this.heapifyUp(array, parentIdx, len, func)
  }

}

module.exports = new BinaryMaxHeap;