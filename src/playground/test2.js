/*
class Stack
  def initialize
    @store = Array.new
  end
  
  def pop
    @store.pop
  end
  
  def push(element)
    @store.push(element)
    self
  end
  
  def size
    @store.size
  end
end


enqueue(1);
enqueue(2);
enqueue(3);
dequeue();
enqueue(4);
dequeue();
*/

const _ = require('underscore');

class Queue {
  enqueue(n) {
    this.stack1.push(n);
    console.log(this.stack1);
  }

  dequeue() {
    console.log('before: ', this.stack1);
    for (let i = 0; i < this.stack1.length; i++) {
      this.stack2.push(this.stack1.pop());
    }

    console.log('stack2 before: ', this.stack2);
    let tmp = this.stack1.pop();
    console.log('tmp: ', tmp);
    console.log('stack1: ', this.stack1);
    for (let j = 0; j <= this.stack2.length; j++) {
      this.stack1.push(this.stack2.pop());
    }

    console.log('after: ', this.stack1);
    console.log('stack2 after: ', this.stack2);
    return tmp;
  }

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
    //this.enqueue = enqueue;
    //this.dequeue = dequeue;
  }

}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
q.enqueue(4);
q.dequeue();