# after one month return with python

for _ in range(6):
    print('waiting...')
    
first: int = 4
final: int = 16
step: int = 2

for i in range(first, final, step):
    print(i)
    
# set

data_center: set[int] = {12, 16, 14, 2, 6, 24}
print(data_center)

# funcion que retorna un set con los argumentos que se le pasen
def back_sets(*args: int) -> set[int]:
    surf: set[int] = {0}
    for i in range(0, len(args)):
        surf.add(args[i])

    return surf

first_set = back_sets(1, 24, 6, 12, 36)
print(first_set)

# continue ...