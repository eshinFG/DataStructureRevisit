// Binary Search Tree ES6

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;

      if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  contains(val) {
    if (this.root.val === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  contains(val) {
    if (this.root.val === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  find() {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  //________________
  // Breath First Search
  // Trying to visit Every Node
  //    10
  //    / \
  //   6   15
  //  /\    /\
  // 1  8  12 18

  // return [10,6,15,1,8,12,18]
  breathFirstSearch() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);

    while (queue.length) {
      // take node out of queue
      node = queue.shift();
      // push that node value data;
      data.push(node.value);
      // add left side to queue;
      if (node.left) queue.push(node.left);
      // add right side to queue;
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // _______________
  // DepthFirstSearch - Pre Order
  //entire left side than right side
  //    10
  //    / \
  //   6   15
  //  /\    /\
  // 1  8  12 18

  // [10,6,1,8,15,12,18]
  depthFirstPreOrder() {
    let data = [];
    let traverse = node => {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
  }

  
  // _______________
  // DepthFirstSearch - Post Order
  // Left Bottom node than right bottom node up to root
  // Root is last to visit
  //    10
  //    / \
  //   6   15
  //  /\    /\
  // 1  8  12 18
  // [1,8,6,12,18,15,10]

  depthFirstInOrder() {
    let data = [];
    let traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    };
    traverse(this.root);
    return data;
  }


  // _______________
  // DepthFirstSearch - In Order
  //entire left side than right side
  //    10
  //    / \
  //   6   15
  //  /\    /\
  // 1  8  12 18
  // [1,6,8,10,12,15,18]
  depthFirstInOrder() {
    let data = [];
    let traverse = node => {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
  }
}
