import { MinPriorityQueue } from "@datastructures-js/priority-queue";

const heap = new MinPriorityQueue<{ element: string; priority: number }>();

// Ponga en cola a algunos pacientes según su prioridad (un número menor significa mayor prioridad).
// Solución del problema: Se esperaba 1 argumento, pero se obtuvieron 2.

heap.enqueue({ element: "Patient A", priority: 3 });
heap.enqueue({ element: "Patient B", priority: 2 });
heap.enqueue({ element: "Patient C", priority: 4 });
heap.enqueue({ element: "Patient D", priority: 1 });

// Poner en cola a las pacientes según su prioridad.
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());
console.log(heap.dequeue());

