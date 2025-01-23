class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function arrayToTreeNode(arr: (number | null)[]): TreeNode | null {
  if (!arr.length) return null;

  // @ts-ignore
  const root = new TreeNode(arr[0]);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    const current = queue.shift();

    if (current) {
      if (i < arr.length && arr[i] !== null) {
        // @ts-ignore
        current.left = new TreeNode(arr[i]);
        queue.push(current.left);
      }
      i++;

      if (i < arr.length && arr[i] !== null) {
        // @ts-ignore
        current.right = new TreeNode(arr[i]);
        queue.push(current.right);
      }
      i++;
    }
  }

  return root;
}

function preorderTraversal(root: TreeNode | null): number[] {
  const stack = [root];
  const result: number[] = [];
  // if (!root) return result;
  while (stack.length) {
    const current = stack.pop();
    // @ts-ignore
    result.push(current.val);
    // @ts-ignore
    if (current.right) {
      // @ts-ignore
      stack.push(current.right);
    }
    // @ts-ignore
    if (current.left) {
      // @ts-ignore
      stack.push(current.left);
    }
  }
  return result;
}

const nodeA = new TreeNode(1);
const nodeB = new TreeNode(2);
const nodeC = new TreeNode(3);
const nodeD = new TreeNode(4);
const nodeE = new TreeNode(5);
const nodeF = new TreeNode(6);

nodeA.left = nodeB;
nodeA.right = nodeF;
nodeB.right = nodeC;
nodeC.left = nodeD;
nodeD.left = nodeE;

// console.log(preorderTraversal(nodeA));

// function levelOrder(root: TreeNode | null): number[][] {
//   const queue = [root];
//   const result: number[][] = [][];
//   if (!root) return [];
//   while (queue.length) {
//     const current = queue.shift();
//     // @ts-ignore
//     result.push(<number>current?.val);
//     // @ts-ignore
//     if (current.left) queue.push(current.left);
//     // @ts-ignore
//     if (current.right) queue.push(current.right);
//   }
//   return result;
// }

function levelOrder(root: TreeNode | null): number[][] {
  const queue = [root];
  const result: number[][] = [];
  let currentNodeCount = 0;
  let currentLevel: number[] = [];
  let levelNodeCount = queue.length;
  if (!root) return [];
  while (queue.length) {
    currentNodeCount++;
    const current = queue.shift();
    // @ts-ignore
    currentLevel.push(current.val);
    // @ts-ignore
    if (current.left) queue.push(current.left);
    // @ts-ignore
    if (current.right) queue.push(current.right);
    if (currentNodeCount === levelNodeCount) {
      result.push(currentLevel);
      currentNodeCount = 0;
      currentLevel = [];
      levelNodeCount = queue.length;
    }
  }
  return result;
}

console.log(levelOrder(arrayToTreeNode([3, 9, 20, null, null, 15, 7])));
