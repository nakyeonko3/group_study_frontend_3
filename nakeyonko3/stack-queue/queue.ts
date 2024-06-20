// 먼저 쌓인(들어온) 데이터가 먼자 나오는 구조여야 합니다.
class Queue {
  private storage: { [key: number]: string };
  private front: number;
  private end: number;

  constructor() {
    this.storage = {};
    this.front = 0;
    this.end = 0;
  }

  // queue의 크기(데이터의 개수)를 알 수 있어야 합니다.
  size(): number {
    // (this.end-1) - this.front = 0 => size =0
    return this.end - 1 - this.front + 1;
  }

  // queue에 데이터를 넣을 수 있어야 합니다.
  enqueue(data: string) {
    this.storage[this.end++] = data;
  }

  // queue에서 데이터를 빼내어 값을 확인 할 수 있어야 합니다.
  dequeue(): string | null {
    if (this.end == 0) {
      return null;
    }
    const tmp = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return tmp;
  }
}

const queue = new Queue();
console.log(queue.size());
queue.enqueue("고낙연0");
queue.enqueue("고낙연1");
queue.enqueue("고낙연2");
queue.enqueue("고낙연3");
queue.enqueue("고낙연4");
queue.enqueue("고낙연5");
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue("고낙연6");
console.log(queue.dequeue());
console.log(queue.size());
