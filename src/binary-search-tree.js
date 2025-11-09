const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    // Remove line below and write your code here
    return this._root || null;
  }

  add(data) {
    // Remove line below and write your code here
    if (!this._root) {
      this._root = new Node(data);
      return;
    }

    let currentNode = this._root;
    while (true) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = new Node(data);
          return;
        }
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = new Node(data);
          return;
        }
        currentNode = currentNode.right;
      } else {
        return;
      }
    }
  }

  find(data) {
    // Remove line below and write your code here
    let currentNode = this._root;
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  has(data) {
    // Remove line below and write your code here
    return this.find(data) !== null;
  }

  remove(data) {
    // Remove line below and write your code here
    this._root = this._removeNode(this._root, data);
  }
  _removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data;
      node.right = this._removeNode(node.right, minRight.data);
    }
    return node;
  }

  min() {
    // Remove line below and write your code here
    if (!this._root) return null;
    let currentNode = this._root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    // Remove line below and write your code here
    if (!this._root) return null;
    let currentNode = this._root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};