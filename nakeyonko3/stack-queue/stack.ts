// 나중에 쌓인(들어온) 데이터가 먼자 나오는 구조여야 합니다.
class Stack {
  private storage: { [key: number]: string };
  private count: number;

  constructor() {
    this.storage = {};
    this.count = 0;
  }

  // stack의 크기(데이터의 개수)를 알 수 있어야 합니다.
  size(): number {
    return this.count;
  }

  // stack에 데이터를 넣을 수 있어야 합니다.
  push(data: string) {
    this.storage[this.count++] = data;
  }

  // stack에서 데이터를 빼내어 값을 확인 할 수 있어야 합니다.
  pop(): string | null {
    if (this.count == 0) {
      return null;
    }

    const tmp = this.storage[this.count - 1];
    delete this.storage[--this.count];
    return tmp;
  }
}

// const sample = new User("길동", "홍");
const stack = new Stack();
stack.push("고낙연0");
stack.push("고낙연1");
stack.push("고낙연2");
stack.push("고낙연3");
stack.push("고낙연4");
console.log(stack.size());
stack.push("고낙연5");
console.log(stack.pop());
console.log(stack.size());
