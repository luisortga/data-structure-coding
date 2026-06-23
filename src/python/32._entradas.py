numero: str | int = input('Ingrese un numero y te dire si es par o inpar:\n')

numero = int(numero)
if numero % 2 == 0:
    print(f'El numero {numero} es par')
elif numero == 24:
    print('kobe bryant')
else:
    print(f'El numero {numero} es inpar')