/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val  = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head   = null;
    this.tail   = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(!this.head){
      this.head    = newNode;
      this.tail    = newNode;
    }
    this.tail.next = newNode;
    this.tail      = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head){
      this.head  = newNode;
      this.tail  = newNode;
    }
    newNode.next = this.head;
    this.head    = newNode;
    this.length++;

  }

  /** pop(): return & remove last item. */

  pop() {

    if(!this.length)
      return null;

    if(this.length === 1){
      const elem  = this.head;
      this.head   = null;
      this.tail   = null;
      this.length = 0;
      return elem.val;
    }

    if(this.length === 2){
      const elem     = this.head.next;
      this.head.next = null;
      this.tail      = this.head;
      this.length    = 1;
      return elem.val;
    }

    let nextElem = this.head.next;
    while(nextElem.next.next){
      nextElem   = nextElem.next;
      this.length--;
    }

    const lastElem = nextElem.next;
    this.tail      = nextElem;
    nextElem.next  =  null;
    return lastElem.val;
  }

  /** shift(): return & remove first item. */

  shift() {

    if(!this.length)
      return null;

    if(this.length === 1){
      let elem    = this.head;
      this.head   = null;
      this.tail   = null;
      this.length = 0;
      return elem.val;
    }

    if(this.length === 2){
      let elem    = this.head;
      this.head   = this.tail;
      this.length = 1;
      return elem.val;
    }

    let headElem = this.head;
    this.head    = headElem.next;
    this.length--;
    return headElem.val;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if(idx > this.length || idx < 0)
      return null;

    let track   = 0;
    let getElem = this.head;

    while(track != idx){
      getElem = getElem.next;
      track++;
    }

    return getElem.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    if(idx > this.length-1 || idx < 0)
      return null;

    let track = 0;
    let elem  = this.head;

    while(idx != track){
      elem = elem.next
      track++;
    }

    elem.val = val;
    return;   
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx > this.length || idx < 0)
      return null;

    //if list empty
    if(!this.head){
      return this.unshift(val);
    }

    let newNode = new Node(val);

    //if try to set element on index 0 of the list
    if(!idx){
      let firstElem = this.head;
      newNode.next  = firstElem;
      this.head     = newNode;
      this.length;
      return;
    }

    //if try to add to the end of the list
    if(idx === this.length){

      let nextElem = this.head.next;

      while(nextElem.next.next)
        nextElem = nextElem.next;

      const lastElem = nextElem.next;
      lastElem.next  = newNode;
      this.tail      = newNode;
      this.length++;
      return
    }

    let track = 0;
    let nextElem_1 = this.head;
    while(track != idx-1){
      nextElem_1 = nextElem_1.next;
      track++;
    }

    let nextElem_2  = nextElem_1.next;
    nextElem_1.next = newNode;
    newNode.next    = nextElem_2;
    this.length++;
    return;     
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

    if(idx > this.length || idx < 0)
      return null;

    if(!idx)
      return this.shift()

    if(idx === this.length - 1)
      return this.pop()
    
    let elem_1  = null;
    let elem_2  = this.head;
    let track   = 0;

    while(idx != track){
      elem_1 = elem_2;
      elem_2 = elem_2.next;
      track++;
    }

    this.length--;

    elem_1.next = elem_2.next;

    if(this.length == 1){
      this.tail = elem_1;
    }

    let val     = elem_2.val
    elem_2      = null
    return val
  }

  /** average(): return an average of all values in the list */

  average() {
    
    if(!this.length)
      return 0;

    let elem = this.head;
    let val = elem.val;
    while(elem.next){
      elem = elem.next;
      val += elem.val;
    }
    return val/this.length;
  }
}

module.exports = LinkedList;
