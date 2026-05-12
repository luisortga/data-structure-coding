// Estructura de datos
/** Heap */

// No se atiende por orden de llegada, se atiende por gravedad

import { MinPriorityQueue } from "@datastructures-js/priority-queue";

// Cola con prioridad (min-heap)
const heap = new MinPriorityQueue();

// metemos paciente en desorden
heap.enqueue("dolor de cabeza", 3);
heap.enqueue("infarto", 1);
heap.enqueue("fractura", 2);
heap.enqueue("resfriado", 5);

// Sacamos por urgencia: prioridad menor primero
while (!heap.isEmpty()) {
    console.log(heap.dequeue());
}