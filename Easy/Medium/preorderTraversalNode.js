/**
 * This is a similar problem from leetcode, exept the root node is being passed
 * instead of values array.
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let s = [];
    let list = [];
    if (root === null || root === undefined) {
        return list;
    }
    s.push(root);
    while (s.length > 0) {
        let cur = s.pop();
        list.push(cur.val);
        if (cur.right) {
            s.push(cur.right);
        }
        if (cur.left) {
            s.push(cur.left)
        }
    }
    return list;
};