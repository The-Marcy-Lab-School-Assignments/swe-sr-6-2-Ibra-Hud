# Technical Writing Assignment

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/fullstack-curriculum/how-tos/working-with-assignments#how-to-work-on-assignments).

## Prompt 1

Imagine you are giving a brief lesson on Recursion to a relatively new programmer. In your lesson make sure to include the following:

- A formal definition of recursion (feel free to quote an official source like MDN)
- An example in code.
- An explanation of the code example.
- An explanation of the kinds of functions that are best solved using recursion.

### Response 1

Recursion is a fundamental programming concept where a function calls itself to solve a problem. It is commonly used for problems that can be broken down into smaller subproblem of the same type.

```js
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case
  }
  return n * factorial(n - 1); // Recursive case
}

// Example usage:
console.log(factorial(5)); // Output: 120
```

Recursion is best used for problems that exhibit:

1. Self-similarity → The problem can be broken into smaller subproblem of the same type.
2. Tree or Graph Traversals → Algorithms like Depth-First Search (DFS) naturally use recursion.
3. Divide and Conquer → Problems like Merge Sort, Quick Sort, and Binary Search use recursive strategies.
4. Mathematical Computations → Factorial, Fibonacci sequence, and power calculations work well with recursion.

## Prompt 2

Imagine you are giving a brief lesson on the Tree data structure to a relatively new programmer. In your lesson make sure to include the following:

- A formal definition of a Tree (feel free to quote an official source like MDN)
- Definitions for key terms like **root**, **leaf**, **depth**, and **height** as they relate to Trees
- An example in code.
- An explanation of the code example.

### Response 2

"A tree is a data structure composed of nodes. Each tree has a root node from which all nodes descend. Each node may have child nodes, which can have their own child nodes, and so on."

- Root: The topmost node in a tree. It has no parent.
- Leaf: A node that has no children.
- Depth: The number of edges from the root to a given node.
- Height: The number of edges on the longest path from a node to a leaf. (The height of a tree is the height of its root node.)

```js
class TreeNode {
  constructor(value) {
    this.value = value; // Data stored in the node
    this.children = []; // Array to store child nodes
  }

  addChild(childNode) {
    /** Adds a child node to the current node **/
    this.children.push(childNode);
  }

  printTree(level = 0) {
    /** Recursively prints the tree structure **/
    console.log(" ".repeat(level * 2) + this.value); // Indent based on level
    for (const child of this.children) {
      child.printTree(level + 1);
    }
  }
}

// Creating a tree
const root = new TreeNode("Root");
const child1 = new TreeNode("Child 1");
const child2 = new TreeNode("Child 2");
const leaf1 = new TreeNode("Leaf 1");
const leaf2 = new TreeNode("Leaf 2");

// Building the tree structure
root.addChild(child1);
root.addChild(child2);
child1.addChild(leaf1);
child2.addChild(leaf2);

// Print the tree
root.printTree();
```

## Prompt 3

Any iterative function can be written recursively. Provide an example of an iterative function and the same function written recursively. Then, explain the benefits and/or drawbacks of each approach.

### Response 3

Iterative Function

```js
function sumArrayIterative(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

// Example usage:
console.log(sumArrayIterative([1, 2, 3, 4, 5])); // Output: 15
```

Recursive approach

```js
function sumArrayRecursive(arr, index = 0) {
  if (index === arr.length) {
    return 0; // Base case: when index reaches the end of the array
  }
  return arr[index] + sumArrayRecursive(arr, index + 1); // Recursive case
}

// Example usage:
console.log(sumArrayRecursive([1, 2, 3, 4, 5])); // Output: 15
```

Approach: Iterative
Benefits:

- More efficient (O(n) time complexity)
- Uses constant space (O(1))
- Avoids stack overflow

Drawbacks:

- Can be less intuitive

Approach: Recursive
Benefits:

- More readable & elegant
- Easier to understand for some problems

Drawbacks:

- Inefficient for large n (O(2ⁿ) time complexity)
- Uses extra memory (O(n) stack calls)
- May cause stack overflow

## Prompt 4

Depth-first-search is an algorithm of traversing through a tree that explores as far as possible along a single branch before backtracking and exploring other branches. The three approaches for depth-first-search are "inorder", "preorder", and "postorder".

Using this tree as an example, explain the differences between these three approaches, providing implementations of each (recursive or iterative, its up to you but one of them is definitely cleaner).

```
    A
   / \
  B   C
 / \   \
D   E   F
```

### Response 4

Preorder (Root → Left → Right) A → B → D → E → C → F

```js
function preorderIterative(root) {
  if (!root) return;

  let stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();
    console.log(node.value);

    if (node.right) stack.push(node.right); // Push right child first
    if (node.left) stack.push(node.left); // Push left child after
  }
}
```

Inorder (Left → Root → Right) D → B → E → A → C → F

```js
function inorderIterative(root) {
  let stack = [];
  let current = root;

  while (current !== null || stack.length > 0) {
    // Reach the leftmost node
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    // Process the node
    current = stack.pop();
    console.log(current.value); // Visit the node

    // Move to the right subtree
    current = current.right;
  }
}
```

Postorder (Left → Right → Root) D → E → B → F → C → A

```js
function postorderIterative(root) {
  if (!root) return;

  let stack1 = [root];
  let stack2 = []; // To reverse the order

  while (stack1.length > 0) {
    let node = stack1.pop();
    stack2.push(node); // Store nodes in reverse order

    if (node.left) stack1.push(node.left);
    if (node.right) stack1.push(node.right);
  }

  // Print nodes in correct postorder
  while (stack2.length > 0) {
    console.log(stack2.pop().value);
  }
}
```
