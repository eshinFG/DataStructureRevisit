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
    if(this.root === null) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while(true) {
      if(val === current.val) return undefined;

      if(val > current.val) {
        if(current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if(current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  contains(val) {
    if(this.root.val === null) return false;
    let current = this.root;
    let found = false;

    while(current && !found) {
      if(val < current.value) {
        current = current.left;
      } else if(value > current.value) {
        current = current.right
      } else {
        return true;
      }
    }
    return false;
  } 

  contains(val) {
    if(this.root.val === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if(val < current.value) {
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
    if(this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if(value < current.value) {
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

  breathFirstSearch() {
    let node = this.root;
    let data = [];
    let queue = [];
    queue.push(node);

    while(queue.length) {
      // take node out of queue
      node = queue.shift();
      // push that node into data;
      data.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }

}
