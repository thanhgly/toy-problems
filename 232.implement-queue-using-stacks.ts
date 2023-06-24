/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
class MyQueue {
  public inputStack: number[];
  public outputStack: number[];
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  push(x: number): void {
    this.inputStack.push(x);
  }

  pop(): number | void {
    if (this.empty()) {
      return;
    }
    if (this.outputStack.length) {
      return this.outputStack.pop()!;
    }
    while (this.inputStack.length) {
      let popped = this.inputStack.pop();
      this.outputStack.push(popped!);
    }
    return this.outputStack.pop();
  }

  peek(): number | void {
    if (this.empty()) {
      return;
    }
    if (this.outputStack.length) {
      return this.outputStack[this.outputStack.length - 1];
    }
    return this.inputStack[0];
  }

  empty(): boolean {
    return !this.inputStack.length && !this.outputStack.length;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
