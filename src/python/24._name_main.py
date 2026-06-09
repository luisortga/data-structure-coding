import currently

print(f'El name dice: {__name__}')


if __name__ == '__main__':

    print('is fine')

    etiquetas = ["par" if x % 2 == 0 else "impar" for x in range(6)]
    print(etiquetas)