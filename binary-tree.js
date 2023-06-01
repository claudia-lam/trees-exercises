"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {

    // base case: if this.left or this.right is null, return 1
    if (this.left === null || this.right === null) return 1;

    let minDepth = 1;

    let leftDepth = 0;
    leftDepth += this.left.minDepthToIncompleteNode();

    let rightDepth = 0;
    rightDepth += this.right.minDepthToIncompleteNode();

    return minDepth + Math.min(leftDepth, rightDepth);

    // variable for min depth, initially 1

    // have a variable to track left depth
    // check left side
        // left depth + this.left.minDepth()

    // have a variable to track right depth
    // check right side
        // right depth + this.right.minDepth()

    // return min depth + the min of left depth/right depth
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    if (this.left === null && this.right === null) return 1;

    let maxDepth = 1;
    const leftDepth = this.left !== null ? this.left.maxDepth() : 0;
    // let leftDepth = 0;
    // if (this.left !== null) {
    // leftDepth += this.left.maxDepth();
    // }

    const rightDepth = this.right !== null ? this.right.maxDepth() : 0;
    // let rightDepth = 0;
    // if (this.right !== null) {
    // rightDepth += this.right.maxDepth();
    // }

    return maxDepth + Math.max(leftDepth, rightDepth);
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
   minDepth() {
     console.log("THIS", this);
    if (this.left === null && this.right === null) return 1;

    let minDepth = 1;

    let leftDepth = 0;
    if (this.left !== null) {
    leftDepth += this.left.minDepth();
    }

    let rightDepth = 0;
    if (this.right !== null) {
    rightDepth += this.right.minDepth();
    }

    console.log("LEFT:", leftDepth, "RIGHT:", rightDepth);
    if (leftDepth > 0 && rightDepth > 0) {
      console.log("both are greater than 0");
      return minDepth + Math.min(leftDepth, rightDepth);
    } else if (leftDepth === 0) {
      console.log("left depth is 0")
      return minDepth + rightDepth;
    } else {
      console.log("right is 0");
      return minDepth + leftDepth;
    }
  }

  /** nextLarger(lowerBound): return the smallest value from the invoking node
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    console.log("THIS", this);
    if (this.left === null && this.right === null) {
      if (this.val < lowerBound) {
        return
      } else {
        return this.val
      }
    }

    let leftDepth;
    if (this.left !== null) {
    leftDepth = this.left.minDepth();
    }

    let rightDepth;
    if (this.right !== null) {
    rightDepth = this.right.minDepth();
    }

    console.log("LEFT:", leftDepth, "RIGHT:", rightDepth);
    if (leftDepth && rightDepth) {
      console.log("both are greater than 0");
      return Math.min(leftDepth, rightDepth);
    } else if (leftDepth === 0) {
      console.log("left depth is 0")
      return minDepth + rightDepth;
    } else {
      console.log("right is 0");
      return minDepth + leftDepth;
    }
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if(!this.root) return 0;
    return this.root.minDepthToIncompleteNode();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if(!this.root) return 0;
    return this.root.maxDepth();
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
    if(!this.root) return 0;
    return this.root.minDepth();
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * that is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
