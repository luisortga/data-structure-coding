bike = ['trek', 'cannodale', 'redline', 'specialized', 'xiaomi', 'xiaomi']
print(bike[0].title())
print(bike[-1].upper())

bike.append('yion') # index[6]
bike.insert(0, 'ducati')
print(bike)
bike.remove('redline')

del bike[5] # esto es nuevo

# del space & need delete

bible_bike = {}
for i in bike:
    # bible_bike = {
    #     bike[i]: 'performance',
        
    # }
    print(bike.index('trek'))
    
print(bike.count('xiaomi')) # retorna el numero que se esta xiaomi en la lista

# filtro 
# Eliminar elementos repetidos
bike_not_repeat: set[str] = set(bike)
print(bike_not_repeat)

# listas

mark = [1, 2, 4, 12, 24, 24]
result_list = list(set(mark))
print(result_list)

max_number: int = 24_000_000
print(max_number/12)

del max_number

motorcycle = ['ducati', 'suzuki', 'yamaha', 'kawasaki']

only_kawasaki: str = motorcycle.pop()
print(f'{only_kawasaki} ninja de las motocicletas mas veloces del planeta.')

regalos_2026 = ['ducati']

# nueva adquisicion

regalos_2026.append('ducati')

# gif

regalos_2026.append('ducati')

# regalias

regalos_2026.append('suzuki')

print(regalos_2026)

# quitar ducati

for _ in range(0, regalos_2026.count('ducati')):
    regalos_2026.remove('ducati')

print(regalos_2026)

autos = ['audi', 'bmw', 'subaru', 'toyota']

autos_temp_ordenados = sorted(autos)

autos.sort(reverse=True) # ordenamiento inverso de la lista
print(autos)

print(len(autos))

see_world = ['tokio', 'new york', 'toronto', 'inglaterra', 'noruega', 'alemania']
print(see_world)
print(sorted(see_world)) # ver lista ordenada

print(see_world)

print(sorted(see_world, reverse=True)) # ver lista en orden inverso

print(see_world)

see_world.sort()
print(see_world)
see_world.sort(reverse=True)

print(see_world)

magos = ['luis', 'angel', 'daniel']
for mago in magos:
    print(f'{mago}: great trick of magic')