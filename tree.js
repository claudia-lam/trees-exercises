"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
    /** sumValues(): add up all values in the tree. */
    //variable for holding our nodes - stack
    console.log("THIS:", this)
    const stack = []
    //base case: if stack has no length return 0
    for (const child of this.children) {
    stack.push(child)
    }
    console.log("STACK:", stack)
    if (stack.length === 0) return this.val
    //loop through children of current node [2, 3]
    //call this.sumValues() child: 2
    console.log("VAL:", this.val)
    let sumChildren = 0
    stack.map(child => {
      console.log("CHILD:", child)
      return sumChildren += child.sumValues()
    })

    console.log("sumChildren:", sumChildren)
    return this.val + sumChildren
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
     /** sumValues(): add up all values in the tree. */
    //variable for holding our nodes - stack
    console.log("THIS:", this)
    const stack = []
    //base case: if stack has no length return 0
    for (const child of this.children) {
    stack.push(child)
    }
    console.log("STACK:", stack)
    if (stack.length === 0 && this.val % 2 === 0) {
      return 1;
    }
    //loop through children of current node [2, 3]
    //call this.sumValues() child: 2
    console.log("VAL:", this.val)
    let evens = 0
    stack.map(child => {
      console.log("CHILD:", child)
      return evens += child.countEvens()
    })

    console.log("sumChildren:", evens)
    if (this.val % 2 === 0) {
      console.log("did we get here?")
      return evens += 1
    } else {
      return evens

  }
}

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){

  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }
  sumValues() {
    if(!this.root) return 0;
    return this.root.sumValues()

  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    if(!this.root) return 0;
    return this.root.countEvens()

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };
