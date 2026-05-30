# @orteg
import asyncio

async def greeting(name: str, times: float):
    print(f'Bienvenido {name}')
    await asyncio.sleep(times)
    # pausando ejecución
    print(f'Terminado, adios {name}')

async def runnable(brand: str, times: float):
    print(f'coche {brand} en espera para correr')
    await asyncio.sleep(times)
    print(f'{brand} encendido.')

async def main():
    await greeting('luis', 16)
    await greeting('joseph', 24)
    await runnable('koenigsegg', 48)
    await runnable('rimac', 46)

# Ejecutar el even loop
asyncio.run(main())