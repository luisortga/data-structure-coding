# uso de static

class Fixed:
    
    time: int = 0
    count: int = 0
    def __init__(self) -> None:
        pass

    def __repr__(self) -> str:
        return 'Clases estaticas y fijadas'
    
    @staticmethod
    def greeting() -> None:
        print(f'Hello is call {Fixed.time} time')

    @staticmethod
    def contador() -> int:
        Fixed.count += 1
        return Fixed.count
    
    def inesperado(self, declaracion: str) -> None:
        if (declaracion in 'Error'):
            raise ValueError('Divisor error zero')
        else:
            print('Ejecucion terminada con exito.\n')
 

# main:
if __name__ == "__main__":
    # metodos estaticos
    Fixed.greeting()
    print(Fixed.contador()) # 1
    Fixed.contador() # 2
    Fixed.contador() # 3
    print(Fixed.contador()) # 4

    # Object
    carpeta = Fixed()
    carpeta.inesperado('Correcto')