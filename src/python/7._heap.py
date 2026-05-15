import heapq

# Cola con prioridad usando heapq (min-heap)
heap: list[tuple[int, str]] = []

# Metomos pacientes en desorden
heapq.heappush(heap, (3, 'dolor de cabeza'))
heapq.heappush(heap, (1, 'infarto'))
heapq.heappush(heap, (2, 'fractura'))
heapq.heappush(heap, (5, 'resfriado'))
heapq.heappush(heap, (7, "cortada en el dedo"))

# Sacamos por urgencia: prioridad menor primero
while heap:
    print(heapq.heappop(heap))