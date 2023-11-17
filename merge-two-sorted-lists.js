/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // create a combined list to return and tail pointer for it
    let returnHead = null;
    let returnTail = null;
    // iterate through both lists
    while(list1 != null || list2 != null) {
        // check for null and for least value, add the correct new node to the combined list
        if(list2 == null || list1 != null && list1.val <= list2.val) {
            // if this is the first node to be added, update the combined head and tail
            if(returnHead == null) {
                returnHead = new ListNode(list1.val);
                returnTail = returnHead;
            }
            // otherwise just update the tail
            else {
                returnTail.next = new ListNode(list1.val);
                returnTail = returnTail.next;
            }
            // update list1
            list1 = list1.next;
        }
        else {
            // same as above, but for list2
            // if this is the first node to be added, update the combined head and tail
            if(returnHead == null) {
                returnHead = new ListNode(list2.val);
                returnTail = returnHead;
            }
            // otherwise just update the tail
            else {
                returnTail.next = new ListNode(list2.val);
                returnTail = returnTail.next;
            }
            // update list2
            list2 = list2.next;
        }
    }
    return returnHead;
};