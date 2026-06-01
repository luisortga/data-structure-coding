#
import threading
import time

def inflar_globos() -> None:
    for i in range(3):
        print(f'Billy esta inflando el globo {i}')
        time.sleep(4)
        print('Billy termino de inflar los globos')

def hornear_pie() -> None:
    for _ in range(4):
        print("Mandy esta horneando el pastel...")
        time.sleep(4)
        print('Mandy termino de hornear el pastel')

def reproducir_musica() -> None:
    for i in range(0, 8):
        print('colocando playlist')
        time.sleep(4)
        print(f'Se reproduce la cancion {i+1}')

thread_billy = threading.Thread(target=inflar_globos, args=(), daemon=(True)) # equals all threads
thread_mandy = threading.Thread(target=hornear_pie)
thread_musica = threading.Thread(target=reproducir_musica)

# bloqueado por GIL

# Ejecutar en un semi thread
thread_billy.start()
# Ejecutar en otro semi thread
thread_mandy.start()
thread_musica.start()

thread_billy.join()
thread_mandy.join()
thread_musica.join()

print('La fiesta esta lista.')