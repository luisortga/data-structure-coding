import { MinPriorityQueue } from "@datastructures-js/priority-queue";

const heap = new MinPriorityQueue<{ element: string; priority: number }>();

// Enqueue some patients with their priority (lower number means higher priority)
// solution of problem Expected 1 arguments, but got 2.

heap.enqueue({ element: "Patient A", priority: 3 });
heap.enqueue({ element: "Patient B", priority: 2 });
heap.enqueue({ element: "Patient C", priority: 4 });
heap.enqueue({ element: "Patient D", priority: 1 });

// Dequeue patients based on their priority
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());

