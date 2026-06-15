from __future__ import annotations

import math
import multiprocessing as mp
import time


def es_primo(n: int) -> bool:
    if n < 2:
        return False
    limite = math.isqrt(n)
    for i in range(2, limite + 1):
        if n % i == 0:
            return False
    return True


def calcular_primos(limite: int) -> int:
    count = 0
    for i in range(2, limite + 1):
        if es_primo(i):
            count += 1
    return count


def ejecutar_tarea(args: tuple[int, int]) -> str:
    task_id, limite = args
    proceso = mp.current_process().name
    print(f"Tarea {task_id} iniciada en {proceso}", flush=True)

    inicio = time.perf_counter()
    resultado = calcular_primos(limite)
    tiempo_ms = (time.perf_counter() - inicio) * 1000

    return (
        f"Tarea {task_id} [{proceso}]: "
        f"{resultado} primos hasta {limite} ({tiempo_ms:.0f} ms)"
    )


def main() -> None:
    tareas = [(task_id, 50_000 * task_id) for task_id in range(1, 5)]

    # Equivalente a un pool fijo de 4 workers.
    with mp.Pool(processes=4) as pool:
        resultados = pool.map(ejecutar_tarea, tareas)

    print("\n=== Resultados ===")
    for resultado in resultados:
        print(resultado)

    print("\nTodas las tareas completadas.")


if __name__ == "__main__":
    main()