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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  console.log(list1)
  console.log(list2)
  
  let listArr = []
  while(list1 !== null || list2 !== null) {
    if(list1) {
        listArr.push(list1.val)
        list1 = list1.next
    }
    if(list2) {
        listArr.push(list2.val)
        list2 = list2.next
    }
  }

  listArr.sort((a,b) => a-b)

  console.log(listArr)

  return generateLinkedList(listArr)
};