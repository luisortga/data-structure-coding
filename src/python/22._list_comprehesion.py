# Examples of claude: List Comprehesion

# Solo números pares del 1 al 20
pares = [x for x in range(1, 21) if x % 2 == 0]
# [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# Elevar al cuadrado solo los impares
cuadrados = [x**2 for x in range(10) if x % 2 != 0]
# [1, 9, 25, 49, 81]

# Todas las combinaciones de dos listas
combinaciones = [(x, y) for x in [1, 2, 3] for y in ['a', 'b']]
# [(1,'a'), (1,'b'), (2,'a'), (2,'b'), (3,'a'), (3,'b')]

matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
plana = [num for fila in matriz for num in fila]
# [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Etiquetar números como "par" o "impar"
etiquetas = ["par" if x % 2 == 0 else "impar" for x in range(6)]
# ['par', 'impar', 'par', 'impar', 'par', 'impar']

palabras = ["  hola  ", "  mundo  ", "  python  "]
limpias = [p.strip().upper() for p in palabras]
# ['HOLA', 'MUNDO', 'PYTHON']

# Invertir clave-valor de un diccionario
original = {"a": 1, "b": 2, "c": 3}
invertido = {v: k for k, v in original.items()}
# {1: 'a', 2: 'b', 3: 'c'}

# Letras únicas de una oración
letras = {letra.lower() for letra in "Hola Mundo" if letra != " "}
# {'h', 'o', 'l', 'a', 'm', 'u', 'n', 'd'}

# [qué_guardar   for item in iterable   if condición]