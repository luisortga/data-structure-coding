from multiprocessing import Process, cpu_count
import time

def contador(num: int) -> None:
    cont: int = 0
    while cont < num:
        cont += 1

# obligatorio
# multiprocesos en funciones intensibas en CPU, CPU bound
def main() -> None:

    iniciar = time.perf_counter()

    core_a = Process(target=contador, args=(10000000,))
    core_b = Process(target=contador, args=(10000000,))
    core_c = Process(target=contador, args=(10000000,))
    core_d = Process(target=contador, args=(10000000,))

    core_a.start()
    core_b.start()
    core_c.start()
    core_d.start()

    core_a.join()
    core_b.join()
    core_c.join()
    core_d.join()

    fin = time.perf_counter()
    tiempo = fin - iniciar
    print(f'finalizo: {tiempo} segundos')

    print(cpu_count(), " cores")

# obligatorio
if __name__ == '__main__':
    main()