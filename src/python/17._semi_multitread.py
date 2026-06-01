#
import threading
import time

def inflar_globos():
    for i in range(3):
        print(f'Billy esta inflando el globo {i}')
        time.sleep(4)
        print('Billy termino de inflar los globos')

def hornear_pie():
    for _ in range(4):
        print("Mandy esta horneando el pastel...")
        time.sleep(4)
        print('Mandy termino de hornear el pastel')

thread_billy = threading.Thread(target=inflar_globos)
thread_mandy = threading.Thread(target=hornear_pie)

# bloqueado por GIL

# Ejecutar en un semi thread
thread_billy.start()
# Ejecutar en otro semi thread
thread_mandy.start()

thread_billy.join()
thread_mandy.join()

print('La fiesta esta lista.')