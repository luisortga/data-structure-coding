# tuple
"""
Las tuplas son inmutables, no se puede modificar su valor
"""

him = ('Luis', 27, 'Mexico')
print(him)

# crear y desempaquetar una tuple
nissan = ('v8', 1900, 'rojo', 'ABS', 'antiderrapante')
motor, hp, color, frenos, llantas = nissan
print(motor)

def multi_attrib():
    return 'orteg', 28

name, age = multi_attrib()
print(name)
print(age)
y: int = 5
x: int = 6

coordinates = (0, 5)

match coordinates: # type: ignore
    case (0, 0): # type: ignore
        print('origen')

    case (0, y):
        print(f'Eje Y: {y}')
    
    case (x, 0): # type: ignore
        print(f'Eje X: {x}')

    case (x, y): # type: ignore
        print(f'Punto ({x}, {y})')


def outpackaging(**kwargs): # type: ignore
    for key, value in kwargs.items(): # type: ignore
        print(f'{key} : {value}')

outpackaging(greeting="hey", koenigsegg="gemera", zenvo='aurora', ferrari=16, bertone=True)

def meta(*args: int) -> int:
    total: int = 0
    for i in args:
        total += i
    
    return total

sum: int = meta(12, 6, 45, 16, 24)
print(sum)

def group_contries(*args: str) -> list[str]:
    list_contries: list[str] = []
    for index in args:
        list_contries.append(index)
    
    return list_contries

grupo_a = group_contries('germany', 'italy', 'spain')
grupo_b = group_contries('denmark', 'finland', 'iceland', 'norway', 'sweden')
print(grupo_a)
print(grupo_b)
