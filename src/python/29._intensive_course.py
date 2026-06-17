# Curso intensivo de python
from datetime import datetime

MAX_COUNT: int = 10_000

print('Hello World', MAX_COUNT, '\n', end=" ")

phrase: str = 'Ahora me he convertido en la Muerte, el destructor de mundos'
author: str = 'J. Robert Oppenheimer'

print(f'{author} : >> {phrase}')

ahora = datetime.now()
day_week: int = ahora.weekday()

day: str = ''

match day_week: # type: ignore
    case 0:
        day = 'lunes'
    case 1:
        day = 'martes'
    case 2:
        day = 'miercoles'
    case 3:
        day = 'jueves'
    case 4:
        day = 'viernes'
    case 5:
        day = 'sabado'
    case 6:
        day = 'domingo'
    case _:
        day = 'final' 
        
print(f'El dia es: {day}')