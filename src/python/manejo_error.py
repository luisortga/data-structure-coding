# lista comprimidas
import time

cuadrados: list[int] = [x**2 for x in range(1, 6)]
print(cuadrados)

q_par: list[int] = [x**2 for x in range(1, 8) if x % 2 == 0]
print(q_par)

numerador: int = 86

book: dict[str, int | str] = {
    'pragmatic programmer' : 24,
    'course intensive python' : 0,
    '100 things' : 16,
    'clear code' : 'kobe 2'
}

simple: str = ""
denominador: int = 0

try:
    if isinstance(book['clear code'], str):
        simple = book['clear code']
        bypass: list[str] = simple.split()
        denominador = int(bypass[1])
    else:
        denominador = book['clear code']
except KeyError as e:
    denominador = 16
finally:
    time.sleep(2)
    print('Process...')
    

try:
    print(f'numerador: {numerador}')
    print(f'denominador: {denominador}')
    print(numerador/denominador)
    time.sleep(6)
    print('Successful.')
except ZeroDivisionError as e:
    print('No se puede dividir entre de 0')
finally:
    print('end of software')