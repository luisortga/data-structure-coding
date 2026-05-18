# Clase con instancia interna

class Coche:
    def __init__(self, marca: str, color: str):
        self.brand = marca
        self.color = color
        self.parked = False

    def __repr__(self) -> str :
        estado = "estacionado" if self.parked else "en camino a estacionarse"
        return f"Coche ({self.brand}, {self.color}) - {estado}"

    def info(self) -> None :
        self.parked = True
        print(f' 🐸 {self.brand} se ha estacionado.')

        print('Coches estacionados')

    def show_parking(self) :
        self.info()
        # Instancia de objetos de la misma clase
        coche_vecino = Coche('Koenigsegg', 'blanco')
        coche_vecino_two = Coche('Rimac', 'azul')
        coche_vecino_three = Coche('Lamborghini', 'verde')

        coche_vecino.parked = True
        coche_vecino_two.parked = True
        coche_vecino_three.parked = True
        estacionamiento: list[Coche] = [self, coche_vecino, coche_vecino_two, coche_vecino_three]
        for coche in estacionamiento:
            print(f'    - {coche}')
        
        return estacionamiento


# main
if __name__ == "__main__":

    coche_main = Coche('McLaren', 'morado')
    lugares: list[Coche] = coche_main.show_parking()
