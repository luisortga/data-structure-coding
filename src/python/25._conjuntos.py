# Conjuntos
# no se puede repetir (hash)
# Set, 

def starts_structure() -> None:
    conjunto = set([1, 2])
    print(conjunto)
    print(set((5, 2, 5, 1, 1.5)))
    print(set('luis'))

    # Elimina elementos repetidos de la secuencia
    conjunto.add(16)
    print(conjunto)

    conjunto_2 = set([24, 1, 2, 12, 36])
    conjunto_3 = set([16, 86, 5, 7, 3])
    print(conjunto, conjunto_2, conjunto_3)

    # intersection
    print(conjunto_2 & conjunto)  # intersección
    print(conjunto_2 - conjunto) # diferencia
    print(conjunto_2 ^ conjunto) # diferencia simétrica
    print(conjunto_2 | conjunto) # union
    print(conjunto_2 >= conjunto) # superconjunto
    print(conjunto_2 <= conjunto) # subconjunto    


def contrac() -> None:
    registros = {
        'luis': 28,
        'moni': 19,
        'joseph': 12
        
    }
    
    edades = [x*2 for x in range(0, 16) if x >= 6]
    count = {k: v*2 for k, v in registros.items()} # copiar un diccionario y multiplicar los valores
    print(edades)
    print(count)
    # print()
    
def conjuntos() -> None:
    firts = set([1, 2, 3, 2])
    second = set([3, 4, 5])
    thrid = set([5, 6, 7])
    full = firts, second, thrid
    print(firts, second, thrid)
    print(full)
    
    # Eliminar duplicados
    
    lista_date = [12, 24, 36, 12, 8, 8, 24]
    date_clear = set(lista_date)
    print(date_clear)
    
    # comparison
    
    print('intersección: &')
    print(firts & second) # 3, solo muestra los valores que coincide
    print('union: |')
    print(firts | second) # 1, 2, 3, 4, 5, une todos los valores no repetidos
    print('diferencia: -')
    print(firts - second) # 1, 2, muestra los valores de firts que no se repiten en second
    print('diferencia: -')
    print(second - firts) # 4, 5, muestra los valores de second que no se repiten en firts
    print('diferencia simetrica: ^')
    print(firts^second) # 1, 2, 4, 5 muestra los numeros que no se repiten entre los dos conjuntos
    print('superconjunto: >=')
    print(firts>=second) #  bool: True or False, 
    print('subconjunto: <=')
    print(firts<=second) #  bool: True or False, 
    

# contrac()
conjuntos()