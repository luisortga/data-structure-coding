# Estructura de datos
# Hash Table (Tabla Hash)

# email -> datos del usuario
usuarios: dict[str, dict[str, str | int]] = {
    "luis@gmail.com": {
        "nombre": "Luis",
        "apellido": "Ortega",
        "edad": 27
    },
    "anahi@gmail.com": {
        "nombre": "Anahi",
        "apellido": "Garcia",
        "edad": 21
    }
}

# Acceder a los datos de un usuario
print(usuarios["anahi@gmail.com"])

# Agregar un nuevo usuario
usuarios.update({
    "joseph@gmail.com": {
        "nombre": "Joseph",
        "apellido": "",
        "edad": 16
    }
})

print(usuarios)

# contar palabras
def contar_palabras(texto: str) -> dict[str, int]:
    palabras = texto.split()
    conteo: dict[str, int] = {}
    for palabra in palabras:
        if palabra in conteo:
            conteo[palabra] += 1
        else:
            conteo[palabra] = 1
    return conteo

texto = "hola mundo hola"
resultado = contar_palabras(texto)
print(resultado)