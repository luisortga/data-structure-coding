# start in this algorith
import random


def begin_info() -> None:
    print('Welcome...', '\nEscribe un texto con la cantidad que se te indica de forma semi aleatoria', '\nsuerte')

text_list: list[str] = []
text: str = ""
aciertos: int = 0
num_char: int = 0

begin_info()
while(True):

    num_char = random.randint(1, 24)
    print('Recuerda tiene que tener la misma cantidad de caracteres que se te indica para seguir.')
    text = input(f'escribe el texto de {num_char} caracteres:\n')
    
    if (num_char == len(text)):
        print(f'Ha sido correcto\n {text} tiene {num_char}')
        text_list.append(text)
        aciertos += 1
    else:
        print(f'No fue correcto\n {text} tiene {len(text)} caracteres, no {num_char}')
        print(f'score final: {aciertos} aciertos')
        print(f'palabras correctas.\n {text_list}')
        break