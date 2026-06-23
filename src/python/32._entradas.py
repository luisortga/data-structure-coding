numero: str | int = input('Ingrese un numero y te dire si es par o inpar:\n')

numero = int(numero)
if numero % 2 == 0:
    print(f'El numero {numero} es par')
elif numero == 24:
    print('kobe bryant')
else:
    print(f'El numero {numero} es inpar')
    

# new usuarios confirmados

users_no_confirmados = ['luis', 'angel', 'daniel']
users_confirmados = []

# remove code

class Padre:
    def inicializar(self):
        self.nombre = "Juan"
        self.edad = 30
        
    def mostrar_info(self):
        print(f"Nombre: {self.nombre}, Edad: {self.edad}")

class Hijo(Padre):
    def procesar(self):
        super().inicializar()  # Usa super() para llamar
        # Ahora puedo trabajar con las variables del padre
        self.edad += 5  # Modifico
        self.mostrar_info()  # La clase padre puede verlas también

h = Hijo()
h.procesar()
# Salida: Nombre: Juan, Edad: 35