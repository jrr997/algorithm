// 工具库

function createTree(array) {
  if (!Array.isArray(array) || array.length === 0) return null
  const nodes = array.map(el => el === null ? el : new TreeNode(el))
  nodes.unshift(null)
  nodes.forEach((node, index) => {
    if (node) {
      const rI = index * 2  + 1
      if (rI <= nodes.length - 1) {
        node.left = nodes[rI - 1]
        node.right = nodes[rI]
      } else if (rI <= nodes.length) {
        node.left = nodes[rI - 1]
      }
    }
  })
  return nodes[1]
}

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// create linklist
function createList(array) {
  if (!Array.isArray(array) || array.length === 0) return null
  let dummy = new ListNode(-1), p = dummy
  let i = 0
  while(i < array.length) {
    p.next = new ListNode(array[i])
    p = p.next
    i++
  }
  return dummy.next
}

function listToArray(list) {
  let res = [], p = list
  while(p) {
    res.push(p.val)
    p = p.next
  }
  return res
}


window.createTree = createTree
window.TreeNode = TreeNode

window.ListNode = ListNode
window.createList = createList
window.listToArray = listToArray