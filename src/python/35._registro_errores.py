from pathlib import Path

class EdadInvalidaError(Exception):
    """
        Clase de tipo excepcion
    """
    pass
# end class

@staticmethod
def data_global() -> str:
    error_messages: str = "El usuario no puede registrarse es menor de edad"
    return error_messages
    
def registrar_user(name: str, age: int) -> str:
    if age < 18:
        raise EdadInvalidaError(data_global())
    
    return f'Se registro exitosamente {name}'
    

if __name__ == "__main__":
    
    path = Path("python/registros.txt")
    try:
        with path.open("a", encoding="utf-8") as archivo:
            archivo.write(registrar_user("joseph", 12))
            archivo.write("\n") # saltos de linea
               
    except EdadInvalidaError as e:
        print(f'Error personalizado en produccion: {e}')