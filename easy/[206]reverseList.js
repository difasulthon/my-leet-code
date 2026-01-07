/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function generateLinkedList(arr) {
    let head = null
    let current = null

    for(const item of arr) {
        let newListNode = new ListNode(item)

        if(!head) {
            head = newListNode
            current = head
        } else {
            current.next = newListNode
            current = current.next
        }
    }

    return head
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let listArr = []
  while(head !== null) {
    if(head) {
        listArr.push(head.val)
        head = head.next
    }
  }

  listArr.reverse()

  return generateLinkedList(listArr)
};