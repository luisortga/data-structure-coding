# Estructura de datos
# Queue (Cola)

queue: list[str] = []

# agregamos al final (enqueue)
queue.append("pikachu")
queue.append("Bulbasaur")
queue.append("Charmander")

print(queue)

# sacar del principio
siguiente: str = queue.pop(0)
print(f"Siguiente en salir: {siguiente}")
print(queue)

# siguiente en cola
siguiente = queue.pop(0)
print(f"Siguiente en salir: {siguiente}")
print(queue)