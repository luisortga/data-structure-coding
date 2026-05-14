# Estructura de datos
# Stack (Pila)
# LIFO (Last In First Out) - El último en entrar es el primero en salir

pila: list[str] = []

# apilamos elementos
pila.append("Escribir un libro")
pila.append("Escribir el encabezado")
pila.append("Escribir Hola")
pila.append("Escribir este es")
pila.append("Escribir mi primer libro")

# sacamos elementos de arriba
accion: str = pila.pop()
print(accion)  # Escribir mi primer libro

# siguiente elemento
accion = pila.pop()
print(accion)  # Escribir este es
