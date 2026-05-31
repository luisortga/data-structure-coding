# 

def es_primo(list_num: list[int]):
    pass

price_list: list[int] = [12, 24, 36, 46, 56, 82, 62, 66, 68, 112]
prices_iva: list[float | int] = [precio*1.16 if precio >= 50 else precio for precio in price_list]