class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
        let newData = new Node(data);
        if (!this.head) {
            this.head = newData;
        } else {
            let curr = this.head;

            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newData;
        }
    }
}
function findMid(head) {
    let slow = head;
    let speed = head;
    while (speed.next && speed.next.next) {
        slow = slow.next;
        speed = speed.next.next;
    }
    return slow
}
function merge(leftL, rightL) {
    let dummy = new Node();
    let curr = dummy;
    while (leftL && rightL) {
        if (leftL.data < rightL.data) {
            curr.next = leftL;
            leftL = leftL.next;
        } else {
            curr.next = rightL;
            rightL = rightL.next;
        }
        curr = curr.next;
    }

    curr.next = rightL || leftL;
    return dummy.next
}
function mergeSort(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let mid = findMid(head);
    let leftL = head;
    let rightL = mid.next;
    mid.next = null;

    let sortLeftL = mergeSort(leftL);
    let sortRightL = mergeSort(rightL);

    return merge(sortLeftL, sortRightL)

}

let li = new LinkedList();
li.add(2);
li.add(3);
li.add(1);
li.add(4);
li.add(5);
li.add(1);
let result = mergeSort(li.head);
console.log(JSON.stringify(result));
// console.log(li)

