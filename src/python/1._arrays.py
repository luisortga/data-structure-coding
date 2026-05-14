""" Estructura de datos
 Array """

# Creación del array de autos
autos = ["Cadillac", "Nissan", "Porsche", "Mini", "Lamborghini"]

# acceso por posicion
print(autos[2])

# agregar al final (rápido)
autos.append("Kia")
print(autos)

# insertar en medio (tardado) recorrido
autos.insert(1, "Land Rover")
print(autos)