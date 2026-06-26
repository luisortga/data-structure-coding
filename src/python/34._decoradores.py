# decorators

# Ejecutar algo antes de la funcion
import time

def decorar_saludo(func): # type: ignore
    
    def decorar():
        print("Hola, antes de la funcion")
        func()
        print("Adios, despues de la funcion")
        
    return decorar

@decorar_saludo
def decir_nombre():
    print("Mi nombre es Luis")

decir_nombre()

def cronometro(function):
    import time
    
    def decorador(*args, **kwargs):
        inicio = time.time()
        resultado = function(*args, **kwargs)
        fin = time.time()
        print(f'Tiempo de ejecucion: {fin - inicio:.4f} segundos')
        return resultado

    return decorador

@cronometro
def suma(a, b):
    time.sleep(1)
    return a+b

print(suma(5, 10))